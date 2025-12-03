"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { principlesData } from '@/data/principles'
import Button from '../ui/Button'
import { useTranslations } from "next-intl"
import { MotionSection, MotionH1, MotionDiv } from '../motion'
import { AnimatePresence } from "framer-motion"
import ProgressIndicator from "../ui/ProgressIndicator"

export function PrinciplesSection() {
  const t = useTranslations("principles")
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const togglePrinciple = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <MotionSection
      id="principles"
      className="relative w-full min-h-screen flex items-center py-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <div className="absolute left-0 bottom-0 p-8 z-100">
        <ProgressIndicator activeIndex={4} />
      </div>
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/land.jpg"
          alt="Background"
          fill
          className="object-cover brightness-75"
          priority
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-[5%] flex flex-col lg:flex-row gap-16 lg:gap-32">

        {/* Left Side - Content */}
        <div className="w-full lg:w-1/2 flex flex-col justify-between text-white">
          <div>
            <MotionDiv
              className="mb-2"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-5xl md:text-6xl font-bold mb-5">Grundsätze</h2>
              <div className="w-24 h-1 bg-[var(--color-primary-gold)] mb-5" />
            </MotionDiv>
            <p className="text-xl md:text-2xl font-light text-gray-200">OUR CODEX</p>
          </div>

          <div className="mt-12 lg:mt-auto">
            <MotionDiv
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="text-2xl md:text-3xl font-light tracking-wide uppercase">JOIN OUR JOURNEY</p>
              <p className="text-2xl md:text-3xl font-light tracking-wide uppercase mt-2">LET THIS BE OUR FIRST STEP</p>
              <p className="text-5xl md:text-7xl font-bold tracking-widest mt-4 uppercase">TOGETHER.</p>
            </MotionDiv>

            <Link href="/account/open">
              <Button variant="blue" className="w-full">
                OPEN ACCOUNT
              </Button>
            </Link>
          </div>
        </div>

        {/* Right Side - Accordion */}
        <div className="w-full lg:w-1/2">
          <div className="bg-black/60 backdrop-blur-sm p-8 md:p-12 border border-white/10">
            <div className="space-y-0 flex flex-col">
              {principlesData.map((principle, index) => {
                const isOpen = openIndex === index
                const titleParts = principle.title.split(" ")
                const directPart = titleParts[0] // "DIRECT"
                const restTitle = titleParts.slice(1).join(" ") // rest

                return (
                  <div
                    key={principle.id}
                    className="border-b border-white/20 last:border-b-0"
                  >
                    <button
                      onClick={() => togglePrinciple(index)}
                      className="w-full flex items-center gap-6 py-6 text-left group transition-colors duration-200"
                    >
                      <span className="text-xl text-[var(--color-primary-gold)] font-light shrink-0">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <div className="flex-1 flex items-center justify-between">
                        <h3 className="text-lg md:text-xl font-medium text-white group-hover:text-[var(--color-primary-gold)] transition-colors">
                          <span className="font-bold">{directPart}</span> {restTitle}
                        </h3>
                        <div className={`w-6 h-6 rounded-full border border-white/30 flex items-center justify-center text-white/70 transition-transform duration-300`}>
                          <span className="text-sm">{isOpen ? '-' : '+'}</span>
                        </div>
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
                            <p className="text-sm md:text-base text-[#5D9BC9] mb-4 font-medium">
                              {t(principle.short)}
                            </p>
                            <p className="text-sm md:text-base text-gray-300 leading-relaxed mb-6">
                              {t(principle.long)}
                            </p>
                            <Link href={`/principles/${principle.id}`}>
                              <Button variant="white" className="px-4 py-2 md:px-6 md:py-2">
                                READ MORE
                              </Button>
                            </Link>
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

      </div>
    </MotionSection>
  )
}
