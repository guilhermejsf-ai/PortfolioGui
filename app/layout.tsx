import type { Metadata } from "next";

import { PortfolioOfferSection } from "@/components/portfolio-offer-section";
import { ReachOutSection } from "@/components/reach-out-section";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { siteConfig } from "@/data/site";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.baseUrl),
  openGraph: {
    type: "website",
    title: "Guilherme Fernandes | Growth, Operations & AI",
    description: siteConfig.description,
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image" },
  title: {
    default: `${siteConfig.name} | Portfolio`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/assets/shared/me.jpeg",
    shortcut: "/assets/shared/me.jpeg",
    apple: "/assets/shared/me.jpeg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-surface text-ink antialiased">
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <SiteHeader />
        <main id="main-content">{children}</main>
        <PortfolioOfferSection />
        <ReachOutSection />
        <SiteFooter />
      </body>
    </html>
  );
}
