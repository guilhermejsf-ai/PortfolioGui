import { cookies } from "next/headers";
import { isLocale } from ".";

export async function getLocale() {
  const value = (await cookies()).get("portfolio-language")?.value;
  return isLocale(value) ? value : "en";
}
