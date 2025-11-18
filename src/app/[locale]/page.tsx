import Hero from "@/components/sections/Hero";
import AboutSection from "@/components/sections/AboutSection";
import GoldBarSection from "@/components/sections/GoldBarSection";
import { PrinciplesSection } from "@/components/sections/PrinciplesSection";
import QuestionsSection from "@/components/sections/QuestionsSection";
import WhyDirectGold from "@/components/sections/WhyDirectGold";
import OurProducts from "@/components/sections/OurProducts";
import FlipCardsSection from "@/components/sections/FlipCardsSection";
import SecurityAndTechnologySection from "@/components/sections/SecurityAndTechnology";
import BlocksSection from "@/components/sections/BlocksSection";

export default function Home() {
  return (
    <main className="min-h-screen font-montserrat">
      <Hero />
      <AboutSection />
      {/* <InfoSection /> */}
      <GoldBarSection />
      <QuestionsSection />
      <WhyDirectGold />
      <OurProducts />
      <PrinciplesSection />
      <FlipCardsSection />
      <SecurityAndTechnologySection />
      <BlocksSection />
      {/* <PrinciplesSection /> */}
      {/* <LBMAPriceSection /> */}
    </main>
  );
}