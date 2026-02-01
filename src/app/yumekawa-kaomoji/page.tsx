import type { Metadata } from "next";

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
import { yumekawaKaomojiGroups } from "@/features/kaomoji/data/yumekawa-kaomoji";
import {
  yumekawaKaomojiFaqContent,
  yumekawaKaomojiHeroContent,
  yumekawaKaomojiWhatContent,
  yumekawaKaomojiWhyContent,
} from "@/features/kaomoji/content/yumekawa-kaomoji";
import { withCanonical } from "@/lib/seo";

export const metadata: Metadata = {
  title: "ゆめかわ顔文字一覧（Kaomoji）｜夢かわいい・パステル・天使・キラキラ",
  description:
    "ゆめかわ顔文字（Kaomoji）を厳選して掲載。パステル・天使・キラキラなど、夢かわいい表情がすぐ見つかります。検索＆ワンクリックでコピーして、LINE/X（Twitter）/Instagram/Discordにそのままコピペ。プロフィールや一言にも便利。登録不要で無料。スマホでもOK。",
  ...withCanonical("/yumekawa-kaomoji"),
};

export default function YumekawaKaomojiPage() {
  return (
    <div>
      <KaomojiHero {...yumekawaKaomojiHeroContent} />

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
              <BreadcrumbPage>ゆめかわ顔文字</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <KaomojiExplorer
          groups={yumekawaKaomojiGroups}
          searchPlaceholder="顔文字を検索..."
          allLabel="すべてのカテゴリ"
          groupCountSuffix="個の顔文字"
          totalPrefix="表示: "
          totalSuffix="個"
          emptyTitle="該当する顔文字が見つかりません"
          emptyDescription="キーワードやカテゴリを変えて、もう一度お試しください。"
        />
        <KaomojiWhat {...yumekawaKaomojiWhatContent} />
        <KaomojiWhy {...yumekawaKaomojiWhyContent} />
        <KaomojiFaq {...yumekawaKaomojiFaqContent} />
        <RecommendedKaomojiSection currentPath="/yumekawa-kaomoji" />
      </div>
    </div>
  );
}
