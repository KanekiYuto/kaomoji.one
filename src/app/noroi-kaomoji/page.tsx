export { metadata } from "./content";
import { KaomojiExplorer } from "@/features/kaomoji/components/explorer";
import { KaomojiFaq } from "@/features/kaomoji/sections/faq";
import { KaomojiHero } from "@/features/kaomoji/sections/hero";
import { KaomojiWhat } from "@/features/kaomoji/sections/what";
import { KaomojiWhy } from "@/features/kaomoji/sections/why";
import { RecommendedKaomojiSection } from "@/components/recommendations/recommended-kaomoji-section";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { noroiKaomojiGroups, noroiKaomojiFaqContent, noroiKaomojiHeroContent, noroiKaomojiPlainText, noroiKaomojiWhatContent, noroiKaomojiWhyContent } from "./content";

export default function NoroiKaomojiPage() {
  return (<div><KaomojiHero {...noroiKaomojiHeroContent} /><div id="list" className="mx-auto flex max-w-6xl flex-col gap-16 px-4 py-12 md:px-6"><Breadcrumb><BreadcrumbList><BreadcrumbItem><BreadcrumbLink href="/">ホーム</BreadcrumbLink></BreadcrumbItem><BreadcrumbSeparator /><BreadcrumbItem><BreadcrumbPage>呪い顔文字</BreadcrumbPage></BreadcrumbItem></BreadcrumbList></Breadcrumb><KaomojiExplorer groups={noroiKaomojiGroups} /><details className="rounded-lg border bg-muted/20 p-5"><summary className="cursor-pointer text-lg font-semibold text-foreground">呪い顔文字（テキスト一覧）</summary><p className="mt-2 text-sm text-muted-foreground">まとめて眺めたい方向けのテキスト版です。</p><pre className="mt-4 whitespace-pre-wrap break-words font-mono text-sm leading-relaxed text-foreground">{noroiKaomojiPlainText}</pre></details><KaomojiWhat {...noroiKaomojiWhatContent} /><KaomojiWhy {...noroiKaomojiWhyContent} /><KaomojiFaq {...noroiKaomojiFaqContent} /><RecommendedKaomojiSection currentPath="/noroi-kaomoji" /></div></div>);
}
