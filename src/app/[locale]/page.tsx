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
      <ImageBlock side="left" image="/mockups/mock2.jpg" title="Kauf & Verfkauf" description="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem psum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc. It is a long established fact that a reader will be distracted by the readable content of a page when ooking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of etters, as opposed to using 'Content here, content here, making it look like readable English." />
      <ImageBlock side="right" image="/mockups/mock3.png" title="Lagerung" description="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem psum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc. It is a long established fact that a reader will be distracted by the readable content of a page when ooking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of etters, as opposed to using 'Content here, content here, making it look like readable English." />
      <ImageBlock side="left" image="/mockups/mock4.jpg" title="Lieferung" description="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem psum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc. It is a long established fact that a reader will be distracted by the readable content of a page when ooking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of etters, as opposed to using 'Content here, content here, making it look like readable English." />
      <SecurityAndTechnologySection />
      <BlocksSection />
      {/* <PrinciplesSection /> */}

    </main>
  );
}