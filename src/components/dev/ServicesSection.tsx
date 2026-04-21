import { Section } from "./ui/Section";
import { GlowButton } from "./ui/GlowButton";

const basicFeatures = [
  "Diseño profesional que genera confianza",
  "Optimizado para móviles (más clientes desde celular)",
  "Botón de WhatsApp para contacto directo",
  "Formulario para captar clientes potenciales",
  "Entrega en 4 días",
  "1 revisión incluida",
];

const advancedFeatures = [
  "Todo lo del plan básico",
  "Sistema de citas o reservas automatizado",
  "Área privada / login de usuarios",
  "SEO optimizado para aparecer en Google",
  "Diseño y branding personalizado",
  "Integraciones (pagos, CRM, herramientas)",
  "Animaciones modernas y experiencia premium",
  "Múltiples revisiones",
  "Soporte prioritario",
];

export function ServicesSection() {
  return (
    <Section withGradient id="servicios">
      <div className="text-center mb-16">
        <p className="text-[#00B4D8] tracking-[0.3em] uppercase text-sm mb-4">
          Servicios
        </p>

        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Elige cómo quieres hacer crecer tu negocio
        </h2>

        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Desde una web profesional para empezar, hasta una solución completa diseñada para escalar y atraer más clientes.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        
        {/* PLAN BÁSICO */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all duration-300">
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-white mb-2">
              Web Profesional
            </h3>

            <div className="flex items-baseline gap-2">
              <span className="text-5xl font-bold text-white">$4,000</span>
              <span className="text-gray-400">MXN</span>
            </div>

            <p className="text-gray-500 mt-2">
              Ideal para empezar a generar presencia y clientes
            </p>
          </div>

          <ul className="space-y-4 mb-8">
            {basicFeatures.map((feature, index) => (
              <li key={index} className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-[#00B4D8] mt-0.5 shrink-0"
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
                <span className="text-gray-400">{feature}</span>
              </li>
            ))}
          </ul>

          <GlowButton variant="secondary" className="w-full" href="#contacto">
            Quiero empezar
          </GlowButton>
        </div>

        {/* PLAN AVANZADO */}
        <div className="relative bg-linear-to-br from-[#00B4D8]/10 to-[#7B2CBF]/10 border border-[#00B4D8]/30 rounded-2xl p-8">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#00B4D8] text-black text-xs font-bold px-4 py-1 rounded-full">
            MÁS ELEGIDO
          </div>

          <div className="mb-6">
            <h3 className="text-2xl font-bold text-white mb-2">
              Solución Completa
            </h3>

            <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
              <span className="text-3xl md:text-4xl font-bold text-white">
                Desde
              </span>
              <span className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-linear-to-r from-[#00B4D8] to-[#7B2CBF]">
                $20,000
              </span>
              <span className="text-lg text-gray-400">MXN</span>
            </div>

            <p className="text-gray-500 mt-2">
              Para negocios que quieren escalar y automatizar
            </p>
          </div>

          <ul className="space-y-4 mb-8">
            {advancedFeatures.map((feature, index) => (
              <li key={index} className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-[#00B4D8] mt-0.5 shrink-0"
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
                <span className="text-gray-300">{feature}</span>
              </li>
            ))}
          </ul>

          <GlowButton className="w-full" href="#contacto">
            Quiero escalar mi negocio
          </GlowButton>
        </div>
      </div>
    </Section>
  );
}