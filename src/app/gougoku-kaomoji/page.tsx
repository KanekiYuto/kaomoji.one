import type { Metadata } from "next";

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
} from "@/features/kaomoji/content/gougoku-kaomoji";
import { KaomojiFaq } from "@/features/kaomoji/sections/faq";
import { KaomojiHero } from "@/features/kaomoji/sections/hero";
import { KaomojiWhat } from "@/features/kaomoji/sections/what";
import { KaomojiWhy } from "@/features/kaomoji/sections/why";
import { withCanonical } from "@/lib/seo";

export const metadata: Metadata = {
  title: "号泣顔文字一覧（Kaomoji）｜激しく泣く・大泣き表情【コピペ簡単】",
  description:
    "号泣顔文字（Kaomoji）をまとめて掲載。激しく泣く・大泣き・感動の表情を、絵文字付き／かわいい／シンプル系まで収録。検索＆ワンクリックでコピーして、LINE/X（Twitter）/Instagram/Discordにそのままコピペ。悲しい時も感動した時も使える。登録不要で無料。スマホでもOK。",
  ...withCanonical("/gougoku-kaomoji"),
};

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
