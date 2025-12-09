import Image from "next/image";
import CTASection from "./CTASection";
import { IoMdArrowDropright } from "react-icons/io";
import { MotionDiv, MotionH2, MotionH3 } from "../motion";
import { getTranslations } from "next-intl/server";
import ProgressIndicator from "../ui/ProgressIndicator";

export default async function GoldBarSection() {
  const t = await getTranslations("goldBar");
  return (
    <section
      className="relative min-h-[850px] h-screen max-h-[950px] px-[10%]"
    >
      <div className="absolute left-0 bottom-0 p-8">
        <ProgressIndicator activeIndex={0} />
      </div>
      {/* Gold bar image - positioned right, ~50% width, slightly overlapping screen */}
      <div className="absolute right-0 top-0 bottom-0 w-[50%] max-lg:w-[75%] max-sm:w-[85%] h-full flex items-center justify-end pointer-events-none z-10">
        <div className="relative w-full h-full">
          <Image
            src="/gold_bar.png"
            alt="Gold Bar"
            width={1000}
            height={1000}
            className="object-contain object-right w-full h-full max-lg:translate-y-[10%]"
            style={{
              transform: 'translateX(10%)',
              maxHeight: '100%'
            }}
            priority
          />
        </div>
      </div>

      {/* Content section */}
      <div className="relative z-20 h-full flex lg:items-center py-12 lg:py-0">
        <div className="max-w-7xl mx-auto w-full">
          <MotionDiv
            className="flex items-center gap-12 w-[50%] max-lg:w-full max-lg:flex-col max-lg:items-center max-lg:justify-center"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <MotionDiv
              className="min-w-1 h-72 bg-gold rounded-lg max-lg:hidden"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            />
            <div className="flex flex-col gap-4 font-bold text-2xl max-md:flex-1 w-full max-lg:text-center max-md:text-xl max-lg:text-left">
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
                className="text-2xl text-gray-medium font-normal max-lg:hidden"
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                {t("answer1")}
              </MotionH3>
              <MotionH3
                className="text-2xl text-left text-gray-medium font-normal hidden max-lg:block max-md:text-xl"
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                {t("answer1")}
              </MotionH3>
            </div>
            <MotionDiv
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="max-lg:hidden"
            >
              <IoMdArrowDropright size={60} color="var(--color-gold)" />
            </MotionDiv>
          </MotionDiv>
        </div>
      </div>
    </section>
  );
}
