"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Fragment, startTransition, useEffect, useState } from "react";
import betterGmailLogo from "@/bettergmaillogo.webp";
import instagramIcon from "@/stores/instagram-vector-logo-icon-social-media-logotype_901408-392.avif";

import {
  Project,
  getProjectLogoVisual,
  getProjectPreviewSlides,
  projectGroupOrder,
} from "@/data/projects";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

import { VisualBlock } from "./visual-block";

type ProjectsSelectorProps = {
  projects: Project[];
  initialSlug?: string;
};

const projectSlugOrder = [
  "nordensa",
  "racefiets013",
  "umedicu",
  "nexdoo",
  "zcharge",
  "mumzers",
  "safe-travel",
  "habits",
  "pocket-tours",
  "footy",
  "finance",
  "loves-conception",
  "vlogui",
] as const;

const projectOrderMap = new Map<string, number>(
  projectSlugOrder.map((slug, index) => [slug, index]),
);

const toneClasses = {
  white: "bg-white",
  blue: "bg-accent-deep",
  neutral: "bg-panel-alt",
  warm: "bg-[#f7efe7]",
};

type ProjectTheme = {
  panel: string;
  previewShell: string;
  previewInner: string;
  surface: string;
  logoSurface: string;
  iconActive: string;
};

const defaultTheme: ProjectTheme = {
  panel: "border-[#dde3eb] bg-[#f9fbfd]",
  previewShell: "border-[#c7d3e2] bg-[#dde9f5]",
  previewInner: "bg-white/90",
  surface: "border-[#d7e0ea] bg-white/78",
  logoSurface: "bg-white",
  iconActive:
    "border-[#9bb3cf] bg-white shadow-[0_14px_34px_rgba(116,143,176,0.16)]",
};

