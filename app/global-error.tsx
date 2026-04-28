"use client";

import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html lang="en">
      <body className="min-h-screen bg-surface text-ink antialiased">
        <main className="mx-auto flex min-h-screen w-full max-w-3xl items-center px-6 py-20 sm:px-8">
          <div className="w-full rounded-[32px] border border-line bg-white/90 p-8 shadow-card sm:p-10">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-accent-deep">
              Runtime Error
            </p>
            <h1 className="mt-4 font-display text-4xl tracking-tight text-ink">
              The preview hit a runtime error.
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-8 text-muted">
              Automatic reloads are disabled so the real error stays visible instead of
              sending the page into a refresh loop. Try resetting the route first, then
              refresh manually if you still need a new bundle.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={reset}
                className="rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white transition hover:bg-ink/90"
              >
                Try again
              </button>
              <button
                type="button"
                onClick={() => window.location.reload()}
                className="rounded-full border border-line bg-white/70 px-5 py-3 text-sm font-semibold text-ink transition hover:border-accent/35 hover:bg-white"
              >
                Refresh page
              </button>
            </div>
            <p className="mt-6 text-sm text-muted/80">
              {error.digest ? `Reference: ${error.digest}` : error.message}
            </p>
          </div>
        </main>
      </body>
    </html>
  );
}
