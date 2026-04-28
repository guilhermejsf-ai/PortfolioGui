"use client";

import { FormEvent, useState } from "react";

type StoryGateProps = {
  children: React.ReactNode;
};

export function StoryGate({ children }: StoryGateProps) {
  const [password, setPassword] = useState("");
  const [showHint, setShowHint] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setShowHint(true);
  }

  return (
    <div className="relative">
      <div
        aria-hidden="true"
        className="pointer-events-none select-none blur-[4px] saturate-[0.9]"
      >
        {children}
      </div>

      <div className="absolute inset-0 flex items-start justify-center px-4 pt-8 sm:pt-12">
        <div className="w-full max-w-md rounded-[32px] border border-white/70 bg-white/90 p-7 shadow-[0_30px_80px_rgba(17,24,39,0.18)] backdrop-blur-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-accent-deep">
            Private page
          </p>
          <h2 className="mt-3 font-display text-3xl tracking-tight text-ink">
            Enter password
          </h2>
          <p className="mt-3 text-sm leading-7 text-muted">
            contact me to know more
          </p>

          <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
            <label className="block">
              <span className="sr-only">Password</span>
              <input
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder="Password"
                className="w-full rounded-2xl border border-line bg-surface/90 px-4 py-3 text-sm text-ink outline-none transition placeholder:text-muted focus:border-accent"
              />
            </label>

            <button
              type="submit"
              className="w-full rounded-2xl bg-ink px-4 py-3 text-sm font-medium text-white transition hover:opacity-90"
            >
              Enter
            </button>
          </form>

          {showHint ? (
            <p className="mt-4 text-sm leading-6 text-accent-deep">
              This story stays private for now. Contact me to know more.
            </p>
          ) : null}
        </div>
      </div>
    </div>
  );
}
