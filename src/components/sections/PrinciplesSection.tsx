"use client"

import Link from "next/link"
import { principlesData } from '@/data/principles'
import Button from '../ui/Button'

export function PrinciplesSection() {
  return (
    <section id="principles" className="relative bg-[var(--color-light-bg)] py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Direct Principles</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Sechs Grundsatze, die unsere Philosophie definieren und Ihre Investition sichern.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {principlesData.map((principle) => (
            <div
              key={principle.id}
              className="bg-card rounded-lg shadow-lg overflow-hidden flex flex-col"
            >
              <div className="relative h-48 bg-gradient-to-br from-[var(--color-primary-gold)] to-[var(--color-primary-gold-dark)]">
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-2xl font-bold text-white text-center px-4">
                    {principle.title}
                  </h3>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <p className="text-sm font-semibold text-[var(--color-primary-gold)] mb-3">
                  {principle.short}
                </p>
                <p className="text-muted-foreground mb-6 flex-grow">
                  {principle.long}
                </p>
                <Link href={`/principles/${principle.id}`}>
                  <Button variant="primary" className="w-full">
                    Read More
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
