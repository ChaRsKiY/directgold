import { getTranslations } from "next-intl/server"
import InfoThekLayout from "@/components/infothek/InfoThekLayout"
import InfoThekContent from "@/components/infothek/InfoThekContent"

export default async function LBMAGoldpreisPage() {
  const t = await getTranslations("lbmagoldprice")

  const sections = [
    {
      paragraphs: [t("text1")]
    },
    {
      title: t("text2"),
      paragraphs: [t("text3"), t("text4"), t("text5")]
    },
    {
      title: t("text6"),
      paragraphs: [t("text7"), t("text8")]
    },
    {
      title: t("text9"),
      paragraphs: [
        t("text10"),
        t("text11"),
        t("text12"),
        t("text13"),
        t("text14")
      ]
    },
    {
      title: t("text15"),
      paragraphs: [t("text15a")],
      items: [
        t("text15c"),
        t("text15d"),
        t("text15e"),
        t("text15f"),
        t("text15g")
      ]
    },
    {
      title: t("text16"),
      paragraphs: [t("text16a")],
      items: [
        t("text16b"),
        t("text16c"),
        t("text16d"),
        t("text16e"),
        t("text16f"),
        t("text16g"),
        t("text16h"),
        t("text16i"),
        t("text16j")
      ]
    },
    {
      title: t("text17"),
      paragraphs: [t("text17a"), t("text17b")]
    },
    {
      title: t("text18"),
      paragraphs: [t("text18a")]
    }
  ]

  return (
    <InfoThekLayout>
      <InfoThekContent
        title={t("exkurs1")}
        sections={sections}
      />
    </InfoThekLayout>
  )
}
