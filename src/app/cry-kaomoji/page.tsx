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
import { cryKaomojiGroups } from "@/features/kaomoji/data/cry-kaomoji";
import {
  cryKaomojiFaqContent,
  cryKaomojiHeroContent,
  cryKaomojiWhatContent,
  cryKaomojiWhyContent,
} from "@/features/kaomoji/content/cry-kaomoji";
import { withCanonical } from "@/lib/seo";

export const metadata: Metadata = {
  title: "泣く顔文字一覧（Kaomoji）｜かわいい泣き顔・うるうる・大泣きをコピペ",
  description:
    "泣く顔文字（Kaomoji）をまとめてコピペ。かわいい泣き顔から、うるうる・えーん・しくしく・大泣きまで、気持ちに合う表情がすぐ見つかります。",
  ...withCanonical("/cry-kaomoji"),
};

export default function CryKaomojiPage() {
  return (
    <div>
      <KaomojiHero {...cryKaomojiHeroContent} />

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
              <BreadcrumbPage>泣く顔文字</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <KaomojiExplorer groups={cryKaomojiGroups} />
        <KaomojiWhat {...cryKaomojiWhatContent} />
        <KaomojiWhy {...cryKaomojiWhyContent} />
        <KaomojiFaq {...cryKaomojiFaqContent} />
      </div>
    </div>
  );
}
