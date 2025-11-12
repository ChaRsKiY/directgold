import { notFound } from "next/navigation"
import { getExkursById } from "@/data/exkurs"
import { getTranslations } from "next-intl/server"
import ExkursContent from "@/components/exkurs/ExkursContent"

interface PageProps {
  params: { id: string }
}

export default async function ExkursPage({ params }: PageProps) {
  const t = await getTranslations("exkurs")

  const exkurs = getExkursById((await params).id)
  if (!exkurs) notFound()

  // Prepare translated sections
  const translatedSections = exkurs.content.sections.map((section) => ({
    title: section.title ? t(section.title) : undefined,
    paragraphs: section.paragraphs ? section.paragraphs.map((p) => t(p)) : undefined,
    items: section.items ? section.items.map((item) => t(item)) : undefined,
  }))

  return (
    <main className="min-h-screen bg-[var(--color-light-bg)]">
      <ExkursContent
        title={t(exkurs.title)}
        sections={translatedSections}
        backLink="/#principles"
        backButtonText={t("backToTheTextInMenu")}
      />
    </main>
  )
}
