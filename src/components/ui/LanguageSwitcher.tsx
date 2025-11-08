"use client";

import { usePathname } from "@/i18n/navigation";
import { useLocale } from "next-intl";

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const locale = useLocale();

  const switchLanguage = (newLocale: string) => {
    // pathname from next-intl/navigation is already without locale
    // Construct the new URL with the new locale
    const newPath = `/${newLocale}${pathname}`;
    window.location.href = newPath;
  };

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => switchLanguage("de")}
        className={`uppercase text-sm font-medium transition-colors duration-200 footer-link ${
          locale === "de"
            ? "text-[var(--color-primary-gold)]"
            : "text-gray-400 hover:text-gray-300"
        }`}
        aria-label="Switch to German"
      >
        DE
      </button>
      <span className="text-gray-500">/</span>
      <button
        onClick={() => switchLanguage("en")}
        className={`uppercase text-sm font-medium transition-colors duration-200 footer-link ${
          locale === "en"
            ? "text-[var(--color-primary-gold)]"
            : "text-gray-400 hover:text-gray-300"
        }`}
        aria-label="Switch to English"
      >
        EN
      </button>
    </div>
  );
}
