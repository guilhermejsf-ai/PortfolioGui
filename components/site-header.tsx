"use client";
import { T, useLanguage } from "@/components/language-provider";

import { LanguageSelector } from "./language-selector";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "My work" },
  { href: "/travel", label: "My travels" },
  { href: "/story", label: "My story" },
];

export function SiteHeader() {
  const { t } = useLanguage();
  const pathname = usePathname();
  return (
    <header className="site-header">
      <nav className="identity-nav header-pill" aria-label={t("Guilherme Fernandes")}>
        <Link href="/"><T>{"Guilherme Fernandes"}</T></Link>
      </nav>
      <nav aria-label={t("Main navigation")} className="header-navigation">
        <div className="compact-header">
          <div className="compact-nav">
            {links.map(({ href, label }) => (
              <Link key={href} href={href} aria-current={pathname === href || (href !== "/" && pathname.startsWith(`${href}/`)) ? "page" : undefined}>
                <T>{label}</T>
              </Link>
            ))}
            <Link href="/contact" className="header-contact-link" aria-current={pathname === "/contact" ? "page" : undefined}><T>{"Contact me"}</T></Link>
          </div>
        </div>
        <div className="header-actions">
          <Link href="/cv" className="header-cv-link" aria-current={pathname === "/cv" ? "page" : undefined}><T>{"CV"}</T></Link>
        </div>
      </nav>
      <div className="header-location-language">
        <div className="location-pill header-pill" aria-label={t("Currently in Lisbon, Portugal")}>
          <span><T>{"currently in:"}</T></span> <strong><T>{"Lisbon"}</T></strong>
        </div>
        <LanguageSelector />
      </div>
    </header>
  );
}
