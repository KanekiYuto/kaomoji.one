export { metadata } from "./content";

import { KaomojiExplorer } from "@/features/kaomoji/components/explorer";
import { KaomojiFaq } from "@/features/kaomoji/sections/faq";
import { KaomojiHero } from "@/features/kaomoji/sections/hero";
import { KaomojiWhat } from "@/features/kaomoji/sections/what";
import { KaomojiWhy } from "@/features/kaomoji/sections/why";
import { RecommendedKaomojiSection } from "@/components/recommendations/recommended-kaomoji-section";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import {
  ribbonKaomojiFaqContent,
  ribbonKaomojiGroups,
  ribbonKaomojiHeroContent,
  ribbonKaomojiWhatContent,
  ribbonKaomojiWhyContent,
} from "./content";

export default function RibbonKaomojiPage() {
  return (
    <div>
      <KaomojiHero {...ribbonKaomojiHeroContent} />

      <div
        id="list"
        className="mx-auto flex max-w-6xl flex-col gap-16 px-4 py-12 md:px-6"
      >
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">ホーム</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>リボン絵文字/特殊文字/記号【コピペ可】200種類🎀 |顔文字</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <KaomojiExplorer groups={ribbonKaomojiGroups} />
        <KaomojiWhat {...ribbonKaomojiWhatContent} />
        <KaomojiWhy {...ribbonKaomojiWhyContent} />
        <KaomojiFaq {...ribbonKaomojiFaqContent} />
        <RecommendedKaomojiSection currentPath="/ribbon-kaomoji" />
      </div>
    </div>
  );
}

