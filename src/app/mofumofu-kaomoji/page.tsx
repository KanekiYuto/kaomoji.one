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
import { mofumofuKaomojiGroups } from "@/features/kaomoji/data/mofumofu-kaomoji";
import {
  mofumofuKaomojiFaqContent,
  mofumofuKaomojiHeroContent,
  mofumofuKaomojiWhatContent,
  mofumofuKaomojiWhyContent,
} from "@/features/kaomoji/content/mofumofu-kaomoji";
import { withCanonical } from "@/lib/seo";

export const metadata: Metadata = {
  title: "もふもふ顔文字一覧（Kaomoji）｜癒し・かわいい・動物",
  description:
    "もふもふ顔文字（Kaomoji）をカテゴリ別にまとめて掲載。検索＆ワンクリックコピー対応で、癒し・かわいい・動物系の表情がすぐ見つかります。気分に合う一つが見つかります。LINE/X（Twitter）/Instagram/Discordにそのままコピペで使えます。登録不要で無料。スマホでもOK。",
  ...withCanonical("/mofumofu-kaomoji"),
};

export default function MofumofuKaomojiPage() {
  return (
    <div>
      <KaomojiHero {...mofumofuKaomojiHeroContent} />

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
              <BreadcrumbPage>もふもふ顔文字</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <KaomojiExplorer
          groups={mofumofuKaomojiGroups}
          searchPlaceholder="顔文字を検索..."
          allLabel="すべてのカテゴリ"
          groupCountSuffix="個の顔文字"
          totalPrefix="表示: "
          totalSuffix="個"
          emptyTitle="該当する顔文字が見つかりません"
          emptyDescription="キーワードやカテゴリを変えて、もう一度お試しください。"
        />
        <KaomojiWhat {...mofumofuKaomojiWhatContent} />
        <KaomojiWhy {...mofumofuKaomojiWhyContent} />
        <KaomojiFaq {...mofumofuKaomojiFaqContent} />
        <RecommendedKaomojiSection currentPath="/mofumofu-kaomoji" />
      </div>
    </div>
  );
}
