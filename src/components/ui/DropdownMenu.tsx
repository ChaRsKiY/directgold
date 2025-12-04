"use client";

import { useState, useRef, useEffect } from "react";
import { Link, usePathname } from "@/i18n/navigation";
import { IoMdArrowDropright } from "react-icons/io";

interface DropdownItem {
  href: string;
  label: string;
}

interface DropdownMenuProps {
  label: string;
  items: DropdownItem[];
  className?: string;
  isMobile?: boolean;
  href?: string;
}

export default function DropdownMenu({ label, items, className = "", isMobile = false, href }: DropdownMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  // Check if any submenu item is active
  const isActive = items.some(item => {
    if (item.href === "/principles") {
      return pathname.startsWith("/principles");
    }
    return pathname === item.href || pathname.startsWith(item.href);
  });

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  if (isMobile) {
    return (
      <div className={`flex flex-col w-full ${className}`}>
        <div className="flex items-center w-full">
          {href ? (
            <>
              <Link
                href={href}
                className={`text-gold uppercase tracking-wide font-medium transition-opacity duration-200 flex items-center gap-0.5 flex-grow text-left text-base ${isActive ? "opacity-100" : "opacity-80"
                  }`}
              >
                <span className="text-primary-gold-light shrink-0">
                  <IoMdArrowDropright size={20} />
                </span>
                <span className="footer-link relative">{label}</span>
              </Link>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 text-gold"
                aria-label="Toggle submenu"
              >
                {isOpen ? "−" : "+"}
              </button>
            </>
          ) : (
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`text-gold uppercase tracking-wide font-medium transition-opacity duration-200 flex items-center gap-0.5 w-full text-left text-base ${isActive ? "opacity-100" : "opacity-80"
                }`}
            >
              <span className="text-primary-gold-light shrink-0">
                <IoMdArrowDropright size={20} />
              </span>
              <span className="footer-link relative">{label}</span>
              <span className="ml-auto text-gold">
                {isOpen ? "−" : "+"}
              </span>
            </button>
          )}
        </div>
        <div
          className={`overflow-hidden transition-all duration-300 ease-out ${isOpen ? "max-h-[500px] opacity-100 mt-2" : "max-h-0 opacity-0"
            }`}
        >
          <div className="pl-6 space-y-2">
            {items.map((item, index) => {
              const itemIsActive =
                pathname === item.href ||
                (item.href !== "/principles" && pathname.startsWith(item.href)) ||
                (item.href === "/principles" && pathname.startsWith("/principles/"));

              return (
                <Link
                  key={index}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`block text-sm text-gold uppercase tracking-wide font-medium transition-opacity duration-200 ${itemIsActive ? "opacity-100 font-semibold" : "opacity-70 hover:opacity-100"
                    }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div ref={dropdownRef} className={`relative ${className}`}>
      {href ? (
        <Link
          href={href}
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
          className={`text-gold uppercase tracking-wide font-medium transition-opacity duration-200 flex items-center gap-0.5 ${isActive ? "opacity-100" : "opacity-80 hover:opacity-100"
            }`}
        >
          <span className="text-primary-gold-light shrink-0">
            <IoMdArrowDropright size={20} />
          </span>
          <span className="footer-link relative">{label}</span>
        </Link>
      ) : (
        <button
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
          className={`text-gold uppercase tracking-wide font-medium transition-opacity duration-200 flex items-center gap-0.5 ${isActive ? "opacity-100" : "opacity-80 hover:opacity-100"
            }`}
        >
          <span className="text-primary-gold-light shrink-0">
            <IoMdArrowDropright size={20} />
          </span>
          <span className="footer-link relative">{label}</span>
        </button>
      )}
      <div
        className={`absolute top-full left-0 mt-2 bg-dropdown-bg border border-gold/20 rounded-md shadow-lg min-w-[250px] z-50 transition-all duration-300 ${isOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"
          }`}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        <div className="py-2">
          {items.map((item, index) => {
            const itemIsActive =
              pathname === item.href ||
              (item.href !== "/principles" && pathname.startsWith(item.href)) ||
              (item.href === "/principles" && pathname.startsWith("/principles/"));

            return (
              <Link
                key={index}
                href={item.href}
                className={`block px-4 py-2 text-sm text-gold uppercase tracking-wide font-medium transition-colors duration-200 hover:bg-gold/10 ${itemIsActive ? "bg-gold/10 font-semibold" : ""
                  }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

