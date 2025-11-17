"use client";

import { MotionSection, MotionDiv, MotionH2 } from "../motion";
import { useTranslations } from "next-intl";

const WhyDirectGold = () => {
  const t = useTranslations("whyDirectGold");
  
  const usps = [
    {
      titleKey: "usp1Title",
      descriptionKey: "usp1Description"
    },
    {
      titleKey: "usp2Title",
      descriptionKey: "usp2Description"
    },
    {
      titleKey: "usp3Title",
      descriptionKey: "usp3Description"
    },
    {
      titleKey: "usp4Title",
      descriptionKey: "usp4Description"
    },
    {
      titleKey: "usp5Title",
      descriptionKey: "usp5Description"
    },
    {
      titleKey: "usp6Title",
      descriptionKey: "usp6Description"
    }
  ];

  return (
    <MotionSection
      id="whyDirectGold"
      className="px-[10%] py-20 bg-gradient-to-r from-[var(--color-light-bg)] via-[var(--color-light-bg)] to-[#DEDBD5]"
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
      <div className="grid grid-cols-2 justify-between gap-8 items-center h-fit max-md:grid-cols-1 max-w-7xl mx-auto">
        {usps.map((usp, index) => (
          <MotionDiv
            key={index}
            className="bg-[var(--color-primary-gold)] text-white p-5 rounded-md"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <h3 className="font-bold mb-2">{t(usp.titleKey)}</h3>
            <p className="text-sm">{t(usp.descriptionKey)}</p>
          </MotionDiv>
        ))}
      </div>
    </MotionSection>
  );
};

export default WhyDirectGold;