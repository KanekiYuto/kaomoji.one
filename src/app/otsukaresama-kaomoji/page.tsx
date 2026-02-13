export { metadata } from "./content";
import { KaomojiExplorer } from "@/features/kaomoji/components/explorer";
import { KaomojiFaq } from "@/features/kaomoji/sections/faq";
import { KaomojiHero } from "@/features/kaomoji/sections/hero";
import { KaomojiWhat } from "@/features/kaomoji/sections/what";
import { KaomojiWhy } from "@/features/kaomoji/sections/why";
import { RecommendedKaomojiSection } from "@/components/recommendations/recommended-kaomoji-section";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { otsukaresamaKaomojiGroups, otsukaresamaKaomojiFaqContent, otsukaresamaKaomojiHeroContent, otsukaresamaKaomojiPlainText, otsukaresamaKaomojiWhatContent, otsukaresamaKaomojiWhyContent } from "./content";

export default function OtsukaresamaKaomojiPage() {
  return (<div><KaomojiHero {...otsukaresamaKaomojiHeroContent} /><div id="list" className="mx-auto flex max-w-6xl flex-col gap-16 px-4 py-12 md:px-6"><Breadcrumb><BreadcrumbList><BreadcrumbItem><BreadcrumbLink href="/">ホーム</BreadcrumbLink></BreadcrumbItem><BreadcrumbSeparator /><BreadcrumbItem><BreadcrumbPage>お疲れ様顔文字</BreadcrumbPage></BreadcrumbItem></BreadcrumbList></Breadcrumb><KaomojiExplorer groups={otsukaresamaKaomojiGroups} /><details className="rounded-lg border bg-muted/20 p-5"><summary className="cursor-pointer text-lg font-semibold text-foreground">お疲れ様顔文字（テキスト一覧）</summary><p className="mt-2 text-sm text-muted-foreground">まとめて眺めたい方向けのテキスト版です。</p><pre className="mt-4 whitespace-pre-wrap break-words font-mono text-sm leading-relaxed text-foreground">{otsukaresamaKaomojiPlainText}</pre></details><KaomojiWhat {...otsukaresamaKaomojiWhatContent} /><KaomojiWhy {...otsukaresamaKaomojiWhyContent} /><KaomojiFaq {...otsukaresamaKaomojiFaqContent} /><RecommendedKaomojiSection currentPath="/otsukaresama-kaomoji" /></div></div>);
}
