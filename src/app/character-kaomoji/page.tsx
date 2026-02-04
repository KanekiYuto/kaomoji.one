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
import { characterKaomojiGroups } from "@/features/kaomoji/data/character-kaomoji";
import {
  characterKaomojiFaqContent,
  characterKaomojiHeroContent,
  characterKaomojiWhatContent,
  characterKaomojiWhyContent,
} from "@/features/kaomoji/content/character-kaomoji";
import { KaomojiExplorer } from "@/features/kaomoji/components/explorer";
import { KaomojiFaq } from "@/features/kaomoji/sections/faq";
import { KaomojiHero } from "@/features/kaomoji/sections/hero";
import { KaomojiWhat } from "@/features/kaomoji/sections/what";
import { KaomojiWhy } from "@/features/kaomoji/sections/why";
import { withCanonical } from "@/lib/seo";

export const metadata: Metadata = {
  title: "キャラクター顔文字一覧（Kaomoji）｜動物・くま/うさぎ・装飾をコピペ",
  description:
    "キャラクター顔文字（Kaomoji）をまとめて掲載。うさぎ系・くま系・特殊/装飾まで、検索＆ワンクリックでコピーしてそのままコピペ。LINE/X（Twitter）/Instagram/Discordでも使えます。登録不要で無料。スマホでもOK。",
  ...withCanonical("/character-kaomoji"),
};

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

