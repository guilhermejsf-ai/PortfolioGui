"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "My work" },
  { href: "/travel", label: "My travels" },
  { href: "/story", label: "My story" },
];

export function SiteHeader() {
  const pathname = usePathname();
  return (
    <header className="site-header">
      <nav className="identity-nav header-pill" aria-label="Guilherme Fernandes">
        <Link href="/">Guilherme Fernandes</Link>
      </nav>
      <nav aria-label="Main navigation" className="header-navigation">
        <div className="compact-header">
          <div className="compact-nav">
            {links.map(({ href, label }) => (
              <Link key={href} href={href} aria-current={pathname === href || (href !== "/" && pathname.startsWith(`${href}/`)) ? "page" : undefined}>
                {label}
              </Link>
            ))}
            <Link href="/contact" className="header-contact-link" aria-current={pathname === "/contact" ? "page" : undefined}>Contact me</Link>
          </div>
        </div>
        <div className="header-actions">
          <Link href="/cv" className="header-cv-link" aria-current={pathname === "/cv" ? "page" : undefined}>CV</Link>
        </div>
      </nav>
      <div className="location-pill header-pill" aria-label="Currently in Lisbon, Portugal">
        <span>currently in:</span> <strong>Lisbon</strong>
      </div>
    </header>
  );
}
