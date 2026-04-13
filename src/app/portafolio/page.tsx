import { Section } from "@/components/dev/ui/Section";
import { WhatsAppButton } from "@/components/dev/ui/WhatsAppButton";

const projects = [
  {
    title: "Plataforma de Libros",
    description: "Plataforma SaaS para lectura de libros en línea con sistema de suscripciones y panel de administración.",
    tags: ["Next.js", "PostgreSQL", "Stripe", "AWS"],
    link: "#",
  },
  {
    title: "Clínica Dental",
    description: "Sitio web profesional para clínica dental con sistema de citas en línea y gestión de pacientes.",
    tags: ["Next.js", "Tailwind", "Nodemailer"],
    link: "#",
  },
  {
    title: "E-commerce Tienda",
    description: "Tienda en línea completa con catálogo de productos, carrito de compras y pasarela de pagos.",
    tags: ["Next.js", "Stripe", "Prisma"],
    link: "#",
  },
  {
    title: "Portafolio Fotógrafo",
    description: "Sitio web minimalista para fotógrafo profesional con galerías dinámicas y formulario de contacto.",
    tags: ["Next.js", "Tailwind", "Vercel"],
    link: "#",
  },
];

export default function PortafolioPage() {
  return (
    <main className="min-h-screen bg-black">
      <WhatsAppButton />
      <Section>
        <div className="text-center mb-16">
          <p className="text-[#00B4D8] tracking-[0.3em] uppercase text-sm mb-4">
            Portafolio
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Proyectos recientes
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Algunos de los proyectos en los que he trabajado.
            Cada proyecto es único y adaptado a las necesidades del cliente.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-[#00B4D8]/50 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="aspect-video bg-gradient-to-br from-[#00B4D8]/10 to-[#7B2CBF]/10 rounded-xl mb-6 flex items-center justify-center">
                <svg
                  className="w-16 h-16 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#00B4D8] transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-400 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-white/5 text-gray-300 text-xs rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-400">
            ¿Tienes un proyecto en mente?{" "}
            <a href="#contacto" className="text-[#00B4D8] hover:underline">
              Hablemos
            </a>
          </p>
        </div>
      </Section>
    </main>
  );
}
