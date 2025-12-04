"use client";

import { MotionDiv } from "@/components/motion";
import { Link, usePathname } from "@/i18n/navigation";
import classNames from "classnames";
import Image from "next/image";

interface InfoThekLayoutProps {
  children: React.ReactNode;
}

const navigationItems = [
  { label: "Kauf & Verkauf", href: "/info/kauf-verkauf" },
  { label: "Lagerung", href: "/info/lagerung" },
  { label: "Lieferung", href: "/info/lieferung" },
  { label: "LBMA, Good-Delivery, Allocated & Unallocated", href: "/exkurs/lbma-goldpreis" },
  { label: "Kaufgebühr", href: "/info/kaufgebuhr" },
  { label: "Sammel- & Einzelverwahrung", href: "/info/sammel-einzellagerung" },
  { label: "Argor-Heraeus", href: "/exkurs/argor-heraeus" },
  { label: "Loomis", href: "/exkurs/loomis" },
  { label: "Die Schweiz als Lagerstandort", href: "/exkurs/schweiz-lagerstandort" },
  { label: "axedras", href: "/exkurs/axedras" },
  { label: "Regulatorik & Compliance", href: "/principles" },
];

export default function InfoThekLayout({ children }: InfoThekLayoutProps) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-light-bg px-[10%] py-20 mt-20">
      {/* Header with Badge and Title */}
      <MotionDiv
        className="mb-12 flex items-center gap-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="bg-gold py-2.5 px-10 rounded-md">
          <Image src="/DG Icon White.png" alt="DBadge" width={35} height={35} />
        </div>
        <h1 className="text-4xl max-md:text-3xl font-bold text-gold">
          INFOTHEK
        </h1>
      </MotionDiv>

      {/* Two Column Layout */}
      <div className="flex gap-12 max-lg:flex-col">
        {/* Left Column - Navigation */}
        <MotionDiv
          className="w-[300px] max-lg:w-full flex-shrink-0 border-r border-gold/20"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <nav className="sticky top-24">
            <ul className="space-y-4">
              {navigationItems.map((item, index) => {
                // usePathname from next-intl already returns pathname without locale
                const isActive =
                  pathname === item.href ||
                  (item.href !== "/principles" && pathname.startsWith(item.href)) ||
                  (item.href === "/principles" && pathname.startsWith("/principles/"));

                return (
                  <li key={index} className={classNames(isActive ? "border-r-3 border-gold pr-12" : "pr-12")}>
                    <Link
                      href={item.href}
                      className={`block text-lg max-md:text-base leading-relaxed transition-colors duration-300 ${isActive
                        ? "text-gold font-semibold"
                        : "text-primary-text hover:text-gold"
                        }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </MotionDiv>

        {/* Right Column - Content */}
        <MotionDiv
          className="flex-1 max-w-7xl"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {children}
        </MotionDiv>
      </div>
    </div>
  );
}

