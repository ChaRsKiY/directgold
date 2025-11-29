import DBadge from "../ui/DBadge";
import { MotionSection, MotionDiv, MotionP } from "../motion";
import { getTranslations } from "next-intl/server";

export default async function AboutSection() {
  const t = await getTranslations("about");
  return (
    <section
      id="about"
      className="min-h-[700px] h-[80vh] max-md:h-[75vh] max-sm:h-[65vh] relative bg-linear-to-r from-light-bg via-light-bg to-[#cfcec9]"
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
        <div className="w-full mx-auto max-w-7xl">
          <div className="text-[var(--color-primary-gold)] max-md:mt-10">
            <MotionP
              className="text-[7rem] max-[1300px]:text-[5rem] max-md:text-[3rem] max-sm:text-[2rem] font-bold"
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              DIRECTGOLD&#8482;
            </MotionP>
            <MotionP
              className="text-[5rem] max-[1300px]:text-[4rem] max-md:text-[2rem] max-sm:text-xl font-bold mt-[-40px] max-md:mt-[-20px] max-sm:mt-[-10px]"
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              {t("title2")}
            </MotionP>
            <MotionP
              className="text-4xl max-lg:text-3xl max-md:text-xl max-sm:text-xl font-semibold max-sm:mt-6"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              {t("title3")}
            </MotionP>
          </div>
        </div>
      </MotionDiv>
    </section>
  );
}