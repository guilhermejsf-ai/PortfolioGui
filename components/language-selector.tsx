"use client";

import { useRouter } from "next/navigation";
import { useEffect, useId, useRef, useState, useTransition } from "react";
import { locales, localeNames, type Locale } from "@/lib/i18n";
import { useLanguage } from "./language-provider";

const flags: Record<Locale, string> = { en: "🇬🇧", pt: "🇵🇹", es: "🇪🇸" };

function saveLanguage(next: Locale) {
document.cookie = `portfolio-language=${next}; Path=/; Max-Age=31536000; SameSite=Lax${location.protocol === "https:" ? "; Secure" : ""}`;
}

export function LanguageSelector() {
  const { locale, t } = useLanguage();
  const router = useRouter();
  const [pending, startTransition] = useTransition();
  const [open, setOpen] = useState(false);
  const container = useRef<HTMLDivElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const optionsId = useId();

  useEffect(() => {
    if (!open) return;
    const dismiss = (event: PointerEvent) => {
      if (!container.current?.contains(event.target as Node)) setOpen(false);
    };
    document.addEventListener("pointerdown", dismiss);
    return () => document.removeEventListener("pointerdown", dismiss);
  }, [open]);

  const choose = (next: Locale) => {
    setOpen(false);
    trigger.current?.focus();
    if (next === locale) return;
    saveLanguage(next);
    startTransition(() => router.refresh());
  };

  return (
    <div ref={container} className="language-selector" aria-busy={pending}
      onBlur={event => {
        if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false);
      }}
      onKeyDown={event => {
        if (event.key === "Escape" && open) {
          event.preventDefault();
          setOpen(false);
          trigger.current?.focus();
        }
      }}>
      <button ref={trigger} type="button" className="language-trigger header-pill"
        disabled={pending} aria-label={`${t("Choose language")}: ${localeNames[locale]}`}
        title={localeNames[locale]} aria-expanded={open} aria-controls={optionsId}
        onClick={() => setOpen(value => !value)}>
        <span className="language-flag" aria-hidden="true">{flags[locale]}</span>
        <svg className="language-chevron" width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
          <path d="m3 4.5 3 3 3-3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      {open && (
        <div id={optionsId} className="language-options" role="group" aria-label={t("Choose language")}>
          {locales.map(value => (
            <button key={value} type="button" className="language-option" lang={value}
              aria-label={localeNames[value]} title={localeNames[value]} aria-pressed={locale === value}
              autoFocus={locale === value} onClick={() => choose(value)}>
              <span className="language-flag" aria-hidden="true">{flags[value]}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
