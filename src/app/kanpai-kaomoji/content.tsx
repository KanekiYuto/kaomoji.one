import type { Metadata } from "next";
import type { KaomojiCollectionGroup, KaomojiFaqProps, KaomojiHeroProps, KaomojiWhatProps, KaomojiWhyProps } from "@/features/kaomoji/types";
import { withCanonical } from "@/lib/seo";
import { uniq } from "@/features/kaomoji/data/uniq";

export const metadata: Metadata = {
  title: "乾杯顔文字一覧（Kaomoji）｜お祝い・飲み会の挨拶をコピペ",
  description: "乾杯顔文字（Kaomoji）をまとめて掲載。ビール・お酒・お祝いの気持ちを込めた顔文字をワンクリックでコピー。",
  ...withCanonical("/kanpai-kaomoji"),
};

export const kanpaiKaomojiHeroContent: KaomojiHeroProps = {
  title: "乾杯顔文字一覧",
  kaomoji: "🍻(*´▽`*)🍻",
  subtitle: "お祝い・飲み会の挨拶【コピペ簡単】",
  description: "乾杯顔文字（Kaomoji）は、お祝いや飲み会で使う楽しい表現。ビールやお酒のグラスを掲げて、みんなで乾杯の気持ちを共有しましょう。",
  primaryCta: { href: "#list", label: "顔文字を探す" },
  secondaryCta: { href: "/", label: "ホームへ" },
};

export const kanpaiKaomojiWhatContent: KaomojiWhatProps = {
  heading: "乾杯顔文字（Kaomoji）とは？",
  intro: "乾杯顔文字は、お祝いや飲み会で「乾杯！」の気持ちを表現するKaomoji。ビールやグラスの記号で楽しい雰囲気を演出します。",
  usageHeading: "使えるシーン",
  usageItems: ["飲み会の開始時", "お祝いの席", "オンライン飲み会", "SNSでの乾杯投稿"],
  typesHeading: "乾杯顔文字のタイプ",
  types: [
    { title: "ビール系", description: "飲み会の定番。", example: "例：🍻乾杯🍻" },
    { title: "お祝い系", description: "特別な日の乾杯。", example: "例：🥂Cheers🥂" },
  ],
  featuresHeading: "乾杯が伝わるパーツ",
  features: [
    { symbol: "🍻", title: "ビール", description: "飲み会の定番。" },
    { symbol: "🥂", title: "シャンパン", description: "お祝いの雰囲気。" },
  ],
};

export const kanpaiKaomojiWhyContent: KaomojiWhyProps = {
  heading: "乾杯顔文字を上手に使うコツ",
  subheading: "楽しい乾杯を演出しましょう。",
  guideHeading: "使い分けガイド",
  guides: [
    { title: "飲み会で", bullets: ["楽しく明るい雰囲気", "みんなで盛り上がる"], recommend: "おすすめ：🍻乾杯🍻" },
  ],
  cultureHeading: "乾杯の文化",
  cultureBody: "乾杯は日本の飲み会文化で大切な儀式。顔文字を使うことで、オンラインでも乾杯の一体感を演出できます。",
  cultureCards: [{ title: "楽しい時間", description: "みんなで乾杯する喜び。" }],
  tipsHeading: "組み合わせ例",
  tips: [{ title: "乾杯＋メッセージ", body: "お祝いの言葉と一緒に。", example: "例：「🍻乾杯🍻 今日もお疲れ様！」" }],
};

export const kanpaiKaomojiFaqContent: KaomojiFaqProps = {
  heading: "よくある質問（FAQ）",
  subheading: "乾杯顔文字、これだけ押さえればOK。",
  items: [{ question: "乾杯顔文字はどうやってコピーできますか？", answer: "顔文字の右側にあるコピーアイコンを押すだけでコピーできます。" }],
};

export const kanpaiKaomojiGroups: KaomojiCollectionGroup[] = [
  { title: "ビール系", items: uniq(["🍻乾杯🍻", "🍻(*´▽`*)🍻", "🍺Cheers🍺"]).map((kaomoji) => ({ kaomoji, tags: ["乾杯", "ビール"] })) },
  { title: "お祝い", items: uniq(["🥂Cheers🥂", "🥂(*´▽`*)🥂", "✨乾杯✨"]).map((kaomoji) => ({ kaomoji, tags: ["乾杯", "お祝い"] })) },
];

export const kanpaiKaomojiPlainText: string = uniq(kanpaiKaomojiGroups.flatMap((group) => group.items.map((item) => item.kaomoji))).join("\n");
