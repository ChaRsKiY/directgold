import { getTranslations } from "next-intl/server"
import ExkursContent from "@/components/exkurs/ExkursContent"

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
      paragraphs: [t("text16"), t("text17"), t("text18")]
    }
  ]

  return (
    <main className="min-h-screen bg-[var(--color-light-bg)]">
      <ExkursContent
        title={t("exkurs1")}
        sections={sections}
        backLink="/#principles"
        backButtonText={t("backToTheTextInMenu")}
      />
    </main>
  )
}
