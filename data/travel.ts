export type TravelGroupSlug =
  | "lived-in"
  | "featured"
  | "roadtrips"
  | "eu-projects"
  | "more";

export type TravelPreviewSlide = {
  title: string;
  caption: string;
  imageSrc?: string;
  imageAlt?: string;
};

export type TravelEntry = {
  slug: string;
  group: TravelGroupSlug;
  navLabel: string;
  hoverLabel: string;
  flag: string;
  title: string;
  subtitle: string;
  summary: string;
  role: string;
  details: string[];
  snapshot: {
    title: "Snapshot" | "Outcome";
    text: string;
    proofPoints?: string[];
  };
  meta: string;
  previewSlides: TravelPreviewSlide[];
};

export type TravelGroup = {
  slug: TravelGroupSlug;
  title: string;
  items: TravelEntry[];
};

const ukRoadtrip = {
  title: "United Kingdom",
  subtitle: "A grouped route across England, Wales, and Scotland.",
  summary:
    "A connected roadtrip chapter where the route and contrast between places mattered more than any one stop on its own.",
  role: "Route chapter",
  details: [
    "Built around movement through distinct parts of the UK rather than a single destination.",
    "Best presented as one shared chapter with multiple entry points from the selector bar.",
    "Good space for later adding route notes, timing, and standout moments.",
  ],
  snapshot: {
    title: "Snapshot" as const,
    text:
      "England, Wales, and Scotland all route back into the same travel story here: one journey, several local atmospheres, and a cleaner way to browse it from the top bar.",
    proofPoints: ["England", "Wales", "Scotland"],
  },
  meta: "Roadtrips",
  previewSlides: [
    {
      title: "England concept",
      caption: "A connected UK chapter rather than separate isolated stops.",
      imageSrc: "/assets/travel/england-concept.png",
      imageAlt: "England travel concept",
    },
    {
      title: "Wales route stop",
      caption: "Wales now has its own concept visual inside the shared UK roadtrip story.",
      imageSrc: "/assets/travel/wales-concept.png",
      imageAlt: "Wales travel concept",
    },
    {
      title: "Scotland route stop",
      caption: "Scotland also carries its own concept visual in the grouped UK chapter.",
      imageSrc: "/assets/travel/scotland-concept.png",
      imageAlt: "Scotland travel concept",
    },
  ],
};

const balkanRoadtrip = {
  title: "Balkan Roadtrip",
  subtitle: "A wider route through the Balkans and nearby edges.",
  summary:
    "A broader roadtrip chapter shaped by contrast between coastal, urban, and regional stops across Southeast Europe.",
  role: "Route chapter",
  details: [
    "Grouped as one travel story so the selector stays clean while still letting each country act as an entry point.",
    "A useful chapter for later adding route notes, highlights, and cross-country reflections.",
    "More about the sequence and regional feel than about any one country standing alone.",
  ],
  snapshot: {
    title: "Snapshot" as const,
    text:
      "Albania, Bulgaria, Croatia, North Macedonia, and Montenegro belong to the same roadtrip chapter here, keeping the UX compact while preserving the full route.",
    proofPoints: ["Albania", "Bulgaria", "Croatia", "North Macedonia", "Montenegro"],
  },
  meta: "Roadtrips",
  previewSlides: [
    {
      title: "Albania concept",
      caption: "A route stop inside the wider Balkan roadtrip chapter.",
      imageSrc: "/assets/travel/albania-concept.png",
      imageAlt: "Albania travel concept",
    },
    {
      title: "Bulgaria concept",
      caption: "The Bulgaria leg adds another visual note to the shared route.",
      imageSrc: "/assets/travel/bulgaria-concept.png",
      imageAlt: "Bulgaria travel concept",
    },
    {
      title: "Croatia concept",
      caption: "Croatia now appears as part of the shared visual story for the Balkan route.",
      imageSrc: "/assets/travel/croatia-concept.png",
      imageAlt: "Croatia travel concept",
    },
    {
      title: "North Macedonia concept",
      caption: "North Macedonia rounds out the concept visuals currently available for this trip.",
      imageSrc: "/assets/travel/macedonia-concept.png",
      imageAlt: "North Macedonia travel concept",
    },
    {
      title: "Montenegro concept",
      caption: "Montenegro now joins the shared Balkan route slider with its own concept visual.",
      imageSrc: "/assets/travel/montenegro-concept.png",
      imageAlt: "Montenegro travel concept",
    },
    {
      title: "Shared access",
      caption: "Each Balkan flag in the bar opens this same roadtrip chapter.",
    },
  ],
};

