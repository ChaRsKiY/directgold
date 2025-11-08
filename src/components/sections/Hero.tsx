import { MotionSection } from "../motion";
import Image from "next/image";

export default function Hero() {
  return (
    <MotionSection
      id="home"
      className="relative min-h-screen flex items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <Image src="/main_logo.svg" alt="Logo" width={100} height={100} className="absolute inset-0 w-full h-full z-50" />
      <video src="/Intro Animation.mp4" autoPlay muted className="absolute inset-0 w-full h-full object-cover" />
    </MotionSection>
  );
}
