import type { Metadata } from "next";
import type { KaomojiCollectionGroup, KaomojiFaqProps, KaomojiHeroProps, KaomojiWhatProps, KaomojiWhyProps } from "@/features/kaomoji/types";
import { withCanonical } from "@/lib/seo";
import { uniq } from "@/features/kaomoji/data/uniq";

export const metadata: Metadata = {
  title: "バイバイ顔文字一覧（Kaomoji）｜別れの挨拶をコピペ",
  description: "バイバイ顔文字（Kaomoji）をまとめて掲載。手を振るバイバイ・可愛いバイバイまで、別れの挨拶に使える顔文字をワンクリックでコピー。",
  ...withCanonical("/baibai-kaomoji"),
};

export const baibaiKaomojiHeroContent: KaomojiHeroProps = {
  title: "バイバイ顔文字一覧",
  kaomoji: "(^-^)/~~ ヾ(´ω｀)ﾉﾞ",
  subtitle: "別れの挨拶【コピペ簡単】",
  description: "バイバイ顔文字（Kaomoji）は、カジュアルな別れの挨拶。手を振って明るく別れる様子や、また会おうねの気持ちを伝えましょう。",
  primaryCta: { href: "#list", label: "顔文字を探す" },
  secondaryCta: { href: "/", label: "ホームへ" },
};

export const baibaiKaomojiWhatContent: KaomojiWhatProps = {
  heading: "バイバイ顔文字（Kaomoji）とは？",
  intro: "バイバイ顔文字は、友達や親しい人との別れ際に使うカジュアルな挨拶を表現するKaomojiです。",
  usageHeading: "使えるシーン",
  usageItems: ["友達との別れ際", "チャットを終える時", "また会う約束をして別れる時"],
  typesHeading: "バイバイ顔文字のタイプ",
  types: [
    { title: "手を振る", description: "元気よく手を振って別れる様子。", example: "例：(^-^)/~~  ヾ(´ω｀)ﾉﾞ" },
    { title: "またね系", description: "また会おうねの気持ちを込めて。", example: "例：(｡･ω･)ﾉﾞﾏﾀﾈｰ" },
  ],
  featuresHeading: "別れが伝わるパーツ",
  features: [
    { symbol: "/~~", title: "手を振る", description: "バイバイの定番動作。" },
    { symbol: "ノﾞ", title: "小さく振る", description: "可愛らしい別れの挨拶。" },
  ],
};

export const baibaiKaomojiWhyContent: KaomojiWhyProps = {
  heading: "バイバイ顔文字を上手に使うコツ",
  subheading: "明るく前向きな別れの挨拶を。",
  guideHeading: "使い分けガイド",
  guides: [
    { title: "親しい相手に", bullets: ["カジュアルで明るい別れ", "また会おうねの気持ち"], recommend: "おすすめ：(^-^)/~~  ヾ(´∀`*)ﾉﾊﾞｲﾊﾞｲ" },
  ],
  cultureHeading: "別れの挨拶文化",
  cultureBody: "バイバイは英語の「Bye-bye」からきたカジュアルな別れの挨拶。顔文字を添えることで、また会えることを楽しみにする前向きな気持ちが伝わります。",
  cultureCards: [{ title: "前向きな別れ", description: "また会おうねの約束。" }],
  tipsHeading: "組み合わせ例",
  tips: [{ title: "バイバイ＋またね", body: "次に会う約束を添えて。", example: "例：「バイバイ(^-^)/~~ また明日ね！」" }],
};

export const baibaiKaomojiFaqContent: KaomojiFaqProps = {
  heading: "よくある質問（FAQ）",
  subheading: "バイバイ顔文字、これだけ押さえればOK。",
  items: [{ question: "バイバイ顔文字はどうやってコピーできますか？", answer: "顔文字の右側にあるコピーアイコンを押すだけでコピーできます。" }],
};

export const baibaiKaomojiGroups: KaomojiCollectionGroup[] = [
  { title: "手を振る", items: uniq(["(^-^)/~~", "ヾ(´ω｀)ﾉﾞﾊﾞｲﾊﾞｲ", "ヾ(´∀`*)ﾉﾊﾞｲﾊﾞｲ", "(･ω･)ﾉﾊﾞｲﾊﾞｲ", "(/｡'(ｪ)')ﾉｼﾊﾞｲﾊﾞｲ"]).map((kaomoji) => ({ kaomoji, tags: ["バイバイ", "手を振る"] })) },
  { title: "またね", items: uniq(["(｡･ω･)ﾉﾞﾏﾀﾈｰ", "またね(^-^)/", "ヾ(´ω｀)ﾉﾞまたね", "(*´ω`*)ﾉまたね"]).map((kaomoji) => ({ kaomoji, tags: ["バイバイ", "またね"] })) },
];

export const baibaiKaomojiPlainText: string = uniq(baibaiKaomojiGroups.flatMap((group) => group.items.map((item) => item.kaomoji))).join("\n");
