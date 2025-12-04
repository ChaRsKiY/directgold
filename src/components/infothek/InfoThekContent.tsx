"use client";

import { MotionH1, MotionH2, MotionP } from "@/components/motion";
import Link from "next/link";

interface Section {
  title?: string;
  paragraphs?: string[];
  items?: string[];
  content?: string;
}

interface InfoThekContentProps {
  title: string;
  sections: Section[];
  description?: string;
  fullContent?: string;
  links?: {
    text: string;
    href: string;
  }[];
}

export default function InfoThekContent({
  title,
  sections,
  description,
  fullContent,
  links,
}: InfoThekContentProps) {
  return (
    <div className="space-y-12 pb-20">
      {/* Title */}
      <MotionH1
        className="text-5xl max-md:text-4xl font-bold text-gold mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {title}
      </MotionH1>

      {/* Description */}
      {description && (
        <MotionP
          className="text-xl max-md:text-lg text-primary-text-dark mb-8 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {description}
        </MotionP>
      )}

      {/* Full Content */}
      {fullContent && (
        <MotionP
          className="text-lg max-md:text-base text-primary-text mb-12 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {fullContent}
        </MotionP>
      )}

      {/* Sections */}
      {sections.map((section, index) => (
        <div key={index} className="mb-12 last:mb-0">
          {section.title && (
            <MotionH2
              className="text-3xl max-md:text-2xl font-bold text-gold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              {section.title}
            </MotionH2>
          )}

          {section.paragraphs && (
            <div className="space-y-6">
              {section.paragraphs.map((paragraph, pIndex) => (
                <p
                  key={pIndex}
                  className="text-lg max-md:text-base text-primary-text leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          )}

          {section.content && (
            <div className="space-y-6">
              {section.content.split('\n\n').map((paragraph, pIndex) => (
                <p
                  key={pIndex}
                  className="text-lg max-md:text-base text-primary-text leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          )}

          {section.items && (
            <ul className="space-y-4 mt-6">
              {section.items.map((item, itemIndex) => (
                <li
                  key={itemIndex}
                  className="flex items-start gap-4 text-lg max-md:text-base text-primary-text leading-relaxed"
                >
                  <span className="text-gold mt-2 shrink-0">—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          )}

          {index < sections.length - 1 && (
            <div className="w-full h-px bg-gold/20 mt-12" />
          )}
        </div>
      ))}

      {/* Links Section */}
      {links && links.length > 0 && (
        <div className="pt-12 border-t border-gold/20">
          <h2 className="text-2xl max-md:text-xl font-bold text-gold mb-6">
            Weitere Informationen:
          </h2>
          <div className="flex flex-wrap gap-4">
            {links.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="px-6 py-3 border border-gold/30 bg-transparent hover:bg-gold/10 hover:border-gold transition-all duration-300 font-normal tracking-wider text-sm text-primary-text rounded"
              >
                {link.text}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

