"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { principlesData } from '@/data/principles'
import Button from '../ui/Button'
import { useTranslations } from "next-intl"
import { MotionSection, MotionH1, MotionDiv } from '../motion'
import { AnimatePresence } from "framer-motion"

export function PrinciplesSection() {
  const t = useTranslations("principles")
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const togglePrinciple = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <MotionSection
      id="principles"
      className="relative w-full bg-[var(--color-light-bg)] px-[10%] py-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <MotionH1
            className="text-6xl max-md:text-4xl font-bold text-[var(--color-primary-gold)] mb-8 hidden max-lg:block"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-5xl max-md:text-3xl">Unsere</p>
            <p className="text-6xl max-md:text-4xl">Grundsätze</p>
      </MotionH1>
      <div className="flex w-full relative mx-auto max-w-7xl">
        {/* Left Side - Static */}
        <div className="hidden lg:flex lg:w-1/2 flex-col bg-[var(--color-light-bg)] pr-12">
          <MotionH1
            className="font-bold text-[var(--color-primary-gold)] mb-8"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-5xl max-md:text-3xl">Unsere</p>
            <p className="text-6xl max-md:text-4xl">Grundsätze</p>
          </MotionH1>
          <div className="relative w-full max-w-lg h-[60vh] overflow-hidden">
            <Image
              src="/mockups/mock6.jpg"
              alt="DIRECTGOLD Building"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Right Side - Accordion */}
        <div className="w-full lg:w-1/2">
          <div className="space-y-0 flex flex-col gap-4 justify-center h-full">
            {principlesData.map((principle, index) => {
              const isOpen = openIndex === index
              const titleParts = principle.title.split(" ")
              const directPart = titleParts[0] // "DIRECT"
              const restTitle = titleParts.slice(1).join(" ") // остальное

              return (
                <div
                  key={principle.id}
                  className="border-b border-[var(--color-primary-gold)]/20 last:border-b-0"
                >
                  <button
                    onClick={() => togglePrinciple(index)}
                    className="w-full flex items-start gap-4 py-6 text-left hover:bg-[var(--color-primary-gold)]/5 transition-colors duration-200"
                  >
                    <span className="text-2xl md:text-3xl font-normal text-[var(--color-primary-text)]/60 shrink-0">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <div className="flex-1">
                      <div className="flex items-center justify-between gap-4">
                        <h2 className="text-xl md:text-2xl font-bold">
                          <span className="text-[var(--color-primary-gold)]">{directPart}</span>{" "}
                          <span className="text-[var(--color-primary-text)]">{restTitle}</span>
                        </h2>
                        <span className="text-2xl text-[var(--color-primary-text)]/60 shrink-0">
                          {isOpen ? "−" : "+"}
                        </span>
                      </div>
                      <p className="text-base md:text-lg text-[var(--color-primary-text)] mt-2">
                        {t(principle.short)}
                      </p>
                    </div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <MotionDiv
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="pl-12 pb-6 pr-4">
                          <MotionDiv
                            initial={{ y: -10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -10, opacity: 0 }}
                            transition={{ duration: 0.3, delay: 0.1 }}
                            className="flex items-start gap-2 mb-4"
                          >
                            <p className="text-base md:text-lg text-[var(--color-secondary-text)] leading-relaxed">
                              {t(principle.long)}
                            </p>
                          </MotionDiv>
                          <MotionDiv
                            initial={{ y: -10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -10, opacity: 0 }}
                            transition={{ duration: 0.3, delay: 0.2 }}
                          >
                            <Link href={`/principles/${principle.id}`}>
                              <Button variant="primary" className="w-full md:w-auto">
                                {t("readMore")}
                              </Button>
                            </Link>
                          </MotionDiv>
                        </div>
                      </MotionDiv>
                    )}
                  </AnimatePresence>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </MotionSection>
  )
}
