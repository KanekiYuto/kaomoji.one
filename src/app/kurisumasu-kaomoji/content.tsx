import type { Metadata } from "next";
import type { KaomojiCollectionGroup, KaomojiFaqProps, KaomojiHeroProps, KaomojiWhatProps, KaomojiWhyProps } from "@/features/kaomoji/types";
import { withCanonical } from "@/lib/seo";
import { uniq } from "@/features/kaomoji/data/uniq";

export const metadata: Metadata = {
  title: "クリスマス顔文字一覧（Kaomoji）｜Xmasお祝いメッセージをコピペ",
  description: "クリスマス顔文字（Kaomoji）をまとめて掲載。サンタ・ツリー・雪だるまなど、クリスマスの雰囲気を演出する顔文字をワンクリックでコピー。",
  ...withCanonical("/kurisumasu-kaomoji"),
};

export const kurisumasuKaomojiHeroContent: KaomojiHeroProps = {
  title: "クリスマス顔文字一覧",
  kaomoji: "🎄(*´▽`*)🎅",
  subtitle: "Xmasお祝いメッセージ【コピペ簡単】",
  description: "クリスマス顔文字（Kaomoji）は、クリスマスの特別な雰囲気を演出する表現。サンタやツリー、雪だるまで楽しいクリスマスを伝えましょう。",
  primaryCta: { href: "#list", label: "顔文字を探す" },
  secondaryCta: { href: "/", label: "ホームへ" },
};

export const kurisumasuKaomojiWhatContent: KaomojiWhatProps = {
  heading: "クリスマス顔文字（Kaomoji）とは？",
  intro: "クリスマス顔文字は、クリスマスのお祝いや雰囲気を表現するKaomoji。サンタクロースやツリーなどの記号で特別な日を演出します。",
  usageHeading: "使えるシーン",
  usageItems: ["クリスマスカードのメッセージ", "SNSでのクリスマス投稿", "LINEでのクリスマスメッセージ"],
  typesHeading: "クリスマス顔文字のタイプ",
  types: [
    { title: "サンタ系", description: "クリスマスの主役。", example: "例：🎅Merry Christmas🎅" },
    { title: "ツリー系", description: "クリスマスツリーで華やかに。", example: "例：🎄(*´▽`*)🎄" },
  ],
  featuresHeading: "クリスマスが伝わるパーツ",
  features: [
    { symbol: "🎅", title: "サンタ", description: "クリスマスの象徴。" },
    { symbol: "🎄", title: "ツリー", description: "華やかな雰囲気。" },
    { symbol: "⛄", title: "雪だるま", description: "冬の楽しさ。" },
  ],
};

export const kurisumasuKaomojiWhyContent: KaomojiWhyProps = {
  heading: "クリスマス顔文字を上手に使うコツ",
  subheading: "楽しいクリスマスを演出しましょう。",
  guideHeading: "使い分けガイド",
  guides: [
    { title: "お祝いメッセージ", bullets: ["華やかで楽しい雰囲気", "特別な日の演出"], recommend: "おすすめ：🎄Merry Christmas🎄" },
  ],
  cultureHeading: "クリスマスの文化",
  cultureBody: "クリスマスは一年で最も華やかなイベントの一つ。顔文字を使うことで、お祝いメッセージがより楽しく特別なものになります。",
  cultureCards: [{ title: "楽しいイベント", description: "一年で最も華やかな日。" }],
  tipsHeading: "組み合わせ例",
  tips: [{ title: "Merry Christmas＋メッセージ", body: "お祝いの言葉と一緒に。", example: "例：「🎄Merry Christmas🎄 素敵な一日を！」" }],
};

export const kurisumasuKaomojiFaqContent: KaomojiFaqProps = {
  heading: "よくある質問（FAQ）",
  subheading: "クリスマス顔文字、これだけ押さえればOK。",
  items: [{ question: "クリスマス顔文字はどうやってコピーできますか？", answer: "顔文字の右側にあるコピーアイコンを押すだけでコピーできます。" }],
};

export const kurisumasuKaomojiGroups: KaomojiCollectionGroup[] = [
  { title: "サンタ系", items: uniq(["🎅Merry Christmas🎅", "🎅(*´▽`*)🎅", "🎅✨"]).map((kaomoji) => ({ kaomoji, tags: ["クリスマス", "サンタ"] })) },
  { title: "ツリー系", items: uniq(["🎄Merry Christmas🎄", "🎄(*´▽`*)🎄", "✨🎄✨"]).map((kaomoji) => ({ kaomoji, tags: ["クリスマス", "ツリー"] })) },
  { title: "雪だるま系", items: uniq(["⛄Merry Christmas⛄", "⛄(*´▽`*)⛄"]).map((kaomoji) => ({ kaomoji, tags: ["クリスマス", "雪だるま"] })) },
];

export const kurisumasuKaomojiPlainText: string = uniq(kurisumasuKaomojiGroups.flatMap((group) => group.items.map((item) => item.kaomoji))).join("\n");
