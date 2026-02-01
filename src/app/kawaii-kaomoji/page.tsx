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
import { kawaiiKaomojiGroups } from "@/features/kaomoji/data/kawaii-kaomoji";
import {
  kawaiiKaomojiFaqContent,
  kawaiiKaomojiHeroContent,
  kawaiiKaomojiWhatContent,
  kawaiiKaomojiWhyContent,
} from "@/features/kaomoji/content/kawaii-kaomoji";
import { withCanonical } from "@/lib/seo";

export const metadata: Metadata = {
  title: "可愛い 顔文字一覧（Kaomoji）｜kawaii系をコピペで簡単",
  description:
    "可愛い 顔文字（kawaii/Kaomoji）をまとめて掲載。ハート・動物・照れ顔など、気分に合う可愛い表情がすぐ見つかります。検索＆ワンクリックでコピーして、LINE/X（Twitter）/Instagram/Discordにそのままコピペ。登録不要で無料。スマホでもOK。すぐ使えます。",
  ...withCanonical("/kawaii-kaomoji"),
};

export default function KawaiiKaomojiPage() {
  return (
    <div>
      <KaomojiHero {...kawaiiKaomojiHeroContent} />

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
              <BreadcrumbPage>可愛い 顔文字</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <KaomojiExplorer groups={kawaiiKaomojiGroups} />
        <KaomojiWhat {...kawaiiKaomojiWhatContent} />
        <KaomojiWhy {...kawaiiKaomojiWhyContent} />
        <KaomojiFaq {...kawaiiKaomojiFaqContent} />
        <RecommendedKaomojiSection currentPath="/kawaii-kaomoji" />
      </div>
    </div>
  );
}
