import { Header } from "@/components/common/header";
import { Footer } from "@/components/common/footer";
import { Hero } from "@/components/sections/hero";
import { Statement } from "@/components/sections/statement";
import { SelectedWork } from "@/components/sections/selected-work";
import { SelectedContributions } from "@/components/sections/selected-contributions";
import { Competencies } from "@/components/sections/competencies";
import { ExperienceSection } from "@/components/sections/experience-section";
import { ContactSection } from "@/components/sections/contact-section";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground antialiased selection:bg-accent-champagne selection:text-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <Statement />
        <SelectedWork />
        <SelectedContributions />
        <Competencies />
        <ExperienceSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
