import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import AboutSection from "@/components/sections/AboutSection";
import InfoSection from "@/components/sections/InfoSection";
import GoldBarSection from "@/components/sections/GoldBarSection";
import CTASection from "@/components/sections/CTASection";
import Footer from "@/components/layout/Footer";
import { PrinciplesSection } from "@/components/sections/PrinciplesSection";

export default function Home() {
  return (
    <main className="min-h-screen font-montserrat">
      <Header />
      <Hero />
      <AboutSection />
      <InfoSection />
      <GoldBarSection />
      <CTASection />
      <PrinciplesSection />
      <Footer />
    </main>
  );
}