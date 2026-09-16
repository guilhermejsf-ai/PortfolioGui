// Highlights restate the existing project record; they do not add new claims.
export const projectHighlights: Record<
  string,
  { value: string; label: string }[]
> = {
  nordensa: [
    { value: "€1.6m", label: "Raised across two rounds I supported" },
    { value: "11", label: "Strategic partnerships closed" },
    { value: "2 → 30+", label: "Team growth I supported" },
  ],
  racefiets013: [
    { value: "12k → 25k", label: "December sessions, year over year" },
    { value: "40k+", label: "Instagram followers gained in 6 months" },
    { value: "25 hours", label: "Saved per week through automation" },
    { value: "267", label: "Email subscribers from zero in 2 months" },
  ],
  umedicu: [
    { value: "€350k", label: "Across 3 secured EU grant applications" },
    { value: "100+", label: "Downloads in the first week" },
  ],
};

export const projectApproaches: Record<
  string,
  { focus: string; approach: string }
> = {
  nordensa: {
    focus:
      "Building an early company across partnerships, hiring, fundraising support, and go-to-market execution.",
    approach:
      "Combined external work on pitches and partnerships with an internal Notion operating system and monthly reporting. The work covered both company growth and the systems supporting it.",
  },
  racefiets013: {
    focus:
      "Improving a cycling business across its online store, brand, growth activity, and day-to-day operations.",
    approach:
      "Connected the Shopify rebuild and brand refresh with SEO, email infrastructure, and automation from sourcing to sale. The work extended across the customer journey and the team's operational processes.",
  },
  umedicu: {
    focus:
      "Taking an early product through brand development, funding applications, product priorities, and launch.",
    approach:
      "Worked across positioning and launch execution while coordinating the outsourced product team and reviewing the user journey. EU grant applications formed another part of the company-building work.",
  },
};
