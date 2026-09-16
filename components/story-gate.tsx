import Link from "next/link";

type StoryGateProps = {
  children: React.ReactNode;
};

export function StoryGate({ children }: StoryGateProps) {
  return (
    <div className="relative">
      <div
        aria-hidden="true"
        className="pointer-events-none select-none blur-[4px] saturate-[0.9]"
      >
        {children}
      </div>

      <div className="absolute inset-0 flex items-start justify-center px-4 pt-8 sm:pt-12">
        <div className="w-full max-w-md rounded-[32px] border border-white/70 bg-panel p-7 shadow-[0_30px_80px_rgba(17,24,39,0.18)] backdrop-blur-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-accent-deep">
            Private page
          </p>
          <h2 className="mt-3 font-display text-3xl tracking-tight text-ink">
            My story is private for now.
          </h2>
          <p className="mt-3 text-sm leading-7 text-muted">
            There’s more behind the work than I’ve put online. If you’d like to
            know more about my path, get in touch.
          </p>

          <Link
            href="/contact"
            className="mt-6 inline-flex rounded-2xl bg-ink px-4 py-3 text-sm font-medium text-white transition hover:opacity-90"
          >
            Get in touch
          </Link>
        </div>
      </div>
    </div>
  );
}
