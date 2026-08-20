import { ExperienceTimelineContainer } from "@/components/features/about/ui/experience-timeline-container";
import { AboutExperienceHeader } from "@/components/features/about/content/about-experience-header";

export function AboutExperienceSectionView() {
  return (
    <section className="space-y-8">
      <AboutExperienceHeader />
      <ExperienceTimelineContainer />
    </section>
  );
}
