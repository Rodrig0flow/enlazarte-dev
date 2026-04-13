import { Section } from "@/components/dev/ui/Section";
import { ContactForm } from "@/components/sections/ContactForm";

export default function ContactoPage() {
  return (
    <main className="min-h-screen bg-black pt-24">
      <Section>
        <div className="text-center mb-16">
          <p className="text-[#00B4D8] tracking-[0.3em] uppercase text-sm mb-4">
            Contacto
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Hablemos de tu proyecto
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Cuéntame sobre tu proyecto y te responderé en menos de 24 horas.
            No hay compromiso, solo una conversación sobre cómo puedo ayudarte.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <ContactForm />
        </div>
      </Section>
    </main>
  );
}
