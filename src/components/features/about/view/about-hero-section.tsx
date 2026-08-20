import { AboutHeroCard } from "@/components/features/about/ui/about-hero-card";
import { AboutHeroBanner } from "../ui/about-hero-banner";

export function AboutHeroSectionView() {
  return (
    <section className="space-y-8 pb-10 sm:pb-14">
      <AboutHeroBanner />
      <AboutHeroCard />
    </section>
  );
}
