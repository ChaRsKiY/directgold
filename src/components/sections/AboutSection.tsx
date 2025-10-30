import Image from "next/image";
import Button from "../ui/Button";

export default function AboutSection() {
  return (
    <section className="min-h-screen max-md:min-h-[80vh] max-sm:min-h-[60vh] text-[var(--color-primary-gold-light)] relative">
      <Image src="/gold_bg.png" alt="About background" fill className="object-cover absolute top-0 left-0 w-full h-full" />
      <div className="z-50 flex flex-col justify-between h-full absolute top-0 left-0 w-full p-[5%]">
        <div>
          <p className="text-[9rem] max-lg:text-[7rem] max-md:text-[5rem] max-sm:text-[3rem] font-bold">Dein Gold.</p>
          <p className="text-[9rem] max-lg:text-[7rem] max-md:text-[5rem] max-sm:text-[3rem] font-bold mt-[-60px] max-lg:mt-[-40px] max-md:mt-[-20px] max-sm:mt-[-10px]">Neu definiert.</p>
          <p className="text-4xl max-lg:text-3xl max-md:text-2xl max-sm:text-xl font-bold">Begnüge Dich nur mit exakten Antworten.</p>
          <p className="text-4xl max-lg:text-3xl max-md:text-2xl max-sm:text-xl font-bold">Alles andere ist Spekulation.</p>
        </div>
        <Button variant="primary" className="w-fit self-center max-md:mb-4">Mehr Infos</Button>
      </div>
    </section>
  );
}