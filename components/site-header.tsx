"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const professionalLinks = [
  { href: "/cv", label: "CV" },
  { href: "/projects", label: "Work and projects" },
];
const personalLinks = [
  { href: "/story", label: "My story" },
  { href: "/travel", label: "My travels" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [compact, setCompact] = useState(false);
  useEffect(() => {
    const update = () => setCompact(window.scrollY > 48);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  const renderLink = (item: { href: string; label: string }) => (
    <Link
      key={item.href}
      href={item.href}
      aria-current={
        pathname === item.href || pathname.startsWith(`${item.href}/`)
          ? "page"
          : undefined
      }
    >
      {item.label}
    </Link>
  );

  return (
    <header className={`floating-header${compact ? " is-compact" : ""}`}>
      <div className="floating-header-inner">
        <nav
          className="header-wing header-wing-work"
          aria-label="Work navigation"
        >
          {professionalLinks.map(renderLink)}
        </nav>
        <div className="header-center">
          <Link href="/" className="centered-identity">
            <span className="name-first">Guilherme</span>
            <span className="header-portrait">
              <Image
                src="/assets/shared/me.jpeg"
                width={88}
                height={88}
                alt=""
                priority
                sizes="(max-width: 760px) 64px, 80px"
              />
            </span>
            <span className="name-last">Fernandes</span>
          </Link>
          <Link
            href="/contact"
            className="header-contact"
            aria-current={pathname === "/contact" ? "page" : undefined}
          >
            Let’s talk <span aria-hidden="true">↗</span>
          </Link>
        </div>
        <nav
          className="header-wing header-wing-personal"
          aria-label="Personal navigation"
        >
          {personalLinks.map(renderLink)}
        </nav>
      </div>
    </header>
  );
}
