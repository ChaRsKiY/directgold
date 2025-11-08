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
      className={`text-[var(--color-primary-gold)] uppercase tracking-wide font-medium transition-opacity duration-200 flex items-center gap-0.5 max-w-full ${className}`}
    >
      <span className="text-[var(--color-primary-gold-light)] shrink-0"><IoMdArrowDropright size={20} /></span>
      <span className="footer-link relative">{children}</span>
    </Link>
  );
}
