import { NextResponse } from "next/server";
import { z, ZodError } from "zod";
import { prisma } from "@/lib/prisma";
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

const schema = z.object({
  email: z.string().email("Email inválido"),
});

function generateCode(): string {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email } = schema.parse(body);

    const code = generateCode();
    const expiresAt = new Date(Date.now() + 5 * 60 * 1000);

    await prisma.verificationCode.deleteMany({ where: { email } });

    await prisma.verificationCode.create({
      data: { email, code, expiresAt },
    });

    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.warn("Email not configured, skipping verification email");
      return NextResponse.json({ success: true, devCode: code });
    }

    const html = `
      <div style="font-family: Arial, sans-serif; max-width: 400px; margin: 0 auto; text-align: center;">
        <h2 style="color: #00B4D8;">Código de verificación</h2>
        <p style="color: #333;">Tu código de verificación es:</p>
        <div style="font-size: 32px; font-weight: bold; letter-spacing: 8px; color: #00B4D8; margin: 24px 0;">
          ${code}
        </div>
        <p style="color: #999; font-size: 12px;">Este código expira en 5 minutos.</p>
      </div>
    `;

    await transporter.sendMail({
      from: `"Enlazarte.dev" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Tu código de verificación - Enlazarte.dev",
      html,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    if (error instanceof ZodError) {
      return NextResponse.json(
        { success: false, error: error.issues[0]?.message || "Email inválido" },
        { status: 400 }
      );
    }
    console.error("Verification error:", error);
    return NextResponse.json(
      { success: false, error: "Error al enviar código" },
      { status: 500 }
    );
  }
}
