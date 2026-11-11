import translations from "./translations.json";

export const locales = ["en", "pt", "es"] as const;
export type Locale = (typeof locales)[number];
export const localeNames = { en: "English", pt: "Português", es: "Español" };
export function isLocale(value: unknown): value is Locale {
  return locales.includes(value as Locale);
}
const dictionary: Record<string, string[]> = translations;
const templates = Object.entries(dictionary).filter(([key]) => key.includes("{")).map(([key, values]) => {
  const parameters: string[] = [];
  const pattern = key.split(/(\{\w+\})/).map(part => {
    if (/^\{\w+\}$/.test(part)) { parameters.push(part); return "(.+?)"; }
    return part.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }).join("");
  return { pattern: new RegExp(`^${pattern}$`), parameters, values };
});
export function translate(text: string, locale: Locale): string {
  if (locale === "en") return text;
  const key = text.replace(/\s+/g, " ").trim();
  const index = locale === "pt" ? 0 : 1;
  const entry = dictionary[key];
  if (entry) return text.replace(text.trim(), entry[index]);
  for (const { pattern, parameters, values } of templates) {
    const match = key.match(pattern);
    if (match) {
      let value = values[index];
      parameters.forEach((parameter, i) => { value = value.replace(parameter, translate(match[i + 1], locale)); });
      return value;
    }
  }
  return text;
}
