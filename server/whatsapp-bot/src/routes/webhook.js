const express = require('express');
const crypto = require('crypto');
const whatsappService = require('../services/whatsapp');

const router = express.Router();

const VERIFY_TOKEN = process.env.VERIFY_TOKEN;
const APP_SECRET = process.env.APP_SECRET;

router.get('/webhook', (req, res) => {
  const mode = req.query['hub.mode'];
  const token = req.query['hub.verify_token'];
  const challenge = req.query['hub.challenge'];

  if (mode === 'subscribe' && token === VERIFY_TOKEN) {
    console.log('WEBHOOK_VERIFIED');
    res.status(200).send(challenge);
  } else {
    console.log('Webhook verification failed');
    res.sendStatus(403);
  }
});

router.post('/webhook', async (req, res) => {
  const signature = req.headers['x-hub-signature-256'];

  if (APP_SECRET && signature) {
    const expectedSignature = 'sha256=' +
      crypto
        .createHmac('sha256', APP_SECRET)
        .update(JSON.stringify(req.body))
        .digest('hex');

    if (signature !== expectedSignature) {
      console.log('Invalid signature');
      return res.sendStatus(403);
    }
  }

  const body = req.body;

  if (body.object !== 'whatsapp') {
    console.log('Not a WhatsApp event');
    return res.sendStatus(404);
  }

  res.sendStatus(200);

  try {
    await processIncomingMessage(body);
  } catch (error) {
    console.error('Error processing message:', error);
  }
});

async function processIncomingMessage(body) {
  const { messages, contacts } = whatsappService.extractMessageData(body);

  for (const message of messages) {
    const contact = contacts?.find((c) => c.wa_id === message.from);
    const sender = whatsappService.getSenderInfo(message, contact);

    console.log(`Message from ${sender.name} (${sender.from}): ${sender.msgBody}`);

    if (sender.type === 'text' && sender.msgBody) {
      await handleTextMessage(sender);
    }
  }
}

async function handleTextMessage(sender) {
  const { from, msgBody } = sender;
  const normalizedMessage = msgBody.toLowerCase().trim();

  const responses = {
    hola: '¡Hola! 👋 Gracias por escribir a Enlazarte. ¿En qué podemos ayudarte hoy?',
    ayuda: 'Claro, estoy aquí para ayudarte. ¿Tienes alguna pregunta sobre nuestros servicios de diseño web, marketing digital o branding?',
    precio: 'Para darte información sobre precios, necesito conocer más sobre tu proyecto. ¿Podrías contarnos qué tipo de servicio necesitas?',
    default: '¡Gracias por tu mensaje! Un miembro de nuestro equipo se pondrá en contacto contigo pronto. 🇲🇽🇲🇽',
  };

  let responseText = responses.default;

  if (normalizedMessage.includes('hola') || normalizedMessage.includes('hello') || normalizedMessage.includes('hi')) {
    responseText = responses.hola;
  } else if (normalizedMessage.includes('ayuda') || normalizedMessage.includes('help')) {
    responseText = responses.ayuda;
  } else if (normalizedMessage.includes('precio') || normalizedMessage.includes('costo') || normalizedMessage.includes('cuanto')) {
    responseText = responses.precio;
  }

  await whatsappService.sendMessage(from, responseText);
}

module.exports = router;