const projectThemes: Record<string, ProjectTheme> = {
  racefiets013: {
    panel: "border-[#eadfb2] bg-[#fffaf1]",
    previewShell: "border-[#c8aa46]/70 bg-[#f3cf57]",
    previewInner: "bg-[#fff4c7]",
    surface: "border-[#efe2b7] bg-[#fff7de]",
    logoSurface: "bg-white",
    iconActive:
      "border-[#c8aa46]/70 bg-[#fff9eb] shadow-[0_14px_34px_rgba(200,170,70,0.18)]",
  },
  nordensa: {
    panel: "border-[#f0cbc1] bg-[#fff6f2]",
    previewShell: "border-[#47617f]/75 bg-[#f2643e]",
    previewInner: "bg-[#ffd9cd]",
    surface: "border-[#f1d2ca] bg-[#fff1ec]",
    logoSurface: "bg-[#fff5f1]",
    iconActive:
      "border-[#47617f]/65 bg-[#fff7f3] shadow-[0_14px_34px_rgba(71,97,127,0.18)]",
  },
  umedicu: {
    panel: "border-[#ddd7ef] bg-[#fbf8ff]",
    previewShell: "border-[#6ab9aa]/60 bg-[linear-gradient(135deg,#f4d7e9_0%,#ccefe9_100%)]",
    previewInner: "bg-white/78",
    surface: "border-[#e4dcf3] bg-[#f7f3ff]",
    logoSurface: "bg-white",
    iconActive:
      "border-[#8dc9bf]/65 bg-[#fbf8ff] shadow-[0_14px_34px_rgba(141,201,191,0.18)]",
  },
  nexdoo: {
    panel: "border-[#ecd7ba] bg-[#fff8ef]",
    previewShell: "border-[#e08e2f]/60 bg-[linear-gradient(135deg,#f6b24d_0%,#f6d05f_100%)]",
    previewInner: "bg-[#fff3db]",
    surface: "border-[#eedbbf] bg-[#fff4e2]",
    logoSurface: "bg-white",
    iconActive:
      "border-[#e08e2f]/65 bg-[#fff8ef] shadow-[0_14px_34px_rgba(224,142,47,0.16)]",
  },
  "safe-travel": {
    panel: "border-[#f0d2ca] bg-[#fff7f4]",
    previewShell: "border-[#ef6d4d]/60 bg-[linear-gradient(135deg,#ffb28f_0%,#ffd5c7_100%)]",
    previewInner: "bg-white/82",
    surface: "border-[#f1dad3] bg-[#fff1ec]",
    logoSurface: "bg-white",
    iconActive:
      "border-[#ef6d4d]/65 bg-[#fff8f5] shadow-[0_14px_34px_rgba(239,109,77,0.16)]",
  },
  habits: {
    panel: "border-[#ead9cd] bg-[#fff9f4]",
    previewShell: "border-[#f0a05f]/55 bg-[linear-gradient(135deg,#fff0d7_0%,#ffd7ae_100%)]",
    previewInner: "bg-[#fff8ef]",
    surface: "border-[#ebddd3] bg-[#fff5eb]",
    logoSurface: "bg-[#fff9f3]",
    iconActive:
      "border-[#f0a05f]/65 bg-[#fff9f4] shadow-[0_14px_34px_rgba(240,160,95,0.14)]",
  },
  mumzers: {
    panel: "border-[#ead4d9] bg-[#fff7f8]",
    previewShell: "border-[#8e4456]/55 bg-[linear-gradient(135deg,#f9d8df_0%,#f5e9dd_100%)]",
    previewInner: "bg-white/82",
    surface: "border-[#eddde0] bg-[#fff0f3]",
    logoSurface: "bg-[#fff7f7]",
    iconActive:
      "border-[#8e4456]/55 bg-[#fff8f9] shadow-[0_14px_34px_rgba(142,68,86,0.14)]",
  },
  "pocket-tours": {
    panel: "border-[#efddd4] bg-[#fff9f6]",
    previewShell: "border-[#e46947]/55 bg-[linear-gradient(135deg,#ffba8b_0%,#ffd8c4_100%)]",
    previewInner: "bg-white/82",
    surface: "border-[#efe2da] bg-[#fff2ea]",
    logoSurface: "bg-white",
    iconActive:
      "border-[#e46947]/55 bg-[#fff8f4] shadow-[0_14px_34px_rgba(228,105,71,0.14)]",
  },
  zcharge: {
    panel: "border-[#d7dbe4] bg-[#f8fafc]",
    previewShell: "border-[#606c80]/55 bg-[linear-gradient(135deg,#e8edf4_0%,#cfd8e6_100%)]",
    previewInner: "bg-white/86",
    surface: "border-[#dde2ea] bg-[#f2f5f9]",
    logoSurface: "bg-white",
    iconActive:
      "border-[#606c80]/55 bg-[#fafcff] shadow-[0_14px_34px_rgba(96,108,128,0.14)]",
  },
  finance: {
    panel: "border-[#d7e1e6] bg-[#f7fbfc]",
    previewShell: "border-[#4e98a2]/55 bg-[linear-gradient(135deg,#d5f1f0_0%,#b8dce1_100%)]",
    previewInner: "bg-white/86",
    surface: "border-[#dce7ea] bg-[#eef7f8]",
    logoSurface: "bg-white",
    iconActive:
      "border-[#4e98a2]/55 bg-[#f7fbfc] shadow-[0_14px_34px_rgba(78,152,162,0.14)]",
  },
  footy: {
    panel: "border-[#d8e4df] bg-[#f7fbf8]",
    previewShell: "border-[#4c7f73]/55 bg-[linear-gradient(135deg,#dbeee8_0%,#bdd8cf_100%)]",
    previewInner: "bg-white/86",
    surface: "border-[#dce7e2] bg-[#eef6f2]",
    logoSurface: "bg-white",
    iconActive:
      "border-[#4c7f73]/55 bg-[#f7fbf8] shadow-[0_14px_34px_rgba(76,127,115,0.14)]",
  },
  "loves-conception": {
    panel: "border-[#ead4cc] bg-[#fff7f1]",
    previewShell: "border-[#bc6556]/55 bg-[linear-gradient(135deg,#f0bfab_0%,#f6e1d5_100%)]",
    previewInner: "bg-white/80",
    surface: "border-[#ebddd5] bg-[#fff0e8]",
    logoSurface: "bg-[#fff8f4]",
    iconActive:
      "border-[#bc6556]/55 bg-[#fff8f3] shadow-[0_14px_34px_rgba(188,101,86,0.14)]",
  },
};

