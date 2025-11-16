import Hero from "@/components/sections/Hero";
import AboutSection from "@/components/sections/AboutSection";
import GoldBarSection from "@/components/sections/GoldBarSection";
import { PrinciplesSection } from "@/components/sections/PrinciplesSection";
import QuestionsSection from "@/components/sections/QuestionsSection";
import WhyDirectGold from "@/components/sections/WhyDirectGold";
import OurProducts from "@/components/sections/OurProducts";
import ImageBlock from "@/components/sections/ImageBlock";
import SecurityAndTechnologySection from "@/components/sections/SecurityAndTechnology";
import BlocksSection from "@/components/sections/BlocksSection";
import LBMAPriceSection from "@/components/sections/LBMAPriceSection";
import Button from "@/components/ui/Button";

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
      <ImageBlock side="left" image="/mockups/mock2.jpg" titleKey="kaufVerkaufTitle" descriptionKey="kaufVerkaufDescription" />
      <ImageBlock side="right" image="/mockups/mock3.png" titleKey="lagerungTitle" descriptionKey="lagerungDescription" />
      <ImageBlock side="left" image="/mockups/mock4.jpg" titleKey="lieferungTitle" descriptionKey="lieferungDescription" />
      <SecurityAndTechnologySection />
      <BlocksSection />
      {/* <PrinciplesSection /> */}
      {/* <LBMAPriceSection /> */}
    </main>
  );
}