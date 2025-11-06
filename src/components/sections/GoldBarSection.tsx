import Image from "next/image";
import CTASection from "./CTASection";
import { IoMdArrowDropright } from "react-icons/io";
import { MotionSection, MotionDiv, MotionH2, MotionH3 } from "../motion";
import { getTranslations } from "next-intl/server";

export default async function GoldBarSection() {
  const t = await getTranslations("goldBar");
  return (
    <section
      className="bg-[var(--color-light-bg)] pb-8 relative overflow-x-hidden min-h-screen"
    >
      <div className="absolute inset-0 w-full ">
        <Image src="/goldbarbg.jpg" alt="Gold Bar" fill className="object-cover" />
        <CTASection />
        <MotionDiv
          className="absolute inset-0 h-full left-0 top-0 bottom-0 flex items-center pl-[5%] gap-12 w-[40%] max-lg:w-full max-lg:justify-center max-lg:items-baseline max-lg:right-0 max-lg:pt-5 max-lg:px-[5%] max-md:px-6"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <MotionDiv
            className="w-3 h-72 bg-[var(--color-primary-gold)] rounded-lg max-lg:hidden"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />
          <div className="flex flex-col gap-4 font-bold text-2xl max-md:flex-1 w-full max-lg:text-center max-md:text-xl">
            <MotionH2
              className=""
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              {t("question1")}
            </MotionH2>
            <MotionH3
              className="text-5xl text-[var(--color-primary-gold)] max-lg:hidden"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              {t("answer1")} <br /> {t("answer2")} <br /> {t("answer3")}
            </MotionH3>
            <MotionH3
              className="text-5xl text-[var(--color-primary-gold)] hidden max-lg:block max-md:text-3xl"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              {t("answer1")} {t("answer2")} {t("answer3")}
            </MotionH3>
          </div>
          <MotionDiv
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="max-lg:hidden"
          >
            <IoMdArrowDropright size={70} color="var(--color-primary-gold)" />
          </MotionDiv>
        </MotionDiv>
      </div>
    </section>
  );
}
