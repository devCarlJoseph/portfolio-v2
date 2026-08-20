import { ExperienceTimelineContainer } from "@/components/features/about/ui/experience-timeline-container";
import { AboutExperienceHeader } from "@/components/features/about/content/about-experience-header";

export function AboutExperienceSectionView() {
  return (
    <section className="space-y-8 py-10 sm:py-14 border-t border-border/50">
      <AboutExperienceHeader />
      <ExperienceTimelineContainer />
    </section>
  );
}
