import { currentWork } from "./current-work";

export type ProjectSection =
  | "Founded / Built"
  | "Company Roles & Client Work"
  | "Strategy / Consulting"
  | "Product Experiments";

export type ProjectGroup =
  | "Current work"
  | "Featured"
  | "Co-Founded Ventures"
  | "Consultancy"
  | "Personal Products"
  | "Book"
  | "VLOG";

export type ProjectVisual =
  | {
      type: "image";
      label: string;
      src: string;
      alt: string;
      fit?: "contain" | "cover";
      tone?: "white" | "blue" | "neutral" | "warm";
    }
  | {
      type: "placeholder";
      label: string;
      tone?: "white" | "blue" | "neutral" | "warm";
    };

export type ProjectLink = {
  label: string;
  href: string;
  disabled?: boolean;
};

export type ProjectActions = {
  website?: {
    href: string;
    label?: string;
  };
  instagram?: string;
  iosDownload?: string;
  androidDownload?: string;
};

export type ProjectDetailOutcome = {
  title: "Outcome" | "Snapshot" | "Current focus" | "Work so far";
  text: string;
  proofPoints?: string[];
};

export type ProjectDetailCard = {
  type?: string;
  role: string;
  whatIDid: string[];
  outcome: ProjectDetailOutcome;
  status: string;
  meta?: string;
  buttons?: ProjectLink[];
};

export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  section: ProjectSection;
  group: ProjectGroup;
  summary: string;
  role: string;
  iconBadge?: string;
  year?: string;
  tags: string[];
  featured: boolean;
  detailCard: ProjectDetailCard;
  overview: string[];
  whatItIs: string;
  myRole: string;
  workedOn: string[];
  links: ProjectLink[];
  actions?: ProjectActions;
  logoVisual?: ProjectVisual;
  backgroundVisual?: ProjectVisual;
  archiveVisual?: ProjectVisual;
  cardVisual: ProjectVisual;
  previewSlides?: ProjectVisual[];
  gallery: ProjectVisual[];
  note?: string;
};

export const projectSections: ProjectSection[] = [
  "Founded / Built",
  "Company Roles & Client Work",
  "Strategy / Consulting",
  "Product Experiments",
];

export const projectGroupOrder: ProjectGroup[] = [
  "Current work",
  "Featured",
  "Co-Founded Ventures",
  "Consultancy",
  "Personal Products",
  "Book",
  "VLOG",
];

