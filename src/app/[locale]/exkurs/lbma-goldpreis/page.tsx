import Link from "next/link"
import Button from "@/components/ui/Button"
import { getTranslations } from "next-intl/server"

export default async function LBMAGoldpreisPage() {
  const t = await getTranslations("lbmagoldprice")

  return (
    <>
      <main className="min-h-screen bg-[var(--color-light-bg)] pt-24 pb-16">
        <div className="container mx-auto max-w-4xl px-6">
          <Link href="/#principles" className="inline-flex items-center gap-2 text-[var(--color-primary-gold)] hover:underline mb-8">
            <span>←</span> {t("backToTheTextInMenu")}
          </Link>
          <div className="bg-card rounded-lg shadow-lg p-8">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
              {t("exkurs1")}
            </h1>
            <div className="prose prose-lg max-w-none text-foreground space-y-8">
              <section><p className="text-lg leading-relaxed mb-4">{t("text1")}</p></section>
              <section><h2 className="text-2xl font-bold text-foreground mb-4">{t("text2")}</h2><p className="text-lg leading-relaxed mb-4">{t("text3")}</p><p className="text-lg leading-relaxed mb-4">{t("text4")}</p><p className="text-lg leading-relaxed mb-4">{t("text5")}</p></section>
              <section><h2 className="text-2xl font-bold text-foreground mb-4">{t("text6")}</h2><p className="text-lg leading-relaxed mb-4">{t("text7")}</p><p className="text-lg leading-relaxed mb-4">{t("text8")}</p></section>
              <section><h2 className="text-2xl font-bold text-foreground mb-4">{t("text9")}</h2><div className="mb-6"><h3 className="text-xl font-bold text-foreground mb-3">{t("text10")}</h3><p className="text-lg leading-relaxed mb-4">{t("text11")}</p></div><div className="mb-6"><h3 className="text-xl font-bold text-foreground mb-3">{t("text12")}</h3><p className="text-lg leading-relaxed mb-4">{t("text13")}</p><p className="text-lg leading-relaxed mb-4">{t("text14")}</p></div></section>
              <section><h2 className="text-2xl font-bold text-foreground mb-4">{t("text15")}</h2><p className="text-lg leading-relaxed mb-4">{t("text16")}</p><p className="text-lg leading-relaxed mb-4">{t("text17")}</p><p className="text-lg leading-relaxed mb-4 font-bold">{t("text18")}</p></section>
            </div>
            <div className="mt-8 pt-8 border-t border-border text-center">
              <Link href="/#principles"><Button variant="primary">{t("backToTheTextInMenu")}</Button></Link>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
