import Link from "next/link";
import { IoMdArrowDropright } from "react-icons/io";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export default function NavLink({ href, children, className = "" }: NavLinkProps) {
  return (
    <Link
      href={href}
      className={`text-[var(--color-primary-gold)] uppercase tracking-wide font-medium hover:opacity-80 transition-opacity duration-200 ${className} flex items-center gap-0.5`}
    >
      <span className="text-[var(--color-primary-gold-light)]"><IoMdArrowDropright size={20} /></span>
      {children}
    </Link>
  );
}
