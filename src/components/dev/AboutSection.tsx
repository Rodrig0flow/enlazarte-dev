import Image from "next/image";
import { Section } from "./ui/Section";

export function AboutSection() {
  return (
    <Section withGradient>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-[#00B4D8] tracking-[0.3em] uppercase text-sm mb-4">
            Sobre mí
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Rodrigo Flores
          </h2>
          <div className="space-y-4 text-gray-400">
            <p className="text-lg">
              <span className="text-white font-medium">
                Ingeniero en Sistemas de Software
              </span>{" "}
              con enfoque en desarrollo web y diseño visual.
            </p>
            <p>
              Creo firmemente en el equilibrio perfecto entre funcionalidad,
              estética y experiencia de usuario. Cada proyecto es una oportunidad
              para crear algo que no solo se vea bien, sino que realmente funcione
              y conecte con las personas.
            </p>
            <p>
              Mi filosofía de trabajo se basa en la transparencia, la
              comunicación constante y la entrega de resultados que superen
              expectativas.
            </p>
          </div>
        </div>

        <div className="relative">
          <div className="aspect-square rounded-2xl overflow-hidden border border-white/10 relative">
            <Image
              src="/FotoSD.png"
              alt="Rodrigo Flores"
              fill
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[#00B4D8] rounded-full blur-[80px] opacity-30" />
        </div>
      </div>
    </Section>
  );
}
