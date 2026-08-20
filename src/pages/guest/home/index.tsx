import { FaqSectionView } from "@/components/features/home/view/faq-section-view";
import { FeaturedProjectsSectionView } from "@/components/features/home/view/featured-projects-section-view";
import { GithubSectionView } from "@/components/features/home/view/github-section-view";
import { HeroSectionView } from "@/components/features/home/view/hero-section-view";
import { ServicesSectionView } from "@/components/features/home/view/services-section-view";

export default function HomePage() {
  return (
    <>
      <HeroSectionView />
      <ServicesSectionView />
      <FeaturedProjectsSectionView />
      <FaqSectionView />
      <GithubSectionView />
    </>
  );
}
