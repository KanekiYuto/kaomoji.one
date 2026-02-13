import type { Metadata } from "next";
import type { KaomojiCollectionGroup, KaomojiFaqProps, KaomojiHeroProps, KaomojiWhatProps, KaomojiWhyProps } from "@/features/kaomoji/types";
import { withCanonical } from "@/lib/seo";
import { uniq } from "@/features/kaomoji/data/uniq";

export const metadata: Metadata = { title: "お疲れ様顔文字一覧（Kaomoji）｜労いの言葉をコピペ", description: "お疲れ様顔文字をまとめて掲載。", ...withCanonical("/otsukaresama-kaomoji") };
export const otsukaresamaKaomojiHeroContent: KaomojiHeroProps = { title: "お疲れ様顔文字一覧", kaomoji: "(｡･ω･)ﾉﾞｵﾂｶﾚｻﾏ", subtitle: "労いの言葉【コピペ簡単】", description: "お疲れ様顔文字は、相手の労をねぎらう温かい表現。", primaryCta: { href: "#list", label: "顔文字を探す" }, secondaryCta: { href: "/", label: "ホームへ" } };
export const otsukaresamaKaomojiWhatContent: KaomojiWhatProps = { heading: "お疲れ様顔文字とは？", intro: "労いの言葉を表現。", usageHeading: "使えるシーン", usageItems: ["仕事終わり", "お疲れ様"], typesHeading: "タイプ", types: [{ title: "温かい", description: "労いの気持ち。", example: "例：(｡･ω･)ﾉﾞｵﾂｶﾚｻﾏ" }], featuresHeading: "特徴", features: [{ symbol: "ノﾞ", title: "手", description: "労いの動作。" }] };
export const otsukaresamaKaomojiWhyContent: KaomojiWhyProps = { heading: "使い方", subheading: "労いの気持ちを込めて。", guideHeading: "ガイド", guides: [{ title: "仕事終わりに", bullets: ["感謝の気持ち"], recommend: "おすすめ：(｡･ω･)ﾉﾞｵﾂｶﾚｻﾏ" }], cultureHeading: "文化", cultureBody: "お疲れ様は日本のビジネス文化で重要な挨拶。", cultureCards: [{ title: "労い", description: "感謝の気持ち。" }], tipsHeading: "例", tips: [{ title: "お疲れ様＋感謝", body: "感謝を添えて。", example: "例：お疲れ様(｡･ω･)ﾉﾞ ありがとうございました" }] };
export const otsukaresamaKaomojiFaqContent: KaomojiFaqProps = { heading: "FAQ", subheading: "お疲れ様顔文字。", items: [{ question: "コピー方法は？", answer: "コピーアイコンを押すだけ。" }] };
export const otsukaresamaKaomojiGroups: KaomojiCollectionGroup[] = [{ title: "お疲れ様", items: uniq(["(｡･ω･)ﾉﾞｵﾂｶﾚｻﾏ", "お疲れ様(*´ω`*)ノ", "(´∀`)ﾉお疲れ様"]).map((kaomoji) => ({ kaomoji, tags: ["お疲れ様"] })) }];
export const otsukaresamaKaomojiPlainText: string = uniq(otsukaresamaKaomojiGroups.flatMap((group) => group.items.map((item) => item.kaomoji))).join("\n");
