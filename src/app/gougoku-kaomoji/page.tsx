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
import { KaomojiExplorer } from "@/features/kaomoji/components/explorer";
import { gougokuKaomojiGroups } from "@/features/kaomoji/data/gougoku-kaomoji";
import {
  gougokuKaomojiFaqContent,
  gougokuKaomojiHeroContent,
  gougokuKaomojiWhatContent,
  gougokuKaomojiWhyContent,
} from "./content";
import { KaomojiFaq } from "@/features/kaomoji/sections/faq";
import { KaomojiHero } from "@/features/kaomoji/sections/hero";
import { KaomojiWhat } from "@/features/kaomoji/sections/what";
import { KaomojiWhy } from "@/features/kaomoji/sections/why";

export default function GougokuKaomojiPage() {
  return (
    <div>
      <KaomojiHero {...gougokuKaomojiHeroContent} />

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
              <BreadcrumbPage>号泣顔文字</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <KaomojiExplorer
          groups={gougokuKaomojiGroups}
          searchPlaceholder="顔文字を検索..."
          allLabel="すべてのカテゴリ"
          groupCountSuffix="個の顔文字"
          totalPrefix="表示: "
          totalSuffix="個"
          emptyTitle="該当する顔文字が見つかりません"
          emptyDescription="キーワードやカテゴリを変えて、もう一度お試しください。"
        />
        <KaomojiWhat {...gougokuKaomojiWhatContent} />
        <KaomojiWhy {...gougokuKaomojiWhyContent} />
        <KaomojiFaq {...gougokuKaomojiFaqContent} />
        <RecommendedKaomojiSection currentPath="/gougoku-kaomoji" />
      </div>
    </div>
  );
}
