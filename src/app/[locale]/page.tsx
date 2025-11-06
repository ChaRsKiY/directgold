import Hero from "@/components/sections/Hero";
import AboutSection from "@/components/sections/AboutSection";
import GoldBarSection from "@/components/sections/GoldBarSection";
import { PrinciplesSection } from "@/components/sections/PrinciplesSection";

export default function Home() {
  return (
    <main className="min-h-screen font-montserrat">
      <Hero />
      <AboutSection />
      {/* <InfoSection /> */}
      <GoldBarSection />
      <PrinciplesSection />
    </main>
  );
}