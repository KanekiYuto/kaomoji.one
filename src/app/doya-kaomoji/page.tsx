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
import { doyaKaomojiGroups } from "./content";
import {
  doyaKaomojiFaqContent,
  doyaKaomojiHeroContent,
  doyaKaomojiWhatContent,
  doyaKaomojiWhyContent,
} from "./content";

export default function DoyaKaomojiPage() {
  return (
    <div>
      <KaomojiHero {...doyaKaomojiHeroContent} />

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
              <BreadcrumbPage>ドヤ顔顔文字</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <KaomojiExplorer
          groups={doyaKaomojiGroups}
          searchPlaceholder="顔文字を検索..."
          allLabel="すべてのカテゴリ"
        />
        <KaomojiWhat {...doyaKaomojiWhatContent} />
        <KaomojiWhy {...doyaKaomojiWhyContent} />
        <KaomojiFaq {...doyaKaomojiFaqContent} />
        <RecommendedKaomojiSection currentPath="/doya-kaomoji" />
      </div>
    </div>
  );
}
