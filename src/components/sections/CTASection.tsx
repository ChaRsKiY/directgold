import Button from "../ui/Button";
import DBadge from "../ui/DBadge";
import { MotionSection, MotionDiv, MotionH2, MotionP } from "../motion";
import { getTranslations } from "next-intl/server";

export default async function CTASection() {
  const t = await getTranslations("cta");
  return (
    <MotionSection
      className="py-12 md:py-16 lg:py-12 w-full"
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <MotionDiv
          className="flex flex-col items-center text-center max-w-7xl mx-auto"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <MotionH2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-primary-text-dark mb-8 md:mb-10 max-w-4xl mx-auto flex gap-2 flex-wrap items-center justify-center">
            <MotionP
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              {t("title1")}
            </MotionP>
            <MotionP
              initial={{ x: 20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              {t("title2")}
            </MotionP>
          </MotionH2>
          <MotionDiv
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1, stiffness: 200 }}
          >
            <DBadge />
          </MotionDiv>
        </MotionDiv>
      </div>
    </MotionSection>
  );
}
