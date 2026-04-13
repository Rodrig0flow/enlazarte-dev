import { Section } from "./ui/Section";

const steps = [
  {
    day: "Día 1",
    title: "Definición de contenido",
    description:
      "Reunimos toda la información necesaria: textos, imágenes, preferencias de diseño y objetivos del proyecto.",
  },
  {
    day: "Día 2-3",
    title: "Diseño y desarrollo",
    description:
      "Creo el diseño y lo desarrollo. Te mantengo informado del progreso con actualizaciones diarias.",
  },
  {
    day: "Día 4",
    title: "Revisión final",
    description:
      "Presentamos el resultado final, hacemos ajustes finales y entregamos tu sitio listo para usar.",
  },
];

export function ProcessSection() {
  return (
    <Section>
      <div className="text-center mb-16">
        <p className="text-[#00B4D8] tracking-[0.3em] uppercase text-sm mb-4">
          Proceso
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Así trabajo
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Un proceso rápido, ágil y transparente. Tu proyecto en manos expertas
          en tiempo récord.
        </p>
      </div>

      <div className="relative">
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#00B4D8] to-[#7B2CBF] hidden md:block" />

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
                  index % 2 === 0 ? "md:text-right md:pr-12" : "md:order-3 md:pl-12"
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

      <div className="mt-16 bg-gradient-to-r from-[#00B4D8]/10 to-[#7B2CBF]/10 border border-white/10 rounded-2xl p-8 text-center">
        <p className="text-2xl text-white font-medium mb-2">
          4 días para tener tu sitio listo
        </p>
        <p className="text-gray-400">
          Sin largos meses de espera. Resultados rápidos sin sacrificar
          calidad.
        </p>
      </div>
    </Section>
  );
}
