"use client";

import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import Logo from "../ui/Logo";
import Navigation from "../ui/Navigation";
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
    <header ref={headerRef} className="fixed top-0 left-0 right-0 z-100">
      <div className="flex items-center justify-between p-8">
        <Link href="/">
          <Logo variant="header" />
        </Link>
        <Navigation items={navItems} className="hidden md:flex" />
        {/* Mobile menu button */}
        <button
          className="md:hidden text-primary-gold"
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
      {/* Mobile menu с анимацией */}
      <div
        ref={mobileMenuRef}
        style={{ display: isMobileMenuOpen ? "block" : "none", opacity: 0, pointerEvents: "none", backgroundColor: "rgba(26,26,26,0.95)", backdropFilter: "blur(6px)" }}
        className="md:hidden border-t border-dark-bg bg-dark-bg/95 backdrop-blur-sm"
      >
        <div className="container mx-auto px-4 py-4">
          <Navigation items={navItems} className="flex flex-col gap-3" isMobile={true} />
        </div>
      </div>
    </header>
  );
}