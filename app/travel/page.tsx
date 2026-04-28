import { Container } from "@/components/container";
import { TravelSelector } from "@/components/travel-selector";
import { travelGroups } from "@/data/travel";

export default function TravelPage() {
  return (
    <Container className="pb-20 pt-6 sm:pb-24 sm:pt-8">
      <TravelSelector groups={travelGroups} />
    </Container>
  );
}
