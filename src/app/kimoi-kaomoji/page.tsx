import type { Metadata } from "next";

import { KaomojiExplorer } from "@/features/kaomoji/components/explorer";
import { KaomojiFaq } from "@/features/kaomoji/sections/faq";
import { KaomojiHero } from "@/features/kaomoji/sections/hero";
import { KaomojiWhat } from "@/features/kaomoji/sections/what";
import { KaomojiWhy } from "@/features/kaomoji/sections/why";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { kimoiKaomojiGroups } from "@/features/kaomoji/data/kimoi-kaomoji";
import {
  kimoiKaomojiFaqContent,
  kimoiKaomojiHeroContent,
  kimoiKaomojiWhatContent,
  kimoiKaomojiWhyContent,
} from "@/features/kaomoji/content/kimoi-kaomoji";
import { withCanonical } from "@/lib/seo";

export const metadata: Metadata = {
  title: "キモい顔文字一覧（Kaomoji）｜気持ち悪い・ドン引き・ホラー系をコピペ",
  description:
    "キモい顔文字（気持ち悪い顔文字）をカテゴリ別にまとめてコピペ。ドン引き・ジト目・ゾワゾワ（ホラー）など、“うわ…”のリアクションがすぐ使えます。",
  ...withCanonical("/kimoi-kaomoji"),
};

export default function KimoiKaomojiPage() {
  return (
    <div>
      <KaomojiHero {...kimoiKaomojiHeroContent} />

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
              <BreadcrumbPage>キモい顔文字</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <KaomojiExplorer
          groups={kimoiKaomojiGroups}
          searchPlaceholder="顔文字を検索..."
          allLabel="すべてのカテゴリ"
          groupCountSuffix="個の顔文字"
          totalPrefix="表示: "
          totalSuffix="個"
          emptyTitle="該当する顔文字が見つかりません"
          emptyDescription="キーワードやカテゴリを変えて、もう一度お試しください。"
        />
        <KaomojiWhat {...kimoiKaomojiWhatContent} />
        <KaomojiWhy {...kimoiKaomojiWhyContent} />
        <KaomojiFaq {...kimoiKaomojiFaqContent} />
      </div>
    </div>
  );
}

