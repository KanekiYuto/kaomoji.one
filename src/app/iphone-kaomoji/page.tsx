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
import { iphoneKaomojiGroups } from "@/features/kaomoji/data/iphone-kaomoji";
import {
  iphoneKaomojiFaqContent,
  iphoneKaomojiHeroContent,
  iphoneKaomojiWhatContent,
  iphoneKaomojiWhyContent,
} from "@/features/kaomoji/content/iphone-kaomoji";
import { withCanonical } from "@/lib/seo";

export const metadata: Metadata = {
  title: "iPhone 顔文字一覧（Kaomoji）｜コピペで簡単・崩れにくい定番まとめ",
  description:
    "iPhoneで使いやすい顔文字（Kaomoji）をまとめて掲載。崩れにくい定番から使える表情まで、カテゴリ別に検索＆ワンクリックでコピー。LINE/iMessage/X（Twitter）/Instagram/Discordにそのままコピペで使えます。登録不要で無料。スマホでもOK。",
  ...withCanonical("/iphone-kaomoji"),
};

export default function IphoneKaomojiPage() {
  return (
    <div>
      <KaomojiHero {...iphoneKaomojiHeroContent} />

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
              <BreadcrumbPage>iPhone 顔文字</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <KaomojiExplorer
          groups={iphoneKaomojiGroups}
          searchPlaceholder="顔文字を検索..."
          allLabel="すべてのカテゴリ"
          groupCountSuffix="個の顔文字"
          totalPrefix="表示: "
          totalSuffix="個"
          emptyTitle="該当する顔文字が見つかりません"
          emptyDescription="キーワードやカテゴリを変えて、もう一度お試しください。"
        />
        <KaomojiWhat {...iphoneKaomojiWhatContent} />
        <KaomojiWhy {...iphoneKaomojiWhyContent} />
        <KaomojiFaq {...iphoneKaomojiFaqContent} />
        <RecommendedKaomojiSection currentPath="/iphone-kaomoji" />
      </div>
    </div>
  );
}
