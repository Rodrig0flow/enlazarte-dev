import type { Metadata, Viewport } from "next";
import "./globals.css";
import { WhatsAppButton } from "@/components/dev/ui/WhatsAppButton";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: {
    default: "Enlazarte.dev | Desarrollo Web Profesional",
    template: "%s | Enlazarte",
  },
  description:
    "Diseño y desarrollo web profesional en CDMX. Páginas web modernas, optimizadas para SEO yconversion. Entrega en 4 días. Desde $4,000 MXN.",
  keywords: [
    "diseño web",
    "desarrollo web",
    "páginas web",
    "sitios web",
    "Next.js",
    "diseño web cdmx",
    "desarrollo web méxico",
    "diseñador web",
    "crear página web",
  ],
  authors: [{ name: "Rodrigo Flores" }],
  creator: "Rodrigo Flores",
  publisher: "Enlazarte",
  metadataBase: new URL("https://enlazarte.dev"),
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: "https://enlazarte.dev",
    siteName: "Enlazarte",
    title: "Enlazarte | Desarrollo Web Profesional",
    description:
      "Diseño y desarrollo web profesional en CDMX. Páginas web modernas, optimizadas para SEO.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Enlazarte - Desarrollo Web Profesional",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Enlazarte | Desarrollo Web Profesional",
    description:
      "Diseño y desarrollo web profesional en CDMX. Entrega en 4 días.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://enlazarte.dev",
    languages: {
      es: "https://enlazarte.dev",
    },
  },
  icons: {
    icon: "/apple-touch-icon.png",
    apple: "/apple-touch-icon.png",
  },
} as Metadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Enlazarte",
    description:
      "Diseño y desarrollo web profesional en CDMX. Páginas web modernas, optimizadas para SEO.",
    url: "https://enlazarte.dev",
    telephone: "+52 56 2434 1903",
    email: "hola@enlazarte.dev",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Ciudad de México",
      addressRegion: "CDMX",
      addressCountry: "MX",
    },
    areaServed: {
      "@type": "State",
      name: "México",
    },
    priceRange: "$$",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "19:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "10:00",
        closes: "14:00",
      },
    ],
    sameAs: ["https://wa.me/525624341903"],
  };

  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-black text-white antialiased">
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
