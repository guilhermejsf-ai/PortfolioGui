import type { Metadata } from "next";

import { PortfolioOfferSection } from "@/components/portfolio-offer-section";
import { ReachOutSection } from "@/components/reach-out-section";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { siteConfig } from "@/data/site";

import "./globals.css";

export const metadata: Metadata = {
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
        <SiteHeader />
        <main>{children}</main>
        <PortfolioOfferSection />
        <ReachOutSection />
        <SiteFooter />
      </body>
    </html>
  );
}
