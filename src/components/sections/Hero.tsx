import Image from "next/image";
import Logo from "../ui/Logo";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-[var(--color-dark-bg)]"
    >
      <Image src="/logo_bg.png" alt="Hero background" fill className="object-cover" />
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
        <Image src="/directgold_logo.png" alt="Logo" width={450} height={450} className="object-contain max-sm:w-[300px] max-sm:h-[300px]" />
      </div>
    </section>
  );
}
