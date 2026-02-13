import type { Metadata } from "next";

import type {
  KaomojiCollectionGroup,
  KaomojiFaqProps,
  KaomojiHeroProps,
  KaomojiWhatProps,
  KaomojiWhyProps,
} from "@/features/kaomoji/types";

import { withCanonical } from "@/lib/seo";
import { uniq } from "@/features/kaomoji/data/uniq";

export const metadata: Metadata = {
  title: "挨拶顔文字一覧（Kaomoji）｜おはよう・こんにちは・さようならをコピペ",
  description:
    "挨拶顔文字（Kaomoji）をまとめて掲載。おはよう・こんにちは・こんばんは・さようなら・よろしくまで、様々な挨拶シーンに対応した顔文字をワンクリックでコピー。LINE/X（Twitter）/Instagram/Discordにそのままコピペ。登録不要で無料。スマホでもOK。",
  ...withCanonical("/aisatsu-kaomoji"),
};

export const aisatsuKaomojiHeroContent: KaomojiHeroProps = {
  title: "挨拶顔文字一覧",
  kaomoji: "(｡･ω･)ﾉﾞ ヾ(´∀`*)ﾉ",
  subtitle: "おはよう・こんにちは・さようなら【コピペ簡単】",
  description:
    "挨拶顔文字（Kaomoji）は、日常のコミュニケーションに温かみを添える大切な表現。朝の元気なおはようから、丁寧なお辞儀まで、あらゆる挨拶シーンに対応した顔文字で、心のこもった挨拶を届けましょう。",
  primaryCta: { href: "#list", label: "顔文字を探す" },
  secondaryCta: { href: "/", label: "ホームへ" },
};

export const aisatsuKaomojiWhatContent: KaomojiWhatProps = {
  heading: "挨拶顔文字（Kaomoji）とは？",
  intro:
    "挨拶顔文字は、文字と記号を組み合わせて様々な挨拶の気持ちを表現するKaomojiです。朝昼晩の時間帯別挨拶から、出会いと別れまで、シーンに合わせた表現が可能です。",
  usageHeading: "使えるシーン",
  usageItems: [
    "朝の挨拶：おはようで一日を元気にスタート",
    "昼の挨拶：こんにちはで親しみを表現",
    "夜の挨拶：こんばんはで丁寧な印象を",
    "別れの挨拶：さようならで気持ちよく締めくくり",
    "お礼の挨拶：ありがとうで感謝を伝える",
  ],
  typesHeading: "挨拶顔文字のタイプ",
  types: [
    {
      title: "基本の挨拶",
      description: "シンプルで使いやすい定番の挨拶表現。",
      example: "例：(^-^)ノ  (´∀`*)ﾉ",
    },
    {
      title: "かわいい挨拶",
      description: "親しみやすく可愛らしい雰囲気の挨拶。",
      example: "例：(*´∀｀*)ﾉ  ヾ(◕‿◕)ﾉ",
    },
    {
      title: "丁寧な挨拶",
      description: "フォーマルな場面でも使える礼儀正しい表現。",
      example: "例：(｡･ω･)ﾉﾞ  m(_ _)m",
    },
    {
      title: "元気な挨拶",
      description: "テンション高めで明るい印象の挨拶。",
      example: "例：＼(^o^)／  ヽ(´▽｀)ノ",
    },
  ],
  featuresHeading: "挨拶が伝わるパーツ",
  features: [
    {
      symbol: "ノ",
      title: "手を振る",
      description: "挨拶の定番動作。親しみやすさを演出。",
    },
    {
      symbol: "ﾞ",
      title: "小さな手",
      description: "控えめで可愛らしい手振りの表現。",
    },
    {
      symbol: "m(_ _)m",
      title: "お辞儀",
      description: "丁寧で礼儀正しい印象を与える。",
    },
    {
      symbol: "^",
      title: "笑顔の目",
      description: "明るく友好的な雰囲気を表現。",
    },
  ],
};

