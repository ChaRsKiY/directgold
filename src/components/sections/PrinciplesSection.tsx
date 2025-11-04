"use client"

import { useState } from "react"
import Button from "@/components/ui/Button"
import Link from "next/link"
import { BiChevronDown } from "react-icons/bi"
import Image from "next/image"

const principles = [
  {
    id: "accountability",
    title: "DIRECT Accountability",
    short: "Sicherheit durch klare Verantwortlichkeiten",
    long: "DIRECTGOLD steht für eine klare Trennung der Verantwortlichkeiten zwischen zwei spezialisierten Gesellschaften: der Goldato Handels GmbH, die ausschließlich den Handel abwickelt, und der GOLDLAGERHAUS Edelmetallverwahrungs AG, die ausschließlich für die sichere Verwahrung des Kundengoldes verantwortlich ist. Diese Struktur gewährleistet maximale Transparenz und Sicherheit bei Goldkäufen, -verkäufen und Auslieferungen.",
    image: "https://placehold.co/600x400",
  },
  {
    id: "validation",
    title: "DIRECT Validation",
    short: "Deine Identität. Dein Konto. Digital bestätigt.",
    long: "Bevor Dein persönliches Kundenkonto bei DIRECTGOLD eröffnet und aktiviert wird, durchläuft es einen strukturierten Validierungsprozess. Dabei wird Deine Identität eindeutig bestätigt und Dein Konto verifiziert – ein zentraler Schritt, um sicherzustellen, dass ausschließlich Du selbst Zugriff auf Dein Golddepot hast und alle Transaktionen rechtssicher erfolgen.",
    image: "https://placehold.co/600x400",
  },
  {
    id: "transparency",
    title: "DIRECT Price Transparency",
    short: "Kaufen und Verkaufen zum LBMA Goldpreis",
    long: "Das transparente DIRECTGOLD-Pricing richtet sich direkt nach dem LBMA-Goldpreis. Bei jeder Transaktion weisen wir Dir den Deinem Kauf zugrunde liegenden LBMA-Goldpreis sowie die verrechnete Kauf- bzw. Verkaufgebühr exakt aus.",
    image: "https://placehold.co/600x400",
  },
  {
    id: "ownership",
    title: "DIRECT Ownership",
    short: "Direktes Eigentum an eindeutig zugeordneten Goldbarren",
    long: "DIRECTGOLD verwahrt für Dich ausschließlich Allocated, Dir direkt zugeordnete, nachweislich physisch vorhandene konkrete Goldbarren. Direktes Eigentum, von Dir persönlich jederzeit 24/7 unabhängig überprüfbar, inkl. Barrennummer für jeden einzelnen Barren.",
    image: "https://placehold.co/600x400",
  },
  {
    id: "origin",
    title: "DIRECT Origin",
    short: "Neu produzierte Barren, direkt von der Raffinerie ins Hochsicherheitslager",
    long: "Du kaufst bei DIRECTGOLD ausschließlich NEU PRODUZIERTE GOLDBARREN, keine Gebrauchtware vom Sekundärmarkt. Die produzierten Barren stammen direkt von LBMA-zertifizierten Raffinerien und werden ohne Umlaufspuren oder unklare Handelsketten ins Hochsicherheitslager transportiert.",
    image: "https://placehold.co/600x400",
  },
  {
    id: "integrity",
    title: "DIRECT Integrity",
    short: "Garantierte Echtheit und unverfälschliche Nachverfolgbarkeit mittels Blockchain-Technologie",
    long: "Jeder einzelne von DIRECTGOLD für seine Kunden gelagerte Barren hat einen Digital Twin - digitalen Zwilling – die fälschungssichere, standardisierte und mit allen relevanten Daten angereicherte digitale Repräsentation des physischen Goldbarrens auf der aXedras-Plattform.",
    image: "https://placehold.co/600x400",
  }
]

export function PrinciplesSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="relative bg-[var(--color-light-bg)] py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Direct Principles</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Sechs Grundsätze, die unsere Philosophie definieren und Ihre Investition sichern.
          </p>
        </div>

        <div className="space-y-4">
          {principles.map((principle, index) => (
            <div
              key={principle.id}
              className="bg-card rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-6 flex items-center justify-between text-left"
              >
                <div className="flex items-center gap-6">
                  <span className="text-accent text-2xl font-bold">{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-card-foreground">{principle.title}</h3>
                    <p className="text-card-foreground leading-relaxed text-pretty">{principle.short}</p>
                  </div>
                </div>
                <BiChevronDown
                  className={`h-6 w-6 text-muted-foreground transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-[800px]" : "max-h-0"
                }`}
              >
                <div className="px-6 pb-6">
                  <div className="grid md:grid-cols-2 gap-6 items-center">
                    <div className="space-y-4 justify-between flex flex-col h-full">
                      <p className="text-card-foreground leading-relaxed text-pretty">{principle.long}</p>
                      <Link href={`/principles/${principle.id}`}>
                        <Button variant="secondary" className="group bg-transparent">
                          Read more
                          <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                        </Button>
                      </Link>
                    </div>
                    <div className="relative aspect-video rounded-lg overflow-hidden">
                      <Image
                        src={principle.image || "/placeholder.svg"}
                        alt={principle.title}
                        width={300}
                        height={300}
                        unoptimized
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
