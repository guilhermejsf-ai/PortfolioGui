import { getLocale } from "@/lib/i18n/server";
import { translate } from "@/lib/i18n";

import { T } from "@/components/language-provider";
import type { Metadata } from "next";
import { Container } from "@/components/container";
import { TravelSelector } from "@/components/travel-selector";
import { travelGroups } from "@/data/travel";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  return {
    title: translate("My travels", locale),
    alternates: { canonical: "/travel" },
  };
}

export default function TravelPage() {
  return (
    <Container className="pb-20 pt-6 sm:pb-24 sm:pt-8">
      <h1 className="sr-only"><T>{"My travels"}</T></h1>
      <TravelSelector groups={travelGroups} />
    </Container>
  );
}
