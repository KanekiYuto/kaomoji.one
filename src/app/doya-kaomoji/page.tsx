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
import { doyaKaomojiGroups } from "@/features/kaomoji/data/doya-kaomoji";
import {
  doyaKaomojiFaqContent,
  doyaKaomojiHeroContent,
  doyaKaomojiWhatContent,
  doyaKaomojiWhyContent,
} from "@/features/kaomoji/content/doya-kaomoji";
import { withCanonical } from "@/lib/seo";

export const metadata: Metadata = {
  title:
    "ドヤ顔 顔文字一覧（Kaomoji）｜得意げ・キメ顔で自信をアピール【コピペ簡単】",
  description:
    "ドヤ顔・どや・どやぁ・ドヤァなど、自信満々で得意げな顔文字をまとめてコピペ。かわいいドヤ顔からキリッとした決め顔まで、成果を出した時や自慢したい時にぴったり！",
  ...withCanonical("/doya-kaomoji"),
};

export default function DoyaKaomojiPage() {
  return (
    <div>
      <KaomojiHero {...doyaKaomojiHeroContent} />

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
              <BreadcrumbPage>ドヤ顔顔文字</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <KaomojiExplorer
          groups={doyaKaomojiGroups}
          searchPlaceholder="顔文字を検索..."
          allLabel="すべてのカテゴリ"
        />
        <KaomojiWhat {...doyaKaomojiWhatContent} />
        <KaomojiWhy {...doyaKaomojiWhyContent} />
        <KaomojiFaq {...doyaKaomojiFaqContent} />
        <RecommendedKaomojiSection currentPath="/doya-kaomoji" />
      </div>
    </div>
  );
}
