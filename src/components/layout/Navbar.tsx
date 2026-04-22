"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LiquidMetalJaguar } from "../dev/ui/IridescentIcon";

const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/blog", label: "Blog" },
  { href: "/servicios", label: "Servicios" },
  { href: "/proceso", label: "Proceso" },
  { href: "/#acerca", label: "Acerca" },
];

const HEADER_HEIGHT = 80;

function smoothScrollTo(href: string) {
  const hashIndex = href.indexOf("#");
  if (hashIndex === -1) return;
  
  const targetId = href.substring(hashIndex + 1);
  const target = document.getElementById(targetId);
  if (target) {
    const targetPosition = target.getBoundingClientRect().top + window.scrollY - HEADER_HEIGHT;
    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    });
  }
}

export function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isHomePage = pathname === "/";

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
      const handleClickOutside = (e: MouseEvent) => {
        const nav = document.querySelector("nav");
        const menu = document.querySelector('[class*="fixed inset-0"]');
        if (nav && !nav.contains(e.target as Node) && menu && !menu.contains(e.target as Node)) {
          setIsMobileMenuOpen(false);
        }
      };
      document.addEventListener("click", handleClickOutside);
      return () => document.removeEventListener("click", handleClickOutside);
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    const hashIndex = href.indexOf("#");
    if (hashIndex !== -1) {
      e.preventDefault();
      const path = href.substring(0, hashIndex);
      const hash = href.substring(hashIndex);
      
      if (path && path !== "/") {
        window.location.assign(href);
      } else {
        smoothScrollTo(hash);
      }
    } else if (href === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/90 backdrop-blur-md border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            <div className="w-10 h-10">
              <LiquidMetalJaguar size={40} duration={6} animated={false} />
            </div>
            <span className="text-white font-bold text-xl hidden sm:block">
              Enlazarte
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.label === "Servicios" && isHomePage ? "/#servicios" : link.label === "Proceso" && isHomePage ? "/#proceso" : link.href}
                onClick={(e) => handleNavClick(e, link.label === "Servicios" && isHomePage ? "/#servicios" : link.label === "Proceso" && isHomePage ? "/#proceso" : link.href)}
                className="text-gray-300 hover:text-[#00B4D8] transition-colors text-base"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <button
            className="md:hidden text-white p-2"
            onClick={toggleMobileMenu}
            aria-label="Menú"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
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

        {isMobileMenuOpen && (
          <div className="md:hidden fixed inset-0 top-18 bg-black/95 backdrop-blur-md z-40 overflow-y-auto">
            <div className="flex flex-col items-center gap-8 pt-12">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.label === "Servicios" && isHomePage ? "/#servicios" : link.label === "Proceso" && isHomePage ? "/#proceso" : link.href}
                  onClick={(e) => handleNavClick(e, link.label === "Servicios" && isHomePage ? "/#servicios" : link.label === "Proceso" && isHomePage ? "/#proceso" : link.href)}
                  className="text-gray-300 hover:text-[#00B4D8] transition-colors text-2xl"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}