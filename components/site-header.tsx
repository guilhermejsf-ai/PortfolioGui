"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

import { navigation, siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-surface/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-8 lg:px-12">
        <Link
          href="/projects"
          prefetch={false}
          className="relative flex min-w-0 items-center gap-4 rounded-[26px] px-1 py-1"
          onClick={() => setOpen(false)}
        >
          <div className="relative h-[3.4rem] w-[3.4rem] shrink-0 overflow-hidden rounded-[16px] border border-white/70 shadow-[0_10px_22px_rgba(60,76,102,0.08)]">
            <div className="absolute inset-0 z-10 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0.12))]" />
            <Image
              src="/assets/shared/me.jpeg"
              alt=""
              fill
              sizes="54px"
              className="object-cover object-center"
            />
          </div>

          <div className="relative z-20 min-w-0">
            <div className="font-display text-2xl tracking-tight text-ink">
              {siteConfig.name}
            </div>
            <div className="hidden text-xs uppercase tracking-[0.2em] text-muted sm:block">
              Brands, products, systems, growth
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-2 md:flex">
          {navigation.map((item) => {
            const active =
              item.href === "/"
                ? pathname === item.href
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                prefetch={false}
                className={cn(
                  "rounded-full px-4 py-2 text-sm transition",
                  active
                    ? "bg-panel text-ink shadow-card"
                    : "text-muted hover:bg-panel hover:text-ink",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          className="rounded-full border border-line bg-panel px-4 py-2 text-sm text-ink md:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle menu"
        >
          Menu
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-line bg-surface md:hidden"
          >
            <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-4 sm:px-8 lg:px-12">
              {navigation.map((item) => {
                const active =
                  item.href === "/"
                    ? pathname === item.href
                    : pathname.startsWith(item.href);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    prefetch={false}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "rounded-2xl px-4 py-3 text-sm",
                      active ? "bg-panel text-ink" : "text-muted",
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
