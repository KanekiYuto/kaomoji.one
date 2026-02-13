import type { Metadata } from "next";
import type { KaomojiCollectionGroup, KaomojiFaqProps, KaomojiHeroProps, KaomojiWhatProps, KaomojiWhyProps } from "@/features/kaomoji/types";
import { withCanonical } from "@/lib/seo";
import { uniq } from "@/features/kaomoji/data/uniq";

export const metadata: Metadata = { title: "手を振る顔文字一覧（Kaomoji）｜挨拶・別れの動作をコピペ", description: "手を振る顔文字（Kaomoji）をまとめて掲載。", ...withCanonical("/tewofuru-kaomoji") };
export const tewofuruKaomojiHeroContent: KaomojiHeroProps = { title: "手を振る顔文字一覧", kaomoji: "ヾ(´∀`*)ﾉ", subtitle: "挨拶・別れの動作【コピペ簡単】", description: "手を振る顔文字は、挨拶や別れの動作を表現するKaomoji。", primaryCta: { href: "#list", label: "顔文字を探す" }, secondaryCta: { href: "/", label: "ホームへ" } };
export const tewofuruKaomojiWhatContent: KaomojiWhatProps = { heading: "手を振る顔文字とは？", intro: "手を振る動作を表現する顔文字です。", usageHeading: "使えるシーン", usageItems: ["挨拶", "別れ"], typesHeading: "タイプ", types: [{ title: "元気", description: "明るく手を振る。", example: "例：ヾ(´∀`*)ﾉ" }], featuresHeading: "特徴", features: [{ symbol: "ノ", title: "手", description: "振る動作。" }] };
export const tewofuruKaomojiWhyContent: KaomojiWhyProps = { heading: "使い方", subheading: "明るく手を振りましょう。", guideHeading: "ガイド", guides: [{ title: "挨拶に", bullets: ["元気よく"], recommend: "おすすめ：ヾ(´∀`*)ﾉ" }], cultureHeading: "文化", cultureBody: "手を振るのは世界共通の挨拶動作。", cultureCards: [{ title: "挨拶", description: "明るい動作。" }], tipsHeading: "例", tips: [{ title: "手を振る＋挨拶", body: "明るく。", example: "例：こんにちはヾ(´∀`*)ﾉ" }] };
export const tewofuruKaomojiFaqContent: KaomojiFaqProps = { heading: "FAQ", subheading: "手を振る顔文字。", items: [{ question: "コピー方法は？", answer: "コピーアイコンを押すだけ。" }] };
export const tewofuruKaomojiGroups: KaomojiCollectionGroup[] = [{ title: "手を振る", items: uniq(["ヾ(´∀`*)ﾉ", "(^-^)/", "(･ω･)ﾉ", "ヽ(*´∀｀*)ノ"]).map((kaomoji) => ({ kaomoji, tags: ["手を振る"] })) }];
export const tewofuruKaomojiPlainText: string = uniq(tewofuruKaomojiGroups.flatMap((group) => group.items.map((item) => item.kaomoji))).join("\n");
