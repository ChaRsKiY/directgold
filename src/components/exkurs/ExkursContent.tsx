"use client";

import { MotionDiv, MotionH1, MotionH2, MotionP, MotionLi } from "@/components/motion";
import Link from "next/link";
import Button from "@/components/ui/Button";

interface ExkursContentProps {
  title: string;
  sections: {
    title?: string;
    paragraphs?: string[];
    items?: string[];
  }[];
  backLink: string;
  backButtonText: string;
}

export default function ExkursContent({
  title,
  sections,
  backLink,
  backButtonText,
}: ExkursContentProps) {
  return (
    <div className="max-w-5xl mx-auto px-6 md:px-12 lg:px-16">
      {/* Back Link */}
      <MotionDiv
        className="pt-16 pb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <Link 
          href={backLink} 
          className="inline-flex items-center gap-3 text-[var(--color-primary-text-dark)] hover:text-[var(--color-primary-gold)] transition-colors duration-300 group"
        >
          <span className="text-xl transition-transform duration-300 group-hover:-translate-x-1">←</span>
          <span className="text-sm uppercase tracking-wider font-medium">{backButtonText}</span>
        </Link>
      </MotionDiv>

      {/* Title Section */}
      <MotionDiv
        className="pb-16"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <MotionH1 className="text-5xl md:text-6xl lg:text-7xl font-light text-[var(--color-primary-text-dark)] mb-8 leading-tight tracking-tight">
          {title}
        </MotionH1>
        <div className="w-24 h-px bg-[var(--color-primary-gold)] mb-12" />
      </MotionDiv>

      {/* Content Sections */}
      <div className="pb-20">
        <div className="prose prose-lg max-w-none">
          {sections.map((section, index) => {
            // Разные варианты анимаций и стилей
            const variants = [
              // Вариант 1: Slide from left с акцентом
              {
                initial: { opacity: 0, x: -40, y: 20 },
                whileInView: { opacity: 1, x: 0, y: 0 },
                transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as any },
                className: "mb-32 last:mb-0 pl-6 md:pl-10 border-l-4 border-[var(--color-primary-gold)]/40",
                titleClassName: "text-2xl md:text-3xl font-light text-[var(--color-primary-text-dark)] mb-10 tracking-tight"
              },
              // Вариант 2: Fade + scale с фоном
              {
                initial: { opacity: 0, scale: 0.96, y: 30 },
                whileInView: { opacity: 1, scale: 1, y: 0 },
                transition: { duration: 0.8, ease: "easeOut" } as any,
                className: "mb-32 last:mb-0 py-10 px-8 md:px-12 bg-gradient-to-br from-[var(--color-primary-gold)]/8 to-transparent rounded-lg",
                titleClassName: "text-2xl md:text-3xl font-light text-[var(--color-primary-text-dark)] mb-8 tracking-tight"
              },
              // Вариант 3: Slide from right с вертикальной линией
              {
                initial: { opacity: 0, x: 50, rotateY: -5 },
                whileInView: { opacity: 1, x: 0, rotateY: 0 },
                transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as any },
                className: "mb-32 last:mb-0 ml-0 md:ml-12 relative",
                titleClassName: "text-2xl md:text-3xl font-light text-[var(--color-primary-text-dark)] mb-8 tracking-tight pl-8 relative before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0.5 before:bg-gradient-to-b before:from-[var(--color-primary-gold)] before:to-transparent"
              },
              // Вариант 4: Центрированный с тенью
              {
                initial: { opacity: 0, y: 50, scale: 0.98 },
                whileInView: { opacity: 1, y: 0, scale: 1 },
                transition: { duration: 0.6, ease: "easeOut" },
                className: "mb-32 last:mb-0 max-w-4xl mx-auto px-6 md:px-10 py-8 border border-[var(--color-primary-gold)]/20 rounded-sm",
                titleClassName: "text-2xl md:text-3xl font-light text-[var(--color-primary-text-dark)] mb-8 tracking-tight text-center"
              }
            ];
            
            const variant = variants[index % variants.length];
            
            return (
              <MotionDiv
                key={index}
                className={variant.className}
                initial={variant.initial}
                whileInView={variant.whileInView}
                viewport={{ once: true, margin: "-100px" }}
                transition={variant.transition}
              >
                {section.title && (
                  <MotionH2 className={variant.titleClassName}>
                    {section.title}
                  </MotionH2>
                )}
                
                {section.paragraphs && (
                  <div className="space-y-6 max-w-3xl mb-8">
                    {section.paragraphs.map((paragraph, pIndex) => (
                      <MotionP 
                        key={pIndex}
                        className="text-lg md:text-xl text-[var(--color-primary-text)] font-light leading-[1.8]"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: pIndex * 0.08 }}
                      >
                        {paragraph}
                      </MotionP>
                    ))}
                  </div>
                )}
                
                {section.items && (
                  <ul className="space-y-6 max-w-3xl">
                    {section.items.map((item, itemIndex) => (
                      <MotionLi
                        key={itemIndex}
                        className="flex items-start gap-4 text-lg md:text-xl text-[var(--color-primary-text)] font-light leading-[1.8]"
                        initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: itemIndex * 0.1 }}
                      >
                        <span className="text-[var(--color-primary-gold)] mt-2 shrink-0">—</span>
                        <span>{item}</span>
                      </MotionLi>
                    ))}
                  </ul>
                )}
                
                {index < sections.length - 1 && (
                  <div className="w-full h-px bg-[var(--color-primary-gold)]/20 mt-20" />
                )}
              </MotionDiv>
            );
          })}
        </div>
      </div>

      {/* Back Button */}
      <MotionDiv
        className="pt-12 pb-24 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Link href={backLink}>
          <Button 
            variant="primary"
            className="bg-[var(--color-primary-gold)] text-[var(--color-primary-text-dark)] hover:bg-[var(--color-primary-gold)]/90 transition-all duration-300 font-normal tracking-wider text-sm px-8 py-3"
          >
            {backButtonText}
          </Button>
        </Link>
      </MotionDiv>
    </div>
  );
}

