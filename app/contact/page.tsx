import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/container";
import { FadeIn } from "@/components/fade-in";
import { siteConfig } from "@/data/site";
import betterGmailLogo from "@/bettergmaillogo.webp";

const emailAddress = siteConfig.social.email as string;
const emailHref = `mailto:${emailAddress}`;
const phoneHref = "tel:+351964125994";
const phoneLabel = "+351 964 125 994";

const contactCards = [
  {
    eyebrow: "LinkedIn",
    title: "Open profile",
    description: "Best for opportunities, introductions, and professional context.",
    href: siteConfig.social.linkedin,
    tone: "bg-white/90",
  },
  {
    eyebrow: "Instagram",
    title: "@guilhermejsf",
    description: "A more personal window into interests, movement, and current energy.",
    href: siteConfig.social.instagram,
    tone: "bg-[linear-gradient(180deg,rgba(255,255,255,0.95),rgba(248,240,246,0.92))]",
  },
  {
    eyebrow: "Phone",
    title: phoneLabel,
    description: "Useful for direct contact when a faster conversation makes more sense.",
    href: phoneHref,
    tone: "bg-[linear-gradient(180deg,rgba(255,255,255,0.95),rgba(238,247,241,0.95))]",
  },
].filter((card) => Boolean(card.href));

function GmailIcon() {
  return <Image src={betterGmailLogo} alt="" className="h-5 w-5" />;
}

export default function ContactPage() {
  const hasEmail = Boolean(siteConfig.social.email);
  const hasCv = Boolean(siteConfig.cvPdf);

  return (
    <Container className="pb-12 pt-8 lg:pb-14 lg:pt-10">
      <FadeIn>
        <div className="overflow-hidden rounded-[36px] border border-line/70 bg-[linear-gradient(135deg,rgba(255,255,255,0.94),rgba(227,235,244,0.88))] shadow-card">
          <div className="px-6 py-7 sm:px-8 sm:py-8 lg:px-10 lg:py-9">
            <div className="max-w-3xl">
              <h1 className="font-display text-4xl tracking-tight text-ink sm:text-5xl">
                Reach out for opportunities, collaborations and anything really.
              </h1>

              <div className="mt-8 flex flex-wrap gap-3">
                {hasEmail ? (
                  <a
                    href={emailHref}
                    className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5"
                  >
                    <span className="rounded-full bg-white p-1">
                      <GmailIcon />
                    </span>
                    Email
                  </a>
                ) : null}

                <a
                  href={phoneHref}
                  className="inline-flex items-center rounded-full border border-line bg-white/80 px-5 py-3 text-sm font-semibold text-ink transition hover:-translate-y-0.5 hover:border-accent/40 hover:text-accent-deep"
                >
                  Call me
                </a>

                {hasCv ? (
                  <Link
                    href={siteConfig.cvPdf as string}
                    prefetch={false}
                    target="_blank"
                    className="inline-flex items-center rounded-full border border-line bg-white/80 px-5 py-3 text-sm font-semibold text-ink transition hover:-translate-y-0.5 hover:border-accent/40 hover:text-accent-deep"
                  >
                    Open CV
                  </Link>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </FadeIn>

      <div className="mt-6 grid gap-4 lg:grid-cols-3">
        {contactCards.map((card, index) => (
          <FadeIn key={card.eyebrow} delay={index * 0.06}>
            <a
              href={card.href as string}
              target={card.href?.startsWith("http") ? "_blank" : undefined}
              rel={card.href?.startsWith("http") ? "noreferrer" : undefined}
              className={`group flex h-full min-h-[156px] flex-col justify-between rounded-[26px] border border-line/80 ${card.tone} p-5 shadow-[0_22px_54px_-42px_rgba(17,24,39,0.45)] transition hover:-translate-y-1 hover:shadow-float`}
            >
              <div>
                <div className="flex items-center gap-2">
                  {card.eyebrow === "Gmail" ? (
                    <span className="rounded-full bg-white/90 p-1 shadow-sm">
                      <GmailIcon />
                    </span>
                  ) : null}
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent-deep">
                    {card.eyebrow}
                  </p>
                </div>
                <p className="mt-3 font-display text-[1.55rem] leading-none tracking-tight text-ink sm:text-[1.8rem]">
                  {card.title}
                </p>
                <p className="mt-3 max-w-sm text-sm leading-6 text-muted">
                  {card.description}
                </p>
              </div>

              <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-accent-deep transition group-hover:translate-x-1">
                Open
                <span aria-hidden="true">→</span>
              </div>
            </a>
          </FadeIn>
        ))}
      </div>
    </Container>
  );
}
