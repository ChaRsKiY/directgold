"use client";

import { MotionDiv, MotionH1, MotionH2, MotionP } from "@/components/motion";
import Link from "next/link";
import Button from "@/components/ui/Button";

interface PrincipleContentProps {
  principle: {
    title: string;
    short: string;
    fullContent: string;
    shortTranslated: string;
    fullContentTranslated: string;
    sections?: {
      title?: string;
      content?: string;
      items?: string[];
      titleTranslated?: string;
      contentTranslated?: string;
      itemsTranslated?: string[];
    }[];
    links?: {
      text: string;
      href: string;
      textTranslated: string;
    }[];
  };
  backToPage: string;
  backToAllPrinciples: string;
  moreInfo: string;
}

export default function PrincipleContent({
  principle,
  backToPage,
  backToAllPrinciples,
  moreInfo,
}: PrincipleContentProps) {
  return (
    <div className="max-w-5xl mx-auto px-6 md:px-12 lg:px-16">
      {/* Back Link */}
      <MotionDiv
        className="pt-24 pb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <Link 
          href="/#principles" 
          className="inline-flex items-center gap-3 text-[var(--color-primary-text-dark)] hover:text-[var(--color-primary-gold)] transition-colors duration-300 group"
        >
          <span className="text-xl transition-transform duration-300 group-hover:-translate-x-1">←</span>
          <span className="text-sm uppercase tracking-wider font-medium">{backToPage}</span>
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
          {principle.title}
        </MotionH1>
        <div className="w-24 h-px bg-[var(--color-primary-gold)] mb-12" />
        <MotionP className="text-xl md:text-2xl text-[var(--color-primary-text-dark)] font-light leading-relaxed max-w-3xl">
          {principle.shortTranslated}
        </MotionP>
      </MotionDiv>

      {/* Main Content */}
      <MotionDiv
        className="pb-20"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <div className="prose prose-lg max-w-none">
          <MotionP className="text-lg md:text-xl text-[var(--color-primary-text)] font-light leading-[1.8] mb-16 max-w-3xl">
            {principle.fullContentTranslated}
          </MotionP>

          {/* Sections */}
          {principle.sections?.map((section, index) => (
            <MotionDiv
              key={index}
              className="mb-24 last:mb-0"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
            >
              {section.titleTranslated && (
                <MotionH2 className="text-2xl md:text-3xl font-light text-[var(--color-primary-text-dark)] mb-8 tracking-tight">
                  {section.titleTranslated}
                </MotionH2>
              )}
              
              {section.contentTranslated && (
                <MotionP className="text-lg md:text-xl text-[var(--color-primary-text)] font-light leading-[1.8] mb-8 max-w-3xl">
                  {section.contentTranslated}
                </MotionP>
              )}
              
              {section.itemsTranslated && (
                <ul className="space-y-6 max-w-3xl">
                  {section.itemsTranslated.map((item, itemIndex) => (
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
              
              {index < (principle.sections?.length || 0) - 1 && (
                <div className="w-full h-px bg-[var(--color-primary-gold)]/20 mt-16" />
              )}
            </MotionDiv>
          ))}
        </div>
      </MotionDiv>

      {/* Links Section */}
      {principle.links && principle.links.length > 0 && (
        <MotionDiv
          className="pt-16 pb-20 border-t border-[var(--color-primary-gold)]/20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <MotionH2 className="text-xl md:text-2xl font-light text-[var(--color-primary-text-dark)] mb-12 tracking-tight">
            {moreInfo}
          </MotionH2>
          <div className="flex flex-wrap gap-4">
            {principle.links.map((link, index) => (
              <Link 
                key={index} 
                href={link.href}
                className="group"
              >
                <Button 
                  variant="secondary"
                  className="border border-[var(--color-primary-gold)]/30 bg-transparent hover:bg-[var(--color-primary-gold)]/10 hover:border-[var(--color-primary-gold)] transition-all duration-300 font-normal tracking-wider text-sm px-6 py-3"
                >
                  {link.textTranslated}
                </Button>
              </Link>
            ))}
          </div>
        </MotionDiv>
      )}

      {/* Back Button */}
      <MotionDiv
        className="pt-12 pb-24 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
      >
        <Link href="/#principles">
          <Button 
            variant="primary"
            className="bg-[var(--color-primary-gold)] text-[var(--color-primary-text-dark)] hover:bg-[var(--color-primary-gold)]/90 transition-all duration-300 font-normal tracking-wider text-sm px-8 py-3"
          >
            {backToAllPrinciples}
          </Button>
        </Link>
      </MotionDiv>
    </div>
  );
}

