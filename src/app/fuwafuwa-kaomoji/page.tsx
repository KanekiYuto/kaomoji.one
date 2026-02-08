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
import { fuwafuwaKaomojiGroups } from "@/features/kaomoji/data/fuwafuwa-kaomoji";
import {
  fuwafuwaKaomojiFaqContent,
  fuwafuwaKaomojiHeroContent,
  fuwafuwaKaomojiWhatContent,
  fuwafuwaKaomojiWhyContent,
} from "./content";

export default function FuwafuwaKaomojiPage() {
  return (
    <div>
      <KaomojiHero {...fuwafuwaKaomojiHeroContent} />

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
              <BreadcrumbPage>ふわふわ顔文字</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <KaomojiExplorer
          groups={fuwafuwaKaomojiGroups}
          searchPlaceholder="顔文字を検索..."
          allLabel="すべてのカテゴリ"
          groupCountSuffix="個の顔文字"
          totalPrefix="表示: "
          totalSuffix="個"
          emptyTitle="該当する顔文字が見つかりません"
          emptyDescription="キーワードやカテゴリを変えて、もう一度お試しください。"
        />
        <KaomojiWhat {...fuwafuwaKaomojiWhatContent} />
        <KaomojiWhy {...fuwafuwaKaomojiWhyContent} />
        <KaomojiFaq {...fuwafuwaKaomojiFaqContent} />
        <RecommendedKaomojiSection currentPath="/fuwafuwa-kaomoji" />
      </div>
    </div>
  );
}
