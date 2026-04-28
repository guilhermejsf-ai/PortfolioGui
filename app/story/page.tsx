import { Container } from "@/components/container";
import { StoryGate } from "@/components/story-gate";
import { storyTimeline } from "@/data/site";

const roadmapSteps = [
  {
    year: "Phase 01",
    title: "Curiosity turned into action",
    text:
      "The first chapter starts with experimenting, testing ideas, and learning by making things real instead of waiting for perfect conditions.",
  },
  {
    year: "Phase 02",
    title: "Founder energy",
    text:
      "Ventures, concepts, and collaborations created a period of intense building where identity, product, and momentum all had to grow together.",
  },
  {
    year: "Phase 03",
    title: "Different cities, wider perspective",
    text:
      "Travel, new environments, and exposure to different people added range to the way ambition, design, and opportunity started to connect.",
  },
  {
    year: "Phase 04",
    title: "Clarity, taste, and direction",
    text:
      "The roadmap keeps moving, but the pattern is clearer now: build with intent, present with care, and keep evolving through execution.",
  },
];

export default function StoryPage() {
  return (
    <Container className="pb-20 pt-6 sm:pb-24 sm:pt-8">
      <StoryGate>
        <section className="relative overflow-hidden rounded-[36px] border border-line/70 bg-[linear-gradient(135deg,rgba(255,255,255,0.9),rgba(221,231,242,0.78))] px-6 py-10 shadow-[0_24px_70px_rgba(61,95,131,0.12)] sm:px-8 lg:px-12 lg:py-14">
          <div className="absolute inset-x-0 top-0 h-48 bg-[radial-gradient(circle_at_top,rgba(111,143,179,0.2),transparent_70%)]" />

          <div className="relative max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-accent-deep">
              My Story
            </p>
            <h1 className="mt-4 font-display text-5xl tracking-tight text-ink sm:text-6xl">
              A roadmap of the life behind the work.
            </h1>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-muted sm:text-base">
              This page is designed as a personal roadmap: key turns, building
              phases, and the experiences that shaped how ideas became action.
            </p>
          </div>

          <div className="relative mt-10 grid gap-5 lg:grid-cols-2">
            {roadmapSteps.map((step, index) => (
              <article
                key={step.title}
                className="rounded-[28px] border border-white/70 bg-white/72 p-6 shadow-[0_12px_35px_rgba(17,24,39,0.08)]"
              >
                <div className="flex items-center justify-between gap-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent-deep">
                    {step.year}
                  </p>
                  <div className="h-px flex-1 bg-line" />
                  <p className="text-xs uppercase tracking-[0.18em] text-muted">
                    Stop {index + 1}
                  </p>
                </div>
                <h2 className="mt-5 font-display text-3xl tracking-tight text-ink">
                  {step.title}
                </h2>
                <p className="mt-4 text-sm leading-7 text-muted">{step.text}</p>
              </article>
            ))}
          </div>

          <div className="relative mt-10 rounded-[30px] border border-line/70 bg-panel/75 p-6 sm:p-8">
            <div className="flex items-center gap-4">
              <div className="h-3 w-3 rounded-full bg-accent" />
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent-deep">
                Life roadmap preview
              </p>
            </div>

            <div className="mt-6 space-y-5">
              {storyTimeline.map((item, index) => (
                <div key={item.phase} className="flex gap-4 sm:gap-6">
                  <div className="flex w-16 shrink-0 flex-col items-center">
                    <div className="h-3 w-3 rounded-full bg-accent" />
                    {index < storyTimeline.length - 1 ? (
                      <div className="mt-2 h-full w-px bg-line" />
                    ) : null}
                  </div>
                  <div className="pb-3">
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent-deep">
                      {item.phase}
                    </p>
                    <p className="mt-2 max-w-2xl text-sm leading-7 text-muted">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </StoryGate>
    </Container>
  );
}
