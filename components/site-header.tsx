"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "My work" },
  { href: "/travel", label: "My travels" },
  { href: "/story", label: "My story" },
  { href: "/cv", label: "CV" },
  { href: "/contact", label: "Contact me" },
];

export function SiteHeader() {
  const pathname = usePathname();
  return (
    <header className="site-header">
      <nav className="identity-nav header-pill" aria-label="Guilherme Fernandes">
        <Link href="/">Guilherme Fernandes</Link>
      </nav>
      <div className="compact-header">
      <nav aria-label="Main navigation" className="compact-nav">
        {links.map(({ href, label }) => (
          <Link key={href} href={href} className={href === "/contact" ? "nav-contact" : undefined} aria-current={pathname === href || (href !== "/" && pathname.startsWith(`${href}/`)) ? "page" : undefined}>
            {label}
          </Link>
        ))}
      </nav>
      </div>
      <div className="location-pill header-pill" aria-label="Currently in Lisbon, Portugal">
        <span>currently in:</span> <strong>Lisbon</strong>
      </div>
    </header>
  );
}
