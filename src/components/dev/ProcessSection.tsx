import Link from "next/link";
import { Section } from "./ui/Section";
import { GlowButton } from "./ui/GlowButton";

const steps = [
  {
    day: "Día 1",
    title: "Definimos tu proyecto",
    description:
      "Recopilamos la información clave: objetivos, contenido y estilo. Te guío para que todo sea rápido y sin complicaciones.",
  },
  {
    day: "Día 2-3",
    title: "Diseño y desarrollo",
    description:
      "Creo tu sitio web mientras te mantengo informado. Puedes ver avances y dar feedback en todo momento.",
  },
  {
    day: "Día 4",
    title: "Revisión y entrega",
    description:
      "Ajustamos los últimos detalles y te entrego tu web lista para usar, atraer clientes y crecer.",
  },
];

export function ProcessSection() {
  return (
    <Section id="proceso">
      <div className="text-center mb-16">
        <Link href="/proceso" className="text-[#00B4D8] tracking-[0.3em] uppercase text-sm mb-4 hover:underline">
          Proceso
        </Link>

        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Tu web lista en días, no en meses
        </h2>

        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Un proceso simple, rápido y transparente. Tú te enfocas en tu negocio, yo me encargo de todo lo técnico.
        </p>
      </div>

      <div className="relative">
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-linear-to-b from-[#00B4D8] to-[#7B2CBF] hidden md:block" />

        <div className="space-y-12 md:space-y-0">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`relative md:flex md:items-center md:justify-between ${
                index !== steps.length - 1 ? "md:mb-12" : ""
              }`}
            >
              <div
                className={`md:w-[calc(50%-2rem)] ${
                  index % 2 === 0
                    ? "md:text-right md:pr-12"
                    : "md:order-3 md:pl-12"
                }`}
              >
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-[#00B4D8]/50 transition-all duration-300">
                  <div className="text-[#00B4D8] text-sm font-medium mb-2">
                    {step.day}
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2">
                    {step.title}
                  </h3>

                  <p className="text-gray-400">{step.description}</p>
                </div>
              </div>

              <div className="hidden md:flex md:flex-col md:items-center md:order-2 md:w-16">
                <div className="w-4 h-4 rounded-full bg-[#00B4D8] shadow-[0_0_20px_rgba(0,180,216,0.5)]" />
              </div>

              <div className="md:w-[calc(50%-2rem)] md:order-1" />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16 bg-linear-to-r from-[#00B4D8]/10 to-[#7B2CBF]/10 border border-white/10 rounded-2xl p-8 text-center">
        <p className="text-2xl text-white font-medium mb-2">
          En 4 días puedes tener tu web funcionando
        </p>

        <p className="text-gray-400 mb-6">
          Sin procesos complicados ni tiempos largos. Rápido, claro y enfocado en resultados.
        </p>

        <GlowButton href="#contacto">
          Quiero mi web en pocos días
        </GlowButton>
      </div>
    </Section>
  );
}