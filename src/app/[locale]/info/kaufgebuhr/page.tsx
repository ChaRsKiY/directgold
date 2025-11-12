import { getTranslations } from "next-intl/server"
import InfoContent from "@/components/info/InfoContent"

export default async function KaufgebuhrPage() {
  const t = await getTranslations("principles")
  
  // Using hardcoded content for now - can be moved to translations if needed
  const sections = [
    {
      content: "Der LBMA-Goldpreis bildet den internationalen Referenzwert für professionell gehandeltes, nicht zugeordnetes („unallocated\") Gold – also Gold, das bei Banken und Großhändlern nur als Buchposition geführt wird, ohne dass der Kunde Eigentum an einem konkret zugeordneten physischen Barren erwirbt.\n\nBeim Kauf über DIRECTGOLD erwirbst Du hingegen direktes Eigentum an konkreten, nummerierten, Dir zugeordneten Goldbarren („allocated\") in geprüfter Qualität, die auf Deinen Namen sicher in einem Hochsicherheitslager verwahrt werden."
    },
    {
      title: "Physisches Eigentum statt Buchgold",
      content: "Der LBMA-Preis bezieht sich auf sogenanntes unallocated Gold, bei dem kein bestimmter Barren existiert. Bei DIRECTGOLD erwirbst Du direktes Eigentum an physischem Gold, das Deinem Namen eindeutig zugeordnet ist – vollständig getrennt vom Vermögen anderer Kunden und von DIRECTGOLD selbst."
    },
    {
      title: "Herstellungskosten der Barren",
      content: "Der LBMA-Preis basiert auf Großhandelsbarren mit rund 12,44 kg Gewicht („Good Delivery Barren\"). DIRECTGOLD bietet hingegen Anlagebarren in einzelhandelsüblichen Formaten von 100 g bis 1 kg an – zertifiziert von Argor-Heraeus und nach LBMA-Good-Delivery-Standards produziert."
    },
    {
      title: "Vollversicherter Transport und sichere Verwahrung",
      content: "Das von Dir erworbene Gold wird in einem vollständig versicherten Hochsicherheitslager der Firma LOOMIS in der Schweiz eingelagert. Der Transport dorthin erfolgt über spezialisierte Wertelogistiker, inklusive Versicherung gegen Verlust und Diebstahl."
    }
  ]

  return (
    <main className="min-h-screen bg-[var(--color-light-bg)]">
      <InfoContent
        title="Warum DIRECTGOLD eine Kaufgebühr auf den LBMA-Goldpreis erhebt"
        sections={sections}
        backLink="/#principles"
        backButtonText={t("backToAllPrinciples")}
      />
    </main>
  )
}
