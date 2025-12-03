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
import DominanzSection from "@/components/sections/DominanzSection";
import ZitatBlockSection from "@/components/sections/ZitatBlockSection";
import GoldIsGeldSection from "@/components/sections/GoldIsGeldSection";
import GoldBenefitsSection from "@/components/sections/GoldBenefitsSection";

export default function Home() {
  return (
    <main className="min-h-screen font-montserrat">
      <Hero />
      <div className="bg-gradient-to-b from-[#f5f5f3] to-[#cecfd0]">
        <AboutSection />
        {/* <InfoSection /> */}
        <GoldBarSection />
      </div>
      <DominanzSection />
      <OurProducts />
      <ZitatBlockSection />
      <GoldBenefitsSection />
      <GoldIsGeldSection />
      <PrinciplesSection />
      <FlipCardsSection />
      <SecurityAndTechnologySection />
      {/* <QuestionsSection /> */}
      {/* <WhyDirectGold /> */}
      <BlocksSection />
      {/* <LBMAPriceSection /> */}
    </main>
  );
}