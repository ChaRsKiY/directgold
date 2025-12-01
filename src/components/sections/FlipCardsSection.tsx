"use client";

import { useState } from "react";
import Image from "next/image";
import { MotionSection, MotionH2, MotionDiv } from "../motion";
import { useTranslations } from "next-intl";
import { motion } from "motion/react";
import { ArrowLeft } from "lucide-react";
import Button from "../ui/Button";
import ProgressIndicator from "../ui/ProgressIndicator";

interface FlipCard {
  image: string;
  titleKey: string;
  descriptionKey: string;
  shortDescriptionKey: string;
}

const FlipCardsSection = () => {
  const t = useTranslations("services");
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null);

  // Function to truncate text by sentences
  const truncateBySentences = (text: string, maxHeight: number, element: HTMLParagraphElement): string => {
    const sentences = text.split(/(?<=[.!?])\s+/).filter(s => s.trim().length > 0);
    if (sentences.length === 0) return text;

    let truncated = "";

    // First, set full text to measure
    element.textContent = text;
    if (element.scrollHeight <= maxHeight) {
      return text; // Full text fits
    }

    // Try adding sentences one by one
    for (let i = 0; i < sentences.length; i++) {
      const testText = truncated + (truncated ? " " : "") + sentences[i];
      element.textContent = testText;

      if (element.scrollHeight > maxHeight) {
        break; // This sentence doesn't fit
      }

      truncated = testText;
    }

    return truncated || sentences[0];
  };

  const cards: FlipCard[] = [
    {
      image: "/lake_bg.jpeg",
      titleKey: "kaufVerkaufTitle",
      descriptionKey: "kaufVerkaufDescription",
      shortDescriptionKey: "kaufVerkaufShort",
    },
    {
      image: "/lake_bg.jpeg",
      titleKey: "lagerungTitle",
      descriptionKey: "lagerungDescription",
      shortDescriptionKey: "lagerungShort",
    },
    {
      image: "/lake_bg.jpeg",
      titleKey: "lieferungTitle",
      descriptionKey: "lieferungDescription",
      shortDescriptionKey: "lieferungShort",
    },
  ];

  const handleCardClick = (index: number) => {
    setFlippedIndex(flippedIndex === index ? null : index);
  };

  const handleReadMore = (e: React.MouseEvent, index: number) => {
    e.stopPropagation();
    setFlippedIndex(index);
  };

  return (
    <MotionSection
      className="px-[10%] py-20 bg-gradient-to-b from-white to-[#fef4de] relative"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <div className="absolute left-0 bottom-0 p-8">
        <ProgressIndicator activeIndex={5} />
      </div>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-[var(--color-primary-gold)] font-bold text-5xl mb-12">
          Services
        </h2>

        {/* Grid Layout */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
        >
          {cards.map((card, index) => (
            <motion.div
              key={index}
              className={`relative w-full cursor-pointer mb-6 md:mb-0`}
              onClick={() => handleCardClick(index)}
              whileHover={{ scale: flippedIndex === index ? 1 : 1.02 }}
              transition={{ duration: 0.2 }}
              variants={{
                hidden: { y: 30, opacity: 0 },
                visible: {
                  y: 0,
                  opacity: 1,
                  transition: {
                    duration: 0.5
                  }
                }
              }}
            >
              <div
                className="relative w-full h-full"
                style={{
                  perspective: "1000px",
                  WebkitPerspective: "1000px"
                }}
              >
                <motion.div
                  className="relative w-full h-full grid grid-cols-1"
                  animate={{
                    rotateY: flippedIndex === index ? 180 : 0,
                  }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  style={{
                    transformStyle: "preserve-3d",
                    WebkitTransformStyle: "preserve-3d"
                  }}
                >
                  {/* Front Side */}
                  <div
                    className="col-start-1 row-start-1 w-full min-h-[500px]"
                    style={{
                      backfaceVisibility: "hidden",
                      WebkitBackfaceVisibility: "hidden",
                      transform: "rotateY(0deg)",
                    }}
                  >
                    <div className="relative w-full h-full">
                      <Image
                        src={card.image}
                        alt={t(card.titleKey)}
                        fill
                        className="object-cover"
                        style={{
                          objectPosition: index === 0 ? "20% 50%" : index === 1 ? "50% 50%" : "80% 50%"
                        }}
                      />
                      {/* Dark overlay for text readability */}
                      <div className="absolute inset-0 bg-black/20" />

                      <div className="absolute bottom-0 left-0 w-full p-8 flex flex-col items-start gap-6">
                        <h3 className="text-3xl font-bold text-white uppercase leading-tight">
                          {t(card.titleKey)}
                        </h3>
                        <div className="w-16 h-1 bg-[#5D9BC9]" />

                        <Button
                          variant="white"
                          className="w-full"
                          onClick={(e: any) => handleReadMore(e, index)}
                        >
                          Read More
                        </Button>
                      </div>
                    </div>
                  </div>

                  {/* Back Side */}
                  <div
                    className="col-start-1 row-start-1 w-full min-h-[500px]"
                    style={{
                      backfaceVisibility: "hidden",
                      WebkitBackfaceVisibility: "hidden",
                      transform: "rotateY(180deg)",
                    }}
                  >
                    <div className="relative w-full h-full bg-[#0F172A] p-8 flex flex-col">
                      {/* Back Arrow */}
                      <div className="mb-6">
                        <ArrowLeft className="text-[var(--color-primary-gold)] w-8 h-8" />
                      </div>

                      <MotionDiv
                        initial={{ opacity: 0 }}
                        animate={{ opacity: flippedIndex === index ? 1 : 0 }}
                        transition={{ duration: 0.3, delay: 0.3 }}
                        className="flex-grow"
                      >
                        <p
                          className="text-lg text-gray-300 leading-relaxed"
                        >
                          {t(card.descriptionKey)}
                        </p>
                      </MotionDiv>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </MotionSection>
  );
};

export default FlipCardsSection;