export const projects: Project[] = [
  ...currentWork,
  {
    slug: "racefiets013",
    title: "Racefiets013",
    subtitle: "Website rebuild and rebrand work for a cycling business.",
    category: "Brand / Website",
    section: "Company Roles & Client Work",
    group: "Featured",
    summary:
      "I led growth and digital operations for Racefiets013, rebuilding its Shopify store, refreshing the brand, and improving the processes behind online sales. Instagram gained more than 40,000 followers in six months.",
    role: "Growth and Digital Operations Lead",
    iconBadge: "Growth Lead",
    year: "2025 - Present",
    tags: ["Brand", "Website", "Client work"],
    featured: true,
    detailCard: {
      type: "Website",
      role: "Growth and Digital Operations Lead",
      whatIDid: [
        "Rebuilt and rebranded the Shopify store",
        "Led end-to-end growth execution across brand, ecommerce, and operations",
        "Built automation workflows to streamline processes from sourcing to sale",
        "Set up email capture and newsletter infrastructure",
        "Improved SEO and overall digital presence",
        "Gained more than 40,000 Instagram followers in six months",
      ],
      outcome: {
        title: "Outcome",
        text:
          "Instagram gained more than 40,000 followers in six months. December sessions rose from 12k to 25k year over year, and online sales increased from €2k to €9k. I built automations that saved the team 25 hours a week and grew the email list from zero to 267 subscribers in two months.",
      },
      status: "2025 - Present",
      meta: "Company Roles & Client Work",
      buttons: [
        { label: "Read more", href: "/projects/racefiets013" },
        { label: "Visit site", href: "https://racefiets013.com/" },
      ],
    },
    overview: [
      "Racefiets013 sells second-hand bicycles in the Netherlands.",
      "The project combined website rebuilding, rebranding, and wider support around how the business showed up digitally.",
    ],
    whatItIs:
      "A cycling business whose online store, brand, and operating processes needed to work together.",
    myRole:
      "I led digital growth and operations, rebuilt the Shopify store, and improved the systems behind marketing and sales.",
    workedOn: [
      "Website rebuild",
      "Brand refresh and visual direction",
      "Content and structure improvements",
      "General digital presentation work",
    ],
    links: [{ label: "Visit site", href: "https://racefiets013.com/" }],
    actions: {
      website: {
        href: "https://racefiets013.com/",
        label: "Visit website",
      },
      instagram: "https://www.instagram.com/racefiets013/",
    },
    logoVisual: {
      type: "image",
      label: "Racefiets013 logo",
      src: "/assets/projects/racefiets013/logo.avif",
      alt: "Racefiets013 logo",
      fit: "contain",
      tone: "white",
    },
    backgroundVisual: {
      type: "image",
      label: "Racefiets013 background",
      src: "/assets/projects/racefiets013/background.png",
      alt: "Racefiets013 background artwork",
      fit: "cover",
      tone: "neutral",
    },
    archiveVisual: {
      type: "image",
      label: "Racefiets013 homepage",
      src: "/assets/projects/racefiets013/homepage.png",
      alt: "Racefiets013 homepage preview",
      fit: "cover",
      tone: "neutral",
    },
    cardVisual: {
      type: "image",
      label: "Racefiets013 homepage",
      src: "/assets/projects/racefiets013/homepage.png",
      alt: "Racefiets013 homepage preview",
      fit: "cover",
      tone: "neutral",
    },
    previewSlides: [
      {
        type: "image",
        label: "Racefiets013 team",
        src: "/assets/projects/racefiets013/team.jpg",
        alt: "Guilherme with the Racefiets013 team",
        fit: "cover",
        tone: "neutral",
      },
      {
        type: "image",
        label: "Racefiets013 concept screen 1",
        src: "/assets/projects/racefiets013/slider-01.png",
        alt: "Racefiets013 concept screen",
        fit: "cover",
        tone: "neutral",
      },
      {
        type: "image",
        label: "Racefiets013 concept screen 2",
        src: "/assets/projects/racefiets013/slider-02.png",
        alt: "Racefiets013 concept screen",
        fit: "cover",
        tone: "neutral",
      },
      {
        type: "image",
        label: "Racefiets013 concept screen 3",
        src: "/assets/projects/racefiets013/slider-03.png",
        alt: "Racefiets013 concept screen",
        fit: "cover",
        tone: "neutral",
      },
    ],
    gallery: [
      {
        type: "image",
        label: "Racefiets013 team",
        src: "/assets/projects/racefiets013/team.jpg",
        alt: "Guilherme with the Racefiets013 team",
        fit: "cover",
        tone: "neutral",
      },
      {
        type: "image",
        label: "Racefiets013 logo",
        src: "/assets/projects/racefiets013/logo.avif",
        alt: "Racefiets013 logo",
        fit: "contain",
        tone: "white",
      },
      {
        type: "image",
        label: "Racefiets013 homepage",
        src: "/assets/projects/racefiets013/homepage.png",
        alt: "Racefiets013 homepage preview",
        fit: "cover",
        tone: "neutral",
      },
      {
        type: "placeholder",
        label: "Add rebrand visual for Racefiets013 here",
        tone: "white",
      },
      {
        type: "placeholder",
        label: "Add mobile website screenshot for Racefiets013 here",
        tone: "blue",
      },
    ],
  },
  {
    slug: "nordensa",
    title: "Nordensa",
    subtitle: "Co-founded football venture focused on fans and player opportunities.",
    category: "Venture / Brand / Product",
    section: "Founded / Built",
    group: "Featured",
    summary:
      "Co-founded Nordensa and helped build the company's early operating model across partnerships, hiring, go-to-market execution, and internal systems. I remain a shareholder.",
    role: "Co-founder, Operations and Growth · Current shareholder",
    iconBadge: "Co-Founded",
    year: "2022 - 2024",
    tags: ["Venture", "Brand", "Product"],
    featured: true,
    detailCard: {
      role: "Co-founder, Operations and Growth · Current shareholder",
      whatIDid: [
        "Built early operations across partnerships, hiring, and go-to-market execution",
        "Created pitch materials and contributed to the financial model",
        "Supported investor and partner pitching",
        "Built the company's internal operating system in Notion",
        "Led monthly investor and stakeholder reporting",
      ],
      outcome: {
        title: "Outcome",
        text:
          "Supported the company as it raised €1.6 million across two pre-seed rounds, closed 11 strategic partnerships, contributed to 5 player signings and more than 10 trials arranged, and supported team growth from 2 to 30+ people including 15 hires across multiple functions.",
      },
      status: "2022 - 2024",
      meta: "Founded / Built",
      buttons: [
        { label: "Read more", href: "/projects/nordensa" },
        { label: "Visit site", href: "http://nordensa.com" },
      ],
    },
    overview: [
      "I helped build Nordensa from its early stage across partnerships, hiring, and operations.",
      "The work included investor materials, a Notion operating system, and monthly stakeholder reporting.",
    ],
    whatItIs:
      "A football venture connecting fans with opportunities to support players.",
    myRole:
      "I co-founded Nordensa and helped build its early operations across partnerships, hiring, investor reporting, and internal systems. I remain a shareholder.",
    workedOn: [
      "Founding and concept development",
      "Brand direction",
      "Website presence",
      "Product and public-facing structure",
    ],
    links: [
      { label: "Visit site", href: "http://nordensa.com" },
      {
        label: "Play Store",
        href: "https://play.google.com/store/apps/details?id=com.nordensa.application&pcampaignid=web_share",
      },
      {
        label: "App Store",
        href: "https://apps.apple.com/ro/app/nordensa-fan-powered-football/id1661642894",
      },
      {
        label: "Instagram",
        href: "https://www.instagram.com/nordensafootball/",
      },
    ],
    actions: {
      website: {
        href: "https://nordensa.com/",
        label: "Visit website",
      },
      instagram: "https://www.instagram.com/nordensafootball/",
      iosDownload:
        "https://apps.apple.com/ro/app/nordensa-fan-powered-football/id1661642894",
      androidDownload:
        "https://play.google.com/store/apps/details?id=com.nordensa.application&pcampaignid=web_share",
    },
    logoVisual: {
      type: "image",
      label: "Nordensa logo",
      src: "/assets/projects/nordensa/icon-logo.png",
      alt: "Nordensa logo",
      fit: "contain",
      tone: "white",
    },
    backgroundVisual: {
      type: "image",
      label: "Nordensa background",
      src: "/assets/projects/nordensa/background.png",
      alt: "Nordensa background artwork",
      fit: "cover",
      tone: "blue",
    },
    archiveVisual: {
      type: "image",
      label: "Make Football History",
      src: "/assets/projects/nordensa/make-football-history-hero.png",
      alt: "Nordensa Make Football History campaign artwork",
      fit: "cover",
      tone: "neutral",
    },
    cardVisual: {
      type: "image",
      label: "Make Football History",
      src: "/assets/projects/nordensa/make-football-history-hero.png",
      alt: "Nordensa Make Football History campaign artwork",
      fit: "cover",
      tone: "neutral",
    },
    previewSlides: [
      {
        type: "image",
        label: "Make Football History",
        src: "/assets/projects/nordensa/make-football-history-hero.png",
        alt: "Nordensa Make Football History campaign artwork",
        fit: "cover",
        tone: "neutral",
      },
      {
        type: "image",
        label: "Nordensa mobile screen 1",
        src: "/assets/projects/nordensa/slider-01.png",
        alt: "Nordensa mobile app concept screen",
        fit: "cover",
        tone: "neutral",
      },
      {
        type: "image",
        label: "Nordensa mobile screen 2",
        src: "/assets/projects/nordensa/slider-02.png",
        alt: "Nordensa mobile app concept screen",
        fit: "cover",
        tone: "neutral",
      },
      {
        type: "image",
        label: "Nordensa mobile screen 3",
        src: "/assets/projects/nordensa/slider-03.png",
        alt: "Nordensa mobile app concept screen",
        fit: "cover",
        tone: "neutral",
      },
      {
        type: "image",
        label: "Nordensa mobile screen 4",
        src: "/assets/projects/nordensa/slider-04.png",
        alt: "Nordensa mobile app concept screen",
        fit: "cover",
        tone: "neutral",
      },
    ],
    gallery: [
      {
        type: "image",
        label: "Nordensa concept",
        src: "/assets/projects/nordensa/concept.webp",
        alt: "Nordensa concept visual",
        fit: "cover",
        tone: "neutral",
      },
      {
        type: "image",
        label: "Nordensa logo",
        src: "/assets/projects/nordensa/icon-logo.png",
        alt: "Nordensa logo",
        fit: "contain",
        tone: "white",
      },
      {
        type: "placeholder",
        label: "Add Nordensa app screen here",
        tone: "neutral",
      },
    ],
  },
  {
    slug: "umedicu",
    title: "Umedicu",
    subtitle: "Brand, funding applications, product coordination, and launch.",
    category: "Company build / Product / Brand",
    section: "Company Roles & Client Work",
    group: "Featured",
    summary:
      "Led brand, go-to-market planning, and launch execution for Umedicu, a healthcare app focused on improving access to care and centralizing patient health information.",
    role: "Growth and Operations Lead",
    iconBadge: "Growth & Ops",
    year: "2024 - 2025",
    tags: ["Client work", "Product", "Brand"],
    featured: true,
    detailCard: {
      role: "Growth and Operations Lead",
      whatIDid: [
        "Owned brand, go-to-market planning, and launch execution",
        "Identified, wrote, and secured EU grant applications",
        "Led the outsourced product team across priorities and progress check-ins",
        "Reviewed the end-to-end user journey and helped scope product priorities",
        "Built the brand foundations, positioning, brand kit, and pitch deck",
      ],
      outcome: {
        title: "Outcome",
        text:
          "Prepared and secured three EU grant applications totalling €350k, and helped the app reach more than 100 downloads in its first week.",
      },
      status: "2024 - 2025",
      meta: "Company Roles & Client Work",
      buttons: [
        { label: "Read more", href: "/projects/umedicu" },
        { label: "Visit site", href: "/projects/umedicu", disabled: true },
      ],
    },
    overview: [
      "Umedicu started from an idea and needed structure, presentation, and execution across multiple touchpoints.",
      "I coordinated an outsourced product team while working on brand, funding applications, and launch.",
    ],
    whatItIs:
      "A healthcare app developed from an initial idea into a launched product.",
    myRole:
      "I was hired to help build the company around their idea, contributing across the foundations that support the website, app, and broader presentation.",
    workedOn: [
      "Company-building support",
      "Brand direction and presentation",
      "Website presence",
      "Product and app-facing foundations",
    ],
    links: [
      {
        label: "App Store",
        href: "https://apps.apple.com/pt/app/umedicu/id6738693142",
      },
      {
        label: "Google Play",
        href: "https://play.google.com/store/apps/details?id=digital.load.umedicu&hl=pt_PT",
      },
    ],
    actions: {
      website: {
        href: "https://umedicu.com/",
        label: "Visit website",
      },
      instagram: "https://www.instagram.com/umedicu.pt/",
      iosDownload: "https://apps.apple.com/pt/app/umedicu/id6738693142",
      androidDownload:
        "https://play.google.com/store/apps/details?id=digital.load.umedicu&hl=pt_PT",
    },
    logoVisual: {
      type: "image",
      label: "Umedicu logo",
      src: "/assets/projects/umedicu/icon-1.png",
      alt: "Umedicu logo",
      fit: "contain",
      tone: "white",
    },
    backgroundVisual: {
      type: "image",
      label: "Umedicu background",
      src: "/assets/projects/umedicu/background.png",
      alt: "Umedicu background artwork",
      fit: "cover",
      tone: "white",
    },
    archiveVisual: {
      type: "image",
      label: "Umedicu concept",
      src: "/assets/projects/umedicu/concept.png",
      alt: "Umedicu concept visual",
      fit: "cover",
      tone: "neutral",
    },
    cardVisual: {
      type: "image",
      label: "Umedicu concept",
      src: "/assets/projects/umedicu/concept.png",
      alt: "Umedicu concept visual",
      fit: "cover",
      tone: "neutral",
    },
    previewSlides: [
      {
        type: "image",
        label: "Umedicu concept screen 1",
        src: "/assets/projects/umedicu/slider-01.png",
        alt: "Umedicu concept screen",
        fit: "cover",
        tone: "neutral",
      },
      {
        type: "image",
        label: "Umedicu concept screen 2",
        src: "/assets/projects/umedicu/slider-02.png",
        alt: "Umedicu concept screen",
        fit: "cover",
        tone: "neutral",
      },
      {
        type: "image",
        label: "Umedicu concept screen 3",
        src: "/assets/projects/umedicu/slider-03.png",
        alt: "Umedicu concept screen",
        fit: "cover",
        tone: "neutral",
      },
    ],
    gallery: [
      {
        type: "image",
        label: "Umedicu logo",
        src: "/assets/projects/umedicu/icon-1.png",
        alt: "Umedicu logo",
        fit: "contain",
        tone: "white",
      },
      {
        type: "image",
        label: "Umedicu concept",
        src: "/assets/projects/umedicu/concept.png",
        alt: "Umedicu concept visual",
        fit: "cover",
        tone: "neutral",
      },
      {
        type: "placeholder",
        label: "Add Umedicu app screen here",
        tone: "blue",
      },
    ],
  },
  {
    slug: "nexdoo",
    title: "Nexdoo",
    subtitle: "Co-founded app for discovering and hosting social gatherings.",
    category: "Venture / App / Brand",
    section: "Founded / Built",
    group: "Co-Founded Ventures",
    summary:
      "I co-founded Nexdoo, an app for discovering and hosting social gatherings. I worked on the business plan, financial model, brand, and marketing strategy.",
    role: "Co-founder",
    tags: ["Venture", "App", "Brand"],
    featured: true,
    detailCard: {
      role: "Co-founder",
      whatIDid: [
        "Built the marketing strategy",
        "Developed the branding direction",
        "Managed social media positioning",
        "Structured the business plan",
        "Built the financial plan",
      ],
      outcome: {
        title: "Outcome",
        text:
          "Turned the idea into a live downloadable product for iOS, with a concept built around hosting, discovery, compatibility-based events, and a new social alternative to traditional dating or nightlife apps.",
      },
      status: "Downloadable",
      meta: "Founded / Built",
      buttons: [{ label: "Read more", href: "/projects/nexdoo" }],
    },
    overview: [
      "Nexdoo was built around hosting and discovering social gatherings.",
      "The website design is documented in screenshots; the project panel links to its Instagram presence.",
    ],
    whatItIs:
      "A co-founded company built around a live app and public brand presence, with the website direction already designed and documented.",
    myRole:
      "I co-founded Nexdoo and helped build the brand, the digital direction, and the public-facing system around the product.",
    workedOn: [
      "Co-founding and concept development",
      "Brand and digital direction",
      "Website design preparation",
      "Public-facing product presence",
    ],
    links: [
      {
        label: "Instagram",
        href: "https://www.instagram.com/nexdooparties/",
      },
    ],
    actions: {
      instagram: "https://www.instagram.com/nexdooparties/",
    },
    logoVisual: {
      type: "image",
      label: "Nexdoo logo",
      src: "/assets/projects/nexdoo/newicon.png",
      alt: "Nexdoo logo",
      fit: "contain",
      tone: "white",
    },
    backgroundVisual: {
      type: "image",
      label: "Nexdoo background",
      src: "/assets/projects/nexdoo/background.png",
      alt: "Nexdoo background artwork",
      fit: "cover",
      tone: "neutral",
    },
    archiveVisual: {
      type: "image",
      label: "Nexdoo concept",
      src: "/assets/projects/nexdoo/concept.png",
      alt: "Nexdoo concept visual",
      fit: "cover",
      tone: "neutral",
    },
    cardVisual: {
      type: "image",
      label: "Nexdoo concept",
      src: "/assets/projects/nexdoo/concept.png",
      alt: "Nexdoo concept visual",
      fit: "cover",
      tone: "neutral",
    },
    previewSlides: [
      {
        type: "image",
        label: "Nexdoo concept screen 1",
        src: "/assets/projects/nexdoo/slider-01.png",
        alt: "Nexdoo concept screen",
        fit: "cover",
        tone: "neutral",
      },
      {
        type: "image",
        label: "Nexdoo concept screen 2",
        src: "/assets/projects/nexdoo/slider-02.png",
        alt: "Nexdoo concept screen",
        fit: "cover",
        tone: "neutral",
      },
      {
        type: "image",
        label: "Nexdoo concept screen 3",
        src: "/assets/projects/nexdoo/slider-03.png",
        alt: "Nexdoo concept screen",
        fit: "cover",
        tone: "neutral",
      },
      {
        type: "image",
        label: "Nexdoo concept screen 4",
        src: "/assets/projects/nexdoo/slider-04.png",
        alt: "Nexdoo concept screen",
        fit: "cover",
        tone: "neutral",
      },
    ],
    gallery: [
      {
        type: "image",
        label: "Nexdoo concept",
        src: "/assets/projects/nexdoo/concept.png",
        alt: "Nexdoo concept visual",
        fit: "cover",
        tone: "neutral",
      },
      {
        type: "image",
        label: "Nexdoo site preview",
        src: "/assets/projects/nexdoo/site-1.png",
        alt: "Nexdoo site preview",
        fit: "cover",
        tone: "neutral",
      },
      {
        type: "image",
        label: "Nexdoo site preview detail",
        src: "/assets/projects/nexdoo/site-2.png",
        alt: "Nexdoo site preview detail",
        fit: "cover",
        tone: "neutral",
      },
      {
        type: "image",
        label: "Nexdoo logo",
        src: "/assets/projects/nexdoo/newicon.png",
        alt: "Nexdoo logo",
        fit: "contain",
        tone: "white",
      },
    ],
  },
  {
    slug: "safe-travel",
    title: "Safe Travel",
    subtitle: "New website and rebranding work for a client business.",
    category: "Rebrand / Website",
    section: "Company Roles & Client Work",
    group: "Consultancy",
    summary:
      "I redesigned Safe Travel's brand and built its new website, reorganising the content so visitors can understand the service and find the next step more easily.",
    role: "Brand and Website Consultant",
    tags: ["Client work", "Rebrand", "Website"],
    featured: true,
    detailCard: {
      role: "Brand and Website Consultant",
      whatIDid: [
        "Reworked the brand direction",
        "Refined the visual identity",
        "Built the live website around the updated brand",
        "Structured the site content and presentation",
        "Shaped the overall digital experience",
      ],
      outcome: {
        title: "Outcome",
        text:
          "Delivered a live website with a refreshed identity and clearer service information.",
      },
      status: "Live",
      meta: "Company Roles & Client Work",
      buttons: [
        { label: "Read more", href: "/projects/safe-travel" },
        {
          label: "Visit site",
          href: "https://safetravel-two.vercel.app/index.html#",
        },
      ],
    },
    overview: [
      "Safe Travel hired me to refresh its brand and build a new website.",
      "I reorganised the content and designed the site around the updated identity.",
    ],
    whatItIs:
      "A client website and rebrand project designed to sharpen how the company communicates online.",
    myRole:
      "I was hired to build the new website and rebranding, helping the company present itself with more confidence and clarity.",
    workedOn: [
      "Rebrand direction",
      "Website build",
      "Structure and content presentation",
      "Digital polish",
    ],
    links: [
      { label: "Visit site", href: "https://safetravel-two.vercel.app/index.html#" },
    ],
    actions: {
      website: {
        href: "https://safetravel-two.vercel.app/index.html#",
        label: "Visit website",
      },
    },
    logoVisual: {
      type: "image",
      label: "Safe Travel logo",
      src: "/assets/projects/safe-travel/logo.jpeg",
      alt: "Safe Travel logo",
      fit: "contain",
      tone: "white",
    },
    archiveVisual: {
      type: "image",
      label: "Safe Travel website",
      src: "/assets/projects/safe-travel/site.png",
      alt: "Safe Travel website preview",
      fit: "cover",
      tone: "neutral",
    },
    cardVisual: {
      type: "image",
      label: "Safe Travel website",
      src: "/assets/projects/safe-travel/site.png",
      alt: "Safe Travel website preview",
      fit: "cover",
      tone: "neutral",
    },
    previewSlides: [
      {
        type: "image",
        label: "Safe Travel concept screen 1",
        src: "/assets/projects/safe-travel/slider-01.png",
        alt: "Safe Travel concept screen",
        fit: "cover",
        tone: "neutral",
      },
      {
        type: "image",
        label: "Safe Travel concept screen 2",
        src: "/assets/projects/safe-travel/slider-02.png",
        alt: "Safe Travel concept screen",
        fit: "cover",
        tone: "neutral",
      },
      {
        type: "image",
        label: "Safe Travel concept screen 3",
        src: "/assets/projects/safe-travel/slider-03.png",
        alt: "Safe Travel concept screen",
        fit: "cover",
        tone: "neutral",
      },
      {
        type: "image",
        label: "Safe Travel concept screen 4",
        src: "/assets/projects/safe-travel/slider-04.png",
        alt: "Safe Travel concept screen",
        fit: "cover",
        tone: "neutral",
      },
    ],
    gallery: [
      {
        type: "image",
        label: "Safe Travel logo",
        src: "/assets/projects/safe-travel/logo.jpeg",
        alt: "Safe Travel logo",
        fit: "contain",
        tone: "white",
      },
      {
        type: "image",
        label: "Safe Travel website",
        src: "/assets/projects/safe-travel/site.png",
        alt: "Safe Travel website preview",
        fit: "cover",
        tone: "neutral",
      },
      {
        type: "placeholder",
        label: "Add Safe Travel rebrand visual here",
        tone: "blue",
      },
    ],
  },
  {
    slug: "habits",
    title: "ha.bits",
    subtitle: "Live habit-tracking app.",
    category: "Product Experiment / App",
    section: "Product Experiments",
    group: "Personal Products",
    summary:
      "I designed and built ha.bits, a live app that helps people track habits through a simple daily view.",
    role: "Personal Project",
    tags: ["App", "Experiment", "Personal project"],
    featured: true,
    detailCard: {
      role: "Personal Project",
      whatIDid: [
        "Built the app end to end",
        "Structured the product logic and user flow",
        "Developed the interface and overall experience",
        "Turned the concept into a live usable product",
        "Designed the daily habit-tracking experience",
      ],
      outcome: {
        title: "Outcome",
        text:
          "Launched a working habit-tracking app that people can use online.",
      },
      status: "Live",
      meta: "Product Experiment",
      buttons: [
        { label: "Read more", href: "/projects/habits" },
        { label: "Visit site", href: "https://my-ha-bits.vercel.app/today" },
      ],
    },
    overview: [
      "ha.bits brings daily habit tracking into a simple web app.",
      "I worked on the product concept, interface, and implementation.",
    ],
    whatItIs:
      "A smaller app project built as a direct product experiment, with a live experience already available.",
    myRole:
      "I built ha.bits as a compact product project, handling the concept and execution directly.",
    workedOn: [
      "Product concept",
      "App build",
      "Visual direction",
      "Launch-ready web presence",
    ],
    links: [
      { label: "Open app", href: "https://my-ha-bits.vercel.app/today" },
    ],
    actions: {
      website: {
        href: "https://my-ha-bits.vercel.app/today",
        label: "Open app",
      },
    },
    logoVisual: {
      type: "image",
      label: "ha.bits logo",
      src: "/assets/projects/habits/h-mark.svg",
      alt: "ha.bits logo",
      fit: "contain",
      tone: "white",
    },
    cardVisual: {
      type: "image",
      label: "ha.bits today screen",
      src: "/assets/projects/habits/today-current.png",
      alt: "ha.bits mobile app showing daily habits and progress",
      fit: "cover",
      tone: "white",
    },
    archiveVisual: {
      type: "image",
      label: "ha.bits today screen",
      src: "/assets/projects/habits/today-current.png",
      alt: "ha.bits mobile app showing daily habits and progress",
      fit: "cover",
      tone: "white",
    },
    gallery: [
      {
        type: "image",
        label: "ha.bits habit board",
        src: "/assets/projects/habits/board-current.png",
        alt: "ha.bits habit calendar with daily check-ins",
        fit: "cover",
        tone: "white",
      },
      {
        type: "image",
        label: "ha.bits statistics",
        src: "/assets/projects/habits/stats-current.png",
        alt: "ha.bits statistics showing activity and streaks",
        fit: "cover",
        tone: "white",
      },
    ],
  },
  {
    slug: "mumzers",
    title: "Mumzers",
    subtitle: "Commissioned growth strategy project.",
    category: "Strategy / Consulting",
    section: "Strategy / Consulting",
    group: "Consultancy",
    summary:
      "Mumzers asked me to develop a strategy for growing wholesale outreach while protecting its premium positioning, and for making direct-to-consumer sales more consistent.",
    role: "Strategy and Growth Consultant",
    tags: ["Strategy", "Consulting", "Case study"],
    featured: false,
    detailCard: {
      role: "Strategy and Growth Consultant",
      whatIDid: [
        "Designed a structured wholesale outreach system for premium retailer acquisition",
        "Built a framework for prospect identification, scoring, and segmentation",
        "Defined personalized outreach and follow-up logic",
        "Audited the DTC engine across traffic, conversion, and retention",
        "Proposed a 30 to 60 day experimentation and operating system for more consistent sales",
      ],
      outcome: {
        title: "Outcome",
        text:
          "Delivered a consultancy case covering two main areas: a scalable but premium wholesale outreach system, and a practical DTC growth plan built around data analysis, funnel review, retention flows, weekly dashboards, and structured experimentation.",
      },
      status: "Consultancy",
      meta: "Strategy / Consulting",
      buttons: [{ label: "Read more", href: "/projects/mumzers" }],
    },
    overview: [
      "Mumzers asked for an approach to two challenges: wholesale growth and more consistent direct-to-consumer sales.",
      "I proposed retailer scoring, personalised follow-up, funnel analysis, and a 30 to 60 day testing plan.",
    ],
    whatItIs:
      "A commissioned strategy project covering wholesale outreach and direct-to-consumer growth.",
    myRole:
      "I was hired to develop the strategic case work and shape how the opportunity was framed.",
    workedOn: [
      "Strategic framing",
      "Case study work",
      "Presentation structure",
      "Opportunity articulation",
    ],
    links: [],
    cardVisual: {
      type: "image",
      label: "Mumzers screenshot",
      src: "/assets/projects/mumzers/screenshot.png",
      alt: "Mumzers screenshot",
      fit: "cover",
      tone: "neutral",
    },
    gallery: [
      {
        type: "image",
        label: "Mumzers screenshot",
        src: "/assets/projects/mumzers/screenshot.png",
        alt: "Mumzers screenshot",
        fit: "cover",
        tone: "neutral",
      },
      {
        type: "image",
        label: "Mumzers logo",
        src: "/assets/projects/mumzers/logo.webp",
        alt: "Mumzers logo",
        fit: "contain",
        tone: "warm",
      },
      {
        type: "placeholder",
        label: "Add Mumzers strategy deck preview here",
        tone: "white",
      },
    ],
  },
  {
    slug: "pocket-tours",
    title: "Pocket Tours",
    subtitle: "Self-guided audio tour concept developed before launch.",
    category: "Venture / Concept",
    section: "Founded / Built",
    group: "Personal Products",
    summary:
      "Built the concept for Pocket Tours, a travel app designed to let people discover places through flexible self-guided audio tours created by locals and independent storytellers.",
    role: "Founder",
    tags: ["Venture", "Concept", "Founder"],
    featured: false,
    detailCard: {
      role: "Founder",
      whatIDid: [
        "Built the startup concept and product vision",
        "Designed the business model and monetization structure",
        "Defined the financial strategy and roadmap",
        "Built the go-to-market strategy",
        "Planned the app structure and core user flows",
      ],
      outcome: {
        title: "Outcome",
        text:
          "Developed a full startup concept with clear user segments, business model, competitive positioning, roadmap, and investor-ready pitch materials. The project was positioned around travelers, guides, and sponsors, with a scalable marketplace approach for audio-based city discovery.",
      },
      status: "Concept",
      meta: "Founded / Built",
      buttons: [{ label: "Read more", href: "/projects/pocket-tours" }],
    },
    overview: [
      "Pocket Tours belongs here because not every meaningful build becomes a live business.",
      "It reflects the founder side of the journey honestly, including the constraint that stopped it from moving further.",
    ],
    whatItIs:
      "A founded concept project that explored a real opportunity but did not reach launch because investment was missing.",
    myRole:
      "I founded Pocket Tours and developed the concept before the project stalled due to lack of investment.",
    workedOn: [
      "Founder-led concept development",
      "Brand and product thinking",
      "Presentation materials",
      "Early venture framing",
    ],
    links: [],
    note: "The project stopped before launch because it could not secure the funding it needed.",
    logoVisual: {
      type: "image",
      label: "Pocket Tours logo",
      src: "/assets/projects/pocket-tours/icon-1.png",
      alt: "Pocket Tours logo",
      fit: "contain",
      tone: "white",
    },
    archiveVisual: {
      type: "image",
      label: "Pocket Tours concept screen 1",
      src: "/assets/projects/pocket-tours/concept-01.png",
      alt: "Pocket Tours concept screen showing the app experience",
      fit: "cover",
      tone: "neutral",
    },
    cardVisual: {
      type: "image",
      label: "Pocket Tours concept screen 1",
      src: "/assets/projects/pocket-tours/concept-01.png",
      alt: "Pocket Tours concept screen showing the app experience",
      fit: "cover",
      tone: "neutral",
    },
    previewSlides: [
      {
        type: "image",
        label: "Pocket Tours concept screen 1",
        src: "/assets/projects/pocket-tours/concept-01.png",
        alt: "Pocket Tours concept screen showing the app experience",
        fit: "cover",
        tone: "neutral",
      },
      {
        type: "image",
        label: "Pocket Tours concept screen 2",
        src: "/assets/projects/pocket-tours/concept-02.png",
        alt: "Pocket Tours concept screen showing the tour browsing flow",
        fit: "cover",
        tone: "neutral",
      },
    ],
    gallery: [
      {
        type: "image",
        label: "Pocket Tours logo",
        src: "/assets/projects/pocket-tours/icon-1.png",
        alt: "Pocket Tours logo",
        fit: "contain",
        tone: "white",
      },
      {
        type: "image",
        label: "Pocket Tours concept screen 1",
        src: "/assets/projects/pocket-tours/concept-01.png",
        alt: "Pocket Tours concept screen showing the app experience",
        fit: "cover",
        tone: "neutral",
      },
      {
        type: "image",
        label: "Pocket Tours concept screen 2",
        src: "/assets/projects/pocket-tours/concept-02.png",
        alt: "Pocket Tours concept screen showing the tour browsing flow",
        fit: "cover",
        tone: "blue",
      },
    ],
  },
  {
    slug: "zcharge",
    title: "ZCharge",
    subtitle: "EV charging venture concept built around smarter infrastructure.",
    category: "Venture / System / Product",
    section: "Founded / Built",
    group: "Co-Founded Ventures",
    summary:
      "I co-developed ZCharge, a concept for EV charging infrastructure with dynamic load balancing. I worked on the product vision, business model, roadmap, and investor pitch.",
    role: "Co-founder",
    tags: ["Venture", "System", "Product"],
    featured: false,
    detailCard: {
      role: "Co-founder",
      whatIDid: [
        "Built the startup concept and product vision",
        "Designed the business model and financial strategy",
        "Defined the go-to-market direction",
        "Structured the product roadmap and software-led positioning",
        "Created the pitch and overall strategic narrative",
      ],
      outcome: {
        title: "Outcome",
        text:
          "Developed an investor-ready concept addressing infrastructure load constraints and overloaded smart chargers, with a product roadmap, business model, and technical direction.",
      },
      status: "Concept",
      meta: "Founded / Built",
      buttons: [{ label: "Read more", href: "/projects/zcharge" }],
    },
    overview: [
      "ZCharge was built around a stronger technical point of view: dynamic load balancing, clearer system ownership, and simpler infrastructure logic.",
      "The concept did not progress to launch because it could not secure the funding it needed.",
    ],
    whatItIs:
      "An EV charging concept focused on smarter software-led control, dynamic load balancing, and cleaner responsibility between components.",
    myRole:
      "I co-founded ZCharge and worked on its product vision, system logic, business model, and investor narrative.",
    workedOn: [
      "Founder-led concept development",
      "System and product framing",
      "Venture narrative and deck work",
      "Positioning around infrastructure and software",
    ],
    links: [],
    note: "The project stopped before launch because it could not secure the funding it needed.",
    logoVisual: {
      type: "image",
      label: "ZCharge logo",
      src: "/assets/projects/zcharge/zchargelogo2.png",
      alt: "ZCharge logo",
      fit: "contain",
      tone: "white",
    },
    cardVisual: {
      type: "image",
      label: "ZCharge logo",
      src: "/assets/projects/zcharge/zchargelogo2.png",
      alt: "ZCharge logo",
      fit: "contain",
      tone: "white",
    },
    gallery: [
      {
        type: "image",
        label: "ZCharge logo",
        src: "/assets/projects/zcharge/zchargelogo2.png",
        alt: "ZCharge logo",
        fit: "contain",
        tone: "white",
      },
      {
        type: "placeholder",
        label: "Add ZCharge system diagram or deck slide here",
        tone: "neutral",
      },
      {
        type: "placeholder",
        label: "Add ZCharge product concept visual here",
        tone: "blue",
      },
    ],
  },
  {
    slug: "finance",
    title: "fi.nance",
    subtitle: "Personal finance app for spending and planning.",
    category: "Product Experiment / App",
    section: "Product Experiments",
    group: "Personal Products",
    summary:
      "I built fi.nance to make personal spending and planning easier to understand in one place.",
    role: "Personal Project",
    tags: ["App", "Experiment", "Personal project"],
    featured: false,
    detailCard: {
      role: "Personal Project",
      whatIDid: [
        "Built the app end to end",
        "Structured the product logic and user flow",
        "Developed the interface and overall experience",
        "Turned the concept into a live usable product",
        "Designed the spending and planning experience",
      ],
      outcome: {
        title: "Outcome",
        text:
          "Built a personal finance app for tracking spending and planning ahead.",
      },
      status: "Live",
      meta: "Product Experiment",
      buttons: [{ label: "Read more", href: "/projects/finance" }],
    },
    overview: [
      "fi.nance is a personal finance app focused on everyday tracking and planning.",
      "I designed its core flows and interface as a personal product project.",
    ],
    whatItIs:
      "A personal finance app focused on everyday spending and planning.",
    myRole:
      "I built fi.nance as a smaller-scale product experiment.",
    workedOn: [
      "App build",
      "Product experimentation",
      "Visual direction",
      "Lightweight launch thinking",
    ],
    links: [],
    archiveVisual: {
      type: "image",
      label: "fi.nance concept screen 1",
      src: "/assets/projects/finance/concept-01.png",
      alt: "fi.nance app concept screen showing the interface",
      fit: "cover",
      tone: "neutral",
    },
    cardVisual: {
      type: "image",
      label: "fi.nance concept screen 1",
      src: "/assets/projects/finance/concept-01.png",
      alt: "fi.nance app concept screen showing the interface",
      fit: "cover",
      tone: "neutral",
    },
    previewSlides: [
      {
        type: "image",
        label: "fi.nance concept screen 1",
        src: "/assets/projects/finance/concept-01.png",
        alt: "fi.nance app concept screen showing the interface",
        fit: "cover",
        tone: "neutral",
      },
      {
        type: "image",
        label: "fi.nance concept screen 2",
        src: "/assets/projects/finance/concept-02.png",
        alt: "fi.nance app concept screen showing a finance dashboard",
        fit: "cover",
        tone: "neutral",
      },
    ],
    gallery: [
      {
        type: "image",
        label: "fi.nance logo",
        src: "/assets/projects/finance/logo.png",
        alt: "fi.nance logo",
        fit: "contain",
        tone: "white",
      },
      {
        type: "image",
        label: "fi.nance concept screen 1",
        src: "/assets/projects/finance/concept-01.png",
        alt: "fi.nance app concept screen showing the interface",
        fit: "cover",
        tone: "neutral",
      },
      {
        type: "image",
        label: "fi.nance concept screen 2",
        src: "/assets/projects/finance/concept-02.png",
        alt: "fi.nance app concept screen showing a finance dashboard",
        fit: "cover",
        tone: "blue",
      },
    ],
  },
  {
    slug: "footy",
    title: "Footy",
    subtitle: "Football app for organising games and players.",
    category: "Product Experiment / App",
    section: "Product Experiments",
    group: "Personal Products",
    summary:
      "I built Footy to help organise casual football games, players, and participation.",
    role: "Personal Project",
    tags: ["App", "Experiment", "Personal project"],
    featured: false,
    detailCard: {
      role: "Personal Project",
      whatIDid: [
        "Built the app end to end",
        "Structured the product logic and user flow",
        "Developed the interface and overall experience",
        "Turned the concept into a working digital product",
        "Designed the game and player management experience",
      ],
      outcome: {
        title: "Outcome",
        text:
          "Built an app for organising games, players, and participation.",
      },
      status: "Live",
      meta: "Product Experiment",
      buttons: [{ label: "Read more", href: "/projects/footy" }],
    },
    overview: [
      "Footy brings players, games, and participation into one app.",
      "I shaped the product flow, interface, and features as a personal project.",
    ],
    whatItIs:
      "An app for organising casual football games and players.",
    myRole:
      "I built Footy as a personal app experiment, shaping the product direction and visual presentation directly.",
    workedOn: [
      "App build",
      "Product experimentation",
      "Visual direction",
      "Feature framing",
    ],
    links: [],
    logoVisual: {
      type: "image",
      label: "Footy logo",
      src: "/assets/projects/footy/icon-logo.png",
      alt: "Footy logo",
      fit: "contain",
      tone: "white",
    },
    archiveVisual: {
      type: "image",
      label: "Footy app screen",
      src: "/assets/projects/footy/concept-01.png",
      alt: "Footy app screen",
      fit: "cover",
      tone: "neutral",
    },
    cardVisual: {
      type: "image",
      label: "Footy app screen",
      src: "/assets/projects/footy/concept-01.png",
      alt: "Footy app screen",
      fit: "cover",
      tone: "neutral",
    },
    previewSlides: [
      {
        type: "image",
        label: "Footy concept screen 1",
        src: "/assets/projects/footy/concept-01.png",
        alt: "Footy app screenshot 1",
        fit: "cover",
        tone: "neutral",
      },
      {
        type: "image",
        label: "Footy concept screen 2",
        src: "/assets/projects/footy/concept-02.png",
        alt: "Footy app screenshot 2",
        fit: "cover",
        tone: "neutral",
      },
      {
        type: "image",
        label: "Footy concept screen 3",
        src: "/assets/projects/footy/concept-03.png",
        alt: "Footy app screenshot 3",
        fit: "cover",
        tone: "neutral",
      },
    ],
    gallery: [
      {
        type: "image",
        label: "Footy logo",
        src: "/assets/projects/footy/icon-logo.png",
        alt: "Footy logo",
        fit: "contain",
        tone: "white",
      },
      {
        type: "image",
        label: "Footy app screenshot",
        src: "/assets/projects/footy/concept-02.png",
        alt: "Footy app screenshot",
        fit: "cover",
        tone: "neutral",
      },
      {
        type: "image",
        label: "Footy feature visual",
        src: "/assets/projects/footy/concept-03.png",
        alt: "Footy feature visual",
        fit: "cover",
        tone: "neutral",
      },
    ],
  },
  {
    slug: "loves-conception",
    title: "Love's Conception",
    subtitle: "Book written and published by Guilherme Fernandes.",
    category: "Book / Creative Project",
    section: "Product Experiments",
    group: "Book",
    summary: "I wrote and published Love's Conception, taking it from manuscript to a public release on Amazon.",
    role: "Author",
    tags: ["Book", "Creative", "Published work"],
    featured: false,
    detailCard: {
      type: "Book",
      role: "Author",
      whatIDid: [
        "Wrote the manuscript",
        "Developed the creative direction",
        "Prepared the publication",
        "Published the book",
      ],
      outcome: {
        title: "Outcome",
        text:
          "Published Love's Conception and made it available on Amazon.",
        proofPoints: ["Published", "Available on Amazon"],
      },
      status: "Published",
      meta: "Creative Work",
      buttons: [
        {
          label: "View on Amazon",
          href: "https://www.amazon.com.br/Loves-conception-Guilherme-Fernandes/dp/B0F255BJ2M",
        },
      ],
    },
    overview: [
      "I wrote Love's Conception and prepared it for publication.",
      "The book was published and made available on Amazon.",
    ],
    whatItIs:
      "A book I wrote and published on Amazon.",
    myRole:
      "I wrote the manuscript and managed its publication.",
    workedOn: [
      "Writing and authorship",
      "Creative project development",
      "Publishing",
      "Public release",
    ],
    links: [
      {
        label: "View on Amazon",
        href: "https://www.amazon.com.br/Loves-conception-Guilherme-Fernandes/dp/B0F255BJ2M",
      },
    ],
    actions: {
      website: {
        href: "https://www.amazon.com.br/Loves-conception-Guilherme-Fernandes/dp/B0F255BJ2M",
        label: "View on Amazon",
      },
    },
    logoVisual: {
      type: "image",
      label: "Love's Conception icon logo",
      src: "/assets/projects/loves-conception/newicon.png",
      alt: "Love's Conception icon logo",
      fit: "contain",
      tone: "warm",
    },
    cardVisual: {
      type: "image",
      label: "Love's Conception front cover",
      src: "/assets/projects/loves-conception/front.jpg",
      alt: "Love's Conception front cover",
      fit: "cover",
      tone: "warm",
    },
    gallery: [
      {
        type: "image",
        label: "Love's Conception front cover",
        src: "/assets/projects/loves-conception/front.jpg",
        alt: "Love's Conception front cover",
        fit: "cover",
        tone: "warm",
      },
      {
        type: "image",
        label: "Love's Conception back cover",
        src: "/assets/projects/loves-conception/back.jpg",
        alt: "Love's Conception back cover",
        fit: "cover",
        tone: "warm",
      },
      {
        type: "image",
        label: "Love's Conception icon logo",
        src: "/assets/projects/loves-conception/newicon.png",
        alt: "Love's Conception icon logo",
        fit: "contain",
        tone: "warm",
      },
    ],
  },
  {
    slug: "vlogui",
    title: "Vlogui",
    subtitle: "Personal video and travel project on Instagram Reels.",
    category: "VLOG",
    section: "Product Experiments",
    group: "VLOG",
    summary:
      "Vlogui is my personal travel video project about places, people, and what I notice along the way. Watch the videos on my Instagram Reels.",
    role: "Creator",
    year: "2026",
    tags: ["VLOG", "Content", "Travel"],
    featured: false,
    detailCard: {
      type: "Vlog",
      role: "Creator",
      whatIDid: [
        "Created the concept direction",
        "Defined the visual identity",
        "Explored the travel video format",
      ],
      outcome: {
        title: "Snapshot",
        text:
          "I developed the concept and visual identity, and the videos can be watched on my Instagram Reels.",
      },
      status: "On Instagram",
      meta: "VLOG",
      buttons: [{ label: "Watch reels", href: "https://www.instagram.com/guilhermejsf/reels/" }],
    },
    overview: [
      "Vlogui is a personal video project linked to my travels.",
      "The videos are available on my Instagram Reels.",
    ],
    whatItIs:
      "A personal video project about travel and observation.",
    myRole:
      "I developed the Vlogui concept and its visual direction.",
    workedOn: [
      "Concept direction",
      "Video format",
      "Visual identity",
    ],
    links: [{ label: "Watch reels", href: "https://www.instagram.com/guilhermejsf/reels/" }],
    logoVisual: {
      type: "image",
      label: "Vlogui icon",
      src: "/assets/projects/vlogui-logo.png",
      alt: "Vlogui icon",
      fit: "contain",
      tone: "white",
    },
    archiveVisual: {
      type: "image",
      label: "Vlogui concept preview",
      src: "/assets/projects/vlogui/concept-01.jpg",
      alt: "Vlogui concept preview",
      fit: "cover",
      tone: "neutral",
    },
    cardVisual: {
      type: "image",
      label: "Vlogui concept preview",
      src: "/assets/projects/vlogui/concept-01.jpg",
      alt: "Vlogui concept preview",
      fit: "cover",
      tone: "neutral",
    },
    previewSlides: [
      {
        type: "image",
        label: "Vlogui concept screen 1",
        src: "/assets/projects/vlogui/concept-01.jpg",
        alt: "Vlogui concept screen 1",
        fit: "cover",
        tone: "neutral",
      },
      {
        type: "image",
        label: "Vlogui concept screen 2",
        src: "/assets/projects/vlogui/concept-02.jpg",
        alt: "Vlogui concept screen 2",
        fit: "cover",
        tone: "neutral",
      },
      {
        type: "image",
        label: "Vlogui concept screen 3",
        src: "/assets/projects/vlogui/concept-03.jpg",
        alt: "Vlogui concept screen 3",
        fit: "cover",
        tone: "neutral",
      },
    ],
    gallery: [
      {
        type: "image",
        label: "Vlogui concept screen 1",
        src: "/assets/projects/vlogui/concept-01.jpg",
        alt: "Vlogui concept screen 1",
        fit: "cover",
        tone: "neutral",
      },
      {
        type: "image",
        label: "Vlogui concept screen 2",
        src: "/assets/projects/vlogui/concept-02.jpg",
        alt: "Vlogui concept screen 2",
        fit: "cover",
        tone: "neutral",
      },
      {
        type: "image",
        label: "Vlogui concept screen 3",
        src: "/assets/projects/vlogui/concept-03.jpg",
        alt: "Vlogui concept screen 3",
        fit: "cover",
        tone: "neutral",
      },
      {
        type: "image",
        label: "Vlogui icon",
        src: "/assets/projects/vlogui-logo.png",
        alt: "Vlogui icon",
        fit: "contain",
        tone: "white",
      },
    ],
  },
];

