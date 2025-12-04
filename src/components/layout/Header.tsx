"use client";

import { useState, useRef } from "react";
import Logo from "../ui/Logo";
import Navigation from "../ui/Navigation";
import LanguageSwitcher from "../ui/LanguageSwitcher";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const headerRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const t = useTranslations("navigation");

  const navItems = [
    {
      label: t("about"),
      submenu: [
        { href: "/#whyDirectGold", label: t("warumGold") },
        { href: "/#about", label: t("aboutDirectGold") },
      ],
    },
    {
      label: t("infothek"),
      href: "/info/kaufgebuhr",
      submenu: [
        { href: "/info/kauf-verkauf", label: "Kauf & Verkauf" },
        { href: "/info/lagerung", label: "Lagerung" },
        { href: "/info/lieferung", label: "Lieferung" },
        { href: "/info/kaufgebuhr", label: t("kaufgebuhr") },
        { href: "/info/sammel-einzellagerung", label: t("sammelEinzellagerung") },
        { href: "/exkurs/lbma-goldpreis", label: t("lbmaGoodDelivery") },
        { href: "/exkurs/argor-heraeus", label: t("argorHeraeus") },
        { href: "/exkurs/loomis", label: t("loomis") },
        { href: "/exkurs/schweiz-lagerstandort", label: t("schweizLagerstandort") },
        { href: "/exkurs/axedras", label: t("axedras") },
        { href: "/principles", label: t("regulatorikCompliance") },
      ],
    },
    { href: "#faq", label: t("faq") },
    { href: "/info/gebuhrentabelle", label: t("gebuhrentabelle") },
  ];

  return (
    <header ref={headerRef} className="fixed top-0 left-0 right-0 z-100 max-w-full bg-header-bg">
      <div className="flex items-center justify-between p-4 md:p-8 max-w-full w-full min-w-0">
        <Link href="/" className="shrink-0 min-w-0">
          <Logo variant="header" />
        </Link>
        <div className="flex items-center gap-6 md:gap-10 shrink-0 min-w-0">
          <Navigation items={navItems} className="hidden md:flex" />
          <div className="hidden md:block">
            <LanguageSwitcher />
          </div>
          {/* Mobile menu button */}
          <button
            className="md:hidden text-primary-gold shrink-0 transition-transform duration-300 ease-in-out hover:scale-110"
            aria-label="Toggle menu"
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className="relative w-6 h-6">
              <svg
                className={`absolute inset-0 w-6 h-6 transition-all duration-300 ease-in-out ${isMobileMenuOpen
                  ? "opacity-100 rotate-0 scale-100"
                  : "opacity-0 rotate-90 scale-0"
                  }`}
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
              <svg
                className={`absolute inset-0 w-6 h-6 transition-all duration-300 ease-in-out ${isMobileMenuOpen
                  ? "opacity-0 rotate-90 scale-0"
                  : "opacity-100 rotate-0 scale-100"
                  }`}
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </div>
          </button>
        </div>
      </div>
      {/* Mobile menu с анимацией */}
      <div
        className={`md:hidden grid transition-all duration-500 ease-out overflow-hidden ${isMobileMenuOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          }`}
      >
        <div className="min-h-0">
          <div
            ref={mobileMenuRef}
            className="w-full bg-transparent"
          >
            <div className="w-full max-w-full px-4 py-4 overflow-x-hidden box-border">
              <div
                className={`transition-all duration-300 ease-out ${isMobileMenuOpen ? "opacity-100 translate-y-0 delay-100" : "opacity-0 -translate-y-2 delay-0"
                  }`}
              >
                <Navigation items={navItems} className="flex flex-col gap-3 w-full" isMobile={true} />
              </div>
              <div
                className={`mt-4 pt-4 border-t border-gray-700 flex justify-center w-full box-border transition-all duration-300 ease-out ${isMobileMenuOpen ? "opacity-100 translate-y-0 delay-200" : "opacity-0 -translate-y-2 delay-0"
                  }`}
              >
                <LanguageSwitcher />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}