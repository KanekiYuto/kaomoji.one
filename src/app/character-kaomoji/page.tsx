export { metadata } from "./content";

import { RecommendedKaomojiSection } from "@/components/recommendations/recommended-kaomoji-section";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { characterKaomojiGroups } from "./content";
import {
  characterKaomojiFaqContent,
  characterKaomojiHeroContent,
  characterKaomojiWhatContent,
  characterKaomojiWhyContent,
} from "./content";
import { KaomojiExplorer } from "@/features/kaomoji/components/explorer";
import { KaomojiFaq } from "@/features/kaomoji/sections/faq";
import { KaomojiHero } from "@/features/kaomoji/sections/hero";
import { KaomojiWhat } from "@/features/kaomoji/sections/what";
import { KaomojiWhy } from "@/features/kaomoji/sections/why";

export default function CharacterKaomojiPage() {
  return (
    <div>
      <KaomojiHero {...characterKaomojiHeroContent} />

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
              <BreadcrumbPage>キャラクター顔文字</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <KaomojiExplorer groups={characterKaomojiGroups} />
        <KaomojiWhat {...characterKaomojiWhatContent} />
        <KaomojiWhy {...characterKaomojiWhyContent} />
        <KaomojiFaq {...characterKaomojiFaqContent} />
        <RecommendedKaomojiSection currentPath="/character-kaomoji" />
      </div>
    </div>
  );
}

