import { HeroSection } from "@/components/dev/HeroSection";
import { AboutSection } from "@/components/dev/AboutSection";
import { ImportanceSection } from "@/components/dev/ImportanceSection";
import { ValuePropositionSection } from "@/components/dev/ValuePropositionSection";
import { ServicesSection } from "@/components/dev/ServicesSection";
import { ProcessSection } from "@/components/dev/ProcessSection";
import { FinalCTASection } from "@/components/dev/FinalCTASection";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <HeroSection />
      <AboutSection />
      <ImportanceSection />
      <ValuePropositionSection />
      <ServicesSection />
      <ProcessSection />
      <FinalCTASection />
      <Footer />
    </main>
  );
}
