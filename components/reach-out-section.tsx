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
          <p className="eyebrow">Let’s talk</p>
          <h2>Have a project or opportunity in mind?</h2>
          <p>
            Email me with a little context about the work and what you need.
          </p>
        </div>
        <div className="reach-actions">
          <a
            className="email-address"
            href={`mailto:${siteConfig.social.email}`}
          >
            {siteConfig.social.email}
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
