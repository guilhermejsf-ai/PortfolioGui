"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Container } from "@/components/container";
import { siteConfig } from "@/data/site";
import betterGmailLogo from "@/bettergmaillogo.webp";

type ReachOutSectionProps = {
  embedded?: boolean;
};

export function ReachOutSection({ embedded = false }: ReachOutSectionProps) {
  const hasPdf = Boolean(siteConfig.cvPdf);
  const hasEmail = Boolean(siteConfig.social.email);
  const callHref = "tel:+351964125994";
  const pathname = usePathname();
  const socialButtonClassName =
    "inline-flex items-center gap-2 rounded-full border border-line bg-white/82 px-4 py-3 text-sm font-semibold text-ink transition hover:border-accent/40 hover:text-accent-deep";
  const card = embedded ? (
    <div className="overflow-hidden rounded-[34px] border border-line/70 bg-[linear-gradient(135deg,rgba(255,255,255,0.9),rgba(221,231,242,0.78))] px-6 py-7 shadow-[0_24px_70px_rgba(61,95,131,0.1)] sm:px-8 sm:py-8 lg:px-8">
      <div className="flex flex-col gap-6">
        <div>
          <h2 className="font-display text-[1.8rem] leading-tight tracking-tight text-ink sm:text-[2rem] lg:text-[2.2rem]">
            Feel free to reach out at any time!
          </h2>
          <p className="mt-4 text-sm leading-7 text-muted sm:text-base">
            Open the full resume, download it directly, or get in touch through
            the links.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <div className="flex flex-wrap gap-3">
            {hasEmail ? (
              <a
                href={`mailto:${siteConfig.social.email}`}
                className={socialButtonClassName}
              >
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white shadow-sm">
                  <Image src={betterGmailLogo} alt="" className="h-4 w-4" />
                </span>
                Email
              </a>
            ) : null}

            {hasPdf ? (
              <>
                <Link
                  href={siteConfig.cvPdf as string}
                  prefetch={false}
                  target="_blank"
                  className="rounded-full bg-accent px-5 py-3 text-sm font-semibold text-white"
                >
                  Open CV
                </Link>
                <a
                  href={siteConfig.cvPdf as string}
                  download="Guilherme_Fernandes_Resume.pdf"
                  className="rounded-full border border-line bg-panel px-5 py-3 text-sm font-semibold text-ink transition hover:border-accent/40 hover:text-accent-deep"
                >
                  Download CV
                </a>
              </>
            ) : null}
          </div>

          <div className="flex flex-wrap gap-3">
            {siteConfig.social.instagram ? (
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noreferrer"
                className={socialButtonClassName}
              >
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[radial-gradient(circle_at_30%_107%,#fdf497_0%,#fdf497_5%,#fd5949_45%,#d6249f_60%,#285AEB_90%)] text-white shadow-sm">
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    className="h-3 w-3"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="3" y="3" width="18" height="18" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                  </svg>
                </span>
                Instagram
              </a>
            ) : null}

            {siteConfig.social.linkedin ? (
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noreferrer"
                className={socialButtonClassName}
              >
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#0A66C2] text-white shadow-sm">
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    className="h-3 w-3"
                    fill="currentColor"
                  >
                    <path d="M6.94 8.5A1.56 1.56 0 1 1 6.93 5.4a1.56 1.56 0 0 1 .01 3.1ZM5.6 9.75h2.67V18H5.6V9.75Zm4.35 0h2.56v1.13h.04c.36-.67 1.23-1.38 2.53-1.38 2.7 0 3.2 1.78 3.2 4.1V18H15.6v-3.9c0-.93-.01-2.13-1.3-2.13-1.3 0-1.5 1.02-1.5 2.06V18H9.95V9.75Z" />
                  </svg>
                </span>
                LinkedIn
              </a>
            ) : null}

            <a href={callHref} className={socialButtonClassName}>
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#34C759] text-white shadow-sm">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  className="h-3 w-3"
                  fill="currentColor"
                >
                  <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.06 21 3 13.94 3 5a1 1 0 0 1 1-1h3.49a1 1 0 0 1 1 1c0 1.24.2 2.45.57 3.57a1 1 0 0 1-.24 1.02l-2.2 2.2Z" />
                </svg>
              </span>
              Phone
            </a>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="overflow-hidden rounded-[34px] border border-line/70 bg-[linear-gradient(135deg,rgba(255,255,255,0.9),rgba(221,231,242,0.78))] px-6 py-7 shadow-[0_24px_70px_rgba(61,95,131,0.1)] sm:px-8 sm:py-8 lg:px-8">
      <div className="grid gap-8 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,0.75fr)] lg:items-center">
        <div>
          <h2 className="font-display text-[1.8rem] leading-tight tracking-tight text-ink sm:text-[2rem] lg:text-[2.2rem] xl:whitespace-nowrap">
            Feel free to reach out at any time!
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-7 text-muted sm:text-base">
            Open the full resume, download it directly, or get in touch through
            the links.
          </p>
        </div>

        <div className="flex flex-col gap-3 lg:items-end">
          <div className="flex flex-wrap gap-3 lg:justify-end">
            {hasEmail ? (
              <a
                href={`mailto:${siteConfig.social.email}`}
                className={socialButtonClassName}
              >
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white shadow-sm">
                  <Image src={betterGmailLogo} alt="" className="h-4 w-4" />
                </span>
                Email
              </a>
            ) : null}

            {hasPdf ? (
              <>
                <Link
                  href={siteConfig.cvPdf as string}
                  prefetch={false}
                  target="_blank"
                  className="rounded-full bg-accent px-5 py-3 text-sm font-semibold text-white"
                >
                  Open CV
                </Link>
                <a
                  href={siteConfig.cvPdf as string}
                  download="Guilherme_Fernandes_Resume.pdf"
                  className="rounded-full border border-line bg-panel px-5 py-3 text-sm font-semibold text-ink transition hover:border-accent/40 hover:text-accent-deep"
                >
                  Download CV
                </a>
              </>
            ) : null}
          </div>

          <div className="flex flex-wrap gap-3 lg:justify-end">
            {siteConfig.social.instagram ? (
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noreferrer"
                className={socialButtonClassName}
              >
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[radial-gradient(circle_at_30%_107%,#fdf497_0%,#fdf497_5%,#fd5949_45%,#d6249f_60%,#285AEB_90%)] text-white shadow-sm">
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    className="h-3 w-3"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="3" y="3" width="18" height="18" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                  </svg>
                </span>
                Instagram
              </a>
            ) : null}

            {siteConfig.social.linkedin ? (
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noreferrer"
                className={socialButtonClassName}
              >
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#0A66C2] text-white shadow-sm">
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    className="h-3 w-3"
                    fill="currentColor"
                  >
                    <path d="M6.94 8.5A1.56 1.56 0 1 1 6.93 5.4a1.56 1.56 0 0 1 .01 3.1ZM5.6 9.75h2.67V18H5.6V9.75Zm4.35 0h2.56v1.13h.04c.36-.67 1.23-1.38 2.53-1.38 2.7 0 3.2 1.78 3.2 4.1V18H15.6v-3.9c0-.93-.01-2.13-1.3-2.13-1.3 0-1.5 1.02-1.5 2.06V18H9.95V9.75Z" />
                  </svg>
                </span>
                LinkedIn
              </a>
            ) : null}

            <a href={callHref} className={socialButtonClassName}>
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#34C759] text-white shadow-sm">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  className="h-3 w-3"
                  fill="currentColor"
                >
                  <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.06 21 3 13.94 3 5a1 1 0 0 1 1-1h3.49a1 1 0 0 1 1 1c0 1.24.2 2.45.57 3.57a1 1 0 0 1-.24 1.02l-2.2 2.2Z" />
                </svg>
              </span>
              Phone
            </a>
          </div>
        </div>
      </div>
    </div>
  );

  if (pathname === "/cv" && !embedded) {
    return null;
  }

  if (embedded) {
    return card;
  }

  return (
    <section className="pb-10 pt-6 sm:pb-12">
      <Container>
        {card}
      </Container>
    </section>
  );
}
