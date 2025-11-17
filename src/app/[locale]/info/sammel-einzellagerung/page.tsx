import { getTranslations } from "next-intl/server"
import InfoThekLayout from "@/components/infothek/InfoThekLayout"
import InfoThekContent from "@/components/infothek/InfoThekContent"

export default async function SammelEinzellagerungPage() {
  const t = await getTranslations("principles")
  
  const sections = [
    {
      content: "Kunden erwerben bei DIRECTGOLD anteiliges Eigentum an einer sammelverwahrten Menge von registrierten Goldbarren in Größen zwischen 100 g und 1 kg.\n\nUnabhängig davon, ob es sich um einen einzelnen Kauf, mehrere Einzelkäufe in unregelmäßigen Abständen und unterschiedlichen Beträgen oder um regelmäßige Käufe im Rahmen eines Goldkaufplans handelt, musst Du Dich zum Zeitpunkt des Kaufes nicht entscheiden, Barren welcher Größe Du kaufen möchtest.\n\nStattdessen kaufst Du die auf 0,0001 g genau Deinem gewählten Kaufbetrag entsprechende Grammmenge an der Gesamtmenge der in Sammelverwahrung sicher gelagerten Goldbarren, an der Du anteilig direktes Eigentum erwirbst."
    },
    {
      title: "Warum Sammelverwahrung anstelle individueller Einzellagerung",
      content: "Müsstest Du Dich bei jedem Kauf sofort entscheiden, welche Barrengrößen Du für eine ausschließlich auf Dich lautende Einzellagerung erwerben möchtest,\n\n• könntest Du nicht exakt für den gewünschten Betrag Gold kaufen, da sich der Kaufpreis dann aus den Preisen der einzelnen Barren ergeben würde, und\n\n• wärst Du bei kleineren Beträgen gezwungen, Kleinstbarren (z. B. 10g, 5g, 2g, 1g) zu erwerben, deren Preis pro Gramm aufgrund der höheren Produktions-, Verpackungs- und logistischer Kosten deutlich über dem Preis größerer Barren liegt.\n\nDie von DIRECTGOLD für die Barren-Sammelverwahrung gewählten Barrengrößen von 100 g bis 1 kg stellen daher die ideale Lösung dar:\n\nDie marktüblichen Aufschläge („Barren-Premiums\"), die sich aus produktions- und logistikbedingten Kosten ergeben, sind bei diesen Größen im Vergleich zu den nicht zugeordneten unallocated 12,4 kg-Good-Delivery-Barren des institutionellen Handels (im Gegensatz zu den Aufschlägen bei Kleinstbarren von 50g und kleiner) bereits gering.\n\nSo erwirbst Du bei DIRECTGOLD, unabhängig von der Höhe des Kaufbetrags Eigentum an einer möglichst großen, für den gewünschten Betrag erhältlichen Goldmenge in Form von allocated (=zugeordneten) Goldbarren, zu den besten Konditionen."
    },
    {
      title: "Einzel-Barren-Verwahrung statt Sammelverwahrung – wann immer Du wünscht",
      content: "Weder bezüglich der Rechtssicherheit Deines Eigentums noch hinsichtlich der Transparenz und der jederzeitigen Überprüfbarkeit der für Dich gelagerten Goldmenge besteht ein Unterschied zwischen dem gesammelt für mehrere Eigentümer gelagerten Goldes und dem getrennt ausschließlich für Dich gelagerten Goldes.\n\nTrotzdem haben manche Kunden den Wunsch, ungeteilt zur Gänze in ihrem ausschließlichen Eigentum befindliche Goldbarren in Einzellagerung zu verwahren.\n\nWir bieten Dir deshalb die Möglichkeit, Dein in Sammelverwahrung gehaltenes Gold jederzeit in eine individuelle, auf Deinen Namen lautende Einzellagerung zu überführen.\n\nDabei werden – entsprechend Deinem Eigentumsanteil – Goldbarren ab 100 g aus der Sammelverwahrung entnommen und in Deine persönliche Einzel-Barren-Lagerung übertragen.\n\nSo kombinieren wir maximale Flexibilität beim Erwerb mit der Möglichkeit der ungeteilten Verwahrung der Deiner Goldbarren in Einzellagerung."
    },
    {
      title: "Warum DIRECTGOLD keine 400-Unzen-Großbarren in Sammellagerung verwahrt",
      content: "400-Unzen-Barren (≈ 12,44 kg) sind industrielle Handelsbarren, die ausschließlich im professionellen Interbank- und Raffineriehandel eingesetzt werden und entsprechend unseres Modells nicht für die Lagerung von Endkunden-Gold geeignet sind.\n\nEin solcher Barren hat einen Gegenwert von über 1,4 Millionen Euro und wäre daher für die meisten Anleger weder praktikabel noch handhabbar – insbesondere nicht, wenn eine Überführung in Einzelverwahrung gewünscht wird.\n\nDIRECTGOLD wählt für die Sammellagerung daher bewusst Goldbarren in den Größen ab 100 g, um Dir höchste Flexibilität zu besten Konditionen zu bieten."
    }
  ]

  return (
    <InfoThekLayout>
      <InfoThekContent
        title="Warum DIRECTGOLD anteiliges Eigentum an einer sammelverwahrten Menge von Goldbarren anbietet"
        sections={sections}
      />
    </InfoThekLayout>
  )
}
