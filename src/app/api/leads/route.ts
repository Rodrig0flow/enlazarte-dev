import { NextResponse } from "next/server";
import { z, ZodError } from "zod";
import { prisma } from "@/lib/prisma";

const leadSchema = z.object({
  name: z.string().min(1, "El nombre es requerido"),
  email: z.string().email("Email inválido"),
  phone: z.string().optional(),
  service: z.string().default("web-basic"),
  message: z.string().optional(),
  budget: z.string().optional(),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const data = leadSchema.parse(body);

    const lead = await prisma.lead.create({
      data: {
        name: data.name,
        email: data.email,
        phone: data.phone,
        service: data.service,
        message: data.message,
        budget: data.budget,
      },
    });

    return NextResponse.json({ success: true, lead });
  } catch (error) {
    if (error instanceof ZodError) {
      const firstError = error.issues[0];
      return NextResponse.json(
        { success: false, error: firstError?.message || "Validation error" },
        { status: 400 }
      );
    }
    console.error("Lead creation error:", error);
    return NextResponse.json(
      { success: false, error: "Error al crear lead" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const leads = await prisma.lead.findMany({
      orderBy: { createdAt: "desc" },
    });
    return NextResponse.json({ success: true, leads });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Error al obtener leads" },
      { status: 500 }
    );
  }
}
