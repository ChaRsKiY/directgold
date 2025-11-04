import Link from "next/link"
import Button from "@/components/ui/Button"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"

export default function KaufgebuhrPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[var(--color-light-bg)] pt-24 pb-16">
        <div className="container mx-auto max-w-4xl px-6">
          <Link href="/#principles" className="inline-flex items-center gap-2 text-[var(--color-primary-gold)] hover:underline mb-8">
            <span>←</span> Zuruck zum Text im Hauptmenü
          </Link>
          <div className="bg-card rounded-lg shadow-lg p-8">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8">Warum DIRECTGOLD eine Kaufgebühr auf den LBMA-Goldpreis erhebt</h1>
            <div className="prose prose-lg max-w-none text-foreground space-y-8">
              <section><p className="text-lg leading-relaxed mb-4">Der LBMA-Goldpreis bildet den internationalen Referenzwert für professionell gehandeltes, nicht zugeordnetes („unallocated") Gold – also Gold, das bei Banken und Großhändlern nur als Buchposition geführt wird, ohne dass der Kunde Eigentum an einem konkret zugeordneten physischen Barren erwirbt.</p><p className="text-lg leading-relaxed mb-4">Beim Kauf über DIRECTGOLD erwirbst Du hingegen direktes Eigentum an konkreten, nummerierten, Dir zugeordneten Goldbarren („allocated") in geprüfter Qualität, die auf Deinen Namen sicher in einem Hochsicherheitslager verwahrt werden.</p></section>
              <section><h2 className="text-2xl font-bold text-foreground mb-4">Physisches Eigentum statt Buchgold</h2><p className="text-lg leading-relaxed mb-4">Der LBMA-Preis bezieht sich auf sogenanntes unallocated Gold, bei dem kein bestimmter Barren existiert. Bei DIRECTGOLD erwirbst Du direktes Eigentum an physischem Gold, das Deinem Namen eindeutig zugeordnet ist – vollständig getrennt vom Vermögen anderer Kunden und von DIRECTGOLD selbst.</p></section>
              <section><h2 className="text-2xl font-bold text-foreground mb-4">Herstellungskosten der Barren</h2><p className="text-lg leading-relaxed mb-4">Der LBMA-Preis basiert auf Großhandelsbarren mit rund 12,44 kg Gewicht („Good Delivery Barren"). DIRECTGOLD bietet hingegen Anlagebarren in einzelhandelsüblichen Formaten von 100 g bis 1 kg an – zertifiziert von Argor-Heraeus und nach LBMA-Good-Delivery-Standards produziert.</p></section>
              <section><h2 className="text-2xl font-bold text-foreground mb-4">Vollversicherter Transport und sichere Verwahrung</h2><p className="text-lg leading-relaxed mb-4">Das von Dir erworbene Gold wird in einem vollständig versicherten Hochsicherheitslager der Firma LOOMIS in der Schweiz eingelagert. Der Transport dorthin erfolgt über spezialisierte Wertelogistiker, inklusive Versicherung gegen Verlust und Diebstahl.</p></section>
            </div>
            <div className="mt-8 pt-8 border-t border-border text-center">
              <Link href="/#principles"><Button variant="primary">Zuruck zum Text im Hauptmenü</Button></Link>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
