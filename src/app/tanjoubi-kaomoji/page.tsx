export { metadata } from "./content";
import { KaomojiExplorer } from "@/features/kaomoji/components/explorer";
import { KaomojiFaq } from "@/features/kaomoji/sections/faq";
import { KaomojiHero } from "@/features/kaomoji/sections/hero";
import { KaomojiWhat } from "@/features/kaomoji/sections/what";
import { KaomojiWhy } from "@/features/kaomoji/sections/why";
import { RecommendedKaomojiSection } from "@/components/recommendations/recommended-kaomoji-section";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { tanjoubiKaomojiGroups, tanjoubiKaomojiFaqContent, tanjoubiKaomojiHeroContent, tanjoubiKaomojiPlainText, tanjoubiKaomojiWhatContent, tanjoubiKaomojiWhyContent } from "./content";

export default function TanjoubiKaomojiPage() {
  return (
    <div>
      <KaomojiHero {...tanjoubiKaomojiHeroContent} />
      <div id="list" className="mx-auto flex max-w-6xl flex-col gap-16 px-4 py-12 md:px-6">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem><BreadcrumbLink href="/">ホーム</BreadcrumbLink></BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem><BreadcrumbPage>誕生日顔文字</BreadcrumbPage></BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <KaomojiExplorer groups={tanjoubiKaomojiGroups} />
        <details className="rounded-lg border bg-muted/20 p-5">
          <summary className="cursor-pointer text-lg font-semibold text-foreground">誕生日顔文字（テキスト一覧）</summary>
          <p className="mt-2 text-sm text-muted-foreground">まとめて眺めたい方向けのテキスト版です（クリックで開きます）。</p>
          <pre className="mt-4 whitespace-pre-wrap break-words font-mono text-sm leading-relaxed text-foreground">{tanjoubiKaomojiPlainText}</pre>
        </details>
        <KaomojiWhat {...tanjoubiKaomojiWhatContent} />
        <KaomojiWhy {...tanjoubiKaomojiWhyContent} />
        <KaomojiFaq {...tanjoubiKaomojiFaqContent} />
        <RecommendedKaomojiSection currentPath="/tanjoubi-kaomoji" />
      </div>
    </div>
  );
}
