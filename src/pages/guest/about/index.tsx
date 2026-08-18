import { AboutHeroSection } from "@/components/features/about/about-hero-section";
import { AboutExperienceSection } from "@/components/features/about/about-experience-section";
import { AboutTechStackSection } from "@/components/features/about/about-tech-stack-section";
import { AboutEducationSection } from "@/components/features/about/about-education-section";
import { AboutCtaSection } from "@/components/features/about/about-cta-section";

export default function AboutPage() {
  return (
    <div className="space-y-12 sm:space-y-16 py-4">
      {/* 01 — Profile & Bio */}
      <AboutHeroSection />

      {/* 02 — Work Experience */}
      <AboutExperienceSection />

      {/* 03 — Technical Skillset / Tech Stack */}
      <AboutTechStackSection />

      {/* 04 — Education & Academic Foundations */}
      <AboutEducationSection />

      {/* 05 — Collaboration & Project CTA */}
      <AboutCtaSection />
    </div>
  );
}
