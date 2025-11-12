import { notFound } from "next/navigation"
import { getPrincipleById } from "@/data/principles"
import { getTranslations } from "next-intl/server"
import PrincipleHero from "@/components/principles/PrincipleHero"
import PrincipleContent from "@/components/principles/PrincipleContent"

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

  // Prepare translated data for client component
  const translatedPrinciple = {
    ...principle,
    shortTranslated: t(principle.short),
    fullContentTranslated: t(principle.fullContent),
    sections: principle.sections?.map((section) => ({
      ...section,
      titleTranslated: section.title ? t(section.title) : undefined,
      contentTranslated: section.content ? t(section.content) : undefined,
      itemsTranslated: section.items ? section.items.map((item) => t(item)) : undefined,
    })),
    links: principle.links?.map((link) => ({
      ...link,
      textTranslated: t(link.text),
    })),
  }

  return (
    <main className="min-h-screen bg-[var(--color-light-bg)]">
      {/* Hero Section with Image */}
      <PrincipleHero image={principle.image} title={principle.title} />

      {/* Content Section */}
      <PrincipleContent
        principle={translatedPrinciple}
        backToPage={t("backTo1Page")}
        backToAllPrinciples={t("backToAllPrinciples")}
        moreInfo={t("moreInfo")}
      />
    </main>
  )
}
