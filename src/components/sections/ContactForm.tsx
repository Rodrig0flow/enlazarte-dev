"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { GlowButton } from "../dev/ui/GlowButton";

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  budget: string;
}

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    defaultValues: {
      service: "web-basic",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitStatus("success");
        reset();
      } else {
        setSubmitStatus("error");
      }
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitStatus === "success") {
    return (
      <div className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center">
        <div className="w-16 h-16 bg-[#00B4D8]/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-[#00B4D8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-white mb-2">¡Mensaje enviado!</h3>
        <p className="text-gray-400 mb-4">Te contactaré en menos de 24 horas.</p>
        <GlowButton onClick={() => setSubmitStatus("idle")} variant="secondary">
          Enviar otro mensaje
        </GlowButton>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-gray-400 text-sm mb-2">Nombre completo</label>
          <input
            {...register("name", { required: "El nombre es requerido" })}
            type="text"
            placeholder="Juan Pérez"
            className="w-full"
          />
          {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>}
        </div>
        <div>
          <label className="block text-gray-400 text-sm mb-2">Email</label>
          <input
            {...register("email", { 
              required: "Email es requerido",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Email inválido"
              }
            })}
            type="email"
            placeholder="juan@ejemplo.com"
            className="w-full"
          />
          {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-gray-400 text-sm mb-2">Teléfono (opcional)</label>
          <input
            {...register("phone")}
            type="tel"
            placeholder="+52 55 1234 5678"
            className="w-full"
          />
        </div>
        <div>
          <label className="block text-gray-400 text-sm mb-2">Servicio de interés</label>
          <select {...register("service")} className="w-full">
            <option value="web-basic">Plan Básico - $4,000 MXN</option>
            <option value="web-full">Plan Avanzado - desde $20,000 MXN</option>
            <option value="custom">Proyecto personalizado</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-gray-400 text-sm mb-2">Presupuesto aproximado (opcional)</label>
        <select {...register("budget")} className="w-full">
          <option value="">Selecciona un rango</option>
          <option value="under-5k">Menos de $5,000 MXN</option>
          <option value="5k-10k">$5,000 - $10,000 MXN</option>
          <option value="10k-20k">$10,000 - $20,000 MXN</option>
          <option value="20k+">Más de $20,000 MXN</option>
        </select>
      </div>

      <div>
        <label className="block text-gray-400 text-sm mb-2">Cuéntame sobre tu proyecto</label>
        <textarea
          {...register("message", { required: "El mensaje es requerido" })}
          rows={5}
          placeholder="Describe tu proyecto, objetivos y cualquier detalle relevante..."
          className="w-full resize-none"
        />
        {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message.message}</p>}
      </div>

      <GlowButton type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? "Enviando..." : "Enviar mensaje"}
      </GlowButton>

      {submitStatus === "error" && (
        <p className="text-red-400 text-center text-sm">Error al enviar mensaje. Intenta de nuevo.</p>
      )}
    </form>
  );
}
