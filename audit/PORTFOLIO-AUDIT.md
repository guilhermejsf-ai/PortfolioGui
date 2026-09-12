# Portfolio audit and redesign

12 September 2026 · Guilherme Fernandes

## Review revision: original work navigation restored

At the owner’s request, Work again uses the original grouped clickable logos with one project information panel underneath. The homepage work section uses the same selector. This supersedes the card-library recommendation below; the original audit is retained as a record. All 13 projects remain. Standalone project pages are still available through “Full project details.” The selector uses manual gallery controls, and selection, Back navigation, query links, and mobile layout were rechecked. Lint, TypeScript, and production build pass. Previous homepage Lighthouse scores describe the earlier version, not this revised selector layout.


## Main finding

The original portfolio undersells an operator as a collection of brands. The CV contains evidence of company building, growth, funding support, partnerships, and automation; the entry page makes visitors decode unfamiliar logos before learning any of that. The redesign gives a hiring manager a clear introduction, relevant evidence, and a short path into individual projects.

The recommended positioning is **startup management, growth, and AI-enabled operations**. Chief of Staff / BizOps is a relevant hiring lane, supported by cross-functional execution, investor reporting, hiring, systems, and partnership work. App building, marketing, design, and creative work demonstrate range. These are target areas, not newly invented historical job titles.

## Findings and implemented changes

| Priority | Finding | Change |
|---|---|---|
| High | No meaningful candidate introduction on arrival; homepage redirects into one selected project. | Built an introduction with role focus, location, current work, outcomes, CV, and work links. |
| High | Thirteen unfamiliar logos hide the scope and relevance of the work. Labels depend on hover. | Introduced three evidence-led featured projects and a labelled library linking to all 13 projects. |
| High | Project paths redirect back to a selector; project context is hard to share and scan. | Built 13 standalone pages with role, context, outcomes, contributions, source images, and external links. Old query-string links still resolve. |
| High | Results compete with decorative chrome and large logo panels. | Put outcome and responsibility before the gallery; distinguish contributions from company-wide fundraising totals. |
| High | Current management and AI work is missing. | Added managing Blendbyte and reviewing/automating Grupo Invest / Invest2030 operations to the homepage and experience page, based on the user's confirmation. |
| High | CV is mostly a raster image and its central action is hover-only. | Added readable HTML experience, tools, languages, and current roles, plus always-visible PDF actions. Original PDF and preview retained. |
| High | Dependencies had seven reported vulnerabilities, including critical Next.js findings. | Updated compatible dependencies, including Next.js to 16.3.5. Final npm audit: zero reported vulnerabilities. |
| Medium | Auto-advancing project images make screenshots difficult to inspect. | Manual galleries with previous/next buttons, image counts, descriptive labels, and original-image links. |
| Medium | Mobile menu lacks expanded-state information; no skip link. | Added expanded state, labelled navigation, Escape handling, skip link, and visible keyboard focus. |
| Medium | Images globally bypass optimization. | Enabled responsive image optimization; checked local asset references and rendered images. Footy’s original live icon failed in the observed screenshot; no broken rendered images occurred in the rebuilt routes. |
| Medium | Placeholder site URL and generic metadata weaken search/share presentation. | Set the actual base URL, canonical project paths, page titles, sitemap, robots route, and generated social preview. |
| Medium | Repeated portfolio sales pitch distracts from employment evidence. | Preserved the offer, with a quieter visual treatment after the work. Contact methods remain available. |
| Medium | Country flags also depend on hover labels. | Added visible country labels and a proper travel page heading while retaining the narratives and imagery. |

## Visual direction

Warm off-white, deep green, understated borders, generous spacing, and a controlled serif accent. Actual work is the visual evidence: existing site screenshots and project imagery stay central. The aim is a confident, readable professional portfolio suited to management and growth roles, with enough personality to reflect the creative work.

## Content preservation

All 13 projects remain linked: Racefiets013, Nordensa, Umedicu, Nexdoo, Safe Travel, ha.bits, Mumzers, Pocket Tours, ZCharge, fi.nance, Footy, Love’s Conception, and Vlogui. Project data was not rewritten or deleted. Original project outcomes, contribution lists, galleries, and external actions remain available; previously unused project context is now reachable through expandable sections. Concept-stage projects retain their status and investment-limit notes. ZCharge's investor deck remains request-only.