function getProjectTheme(project: Project) {
  return projectThemes[project.slug] ?? defaultTheme;
}

function getInitialSelectedSlug(projects: Project[], slug?: string) {
  const fallbackSlug = projects[0]?.slug ?? "";

  if (!slug) {
    return fallbackSlug;
  }

  return projects.some((project) => project.slug === slug) ? slug : fallbackSlug;
}

type ProjectActionItem =
  | {
      type: "website" | "instagram";
      href: string;
      label: string;
    }
  | {
      type: "ios" | "android";
      href: string;
      label: string;
    };

function getProjectActionItems(project: Project): ProjectActionItem[] {
  const items: ProjectActionItem[] = [];

  if (project.actions?.iosDownload) {
    items.push({
      type: "ios",
      href: project.actions.iosDownload,
      label: "Download on the App Store",
    });
  }

  if (project.actions?.androidDownload) {
    items.push({
      type: "android",
      href: project.actions.androidDownload,
      label: "Get it on Google Play",
    });
  }

  if (project.actions?.instagram) {
    items.push({
      type: "instagram",
      href: project.actions.instagram,
      label: "Instagram",
    });
  }

  if (project.actions?.website) {
    items.push({
      type: "website",
      href: project.actions.website.href,
      label: project.actions.website.label ?? "Visit website",
    });
  }

  return items;
}

function AppleStoreMark() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-5 w-5 fill-current"
    >
      <path d="M16.84 12.98c.03 3.18 2.79 4.24 2.82 4.26-.02.08-.44 1.52-1.45 3.01-.87 1.29-1.78 2.58-3.2 2.61-1.39.03-1.84-.82-3.44-.82-1.6 0-2.1.79-3.41.85-1.36.05-2.4-1.37-3.28-2.65-1.79-2.6-3.16-7.35-1.32-10.55.91-1.59 2.54-2.6 4.31-2.63 1.34-.03 2.6.9 3.41.9.81 0 2.33-1.11 3.93-.95.67.03 2.56.27 3.77 2.05-.1.06-2.25 1.31-2.23 3.92Z" />
      <path d="M14.63 5.55c.73-.88 1.23-2.11 1.09-3.33-1.05.04-2.32.7-3.08 1.58-.68.79-1.27 2.04-1.11 3.24 1.17.09 2.37-.59 3.1-1.49Z" />
    </svg>
  );
}

function GooglePlayMark() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5">
      <path fill="#00d084" d="M3.7 3.25 13.97 13.5 3.71 23.76a2.2 2.2 0 0 1-.21-.94V4.19c0-.33.07-.65.2-.94Z" />
      <path fill="#00a3ff" d="m16.91 16.43-2.94-2.93L3.7 23.76c.34-.06.67-.18.97-.36l12.24-6.97Z" />
      <path fill="#ffca28" d="m16.91 10.57-12.24-6.97c-.3-.17-.63-.29-.97-.35L13.97 13.5l2.94-2.93Z" />
      <path fill="#ff5252" d="M20.51 12.61c.65-.37.65-1.31 0-1.68l-3.6-2.04-2.94 2.93 2.94 2.93 3.6-2.04Z" />
    </svg>
  );
}

