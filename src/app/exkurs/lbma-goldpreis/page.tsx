import Link from "next/link"
import Button from "@/components/ui/Button"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"

export default function LBMAGoldpreisPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[var(--color-light-bg)] pt-24 pb-16">
        <div className="container mx-auto max-w-4xl px-6">
          <Link href="/#principles" className="inline-flex items-center gap-2 text-[var(--color-primary-gold)] hover:underline mb-8">
            <span>←</span> Zuruck zum Text im Hauptmenü
          </Link>
          <div className="bg-card rounded-lg shadow-lg p-8">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
              Exkurs 1 - Der London Bullion Market, der LBMA-Goldpreis und das Good-Delivery-System, Allocated und Unallocated Gold
            </h1>
            <div className="prose prose-lg max-w-none text-foreground space-y-8">
              <section><p className="text-lg leading-relaxed mb-4">Der London Bullion Market ist der weltweit bedeutendste außerbörsliche (OTC) Großhandelsmarkt für physisches und nicht zugewiesenes Gold und Silber. Er wird von der London Bullion Market Association (LBMA) koordiniert, die die Marktstandards, Teilnahmebedingungen sowie die Anforderungen an Raffinerien, Händler, Lagerstätten und Clearing-Mitglieder festlegt. Der Londoner Markt dient als globaler Referenzpunkt für den internationalen Goldhandel und steht unter Aufsicht der UK Financial Conduct Authority (FCA).</p></section>
              <section><h2 className="text-2xl font-bold text-foreground mb-4">Der LBMA-Goldpreis</h2><p className="text-lg leading-relaxed mb-4">Die Preisfeststellung des LBMA-Goldpreises (AM und PM) erfolgt zweimal täglich auf dem loco-London-Markt für unallocated Gold, also für nicht zugewiesene Buchpositionen innerhalb des Londoner LBMA-Clearing-Systems. Die Auktionen werden auf der von der Intercontinental Exchange (ICE) betriebenen vollelektronischen Handelsplattform durchgeführt. Die Benchmark wird von der ICE Benchmark Administration Limited (IBA), einer Tochtergesellschaft der ICE, im Auftrag der LBMA administriert.</p><p className="text-lg leading-relaxed mb-4">Nach der Aufdeckung von Manipulationen im früheren „Gold-Fixing" wurde am 20. März 2015 der neue LBMA-Goldpreis eingeführt. Die Auktionen finden um 10:30 Uhr (LBMA Gold Price AM) und 15:00 Uhr (LBMA Gold Price PM) Londoner Zeit statt; die Preisbildung erfolgt in US-Dollar, zusätzlich veröffentlicht die IBA die Benchmark in britischen Pfund und Euro.</p><p className="text-lg leading-relaxed mb-4">Der LBMA-Goldpreis bildet heute die maßgebliche weltweite Referenz für Goldtransaktionen – sowohl für physische als auch für derivatbasierte Geschäfte – und dient weltweit als Basis für Handel, Abrechnung und Bewertung. Er bezieht sich jedoch ausschließlich auf unallocated Gold, das sich in zertifizierten LBMA-Lagerstätten in London befindet.</p></section>
              <section><h2 className="text-2xl font-bold text-foreground mb-4">Der Good-Delivery-Standard</h2><p className="text-lg leading-relaxed mb-4">Ein „Good Delivery"-Goldbarren oder „Standardbarren" wiegt nominell 400 Feinunzen (ca. 12,44 kg), wobei das tatsächliche Gewicht zwischen 350 und 430 Feinunzen schwanken kann. Auf jedem Barren sind Feingehalt, Herstellermarke und Barrennummer eingeprägt.</p><p className="text-lg leading-relaxed mb-4">Die Herstellung von Good-Delivery-Barren darf ausschließlich durch von der LBMA zertifizierte Raffinerien erfolgen, die auf der sogenannten Good Delivery List geführt werden. Diese Raffinerien erfüllen strenge Anforderungen an Qualität, Produktionsprozesse, ethische Beschaffung und Rückverfolgbarkeit.</p></section>
              <section><h2 className="text-2xl font-bold text-foreground mb-4">Loco London, Unallocated und Allocated Gold</h2><div className="mb-6"><h3 className="text-xl font-bold text-foreground mb-3">Allocated Gold (zugeordnetes Gold)</h3><p className="text-lg leading-relaxed mb-4">Der Kunde besitzt konkrete, nummerierte Barren und ist juristisch deren Eigentümer. Diese Barren werden physisch getrennt vom Vermögen des Verwahrers aufbewahrt und sind vollständig insolvenzgeschützt. Allocated Gold stellt damit direktes Eigentum dar und bietet höchsten Schutz vor Kontrahentenrisiken oder Systemausfällen.</p></div><div className="mb-6"><h3 className="text-xl font-bold text-foreground mb-3">Unallocated Gold (nicht zugeordnetes Gold)</h3><p className="text-lg leading-relaxed mb-4">Rund 95 % des weltweiten professionellen Goldhandels findet auf Basis von unallocated Konten statt. Der Kunde hat lediglich einen Anspruch auf eine bestimmte Goldmenge, nicht jedoch auf bestimmte Barren. Es handelt sich um eine Forderung gegenüber dem Verwahrer, ähnlich einem Bankguthaben.</p><p className="text-lg leading-relaxed mb-4">Dieses Modell ist sehr effizient und liquid, birgt jedoch ein Kontrahentenrisiko: Wenn der Verwahrer oder das Bullion-Haus insolvent wird, kann das unallocated Gold teilweise oder vollständig verloren gehen. Das System funktioniert nach dem Prinzip der Teilreservehaltung („fractional reserve") – ähnlich dem Bankwesen.</p></div></section>
              <section><h2 className="text-2xl font-bold text-foreground mb-4">Handelsvolumina, physische Bestände loco London und Paper-to-Physical-Ratio</h2><p className="text-lg leading-relaxed mb-4">LBMA-Clearingvolumen: das derzeitige tägliche durchschnittliche Netto-Clearingvolumen liegt bei über 20 Millionen Feinunzen (~622 Tonnen). Quelle: LBMA-Clearing, 2025</p><p className="text-lg leading-relaxed mb-4">Der internationale Goldhandel basiert zu über 90 % auf unallocated Strukturen. Diese ermöglichen effiziente Marktliquidität, bergen jedoch das Risiko, dass viele Ansprüche auf eine begrenzte physische Basis treffen.</p><p className="text-lg leading-relaxed mb-4 font-bold">DIRECTGOLD steht deshalb bewusst in Kontrast zum globalen unallocated Markt. Jeder Kauf ist vollständig physisch gedeckt und rechtlich Eigentum des Kunden.</p></section>
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
