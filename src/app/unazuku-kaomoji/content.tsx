import type { Metadata } from "next";
import type { KaomojiCollectionGroup, KaomojiFaqProps, KaomojiHeroProps, KaomojiWhatProps, KaomojiWhyProps } from "@/features/kaomoji/types";
import { withCanonical } from "@/lib/seo";
import { uniq } from "@/features/kaomoji/data/uniq";

export const metadata: Metadata = { title: "頷く顔文字一覧（Kaomoji）｜同意・納得の表現をコピペ", description: "頷く顔文字をまとめて掲載。", ...withCanonical("/unazuku-kaomoji") };
export const unazukuKaomojiHeroContent: KaomojiHeroProps = { title: "頷く顔文字一覧", kaomoji: "(｡-_-｡)", subtitle: "同意・納得の表現【コピペ簡単】", description: "頷く顔文字は、同意や納得を示す表現。", primaryCta: { href: "#list", label: "顔文字を探す" }, secondaryCta: { href: "/", label: "ホームへ" } };
export const unazukuKaomojiWhatContent: KaomojiWhatProps = { heading: "頷く顔文字とは？", intro: "同意の動作を表現。", usageHeading: "使えるシーン", usageItems: ["同意", "納得"], typesHeading: "タイプ", types: [{ title: "頷く", description: "同意する。", example: "例：(｡-_-｡)" }], featuresHeading: "特徴", features: [{ symbol: "-_-", title: "閉じた目", description: "頷く動作。" }] };
export const unazukuKaomojiWhyContent: KaomojiWhyProps = { heading: "使い方", subheading: "同意を示しましょう。", guideHeading: "ガイド", guides: [{ title: "同意時", bullets: ["納得の気持ち"], recommend: "おすすめ：(｡-_-｡)" }], cultureHeading: "文化", cultureBody: "頷くは同意を示す世界共通の動作。", cultureCards: [{ title: "同意", description: "納得の印。" }], tipsHeading: "例", tips: [{ title: "頷く＋返事", body: "同意を示して。", example: "例：(｡-_-｡)うん、そうだね" }] };
export const unazukuKaomojiFaqContent: KaomojiFaqProps = { heading: "FAQ", subheading: "頷く顔文字。", items: [{ question: "コピー方法は？", answer: "コピーアイコンを押すだけ。" }] };
export const unazukuKaomojiGroups: KaomojiCollectionGroup[] = [{ title: "頷く", items: uniq(["(｡-_-｡)", "( ˘ω˘ )", "(´-ω-`)"]).map((kaomoji) => ({ kaomoji, tags: ["頷く"] })) }];
export const unazukuKaomojiPlainText: string = uniq(unazukuKaomojiGroups.flatMap((group) => group.items.map((item) => item.kaomoji))).join("\n");
