import type { Metadata } from "next";
import type { KaomojiCollectionGroup, KaomojiFaqProps, KaomojiHeroProps, KaomojiWhatProps, KaomojiWhyProps } from "@/features/kaomoji/types";
import { withCanonical } from "@/lib/seo";
import { uniq } from "@/features/kaomoji/data/uniq";

export const metadata: Metadata = {
  title: "ハロウィン顔文字一覧（Kaomoji）｜Halloweenお祝いメッセージをコピペ",
  description: "ハロウィン顔文字（Kaomoji）をまとめて掲載。かぼちゃ・おばけ・魔女など、ハロウィンの雰囲気を演出する顔文字をワンクリックでコピー。",
  ...withCanonical("/harowin-kaomoji"),
};

export const harowinKaomojiHeroContent: KaomojiHeroProps = {
  title: "ハロウィン顔文字一覧",
  kaomoji: "🎃(*´▽`*)👻",
  subtitle: "Halloweenお祝いメッセージ【コピペ簡単】",
  description: "ハロウィン顔文字（Kaomoji）は、ハロウィンの楽しい雰囲気を演出する表現。かぼちゃやおばけ、魔女で Halloween の特別な日を楽しみましょう。",
  primaryCta: { href: "#list", label: "顔文字を探す" },
  secondaryCta: { href: "/", label: "ホームへ" },
};

export const harowinKaomojiWhatContent: KaomojiWhatProps = {
  heading: "ハロウィン顔文字（Kaomoji）とは？",
  intro: "ハロウィン顔文字は、ハロウィンのイベントや雰囲気を表現するKaomoji。かぼちゃやおばけなどの記号で特別な日を演出します。",
  usageHeading: "使えるシーン",
  usageItems: ["ハロウィンパーティーの招待", "SNSでのハロウィン投稿", "LINEでのハロウィンメッセージ"],
  typesHeading: "ハロウィン顔文字のタイプ",
  types: [
    { title: "かぼちゃ系", description: "ハロウィンの定番。", example: "例：🎃Happy Halloween🎃" },
    { title: "おばけ系", description: "可愛いおばけで楽しく。", example: "例：👻(*´▽`*)👻" },
  ],
  featuresHeading: "ハロウィンが伝わるパーツ",
  features: [
    { symbol: "🎃", title: "かぼちゃ", description: "ハロウィンの象徴。" },
    { symbol: "👻", title: "おばけ", description: "可愛いホラー感。" },
  ],
};

export const harowinKaomojiWhyContent: KaomojiWhyProps = {
  heading: "ハロウィン顔文字を上手に使うコツ",
  subheading: "楽しいハロウィンを演出しましょう。",
  guideHeading: "使い分けガイド",
  guides: [
    { title: "お祝いメッセージ", bullets: ["楽しく不気味な雰囲気", "特別なイベント感"], recommend: "おすすめ：🎃Happy Halloween🎃" },
  ],
  cultureHeading: "ハロウィンの文化",
  cultureBody: "ハロウィンは楽しいイベント。顔文字を使うことで、お祝いメッセージがより楽しく特別なものになります。",
  cultureCards: [{ title: "楽しいイベント", description: "仮装やお菓子を楽しむ日。" }],
  tipsHeading: "組み合わせ例",
  tips: [{ title: "Happy Halloween＋メッセージ", body: "お祝いの言葉と一緒に。", example: "例：「🎃Happy Halloween🎃 Trick or Treat!」" }],
};

export const harowinKaomojiFaqContent: KaomojiFaqProps = {
  heading: "よくある質問（FAQ）",
  subheading: "ハロウィン顔文字、これだけ押さえればOK。",
  items: [{ question: "ハロウィン顔文字はどうやってコピーできますか？", answer: "顔文字の右側にあるコピーアイコンを押すだけでコピーできます。" }],
};

export const harowinKaomojiGroups: KaomojiCollectionGroup[] = [
  { title: "かぼちゃ系", items: uniq(["🎃Happy Halloween🎃", "🎃(*´▽`*)🎃", "✨🎃✨"]).map((kaomoji) => ({ kaomoji, tags: ["ハロウィン", "かぼちゃ"] })) },
  { title: "おばけ系", items: uniq(["👻Happy Halloween👻", "👻(*´▽`*)👻"]).map((kaomoji) => ({ kaomoji, tags: ["ハロウィン", "おばけ"] })) },
];

export const harowinKaomojiPlainText: string = uniq(harowinKaomojiGroups.flatMap((group) => group.items.map((item) => item.kaomoji))).join("\n");
