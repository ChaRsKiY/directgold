import Link from "next/link"
import Button from "@/components/ui/Button"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"

export default function SammelEinzellagerungPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[var(--color-light-bg)] pt-24 pb-16">
        <div className="container mx-auto max-w-4xl px-6">
          <Link href="/#principles" className="inline-flex items-center gap-2 text-[var(--color-primary-gold)] hover:underline mb-8">
            <span>←</span> Zuruck zum Text im Hauptmenü
          </Link>
          <div className="bg-card rounded-lg shadow-lg p-8">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8">Warum DIRECTGOLD anteiliges Eigentum an einer sammelverwahrten Menge von Goldbarren anbietet</h1>
            <div className="prose prose-lg max-w-none text-foreground space-y-8">
              <section><p className="text-lg leading-relaxed mb-4">Kunden erwerben bei DIRECTGOLD anteiliges Eigentum an einer sammelverwahrten Menge von registrierten Goldbarren in Größen zwischen 100 g und 1 kg. Unabhängig davon, ob es sich um einen einzelnen Kauf, mehrere Einzelkäufe in unregelmäßigen Abständen und unterschiedlichen Beträgen oder um regelmäßige Käufe im Rahmen eines Goldkaufplans handelt, musst Du Dich zum Zeitpunkt des Kaufes nicht entscheiden, Barren welcher Größe Du kaufen möchtest.</p></section>
              <section><h2 className="text-2xl font-bold text-foreground mb-4">Warum Sammelverwahrung anstelle individueller Einzellagerung</h2><p className="text-lg leading-relaxed mb-4">Müsstest Du Dich bei jedem Kauf sofort entscheiden, welche Barrengrößen Du für eine ausschließlich auf Dich lautende Einzellagerung erwerben möchtest, könntest Du nicht exakt für den gewünschten Betrag Gold kaufen, da sich der Kaufpreis dann aus den Preisen der einzelnen Barren ergeben würde.</p><p className="text-lg leading-relaxed mb-4">Die von DIRECTGOLD für die Barren-Sammelverwahrung gewählten Barrengrößen von 100 g bis 1 kg stellen daher die ideale Lösung dar.</p></section>
              <section><h2 className="text-2xl font-bold text-foreground mb-4">Einzel-Barren-Verwahrung statt Sammelverwahrung – wann immer Du wünscht</h2><p className="text-lg leading-relaxed mb-4">Weder bezüglich der Rechtssicherheit Deines Eigentums, noch hinsichtlich der Transparenz und der jederzeitigen Überprüfbarkeit der für Dich gelagerten Goldmenge besteht ein Unterschied zwischen dem gesammelt für mehrere Eigentümer gelagerten Goldes und dem getrennt ausschließlich für Dich gelagerten Goldes.</p><p className="text-lg leading-relaxed mb-4">Wir bieten Dir deshalb die Möglichkeit, Dein in Sammelverwahrung gehaltenes Gold jederzeit in eine individuelle, auf Deinen Namen lautende Einzellagerung zu überführen.</p></section>
            </div>
            <div className="mt-8 pt-8 border-t border-border text-center">
              <Link href="/#principles"><Button variant="primary">Zuruck zum Text im Hauptmenü</Button></Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
