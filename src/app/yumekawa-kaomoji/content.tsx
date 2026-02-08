import type { Metadata } from "next";

import type {
  KaomojiFaqProps,
  KaomojiHeroProps,
  KaomojiWhatProps,
  KaomojiWhyProps,
} from "@/features/kaomoji/types";
import { withCanonical } from "@/lib/seo";

export const metadata: Metadata = {
  title: "ゆめかわ顔文字一覧（Kaomoji）｜夢かわいい・パステル・天使・キラキラ",
  description:
    "ゆめかわ顔文字（Kaomoji）を厳選して掲載。パステル・天使・キラキラなど、夢かわいい表情がすぐ見つかります。検索＆ワンクリックでコピーして、LINE/X（Twitter）/Instagram/Discordにそのままコピペ。プロフィールや一言にも便利。登録不要で無料。スマホでもOK。",
  ...withCanonical("/yumekawa-kaomoji"),
};

export const yumekawaKaomojiHeroContent: KaomojiHeroProps = {
  title: "ゆめかわ顔文字",
  kaomoji: "꒰⑅•ᴗ•⑅꒱✨",
  subtitle: "パステル・天使・キラキラの顔文字184個以上",
  description:
    "夢かわいい世界観のふんわり可愛い顔文字を、カテゴリ別にまとめました。パステル・天使・星・リボン・特殊記号など、ゆめかわ要素たっぷりのコピペ用一覧です。",
  primaryCta: { href: "#list", label: "一覧を見る" },
  secondaryCta: { href: "/", label: "トップ" },
};

export const yumekawaKaomojiWhatContent: KaomojiWhatProps = {
  heading: "ゆめかわ顔文字とは",
  intro:
    "ゆめかわ顔文字は、「夢かわいい（ゆめかわいい）」の世界観を表現した顔文字です。ふんわりやさしい雰囲気、パステル感、天使・星・リボンのようなモチーフ、キラキラした特殊記号などが特徴で、メッセージをやさしく可愛く彩れます。",
  usageHeading: "使用場面",
  usageItems: [
    "友達へのやさしいメッセージ",
    "SNS投稿の雰囲気づくり",
    "プロフィール・バイオの装飾",
    "ブログやWebのワンポイント",
    "感謝・嬉しい気持ちの表現",
    "応援メッセージをふんわり伝える",
    "おはよう・おやすみの挨拶",
  ],
  typesHeading: "ゆめかわ顔文字の種類",
  types: [
    {
      title: "基本のゆめかわ",
      description: "シンプルで使いやすい定番スタイル",
      example: "例: ꒰⑅•ᴗ•⑅꒱、ʚ♡ɞ、໒꒰ྀི´ ˘ ` ꒱ྀིა",
    },
    {
      title: "キラキラゆめかわ",
      description: "星や光で輝く装飾的なスタイル",
      example: "例: ✩ ꒰ .˚₊ ପ( ॑꒳ ॑)、𖦊ັ ⑅𓂃 .⋆、♡̷⋆͛",
    },
    {
      title: "天使系ゆめかわ",
      description: "天使のような優しい雰囲気",
      example: "例: ଘ꒰⸝⸝•༝•⸝⸝꒱ଓ、˙˚ʚɞ˚˙、ପ✩⃛ଓ ༘*⑅",
    },
    {
      title: "絵文字mixゆめかわ",
      description: "絵文字を組み合わせた華やかなスタイル",
      example: "例: ♡⁺.🎠゜、༘⋆🌷🫧💭₊˚ෆ、🌙꒰ᐢ. ̫ .ᐢ꒱🌙",
    },
    {
      title: "シンプルゆめかわ",
      description: "記号を控えめにしたナチュラル系",
      example: "例: ( ´ ꒳ ` )、( ˶ˆᴗˆ˶ )、( ´͈ ᵕ `͈ )",
    },
    {
      title: "特殊記号ゆめかわ",
      description: "特殊文字で個性的な表現",
      example: "例: 𖦊ັ、𖹭░ ༘✩、𓂂𓏸𓂂𓇸𓂂𓂃𓈒",
    },
  ],
  featuresHeading: "ゆめかわ顔文字の特徴",
  features: [
    {
      symbol: "☁️",
      title: "優しい雰囲気",
      description:
        "ふんわりした柔らかい印象で、文章のトーンをやさしくできる",
    },
    {
      symbol: "✨",
      title: "高い装飾性",
      description:
        "特殊記号や絵文字を組み合わせて、キラキラ感を出せる",
    },
    {
      symbol: "🎀",
      title: "汎用性の高さ",
      description:
        "シンプル〜装飾系まで揃っていて、場面に合わせて選べる",
    },
    {
      symbol: "🌙",
      title: "夢のような世界観",
      description:
        "パステル・天使・星などのモチーフで、ゆめかわ感を作れる",
    },
  ],
};

