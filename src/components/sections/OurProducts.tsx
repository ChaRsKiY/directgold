"use client";

import Image from "next/image";
import { MotionSection } from "../motion";
import { useTranslations } from "next-intl";
import Button from "../ui/Button";

const OurProducts = () => {
  const t = useTranslations("ourProducts");

  return (
    <section
      className="px-[10%] pb-20 bg-gradient-to-b to-[var(--color-primary-gold)]/30 from-transparent relative"
    >
      <div className="grid grid-cols-2 gap-48 relative m-auto max-w-7xl">
        <div className="absolute inset-0 top-12 flex items-center justify-center">
          <div className="absolute inset-0 flex justify-end text-right">
            <div className="flex flex-col">
              <h1 className="text-[var(--color-primary-gold)] font-bold text-5xl">Produkte</h1>
              <div className="w-24 h-1 bg-[var(--color-primary-gold)] my-8 self-end" />
              <h2 className="text-xl font-bold text-[var(--color-primary-text)]">DIRECTGOLD bestseller <br /> Edelmetall Anlagen</h2>
            </div>
          </div>
          <div className="w-[calc(50%-6rem)] h-full bg-[#e1e1e1] opacity-60" />
        </div>
        <div className="flex flex-col justify-end text-white -translate-y-36 w-full h-full relative before:absolute before:inset-0 before:bg-[#045589] before:opacity-60 before:-z-10 p-24 pb-48">
          <h2 className="uppercase text-4xl max-md:text-2xl font-bold">
            {t("goldkaufplanTitle")}
          </h2>
          <div className="w-24 h-1 bg-white/50 my-8 self-start" />
          <p className="text-xl">{t("goldkaufplanDescription")}</p>
          <div className="mt-12 bg-[var(--color-primary-gold)] py-3 px-12 rounded-md flex justify-center items-center group cursor-pointer transition-all duration-300 w-full">
            <div className="flex items-center justify-center gap-2">
              <Image src="/DG Icon White.png" alt="DBadge" width={30} height={30} className="shrink-0" />
              <span className="text-white font-bold text-lg opacity-0 group-hover:opacity-100 max-w-0 group-hover:max-w-[200px] overflow-hidden transition-all duration-300 whitespace-nowrap -ml-1">
                irect weiter
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col min-h-[850px] text-right text-white translate-y-64 w-full h-full relative before:absolute before:inset-0 before:bg-[#412b0d] before:opacity-60 before:-z-10 p-24 pt-48">
          <h2 className="uppercase text-4xl max-md:text-2xl font-bold">
            {t("einzelkaufTitle")}
          </h2>
          <div className="w-24 h-1 bg-[var(--color-primary-gold)] my-8 self-end" />
          <p className="text-xl">{t("einzelkaufDescription")}</p>
          <div className="mt-12 bg-[var(--color-primary-gold)] py-3 px-12 rounded-md flex justify-center items-center group cursor-pointer transition-all duration-300 w-full">
            <div className="flex items-center justify-center gap-2">
              <Image src="/DG Icon White.png" alt="DBadge" width={30} height={30} className="shrink-0" />
              <span className="text-white font-bold text-lg opacity-0 group-hover:opacity-100 max-w-0 group-hover:max-w-[200px] overflow-hidden transition-all duration-300 whitespace-nowrap -ml-1">
                irect weiter
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="m-auto max-w-7xl">
        <div className="font-bold">
          <h3 className="text-2xl max-md:text-xl text-[var(--color-primary-text)]">Zwei wege, ein Ziel</h3>
          <div className="w-24 h-1 bg-[var(--color-primary-gold)] my-6" />
          <h2 className="text-6xl max-md:text-2xl text-[var(--color-primary-gold)]">Sicherer <br /> Goldbesitz.</h2>
          <Button className="text-white mt-12">Get in touch</Button>
        </div>
      </div>
      <div className="m-auto max-w-7xl relative">
        <Image src="/gold_nugget.png" alt="Gold Nugget" width={1300} height={1300} className="absolute bottom-0 right-0 -z-20 translate-y-[40%] contrast-60 translate-x-[70%]" />
      </div>
    </section>
  );
};

export default OurProducts;