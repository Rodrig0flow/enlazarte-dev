"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SimpleLogo } from "./SimpleLogo";

const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/blog", label: "Blog" },
  { href: "/servicios", label: "Servicios" },
  { href: "/proceso", label: "Proceso" },
  { href: "/#acerca", label: "Acerca" },
];

export function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const isHomePage = pathname === "/";

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 20);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const getHref = (label: string, defaultHref: string) => {
    if (label === "Servicios") {
      return isHomePage ? "/#servicios" : defaultHref;
    }
    if (label === "Proceso") {
      return isHomePage ? "/#proceso" : defaultHref;
    }
    return defaultHref;
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* HEADER */}
      <header
        className={`fixed top-0 left-0 right-0 z-9999 transition-all duration-300 ${
          isScrolled
            ? "bg-black/90 backdrop-blur-md border-b border-white/10"
            : "bg-black/80 backdrop-blur-md"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="flex items-center gap-2 sm:gap-3"
              onClick={handleLinkClick}
            >
              <div className="w-8 h-8 sm:w-10 sm:h-10">
                <SimpleLogo size={40} />
              </div>
              <span className="text-white font-bold text-lg sm:text-xl hidden sm:block">
                Enlazarte
              </span>
            </Link>

            {/* Desktop */}
            <div className="hidden lg:flex items-center gap-6 lg:gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={getHref(link.label, link.href)}
                  onClick={handleLinkClick}
                  className="text-gray-300 hover:text-[#00B4D8] transition-colors text-sm lg:text-base"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Mobile Button */}
            <button
              type="button"
              className="lg:hidden text-white p-2 -mr-2 relative z-10000"
              onClick={() => setIsOpen((prev) => !prev)}
              aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={isOpen}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE MENU */}
      {isOpen && (
        <div
          className="fixed inset-0 top-14 bg-black/95 backdrop-blur-md z-1000 lg:hidden overflow-y-auto"
          onClick={handleLinkClick}
        >
          <nav
            className="flex flex-col items-center justify-start pt-8 pb-12 px-4 min-h-[calc(100vh-3.5rem)]"
            onClick={(e) => e.stopPropagation()}
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={getHref(link.label, link.href)}
                onClick={handleLinkClick}
                className="text-gray-300 hover:text-[#00B4D8] transition-colors text-2xl py-4 w-full text-center"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}