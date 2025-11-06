import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { getPrincipleById } from "@/data/principles"
import Button from "@/components/ui/Button"
import { getTranslations } from "next-intl/server"

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

  return (
    <>
      <main className="min-h-screen bg-[var(--color-light-bg)] pt-24 pb-16">
        <div className="container mx-auto max-w-4xl px-6">
          <Link 
            href="/#principles" 
            className="inline-flex items-center gap-2 text-[var(--color-primary-gold)] hover:underline mb-8"
          >
            <span>←</span> {t("backTo1Page")}
          </Link>

          <div className="bg-card rounded-lg overflow-hidden mb-8">
            <div className="relative h-64 md:h-96">
              <Image
                src={principle.image}
                alt={principle.title}
                fill
                className="object-cover"
                unoptimized
              />
            </div>
            <div className="p-8">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                {principle.title}
              </h1>
              <p className="text-xl text-muted-foreground mb-6">
                {t(principle.short)}
              </p>
              <div className="prose prose-lg max-w-none text-foreground">
                <p className="text-lg leading-relaxed mb-6">
                  {t(principle.fullContent)}
                </p>

                {principle.sections?.map((section, index) => (
                  <div key={index} className="mb-8">
                    {section.title && (
                      <h2 className="text-2xl font-bold text-foreground mb-4">
                        {t(section.title)}
                      </h2>
                    )}
                    {section.content && (
                      <p className="text-lg leading-relaxed mb-4">
                        {t(section.content)}
                      </p>
                    )}
                    {section.items && (
                      <ul className="list-disc list-inside space-y-2 mb-4">
                        {section.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="text-lg leading-relaxed">
                            {t(item)}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>

              {principle.links && principle.links.length > 0 && (
                <div className="mt-8 pt-8 border-t border-border">
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    {t("moreInfo")}
                  </h3>
                  <div className="flex flex-wrap gap-4">
                    {principle.links.map((link, index) => (
                      <Link key={index} href={link.href}>
                        <Button variant="secondary">
                          {t(link.text)}
                        </Button>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="text-center">
            <Link href="/#principles">
              <Button variant="primary">
                {t("backToAllPrinciples")}
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </>
  )
}
