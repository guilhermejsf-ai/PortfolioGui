import { Chevron } from "@/components/chevron";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import { projectImageDimensions } from "@/data/project-image-dimensions";
import { projects, getProjectArchiveVisual, type Project } from "@/data/projects";

function ProjectTile({ project, wide = false, priority = false }: { project: Project; wide?: boolean; priority?: boolean }) {
  const visual = project.slug === "racefiets013"
    ? {
        type: "image" as const,
        src: "/assets/projects/racefiets013/homepage-rf013.png",
        alt: "Racefiets013 bicycle logo",
      }
    : project.slug === "blendbyte"
      ? project.logoVisual ?? getProjectArchiveVisual(project)
      : getProjectArchiveVisual(project);
  const dimensions = visual.type === "image" ? projectImageDimensions[visual.src] : undefined;
  return (
    <Link href={`/projects?project=${project.slug}`} className={`studio-tile project-tile tile-${project.slug}${wide ? " tile-wide" : ""}`} aria-label={`${project.title} — ${project.subtitle}`}>
      <div className="tile-art">
        {visual.type === "image" ? (
          <Image src={visual.src} alt={visual.alt} {...(["nordensa", "blendbyte"].includes(project.slug) ? { fill: true } : { width: dimensions?.width, height: dimensions?.height })} sizes={wide ? "(max-width: 640px) 100vw, 50vw" : "(max-width: 640px) 100vw, (max-width: 1000px) 50vw, 25vw"} className="tile-image" preload={priority} />
        ) : <span className="tile-monogram">{project.title}</span>}
      </div>
      <div className="tile-caption">
        <div><h2>{project.title}</h2><p>{project.slug === "nordensa" ? "Co-founder · Operations and Growth" : project.role}</p></div>
        <span className="tile-arrow"><Chevron /></span>
      </div>
    </Link>
  );
}

export function WorkIndex() {
  const nordensa = projects.find(p => p.slug === "nordensa")!;
  const blendbyte = projects.find(p => p.slug === "blendbyte")!;
  const racefiets = projects.find(p => p.slug === "racefiets013")!;
  const homepageOrder = [
    "umedicu", "pocket-tours", "safe-travel", "habits", "mumzers",
    "nexdoo", "zcharge", "finance", "vlogui", "footy", "loves-conception",
  ];
  const remaining = projects
    .filter(p => !["nordensa", "racefiets013", "blendbyte", "grupo-invest"].includes(p.slug))
    .sort((a, b) => {
      const aIndex = homepageOrder.indexOf(a.slug);
      const bIndex = homepageOrder.indexOf(b.slug);
      return (aIndex === -1 ? Infinity : aIndex) - (bIndex === -1 ? Infinity : bIndex);
    });
  const projectColumns = [
    ["pocket-tours", "mumzers", "zcharge"],
    ["safe-travel", "finance"],
    ["umedicu", "nexdoo", "vlogui"],
    ["habits", "footy", "loves-conception"],
  ];
  const featuredSlugs = new Set(projectColumns.flat());
  const archiveProjects = remaining.filter(p => !featuredSlugs.has(p.slug));
  const renderProjectColumn = (slugs: string[]) => (
    <div className="feature-project-stack">
      {slugs.map(slug => {
        const project = remaining.find(p => p.slug === slug);
        return project ? <ProjectTile key={slug} project={project} /> : null;
      })}
    </div>
  );
  return (
    <div className="studio-shell">
      <section className="studio-grid" aria-label="My work and a little about me">
        <article className="studio-tile intro-tile">
          <h1>Ideas into action. <span>Action into growth.</span></h1>
          <div className="intro-divider" />
          <p>I work across growth and operations, turning early ideas into products, partnerships, and processes that teams can use.</p>
          <p>I’ve co-founded ventures, led digital growth, and built systems that make day-to-day work easier.</p>
          <p className="intro-specialties">Growth &amp; operations · Company building · AI-assisted automation</p>
        </article>
        <ProjectTile project={nordensa} priority />
        <ProjectTile project={blendbyte} />
        <ProjectTile project={racefiets} />
        <Link href="/cv" className="studio-tile portrait-tile" aria-label="Meet Guilherme — the person behind the work">
          <Image src={siteConfig.portrait} alt="Guilherme Fernandes" fill sizes="(max-width: 640px) 100vw, 25vw" className="portrait-image" />
          <div className="portrait-caption"><span>A builder at heart.</span><span className="tile-arrow"><Chevron /></span></div>
        </Link>
        <Link href="/travel" className="studio-tile travel-tile tile-wide">
          <Image src="/assets/travel/lisbon-concept.png" alt="Lisbon travel illustration" fill sizes="(max-width: 640px) 100vw, 50vw" className="travel-image" />
          <div className="travel-caption"><p className="tile-kicker">Beyond work</p><h2>Curiosity doesn’t clock out.</h2><p>30+ countries. 4 continents.</p><span className="tile-arrow"><Chevron /></span></div>
        </Link>
      </section>
      <section className="feature-columns" aria-label="Current work, podcast, outcomes, and more projects">
        <div className="feature-column">
          <article className="studio-tile now-tile">
            <p className="tile-kicker">Currently</p>
            <Link href="/projects?project=blendbyte" className="now-entry"><h2>Managing Blendbyte</h2><p>Led the restructure and rebrand, recruited a new team, and built Blendbyte OS for the company’s daily work.</p></Link>
            <Link href="/projects?project=grupo-invest" className="now-entry"><h2>Making operations work smarter</h2><p>Built a new website and worked on SEO and email marketing. I’m now reviewing processes and introducing AI and automation at Grupo Invest / Invest2030.</p></Link>
          </article>
          <article className="studio-tile results-tile">
            <p className="tile-kicker">A few outcomes</p>
            <dl>
              <div><dt>12k → 25k</dt><dd>December sessions, year over year · Racefiets013</dd></div>
              <div><dt>€1.6m</dt><dd>Raised across two rounds I supported · Nordensa</dd></div>
              <div><dt>40k+</dt><dd>Instagram followers gained in 6 months · Racefiets013</dd></div>
            </dl>
          </article>
          <div className="feature-projects">{projectColumns.slice(0, 2).map((slugs, index) => <div key={index}>{renderProjectColumn(slugs)}</div>)}</div>
        </div>
        <div className="feature-column">
          <article className="studio-tile podcast-tile">
            <div className="podcast-heading"><p className="tile-kicker">On the podcast</p><h2>Entrepremotions</h2></div>
            <iframe
              title="Spotify podcast episode: Entrepremotions — Emotional Balance in the business rollercoaster"
              src="https://open.spotify.com/embed/episode/3u3ptLnd8KzIwTKw7fJ4gs?utm_source=generator"
              width="100%"
              height="152"
              loading="lazy"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              allowFullScreen
            />
          </article>
          <div className="feature-projects">{projectColumns.slice(2).map((slugs, index) => <div key={index}>{renderProjectColumn(slugs)}</div>)}</div>
        </div>
      </section>
      {archiveProjects.length > 0 && <section className="project-masonry" aria-label="More projects">
        {archiveProjects.map(project => <ProjectTile key={project.slug} project={project} />)}
      </section>}
    </div>
  );
}
