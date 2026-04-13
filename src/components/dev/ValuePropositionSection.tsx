import { Section } from "./ui/Section";

const values = [
  {
    title: "Solo pagas si estás satisfecho",
    description:
      "No hay riesgos para ti. Solo emitimos la factura cuando confirmas que el resultado cumple tus expectativas.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
  },
  {
    title: "Sin riesgo",
    description:
      "Trabajo con transparencia en cada paso. Si algo no funciona como esperas, ajustamos hasta que esté perfecto.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
  },
  {
    title: "Propuesta funcional en pocos días",
    description:
      "No necesitas esperar semanas. En 4 días tienes una propuesta tangible que puedes usar y probar.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
];

export function ValuePropositionSection() {
  return (
    <Section withGradient>
      <div className="text-center mb-16">
        <p className="text-[#00B4D8] tracking-[0.3em] uppercase text-sm mb-4">
          Por qué elegirme
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Propuesta de valor
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Tu satisfacción es mi prioridad. Trabajar conmigo es sencillo, sin
          complicaciones ni sorpresas.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {values.map((value, index) => (
          <div
            key={index}
            className="group text-center bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-[#00B4D8]/50 transition-all duration-300 hover:-translate-y-1"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#00B4D8]/10 text-[#00B4D8] mb-6 group-hover:bg-[#00B4D8]/20 transition-colors">
              {value.icon}
            </div>
            <h3 className="text-xl font-bold text-white mb-3">
              {value.title}
            </h3>
            <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
              {value.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
