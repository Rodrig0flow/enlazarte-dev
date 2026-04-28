const axios = require('axios');

const WHATSAPP_API_URL = process.env.WHATSAPP_API_URL || 'https://graph.facebook.com/v18.0';

class WhatsAppService {
  constructor() {
    this.phoneNumberId = process.env.PHONE_NUMBER_ID;
    this.accessToken = process.env.ACCESS_TOKEN;
  }

  async sendMessage(to, text) {
    const url = `${WHATSAPP_API_URL}/${this.phoneNumberId}/messages`;

    try {
      const response = await axios.post(
        url,
        {
          messaging_product: 'whatsapp',
          to: to,
          text: { body: text },
        },
        {
          headers: {
            Authorization: `Bearer ${this.accessToken}`,
            'Content-Type': 'application/json',
          },
        }
      );

      console.log('Message sent:', response.data);
      return response.data;
    } catch (error) {
      console.error('Error sending message:', {
        status: error.response?.status,
        data: error.response?.data,
        url: url
      });
      throw error;
    }
  }

  async sendTemplateMessage(to, templateName, components = []) {
    const url = `${WHATSAPP_API_URL}/${this.phoneNumberId}/messages`;

    try {
      const response = await axios.post(
        url,
        {
          messaging_product: 'whatsapp',
          to: to,
          template: {
            name: templateName,
            language: { code: 'es_MX' },
            components: components,
          },
        },
        {
          headers: {
            Authorization: `Bearer ${this.accessToken}`,
            'Content-Type': 'application/json',
          },
        }
      );

      console.log('Template message sent:', response.data);
      return response.data;
    } catch (error) {
      console.error('Error sending template:', error.response?.data || error.message);
      throw error;
    }
  }

  extractMessageData(webhookBody) {
    const entry = webhookBody.entry?.[0];
    const changes = entry?.changes?.[0];
    const value = changes?.value;

    return {
      messages: value?.messages || [],
      contacts: value?.contacts || [],
      statuses: value?.statuses || [],
    };
  }

  getSenderInfo(message, contact) {
    return {
      from: message?.from,
      name: contact?.profile?.name || 'Usuario',
      msgBody: message?.text?.body || '',
      type: message?.type,
    };
  }
}

module.exports = new WhatsAppService();