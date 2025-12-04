import { getTranslations } from "next-intl/server"
import InfoThekLayout from "@/components/infothek/InfoThekLayout"
import InfoThekContent from "@/components/infothek/InfoThekContent"

export default async function KaufVerkaufPage() {
    const t = await getTranslations("infothek")

    const sections = [
        {
            content: "DIRECTGOLD bietet Goldkauf und -verkauf nach professionellen Marktstandards zum offiziellen LBMA Gold Price PM, mit klar ausgewiesenen, degressiven Gebühren. Kunden erwerben ausschließlich neu produzierte LBMA-zertifizierte Barren, gelagert im versicherten Hochsicherheitslager von Loomis Zürich. Jeder Barren besitzt einen digitalen Zwilling auf der aXedras-DLT, der Echtheit und Herkunft unverfälschbar dokumentiert. Damit erhältst du eindeutig zugeordnetes Gold, unabhängig überprüfbar und bereits ab € 100 kaufbar – inklusive garantiertem Rückkauf zum LBMA-Preis."
        },
        {
            title: "Professionelle Marktstandards und transparente Preisbildung",
            content: "Goldkauf und -verkauf bei DIRECTGOLD folgen einem klar strukturierten, vollständig transparenten Modell, das sich an professionellen Marktstandards orientiert. Alle Transaktionen werden zum offiziellen LBMA Gold Price PM ausgeführt; die höchst kompetitiven Kauf- und Verkaufsgebühren sind eindeutig ausgewiesen und basieren auf einem degressiven Gebührenmodell, das Dein über 12 Monate akkumuliertes Investitionsvolumen berücksichtigt. Dadurch entfallen individuelle, schwer vergleichbare Händlerpreise vollständig."
        },
        {
            title: "Neu produzierte LBMA-zertifizierte Barren",
            content: "Du erwirbst ausschließlich Gold in Form von neu produzierten Barren, hergestellt von LBMA-zertifizierten Raffinerien wie Argor-Heraeus oder Valcambi. Nach der Produktion gelangen die Barren direkt in das Hochsicherheitslager von Loomis in Zürich/Kloten – vollständig versichert und gemäß höchsten Qualitäts- und Compliance-Standards. Das sichert Dir maximale Liquidität und zweifelsfreie Herkunft."
        },
        {
            title: "Digitaler Zwilling auf der aXedras-DLT",
            content: "Jeder Barren verfügt über einen digitalen Zwilling auf der aXedras-DLT. Dieser enthält unverfälschbar alle relevanten Echtheits- und Herkunftsdaten – einschließlich Seriennummern, Produktionsdetails, Lieferkette und aktuellem Lagerort – direkt durch Raffinerien und Hochsicherheitslager bereitgestellt. Dieser neue Sicherheitsstandard kommt einer Revolution im internationalen Goldhandel gleich. DIRECTGOLD bietet seinen Kunden nun direkten Zugang dazu."
        },
        {
            title: "Eindeutig zugeordnetes Gold mit garantiertem Rückkauf",
            content: "Du erwirbst damit eindeutig zugeordnetes (allocated) physisches Gold, dessen Qualität, Lieferkette und Lagerstandort Du selbst 24/7 unabhängig überprüfen kannst. Du bist dennoch nicht an Barrengrößen gebunden, sondern kannst bereits in Beträgen ab € 100,- Gold kaufen. Darüber hinaus garantiert DIRECTGOLD jederzeit den Rückkauf zum LBMA Gold Price – fair, liquide und vollständig transparent."
        }
    ]

    return (
        <InfoThekLayout>
            <InfoThekContent
                title="KAUF & VERKAUF"
                sections={sections}
            />
        </InfoThekLayout>
    )
}
