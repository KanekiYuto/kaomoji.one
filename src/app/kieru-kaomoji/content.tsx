import type { Metadata } from "next";
import type { KaomojiCollectionGroup, KaomojiFaqProps, KaomojiHeroProps, KaomojiWhatProps, KaomojiWhyProps } from "@/features/kaomoji/types";
import { withCanonical } from "@/lib/seo";
import { uniq } from "@/features/kaomoji/data/uniq";

export const metadata: Metadata = { title: "消える顔文字一覧（Kaomoji）｜退出・逃げる表現をコピペ", description: "消える顔文字をまとめて掲載。", ...withCanonical("/kieru-kaomoji") };
export const kieruKaomojiHeroContent: KaomojiHeroProps = { title: "消える顔文字一覧", kaomoji: "ｽｯ≡(∵)ﾉ", subtitle: "退出・逃げる表現【コピペ簡単】", description: "消える顔文字は、その場から去る・逃げる様子を表現するKaomoji。", primaryCta: { href: "#list", label: "顔文字を探す" }, secondaryCta: { href: "/", label: "ホームへ" } };
export const kieruKaomojiWhatContent: KaomojiWhatProps = { heading: "消える顔文字とは？", intro: "その場から去る様子を表現。", usageHeading: "使えるシーン", usageItems: ["退出", "逃げる"], typesHeading: "タイプ", types: [{ title: "スッと消える", description: "素早く退出。", example: "例：ｽｯ≡(∵)ﾉ" }], featuresHeading: "特徴", features: [{ symbol: "ｽｯ", title: "消える音", description: "素早い動作。" }] };
export const kieruKaomojiWhyContent: KaomojiWhyProps = { heading: "使い方", subheading: "タイミングよく退出。", guideHeading: "ガイド", guides: [{ title: "退出時", bullets: ["素早く"], recommend: "おすすめ：ｽｯ≡(∵)ﾉ" }], cultureHeading: "文化", cultureBody: "消える表現は日本のネット文化で人気。", cultureCards: [{ title: "退出", description: "素早い動作。" }], tipsHeading: "例", tips: [{ title: "消える＋理由", body: "退出理由を添えて。", example: "例：用事があるのでｽｯ≡(∵)ﾉ" }] };
export const kieruKaomojiFaqContent: KaomojiFaqProps = { heading: "FAQ", subheading: "消える顔文字。", items: [{ question: "コピー方法は？", answer: "コピーアイコンを押すだけ。" }] };
export const kieruKaomojiGroups: KaomojiCollectionGroup[] = [{ title: "消える", items: uniq(["ｽｯ≡(∵)ﾉ", "ε=ε=ε=┏(∵)┛", "ﾋｭﾝ≡(∵)ﾉ"]).map((kaomoji) => ({ kaomoji, tags: ["消える"] })) }];
export const kieruKaomojiPlainText: string = uniq(kieruKaomojiGroups.flatMap((group) => group.items.map((item) => item.kaomoji))).join("\n");