const euProjectsChapter = {
  title: "EU Projects",
  subtitle: "Travel linked to purposeful work and collaboration.",
  summary:
    "A project-led travel chapter built around places connected to work, initiatives, and practical context rather than leisure alone.",
  role: "Work-linked chapter",
  details: [
    "Turkey, Cyprus, Bulgaria, and the Canary Islands all belong to this same purposeful travel cluster.",
    "Structured as one chapter so the top bar stays visual while the selected panel can hold richer project context later.",
    "A clear place to expand with notes on partnerships, projects, and outcomes.",
  ],
  snapshot: {
    title: "Outcome" as const,
    text:
      "This chapter keeps project-related travel separate from lived places, featured cities, and regular trips, so the archive reads with clearer intent.",
    proofPoints: ["Turkey", "Cyprus", "Bulgaria", "Canary Islands"],
  },
  meta: "EU Projects",
  previewSlides: [
    {
      title: "Turkey concept",
      caption: "The Istanbul leg now anchors the work-linked travel chapter visually.",
      imageSrc: "/assets/travel/turkey-concept.png",
      imageAlt: "Turkey travel concept",
    },
    {
      title: "Cyprus concept",
      caption: "Cyprus now appears with its own concept visual instead of the fallback card.",
      imageSrc: "/assets/travel/cyprus-concept.png",
      imageAlt: "Cyprus travel concept",
    },
    {
      title: "Bulgaria concept",
      caption: "Bulgaria completes the current set of visuals for this purposeful travel cluster.",
      imageSrc: "/assets/travel/bulgaria-concept.png",
      imageAlt: "Bulgaria travel concept",
    },
    {
      title: "Canary Islands concept",
      caption: "The Canary Islands now join the shared EU Projects slider with their own concept visual.",
      imageSrc: "/assets/travel/canary-concept.png",
      imageAlt: "Canary Islands travel concept",
    },
  ],
};

