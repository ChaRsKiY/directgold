"use client"

import Link from "next/link"
import { principlesData } from '@/data/principles'
import Button from '../ui/Button'
import { MotionSection, MotionDiv, MotionH3, MotionP } from '../motion'

export function PrinciplesSection() {
  return (
    <MotionSection
      id="principles"
      className="relative py-24 px-6"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {principlesData.map((principle, index) => (
            <MotionDiv
              key={principle.id}
              className="border-2 border-[var(--color-primary-gold-light)] rounded-lg overflow-hidden flex flex-col"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="flex p-6 pb-0">
                <MotionH3 className="text-[2.5rem] font-extrabold text-[var(--color-primary-gold)]">
                  {principle.title.split(" ").map((word, wordIndex) => (
                    <MotionDiv
                      key={wordIndex}
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 + wordIndex * 0.1 }}
                    >
                      {word}
                    </MotionDiv>
                  ))}
                </MotionH3>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <MotionP
                  className="font-bold text-[var(--color-primary-text)] mb-3"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                >
                  {principle.short}
                </MotionP>
                <MotionP
                  className="text-[var(--color-primary-gold-light)] mb-6 flex-grow text-pretty font-bold text-md"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
                >
                  {principle.long}
                </MotionP>
                <MotionDiv
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
                >
                  <Link href={`/principles/${principle.id}`}>
                    <Button variant="primary" className="w-full">
                      Read More
                    </Button>
                  </Link>
                </MotionDiv>
              </div>
            </MotionDiv>
          ))}
        </div>
      </div>
    </MotionSection>
  )
}
