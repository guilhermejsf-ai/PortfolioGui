import { getLocale } from "@/lib/i18n/server";
import { translate } from "@/lib/i18n";

import { T } from "@/components/language-provider";
import Link from "next/link";
import { navigation, siteConfig } from "@/data/site";

export async function SiteFooter() {
  const locale = await getLocale();
  const t = (text: string) => translate(text, locale);
  return (
    <footer className="studio-footer">
      <div className="footer-top">
        <div><p className="footer-name"><T>{siteConfig.name}</T></p><p><T>{siteConfig.tagline}</T></p></div>
        <a className="footer-email" href={`mailto:${siteConfig.social.email}`}><T>{siteConfig.social.email}</T></a>
      </div>
      <div className="footer-bottom">
        <nav aria-label={t("Footer navigation")}>{navigation.map(item => <Link key={item.href} href={item.href}><T>{item.href === "/cv" ? "CV" : item.label}</T></Link>)}</nav>
        <p className="footer-offer"><T>{"Selected portfolio projects:"}</T>{" "}<a href={`mailto:${siteConfig.social.email}?subject=Portfolio%20project`}><T>{"get in touch"}</T></a></p>
        <div className="footer-socials">
          <a href={siteConfig.cvPdf!} target="_blank" rel="noreferrer"><T>{"Open CV"}</T></a>
          <a href={siteConfig.cvPdf!} download><T>{"Download CV"}</T></a>
          <a href={siteConfig.social.linkedin!} target="_blank" rel="noreferrer"><T>{"LinkedIn"}</T></a>
          <a href={siteConfig.social.instagram} target="_blank" rel="noreferrer"><T>{"Instagram"}</T></a>
          <a href="tel:+351964125994"><T>{"Phone"}</T></a>
        </div>
      </div>
    </footer>
  );
}
