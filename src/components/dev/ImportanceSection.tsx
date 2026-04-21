import { Section } from "./ui/Section";
import { GlowButton } from "./ui/GlowButton";

const stats = [
  {
    percentage: "75%",
    description: "de las personas juzgan tu negocio por tu sitio web",
  },
  {
    percentage: "80%",
    description: "investiga online antes de tomar una decisión",
  },
  {
    percentage: "+40%",
    description: "más probabilidades de conseguir clientes con una web profesional",
  },
];

export function ImportanceSection() {
  return (
    <Section>
      <div className="text-center mb-16">
        <p className="text-[#00B4D8] tracking-[0.3em] uppercase text-sm mb-4">
          Por qué necesitas una web profesional
        </p>

        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Si no tienes una buena web,
          <br />
          estás perdiendo clientes
        </h2>

        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Hoy, la mayoría de las decisiones empiezan en internet. Tu sitio web puede ser la razón por la que te eligen… o por la que te descartan.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="group relative bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-[#00B4D8]/50 transition-all duration-300"
          >
            <div className="text-6xl md:text-7xl font-bold text-transparent bg-clip-text bg-linear-to-r from-[#00B4D8] to-[#7B2CBF] mb-4">
              {stat.percentage}
            </div>
            <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
              {stat.description}
            </p>
          </div>
        ))}
      </div>

      <p className="text-xs text-gray-500 mt-6 text-center">
        Datos basados en estudios de comportamiento digital
      </p>

      <div className="mt-16 bg-linear-to-r from-[#00B4D8]/10 to-[#7B2CBF]/10 border border-white/10 rounded-2xl p-8 text-center">
        <p className="text-xl text-white mb-2">
          Tu web puede hacerte crecer… o hacerte invisible
        </p>

        <p className="text-gray-400">
          No se trata solo de estar online. Se trata de generar confianza, diferenciarte y convertir visitas en clientes reales.
        </p>

        <div className="mt-8">
          <GlowButton href="#contacto">
            Quiero una web que sí funcione
          </GlowButton>
        </div>
      </div>
    </Section>
  );
}