"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import Button from "../ui/Button";
import { MotionH1, MotionDiv, MotionH2, MotionH3 } from "../motion";

const OurProducts = () => {
  const t = useTranslations("ourProducts");

  return (
    <section
      className="px-[10%] pb-20 bg-gradient-to-b to-[var(--color-primary-gold)]/30 from-transparent relative"
    >
      <div className="md:hidden mt-20">
        <div className="flex flex-col mb-12">
          <MotionH1
            className="text-4xl md:text-6xl font-bold"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Produkte.
          </MotionH1>
          <div className="w-24 h-1 bg-[var(--color-primary-gold)] my-8" />
          <h2 className="text-xl font-bold text-[var(--color-primary-text)] max-lg:text-base">DIRECTGOLD bestseller <br /> Edelmetall Anlagen</h2>
        </div>
        <div className="flex flex-col gap-6 mb-12">
          <MotionDiv
            className="flex flex-col justify-end text-white w-full h-full relative before:absolute before:inset-0 before:bg-[#5D9BC9] before:opacity-60 before:-z-10 p-12"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="uppercase text-4xl max-lg:text-2xl font-bold">
              {t("goldkaufplanTitle")}
            </h2>
            <div className="w-24 h-1 bg-white/50 my-8 self-start" />
            <p className="text-xl max-lg:text-lg">{t("goldkaufplanDescription")}</p>
            <div className="mt-12 bg-[var(--color-primary-gold)] py-3 px-12 rounded-md flex justify-center items-center group cursor-pointer transition-all duration-300 w-full">
              <div className="flex items-center justify-center gap-2">
                <Image src="/DG Icon White.png" alt="DBadge" width={30} height={30} className="shrink-0" />
                <span className="text-white font-bold text-lg opacity-0 group-hover:opacity-100 max-w-0 group-hover:max-w-[200px] overflow-hidden transition-all duration-300 whitespace-nowrap -ml-1">
                  irect weiter
                </span>
              </div>
            </div>
            <div className="font-arkitech absolute right-0 top-0 text-[#e1e1e1] text-[24rem] -translate-y-72 translate-x-2 font-bold uppercase -z-25">
              1
            </div>
          </MotionDiv>
          <MotionDiv
            className="flex flex-col text-right text-white w-full h-full relative before:absolute before:inset-0 before:bg-[#412b0d] before:opacity-60 before:-z-10 p-12"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="uppercase text-4xl max-lg:text-2xl font-bold">
              {t("einzelkaufTitle")}
            </h2>
            <div className="h-1 w-24 bg-[var(--color-primary-gold)] my-8 self-end" />
            <p className="text-xl max-lg:text-lg">{t("einzelkaufDescription")}</p>
            <div className="mt-12 bg-[var(--color-primary-gold)] py-3 px-12 rounded-md flex justify-center items-center group cursor-pointer transition-all duration-300 w-full">
              <div className="flex items-center justify-center gap-2">
                <Image src="/DG Icon White.png" alt="DBadge" width={30} height={30} className="shrink-0" />
                <span className="text-white font-bold text-lg opacity-0 group-hover:opacity-100 max-w-0 group-hover:max-w-[200px] overflow-hidden transition-all duration-300 whitespace-nowrap -ml-1">
                  irect weiter
                </span>
              </div>
            </div>
            <div className="font-arkitech absolute left-0 top-0 mt-12 text-[#e1e1e1] text-[24rem] font-bold uppercase -translate-x-8 -translate-y-56 -z-25">
              2
            </div>
          </MotionDiv>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-48 relative m-auto max-w-7xl max-[1100px]:gap-16 max-md:hidden">
        <MotionDiv
          className="font-arkitech absolute left-0 top-0 mt-12 text-[#e1e1e1] text-[24rem] -translate-y-32 -translate-x-10 font-bold uppercase"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          1
        </MotionDiv>
        <MotionDiv
          className="font-arkitech absolute right-0 bottom-0 mt-12 text-[#e1e1e1] text-[24rem] font-bold uppercase translate-x-20 -translate-y-36 -z-25"
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          2
        </MotionDiv>
        <div className="absolute inset-0 top-12 flex items-center justify-center">
          <div className="absolute inset-0 flex justify-end text-right">
            <div className="flex flex-col">
              <MotionH1
                className="text-[var(--color-primary-gold)] font-bold text-5xl max-lg:text-3xl"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                Produkte
              </MotionH1>
              <div className="w-24 h-1 bg-[var(--color-primary-gold)] my-8 self-end" />
              <h2 className="text-xl font-bold text-[var(--color-primary-text)] max-lg:text-base">DIRECTGOLD bestseller <br /> Edelmetall Anlagen</h2>
            </div>
          </div>
          <div className="w-[calc(50%-6rem)] h-full bg-[#e1e1e1] opacity-60" />
        </div>
        <MotionDiv
          className="flex flex-col justify-end text-white -translate-y-36 w-full h-full relative before:absolute before:inset-0 before:bg-[#5D9BC9] before:opacity-60 before:-z-10 px-24 pb-48 max-[1300px]:px-12"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="uppercase text-4xl max-lg:text-2xl font-bold">
            {t("goldkaufplanTitle")}
          </h2>
          <div className="w-24 h-1 bg-white/50 my-8 self-start" />
          <p className="text-xl max-lg:text-lg">{t("goldkaufplanDescription")}</p>
          <div className="mt-12 bg-[var(--color-primary-gold)] py-3 px-12 rounded-md flex justify-center items-center group cursor-pointer transition-all duration-300 w-full">
            <div className="flex items-center justify-center gap-2">
              <Image src="/DG Icon White.png" alt="DBadge" width={30} height={30} className="shrink-0" />
              <span className="text-white font-bold text-lg opacity-0 group-hover:opacity-100 max-w-0 group-hover:max-w-[200px] overflow-hidden transition-all duration-300 whitespace-nowrap -ml-1">
                irect weiter
              </span>
            </div>
          </div>
        </MotionDiv>
        <MotionDiv
          className="flex flex-col min-h-[850px] text-right text-white translate-y-64 w-full h-full relative before:absolute before:inset-0 before:bg-[#412b0d] before:opacity-60 before:-z-10 px-24 pt-48 max-[1300px]:px-12"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="uppercase text-4xl max-lg:text-2xl font-bold">
            {t("einzelkaufTitle")}
          </h2>
          <div className="h-1 w-24 bg-[var(--color-primary-gold)] my-8 self-end" />
          <p className="text-xl max-lg:text-lg">{t("einzelkaufDescription")}</p>
          <div className="mt-12 bg-[var(--color-primary-gold)] py-3 px-12 rounded-md flex justify-center items-center group cursor-pointer transition-all duration-300 w-full">
            <div className="flex items-center justify-center gap-2">
              <Image src="/DG Icon White.png" alt="DBadge" width={30} height={30} className="shrink-0" />
              <span className="text-white font-bold text-lg opacity-0 group-hover:opacity-100 max-w-0 group-hover:max-w-[200px] overflow-hidden transition-all duration-300 whitespace-nowrap -ml-1">
                irect weiter
              </span>
            </div>
          </div>
        </MotionDiv>
      </div>
      <div className="m-auto max-w-7xl">
        <MotionDiv
          className="font-bold"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <MotionH3
            className="text-2xl max-lg:text-xl text-[var(--color-primary-text)]"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Zwei wege, ein Ziel
          </MotionH3>
          <div className="w-24 h-1 bg-[var(--color-primary-gold)] my-6" />
          <MotionH2
            className="text-6xl w-24 max-lg:text-4xl max-md:text-2xl text-[var(--color-primary-gold)]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Sicherer <br /> Goldbesitz.
          </MotionH2>
          <Button className="text-white mt-12">Get in touch</Button>
        </MotionDiv>
      </div>
      <div className="m-auto max-w-7xl relative">
        <Image src="/gold_nugget.png" alt="Gold Nugget" width={1300} height={1300} className="absolute bottom-0 right-0 -z-20 translate-y-[45%] contrast-60 translate-x-[70%] max-sm:translate-y-[65%]" />
      </div>
    </section>
  );
};

export default OurProducts;