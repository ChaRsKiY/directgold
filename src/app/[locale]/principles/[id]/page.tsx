import { notFound } from "next/navigation"
import { getPrincipleById } from "@/data/principles"
import { getTranslations } from "next-intl/server"
import InfoThekLayout from "@/components/infothek/InfoThekLayout"
import InfoThekContent from "@/components/infothek/InfoThekContent"

interface PageProps {
  params: {
    id: string
  }
}

export default async function PrinciplePage({ params }: PageProps) {
  const principle = getPrincipleById((await params).id)
  const t = await getTranslations("principles")

  if (!principle) {
    notFound()
  }

  // Convert principle sections to InfoThekContent format
  const sections = principle.sections?.map((section) => ({
    title: section.title ? t(section.title) : undefined,
    content: section.content ? t(section.content) : undefined,
    items: section.items ? section.items.map((item) => t(item)) : undefined,
  })) || []

  const links = principle.links?.map((link) => ({
    text: t(link.text),
    href: link.href,
  })) || []

  return (
    <InfoThekLayout>
      <InfoThekContent
        title={principle.title}
        description={t(principle.short)}
        fullContent={t(principle.fullContent)}
        sections={sections}
        links={links}
      />
    </InfoThekLayout>
  )
}
