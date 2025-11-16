import { getTranslations } from "next-intl/server"
import InfoThekLayout from "@/components/infothek/InfoThekLayout"
import InfoThekContent from "@/components/infothek/InfoThekContent"

export default async function SammelEinzellagerungPage() {
  const t = await getTranslations("principles")
  
  const sections = [
    {
      content: "Kunden erwerben bei DIRECTGOLD anteiliges Eigentum an einer sammelverwahrten Menge von registrierten Goldbarren in Größen zwischen 100 g und 1 kg. Unabhängig davon, ob es sich um einen einzelnen Kauf, mehrere Einzelkäufe in unregelmäßigen Abständen und unterschiedlichen Beträgen oder um regelmäßige Käufe im Rahmen eines Goldkaufplans handelt, musst Du Dich zum Zeitpunkt des Kaufes nicht entscheiden, Barren welcher Größe Du kaufen möchtest."
    },
    {
      title: "Warum Sammelverwahrung anstelle individueller Einzellagerung",
      content: "Müsstest Du Dich bei jedem Kauf sofort entscheiden, welche Barrengrößen Du für eine ausschließlich auf Dich lautende Einzellagerung erwerben möchtest, könntest Du nicht exakt für den gewünschten Betrag Gold kaufen, da sich der Kaufpreis dann aus den Preisen der einzelnen Barren ergeben würde.\n\nDie von DIRECTGOLD für die Barren-Sammelverwahrung gewählten Barrengrößen von 100 g bis 1 kg stellen daher die ideale Lösung dar."
    },
    {
      title: "Einzel-Barren-Verwahrung statt Sammelverwahrung – wann immer Du wünscht",
      content: "Weder bezüglich der Rechtssicherheit Deines Eigentums, noch hinsichtlich der Transparenz und der jederzeitigen Überprüfbarkeit der für Dich gelagerten Goldmenge besteht ein Unterschied zwischen dem gesammelt für mehrere Eigentümer gelagerten Goldes und dem getrennt ausschließlich für Dich gelagerten Goldes.\n\nWir bieten Dir deshalb die Möglichkeit, Dein in Sammelverwahrung gehaltenes Gold jederzeit in eine individuelle, auf Deinen Namen lautende Einzellagerung zu überführen."
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
