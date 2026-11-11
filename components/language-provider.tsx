"use client";

import { createContext, useContext, type ReactNode } from "react";
import { translate, type Locale } from "@/lib/i18n";

const LanguageContext = createContext<Locale>("en");
export function LanguageProvider({ locale, children }: { locale: Locale; children: ReactNode }) {
  return <LanguageContext.Provider value={locale}>{children}</LanguageContext.Provider>;
}
export function useLanguage() {
  const locale = useContext(LanguageContext);
  return { locale, t: (text: string) => translate(text, locale) };
}
// A text-only translation boundary works in both server and client page content.
// It adds no DOM element, and leaves numbers, links, and other React elements intact.
export function T({ children }: { children: ReactNode }) {
  const { t } = useLanguage();
  const localize = (node: ReactNode): ReactNode => typeof node === "string"
    ? t(node)
    : Array.isArray(node) ? node.map(localize) : node;
  return <>{localize(children)}</>;
}
