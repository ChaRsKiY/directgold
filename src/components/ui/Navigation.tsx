"use client";

import NavLink from "../ui/NavLink";
import DropdownMenu from "../ui/DropdownMenu";

interface NavigationItem {
  href?: string;
  label: string;
  submenu?: { href: string; label: string }[];
}

interface NavigationProps {
  items: NavigationItem[];
  className?: string;
  isMobile?: boolean;
}

export default function Navigation({ items, className = "", isMobile = false }: NavigationProps) {
  return (
    <nav className={`flex items-center gap-3 md:gap-4 ${isMobile ? "flex-col gap-3 w-full" : ""} ${className}`}>
      {items.map((item, index) => {
        if (item.submenu && item.submenu.length > 0) {
          return (
            <DropdownMenu
              key={index}
              label={item.label}
              items={item.submenu}
              isMobile={isMobile}
            />
          );
        }
        return (
          <NavLink key={item.href || index} href={item.href || "#"} className={isMobile ? "text-base w-full" : ""}>
            {item.label}
          </NavLink>
        );
      })}
    </nav>
  );
}