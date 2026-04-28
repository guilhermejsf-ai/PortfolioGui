import Image from "next/image";

import { Container } from "@/components/container";
import { siteConfig } from "@/data/site";
import betterGmailLogo from "@/bettergmaillogo.webp";

export function PortfolioOfferSection() {
  if (!siteConfig.social.email) {
    return null;
  }

  return (
    <section className="pt-6 sm:pt-8">
      <Container>
        <div className="rounded-[32px] border border-line/80 bg-[linear-gradient(135deg,rgba(255,255,255,0.94),rgba(232,239,247,0.88))] px-6 py-7 shadow-card sm:px-8 sm:py-8 lg:px-10">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between lg:gap-8">
            <div className="max-w-4xl">
              <h2 className="font-display text-[1.55rem] leading-tight tracking-tight text-ink sm:text-[1.75rem] lg:text-[1.9rem]">
                Want a personalised portfolio like this? LET&apos;S BUILD YOURS!
              </h2>
            </div>

            <a
              href={`mailto:${siteConfig.social.email}`}
              className="inline-flex items-center gap-2 self-start rounded-full border border-accent/20 bg-white/88 px-5 py-3 text-sm font-semibold text-accent-deep transition hover:-translate-y-0.5 hover:border-accent/40 hover:bg-white lg:self-center"
            >
              <span className="rounded-full bg-white p-1 shadow-sm">
                <Image src={betterGmailLogo} alt="" className="h-5 w-5" />
              </span>
              Email
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
