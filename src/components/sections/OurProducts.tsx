"use client";

import Image from "next/image";
import Button from "../ui/Button";
import DBadge from "../ui/DBadge";
import { MotionSection, MotionDiv, MotionH2 } from "../motion";
import { useTranslations } from "next-intl";

const OurProducts = () => {
  const t = useTranslations("ourProducts");
  
  return (
    <MotionSection
      className="px-[10%] py-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <MotionH2
        className="text-6xl max-md:text-4xl font-bold text-[var(--color-primary-gold)] mb-12 max-w-7xl mx-auto"
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {t("title")}
      </MotionH2>
      <div className="grid grid-cols-2 justify-between items-start h-fit max-lg:grid-cols-1 max-w-7xl mx-auto">
        <MotionDiv
          className="p-24 max-lg:py-12 max-lg:px-32 max-md:p-12 bg-[var(--color-primary-gold)] grid grid-rows-3 justify-items-center max-lg:flex max-lg:flex-col max-lg:justify-center items-center gap-3 h-full"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
            <h3 className="font-bold text-3xl text-white">{t("goldkaufplanTitle")}</h3>
            <p className="text-[var(--color-light-bg)] leading-relaxed text-center">
              {t("goldkaufplanDescription")}
            </p>
            <div className="bg-[#837448] py-3 px-12 rounded-md flex justify-center items-center group cursor-pointer transition-all duration-300 w-full">
              <div className="flex items-center justify-center gap-2">
                <Image src="/DG Icon White.png" alt="DBadge" width={30} height={30} className="shrink-0" />
                <span className="text-white font-bold text-lg opacity-0 group-hover:opacity-100 max-w-0 group-hover:max-w-[200px] overflow-hidden transition-all duration-300 whitespace-nowrap -ml-1">
                  irect weiter
                </span>
              </div>
            </div>
        </MotionDiv>
        <MotionDiv
          className="p-24 max-lg:py-12 max-lg:px-32 max-md:p-12 bg-[#837448] grid grid-rows-3 justify-items-center max-lg:flex max-lg:flex-col max-lg:justify-center items-center gap-3 h-full"
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
            <h3 className="font-bold text-3xl text-[var(--color-light-bg)]">{t("einzelkaufTitle")}</h3>
            <p className="text-[var(--color-light-bg)] leading-relaxed text-center">
              {t("einzelkaufDescription")}
            </p>
            <div className="bg-[var(--color-primary-gold)] py-3 px-12 rounded-md flex justify-center items-center group cursor-pointer transition-all duration-300 w-full">
              <div className="flex items-center justify-center gap-2">
                <Image src="/DG Icon White.png" alt="DBadge" width={30} height={30} className="shrink-0" />
                <span className="text-white text-center font-bold text-lg opacity-0 group-hover:opacity-100 max-w-0 group-hover:max-w-[200px] overflow-hidden transition-all duration-300 whitespace-nowrap -ml-1">
                  irect weiter
                </span>
              </div>
            </div>
        </MotionDiv>
      </div>
    </MotionSection>
  );
};

export default OurProducts;