"use client";

import Image from "next/image";
import classNames from "classnames";
import { IoMdArrowDropright } from "react-icons/io";
import { MotionSection, MotionDiv, MotionH2 } from "../motion";
import { useTranslations } from "next-intl";

const ImageBlock = ({ side, image, titleKey, descriptionKey }: { side: "left" | "right", image: string, titleKey: string, descriptionKey: string }) => {
  const t = useTranslations("services");
  return (
    <MotionSection
      className={classNames("px-[10%] py-20 flex flex-col gap-12", side === "right" ? "bg-[var(--color-light-bg)]" : "")}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
        <MotionH2
          className={classNames("text-6xl max-md:text-4xl font-bold text-[var(--color-primary-gold)] max-w-7xl mx-auto w-full", side === "right" ? "text-right max-lg:text-left" : "text-left")}
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {t(titleKey)}
        </MotionH2>

        <div className={classNames("flex gap-12 justify-between w-full max-lg:flex-col max-lg:gap-6 max-w-7xl mx-auto", side === "right" ? "flex-row-reverse" : "")}>
            <MotionDiv
              className={classNames("text-[var(--color-secondary-text)] w-[55%] max-lg:w-full", side === "right" ? "text-right max-lg:text-left" : "text-left")}
              initial={{ x: side === "right" ? 50 : -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <p>{t(descriptionKey)}</p>
            </MotionDiv>
            <IoMdArrowDropright size={60} className={classNames("text-[var(--color-primary-gold)] self-center max-lg:hidden", side === "right" ? "" : "rotate-180")} />
            <MotionDiv
              className="w-[45%] relative aspect-square max-lg:w-full"
              initial={{ x: side === "right" ? -50 : 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
                <Image src={image} alt="Image" fill className="w-full object-cover" />
            </MotionDiv>
        </div>
    </MotionSection>
  )
}

export default ImageBlock;