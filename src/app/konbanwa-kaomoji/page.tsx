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
import { konbanwaKaomojiGroups } from "./content";
import {
  konbanwaKaomojiFaqContent,
  konbanwaKaomojiHeroContent,
  konbanwaKaomojiPlainText,
  konbanwaKaomojiWhatContent,
  konbanwaKaomojiWhyContent,
} from "./content";

export default function KonbanwaKaomojiPage() {
  return (
    <div>
      <KaomojiHero {...konbanwaKaomojiHeroContent} />

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
              <BreadcrumbPage>こんばんは顔文字</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <KaomojiExplorer groups={konbanwaKaomojiGroups} />

        <details className="rounded-lg border bg-muted/20 p-5">
          <summary className="cursor-pointer text-lg font-semibold text-foreground">
            こんばんは顔文字（テキスト一覧）
          </summary>
          <p className="mt-2 text-sm text-muted-foreground">
            まとめて眺めたい方向けのテキスト版です（クリックで開きます）。
          </p>
          <pre className="mt-4 whitespace-pre-wrap break-words font-mono text-sm leading-relaxed text-foreground">
            {konbanwaKaomojiPlainText}
          </pre>
        </details>

        <KaomojiWhat {...konbanwaKaomojiWhatContent} />
        <KaomojiWhy {...konbanwaKaomojiWhyContent} />
        <KaomojiFaq {...konbanwaKaomojiFaqContent} />
        <RecommendedKaomojiSection currentPath="/konbanwa-kaomoji" />
      </div>
    </div>
  );
}
