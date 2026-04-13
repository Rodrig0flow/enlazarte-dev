import { Section } from "./ui/Section";

const stats = [
  {
    percentage: "75%",
    description: "juzga la credibilidad de un negocio por su sitio web",
  },
  {
    percentage: "80%",
    description: "investiga en línea antes de contratar un servicio",
  },
  {
    percentage: "+40%",
    description: "más oportunidades de conseguir nuevos clientes",
  },
];

export function ImportanceSection() {
  return (
    <Section>
      <div className="text-center mb-16">
        <p className="text-[#00B4D8] tracking-[0.3em] uppercase text-sm mb-4">
          Por qué es importante
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Tu presencia digital importa
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          En la era digital, tu sitio web es tu carta de presentación. Es la
          primera impresión que causas a tus potenciales clientes.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="group relative bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-[#00B4D8]/50 transition-all duration-300"
          >
            <div className="text-6xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00B4D8] to-[#7B2CBF] mb-4">
              {stat.percentage}
            </div>
            <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
              {stat.description}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-16 bg-gradient-to-r from-[#00B4D8]/10 to-[#7B2CBF]/10 border border-white/10 rounded-2xl p-8 text-center">
        <p className="text-xl text-white mb-2">
          Un sitio web profesional genera confianza y atrae clientes
        </p>
        <p className="text-gray-400">
          No es solo tener presencia, es destacar entre la competencia y
          transmitir profesionalismo desde el primer click.
        </p>
      </div>
    </Section>
  );
}
