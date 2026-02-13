import type { Metadata } from "next";
import type { KaomojiCollectionGroup, KaomojiFaqProps, KaomojiHeroProps, KaomojiWhatProps, KaomojiWhyProps } from "@/features/kaomoji/types";
import { withCanonical } from "@/lib/seo";
import { uniq } from "@/features/kaomoji/data/uniq";

export const metadata: Metadata = {
  title: "さようなら顔文字一覧（Kaomoji）｜別れの挨拶をコピペ",
  description: "さようなら顔文字（Kaomoji）をまとめて掲載。丁寧な別れ・感謝を込めた別れの挨拶をワンクリックでコピー。",
  ...withCanonical("/sayounara-kaomoji"),
};

export const sayounaraKaomojiHeroContent: KaomojiHeroProps = {
  title: "さようなら顔文字一覧",
  kaomoji: "(･ω･)ﾉSAYONARA",
  subtitle: "別れの挨拶【コピペ簡単】",
  description: "さようなら顔文字（Kaomoji）は、丁寧な別れの挨拶。感謝や名残惜しさを込めて、心のこもった別れを伝えましょう。",
  primaryCta: { href: "#list", label: "顔文字を探す" },
  secondaryCta: { href: "/", label: "ホームへ" },
};

export const sayounaraKaomojiWhatContent: KaomojiWhatProps = {
  heading: "さようなら顔文字（Kaomoji）とは？",
  intro: "さようなら顔文字は、丁寧な別れの挨拶を表現するKaomoji。バイバイよりフォーマルで、感謝や別れの寂しさも込められます。",
  usageHeading: "使えるシーン",
  usageItems: ["長期の別れ", "お世話になった人への挨拶", "卒業や転職での別れ"],
  typesHeading: "さようなら顔文字のタイプ",
  types: [
    { title: "丁寧", description: "感謝を込めた別れ。", example: "例：(･ω･)ﾉSAYONARA" },
  ],
  featuresHeading: "別れが伝わるパーツ",
  features: [
    { symbol: "ノ", title: "手を振る", description: "別れの動作。" },
  ],
};

export const sayounaraKaomojiWhyContent: KaomojiWhyProps = {
  heading: "さようなら顔文字を上手に使うコツ",
  subheading: "感謝の気持ちを込めて。",
  guideHeading: "使い分けガイド",
  guides: [
    { title: "丁寧な別れ", bullets: ["感謝の気持ち", "また会える日を願って"], recommend: "おすすめ：(･ω･)ﾉSAYONARA" },
  ],
  cultureHeading: "別れの文化",
  cultureBody: "さようならは「左様ならば」が語源で、丁寧な別れの挨拶。顔文字を添えることで、寂しさの中にも温かさが伝わります。",
  cultureCards: [{ title: "丁寧な別れ", description: "感謝を込めた挨拶。" }],
  tipsHeading: "組み合わせ例",
  tips: [{ title: "さようなら＋感謝", body: "お世話になった気持ちを。", example: "例：「さようなら(･ω･)ﾉ ありがとうございました」" }],
};

export const sayounaraKaomojiFaqContent: KaomojiFaqProps = {
  heading: "よくある質問（FAQ）",
  subheading: "さようなら顔文字、これだけ押さえればOK。",
  items: [{ question: "さようなら顔文字はどうやってコピーできますか？", answer: "顔文字の右側にあるコピーアイコンを押すだけでコピーできます。" }],
};

export const sayounaraKaomojiGroups: KaomojiCollectionGroup[] = [
  { title: "丁寧", items: uniq(["(･ω･)ﾉSAYONARA", "(´∀`)ﾉさようなら", "さようなら(^-^)/", "(｡･ω･)ﾉﾞさようなら"]).map((kaomoji) => ({ kaomoji, tags: ["さようなら"] })) },
];

export const sayounaraKaomojiPlainText: string = uniq(sayounaraKaomojiGroups.flatMap((group) => group.items.map((item) => item.kaomoji))).join("\n");
