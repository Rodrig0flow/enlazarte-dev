import { Section } from "./ui/Section";
import { GlowButton } from "./ui/GlowButton";
import { LiquidMetalJaguar } from "./ui/IridescentIcon";

export function FinalCTASection() {
  return (
    <Section id="contacto">
      <div className="text-center">
        <div className="inline-block mb-6">
          <LiquidMetalJaguar size={120} duration={8} />
        </div>

        <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
          ¿Comenzamos?
        </h2>

        <p className="text-xl text-gray-400 mb-8 max-w-xl mx-auto">
          Puedo empezar hoy mismo. Cuéntame sobre tu proyecto y hagamos
          realidad tu presencia digital.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <GlowButton href="https://wa.me/525624341903">
            Iniciar ahora
          </GlowButton>
          <GlowButton href="#servicios" variant="secondary">
            Ver planes
          </GlowButton>
        </div>

        <p className="mt-12 text-gray-500 text-sm">
          Respuesta en menos de 24 horas · Sin compromiso
        </p>
      </div>
    </Section>
  );
}
