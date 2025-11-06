import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { NextIntlClientProvider } from "next-intl";
import { ReactNode } from "react";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DIRECTGOLD - Dein Gold. Neu definiert.",
  description: "Begnüge Dich nur mit exakten Antworten. Alles andere ist Spekulation.",
};

export default async function RootLayout(props: LayoutProps<"/[locale]">) {
  const par = await props.params;
  return (
    <NextIntlClientProvider locale={par.locale}>
      <html lang={par.locale}>
        <body
          className={`${montserrat.className} antialiased`}
        >
          <Header />
          {props.children}
          <Footer />
        </body>
      </html>
    </NextIntlClientProvider>
  );
}
