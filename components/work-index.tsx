import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";
import { ProjectsSelector } from "@/components/projects-selector";

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
            <p className="eyebrow">01 / My work</p>
            <h2>Explore my projects.</h2>
          </div>
        </div>
        <div id="all-projects">
          <ProjectsSelector projects={projects} />
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
