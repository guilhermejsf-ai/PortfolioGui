export type ProjectSection =
  | "Founded / Built"
  | "Built for Companies"
  | "Strategy / Consulting"
  | "Product Experiments";

export type ProjectGroup =
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
  title: "Outcome" | "Snapshot";
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
  year: string;
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
  "Built for Companies",
  "Strategy / Consulting",
  "Product Experiments",
];

export const projectGroupOrder: ProjectGroup[] = [
  "Featured",
  "Co-Founded Ventures",
  "Consultancy",
  "Personal Products",
  "Book",
  "VLOG",
];

export const projects: Project[] = [
  {
    slug: "racefiets013",
    title: "Racefiets013",
    subtitle: "Website rebuild and rebrand work for a cycling business.",
    category: "Brand / Website",
    section: "Built for Companies",
    group: "Featured",
    summary:
      "Helped rebuild and rebrand the digital presence of Racefiets013, improving the store, growth systems, and overall online performance.",
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
      ],
      outcome: {
        title: "Outcome",
        text:
          "Contributed to growth from 12k to 25k sessions YoY and increased online sales from EUR2k to EUR9k. Built automations that saved 25 hours per week for the team, launched an email system from zero to 267 subscribers in 2 months, and supported a 25% increase in Google five-star reviews during my tenure.",
      },
      status: "2025 - Present",
      meta: "Built for Companies",
      buttons: [
        { label: "Read more", href: "/projects/racefiets013" },
        { label: "Visit site", href: "https://racefiets013.com/" },
      ],
    },
    overview: [
      "Racefiets013 is one of the clearest examples of hands-on company work in this portfolio.",
      "The project combined website rebuilding, rebranding, and wider support around how the business showed up digitally.",
    ],
    whatItIs:
      "A company project where the work went beyond a single deliverable and into the broader presentation of the brand online.",
    myRole:
      "I worked there and helped rebuild the website, reshape the brand direction, and support improvements that affected the wider digital presence.",
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
    subtitle: "Co-founded venture with live web and social presence.",
    category: "Venture / Brand / Product",
    section: "Founded / Built",
    group: "Featured",
    summary:
      "Co-founded Nordensa and helped build the company's early operating model across partnerships, hiring, go-to-market execution, and internal systems.",
    role: "Co-founder, Operations and Growth",
    iconBadge: "Co-Founded",
    year: "2022 - 2024",
    tags: ["Venture", "Brand", "Product"],
    featured: true,
    detailCard: {
      role: "Co-founder, Operations and Growth",
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
          "Helped support EUR1.6 million raised across two pre-seed rounds, closed 11 strategic partnerships, contributed to 5 player signings and more than 10 trials arranged, and supported team growth from 2 to 30+ people including 15 hires across multiple functions.",
      },
      status: "2022 - 2024",
      meta: "Founded / Built",
      buttons: [
        { label: "Read more", href: "/projects/nordensa" },
        { label: "Visit site", href: "http://nordensa.com" },
      ],
    },
    overview: [
      "Nordensa represents founder-led building across identity, direction, and public presence.",
      "The project is already live across the website and Instagram, making it a strong real-world foundation for a fuller case study later.",
    ],
    whatItIs:
      "A co-founded venture where the brand, website, and product direction all matter as one connected system.",
    myRole:
      "I co-founded Nordensa and helped shape the company through brand thinking, product direction, and how it presents itself publicly.",
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
      label: "Nordensa concept",
      src: "/assets/projects/nordensa/concept.webp",
      alt: "Nordensa concept visual",
      fit: "cover",
      tone: "neutral",
    },
    cardVisual: {
      type: "image",
      label: "Nordensa concept",
      src: "/assets/projects/nordensa/concept.webp",
      alt: "Nordensa concept visual",
      fit: "cover",
      tone: "neutral",
    },
    previewSlides: [
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
        label: "Nordensa logo",
        src: "/assets/projects/nordensa/icon-logo.png",
        alt: "Nordensa logo",
        fit: "contain",
        tone: "white",
      },
      {
        type: "image",
        label: "Nordensa concept",
        src: "/assets/projects/nordensa/concept.webp",
        alt: "Nordensa concept visual",
        fit: "cover",
        tone: "neutral",
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
    subtitle: "Built the company foundations from the original idea.",
    category: "Company build / Product / Brand",
    section: "Built for Companies",
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
          "Secured 3 EU grant applications totaling EUR350k and helped drive early traction with more than 100 downloads in the first week.",
      },
      status: "2024 - 2025",
      meta: "Built for Companies",
      buttons: [
        { label: "Read more", href: "/projects/umedicu" },
        { label: "Visit site", href: "/projects/umedicu", disabled: true },
      ],
    },
    overview: [
      "Umedicu started from an idea and needed structure, presentation, and execution across multiple touchpoints.",
      "The work belongs in this portfolio as a company-building assignment rather than a narrow one-off design task.",
    ],
    whatItIs:
      "A company build where the core challenge was turning an initial idea into something more concrete across brand and product presence.",
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
    subtitle: "Co-founded product with live social presence and prepared web direction.",
    category: "Venture / App / Brand",
    section: "Founded / Built",
    group: "Co-Founded Ventures",
    summary:
      "Co-built Nexdoo, a live social app designed to help people discover and host house parties and gatherings based on shared interests, vibe, and group compatibility.",
    role: "Co-founder",
    year: "Year to add",
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
      "Nexdoo is a founder-led build where concept, app direction, and brand communication all move together.",
      "The current website is represented honestly through prepared screenshots instead of a fake live page.",
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
    section: "Built for Companies",
    group: "Consultancy",
    summary:
      "Led the rebrand and website build for Safe Travel, turning the business into a clearer and more modern digital presence.",
    role: "Brand and Website Consultant",
    year: "Year to add",
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
          "Delivered a live website and a refreshed brand presence that presented the business more clearly and professionally online.",
      },
      status: "Live",
      meta: "Built for Companies",
      buttons: [
        { label: "Read more", href: "/projects/safe-travel" },
        {
          label: "Visit site",
          href: "https://safetravel-two.vercel.app/index.html#",
        },
      ],
    },
    overview: [
      "Safe Travel sits firmly in the client work side of the portfolio: clear scope, real launch, and visible brand impact.",
      "The work combined a refreshed identity with a modernized site presence.",
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
    subtitle: "Small app project built and shipped by Guilherme.",
    category: "Product Experiment / App",
    section: "Product Experiments",
    group: "Personal Products",
    summary:
      "Built and launched ha.bits, a live habit tracking app designed around a clean interface and a simple daily experience.",
    role: "Personal Project",
    year: "Year to add",
    tags: ["App", "Experiment", "Personal project"],
    featured: true,
    detailCard: {
      role: "Personal Project",
      whatIDid: [
        "Built the app end to end",
        "Structured the product logic and user flow",
        "Developed the interface and overall experience",
        "Turned the concept into a live usable product",
        "Shaped it as a polished personal software project",
      ],
      outcome: {
        title: "Outcome",
        text:
          "Launched the app as a live product, showing full execution from concept to working digital tool.",
      },
      status: "Live",
      meta: "Product Experiment",
      buttons: [
        { label: "Read more", href: "/projects/habits" },
        { label: "Visit site", href: "https://my-ha-bits.vercel.app/today" },
      ],
    },
    overview: [
      "ha.bits shows a lighter, product-experiment side of the portfolio.",
      "It is smaller in scope than the flagship client and venture work, but useful for showing shipped execution.",
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
      label: "ha.bits icon logo",
      src: "/assets/projects/habits/icon-logo.png",
      alt: "ha.bits icon logo",
      fit: "contain",
      tone: "white",
    },
    cardVisual: {
      type: "image",
      label: "ha.bits concept",
      src: "/assets/projects/habits/concept.png",
      alt: "ha.bits concept visual",
      fit: "cover",
      tone: "white",
    },
    archiveVisual: {
      type: "image",
      label: "ha.bits concept",
      src: "/assets/projects/habits/concept.png",
      alt: "ha.bits concept visual",
      fit: "cover",
      tone: "white",
    },
    gallery: [
      {
        type: "image",
        label: "ha.bits icon",
        src: "/assets/projects/habits/icon-logo.png",
        alt: "ha.bits icon",
        fit: "contain",
        tone: "blue",
      },
      {
        type: "image",
        label: "ha.bits logo",
        src: "/assets/projects/habits/logo.png",
        alt: "ha.bits logo",
        fit: "contain",
        tone: "white",
      },
      {
        type: "image",
        label: "ha.bits concept",
        src: "/assets/projects/habits/concept.png",
        alt: "ha.bits concept visual",
        fit: "cover",
        tone: "white",
      },
    ],
  },
  {
    slug: "mumzers",
    title: "Mumzers",
    subtitle: "Strategy case study created on a hired basis.",
    category: "Strategy / Consulting",
    section: "Strategy / Consulting",
    group: "Consultancy",
    summary:
      "Delivered strategic consultancy for Mumzers focused on scaling wholesale outreach without damaging brand perception and improving consistency in direct-to-consumer sales.",
    role: "Strategy and Growth Consultant",
    year: "Year to add",
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
      "Mumzers sits on the strategy side of the portfolio rather than the shipping-a-product side.",
      "It deserves a structured case study later, but version 1 keeps the presentation honest and expandable.",
    ],
    whatItIs:
      "A hired strategic study case focused on thinking, framing, and proposal work.",
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
    subtitle: "Founded project that did not move forward due to investment limits.",
    category: "Venture / Concept",
    section: "Founded / Built",
    group: "Personal Products",
    summary:
      "Built the concept for Pocket Tours, a travel app designed to let people discover places through flexible self-guided audio tours created by locals and independent storytellers.",
    role: "Founder",
    year: "Year to add",
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
    note: "Project did not lift off due to lack of investment.",
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
      "Co-built the concept for ZCharge, an EV charging solution focused on dynamic load balancing and a smarter system architecture for more reliable charging infrastructure.",
    role: "Co-founder",
    year: "Year to add",
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
          "Developed a full concept around two core problems in EV charging: infrastructure load constraints and overburdened smart chargers. The project was shaped into an investor-facing startup with a clear technical positioning, modular product logic, and commercial roadmap.",
      },
      status: "Concept",
      meta: "Founded / Built",
      buttons: [{ label: "Read more", href: "/projects/zcharge" }],
    },
    overview: [
      "ZCharge was built around a stronger technical point of view: dynamic load balancing, clearer system ownership, and simpler infrastructure logic.",
      "It did not progress because investment was missing, but it remains one of the clearest examples of systems-first entrepreneurial thinking in the archive.",
    ],
    whatItIs:
      "An EV charging concept focused on smarter software-led control, dynamic load balancing, and cleaner responsibility between components.",
    myRole:
      "I founded ZCharge and helped shape the concept, the system logic, the product framing, and the overall venture direction.",
    workedOn: [
      "Founder-led concept development",
      "System and product framing",
      "Venture narrative and deck work",
      "Positioning around infrastructure and software",
    ],
    links: [],
    note: "Project did not lift off due to lack of investment.",
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
    subtitle: "Smaller app project kept in the portfolio as a lighter experiment.",
    category: "Product Experiment / App",
    section: "Product Experiments",
    group: "Personal Products",
    summary:
      "Built fi.nance, a personal finance app designed to simplify tracking, planning, and understanding money through a clean digital experience.",
    role: "Personal Project",
    year: "Year to add",
    tags: ["App", "Experiment", "Personal project"],
    featured: false,
    detailCard: {
      role: "Personal Project",
      whatIDid: [
        "Built the app end to end",
        "Structured the product logic and user flow",
        "Developed the interface and overall experience",
        "Turned the concept into a live usable product",
        "Shaped it as a polished personal software project",
      ],
      outcome: {
        title: "Outcome",
        text:
          "Built the product as a working app, showing full execution from concept to live digital tool.",
      },
      status: "Live",
      meta: "Product Experiment",
      buttons: [{ label: "Read more", href: "/projects/finance" }],
    },
    overview: [
      "fi.nance sits in the quieter part of the portfolio: useful to show range, but not over-positioned.",
      "It helps round out the product experiment side without pretending to be a flagship case study.",
    ],
    whatItIs:
      "A smaller personal app build that belongs in the work archive even if it is not one of the main portfolio pillars.",
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
    subtitle: "Football app experiment built as part of the product side of the portfolio.",
    category: "Product Experiment / App",
    section: "Product Experiments",
    group: "Personal Products",
    summary:
      "Built Footy, a football game management app designed to organize players, matches, and participation in a simple and practical way.",
    role: "Personal Project",
    year: "Year to add",
    tags: ["App", "Experiment", "Personal project"],
    featured: false,
    detailCard: {
      role: "Personal Project",
      whatIDid: [
        "Built the app end to end",
        "Structured the product logic and user flow",
        "Developed the interface and overall experience",
        "Turned the concept into a working digital product",
        "Shaped it as a polished personal software project",
      ],
      outcome: {
        title: "Outcome",
        text:
          "Built the product as a working app, showing full execution from idea to usable software.",
      },
      status: "Live",
      meta: "Product Experiment",
      buttons: [{ label: "Read more", href: "/projects/footy" }],
    },
    overview: [
      "Footy expands the app-building side of the portfolio with another direct product experiment.",
      "It belongs in the archive as part of the same self-directed building track as ha.bits and fi.nance.",
    ],
    whatItIs:
      "A football app concept built as a smaller product experiment within the broader portfolio of apps and digital projects.",
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
    subtitle: "Book project published and sold on Amazon.",
    category: "Book / Creative Project",
    section: "Product Experiments",
    group: "Book",
    summary: "Wrote and published a book, extending the portfolio into authored work.",
    role: "Author",
    year: "Year to add",
    tags: ["Book", "Creative", "Published work"],
    featured: false,
    detailCard: {
      type: "Book",
      role: "Author",
      whatIDid: [
        "Wrote the manuscript",
        "Developed the creative direction",
        "Prepared the publication",
        "Shipped the public release",
      ],
      outcome: {
        title: "Outcome",
        text:
          "The project became a real published release, adding a different kind of finished work to the portfolio beyond digital products.",
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
      "Love's Conception adds a different texture to the portfolio: not a company or app, but still a built and shipped piece of work.",
      "It sits naturally in the projects archive without becoming disproportionately featured.",
    ],
    whatItIs:
      "A published book project that extends the portfolio beyond digital products into authored work.",
    myRole:
      "I wrote and published the book, turning it into a real public release rather than a private draft.",
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
    subtitle: "Vlog concept added as a new category on the projects page.",
    category: "VLOG",
    section: "Product Experiments",
    group: "VLOG",
    summary:
      "A vlog-focused concept added to the portfolio as its own category entry.",
    role: "Creator",
    year: "2026",
    tags: ["VLOG", "Content", "Concept"],
    featured: false,
    detailCard: {
      type: "Vlog",
      role: "Creator",
      whatIDid: [
        "Created the concept direction",
        "Defined the visual identity",
        "Added it as a standalone portfolio entry",
      ],
      outcome: {
        title: "Snapshot",
        text:
          "Vlogui is currently presented as a dedicated vlog concept within the projects archive.",
      },
      status: "Concept",
      meta: "VLOG",
      buttons: [{ label: "Read more", href: "/projects/vlogui" }],
    },
    overview: [
      "Vlogui introduces a new vlog category to the projects page.",
      "It sits as a compact concept entry with its own icon in the selector row.",
    ],
    whatItIs:
      "A vlog concept represented as a dedicated portfolio project entry.",
    myRole:
      "I created the concept and positioned it as a new category within the projects archive.",
    workedOn: [
      "Concept direction",
      "Category definition",
      "Visual identity placement",
    ],
    links: [{ label: "Read more", href: "/projects/vlogui" }],
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
