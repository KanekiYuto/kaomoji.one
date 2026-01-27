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
import { cuteKaomojiGroups } from "@/features/kaomoji/data/cute-kaomoji";
import {
  cuteKaomojiFaqContent,
  cuteKaomojiHeroContent,
  cuteKaomojiWhatContent,
  cuteKaomojiWhyContent,
} from "@/features/kaomoji/content/cute-kaomoji";
import { withCanonical } from "@/lib/seo";

export const metadata: Metadata = {
  title: "かわいい顔文字一覧（Kaomoji）｜もこもこ・動物・ハートをコピペで簡単",
  description:
    "かわいい顔文字（Kaomoji）を厳選して紹介。もこもこ系・もきゅ系・ガオー系・動物・ハートなど、気分に合わせてすぐコピペ。SNSやチャットの一言が、ふわっと可愛くなります。",
  ...withCanonical("/cute-kaomoji"),
};

export default function CuteKaomojiPage() {
  return (
    <div>
      <KaomojiHero {...cuteKaomojiHeroContent} />

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
              <BreadcrumbPage>かわいい顔文字</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <KaomojiExplorer groups={cuteKaomojiGroups} />
        <KaomojiWhat {...cuteKaomojiWhatContent} />
        <KaomojiWhy {...cuteKaomojiWhyContent} />
        <KaomojiFaq {...cuteKaomojiFaqContent} />
      </div>
    </div>
  );
}