export const travelGroups: TravelGroup[] = [
  {
    slug: "lived-in",
    title: "Lived In",
    items: [
      {
        slug: "lisbon-portugal",
        group: "lived-in",
        navLabel: "Portugal",
        hoverLabel: "Portugal",
        flag: "🇵🇹",
        title: "Lisbon, Portugal",
        subtitle: "A lived-in chapter with day-to-day depth.",
        summary:
          "A longer personal chapter that belongs in the archive as a place lived rather than a short visit.",
        role: "Lived chapter",
        details: [
          "Represents a real period of day-to-day life, not just time passing through.",
          "A strong anchor point for how place shaped rhythm, taste, and perspective.",
          "Good space for later adding personal notes, routines, and work context.",
        ],
        snapshot: {
          title: "Snapshot",
          text:
            "Lisbon sits here as one of the core life chapters in the travel archive, giving this section a more personal center of gravity.",
          proofPoints: ["Lisbon", "Portugal", "Lived In"],
        },
        meta: "Lived In",
        previewSlides: [
          {
            title: "Lisbon concept",
            caption: "A lived-in Portugal chapter with its own concept visual.",
            imageSrc: "/assets/travel/lisbon-concept.png",
            imageAlt: "Lisbon travel concept",
          },
          {
            title: "Daily rhythm",
            caption: "A place that shaped routine, perspective, and pace.",
          },
          {
            title: "Archive anchor",
            caption: "One of the clearest lived chapters in the portfolio story.",
          },
        ],
      },
      {
        slug: "cluj-romania",
        group: "lived-in",
        navLabel: "Romania",
        hoverLabel: "Romania",
        flag: "🇷🇴",
        title: "Cluj, Romania",
        subtitle: "A lived-in chapter with its own local rhythm.",
        summary:
          "A city-level life chapter that belongs in the archive for its longer duration and real day-to-day experience.",
        role: "Lived chapter",
        details: [
          "Better understood as a life chapter than as a regular travel stop.",
          "Part of the set of places that shaped how the wider story is framed.",
          "Ready for later expansion with more specific memories, work, and context.",
        ],
        snapshot: {
          title: "Snapshot",
          text:
            "Cluj adds another meaningful lived-in chapter to the archive, reinforcing that this page is about shaped perspective, not just visited places.",
          proofPoints: ["Cluj", "Romania", "Lived In"],
        },
        meta: "Lived In",
        previewSlides: [
          {
            title: "Cluj concept",
            caption: "New travel concept visual added for this Romania chapter.",
            imageSrc: "/assets/travel/cluj-concept.png",
            imageAlt: "Cluj travel concept",
          },
        ],
      },
      {
        slug: "prague-czech-republic",
        group: "lived-in",
        navLabel: "Czech Republic",
        hoverLabel: "Czech Republic",
        flag: "🇨🇿",
        title: "Prague, Czech Republic",
        subtitle: "A lived-in chapter that belongs to the longer story.",
        summary:
          "Another city chapter defined by time spent living in it, not just seeing it from the outside.",
        role: "Lived chapter",
        details: [
          "A stronger archive entry because it reflects lived experience rather than short exposure.",
          "Useful as a counterpoint to the more standout or route-based travel categories.",
          "Good room for later expanding the story with context and specifics.",
        ],
        snapshot: {
          title: "Snapshot",
          text:
            "Prague helps give the page a grounded sense of lived geography, balancing the more selective featured cities and grouped roadtrips.",
          proofPoints: ["Prague", "Czech Republic", "Lived In"],
        },
        meta: "Lived In",
        previewSlides: [
          {
            title: "Prague concept",
            caption: "New travel concept visual added for this lived-in chapter.",
            imageSrc: "/assets/travel/prague-concept.png",
            imageAlt: "Prague travel concept",
          },
          {
            title: "Longer context",
            caption: "A city that shaped perspective through everyday exposure.",
          },
          {
            title: "Archive depth",
            caption: "Part of the more personal backbone of the travel section.",
          },
        ],
      },
      {
        slug: "valladolid-spain",
        group: "lived-in",
        navLabel: "Spain",
        hoverLabel: "Spain",
        flag: "🇪🇸",
        title: "Valladolid, Spain",
        subtitle: "A lived-in chapter from the Iberian side of the story.",
        summary:
          "A lived place that deserves to be read as a longer chapter, not a lightweight trip entry.",
        role: "Lived chapter",
        details: [
          "Fits the archive as a personal chapter with more depth than a regular visit.",
          "Adds another lived reference point to the overall international picture.",
          "Can later hold more notes about the period, people, and environment.",
        ],
        snapshot: {
          title: "Snapshot",
          text:
            "Valladolid extends the travel archive beyond standout visits, showing the slower, more grounded places that also shaped the overall perspective.",
          proofPoints: ["Valladolid", "Spain", "Lived In"],
        },
        meta: "Lived In",
        previewSlides: [
          {
            title: "Spain concept",
            caption: "New travel concept visual added for this Spain chapter.",
            imageSrc: "/assets/travel/spain-concept.png",
            imageAlt: "Spain travel concept",
          },
          {
            title: "Long-form stay",
            caption: "Included here as a chapter lived, not just a country touched.",
          },
          {
            title: "Grounded perspective",
            caption: "A quieter place with stronger day-to-day relevance.",
          },
          {
            title: "Iberian chapter",
            caption: "A lived archive entry with room for more personal detail later.",
          },
        ],
      },
    ],
  },
  {
    slug: "featured",
    title: "Featured",
    items: [
      {
        slug: "seoul-south-korea",
        group: "featured",
        navLabel: "South Korea",
        hoverLabel: "Seoul",
        flag: "🇰🇷",
        title: "Seoul, South Korea",
        subtitle: "A standout city chapter rather than a general country note.",
        summary:
          "One of the selective featured cities kept here for its atmosphere, energy, and memorable contrast.",
        role: "Featured city",
        details: [
          "Featured places are intentionally city-first rather than country-first.",
          "Kept distinct from the lighter More category to avoid flattening standout experiences.",
          "Good room for later adding sharper notes on what made the city memorable.",
        ],
        snapshot: {
          title: "Snapshot",
          text:
            "Seoul is treated here as a featured city, not as a placeholder for South Korea broadly, which keeps the archive more precise and curated.",
          proofPoints: ["Seoul", "South Korea", "Featured"],
        },
        meta: "Featured",
        previewSlides: [
          {
            title: "Seoul concept",
            caption: "New travel concept visual added for this featured city.",
            imageSrc: "/assets/travel/seoul-concept.png",
            imageAlt: "Seoul travel concept",
          },
        ],
      },
      {
        slug: "rio-brazil",
        group: "featured",
        navLabel: "Brazil",
        hoverLabel: "Rio de Janeiro",
        flag: "🇧🇷",
        title: "Rio de Janeiro, Brazil",
        subtitle: "A standout city chapter with its own energy.",
        summary:
          "A featured city entry reserved for places that felt more distinct and memorable than the average trip stop.",
        role: "Featured city",
        details: [
          "Presented city-first to keep the archive specific and personal.",
          "Separated from the More category so standout places keep their own visual weight.",
          "Ready for later expansion with sharper reflections and media.",
        ],
        snapshot: {
          title: "Snapshot",
          text:
            "Rio de Janeiro belongs in the featured set because it reads as a standout place in its own right, not just as one more country on the list.",
          proofPoints: ["Rio de Janeiro", "Brazil", "Featured"],
        },
        meta: "Featured",
        previewSlides: [
          {
            title: "Brazil concept",
            caption: "New travel concept visual added for this featured city chapter.",
            imageSrc: "/assets/travel/brazil-concept.png",
            imageAlt: "Rio de Janeiro travel concept",
          },
        ],
      },
      {
        slug: "budapest-hungary",
        group: "featured",
        navLabel: "Hungary",
        hoverLabel: "Budapest",
        flag: "🇭🇺",
        title: "Budapest, Hungary",
        subtitle: "A featured city with a clear place in the archive.",
        summary:
          "A standout city entry kept separate from the broader list so the section stays selective instead of becoming a generic country archive.",
        role: "Featured city",
        details: [
          "One of the city-first highlights in the featured group.",
          "Useful as a cleaner, more intentional chapter than a plain destination mention.",
          "Can later hold customized notes without changing the browsing structure.",
        ],
        snapshot: {
          title: "Snapshot",
          text:
            "Budapest works best here as a featured city chapter, helping the travel page feel curated instead of exhaustive.",
          proofPoints: ["Budapest", "Hungary", "Featured"],
        },
        meta: "Featured",
        previewSlides: [
          {
            title: "Hungary concept",
            caption: "New travel concept visual added for this featured city chapter.",
            imageSrc: "/assets/travel/hungary-concept.png",
            imageAlt: "Hungary travel concept",
          },
          {
            title: "Featured city",
            caption: "One of the places that stood out enough to earn its own chapter.",
          },
          {
            title: "Curated placement",
            caption: "Separated from the general list to keep the archive selective.",
          },
          {
            title: "Memorable stop",
            caption: "A stronger visual and experiential note in the wider travel story.",
          },
        ],
      },
      {
        slug: "chiang-mai-thailand",
        group: "featured",
        navLabel: "Thailand",
        hoverLabel: "Chiang Mai",
        flag: "🇹🇭",
        title: "Chiang Mai, Thailand",
        subtitle: "A featured city chapter kept city-first on purpose.",
        summary:
          "A standout city placed here as part of a smaller set of selective highlights rather than a broad country record.",
        role: "Featured city",
        details: [
          "Kept city-first to preserve the precision of the archive.",
          "Part of the featured set because it reads as more than a regular trip stop.",
          "Ready for later addition of more specific media and reflections.",
        ],
        snapshot: {
          title: "Snapshot",
          text:
            "Chiang Mai is treated as a featured city rather than a generic Thailand entry, which keeps the section more personal and less list-like.",
          proofPoints: ["Chiang Mai", "Thailand", "Featured"],
        },
        meta: "Featured",
        previewSlides: [
          {
            title: "Thailand concept",
            caption: "A dedicated Thailand concept visual now anchors this featured city page.",
            imageSrc: "/assets/travel/thailand-concept.png",
            imageAlt: "Thailand travel concept",
          },
          {
            title: "City-first selection",
            caption: "The visual browser points to Chiang Mai, not just to Thailand.",
          },
          {
            title: "Selective memory",
            caption: "One of the places that kept a clearer presence after the trip itself.",
          },
        ],
      },
    ],
  },
  {
    slug: "roadtrips",
    title: "Roadtrips",
    items: [
      {
        slug: "england-uk-roadtrip",
        group: "roadtrips",
        navLabel: "England",
        hoverLabel: "England",
        flag: "\u{1F3F4}\u{E0067}\u{E0062}\u{E0065}\u{E006E}\u{E0067}\u{E007F}",
        ...ukRoadtrip,
      },
      {
        slug: "wales-uk-roadtrip",
        group: "roadtrips",
        navLabel: "Wales",
        hoverLabel: "Wales",
        flag: "\u{1F3F4}\u{E0067}\u{E0062}\u{E0077}\u{E006C}\u{E0073}\u{E007F}",
        ...ukRoadtrip,
      },
      {
        slug: "scotland-uk-roadtrip",
        group: "roadtrips",
        navLabel: "Scotland",
        hoverLabel: "Scotland",
        flag: "\u{1F3F4}\u{E0067}\u{E0062}\u{E0073}\u{E0063}\u{E0074}\u{E007F}",
        ...ukRoadtrip,
      },
      {
        slug: "albania-balkan-roadtrip",
        group: "roadtrips",
        navLabel: "Albania",
        hoverLabel: "Albania",
        flag: "🇦🇱",
        ...balkanRoadtrip,
      },
      {
        slug: "bulgaria-balkan-roadtrip",
        group: "roadtrips",
        navLabel: "Bulgaria",
        hoverLabel: "Bulgaria",
        flag: "🇧🇬",
        ...balkanRoadtrip,
      },
      {
        slug: "croatia-balkan-roadtrip",
        group: "roadtrips",
        navLabel: "Croatia",
        hoverLabel: "Croatia",
        flag: "🇭🇷",
        ...balkanRoadtrip,
      },
      {
        slug: "north-macedonia-balkan-roadtrip",
        group: "roadtrips",
        navLabel: "North Macedonia",
        hoverLabel: "North Macedonia",
        flag: "🇲🇰",
        ...balkanRoadtrip,
      },
      {
        slug: "montenegro-balkan-roadtrip",
        group: "roadtrips",
        navLabel: "Montenegro",
        hoverLabel: "Montenegro",
        flag: "🇲🇪",
        ...balkanRoadtrip,
      },
    ],
  },
  {
    slug: "eu-projects",
    title: "EU Projects",
    items: [
      {
        slug: "turkey-eu-projects",
        group: "eu-projects",
        navLabel: "Turkey",
        hoverLabel: "Turkey",
        flag: "🇹🇷",
        title: "Turkey",
        subtitle: "A project stop with stronger local immersion than a normal visit.",
        summary:
          "A work-linked Turkey entry centered on project participation and the people met through it.",
        role: "Work-linked chapter",
        details: [
          "Focused on the project context in Kocaeli rather than on broad tourism.",
          "Useful for separating work-linked travel from regular country visits.",
          "Part of the wider EU Projects chapter rather than a standalone trip page.",
        ],
        snapshot: {
          title: "Outcome",
          text:
            "Turkey belongs here because the experience was shaped as much by the project environment as by the destination itself.",
          proofPoints: ["Kocaeli", "Turkey", "EU Projects"],
        },
        meta: "EU Projects",
        previewSlides: [
          {
            title: "Turkey concept",
            caption: "The Turkey chapter stays connected to project-led travel rather than general tourism.",
            imageSrc: "/assets/travel/turkey-concept.png",
            imageAlt: "Turkey travel concept",
          },
        ],
      },
      {
        slug: "cyprus-eu-projects",
        group: "eu-projects",
        navLabel: "Cyprus",
        hoverLabel: "Cyprus",
        flag: "🇨🇾",
        title: "Cyprus",
        subtitle: "A project-linked chapter with a stronger human and local connection.",
        summary: "",
        role: "Work-linked chapter",
        details: [],
        snapshot: {
          title: "Outcome",
          text:
            "Cyprus fits this chapter because the project gave the country a more grounded and memorable context.",
          proofPoints: ["Polis Chrysochous", "Cyprus", "EU Projects"],
        },
        meta: "EU Projects",
        previewSlides: [
          {
            title: "Cyprus concept",
            caption: "Cyprus remains one of the clearer project-linked stops in the archive.",
            imageSrc: "/assets/travel/cyprus-concept.png",
            imageAlt: "Cyprus travel concept",
          },
        ],
      },
      {
        slug: "bulgaria-eu-projects",
        group: "eu-projects",
        navLabel: "Bulgaria",
        hoverLabel: "Bulgaria",
        flag: "🇧🇬",
        title: "Bulgaria",
        subtitle: "A multi-city project chapter that became far more meaningful than expected.",
        summary: "",
        role: "Work-linked chapter",
        details: [],
        snapshot: {
          title: "Outcome",
          text:
            "Bulgaria became one of the strongest project-linked chapters because it combined multiple cities with a very alive entrepreneurial atmosphere.",
          proofPoints: ["Sofia", "Stara Zagora", "Plovdiv", "Varna"],
        },
        meta: "EU Projects",
        previewSlides: [
          {
            title: "Bulgaria concept",
            caption: "Bulgaria stays represented as a richer multi-city project chapter.",
            imageSrc: "/assets/travel/bulgaria-concept.png",
            imageAlt: "Bulgaria travel concept",
          },
        ],
      },
      {
        slug: "spain-eu-projects",
        group: "eu-projects",
        navLabel: "Spain",
        hoverLabel: "Spain",
        flag: "🇪🇸",
        title: "Spain",
        subtitle: "Projects, exchanges, and learning contexts across different Spanish stops.",
        summary: "",
        role: "Work-linked chapter",
        details: [],
        snapshot: {
          title: "Outcome",
          text:
            "Spain became one of the recurring countries in the EU Projects chapter, not because of one stop, but because several programs happened there.",
          proofPoints: ["Santander", "Pontevedra", "Tenerife"],
        },
        meta: "EU Projects",
        previewSlides: [
          {
            title: "Spain concept",
            caption: "Spain now groups the different project stops under one clearer country entry.",
            imageSrc: "/assets/travel/spain-concept.png",
            imageAlt: "Spain travel concept",
          },
        ],
      },
      {
        slug: "portugal-eu-projects",
        group: "eu-projects",
        navLabel: "Portugal",
        hoverLabel: "Portugal",
        flag: "🇵🇹",
        title: "Portugal",
        subtitle: "Project-based travel inside Portugal, kept separate from the lived-in chapter.",
        summary: "",
        role: "Work-linked chapter",
        details: [],
        snapshot: {
          title: "Outcome",
          text:
            "Portugal also belongs in the EU Projects chapter when the context is program participation rather than home or daily life.",
          proofPoints: ["Figueira da Foz", "Peniche", "Portugal"],
        },
        meta: "EU Projects",
        previewSlides: [
          {
            title: "Portugal concept",
            caption: "Portugal now also carries its own concept visual inside the EU Projects chapter.",
            imageSrc: "/assets/travel/lisbon-concept.png",
            imageAlt: "Portugal travel concept",
          },
        ],
      },
    ],
  },
  {
    slug: "more",
    title: "More",
    items: [
      {
        slug: "italy",
        group: "more",
        navLabel: "Italy",
        hoverLabel: "Italy",
        flag: "🇮🇹",
        title: "Italy",
        subtitle: "A lighter trip entry inside the wider archive.",
        summary:
          "Part of the broader travel footprint, kept simpler here so the section stays selective and easy to browse.",
        role: "Trip entry",
        details: [
          "Presented as part of the lighter More category rather than as a bigger chapter.",
          "Useful for breadth without forcing every destination into a major story block.",
          "Can later be expanded if needed without changing the browsing pattern.",
        ],
        snapshot: {
          title: "Snapshot",
          text:
            "The More category holds regular trips in a cleaner, lighter way so the archive stays curated instead of turning exhaustive.",
          proofPoints: ["Italy", "More", "Trip"],
        },
        meta: "More",
        previewSlides: [
          {
            title: "Italy concept",
            caption: "New travel concept visual added for this trip entry.",
            imageSrc: "/assets/travel/italy-concept.png",
            imageAlt: "Italy travel concept",
          },
          {
            title: "Lighter trip",
            caption: "Kept intentionally simpler than the larger lived or featured chapters.",
          },
          {
            title: "Archive breadth",
            caption: "Part of the wider map without demanding heavier structure.",
          },
          {
            title: "Expandable later",
            caption: "Ready for future detail if you want to promote it into a bigger story.",
          },
        ],
      },
      {
        slug: "malta",
        group: "more",
        navLabel: "Malta",
        hoverLabel: "Malta",
        flag: "🇲🇹",
        title: "Malta",
        subtitle: "A lighter trip entry inside the wider archive.",
        summary:
          "Placed in the More category so the page can stay selective while still reflecting broader travel range.",
        role: "Trip entry",
        details: [
          "A regular trip kept intentionally lighter than the more central chapters.",
          "Useful for range without over-explaining every place in the archive.",
          "Structured to stay compact while still expandable later.",
        ],
        snapshot: {
          title: "Snapshot",
          text:
            "Malta belongs to the lighter More layer of the archive, helping the page show breadth without becoming a country list.",
          proofPoints: ["Malta", "More", "Trip"],
        },
        meta: "More",
        previewSlides: [
          {
            title: "Malta concept",
            caption: "New travel concept visual added for this trip entry.",
            imageSrc: "/assets/travel/malta-concept.png",
            imageAlt: "Malta travel concept",
          },
          {
            title: "Lighter trip",
            caption: "Part of the broader travel picture without carrying a bigger chapter weight.",
          },
          {
            title: "Compact archive",
            caption: "Shown in a simpler format so the page remains clean and selective.",
          },
          {
            title: "Future-ready",
            caption: "Easy to expand later if it deserves a deeper story.",
          },
        ],
      },
      {
        slug: "netherlands",
        group: "more",
        navLabel: "Netherlands",
        hoverLabel: "Netherlands",
        flag: "🇳🇱",
        title: "Netherlands",
        subtitle: "A lighter trip entry inside the wider archive.",
        summary:
          "A regular trip held in the lighter part of the archive so the section stays elegant and scan-friendly.",
        role: "Trip entry",
        details: [
          "Included for breadth, but kept lighter than the more personal or standout groups.",
          "Helps the archive feel complete without becoming overloaded.",
          "Ready for more detail later if needed.",
        ],
        snapshot: {
          title: "Snapshot",
          text:
            "The Netherlands is treated here as part of the broader travel layer, which preserves the hierarchy across the page.",
          proofPoints: ["Netherlands", "More", "Trip"],
        },
        meta: "More",
        previewSlides: [
          {
            title: "Netherlands concept",
            caption: "New travel concept visual added for this trip entry.",
            imageSrc: "/assets/travel/netherlands-concept.png",
            imageAlt: "Netherlands travel concept",
          },
          {
            title: "Archive range",
            caption: "Adds breadth without demanding heavy storytelling.",
          },
          {
            title: "Optional depth",
            caption: "Can later be enriched without changing the browsing logic.",
          },
        ],
      },
      {
        slug: "belgium",
        group: "more",
        navLabel: "Belgium",
        hoverLabel: "Belgium",
        flag: "🇧🇪",
        title: "Belgium",
        subtitle: "A lighter trip entry inside the wider archive.",
        summary:
          "A simpler travel entry kept in the broader More category to preserve the structure of the page.",
        role: "Trip entry",
        details: [
          "Part of the wider archive without needing the weight of a full feature chapter.",
          "Supports breadth while keeping the overall page compact.",
          "Easy to customize further later if you want more detail.",
        ],
        snapshot: {
          title: "Snapshot",
          text:
            "Belgium works best here as a lighter trip entry, keeping the archive organized around different levels of significance.",
          proofPoints: ["Belgium", "More", "Trip"],
        },
        meta: "More",
        previewSlides: [
          {
            title: "Belgium concept",
            caption: "New travel concept visual added for this trip entry.",
            imageSrc: "/assets/travel/belgium-concept.png",
            imageAlt: "Belgium travel concept",
          },
        ],
      },
      {
        slug: "austria",
        group: "more",
        navLabel: "Austria",
        hoverLabel: "Austria",
        flag: "🇦🇹",
        title: "Austria",
        subtitle: "A lighter trip entry inside the wider archive.",
        summary:
          "Part of the regular travel layer, kept intentionally simple so the archive stays curated.",
        role: "Trip entry",
        details: [
          "Included to reflect travel range without turning the page into a master list.",
          "A lighter placement than the more formative or featured chapters.",
          "Ready for later customization if needed.",
        ],
        snapshot: {
          title: "Snapshot",
          text:
            "Austria sits within the broader More set, keeping the section balanced between curation and coverage.",
          proofPoints: ["Austria", "More", "Trip"],
        },
        meta: "More",
        previewSlides: [
          {
            title: "Austria concept",
            caption: "New travel concept visual added for this trip entry.",
            imageSrc: "/assets/travel/austria-concept.png",
            imageAlt: "Austria travel concept",
          },
          {
            title: "Balanced hierarchy",
            caption: "Not every place needs the same narrative weight.",
          },
          {
            title: "Future room",
            caption: "Easy to enrich later if the story deserves it.",
          },
        ],
      },
      {
        slug: "germany",
        group: "more",
        navLabel: "Germany",
        hoverLabel: "Germany",
        flag: "🇩🇪",
        title: "Germany",
        subtitle: "A lighter trip entry inside the wider archive.",
        summary:
          "A regular travel entry kept in the lighter layer so the page stays focused and scan-friendly.",
        role: "Trip entry",
        details: [
          "Useful for showing breadth while preserving the stronger hierarchy of the page.",
          "Kept simpler than featured cities, lived places, or grouped route chapters.",
          "Can later hold more specific notes if needed.",
        ],
        snapshot: {
          title: "Snapshot",
          text:
            "Germany fits the cleaner More layer, helping the section show a wider map without losing structure.",
          proofPoints: ["Germany", "More", "Trip"],
        },
        meta: "More",
        previewSlides: [
          {
            title: "Germany concept",
            caption: "Dresden now appears as the concept visual for this Germany entry.",
            imageSrc: "/assets/travel/germany-concept.png",
            imageAlt: "Germany travel concept",
          },
          {
            title: "Cleaner hierarchy",
            caption: "Placed in the lighter layer to keep the page intentional.",
          },
          {
            title: "Ready for detail",
            caption: "Can be expanded later without redesigning the page.",
          },
        ],
      },
      {
        slug: "morocco",
        group: "more",
        navLabel: "Morocco",
        hoverLabel: "Morocco",
        flag: "🇲🇦",
        title: "Morocco",
        subtitle: "A lighter trip entry inside the wider archive.",
        summary:
          "Included as part of the broader travel range, with a lighter structure than the more defining categories.",
        role: "Trip entry",
        details: [
          "Helps the travel archive reflect breadth across regions.",
          "Presented simply so the page keeps its hierarchy and pace.",
          "A good candidate for future expansion if you want deeper notes later.",
        ],
        snapshot: {
          title: "Snapshot",
          text:
            "Morocco sits in the lighter More layer, which lets the page stay curated while still acknowledging a broader international footprint.",
          proofPoints: ["Morocco", "More", "Trip"],
        },
        meta: "More",
        previewSlides: [
          {
            title: "Morocco concept",
            caption: "New travel concept visual added for this trip entry.",
            imageSrc: "/assets/travel/morocco-concept.png",
            imageAlt: "Morocco travel concept",
          },
          {
            title: "Broader range",
            caption: "Part of the wider map without becoming a heavier chapter.",
          },
          {
            title: "Simple presentation",
            caption: "A cleaner archive choice than turning every place into a feature block.",
          },
          {
            title: "Expandable later",
            caption: "The structure stays flexible for future detail.",
          },
        ],
      },
      {
        slug: "greece",
        group: "more",
        navLabel: "Greece",
        hoverLabel: "Greece",
        flag: "🇬🇷",
        title: "Greece",
        subtitle: "A lighter trip entry inside the wider archive.",
        summary:
          "Part of the broader travel picture, kept intentionally lighter than the lived, featured, and roadtrip chapters.",
        role: "Trip entry",
        details: [
          "Included as part of the wider travel range rather than the grouped roadtrip chapter.",
          "Placed in More so the section hierarchy stays clean and selective.",
          "Ready for later expansion if you want to give it a richer standalone story.",
        ],
        snapshot: {
          title: "Snapshot",
          text:
            "Greece now sits within the lighter More layer, which keeps the archive cleaner and separates it from the Balkan roadtrip story.",
          proofPoints: ["Greece", "More", "Trip"],
        },
        meta: "More",
        previewSlides: [
          {
            title: "Greece concept",
            caption: "New travel concept visual added for this trip entry.",
            imageSrc: "/assets/travel/greece-concept.png",
            imageAlt: "Greece travel concept",
          },
          {
            title: "Lighter trip",
            caption: "Positioned as part of the broader archive rather than the roadtrip route.",
          },
          {
            title: "Cleaner hierarchy",
            caption: "Moved into More to keep the grouped travel stories tighter.",
          },
          {
            title: "Future-ready",
            caption: "Easy to expand later if Greece should become a richer chapter.",
          },
        ],
      },
      {
        slug: "serbia",
        group: "more",
        navLabel: "Serbia",
        hoverLabel: "Serbia",
        flag: "🇷🇸",
        title: "Serbia",
        subtitle: "A lighter trip entry inside the wider archive.",
        summary:
          "Part of the broader travel picture, kept in More rather than grouped inside the roadtrip chapter.",
        role: "Trip entry",
        details: [
          "Presented as its own country page rather than as part of the grouped roadtrip story.",
          "Kept in More so the Balkan route page stays tighter and easier to scan.",
          "Ready for later expansion with more specific notes if needed.",
        ],
        snapshot: {
          title: "Snapshot",
          text:
            "Serbia now sits in More as its own country page, separate from the grouped Balkan roadtrip chapter.",
          proofPoints: ["Serbia", "More", "Trip"],
        },
        meta: "More",
        previewSlides: [
          {
            title: "Serbia concept",
            caption: "New travel concept visual added for this trip entry.",
            imageSrc: "/assets/travel/serbia-concept.png",
            imageAlt: "Serbia travel concept",
          },
        ],
      },
      {
        slug: "united-arab-emirates",
        group: "more",
        navLabel: "United Arab Emirates",
        hoverLabel: "United Arab Emirates",
        flag: "🇦🇪",
        title: "United Arab Emirates",
        subtitle: "A lighter trip entry inside the wider archive.",
        summary:
          "Part of the broader travel picture, kept intentionally light so the page remains elegant and selective.",
        role: "Trip entry",
        details: [
          "Included as a regular trip rather than a major chapter.",
          "Supports breadth without pulling the section into list-like overload.",
          "Ready for richer notes later if needed.",
        ],
        snapshot: {
          title: "Snapshot",
          text:
            "The UAE fits the lighter More layer, which helps the archive stay curated while still showing a wider geographic range.",
          proofPoints: ["United Arab Emirates", "More", "Trip"],
        },
        meta: "More",
        previewSlides: [
          {
            title: "United Arab Emirates concept",
            caption: "A dedicated concept visual now represents this UAE entry.",
            imageSrc: "/assets/travel/united-arab-emirates-concept.png",
            imageAlt: "United Arab Emirates travel concept",
          },
          {
            title: "Selective structure",
            caption: "A cleaner way to keep breadth visible without losing focus.",
          },
          {
            title: "Future-ready",
            caption: "Easy to expand later if this entry needs more context.",
          },
        ],
      },
    ],
  },
];

export const travelEntries = travelGroups.flatMap((group) => group.items);