export const featuredProjects = projects.filter((project) => project.featured);

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

function isSameVisual(a?: ProjectVisual, b?: ProjectVisual) {
  if (!a || !b || a.type !== b.type) return false;

  if (a.type === "image" && b.type === "image") {
    return a.src === b.src;
  }

  return a.label === b.label;
}

export function getProjectLogoVisual(project: Project) {
  if (project.logoVisual) return project.logoVisual;

  const visuals = [project.cardVisual, ...project.gallery];

  return (
    visuals.find((visual) => visual.type === "image" && visual.fit === "contain") ??
    project.cardVisual
  );
}

export function getProjectDedicatedLogoVisual(project: Project) {
  if (project.logoVisual) return project.logoVisual;

  const visuals = [project.cardVisual, ...project.gallery];

  return visuals.find(
    (visual) => visual.type === "image" && visual.fit === "contain",
  );
}

export function getProjectArchiveVisual(project: Project) {
  if (project.archiveVisual) return project.archiveVisual;

  const logoVisual = getProjectLogoVisual(project);
  const visuals = [project.cardVisual, ...project.gallery];

  return (
    visuals.find(
      (visual) =>
        !isSameVisual(visual, logoVisual) &&
        ((visual.type === "image" && visual.fit === "cover") ||
          visual.type === "placeholder"),
    ) ??
    visuals.find((visual) => !isSameVisual(visual, logoVisual)) ??
    project.cardVisual
  );
}

export function getProjectPreviewSlides(project: Project) {
  const slides: ProjectVisual[] = [];
  const logoVisual = getProjectLogoVisual(project);
  const fallbackVisual = getProjectArchiveVisual(project);
  const previewVisuals =
    project.previewSlides?.length
      ? project.previewSlides
      : [
          fallbackVisual,
          project.cardVisual,
          ...project.gallery,
          project.backgroundVisual,
        ];

  const pushUnique = (visual?: ProjectVisual) => {
    if (!visual) return;
    if (slides.some((slide) => isSameVisual(slide, visual))) return;
    slides.push(visual);
  };

  previewVisuals.forEach((visual) => {
    if (!visual || isSameVisual(visual, logoVisual)) return;

    if (visual.type === "placeholder") return;

    if (visual.type === "image" && visual.fit === "contain") return;

    pushUnique(visual);
  });

  if (!slides.length) {
    pushUnique(fallbackVisual);
  }

  return slides;
}

export function getProjectBackgroundVisual(project: Project) {
  return project.backgroundVisual ?? getProjectArchiveVisual(project);
}
