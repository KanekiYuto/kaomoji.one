export { metadata } from "./content";

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
} from "./content";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function Home() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 md:px-6">
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

        <div className="w-full">
          <div className="w-full rounded-xl border border-border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>バッジ</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <a
                      href="https://startupfa.me/s/kaomoji?utm_source=kaomoji.one"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex"
                    >
                      <img
                        src="https://startupfa.me/badges/featured-badge-small.webp"
                        alt="kaomoji - Featured on Startup Fame"
                        width={224}
                        height={36}
                      />
                    </a>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <a href="https://turbo0.com/item/kaomoji" target="_blank" rel="noopener noreferrer">
                      <img src="https://img.turbo0.com/badge-listed-light.svg" alt="Listed on Turbo0" width={224} height={36} />
                    </a>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
}
