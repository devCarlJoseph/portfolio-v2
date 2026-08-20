import { AboutEducationHeader } from "@/components/features/about/content/about-education-header";
import { AboutEducationDegreeCard } from "@/components/features/about/ui/about-education-degree-card";
import { AboutEducationLearningCard } from "@/components/features/about/ui/about-education-learning-card";

export function AboutEducationSectionView() {
  return (
    <section className="space-y-8 py-10 sm:py-14 border-t border-border/50">
      <AboutEducationHeader />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <AboutEducationDegreeCard />
        <AboutEducationLearningCard />
      </div>
    </section>
  );
}

export default AboutEducationSectionView;
