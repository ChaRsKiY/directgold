"use client";

import Image from "next/image";
import { MotionSection, MotionDiv, MotionH2 } from "../motion";
import { useTranslations } from "next-intl";

const SecurityAndTechnologySection = () => {
  const t = useTranslations("securityAndTechnology");
  
  return (
    <MotionSection
      className="px-[10%] py-20 bg-[var(--color-light-bg)]"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <MotionH2
        className="text-6xl max-md:text-4xl font-bold text-[var(--color-primary-gold)] text-center mb-12 max-w-7xl mx-auto"
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {t("title")}
      </MotionH2>
      <div className="max-w-7xl mx-auto space-y-6 mb-16">
        <MotionDiv
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-lg max-md:text-base text-[var(--color-secondary-text)] leading-relaxed">
            {t("paragraph1")}
          </p>
        </MotionDiv>
        <MotionDiv
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-lg max-md:text-base text-[var(--color-secondary-text)] leading-relaxed">
            {t("paragraph2")}
          </p>
        </MotionDiv>
      </div>
      <MotionDiv
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <Image src="/mockups/mock5.png" alt="Security and Technology" width={1000} height={500} className="w-full max-w-7xl mx-auto" />
      </MotionDiv>
    </MotionSection>
  );
};

export default SecurityAndTechnologySection;