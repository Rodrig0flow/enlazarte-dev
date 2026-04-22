import Image from "next/image";
import { Section } from "./ui/Section";

export function AboutSection() {
  return (
    <Section id="acerca" withGradient>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-[#00B4D8] tracking-[0.3em] uppercase text-sm mb-4">
            Sobre mí
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Desarrollo webs que realmente generan resultados
          </h2>

          <div className="space-y-4 text-gray-400">
            <p className="text-lg">
              Soy <span className="text-white font-medium">Rodrigo Flores</span>, 
              Ingeniero en Sistemas de Software especializado en desarrollo web moderno.
            </p>

            <p>
              Ayudo a emprendedores y negocios a tener una presencia digital profesional 
              que no solo se vea bien, sino que genere confianza y atraiga clientes.
            </p>

            <p>
              Mi enfoque combina tecnología, diseño y estrategia para crear sitios web 
              rápidos, funcionales y alineados con los objetivos de cada cliente.
            </p>

            <p>
              Trabajo de forma cercana y personalizada, entendiendo tu negocio para 
              construir una solución que realmente aporte valor.
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