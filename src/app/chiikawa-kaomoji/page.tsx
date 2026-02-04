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
import { chiikawaKaomojiGroups } from "@/features/kaomoji/data/chiikawa-kaomoji";
import {
  chiikawaKaomojiFaqContent,
  chiikawaKaomojiHeroContent,
  chiikawaKaomojiWhatContent,
  chiikawaKaomojiWhyContent,
} from "@/features/kaomoji/content/chiikawa-kaomoji";
import { withCanonical } from "@/lib/seo";

export const metadata: Metadata = {
  title: "ちいかわ顔文字一覧（Kaomoji）｜「わァ…」泣き顔から可愛い表情までコピペ",
  description:
    "ちいかわ顔文字（Kaomoji）をまとめて掲載。嬉しい・悲しい（わァ…）・愛などの“ちいかわ風”顔文字を、検索＆ワンクリックでコピーしてそのままコピペ。LINE/X（Twitter）/Instagram/Discordでも使えます。登録不要で無料。スマホでもOK。",
  ...withCanonical("/chiikawa-kaomoji"),
};

export default function ChiikawaKaomojiPage() {
  return (
    <div>
      <KaomojiHero {...chiikawaKaomojiHeroContent} />

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
              <BreadcrumbPage>ちいかわ顔文字</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <KaomojiExplorer groups={chiikawaKaomojiGroups} />
        <KaomojiWhat {...chiikawaKaomojiWhatContent} />
        <KaomojiWhy {...chiikawaKaomojiWhyContent} />
        <KaomojiFaq {...chiikawaKaomojiFaqContent} />
        <RecommendedKaomojiSection currentPath="/chiikawa-kaomoji" />
      </div>
    </div>
  );
}

