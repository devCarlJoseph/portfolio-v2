import { FaqSection } from "@/components/features/home/faq-section";
import { FeaturedProjectsSection } from "@/components/features/home/featured-projects-section";
import { GithubSection } from "@/components/features/home/github-section";
import { HeroSection } from "@/components/features/home/hero-section";
import { ServicesSection } from "@/components/features/home/services-section";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <FeaturedProjectsSection />
      <FaqSection />
      <GithubSection />
    </>
  );
}
