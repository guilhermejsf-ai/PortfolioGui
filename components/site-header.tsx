"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navigation } from "@/data/site";
export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const links = navigation.map((item) => (
    <Link
      key={item.href}
      href={item.href}
      onClick={() => setOpen(false)}
      aria-current={
        pathname === item.href ||
        (item.href === "/projects" && pathname.startsWith("/projects/"))
          ? "page"
          : undefined
      }
    >
      {item.label}
    </Link>
  ));
  return (
    <header
      className="site-header"
      onKeyDown={(e) => {
        if (e.key === "Escape") setOpen(false);
      }}
    >
      <div className="header-inner">
        <Link
          className="identity"
          onClick={() => setOpen(false)}
          href="/"
        >
          <Image src="/assets/shared/me.jpeg" width={38} height={38} alt="" />
          <span>
            Guilherme Fernandes
            <span className="identity-sub">Growth &amp; Operations</span>
          </span>
        </Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          {links}
        </nav>
        <button
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>
      {open && (
        <nav
          id="mobile-navigation"
          className="mobile-nav"
          aria-label="Mobile navigation"
        >
          {links}
        </nav>
      )}
    </header>
  );
}
