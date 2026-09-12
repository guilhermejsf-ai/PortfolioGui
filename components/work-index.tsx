import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";
import { siteConfig } from "@/data/site";

const featured = [
  {
    slug: "racefiets013",
    headline: "Turning a bike retailer into a stronger digital business.",
    metric: "25 hrs / week",
    label: "saved through automation",
    detail: "Ecommerce · Automation · Growth",
    color: "cycle",
  },
  {
    slug: "nordensa",
    headline: "Building the operating foundations of a football startup.",
    metric: "11 partnerships",
    label: "closed across clubs and player agents",
    detail: "Operations · Partnerships · Fundraising support",
    color: "football",
  },
  {
    slug: "umedicu",
    headline: "Taking a healthcare app from positioning to launch.",
    metric: "€350k",
    label: "secured through 3 EU grant applications",
    detail: "Go-to-market · Funding · Product coordination",
    color: "health",
  },
];
export function WorkIndex() {
  return (
    <div className="work-shell">
      <section className="intro-grid" aria-labelledby="intro-title">
        <div>
          <p className="eyebrow">
            <span className="status-dot" /> Guilherme Fernandes · Lisbon,
            Portugal
          </p>
          <h1 id="intro-title">
            Ideas into action.
            <br />
            <em>Action into growth.</em>
          </h1>
          <p className="intro-copy">
            I’m a founder and growth &amp; operations lead. I build the systems,
            digital experiences, and partnerships that help businesses move
            forward.
          </p>
          <div className="button-row">
            <a className="button-primary" href="#selected-work">
              Explore my work <span aria-hidden="true">↓</span>
            </a>
            <Link className="button-quiet" href="/cv">
              View my CV <span aria-hidden="true">↗</span>
            </Link>
          </div>
          <p className="focus-line">
            Growth &amp; operations <span> / </span> Chief of Staff{" "}
            <span> / </span> AI-assisted automation
          </p>
        </div>
        <aside className="profile-note">
          <div className="portrait-wrap">
            <Image
              src="/assets/shared/me.jpeg"
              alt="Guilherme Fernandes"
              fill
              sizes="(max-width: 700px) 140px, 260px"
              priority
              className="object-cover"
            />
          </div>
          <p className="eyebrow">A builder at heart</p>
          <p>
            From co-founding ventures to making everyday operations work better.
          </p>
          <Link href="/cv">
            Meet the person behind the work <span aria-hidden="true">↗</span>
          </Link>
        </aside>
      </section>
      <section className="evidence-strip" aria-label="Selected results">
        <div>
          <strong>12k → 25k</strong>
          <span>December sessions, year over year · Racefiets013</span>
        </div>
        <div>
          <strong>€1.6m</strong>
          <span>raised across two rounds I supported · Nordensa</span>
        </div>
        <div>
          <strong>100+</strong>
          <span>first-week app downloads · Umedicu</span>
        </div>
      </section>
      <section className="current-work" aria-label="Current work">
        <div>
          <p className="eyebrow">Now / Blendbyte</p>
          <h2>Managing Blendbyte</h2>
          <p>
            Bringing my experience in management, growth, and execution into my
            current work at Blendbyte.
          </p>
        </div>
        <div>
          <p className="eyebrow">Now / Grupo Invest · Invest2030</p>
          <h2>Making operations work smarter</h2>
          <p>
            Reviewing operational workflows, introducing AI, and automating
            processes at Grupo Invest / Invest2030.
          </p>
        </div>
      </section>
      <section id="selected-work" className="selected-work">
        <div className="section-top">
          <div>
            <p className="eyebrow">01 / Selected work</p>
            <h2>Where I’ve made a difference.</h2>
          </div>
          <a href="#all-projects" className="text-link">
            All 13 projects ↓
          </a>
        </div>
        {featured.map((f, i) => {
          const p = projects.find((p) => p.slug === f.slug)!;
          const visual = p.archiveVisual ?? p.cardVisual;
          return (
            <article key={p.slug} className={`featured-project ${f.color}`}>
              <Link
                href={`/projects/${p.slug}`}
                className="project-art"
              >
                <span className="art-caption">
                  {String(i + 1).padStart(2, "0")} / {p.title}
                </span>
                {visual.type === "image" && (
                  <div className="art-image">
                    <Image
                      src={visual.src}
                      alt={visual.alt}
                      fill
                      sizes="(max-width: 800px) 90vw, 48vw"
                      className="object-contain"
                    />
                  </div>
                )}
                <span className="art-foot">
                  {f.detail}
                  <span aria-hidden="true">↗</span>
                </span>
              </Link>
              <div className="project-story">
                <p className="eyebrow">
                  {p.title} <span> / {p.detailCard.status}</span>
                </p>
                <h3>
                  <Link href={`/projects/${p.slug}`}>{f.headline}</Link>
                </h3>
                <p className="project-role">{p.detailCard.role}</p>
                <p>{p.summary}</p>
                <div className="project-result">
                  <strong>{f.metric}</strong>
                  <span>{f.label}</span>
                </div>
                <Link href={`/projects/${p.slug}`} className="text-link">
                  Explore the project <span aria-hidden="true">↗</span>
                </Link>
              </div>
            </article>
          );
        })}
      </section>
      <section id="all-projects" className="project-library">
        <div className="section-top">
          <div>
            <p className="eyebrow">02 / The full picture</p>
            <h2>Ventures, client work &amp; curiosity.</h2>
          </div>
          <p>Every project. Different ways of building.</p>
        </div>
        <div className="library-grid">
          {projects.map((p) => (
            <Link
              key={p.slug}
              href={`/projects/${p.slug}`}
              className="library-card"
            >
              <div className="library-meta">
                <span>{p.group}</span>
                <span aria-hidden="true">↗</span>
              </div>
              <h3>{p.title}</h3>
              <p>{p.subtitle}</p>
              <span className="library-status">{p.detailCard.status}</span>
            </Link>
          ))}
        </div>
      </section>
      <section className="beyond-work">
        <p className="eyebrow">03 / Beyond the brief</p>
        <h2>Curiosity doesn’t clock out.</h2>
        <p>
          I’ve lived in Lisbon, Cluj, Prague, and Valladolid, travelled across
          30+ countries, and written a book. The personal side of the portfolio
          is here, too.
        </p>
        <div className="button-row">
          <Link className="button-quiet" href="/travel">
            Explore my travels ↗
          </Link>
          <Link className="button-quiet" href="/projects/loves-conception">
            Love’s Conception ↗
          </Link>
          <Link className="button-quiet" href="/story">
            My story ↗
          </Link>
        </div>
      </section>
    </div>
  );
}
