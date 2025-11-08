import DBadge from "../ui/DBadge";
import { MotionSection, MotionDiv, MotionP } from "../motion";
import { getTranslations } from "next-intl/server";

export default async function AboutSection() {
  const t = await getTranslations("about");
  return (
    <MotionSection
      className="min-h-[80vh] max-md:min-h-[75vh] max-sm:min-h-[65vh] relative bg-linear-to-r from-light-bg via-light-bg to-[#DEDBD5]"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      {/* Smooth gradient transition at the bottom - fades out to blend with next section */}
      <div className="absolute bottom-0 left-0 right-0 h-40 z-0 pointer-events-none" />
      <MotionDiv
        className="z-50 flex flex-col justify-center h-full absolute top-0 left-0 w-full px-[10%] gap-12"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="max-w-7xl mx-auto w-full">
        <MotionDiv
          className="flex justify-center"
          initial={{ scale: 0.5, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4, stiffness: 200 }}
        >
          <DBadge />
        </MotionDiv>
        <div className="text-[var(--color-primary-gold)] max-md:mt-10">
          <MotionP
            className="text-[9rem] max-[1300px]:text-[7rem] max-md:text-[5rem] max-sm:text-[2.5rem] font-bold"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {t("title1")}
          </MotionP>
          <MotionP
            className="text-[9rem] max-[1300px]:text-[7rem] max-md:text-[5rem] max-sm:text-[2.5rem] font-bold mt-[-60px] max-lg:mt-[-40px] max-md:mt-[-20px] max-sm:mt-[-10px]"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            {t("title2")}
          </MotionP>
          <MotionP
            className="text-3xl max-lg:text-2xl max-md:text-xl max-sm:text-xl font-semibold"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            {t("title3")}
          </MotionP>
          <MotionP
            className="text-3xl max-lg:text-2xl max-md:text-xl max-sm:text-xl font-semibold"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1.1 }}
          >
            {t("title4")}
          </MotionP>
        </div>
        </div>
      </MotionDiv>
    </MotionSection>
  );
}