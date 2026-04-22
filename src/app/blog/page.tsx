import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Blog | Enlazarte",
  description:
    "Consejos y guías sobre diseño web, desarrollo web y estrategias digitales para hacer crecer tu negocio.",
};

const blogPosts = [
  {
    slug: "como-tener-sitio-web-profesional",
    title: "Cómo tener un sitio web profesional en 4 días",
    excerpt:
      "Aprende el proceso para obtener una página web profesional sin complicaciones y en tiempo récord.",
    date: "15 de abril, 2026",
    category: "Desarrollo Web",
  },
  {
    slug: "por-que-tu-necesitas-seo",
    title: "Por qué tu negocio necesita una web optimizada para SEO",
    excerpt:
      "Descubre cómo una página web bien posicionada puede atraer clientes automáticamente sin pagar publicidad.",
    date: "10 de abril, 2026",
    category: "SEO",
  },
  {
    slug: "tendencias-diseno-web-2026",
    title: "Tendencias de diseño web 2026",
    excerpt:
      "Las principales tendencias en diseño web que dominarán el próximo año y cómo aplicarlas.",
    date: "5 de abril, 2026",
    category: "Diseño",
  },
];

export default function BlogPage() {
  return (
    <>
      <main className="min-h-screen bg-black pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[#00B4D8] tracking-[0.3em] uppercase text-sm mb-4">
              Blog
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Consejos para tu negocio digital
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Guías, tips y estrategias para mejorar tu presencia online y hacer
              crecer tu negocio.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.slug}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-[#00B4D8]/50 transition-all duration-300"
              >
                <span className="text-[#00B4D8] text-xs font-medium">
                  {post.category}
                </span>
                <h2 className="text-xl font-bold text-white mt-2 mb-3">
                  {post.title}
                </h2>
                <p className="text-gray-400 text-sm mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-gray-500 text-xs">{post.date}</span>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-[#00B4D8] text-sm hover:underline"
                  >
                    Leer más →
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-gray-400">
              ¿Necesitas ayuda con tu proyecto web?{" "}
              <Link href="/" className="text-[#00B4D8] hover:underline">
                Contáctame
              </Link>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}