import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import { projects } from "@/data/projects";
export const metadata: Metadata = {
  title: "Experience & CV",
  alternates: { canonical: "/cv" },
};
export default function CvPage() {
  return (
    <div className="work-shell case-page">
      <header className="case-header">
        <p className="eyebrow">Experience & CV</p>
        <h1>
          A founder’s mindset.
          <br />
          An operator’s follow-through.
        </h1>
        <p className="case-summary">
          I connect management, growth, marketing, and product execution—with AI
          and automation to make the work go further.
        </p>
        <div className="button-row">
          <a
            className="button-primary"
            href={siteConfig.cvPdf!}
            target="_blank"
            rel="noreferrer"
          >
            Open CV ↗
          </a>
          <a className="button-quiet" href={siteConfig.cvPdf!} download>
            Download CV ↓
          </a>
          <Link href="/contact" className="button-quiet">
            Let’s talk ↗
          </Link>
        </div>
      </header>
      <section className="current-work">
        <div>
          <p className="eyebrow">Current work</p>
          <h2>Managing Blendbyte</h2>
          <p>
            Managing the company alongside my work in AI and operations
            automation.
          </p>
        </div>
        <div>
          <p className="eyebrow">Grupo Invest / Invest2030</p>
          <h2>AI & operational automation</h2>
          <p>
            Reviewing operational workflows, introducing AI into existing
            processes, and building automations.
          </p>
        </div>
      </section>
      <p className="mt-4 text-sm text-muted">
        The downloadable CV covers my earlier experience. The current roles
        above are my latest update.
      </p>
      <section className="selected-work">
        <div className="section-top">
          <div>
            <p className="eyebrow">Professional experience</p>
            <h2>From company building to everyday execution.</h2>
          </div>
        </div>
        {["racefiets013", "umedicu", "nordensa"].map((slug) => {
          const p = projects.find((x) => x.slug === slug)!;
          return (
            <section className="case-body border-b border-line pb-8" key={slug}>
              <div>
                <p className="eyebrow">{p.detailCard.status}</p>
                <h2>{p.title}</h2>
                <p>{p.detailCard.role}</p>
                <Link href={`/projects/${slug}`} className="text-link">
                  See the work ↗
                </Link>
              </div>
              <div>
                <ul>
                  {p.detailCard.whatIDid.map((x) => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>
                <p>{p.detailCard.outcome.text}</p>
              </div>
            </section>
          );
        })}
      </section>
      <section className="case-body">
        <div>
          <p className="eyebrow">Capabilities</p>
          <h2>Across strategy and execution</h2>
          <p>
            Chief of Staff / BizOps support · Cross-functional execution ·
            Automation and systems · Growth strategy and experiments · KPI
            tracking and dashboards · Process design and SOPs · Ecommerce
            optimization · CRO · SEO · Stakeholder management
          </p>
          <h2>Languages</h2>
          <p>
            Portuguese — native
            <br />
            English — fluent, certified C2
            <br />
            Spanish — fluent, certified C1
          </p>
        </div>
        <div>
          <p className="eyebrow">Tools</p>
          <h2>A practical toolkit</h2>
          <p>
            Shopify · Webflow · GA4 · Make.com · Meta Business Suite · Google
            Search Console · Zapier · ActiveCampaign · Notion · Figma · Google
            Workspace · Canva · AI tools
          </p>
        </div>
      </section>
      <section>
        <p className="eyebrow">Original CV / Full document</p>
        <a
          href={siteConfig.cvPdf!}
          target="_blank"
          rel="noreferrer"
          className="block relative mt-6 mx-auto max-w-3xl border border-line bg-white"
        >
          <Image
            src={`${siteConfig.cvPdf}.png`}
            alt="Original CV document preview. Use Open CV or Download CV above for the full PDF."
            width={900}
            height={1273}
            sizes="(max-width:800px) 95vw, 768px"
            className="w-full h-auto"
          />
        </a>
      </section>
    </div>
  );
}
