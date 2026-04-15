import { Section } from "@/components/dev/ui/Section";
import { GlowButton } from "@/components/dev/ui/GlowButton";
import { WhatsAppButton } from "@/components/dev/ui/WhatsAppButton";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Diseño Web CDMX | Páginas Web Profesionales desde $4,000MXN",
  description:
    "Diseño web profesional en Ciudad de México. Entrega en 4 días, SEO incluido. Páginas web para negocios pequeños. ¡Cotiza tu proyecto ahora!",
  keywords: [
    "diseño web cdmx",
    "diseño web ciudad de méxico",
    "páginas web cdmx",
    "diseñador web méxico",
    "diseño web para negocios",
    "página web profesional méxico",
  ],
  openGraph: {
    title: "Diseño Web CDMX | Páginas Web Profesionales desde $4,000MXN",
    description:
      "Diseño web profesional en Ciudad de México. Entrega en 4 días, SEO incluido. Páginas web para negocios.",
    url: "https://enlazarte.dev/diseno-web-cdmx",
    siteName: "Enlazarte",
    locale: "es_MX",
    type: "website",
  },
};

const benefits = [
  {
    title: "Entrega en 4 días",
    description: "No necesitas esperar semanas. Tu sitio web listo en tiempo récord.",
  },
  {
    title: "Solo pagas si estás satisfecho",
    description: "Sin riesgos. Emites factura solo cuando confirmas que el resultado cumple tus expectativas.",
  },
  {
    title: "SEO incluido",
    description: "Tu página web optimizada para aparecer en Google desde el primer día.",
  },
  {
    title: "Precios accesibles",
    description: "Desde $4,000MXN. Diseño profesional sin soar tu presupuesto.",
  },
];

const plans = [
  {
    name: "Plan Básico",
    price: "$4,000 MXN",
    description: "Ideal para comenzar a darte conocer en internet",
    features: [
      "Diseño moderno y profesional",
      "Versión móvil optimizada",
      "Botón de WhatsApp integrado",
      "Formulario de contacto",
      "Entrega en 4 días",
      "1 revisión incluida",
    ],
    highlighted: true,
  },
  {
    name: "Plan Avanzado",
    price: "Desde $20,000 MXN",
    description: "Solución completa para negocios que crecen",
    features: [
      "Todo lo del plan básico",
      "Sistema de citas/reservas",
      "Login / área privada",
      "SEO optimizado",
      "Branding personalizado",
      "Integraciones (pagos, CRM)",
      "Animaciones avanzadas",
      "Múltiples revisiones",
      "Soporte prioritario",
    ],
    highlighted: false,
  },
];

export default function DisenoWebCDMXPage() {
  return (
    <main className="min-h-screen bg-black">
      <WhatsAppButton />
      <section className="relative py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#00B4D8]/10 via-black to-[#7B2CBF]/10" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(0,180,216,0.15),_transparent_50%)]" />
        <Section className="relative">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-[#00B4D8] tracking-[0.3em] uppercase text-sm mb-4">
              Diseño Web en CDMX
            </p>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Diseño Web Profesional en{" "}
              <span className="text-[#00B4D8]">Ciudad de México</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Creamos páginas web que generan clientes. Diseño profesional,
              entrega rápida y precios accesibles.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <GlowButton href="#contacto">Obtener mi página web</GlowButton>
              <GlowButton href="#planes" variant="secondary">
                Ver precios
              </GlowButton>
            </div>
          </div>
        </Section>
      </section>

      <Section id="beneficios">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            ¿Por qué elegirnos?
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Mi propuesta de valor: resultados rápidos, sin riesgos y adaptados a tu
            presupuesto.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-[#00B4D8]/50 transition-all duration-300"
            >
              <h3 className="text-lg font-semibold text-white mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-400 text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="planes">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Planes a tu medida
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Elige el plan que mejor se adapte a tus necesidades. Ambos incluyen
            atención personalizada.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white/5 border rounded-2xl p-8 ${
                plan.highlighted
                  ? "border-[#00B4D8] relative"
                  : "border-white/10"
              } ${plan.highlighted ? "ring-2 ring-[#00B4D8]/30" : ""}`}
            >
              {plan.highlighted && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#00B4D8] text-black text-xs font-bold px-3 py-1 rounded-full">
                  RECOMENDADO
                </span>
              )}
              <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
              <p className="text-3xl font-bold text-[#00B4D8] mb-2">{plan.price}</p>
              <p className="text-gray-400 text-sm mb-6">{plan.description}</p>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-[#00B4D8] mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <GlowButton
                href="#contacto"
                variant={plan.highlighted ? "primary" : "secondary"}
                className="w-full"
              >
                Seleccionar plan
              </GlowButton>
            </div>
          ))}
        </div>
      </Section>

      <Section id="contacto" className="text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            ¿Comenzamos?
          </h2>
          <p className="text-gray-400 mb-8">
            Puedo empezar hoy mismo. Cuéntame sobre tu proyecto y hagamos
            realidad tu presencia digital.
          </p>
          <GlowButton href="https://wa.me/525624341903" external>
            Iniciar ahora
          </GlowButton>
          <p className="text-gray-500 text-sm mt-4">
            Respuesta en menos de 24 horas · Sin compromiso
          </p>
        </div>
      </Section>
    </main>
  );
}