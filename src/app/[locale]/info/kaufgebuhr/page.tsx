import { getTranslations } from "next-intl/server"
import InfoThekLayout from "@/components/infothek/InfoThekLayout"
import InfoThekContent from "@/components/infothek/InfoThekContent"

export default async function KaufgebuhrPage() {
  const t = await getTranslations("principles")
  
  const sections = [
    {
      content: "Der LBMA-Goldpreis bildet den internationalen Referenzwert für professionell gehandeltes, nicht zugeordnetes („unallocated\") Gold – also Gold, das bei Banken und Großhändlern nur als Buchposition geführt wird, ohne dass der Kunde Eigentum an einem konkret zugeordneten physischen Barren erwirbt. Statt eines direkten Eigentumsrechts besitzt der Kunde lediglich eine Forderung aus einem schuldrechtlichen Verhältnis gegenüber dem Verwahrer.\n\nBeim Kauf über DIRECTGOLD erwirbst Du hingegen direktes Eigentum an konkreten, nummerierten, Dir zugeordneten Goldbarren („allocated\") in geprüfter Qualität, die auf Deinen Namen sicher in einem Hochsicherheitslager verwahrt werden.\n\nDie auf den LBMA-Goldpreis aufgeschlagene Kaufgebühr deckt jene Kosten und Leistungen ab, die erforderlich sind, um aus einem anonymen Großhandels-Spotpreis ein konkretes, eigentumsrechtlich eindeutig dem Kunden zugeordnetes, versichertes Anlagegut zu machen."
    },
    {
      title: "Physisches Eigentum statt Buchgold (allocated vs. unallocated)",
      content: "Der LBMA-Preis bezieht sich auf sogenanntes unallocated Gold, bei dem kein bestimmter Barren existiert.\n\nBei DIRECTGOLD erwirbst Du direktes Eigentum an physischem Gold, das Deinem Namen eindeutig zugeordnet ist – vollständig getrennt vom Vermögen anderer Kunden und von DIRECTGOLD selbst.\n\nDie Kaufgebühr deckt die Kosten für diese physische Zuordnung, Dokumentation und sichere Verwahrung."
    },
    {
      title: "Herstellungskosten der Barren",
      content: "Der LBMA-Preis basiert auf Großhandelsbarren mit rund 12,44 kg Gewicht („Good Delivery Barren\").\n\nDIRECTGOLD bietet hingegen Anlagebarren in einzelhandelsüblichen Formaten von 100 g bis 1 kg an – zertifiziert von Argor-Heraeus und nach LBMA-Good-Delivery-Standards produziert.\n\nDie höheren Stückkosten, Prüf- und Verpackungsaufwände dieser Kleinbarren sind im LBMA-Spotpreis nicht enthalten und werden über die Kaufgebühr abgegolten."
    },
    {
      title: "Vollversicherter Transport und sichere Verwahrung in der Schweiz",
      content: "Das von Dir erworbene Gold wird in einem vollständig versicherten Hochsicherheitslager der Firma LOOMIS in der Schweiz eingelagert.\n\nDer Transport dorthin erfolgt über spezialisierte Wertelogistiker, inklusive Versicherung gegen Verlust und Diebstahl.\n\nDiese Leistungen sind im LBMA-Preis nicht enthalten, sondern Teil des physischen Eigentumserwerbs – und daher Bestandteil der Kaufgebühr."
    },
    {
      title: "Qualitätssicherung, Prüfung und Transparenz",
      content: "Jeder bei DIRECTGOLD verwahrte Barren ist einzeln identifizierbar, geprüft und dokumentiert – inklusive Seriennummer, Hersteller, Feinheit und Gewicht.\n\nÜber die Integration in das aXedras-Netzwerk wird zusätzlich die Echtheit und Rückverfolgbarkeit digital abgesichert („digitaler Zwilling\").\n\nDiese Prozesse verursachen Prüf-, Verwaltungs- und IT-Kosten, die durch die Kaufgebühr mitgedeckt werden."
    },
    {
      title: "Versicherung, Audit und laufende Kontrollen",
      content: "Alle bei der GOLDLAGERHAUS AG gelagerten Werte sind voll versichert und unterliegen regelmäßigen externen Bestands- und Sicherheitsprüfungen.\n\nDiese Maßnahmen dienen dem Schutz der Kundenbestände und sind bei unallocated-Positionen im Interbankenhandel nicht gegeben."
    },
    {
      title: "Zusammenfassung",
      content: "Der internationale LBMA-Goldpreis bildet den Großhandels-Spotpreis für nicht zugeordnetes („unallocated\") Gold ab.\n\nBei DIRECTGOLD erwerben Sie hingegen physisches, eindeutig zugeordnetes („allocated\") Gold in Form von geprüften Argor-Heraeus-Barren, die in einem vollständig versicherten Hochsicherheitslager in der Schweiz verwahrt werden.\n\nDie auf den LBMA-Preis aufgeschlagene Kaufgebühr deckt die realen Kosten für Produktion, Transport, Versicherung, Lagerung, Dokumentation, Qualitäts- und Echtheitsprüfung sowie die vollständige digitale Rückverfolgbarkeit Ihres Goldes ab.\n\nDamit erhalten Sie nicht nur einen Preis für Buchgold, sondern gesichertes Eigentum an konkreten physischen Goldbarren – transparent, überprüfbar und außerhalb des Bankensystems."
    }
  ]

  return (
    <InfoThekLayout>
      <InfoThekContent
        title="Warum DIRECTGOLD eine Kaufgebühr auf den LBMA-Goldpreis erhebt"
        sections={sections}
      />
    </InfoThekLayout>
  )
}
