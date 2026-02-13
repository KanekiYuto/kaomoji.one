import type { Metadata } from "next";
import type { KaomojiCollectionGroup, KaomojiFaqProps, KaomojiHeroProps, KaomojiWhatProps, KaomojiWhyProps } from "@/features/kaomoji/types";
import { withCanonical } from "@/lib/seo";
import { uniq } from "@/features/kaomoji/data/uniq";

export const metadata: Metadata = {
  title: "またね顔文字一覧（Kaomoji）｜また会おうの挨拶をコピペ",
  description: "またね顔文字（Kaomoji）をまとめて掲載。また会おう・また明日など、次に会う約束を込めた顔文字をワンクリックでコピー。",
  ...withCanonical("/matane-kaomoji"),
};

export const mataneKaomojiHeroContent: KaomojiHeroProps = {
  title: "またね顔文字一覧",
  kaomoji: "(｡･ω･)ﾉﾞﾏﾀﾈｰ",
  subtitle: "また会おうの挨拶【コピペ簡単】",
  description: "またね顔文字（Kaomoji）は、また会う約束を込めた別れの挨拶。前向きで明るい気持ちで、次に会える日を楽しみにする気持ちを伝えましょう。",
  primaryCta: { href: "#list", label: "顔文字を探す" },
  secondaryCta: { href: "/", label: "ホームへ" },
};

export const mataneKaomojiWhatContent: KaomojiWhatProps = {
  heading: "またね顔文字（Kaomoji）とは？",
  intro: "またね顔文字は、また会えることを前提とした明るい別れの挨拶。次に会う約束を込めた前向きな表現です。",
  usageHeading: "使えるシーン",
  usageItems: ["友達との別れ際", "また明日会う約束", "次回を楽しみにする気持ち"],
  typesHeading: "またね顔文字のタイプ",
  types: [
    { title: "明るい", description: "前向きな別れ。", example: "例：(｡･ω･)ﾉﾞﾏﾀﾈｰ" },
  ],
  featuresHeading: "またねが伝わるパーツ",
  features: [
    { symbol: "ノﾞ", title: "手を振る", description: "また会おうの約束。" },
  ],
};

export const mataneKaomojiWhyContent: KaomojiWhyProps = {
  heading: "またね顔文字を上手に使うコツ",
  subheading: "前向きな気持ちで次に会う約束を。",
  guideHeading: "使い分けガイド",
  guides: [
    { title: "親しい相手に", bullets: ["カジュアルで明るい", "また会える喜び"], recommend: "おすすめ：(｡･ω･)ﾉﾞﾏﾀﾈｰ" },
  ],
  cultureHeading: "別れの文化",
  cultureBody: "「またね」は次に会えることを前提とした明るい別れの挨拶。顔文字を添えることで、別れの寂しさより次に会える楽しみが伝わります。",
  cultureCards: [{ title: "前向きな別れ", description: "また会える約束。" }],
  tipsHeading: "組み合わせ例",
  tips: [{ title: "またね＋約束", body: "次に会う予定を添えて。", example: "例：「またね(｡･ω･)ﾉﾞ また明日！」" }],
};

export const mataneKaomojiFaqContent: KaomojiFaqProps = {
  heading: "よくある質問（FAQ）",
  subheading: "またね顔文字、これだけ押さえればOK。",
  items: [{ question: "またね顔文字はどうやってコピーできますか？", answer: "顔文字の右側にあるコピーアイコンを押すだけでコピーできます。" }],
};

export const mataneKaomojiGroups: KaomojiCollectionGroup[] = [
  { title: "またね", items: uniq(["(｡･ω･)ﾉﾞﾏﾀﾈｰ", "またね(^-^)/", "ヾ(´ω｀)ﾉﾞまたね", "(*´ω`*)ﾉまたね"]).map((kaomoji) => ({ kaomoji, tags: ["またね"] })) },
];

export const mataneKaomojiPlainText: string = uniq(mataneKaomojiGroups.flatMap((group) => group.items.map((item) => item.kaomoji))).join("\n");
