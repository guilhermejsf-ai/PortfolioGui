import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { siteConfig } from "@/data/site";

import "./globals.css";
import { LanguageProvider, T } from "@/components/language-provider";
import { translate } from "@/lib/i18n";
import { getLocale } from "@/lib/i18n/server";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  return {
    metadataBase: new URL(siteConfig.baseUrl),
    openGraph: {
      type: "website",
      title: `Guilherme Fernandes | ${translate("Growth, Operations & AI", locale)}`,
      description: translate(siteConfig.description, locale),
    },
    twitter: { card: "summary_large_image" },
    title: {
      default: `${siteConfig.name} | ${translate("Portfolio", locale)}`,
      template: `%s | ${siteConfig.name}`,
    },
    description: translate(siteConfig.description, locale),
    icons: {
      icon: { url: "/icon?v=portrait-circle-1", type: "image/png", sizes: "64x64" },
      apple: siteConfig.portrait,
    },
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  return (
    <html lang={locale === "pt" ? "pt-PT" : locale}>
      <body className="min-h-screen bg-surface text-ink antialiased">
        <LanguageProvider locale={locale}>
        <a href="#main-content" className="skip-link">
          <T>Skip to content</T>
        </a>
        <SiteHeader />
        <main id="main-content">{children}</main>
        <SiteFooter />
        </LanguageProvider>
        <Analytics />
      </body>
    </html>
  );
}
