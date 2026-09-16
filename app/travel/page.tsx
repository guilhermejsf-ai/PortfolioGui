import type { Metadata } from "next";
import { Container } from "@/components/container";
import { TravelSelector } from "@/components/travel-selector";
import { travelGroups } from "@/data/travel";

export const metadata: Metadata = {
  title: "My travels",
  alternates: { canonical: "/travel" },
};

export default function TravelPage() {
  return (
    <Container className="pb-20 pt-6 sm:pb-24 sm:pt-8">
      <h1 className="sr-only">My travels</h1>
      <TravelSelector groups={travelGroups} />
    </Container>
  );
}