export const yumekawaKaomojiWhyContent: KaomojiWhyProps = {
  heading: "ゆめかわ顔文字の使い方",
  subheading: "シンプルからキラキラまで、雰囲気に合わせて使い分けましょう。",
  guideHeading: "スタイル別おすすめ",
  guides: [
    {
      title: "シンプルスタイル",
      bullets: ["普段の会話に混ぜやすい", "可愛さは出しつつ主張しすぎない"],
      recommend: "例: おはよう( ´ ꒳ ` ) / ありがとう( ˶ˆᴗˆ˶ )",
    },
    {
      title: "キラキラスタイル",
      bullets: ["特別感を出したいときに", "投稿や報告を華やかにできる"],
      recommend: "例: やったー✩ ꒰ .˚₊ ପ( ॑꒳ ॑) / すごい！𖦊ັ ⑅𓂃 .⋆",
    },
    {
      title: "天使スタイル",
      bullets: ["ねぎらい・やさしさを伝えたいときに", "ふんわり癒し系の印象に"],
      recommend: "例: お疲れ様ଘ꒰⸝⸝•༝•⸝⸝꒱ଓ / いつもありがとう˙˚ʚɞ˚˙",
    },
    {
      title: "絵文字mixスタイル",
      bullets: ["SNSで雰囲気を盛りたいときに", "カラフルで目を引く"],
      recommend: "例: おやすみ🌙꒰ᐢ. ̫ .ᐢ꒱🌙 / 嬉しい༘⋆🌷🫧💭₊˚ෆ",
    },
  ],
  cultureHeading: "ゆめかわとは？",
  cultureBody:
    "ゆめかわは「夢かわいい」の略で、パステルカラー・天使・星・リボンなど、夢の中みたいにやさしく可愛い世界観を表現するスタイルです。",
  cultureCards: [
    {
      title: "パステルのやさしさ",
      description: "やわらかな色合いを連想させる、ふんわりした空気感。",
    },
    {
      title: "天使・星・リボン",
      description: "夢っぽいモチーフで、やさしい可愛さを足せる。",
    },
    {
      title: "装飾と個性",
      description: "特殊記号や絵文字で、キラキラ感や個性を出せる。",
    },
  ],
  tipsHeading: "すぐ使える例文",
  tips: [
    {
      title: "挨拶メッセージ",
      body: "短い一言に添えるだけで、印象がやさしくなります。",
      example: "例: おはよう꒰⑅•ᴗ•⑅꒱✨ / またねʚ♡ɞ",
    },
    {
      title: "感謝の表現",
      body: "感謝を可愛く伝えたいときにおすすめです。",
      example: "例: ありがとう໒꒰ྀི´ ˘ ` ꒱ྀིა / 助かった♡̷⋆͛",
    },
    {
      title: "応援メッセージ",
      body: "重くならずに、ふんわり背中を押せます。",
      example:
        "例: 頑張って✩ ⑅゜˖☽ ⑅ / 応援してる໒꒰ྀི ˶• ༝ •˶ ꒱ྀིა",
    },
    {
      title: "SNS投稿",
      body: "見出しや一言の飾りとして使うと映えます。",
      example: "例: ✨今日のコーデ✨ ⊹₊꒷︶꒷꒦‧₊˚⊹",
    },
  ],
};

export const yumekawaKaomojiFaqContent: KaomojiFaqProps = {
  heading: "ゆめかわ顔文字よくある質問",
  subheading: "ワンクリックでコピーして、そのまま使えます。",
  items: [
    {
      question: "ゆめかわ顔文字はどんな時に使いますか？",
      answer:
        "ゆめかわ顔文字は、可愛らしい雰囲気を演出したい時、優しい気持ちを伝えたい時、ふんわりした印象のメッセージにしたい時などに使います。SNSの投稿、友達とのメッセージ、プロフィール、ブログなど幅広く活用できます。",
    },
    {
      question: "ゆめかわとパステルの違いは？",
      answer:
        "ゆめかわは「夢かわいい」の略で、パステルカラー、天使、星、リボンなど、夢の中のような優しく可愛い世界観を表現するスタイルです。パステルは色調を指しますが、ゆめかわはそれを含む総合的な可愛いスタイルを意味します。",
    },
    {
      question: "量産型の顔文字とゆめかわ顔文字の違いは？",
      answer:
        "ゆめかわ顔文字は夢のような優しい雰囲気に特化していますが、量産型顔文字はより幅広いスタイルを含みます。ゆめかわは特にパステル、天使、星などのモチーフが特徴的で、ふんわりとした印象が強いです。",
    },
    {
      question: "特殊記号を使った顔文字はどうやってコピーしますか？",
      answer:
        "特殊記号を含む顔文字も、通常の顔文字と同じようにコピー＆ペーストで使用できます。スマートフォンでもPCでも、テキストとして選択してコピーすれば、そのまま貼り付けて使えます。",
    },
    {
      question: "ゆめかわ顔文字はビジネスで使えますか？",
      answer:
        "ゆめかわ顔文字は非常にカジュアルな印象なので、フォーマルなビジネスシーンでは避けた方が良いでしょう。ただし、クリエイティブな業界や親しい同僚との私的なやり取りでは、場の雰囲気を和ませるのに効果的です。",
    },
  ],
};