export const aisatsuKaomojiWhyContent: KaomojiWhyProps = {
  heading: "挨拶顔文字を上手に使うコツ",
  subheading: "時間帯や相手に合わせて、ぴったりの挨拶を選びましょう。",
  guideHeading: "使い分けガイド",
  guides: [
    {
      title: "朝の挨拶",
      bullets: ["元気な印象で一日をスタート", "眠そうな表情も可愛らしく使える"],
      recommend: "おすすめ：(*´∀｀*)ﾉｵﾊﾖｰ  (´∀`)ﾉおはよう",
    },
    {
      title: "昼の挨拶",
      bullets: ["親しみやすく明るい表現", "カジュアルな場面に最適"],
      recommend: "おすすめ：(｡･ω･)ﾉﾞｺﾝﾁｬ  ヾ(´∀`*)ﾉこんにちは",
    },
    {
      title: "夜の挨拶",
      bullets: ["落ち着いた雰囲気で丁寧に", "月や星の記号で夜らしさを"],
      recommend: "おすすめ：(*^▽^*)ﾉこんばんは  (｡･ω･)ﾉﾞ",
    },
    {
      title: "別れの挨拶",
      bullets: ["また会う約束を込めて", "感謝の気持ちも一緒に"],
      recommend: "おすすめ：(^-^)/~~  ヾ(´ω｀)ﾉﾞﾊﾞｲﾊﾞｲ",
    },
  ],
  cultureHeading: "挨拶のニュアンス文化",
  cultureBody:
    "日本の挨拶文化は、時間帯や相手との関係性を大切にします。挨拶顔文字は、その微妙な距離感や温度感を、デジタルコミュニケーションでも表現できる便利なツールです。",
  cultureCards: [
    { title: "時間帯への配慮", description: "朝昼晩を意識した挨拶で好印象。" },
    { title: "関係性の表現", description: "親しさや丁寧さを使い分けられる。" },
    { title: "温かみの演出", description: "文字だけより心が伝わる挨拶に。" },
  ],
  tipsHeading: "組み合わせ例",
  tips: [
    {
      title: "朝の挨拶＋一言",
      body: "おはようの後に一言添えると、より気持ちが伝わる。",
      example: "例：「おはよう(*´∀｀*)ﾉ 今日もよろしくね！」",
    },
    {
      title: "丁寧な挨拶＋お礼",
      body: "お辞儀と感謝を組み合わせて、誠実な印象に。",
      example: "例：「ありがとうございました m(_ _)m」",
    },
    {
      title: "別れの挨拶＋約束",
      body: "また会う約束を添えると、前向きな印象に。",
      example: "例：「じゃあまたね (^-^)/~~ また明日！」",
    },
  ],
};

export const aisatsuKaomojiFaqContent: KaomojiFaqProps = {
  heading: "よくある質問（FAQ）",
  subheading: "挨拶顔文字、これだけ押さえればOK。",
  items: [
    {
      question: "挨拶顔文字はどうやってコピーできますか？",
      answer:
        "顔文字の右側にあるコピーアイコンを押すだけでコピーできます。コピー後はLINEやSNSに貼り付けて使ってください。",
    },
    {
      question: "時間帯別の挨拶はどう使い分ける？",
      answer:
        "朝はおはよう系、昼はこんにちは系、夕方以降はこんばんは系を使うのが基本です。ただし、親しい相手なら時間帯をあまり気にしなくても大丈夫です。",
    },
    {
      question: "ビジネスシーンでも使える？",
      answer:
        "シンプルで丁寧な挨拶顔文字なら使えます。(｡･ω･)ﾉﾞやm(_ _)mなど、控えめな表現を選ぶと良いでしょう。",
    },
    {
      question: "タグは何のためにありますか？",
      answer:
        "検索用の目印です。「おはよう」「こんにちは」「さようなら」などで絞り込めるので、使いたい挨拶をすばやく見つけられます。",
    },
  ],
};

