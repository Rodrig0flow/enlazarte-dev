import { GlowButton } from "./ui/GlowButton";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">

      {/* 🔥 FIX AQUÍ */}
      <div className="absolute inset-0 pointer-events-none opacity-20 overflow-hidden">
        <div className="absolute top-[10%] left-[10%] w-[60vw] h-[60vw] max-w-125 max-h-125 bg-[#00B4D8] rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] right-[10%] w-[60vw] h-[60vw] max-w-125 max-h-125 bg-[#7B2CBF] rounded-full blur-[120px]" />
      </div>

      {/* 🔥 FIX AQUÍ */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[5%] left-[5%] w-px h-[15%] bg-linear-to-b from-white/50 to-transparent" />
        <div className="absolute top-[20%] right-[10%] w-[10%] h-px bg-linear-to-r from-white/50 to-transparent" />
        <div className="absolute bottom-[25%] left-[30%] w-px h-[12%] bg-linear-to-b from-white/30 to-transparent" />
        <div className="absolute bottom-[10%] right-[5%] w-[8%] h-px bg-linear-to-r from-white/30 to-transparent" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center animate-fade-in">
        <p className="text-[#00B4D8] tracking-[0.4em] uppercase text-sm mb-6">
          Desarrollo Web para negocios y marca personal
        </p>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight">
          Páginas web que
          <br />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-[#00B4D8] to-[#7B2CBF]">
            convierten visitas en clientes
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto">
          Diseño y desarrollo sitios modernos, rápidos y optimizados para ayudarte a destacar y hacer crecer tu negocio en internet.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <GlowButton href="#contacto">Comenzar proyecto</GlowButton>
          <GlowButton href="#servicios" variant="secondary">
            Ver servicios
          </GlowButton>
        </div>

        <div className="mt-20 grid grid-cols-3 gap-8 max-w-md mx-auto">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white">5+</div>
            <div className="text-xs text-gray-500 mt-1">Años exp.</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white">50+</div>
            <div className="text-xs text-gray-500 mt-1">Proyectos</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white">100%</div>
            <div className="text-xs text-gray-500 mt-1">Compromiso</div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce pointer-events-none">
        <svg
          className="w-6 h-6 text-white/50"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}