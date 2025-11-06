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
      
      <video src="/Intro Animation.mp4" autoPlay muted className="absolute inset-0 w-full h-full object-cover" />
    </MotionSection>
  );
}
