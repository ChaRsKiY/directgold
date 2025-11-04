import { notFound } from "next/navigation"
import Link from "next/link"
import { getExkursById } from "@/data/exkurs"
import Button from "@/components/ui/Button"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"

interface PageProps {
  params: { id: string }
}

export default async function ExkursPage({ params }: PageProps) {
  const exkurs = getExkursById((await params).id)
  if (!exkurs) notFound()

  return (
    <>
      <Header />
      <main className="min-h-screen bg-[var(--color-light-bg)] pt-24 pb-16">
        <div className="container mx-auto max-w-4xl px-6">
          <Link href="/#principles" className="inline-flex items-center gap-2 text-[var(--color-primary-gold)] hover:underline mb-8">
            <span>←</span> Zuruck zum Text im Hauptmenü
          </Link>
          <div className="bg-card rounded-lg shadow-lg p-8">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8">{exkurs.title}</h1>
            <div className="prose prose-lg max-w-none text-foreground space-y-8">
              {exkurs.content.sections.map((section, index) => (
                <section key={index}>
                  {section.title && <h2 className="text-2xl font-bold text-foreground mb-4">{section.title}</h2>}
                  {section.paragraphs?.map((p, pIndex) => <p key={pIndex} className="text-lg leading-relaxed mb-4">{p}</p>)}
                  {section.items && <ul className="list-disc list-inside space-y-2 mb-4">{section.items.map((item, i) => <li key={i} className="text-lg leading-relaxed">{item}</li>)}</ul>}
                </section>
              ))}
            </div>
            <div className="mt-8 pt-8 border-t border-border text-center">
              <Link href="/#principles"><Button variant="primary">Zuruck zum Text im Hauptmenü</Button></Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
