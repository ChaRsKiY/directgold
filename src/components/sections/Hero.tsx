import Image from "next/image";
import Logo from "../ui/Logo";
import { MotionSection, MotionDiv } from "../motion";

export default function Hero() {
  return (
    <MotionSection
      id="home"
      className="relative min-h-screen flex items-center bg-[var(--color-dark-bg)]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <Image src="/logo_bg.png" alt="Hero background" fill className="object-cover" />
      <MotionDiv
        className="absolute top-0 left-0 w-full h-full flex items-center justify-center"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
      >
        <Image src="/directgold_logo.png" alt="Logo" width={450} height={450} className="object-contain max-sm:w-[300px] max-sm:h-[300px]" />
      </MotionDiv>
    </MotionSection>
  );
}
