import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { getPrincipleById } from "@/data/principles"
import Button from "@/components/ui/Button"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"

interface PageProps {
  params: {
    id: string
  }
}

export default async function PrinciplePage({ params }: PageProps) {
  const principle = getPrincipleById((await params).id)

  if (!principle) {
    notFound()
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-[var(--color-light-bg)] pt-24 pb-16">
        <div className="container mx-auto max-w-4xl px-6">
          <Link 
            href="/#principles" 
            className="inline-flex items-center gap-2 text-[var(--color-primary-gold)] hover:underline mb-8"
          >
            <span>←</span> Zuruck zur 1. Seite
          </Link>

          <div className="bg-card rounded-lg shadow-lg overflow-hidden mb-8">
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
                {principle.short}
              </p>
              <div className="prose prose-lg max-w-none text-foreground">
                <p className="text-lg leading-relaxed mb-6">
                  {principle.fullContent}
                </p>

                {principle.sections?.map((section, index) => (
                  <div key={index} className="mb-8">
                    {section.title && (
                      <h2 className="text-2xl font-bold text-foreground mb-4">
                        {section.title}
                      </h2>
                    )}
                    {section.content && (
                      <p className="text-lg leading-relaxed mb-4">
                        {section.content}
                      </p>
                    )}
                    {section.items && (
                      <ul className="list-disc list-inside space-y-2 mb-4">
                        {section.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="text-lg leading-relaxed">
                            {item}
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
                    Weitere Informationen:
                  </h3>
                  <div className="flex flex-wrap gap-4">
                    {principle.links.map((link, index) => (
                      <Link key={index} href={link.href}>
                        <Button variant="secondary">
                          {link.text}
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
                Zuruck zu allen Prinzipien
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </>
  )
}
