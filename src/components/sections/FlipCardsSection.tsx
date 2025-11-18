"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { MotionSection, MotionH2, MotionDiv } from "../motion";
import { useTranslations } from "next-intl";
import { motion } from "motion/react";

interface FlipCard {
  image: string;
  titleKey: string;
  descriptionKey: string;
  shortDescriptionKey: string;
}

const FlipCardsSection = () => {
  const t = useTranslations("services");
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null);
  const textRefs = useRef<(HTMLParagraphElement | null)[]>([]);

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
      image: "/mockups/mock2.jpg",
      titleKey: "kaufVerkaufTitle",
      descriptionKey: "kaufVerkaufDescription",
      shortDescriptionKey: "kaufVerkaufShort",
    },
    {
      image: "/mockups/mock3.png",
      titleKey: "lagerungTitle",
      descriptionKey: "lagerungDescription",
      shortDescriptionKey: "lagerungShort",
    },
    {
      image: "/mockups/mock4.jpg",
      titleKey: "lieferungTitle",
      descriptionKey: "lieferungDescription",
      shortDescriptionKey: "lieferungShort",
    },
  ];

  const handleCardClick = (index: number) => {
    setFlippedIndex(flippedIndex === index ? null : index);
  };

  // Adjust text on flip
  useEffect(() => {
    if (flippedIndex !== null) {
      // Small delay to ensure element is rendered
      const timeoutId = setTimeout(() => {
        const element = textRefs.current[flippedIndex];
        if (element) {
          const container = element.parentElement?.parentElement;
          if (container) {
            const maxHeight = container.clientHeight - 96; // padding (p-6 md:p-8 = 48px * 2)
            const fullText = t(cards[flippedIndex].descriptionKey);
            const truncated = truncateBySentences(fullText, maxHeight, element);
            element.textContent = truncated;
          }
        }
      }, 100);
      
      return () => clearTimeout(timeoutId);
    }
  }, [flippedIndex, t]);

  return (
    <MotionSection
      className="px-[10%] py-20 bg-[var(--color-light-bg)]"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Grid Layout: mobile - 1 column, md - 1 large + 2 in row, lg - 3 in row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              className={`relative w-full cursor-pointer max-h-[600px] ${
                index === 0 
                  ? "aspect-[1/2] md:aspect-[3/2] lg:aspect-[1/2] md:col-span-2 lg:col-span-1" 
                  : "aspect-[1/2] md:aspect-[2/5] lg:aspect-[1/2]"
              }`}
              onClick={() => handleCardClick(index)}
              whileHover={{ scale: flippedIndex === index ? 1 : 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <div 
                className="relative w-full h-full"
                style={{ 
                  perspective: "1000px",
                  WebkitPerspective: "1000px"
                }}
              >
                <motion.div
                  className="relative w-full h-full"
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
                    className="absolute inset-0 w-full h-full"
                    style={{
                      backfaceVisibility: "hidden",
                      WebkitBackfaceVisibility: "hidden",
                      transform: "rotateY(0deg)",
                    }}
                  >
                    <div className="relative w-full h-full verflow-hidden">
                      <Image
                        src={card.image}
                        alt={t(card.titleKey)}
                        fill
                        className="object-cover"
                      />
                      {/* Gradient Overlay: black transparent top, gold transparent bottom */}
                      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-[var(--color-primary-gold)]/80" />
                      {/* Title - bottom left */}
                      <div className="absolute bottom-0 left-0 p-6 md:p-8">
                        <MotionH2
                          className="text-3xl md:text-4xl lg:text-5xl font-bold text-white"
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                          {t(card.titleKey)}
                        </MotionH2>
                      </div>
                    </div>
                  </div>

                  {/* Back Side */}
                  <div
                    className="absolute inset-0 w-full h-full"
                    style={{
                      backfaceVisibility: "hidden",
                      WebkitBackfaceVisibility: "hidden",
                      transform: "rotateY(180deg)",
                    }}
                  >
                    <div className="relative w-full h-full overflow-hidden bg-[var(--color-primary-gold)] p-6 md:p-8 flex items-center justify-center">
                      <MotionDiv
                        initial={{ opacity: 0 }}
                        animate={{ opacity: flippedIndex === index ? 1 : 0 }}
                        transition={{ duration: 0.3, delay: 0.3 }}
                        className="w-full h-full flex items-center justify-center"
                      >
                        <p
                          ref={(el) => {
                            textRefs.current[index] = el;
                          }}
                          className="text-base md:text-lg text-[var(--color-primary-text)] leading-relaxed"
                          style={{ 
                            maxHeight: "100%",
                            overflow: "hidden"
                          }}
                        >
                          {flippedIndex === index ? t(card.descriptionKey) : ""}
                        </p>
                      </MotionDiv>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </MotionSection>
  );
};

export default FlipCardsSection;

