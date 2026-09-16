import Link from "next/link";
import { navigation, siteConfig } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="studio-footer">
      <div className="footer-top">
        <div><p className="footer-name">{siteConfig.name}</p><p>{siteConfig.tagline}</p></div>
        <a className="footer-email" href={`mailto:${siteConfig.social.email}`}>{siteConfig.social.email}</a>
      </div>
      <div className="footer-bottom">
        <nav aria-label="Footer navigation">{navigation.map(item => <Link key={item.href} href={item.href}>{item.href === "/cv" ? "CV" : item.label}</Link>)}</nav>
        <p className="footer-offer">Selected portfolio projects: <a href={`mailto:${siteConfig.social.email}?subject=Portfolio%20project`}>get in touch</a></p>
        <div className="footer-socials">
          <a href={siteConfig.cvPdf!} target="_blank" rel="noreferrer">Open CV</a>
          <a href={siteConfig.cvPdf!} download>Download CV</a>
          <a href={siteConfig.social.linkedin!} target="_blank" rel="noreferrer">LinkedIn</a>
          <a href={siteConfig.social.instagram} target="_blank" rel="noreferrer">Instagram</a>
          <a href="tel:+351964125994">Phone</a>
        </div>
      </div>
    </footer>
  );
}
