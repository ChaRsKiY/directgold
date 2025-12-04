import { getTranslations } from "next-intl/server"
import InfoThekLayout from "@/components/infothek/InfoThekLayout"
import InfoThekContent from "@/components/infothek/InfoThekContent"

export default async function LieferungPage() {
    const t = await getTranslations("infothek")

    const sections = [
        {
            content: "Mit DIRECT Delivery entscheidest Du selbst, wann und wohin Dein physisches Gold geliefert wird – einfach, sicher und vollständig transparent über die Transaktionsplattform. Bei Sammelverwahrung wählst Du frei die gewünschten Barrengrößen von 1 g bis 1 kg; bei individueller Einzellagerung kannst Du zusätzlich konkret Deine Dir zugeordneten nummerierten Barren ausliefern lassen. Alle Lieferungen erfolgen über erstklassige, vollversicherte Logistikpartner. DIRECT Delivery verbindet digitale Effizienz mit maximaler physischer Sicherheit."
        },
        {
            title: "Volle Kontrolle über Deine Lieferung",
            content: "Mit DIRECT Delivery hast Du die volle Kontrolle darüber, wann und wohin Dein physisches Gold geliefert wird. Du kannst Dir Dein Gold jederzeit bequem über unsere Transaktionsplattform an Deine gewünschte Lieferadresse ausliefern lassen – einfach, transparent und sicher."
        },
        {
            title: "Flexible Barrengrößen bei Sammelverwahrung",
            content: "Wird Dein Gold von der GOLDLAGERHAUS Edelmetallverwahrungs AG in Sammelverwahrung gehalten, entscheidest Du selbst, in welchen Barrengrößen Du Deine Auslieferung erhalten möchtest – von 1 g, 2 g, 5 g, 10 g, 20 g, 1 Unze, 50 g, 100 g, 250 g, 500 g bis zu 1 kg.\n\nMit Deinem Online-Lieferauftrag beauftragst Du gleichzeitig\n• die GOLDLAGERHAUS AG, die für Deine gewünschte Lieferung erforderliche Goldmenge an die GOLDATO Handels GmbH zu übertragen, sowie\n• die GOLDATO Handels GmbH, die physische Auslieferung der von Dir gewählten Barrengrößen an Deine Lieferadresse vorzunehmen."
        },
        {
            title: "Transparente Kostenstruktur",
            content: "Für die physische Lieferung fallen lediglich die Stückelungsaufpreise (Barren-Premiums) entsprechend der gewählten Barrengrößen sowie die vom Lieferwert und Zielort abhängigen Lieferkosten an.\n\nBeide Kostenkomponenten sind jederzeit in unserer Gebührentabelle einsehbar und werden Dir im Zuge der Erstellung Deines Online-Lieferauftrags transparent und exakt vor Auftragserteilung angezeigt.\n\nZur Auslieferung gelangen ausschließlich Barren höchster Qualität, hergestellt von LBMA-zertifizierten Raffinerien, geprüft und weltweit anerkannt."
        },
        {
            title: "Auslieferung aus Einzellagerung",
            content: "Hast Du hingegen nicht in Sammellagerung, sondern ausschließlich in Deinem Namen gelagerte Goldbarren in individueller Einzellagerung bei der GOLDLAGERHAUS AG verwahrt, steht Dir für diese – zusätzlich zum Auslieferungsvorgang wie bei der Sammelverwahrung – auch die Option offen, Deine konkreten Barren aus der Einzellagerung direkt an Deine Lieferadresse versenden zu lassen.\n\nIn diesem Fall beauftragst Du über unsere Transaktionsplattform die GOLDLAGERHAUS AG – unter Angabe der konkreten auf den Barren geprägten Barrennummer – mit der Auslieferung aus dem Hochsicherheitslager von LOOMIS in Zürich/Kloten."
        },
        {
            title: "Sichere und versicherte Lieferung",
            content: "Selbstverständlich erfolgen sämtliche Auslieferungen über erstklassige Logistik-Partner und sind voll versichert.\n\nDIRECT Delivery steht für die konsequente Verbindung aus digitaler Effizienz und physischer Sicherheit."
        }
    ]

    return (
        <InfoThekLayout>
            <InfoThekContent
                title="LIEFERUNG"
                sections={sections}
            />
        </InfoThekLayout>
    )
}
