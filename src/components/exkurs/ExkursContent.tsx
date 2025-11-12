"use client";

import { MotionDiv, MotionH1, MotionH2, MotionP } from "@/components/motion";
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
      <MotionDiv
        className="pb-20"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <div className="prose prose-lg max-w-none">
          {sections.map((section, index) => (
            <MotionDiv
              key={index}
              className="mb-24 last:mb-0"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
            >
              {section.title && (
                <MotionH2 className="text-2xl md:text-3xl font-light text-[var(--color-primary-text-dark)] mb-8 tracking-tight">
                  {section.title}
                </MotionH2>
              )}
              
              {section.paragraphs && (
                <div className="space-y-6 max-w-3xl mb-8">
                  {section.paragraphs.map((paragraph, pIndex) => (
                    <MotionP 
                      key={pIndex}
                      className="text-lg md:text-xl text-[var(--color-primary-text)] font-light leading-[1.8]"
                    >
                      {paragraph}
                    </MotionP>
                  ))}
                </div>
              )}
              
              {section.items && (
                <ul className="space-y-6 max-w-3xl">
                  {section.items.map((item, itemIndex) => (
                    <li 
                      key={itemIndex} 
                      className="flex items-start gap-4 text-lg md:text-xl text-[var(--color-primary-text)] font-light leading-[1.8]"
                    >
                      <span className="text-[var(--color-primary-gold)] mt-2 shrink-0">—</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
              
              {index < sections.length - 1 && (
                <div className="w-full h-px bg-[var(--color-primary-gold)]/20 mt-16" />
              )}
            </MotionDiv>
          ))}
        </div>
      </MotionDiv>

      {/* Back Button */}
      <MotionDiv
        className="pt-12 pb-24 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
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

