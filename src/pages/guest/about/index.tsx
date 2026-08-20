import { AboutHeroSectionView } from "@/components/features/about/view/about-hero-section";
import { AboutExperienceSectionView } from "@/components/features/about/view/about-experience-section";
import { AboutTechStackSectionView } from "@/components/features/about/view/about-tech-stack-section";
import { AboutEducationSectionView } from "@/components/features/about/view/about-education-section";
import { AboutCtaSectionView } from "@/components/features/about/view/about-cta-section";

export default function AboutPage() {
  return (
    <>
      <AboutHeroSectionView />
      <AboutExperienceSectionView />
      <AboutTechStackSectionView />
      <AboutEducationSectionView />
      <AboutCtaSectionView />
    </>
  );
}
