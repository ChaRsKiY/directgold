"use client";

import Image from "next/image";
import { MotionSection, MotionDiv } from "../motion";
import DBadge from "../ui/DBadge";
import { useTranslations } from "next-intl";

const QuestionsSection = () => {
  const t = useTranslations("questionsSection");
  
  const questions = [
    {
      boldKey: "question1Bold",
      textKey: "question1"
    },
    {
      boldKey: "question2Bold",
      textKey: "question2"
    },
    {
      boldKey: "question3Bold",
      textKey: "question3"
    },
    {
      boldKey: "question4Bold",
      textKey: "question4"
    }
  ];

  return (
    <MotionSection
      className="min-h-screen px-[10%] py-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <div className="grid grid-cols-2 justify-between gap-12 items-center h-fit max-md:grid-cols-1 max-w-7xl mx-auto">
        <MotionDiv
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Image src="/mockups/mock1.jpg" alt="Questions Section 1" width={500} height={500} className="max-md:w-full" />
        </MotionDiv>
        <div id="faq" className="flex justify-evenly h-full flex-1 items-end max-md:items-start">
            <MotionDiv
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-[var(--color-primary-gold)] h-full min-w-2 rounded-full hidden max-md:block"
            >
            </MotionDiv>
            <div className="flex flex-col gap-8 pl-6 justify-evenly h-full flex-1">
            {questions.map((question, index) => (
              <MotionDiv
                key={index}
                className="flex gap-4 text-right text-[var(--color-primary-gold)] items-center max-md:text-left w-full justify-end max-md:justify-start"
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              >
                <p>
                  <span className="font-bold">{t(question.boldKey)}</span> {t(question.textKey).replace(t(question.boldKey), "").trim().replace(/^[-]?\s*/, "")}
                </p>
                <MotionDiv
                  className="min-w-3 h-[120%] bg-[var(--color-primary-gold)] rounded-lg max-md:hidden"
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
                />
              </MotionDiv>
            ))}
            </div>
        </div>
      </div>
      <div className="mt-20 flex flex-col items-center gap-4">
            <MotionDiv
              initial={{ scale: 0.5, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <div className="flex justify-center">
                <DBadge />
              </div>
            </MotionDiv>
            <MotionDiv
              className="mt-6 text-center text-2xl font-bold text-[var(--color-primary-gold)] w-2/3 max-md:w-full"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              {t("answer")}
            </MotionDiv>
            <MotionDiv
              className="text-center text-base text-[var(--color-secondary-text)] w-2/3 max-md:w-full"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              {t("quote")} <br/> {t("quoteAuthor")}
            </MotionDiv>
        </div>
    </MotionSection>
  );
};

export default QuestionsSection;