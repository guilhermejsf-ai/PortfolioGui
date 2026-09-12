import type { Metadata } from "next";
import { Container } from "@/components/container";
import { TravelSelector } from "@/components/travel-selector";
import { travelGroups } from "@/data/travel";

export const metadata: Metadata = {
  title: "Travels",
  alternates: { canonical: "/travel" },
};

export default function TravelPage() {
  return (
    <Container className="pb-20 pt-6 sm:pb-24 sm:pt-8">
      <header className="mb-8">
        <p className="eyebrow">Beyond work</p>
        <h1 className="mt-3 text-4xl tracking-tight">
          Travels &amp; perspectives.
        </h1>
        <p className="mt-3 text-sm text-muted">
          Places I’ve lived, countries I’ve explored, and the stories along the
          way. Scroll the countries to explore.
        </p>
      </header>
      <TravelSelector groups={travelGroups} />
    </Container>
  );
}
