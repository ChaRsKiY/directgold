"use client";

import NavLink from "../ui/NavLink";

interface NavigationProps {
  items: { href: string; label: string }[];
  className?: string;
  isMobile?: boolean;
}

export default function Navigation({ items, className = "", isMobile = false }: NavigationProps) {
  return (
    <nav className={`flex items-center gap-3 md:gap-4 ${isMobile ? "flex-col gap-3 w-full" : ""} ${className}`}>
      {items.map((item) => (
        <NavLink key={item.href} href={item.href} className={isMobile ? "text-base w-full" : ""}>{item.label}</NavLink>
      ))}
    </nav>
  );
}