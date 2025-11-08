"use client";

import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
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
    { href: "#home", label: t("home") },
    { href: "#about", label: t("about") },
    { href: "#contact", label: t("contact") },
  ];

  // Прозрачность и фон при скролле
  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      gsap.to(headerRef.current, {
        backgroundColor: y > 20 ? "rgba(26,26,26,0.95)" : "rgba(26,26,26,0)",
        backdropFilter: y > 20 ? "blur(6px)" : "none",
        boxShadow: y > 20 ? "0 6px 24px rgba(0,0,0,0.20)" : "none",
        duration: 1,
        ease: "power2.out",
      });
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Анимация открытия/закрытия мобильного меню
  useEffect(() => {
    if (!mobileMenuRef.current) return;
    if (isMobileMenuOpen) {
      gsap.fromTo(
        mobileMenuRef.current,
        { y: -24, opacity: 0, pointerEvents: "none" },
        {
          y: 0,
          opacity: 1,
          pointerEvents: "auto",
          duration: 1,
          display: "block",
          ease: "power3.out",
        }
      );
    } else {
      gsap.to(mobileMenuRef.current, {
        y: -24,
        opacity: 0,
        pointerEvents: "none",
        duration: 1,
        onComplete: () => {
          if (mobileMenuRef.current) {
            // @ts-ignore
            mobileMenuRef.current.style.display = "none";
          }
        },
      });
    }
  }, [isMobileMenuOpen]);

  return (
    <header ref={headerRef} className="fixed top-0 left-0 right-0 z-100 overflow-x-hidden max-w-full">
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
            className="md:hidden text-primary-gold shrink-0"
            aria-label="Toggle menu"
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>
      {/* Mobile menu с анимацией */}
      <div
        ref={mobileMenuRef}
        style={{ display: isMobileMenuOpen ? "block" : "none", opacity: 0, pointerEvents: "none", backgroundColor: "rgba(26,26,26,0.95)", backdropFilter: "blur(6px)" }}
        className="md:hidden border-t border-dark-bg bg-dark-bg/95 backdrop-blur-sm w-full overflow-x-hidden max-w-full"
      >
        <div className="w-full max-w-full px-4 py-4 overflow-x-hidden box-border">
          <Navigation items={navItems} className="flex flex-col gap-3 w-full" isMobile={true} />
          <div className="mt-4 pt-4 border-t border-gray-700 flex justify-center w-full box-border">
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </header>
  );
}