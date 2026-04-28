import Link from "next/link";

import { navigation, siteConfig } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-line/70 py-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 sm:px-8 lg:flex-row lg:items-end lg:justify-between lg:px-12">
        <div className="max-w-xl">
          <p className="font-display text-3xl tracking-tight text-ink">
            {siteConfig.name}
          </p>
          <p className="mt-3 text-sm leading-7 text-muted">{siteConfig.tagline}</p>
        </div>

        <div className="flex flex-wrap gap-4 text-sm text-muted">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              prefetch={false}
              className="hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
