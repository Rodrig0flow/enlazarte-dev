import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 py-12">
      <div className="max-w-4xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Enlazarte.dev</h3>
            <p className="text-gray-400 text-sm">
              Desarrollo web profesional. Transformo ideas en experiencias digitales que conectan con tu audiencia.
            </p>
          </div>
          <div>
            <h4 className="text-white font-medium mb-4">Enlaces</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#servicios" className="text-gray-400 hover:text-[#00B4D8] text-sm transition-colors">
                  Servicios
                </Link>
              </li>
              <li>
                <Link href="#contacto" className="text-gray-400 hover:text-[#00B4D8] text-sm transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-medium mb-4">Productos</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://enlazarte.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#00B4D8] text-sm transition-colors"
                >
                  Enlazarte App · Plataforma de Narrativa
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-medium mb-4">Contacto</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>WhatsApp: +52 56 2434 1903</li>
              <li>Email: rod.ma.flo@gmail.com</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Enlazarte.dev. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
