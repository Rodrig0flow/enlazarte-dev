import { NextResponse } from "next/server";
import { z, ZodError } from "zod";
import { prisma } from "@/lib/prisma";

const schema = z.object({
  email: z.string().email(),
  code: z.string().length(6),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, code } = schema.parse(body);

    const record = await prisma.verificationCode.findFirst({
      where: { email, code },
      orderBy: { createdAt: "desc" },
    });

    if (!record) {
      return NextResponse.json(
        { success: false, error: "Código incorrecto" },
        { status: 400 }
      );
    }

    if (new Date() > record.expiresAt) {
      await prisma.verificationCode.deleteMany({ where: { email } });
      return NextResponse.json(
        { success: false, error: "Código expirado. Solicita uno nuevo." },
        { status: 400 }
      );
    }

    await prisma.verificationCode.deleteMany({ where: { email } });

    return NextResponse.json({ success: true });
  } catch (error) {
    if (error instanceof ZodError) {
      return NextResponse.json(
        { success: false, error: "Datos inválidos" },
        { status: 400 }
      );
    }
    console.error("Verify confirm error:", error);
    return NextResponse.json(
      { success: false, error: "Error al verificar código" },
      { status: 500 }
    );
  }
}
