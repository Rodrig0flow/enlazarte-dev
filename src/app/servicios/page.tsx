import { Section } from "@/components/dev/ui/Section";
import { GlowButton } from "@/components/dev/ui/GlowButton";
import { WhatsAppButton } from "@/components/dev/ui/WhatsAppButton";

const services = [
  {
    title: "Desarrollo Web",
    description: "Sitios web modernos, responsivos y optimizados para SEO. Uso las últimas tecnologías como Next.js para garantizar rendimiento y escalabilidad.",
    features: [
      "Diseño responsive (móvil, tablet, desktop)",
      "Optimización SEO básica",
      "Rendimiento optimizado",
      "Código limpio y mantenible",
      "Integración con analytics",
    ],
  },
  {
    title: "Tienda en Línea",
    description: "E-commerce completo con pasarela de pagos, gestión de inventario y面板 de administración. Perfecto para vender tus productos las 24/7.",
    features: [
      "Catálogo de productos",
      "Pasarela de pagos Stripe",
      "Gestión de pedidos",
      "Panel de administración",
      "Notificaciones automáticas",
    ],
  },
  {
    title: "Aplicaciones Web",
    description: "Aplicaciones web personalizadas adaptadas a tus necesidades específicas. Desde dashboards hasta sistemas de gestión.",
    features: [
      "Diseño personalizado",
      "Autenticación de usuarios",
      "CRUD completo",
      "APIs personalizadas",
      "Integraciones externas",
    ],
  },
  {
    title: "Mantenimiento",
    description: "Servicio de mantenimiento continuo para tu sitio web. Actualizaciones, correcciones y mejoras continuas.",
    features: [
      "Actualizaciones de seguridad",
      "Cambios y ajustes",
      "Soporte técnico",
      "Monitoreo uptime",
      "Consultoría técnica",
    ],
  },
];

export default function ServiciosPage() {
  return (
    <main className="min-h-screen bg-black">
      <WhatsAppButton />
      <Section>
        <div className="text-center mb-16">
          <p className="text-[#00B4D8] tracking-[0.3em] uppercase text-sm mb-4">
            Servicios
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            ¿En qué puedo ayudarte?
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Ofrezco servicios de desarrollo web adaptados a tus necesidades.
            Desde un sitio web básico hasta aplicaciones complejas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-[#00B4D8]/50 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-gray-400 mb-6">{service.description}</p>
              <ul className="space-y-3 mb-6">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
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
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <GlowButton href="#contacto" variant="secondary" className="w-full">
                Solicitar información
              </GlowButton>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-linear-to-r from-[#00B4D8]/10 to-[#7B2CBF]/10 border border-white/10 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">¿Necesitas algo diferente?</h3>
          <p className="text-gray-400 mb-6">
            Puedo adaptar mis servicios a tus necesidades específicas.
            Hablemos sobre tu proyecto.
          </p>
          <GlowButton href="#contacto">Contáctame</GlowButton>
        </div>
      </Section>
    </main>
  );
}
