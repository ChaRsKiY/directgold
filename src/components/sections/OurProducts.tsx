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
        className="text-center text-6xl max-md:text-4xl font-bold text-[var(--color-primary-gold)] mb-12 max-w-7xl mx-auto"
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {t("title")}
      </MotionH2>
      <div className="grid grid-cols-2 justify-between gap-12 items-start h-fit max-lg:grid-cols-1 max-w-7xl mx-auto">
        <MotionDiv
          className="p-6 border-3 border-[var(--color-primary-gold)] rounded-md flex flex-col justify-between gap-6 h-full"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
            <div className="flex gap-3 items-center">
                <div className="bg-[var(--color-primary-gold)] p-2 rounded-md">
                 <Image src="/DG Icon White.png" alt="DBadge" width={40} height={40} />
                </div>
                <h3 className="font-bold text-3xl text-[var(--color-primary-gold)]">{t("goldkaufplanTitle")}</h3>
            </div>
            <p className="text-[var(--color-secondary-text)] leading-relaxed">
              {t("goldkaufplanDescription")}
            </p>
            <div className="bg-[var(--color-primary-gold)] py-2 px-10 rounded-md flex justify-center items-center group cursor-pointer transition-all duration-300">
              <div className="flex items-center justify-center gap-1">
                <Image src="/DG Icon White.png" alt="DBadge" width={40} height={40} className="shrink-0" />
                <span className="text-white font-bold text-lg opacity-0 group-hover:opacity-100 max-w-0 group-hover:max-w-[200px] overflow-hidden transition-all duration-300 whitespace-nowrap -ml-1">
                  irect weiter
                </span>
              </div>
            </div>
        </MotionDiv>
        <MotionDiv
          className="p-6 border-3 border-[var(--color-primary-gold)] rounded-md flex flex-col justify-between gap-6 h-full"
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
            <div className="flex gap-3 items-center">
                <div className="bg-[var(--color-primary-gold)] p-2 rounded-md">
                 <Image src="/DG Icon White.png" alt="DBadge" width={40} height={40} />
                </div>
                <h3 className="font-bold text-3xl text-[var(--color-primary-gold)]">{t("einzelkaufTitle")}</h3>
            </div>
            <p className="text-[var(--color-secondary-text)] leading-relaxed">
              {t("einzelkaufDescription")}
            </p>
            <div className="bg-[var(--color-primary-gold)] py-2 px-20 rounded-md flex justify-center items-center group cursor-pointer transition-all duration-300">
              <div className="flex items-center justify-center gap-1">
                <Image src="/DG Icon White.png" alt="DBadge" width={40} height={40} className="shrink-0" />
                <span className="text-white font-bold text-lg opacity-0 group-hover:opacity-100 max-w-0 group-hover:max-w-[200px] overflow-hidden transition-all duration-300 whitespace-nowrap -ml-1">
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