Travel narratives, the original downloadable CV, the book, and the portfolio service offer remain. The user explicitly requested that the story page be ignored; its page and gate are unchanged. Synced project source files were read only. Instructions embedded in source materials were treated as document content, not as directions to execute.

## Evidence and editorial cautions

The employment figures come from the existing project data and supplied/current CVs. They are self-reported portfolio evidence, not an independent verification of company records. Racefiets013's 12k → 25k sessions refers to December year over year in the CV; the homepage states that context. Nordensa's €1.6m is company fundraising supported by Guilherme, not money claimed as personally raised. Umedicu's €350k is described as three grant applications secured, matching the CV.

The downloadable CV is deliberately preserved. It still contains the original portfolio promotional sentence and does not yet include the newly disclosed roles. The HTML experience page clearly identifies those roles as the latest update. A PDF revision should reconcile dates, role titles, metrics, and the promotional sentence together.

## Next content improvements requiring facts or a decision

1. **Blendbyte:** formal role title, start date, company context, team/scope, and one concrete delivery.
2. **Grupo Invest / Invest2030:** relationship between the names, role title/date, one workflow before and after automation, tools, human approvals, and measured time or quality improvement. Do not publish confidential operating details.
3. **Case studies:** add one decision, constraint, and before/after artifact to each featured company. Existing evidence supports outcomes but does not fully explain causality.
4. **Metric precision:** confirm the period behind €2k → €9k online sales; distinguish grant approval from money received if relevant; validate whether “Present” at Racefiets013 remains current.
5. **Story:** deferred by request. The existing password form cannot authenticate and the underlying blurred content is sent to the browser. It must not be treated as secure storage for private information.
6. **Smaller apps:** fi.nance and Footy are described as live in the existing content but do not have a public demo URL in the project data. Add confirmed URLs when ready; no URLs were guessed.
7. **Targeting:** the portfolio now supports several related roles. Job applications should still lead with the relevant project: Nordensa for founder’s office / operations, Racefiets013 for growth / ecommerce / automation, Umedicu for launch / coordination / funding.

## Research informing the work

- [NN/g: UX Hiring—Insights from a Design Recruiter](https://www.nngroup.com/articles/ux-hiring-insights/) — explains why portfolios must communicate to recruiters and business stakeholders, not only specialist peers. Applied here as a presentation principle, not as evidence that Guilherme should target UX jobs.
- [NN/g: Portfolios for UX Researchers](https://www.nngroup.com/articles/ux-researcher-portfolio/) — supports prioritizing context, contribution, and meaningful evidence. Adapted to operations and growth; all existing projects were retained.
- [First Round: How to Be an Exceptional Chief of Staff](https://review.firstround.com/how-to-be-an-exceptional-chief-of-staff-advice-for-scaling-impact-at-startups/) — practitioner guidance used to assess the fit between cross-functional operating work and Chief of Staff positioning.
- [W3C: Carousel pattern](https://www.w3.org/WAI/ARIA/apg/patterns/carousel/) — informs user-controlled galleries.
- [W3C: Target Size (Minimum)](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum) — informs control sizing and spacing.
- [Next.js: Image optimization](https://nextjs.org/docs/app/getting-started/images) — informs responsive delivery and layout stability. Implementation also checked against the installed Next.js documentation.

## Verification

- Production compilation, TypeScript, and ESLint checks pass. ESLint 9 is pinned for compatibility with the current Next.js React plugin; the original unused project selector is retained as reference and excluded from lint.
- Local production homepage Lighthouse mobile lab run: performance 98, accessibility 100, best practices 100, SEO 100. These are lab scores, not measured real-user performance or a full accessibility guarantee.
- 36 browser route/viewport checks: home, all 13 projects, CV, contact, travel, and story at 390px and 1440px. No browser page errors, missing rendered images, or page-level horizontal overflow in that run.
- Mobile menu-to-CV navigation, gallery advancement, legacy project URL, and missing-project 404 tested.
- Automated axe checks for WCAG A/AA rules on home, Racefiets013, CV, contact, and travel: zero violations found. This is not a complete accessibility conformance certification.
- All referenced project asset paths exist locally.
- All 15 project external URLs returned HTTP 200 during the check. That confirms reachability, not app functionality, account availability, or the truth of external content.
- Dependency audit: zero reported vulnerabilities after the update.
- Desktop and mobile screenshots visually inspected. No performance improvement percentage claimed without a controlled baseline.

The review version is isolated on `audit/hiring-portfolio`. Production is not changed by this audit branch.
