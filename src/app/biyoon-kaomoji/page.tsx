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
import { biyoonKaomojiGroups } from "@/features/kaomoji/data/biyoon-kaomoji";
import {
  biyoonKaomojiFaqContent,
  biyoonKaomojiHeroContent,
  biyoonKaomojiWhatContent,
  biyoonKaomojiWhyContent,
} from "@/features/kaomoji/content/biyoon-kaomoji";
import { withCanonical } from "@/lib/seo";

export const metadata: Metadata = {
  title: "びよーん顔文字一覧（Kaomoji）｜伸ばす・引っ張る・もちもち",
  description:
    "びよーん顔文字（Kaomoji）をカテゴリ別にまとめて掲載。伸ばす・引っ張る・もちもち系の表情を、検索＆ワンクリックでコピーできます。ネタにもリアクションにも便利。LINE/X（Twitter）/Instagram/Discordにそのままコピペ。登録不要で無料。スマホでもOK。",
  ...withCanonical("/biyoon-kaomoji"),
};

export default function BiyoonKaomojiPage() {
  return (
    <div>
      <KaomojiHero {...biyoonKaomojiHeroContent} />

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
              <BreadcrumbPage>びよーん顔文字</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <KaomojiExplorer
          groups={biyoonKaomojiGroups}
          searchPlaceholder="顔文字を検索..."
          allLabel="すべてのカテゴリ"
          groupCountSuffix="個の顔文字"
          totalPrefix="表示: "
          totalSuffix="個"
          emptyTitle="該当する顔文字が見つかりません"
          emptyDescription="キーワードやカテゴリを変えて、もう一度お試しください。"
        />
        <KaomojiWhat {...biyoonKaomojiWhatContent} />
        <KaomojiWhy {...biyoonKaomojiWhyContent} />
        <KaomojiFaq {...biyoonKaomojiFaqContent} />
        <RecommendedKaomojiSection currentPath="/biyoon-kaomoji" />
      </div>
    </div>
  );
}
