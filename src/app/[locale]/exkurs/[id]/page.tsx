import { notFound } from "next/navigation"
import { getExkursById } from "@/data/exkurs"
import { getTranslations } from "next-intl/server"
import InfoThekLayout from "@/components/infothek/InfoThekLayout"
import InfoThekContent from "@/components/infothek/InfoThekContent"

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
    <InfoThekLayout>
      <InfoThekContent
        title={t(exkurs.title)}
        sections={translatedSections}
      />
    </InfoThekLayout>
  )
}
