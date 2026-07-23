"use client";

import { useState, useRef } from "react";
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

type Step = "form" | "code" | "success";

export function ContactForm() {
  const [step, setStep] = useState<Step>("form");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const codeRefs = useRef<(HTMLInputElement | null)[]>([]);
  const formDataRef = useRef<ContactFormData | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormData>({
    defaultValues: { service: "web-basic" },
  });

  const onFormSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setError("");

    try {
      const res = await fetch("/api/verify-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: data.email }),
      });

      if (res.ok) {
        formDataRef.current = data;
        setStep("code");
      } else {
        const body = await res.json();
        setError(body.error || "Error al enviar código de verificación");
      }
    } catch {
      setError("Error de conexión. Intenta de nuevo.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCodeChange = (index: number, value: string) => {
    if (!/^\d*$/.test(value)) return;

    const newCode = [...code];
    newCode[index] = value.slice(-1);
    setCode(newCode);

    if (value && index < 5) {
      codeRefs.current[index + 1]?.focus();
    }
  };

  const handleCodeKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      codeRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pasted = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, 6);
    const newCode = pasted.split("").concat(Array(6).fill("")).slice(0, 6);
    setCode(newCode);
    codeRefs.current[Math.min(pasted.length, 5)]?.focus();
  };

  const onCodeSubmit = async () => {
    const fullCode = code.join("");
    if (fullCode.length !== 6) {
      setError("Ingresa los 6 dígitos del código");
      return;
    }

    setIsSubmitting(true);
    setError("");

    try {
      const res = await fetch("/api/verify-email/confirm", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: formDataRef.current?.email, code: fullCode }),
      });

      if (res.ok) {
        const leadRes = await fetch("/api/leads", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formDataRef.current),
        });

        if (leadRes.ok) {
          setStep("success");
        } else {
          setError("Error al enviar mensaje. Intenta de nuevo.");
        }
      } else {
        const body = await res.json();
        setError(body.error || "Código incorrecto");
      }
    } catch {
      setError("Error de conexión. Intenta de nuevo.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResendCode = async () => {
    if (!formDataRef.current?.email) return;
    setIsSubmitting(true);
    setError("");
    setCode(["", "", "", "", "", ""]);

    try {
      await fetch("/api/verify-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: formDataRef.current.email }),
      });
    } catch {
      // silently fail
    } finally {
      setIsSubmitting(false);
    }
  };

  if (step === "success") {
    return (
      <div className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center">
        <div className="w-16 h-16 bg-[#00B4D8]/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-[#00B4D8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-white mb-2">¡Mensaje enviado!</h3>
        <p className="text-gray-400 mb-4">Tu correo ha sido verificado. Te contactaré en menos de 24 horas.</p>
        <GlowButton onClick={() => { setStep("form"); setCode(["", "", "", "", "", ""]); }} variant="secondary">
          Enviar otro mensaje
        </GlowButton>
      </div>
    );
  }

  if (step === "code") {
    return (
      <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-[#00B4D8]/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-[#00B4D8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-white mb-2">Verifica tu correo</h3>
          <p className="text-gray-400 text-sm">
            Enviamos un código de 6 dígitos a <span className="text-white">{formDataRef.current?.email}</span>
          </p>
        </div>

        <div className="flex justify-center gap-3 mb-6">
          {code.map((digit, i) => (
            <input
              key={i}
              ref={(el) => { codeRefs.current[i] = el; }}
              type="text"
              inputMode="numeric"
              maxLength={1}
              value={digit}
              onChange={(e) => handleCodeChange(i, e.target.value)}
              onKeyDown={(e) => handleCodeKeyDown(i, e)}
              onPaste={i === 0 ? handlePaste : undefined}
              className="w-12 h-14 text-center text-xl font-bold bg-white/5 border border-white/10 rounded-lg text-white focus:border-[#00B4D8] focus:outline-none transition-colors"
            />
          ))}
        </div>

        {error && <p className="text-red-400 text-sm text-center mb-4">{error}</p>}

        <div className="space-y-3">
          <GlowButton onClick={onCodeSubmit} className="w-full" disabled={isSubmitting || code.join("").length !== 6}>
            {isSubmitting ? "Verificando..." : "Verificar código"}
          </GlowButton>

          <div className="flex items-center justify-between text-sm">
            <button
              onClick={() => { setStep("form"); setCode(["", "", "", "", "", ""]); setError(""); }}
              className="text-gray-400 hover:text-white transition-colors"
            >
              ← Volver al formulario
            </button>
            <button
              onClick={handleResendCode}
              disabled={isSubmitting}
              className="text-[#00B4D8] hover:text-[#00B4D8]/80 transition-colors disabled:opacity-50"
            >
              Reenviar código
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onFormSubmit)} className="space-y-6">
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
        {isSubmitting ? "Enviando código..." : "Enviar mensaje"}
      </GlowButton>

      {error && <p className="text-red-400 text-center text-sm">{error}</p>}
    </form>
  );
}
