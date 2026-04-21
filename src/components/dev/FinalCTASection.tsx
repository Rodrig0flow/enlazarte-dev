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
          Empieza hoy tu web que sí genera clientes
        </h2>

        <p className="text-xl text-gray-400 mb-8 max-w-xl mx-auto">
          Puedo comenzar hoy mismo. En pocos días tendrás una web profesional lista para atraer clientes y hacer crecer tu negocio.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <GlowButton href="https://wa.me/525624341903">
            Quiero mi web ahora
          </GlowButton>

          <GlowButton href="#servicios" variant="secondary">
            Ver opciones
          </GlowButton>
        </div>

        <p className="mt-12 text-gray-500 text-sm">
          Respuesta en menos de 24 horas · Sin compromiso · Sin riesgo
        </p>
      </div>
    </Section>
  );
}