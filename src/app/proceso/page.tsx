import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/dev/ui/Section";
import { GlowButton } from "@/components/dev/ui/GlowButton";

export const metadata: Metadata = {
  title: "Proceso | Enlazarte",
  description:
    "Descubre cómo trabajo para crear tu sitio web profesional en solo 4 días. Un proceso simple, rápido y transparente.",
};

const steps = [
  {
    day: "Día 1",
    title: "Definimos tu proyecto",
    description:
      "Recopilamos la información clave: objetivos, contenido y estilo. Te guío para que todo sea rápido y sin complicaciones.",
    details: [
      "Entrevista inicial para entender tu negocio y objetivos",
      "Definición de estructura y contenido",
      "Selección de estilo visual y colores",
      "Planificación del proyecto",
    ],
  },
  {
    day: "Día 2-3",
    title: "Diseño y desarrollo",
    description:
      "Creo tu sitio web mientras te mantengo informado. Puedes ver avances y dar feedback en todo momento.",
    details: [
      "Diseño inicial según tu estilo",
      "Desarrollo técnico optimizado",
      "Optimización para móviles",
      "Revisiones y ajustes",
    ],
  },
  {
    day: "Día 4",
    title: "Revisión y entrega",
    description:
      "Ajustamos los últimos detalles y te entrego tu web lista para usar, atraer clientes y crecer.",
    details: [
      "Revisión final contigo",
      "Ajustes finales",
      "Entrega de tu web",
      "Tutorial de uso",
    ],
  },
];

export default function ProcesoPage() {
  return (
    <main className="min-h-screen bg-black pt-20">
      <Section>
        <div className="text-center mb-16">
          <p className="text-[#00B4D8] tracking-[0.3em] uppercase text-sm mb-4">
            Proceso
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Tu web lista en días, no en meses
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Un proceso simple, rápido y transparente. Tú te enfocas en tu negocio, yo me encargo de todo lo técnico.
          </p>
        </div>

        <div className="space-y-8 max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-2xl p-8"
            >
              <div className="flex items-center gap-4 mb-4">
                <span className="text-[#00B4D8] text-sm font-medium bg-[#00B4D8]/10 px-3 py-1 rounded-full">
                  {step.day}
                </span>
                <div className="flex-1 h-px bg-white/10 hidden md:block" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">
                {step.title}
              </h3>
              <p className="text-gray-400 mb-6">{step.description}</p>
              <ul className="space-y-2">
                {step.details.map((detail, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-300">
                    <svg
                      className="w-4 h-4 text-[#00B4D8] shrink-0"
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
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-linear-to-r from-[#00B4D8]/10 to-[#7B2CBF]/10 border border-white/10 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            ¿Listo para empezar?
          </h3>
          <p className="text-gray-400 mb-6">
            En solo 4 días puedes tener tu web funcionando. Rápido, claro y enfocado en resultados.
          </p>
          <GlowButton href="#contacto">
            Quiero mi web ahora
          </GlowButton>
        </div>

        <div className="mt-12 text-center">
          <Link href="/servicios" className="text-gray-400 hover:text-[#00B4D8] transition-colors">
            ← Ver servicios
          </Link>
        </div>
      </Section>
    </main>
  );
}