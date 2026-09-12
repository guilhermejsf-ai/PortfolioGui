"use client";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/data/site";
export function ReachOutSection({ embedded = false }: { embedded?: boolean }) {
  const pathname = usePathname();
  if (pathname === "/cv" && !embedded) return null;
  return (
    <section className="reach-section">
      <div className="reach-inner">
        <div>
          <p className="eyebrow">Have something in mind?</p>
          <h2>Feel free to reach out at any time!</h2>
          <p>
            Open the full resume, download it directly, or get in touch through
            the links.
          </p>
        </div>
        <div className="reach-actions">
          <a
            className="email-address"
            href={`mailto:${siteConfig.social.email}`}
          >
            {siteConfig.social.email} ↗
          </a>
          <div className="button-row">
            <a href={`mailto:${siteConfig.social.email}`}>Email</a>
            <a href={siteConfig.cvPdf!} target="_blank" rel="noreferrer">
              Open CV
            </a>
            <a href={siteConfig.cvPdf!} download>
              Download CV
            </a>
            <a
              href={siteConfig.social.linkedin!}
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>
            <a href="tel:+351964125994">Phone</a>
          </div>
        </div>
      </div>
    </section>
  );
}
