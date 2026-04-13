import type { Metadata } from "next";
import "./globals.css";
import { WhatsAppButton } from "@/components/dev/ui/WhatsAppButton";

export const metadata: Metadata = {
  title: "Enlazarte.dev | Desarrollo Web Profesional",
  description: "Servicios de desarrollo web profesional. Sitios web modernos, funcionales y adaptados a tus necesidades. Desde $4,000 MXN.",
  keywords: "desarrollo web, sitios web, Next.js, diseño web, México",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className="bg-black text-white antialiased">
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
