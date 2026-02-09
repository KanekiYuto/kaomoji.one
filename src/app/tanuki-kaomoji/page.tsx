export { metadata } from "./content";

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

import {
  tanukiKaomojiFaqContent,
  tanukiKaomojiGroups,
  tanukiKaomojiHeroContent,
  tanukiKaomojiWhatContent,
  tanukiKaomojiWhyContent,
} from "./content";

export default function TanukiKaomojiPage() {
  return (
    <div>
      <KaomojiHero {...tanukiKaomojiHeroContent} />

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
              <BreadcrumbPage>たぬき/狸/タヌキ顔文字</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <KaomojiExplorer groups={tanukiKaomojiGroups} />
        <KaomojiWhat {...tanukiKaomojiWhatContent} />
        <KaomojiWhy {...tanukiKaomojiWhyContent} />
        <KaomojiFaq {...tanukiKaomojiFaqContent} />
        <RecommendedKaomojiSection currentPath="/tanuki-kaomoji" />
      </div>
    </div>
  );
}