function StoreBadge({
  href,
  label,
  eyebrow,
  children,
}: {
  href: string;
  label: string;
  eyebrow: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex min-w-[172px] items-center gap-3 rounded-2xl border border-[#121826]/12 bg-[#101723] px-3.5 py-2.5 text-left text-white shadow-[0_12px_26px_rgba(16,23,35,0.18)] transition hover:-translate-y-0.5 hover:bg-[#0b1220]"
      aria-label={label}
      title={label}
    >
      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-white">
        {children}
      </span>
      <span className="flex min-w-0 flex-col">
        <span className="text-[0.62rem] font-medium uppercase tracking-[0.18em] text-white/68">
          {eyebrow}
        </span>
        <span className="truncate text-sm font-semibold leading-5">{label}</span>
      </span>
    </a>
  );
}

function ZChargeDeckPanel() {
  const email = siteConfig.social.email;
  const mailtoHref = email
    ? `mailto:${email}?subject=${encodeURIComponent("ZCharge deck request")}`
    : undefined;

  return (
    <div className="flex h-full min-h-[260px] items-center justify-center p-6 sm:p-8">
      <div className="w-full max-w-sm rounded-[28px] border border-white/65 bg-white/76 px-6 py-7 text-center shadow-[0_24px_60px_rgba(97,114,136,0.16)] backdrop-blur">
        <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-accent-deep/75">
          Private Material
        </p>
        <h3 className="mt-3 text-2xl font-semibold tracking-tight text-ink">
          Ask for deck
        </h3>
        <p className="mt-3 text-sm leading-7 text-muted">
          The ZCharge investor deck is available on request.
        </p>
        {mailtoHref ? (
          <a
            href={mailtoHref}
            className="mt-5 inline-flex items-center gap-2 rounded-full border border-line bg-white/82 px-4 py-3 text-sm font-semibold text-ink transition hover:border-accent/40 hover:text-accent-deep"
          >
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white shadow-sm">
              <Image src={betterGmailLogo} alt="" className="h-4 w-4" />
            </span>
            Email
          </a>
        ) : null}
      </div>
    </div>
  );
}

export function ProjectsSelector({
  projects,
  initialSlug,
}: ProjectsSelectorProps) {
  const orderedProjects = [...projects].sort((a, b) => {
    const aIndex = projectOrderMap.get(a.slug) ?? Number.MAX_SAFE_INTEGER;
    const bIndex = projectOrderMap.get(b.slug) ?? Number.MAX_SAFE_INTEGER;

    return aIndex - bIndex || a.title.localeCompare(b.title);
  });
  const [selectedSlug, setSelectedSlug] = useState(() =>
    getInitialSelectedSlug(orderedProjects, initialSlug),
  );
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  useEffect(() => {
    const nextProjects = [...projects].sort((a, b) => {
      const aIndex = projectOrderMap.get(a.slug) ?? Number.MAX_SAFE_INTEGER;
      const bIndex = projectOrderMap.get(b.slug) ?? Number.MAX_SAFE_INTEGER;

      return aIndex - bIndex || a.title.localeCompare(b.title);
    });

    setSelectedSlug(getInitialSelectedSlug(nextProjects, initialSlug));
  }, [initialSlug, projects]);

  const selectedProject =
    orderedProjects.find((project) => project.slug === selectedSlug) ??
    orderedProjects[0];

  if (!selectedProject) {
    return null;
  }

  const groupedProjects = projectGroupOrder
    .map((group) => ({
      group,
      projects: orderedProjects.filter((project) => project.group === group),
    }))
    .filter(({ projects: groupProjects }) => groupProjects.length > 0);

  const selectedTheme = getProjectTheme(selectedProject);
  const selectedLogoVisual = getProjectLogoVisual(selectedProject);
  const previewSlides = getProjectPreviewSlides(selectedProject);
  const safeActiveSlideIndex = previewSlides[activeSlideIndex]
    ? activeSlideIndex
    : 0;
  const activePreviewSlide = previewSlides[safeActiveSlideIndex];
  const footerMeta = selectedProject.detailCard.meta ?? selectedProject.section;
  const topLabels = [selectedProject.detailCard.role].filter(Boolean) as string[];
  const actionItems = getProjectActionItems(selectedProject);
  const showZChargeDeckPanel =
    selectedProject.slug === "zcharge" && activePreviewSlide?.type === "placeholder";

  useEffect(() => {
    setActiveSlideIndex(0);
  }, [previewSlides.length, selectedProject.slug]);

  useEffect(() => {
    if (previewSlides.length <= 1) return;

    const intervalId = window.setInterval(() => {
      if (document.hidden) return;

      setActiveSlideIndex((current) => (current + 1) % previewSlides.length);
    }, 6200);

    return () => window.clearInterval(intervalId);
  }, [previewSlides.length, selectedProject.slug]);

  const goToSlide = (index: number) => {
    if (!previewSlides.length) return;
    setActiveSlideIndex(index);
  };

  const goToPreviousSlide = () => {
    if (previewSlides.length <= 1) return;
    setActiveSlideIndex((current) =>
      current === 0 ? previewSlides.length - 1 : current - 1,
    );
  };

  const goToNextSlide = () => {
    if (previewSlides.length <= 1) return;
    setActiveSlideIndex((current) => (current + 1) % previewSlides.length);
  };

  return (
    <div className="space-y-8">
      <div className="relative z-20 -mx-1 max-w-full overflow-x-auto px-1 pb-1 lg:overflow-visible">
        <div className="flex w-max min-w-full items-start gap-6 sm:gap-8 lg:w-full lg:justify-between lg:gap-10">
          {groupedProjects.map(({ group, projects: groupProjects }) => (
            <div
              key={group}
              className="min-w-fit lg:first:mr-4 lg:last:ml-4"
            >
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-muted/72 sm:text-[10.5px]">
                  {group}
                </p>
              </div>

              <div className="mt-2.5 flex items-center gap-2 sm:gap-2.5">
                {groupProjects.map((project) => {
                  const logo = getProjectLogoVisual(project);
                  const isActive = project.slug === selectedProject.slug;

                  return (
                    <div
                      key={project.slug}
                      className="group relative flex shrink-0 justify-center"
                    >
                      <Link
                        href={`/projects?project=${encodeURIComponent(project.slug)}`}
                        prefetch={false}
                        onClick={() => {
                          startTransition(() => setSelectedSlug(project.slug));
                        }}
                        className={cn(
                          "flex items-center justify-center rounded-[18px] p-1.5 transition duration-300 sm:p-2",
                          isActive
                            ? "bg-white shadow-[0_10px_24px_rgba(15,23,42,0.08)]"
                            : "hover:-translate-y-0.5",
                        )}
                        aria-current={isActive ? "page" : undefined}
                        aria-label={project.title}
                        title={project.title}
                      >
                        <div
                          className={cn(
                            "relative flex h-[40px] w-[40px] items-center justify-center overflow-hidden rounded-[14px] border transition sm:h-[44px] sm:w-[44px]",
                            toneClasses[logo.tone ?? "neutral"],
                            isActive
                              ? "scale-[1.03] border-accent/30 shadow-[0_0_0_3px_rgba(209,106,67,0.08)]"
                              : "border-line/65 group-hover:scale-[1.02] group-hover:border-accent/20",
                          )}
                        >
                          {logo.type === "image" ? (
                            <div className="absolute inset-0 h-full w-full overflow-hidden">
                              <Image
                                src={logo.src}
                                alt={logo.alt}
                                fill
                                sizes="44px"
                                className={cn(
                                  "select-none object-center",
                                  logo.fit === "cover"
                                    ? "object-cover"
                                    : "object-contain",
                                )}
                                draggable={false}
                              />
                            </div>
                          ) : (
                            <span className="px-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-ink">
                              {project.title.slice(0, 3)}
                            </span>
                          )}
                        </div>
                      </Link>
                      <span className="pointer-events-none absolute left-1/2 top-full z-10 mt-1.5 -translate-x-1/2 whitespace-nowrap text-[11px] font-medium tracking-[0.01em] text-muted opacity-0 transition-all duration-200 group-hover:translate-y-0.5 group-hover:opacity-100 group-focus-within:translate-y-0.5 group-focus-within:opacity-100">
                        {project.title}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>

      <section
        className={cn(
          "relative z-0 rounded-[34px] border p-4 shadow-card sm:p-6",
          selectedTheme.panel,
        )}
      >
          <div className="grid gap-6 xl:grid-cols-[minmax(0,0.94fr)_minmax(360px,1.06fr)] xl:items-start">
            <div className="flex min-w-0 flex-col">
              {topLabels.length ? (
                <div className="flex flex-wrap items-center gap-2.5">
                  {topLabels.map((label, index) => (
                    <span
                      key={label}
                      className={cn(
                        "rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em]",
                        index === 0
                          ? "bg-accent-soft text-accent-deep"
                          : cn("border text-muted", selectedTheme.surface),
                      )}
                    >
                      {label}
                    </span>
                  ))}
                </div>
              ) : null}

              <div className="mt-5">
                <h2 className="font-display text-[2.7rem] leading-[0.98] tracking-tight text-ink sm:text-[3.4rem]">
                  {selectedProject.title}
                </h2>
                <p className="mt-3 max-w-2xl text-base leading-8 text-muted sm:text-lg">
                  {selectedProject.summary}
                </p>
              </div>

              <div className="mt-7 border-t border-black/6 pt-6">
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-accent-deep">
                  What I did
                </p>
                <ul className="mt-4 space-y-3">
                  {selectedProject.detailCard.whatIDid.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm leading-7 text-ink/82 sm:text-[0.96rem]"
                    >
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-accent/60" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 border-t border-black/6 pt-6">
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-accent-deep">
                  {selectedProject.detailCard.outcome.title}
                </p>
                <p className="mt-3 max-w-2xl text-sm leading-7 text-muted sm:text-[0.96rem]">
                  {selectedProject.detailCard.outcome.text}
                </p>
                {selectedProject.detailCard.outcome.proofPoints?.length ? (
                  <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-muted">
                    {selectedProject.detailCard.outcome.proofPoints.map(
                      (point, index) => (
                        <Fragment key={point}>
                          {index > 0 ? (
                            <span
                              aria-hidden="true"
                              className="h-1.5 w-1.5 rounded-full bg-accent/35"
                            />
                          ) : null}
                          <span>{point}</span>
                        </Fragment>
                      ),
                    )}
                  </div>
                ) : null}
              </div>

            </div>

            <div className="flex min-w-0 flex-col gap-4 xl:pt-16">
              <div
                className={cn(
                  "grid items-center gap-2.5 rounded-[26px] border px-3 py-2.5 sm:grid-cols-[120px_minmax(0,1fr)] sm:px-3.5 sm:py-3",
                  selectedTheme.surface,
                )}
              >
                <VisualBlock
                  visual={selectedLogoVisual}
                  showLabel={false}
                  elevated={false}
                  className={cn(
                    "aspect-[5/4] rounded-[20px] border-line/70 sm:aspect-square",
                    selectedTheme.logoSurface,
                  )}
                />
                <div className="flex min-w-0 flex-col items-end gap-2">
                  <p className="max-w-[18rem] text-right text-sm leading-6 text-muted">
                    {footerMeta}
                  </p>
                  {actionItems.length ? (
                    <div className="flex w-full flex-wrap justify-end gap-2">
                      {actionItems.map((action) => {
                        if (action.type === "ios" || action.type === "android") {
                          return action.type === "ios" ? (
                            <StoreBadge
                              key={`${selectedProject.slug}-${action.type}`}
                              href={action.href}
                              eyebrow="Available on"
                              label="App Store"
                            >
                              <AppleStoreMark />
                            </StoreBadge>
                          ) : (
                            <StoreBadge
                              key={`${selectedProject.slug}-${action.type}`}
                              href={action.href}
                              eyebrow="Get it on"
                              label="Google Play"
                            >
                              <GooglePlayMark />
                            </StoreBadge>
                          );
                        }

                        if (action.type === "instagram") {
                          return (
                            <a
                              key={`${selectedProject.slug}-${action.type}`}
                              href={action.href}
                              target="_blank"
                              rel="noreferrer"
                              className="inline-flex items-center gap-2 rounded-full border border-line/75 bg-white/76 px-3 py-2 text-sm font-semibold text-ink transition hover:-translate-y-0.5 hover:border-accent/30 hover:bg-white"
                            >
                              <span className="relative h-4 w-4 overflow-hidden rounded-[5px]">
                                <Image
                                  src={instagramIcon}
                                  alt=""
                                  fill
                                  className="object-contain"
                                />
                              </span>
                              <span>Instagram</span>
                            </a>
                          );
                        }

                        return (
                          <a
                            key={`${selectedProject.slug}-${action.type}`}
                            href={action.href}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center rounded-full bg-ink px-3.5 py-2 text-sm font-semibold text-white transition hover:bg-ink/90"
                          >
                            {action.label}
                          </a>
                        );
                      })}
                    </div>
                  ) : null}
                </div>
              </div>

              <div
                className={cn(
                  "rounded-[30px] border p-4 shadow-card",
                  selectedTheme.previewShell,
                )}
              >
                <div
                  className={cn(
                    "relative overflow-hidden rounded-[24px] border-white/20 aspect-[16/9.6] sm:aspect-[16/9.2] xl:aspect-[16/10.2]",
                    selectedTheme.previewInner,
                  )}
                >
                  {previewSlides.length > 1 ? (
                    <>
                      <button
                        type="button"
                        onClick={goToPreviousSlide}
                        className="absolute left-3 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/55 bg-black/42 text-[1.65rem] font-semibold text-white shadow-[0_16px_36px_rgba(0,0,0,0.28)] backdrop-blur-sm transition hover:scale-[1.04] hover:bg-black/56"
                        aria-label={`Show previous ${selectedProject.title} slide`}
                      >
                        ‹
                      </button>
                      <button
                        type="button"
                        onClick={goToNextSlide}
                        className="absolute right-3 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/55 bg-black/42 text-[1.65rem] font-semibold text-white shadow-[0_16px_36px_rgba(0,0,0,0.28)] backdrop-blur-sm transition hover:scale-[1.04] hover:bg-black/56"
                        aria-label={`Show next ${selectedProject.title} slide`}
                      >
                        ›
                      </button>
                    </>
                  ) : null}

                  <AnimatePresence mode="wait" initial={false}>
                    <motion.div
                      key={`${selectedProject.slug}-${safeActiveSlideIndex}`}
                      initial={{ opacity: 0, x: 24, scale: 1.02 }}
                      animate={{ opacity: 1, x: 0, scale: 1 }}
                      exit={{ opacity: 0, x: -24, scale: 0.985 }}
                      transition={{ duration: 0.45, ease: "easeOut" }}
                      className="absolute inset-0"
                    >
                      {showZChargeDeckPanel ? (
                        <div className="h-full w-full rounded-[24px] border border-white/20 bg-[linear-gradient(135deg,rgba(255,255,255,0.74),rgba(233,239,247,0.95))]">
                          <ZChargeDeckPanel />
                        </div>
                      ) : (
                        <VisualBlock
                          visual={activePreviewSlide}
                          showLabel={false}
                          elevated={false}
                          balancedImage
                          className="h-full w-full rounded-[24px] border-white/20"
                        />
                      )}
                    </motion.div>
                  </AnimatePresence>

                  {previewSlides.length > 1 ? (
                    <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-black/28 via-black/6 to-transparent px-4 pb-4 pt-12">
                      <div className="flex items-center gap-2">
                        {previewSlides.map((slide, index) => (
                          <button
                            type="button"
                            key={`${selectedProject.slug}-${slide.label}-${index}`}
                            onClick={() => goToSlide(index)}
                            className={cn(
                              "h-2 rounded-full transition-all duration-300",
                              index === safeActiveSlideIndex
                                ? "w-8 bg-white"
                                : "w-2 bg-white/55",
                            )}
                            aria-label={`Show ${selectedProject.title} slide ${index + 1}`}
                            aria-pressed={index === safeActiveSlideIndex}
                          >
                            <span className="sr-only">
                              {selectedProject.title} slide {index + 1}
                            </span>
                          </button>
                        ))}
                      </div>
                      <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/88">
                        {String(safeActiveSlideIndex + 1).padStart(2, "0")} /{" "}
                        {String(previewSlides.length).padStart(2, "0")}
                      </span>
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
      </section>
    </div>
  );
}