export const aisatsuKaomojiGroups: KaomojiCollectionGroup[] = [
  {
    title: "基本の挨拶",
    items: uniq([
      "(^-^)ノ",
      "(´∀`*)ﾉ",
      "(･ω･)ﾉ",
      "(｡･ω･)ﾉﾞ",
      "ヾ(´∀`*)ﾉ",
      "(^o^)/",
      "(＾▽＾)ノ",
      "ヽ(´▽｀)ノ",
      "(o^□^o)ノ",
      "( ´ ▽ ` )ﾉ",
    ]).map((kaomoji) => ({ kaomoji, tags: ["挨拶", "基本"] })),
  },
  {
    title: "かわいい挨拶",
    items: uniq([
      "(*´∀｀*)ﾉ",
      "ヾ(◕‿◕)ﾉ",
      "(ﾉ◕ヮ◕)ﾉ",
      "(｡◕‿◕｡)ﾉ",
      "(*´ω｀*)ﾉ",
      "(○´∀｀○)ﾉ",
      "(*´▽`*)ﾉ",
      "ヾ(＠⌒ー⌒＠)ノ",
      "ヾ(o´∀`o)ﾉ",
      "(*´꒳`*)ﾉ",
    ]).map((kaomoji) => ({ kaomoji, tags: ["挨拶", "かわいい"] })),
  },
  {
    title: "おはよう",
    items: uniq([
      "(*´∀｀*)ﾉｵﾊﾖｰ",
      "(´∀`)ﾉおはよう",
      "ヾ(*´∀`*)ノおはよ～♪",
      "٩(*ˊ︶`*)۶おはよ〜",
      "(○´ω｀)ﾉﾊﾞ――ｨ",
      "おはよう(´・ω・)ノ",
      "(･ω･*)ﾉнёιιο!",
      "☆(≧∀≦*)ﾉｵﾊﾖｯ",
      "(*´꒳`*)ﾉおはよ♪",
      "ฅʕ,,•ꈊ•,,ʔおはよう",
    ]).map((kaomoji) => ({ kaomoji, tags: ["おはよう", "朝"] })),
  },
  {
    title: "こんにちは・こんばんは",
    items: uniq([
      "(｡･ω･)ﾉﾞｺﾝﾁｬ",
      "ヾ(´∀`*)ﾉこんにちは",
      "(*^▽^*)ﾉこんばんは",
      "(･∀･)ﾉｺﾝﾊﾞﾝﾜ",
      "こんにちは(*´ω`*)ノ",
      "こんばんは(｡･ω･｡)ﾉ",
      "(人´・ω・）こんちぁ♪",
      "(*ゝω･*)ﾉｺﾝﾁｬ☆",
      "(o'ω`o)ﾉﾞ",
      "(*´∀｀*)ﾉこんにちは～",
    ]).map((kaomoji) => ({ kaomoji, tags: ["こんにちは", "こんばんは"] })),
  },
  {
    title: "さようなら・バイバイ",
    items: uniq([
      "(^-^)/~~",
      "ヾ(´ω｀)ﾉﾞﾊﾞｲﾊﾞｲ",
      "(T_T)/~~~",
      "ε=┏(*`＞ω<)┛ｼﾞｬｧﾈ",
      "(･ω･)ﾉSAYONARA",
      "(/｡'(ｪ)')ﾉｼﾏﾀﾈｰ",
      "(/_・、)/~~",
      "(●´ω｀)ﾉﾊﾞ――ｨ",
      "ヾ(･ω･*)ﾉじゃあね",
      "(^o^)/またね～",
    ]).map((kaomoji) => ({ kaomoji, tags: ["さようなら", "バイバイ"] })),
  },
  {
    title: "よろしく・お礼",
    items: uniq([
      "m(_ _)m",
      "(❃ӦωӦ)ﾉﾖﾛｼｸﾈｯ♪",
      "(★´ω｀)ﾉ【よろしく】",
      "(/｡'(ｪ)')よろしクマ",
      "(v^-ﾟ)Thanks♪",
      "ありがとう(>᎑<`๑)♡",
      "ヾ(*´∀`*)ﾉよろしく〜",
      "ありがとぅ*.+ﾟ(๓´͈˘`͈๓)",
      "よろしく(*≧∀≦)ﾈｰ♪",
      "(｡◕‿◕｡)ﾉよろしくね",
    ]).map((kaomoji) => ({ kaomoji, tags: ["よろしく", "お礼"] })),
  },
];

export const aisatsuKaomojiPlainText: string = uniq(
  aisatsuKaomojiGroups.flatMap((group) => group.items.map((item) => item.kaomoji))
).join("\n");
