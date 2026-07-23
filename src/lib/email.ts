import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

interface LeadData {
  name: string;
  email: string;
  phone: string | null;
  service: string;
  message: string | null;
  budget: string | null;
}

const serviceLabels: Record<string, string> = {
  "web-basic": "Plan Básico",
  "web-full": "Plan Avanzado",
  custom: "Personalizado",
};

const budgetLabels: Record<string, string> = {
  "under-5k": "Menos de $5,000 MXN",
  "5k-10k": "$5,000 - $10,000 MXN",
  "10k-20k": "$10,000 - $20,000 MXN",
  "20k+": "Más de $20,000 MXN",
};

export async function sendLeadNotification(lead: LeadData) {
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    console.warn("Email credentials not configured, skipping notification");
    return;
  }

  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #00B4D8;">Nuevo lead en Enlazarte.dev</h2>
      <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
        <tr>
          <td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold; color: #555;">Nombre</td>
          <td style="padding: 8px; border-bottom: 1px solid #eee; color: #333;">${lead.name}</td>
        </tr>
        <tr>
          <td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold; color: #555;">Email</td>
          <td style="padding: 8px; border-bottom: 1px solid #eee; color: #333;">${lead.email}</td>
        </tr>
        <tr>
          <td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold; color: #555;">Teléfono</td>
          <td style="padding: 8px; border-bottom: 1px solid #eee; color: #333;">${lead.phone || "No proporcionado"}</td>
        </tr>
        <tr>
          <td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold; color: #555;">Servicio</td>
          <td style="padding: 8px; border-bottom: 1px solid #eee; color: #333;">${serviceLabels[lead.service] || lead.service}</td>
        </tr>
        <tr>
          <td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold; color: #555;">Presupuesto</td>
          <td style="padding: 8px; border-bottom: 1px solid #eee; color: #333;">${budgetLabels[lead.budget || ""] || "No especificado"}</td>
        </tr>
      </table>
      ${lead.message ? `
        <div style="margin-top: 16px; padding: 16px; background: #f5f5f5; border-radius: 8px;">
          <p style="font-weight: bold; color: #555; margin: 0 0 8px 0;">Mensaje / Descripción del proyecto:</p>
          <p style="color: #333; margin: 0; white-space: pre-wrap;">${lead.message}</p>
        </div>
      ` : ""}
    </div>
  `;

  await transporter.sendMail({
    from: `"Enlazarte.dev" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_USER,
    subject: `Nuevo lead: ${lead.name}`,
    replyTo: lead.email,
    html,
  });
}

export async function sendLeadConfirmation(lead: LeadData) {
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    console.warn("Email credentials not configured, skipping confirmation");
    return;
  }

  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #00B4D8;">¡Gracias por contactarnos, ${lead.name}!</h2>
      <p style="color: #333; line-height: 1.6;">
        Hemos recibido tu mensaje y me pondré en contacto contigo en menos de 24 horas.
      </p>
      <p style="color: #333; line-height: 1.6;">
        Mientras tanto, puedes revisar nuestros servicios en
        <a href="https://enlazarte.dev/servicios" style="color: #00B4D8;">enlazarte.dev/servicios</a>.
      </p>
      <div style="margin-top: 24px; padding: 16px; background: #f5f5f5; border-radius: 8px;">
        <p style="font-weight: bold; color: #555; margin: 0 0 8px 0;">Resumen de tu consulta:</p>
        <p style="color: #333; margin: 0;">Servicio: ${serviceLabels[lead.service] || lead.service}</p>
        ${lead.message ? `<p style="color: #333; margin: 8px 0 0 0;">Mensaje: ${lead.message}</p>` : ""}
      </div>
      <p style="color: #999; font-size: 12px; margin-top: 24px;">
        — Enlazarte.dev | Desarrollo web profesional
      </p>
    </div>
  `;

  await transporter.sendMail({
    from: `"Enlazarte.dev" <${process.env.EMAIL_USER}>`,
    to: lead.email,
    subject: "¡Gracias por tu interés en Enlazarte.dev!",
    html,
  });
}
