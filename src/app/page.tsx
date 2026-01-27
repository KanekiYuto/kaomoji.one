import type { Metadata } from "next";

import { CategoryGroups } from "@/components/home/category-groups";
import { CultureHistorySection } from "@/components/home/culture-history-section";
import { HomeCtaSection } from "@/components/home/cta-section";
import { HomeFaqSection } from "@/components/home/faq-section";
import { FeaturesSection } from "@/components/home/features-section";
import { HomeHeroSection } from "@/components/home/hero-section";
import { HowToUseSection } from "@/components/home/how-to-use-section";
import { HomeWhySection } from "@/components/home/why-section";
import {
  homeCtaContent,
  homeCultureHistoryContent,
  homeFaqContent,
  homeFeaturesContent,
  homeHeroContent,
  homeHowToUseContent,
  homeKaomojiWhyContent,
} from "@/features/kaomoji/content/home";
import { withCanonical } from "@/lib/seo";

export const metadata: Metadata = {
  title: "kaomoji｜かわいい顔文字・泣く顔文字をワンクリックでコピー",
  description:
    "かわいい・泣くなどのテーマ別に顔文字（Kaomoji）を探して、クリックでコピー。LINE や X（Twitter）など、いつものアプリにそのまま貼り付けて使えます。",
  ...withCanonical("/"),
};

export default function Home() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 md:px-6">
      <HomeHeroSection content={homeHeroContent} />

      <div className="mt-10 flex flex-col gap-16 md:gap-20">
        <div id="categories">
          <CategoryGroups />
        </div>

        <div id="features">
          <FeaturesSection content={homeFeaturesContent} />
        </div>
        <div id="how-to-use">
          <HowToUseSection content={homeHowToUseContent} />
        </div>
        <div id="why">
          <HomeWhySection {...homeKaomojiWhyContent} />
        </div>
        <div id="culture-history">
          <CultureHistorySection content={homeCultureHistoryContent} />
        </div>
        <div id="faq">
          <HomeFaqSection content={homeFaqContent} />
        </div>
        <div id="cta">
          <HomeCtaSection content={homeCtaContent} />
        </div>
      </div>
    </div>
  );
}
