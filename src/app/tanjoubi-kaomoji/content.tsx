import type { Metadata } from "next";
import type { KaomojiCollectionGroup, KaomojiFaqProps, KaomojiHeroProps, KaomojiWhatProps, KaomojiWhyProps } from "@/features/kaomoji/types";
import { withCanonical } from "@/lib/seo";
import { uniq } from "@/features/kaomoji/data/uniq";

export const metadata: Metadata = {
  title: "誕生日顔文字一覧（Kaomoji）｜お祝いメッセージをコピペ",
  description: "誕生日顔文字（Kaomoji）をまとめて掲載。ケーキ・プレゼント・お祝いの気持ちを込めた顔文字をワンクリックでコピー。",
  ...withCanonical("/tanjoubi-kaomoji"),
};

export const tanjoubiKaomojiHeroContent: KaomojiHeroProps = {
  title: "誕生日顔文字一覧",
  kaomoji: "🎂٩(ˊᗜˋ*)و🎉",
  subtitle: "お祝いメッセージ【コピペ簡単】",
  description: "誕生日顔文字（Kaomoji）は、大切な人の誕生日をお祝いする特別な表現。ケーキやプレゼントの記号を使って、お祝いの気持ちを華やかに伝えましょう。",
  primaryCta: { href: "#list", label: "顔文字を探す" },
  secondaryCta: { href: "/", label: "ホームへ" },
};

export const tanjoubiKaomojiWhatContent: KaomojiWhatProps = {
  heading: "誕生日顔文字（Kaomoji）とは？",
  intro: "誕生日顔文字は、誕生日のお祝いメッセージに使う華やかな表現。ケーキやプレゼント、クラッカーなどの記号で特別な日を演出します。",
  usageHeading: "使えるシーン",
  usageItems: ["誕生日メッセージカード", "SNSでのお祝い投稿", "LINEやメールでのお祝い"],
  typesHeading: "誕生日顔文字のタイプ",
  types: [
    { title: "ケーキ系", description: "誕生日の定番モチーフ。", example: "例：🎂(*´▽`*)🎂" },
    { title: "お祝い系", description: "華やかなお祝いの雰囲気。", example: "例：🎉Happy Birthday🎉" },
  ],
  featuresHeading: "お祝いが伝わるパーツ",
  features: [
    { symbol: "🎂", title: "ケーキ", description: "誕生日の象徴。" },
    { symbol: "🎁", title: "プレゼント", description: "贈り物の気持ち。" },
    { symbol: "🎉", title: "クラッカー", description: "お祝いの華やかさ。" },
  ],
};

export const tanjoubiKaomojiWhyContent: KaomojiWhyProps = {
  heading: "誕生日顔文字を上手に使うコツ",
  subheading: "特別な日を華やかに演出しましょう。",
  guideHeading: "使い分けガイド",
  guides: [
    { title: "家族・友人へ", bullets: ["温かく親しみやすい表現", "心からのお祝いの気持ち"], recommend: "おすすめ：🎂Happy Birthday🎂" },
  ],
  cultureHeading: "誕生日のお祝い文化",
  cultureBody: "誕生日は一年に一度の特別な日。顔文字を使うことで、お祝いメッセージがより華やかで特別なものになります。",
  cultureCards: [{ title: "特別な日", description: "一年に一度の大切な記念日。" }],
  tipsHeading: "組み合わせ例",
  tips: [{ title: "Happy Birthday＋メッセージ", body: "お祝いの言葉と一緒に。", example: "例：「🎉Happy Birthday🎉 素敵な一年になりますように！」" }],
};

export const tanjoubiKaomojiFaqContent: KaomojiFaqProps = {
  heading: "よくある質問（FAQ）",
  subheading: "誕生日顔文字、これだけ押さえればOK。",
  items: [{ question: "誕生日顔文字はどうやってコピーできますか？", answer: "顔文字の右側にあるコピーアイコンを押すだけでコピーできます。" }],
};

export const tanjoubiKaomojiGroups: KaomojiCollectionGroup[] = [
  { title: "ケーキ系", items: uniq(["🎂(*´▽`*)🎂", "🎂Happy Birthday🎂", "✨🎂✨", "🎂٩(ˊᗜˋ*)و🎂"]).map((kaomoji) => ({ kaomoji, tags: ["誕生日", "ケーキ"] })) },
  { title: "お祝い", items: uniq(["🎉Happy Birthday🎉", "🎊(*´∀｀*)🎊", "🎁Happy Birthday🎁", "✨Happy Birthday✨"]).map((kaomoji) => ({ kaomoji, tags: ["誕生日", "お祝い"] })) },
];

export const tanjoubiKaomojiPlainText: string = uniq(tanjoubiKaomojiGroups.flatMap((group) => group.items.map((item) => item.kaomoji))).join("\n");
