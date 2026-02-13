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
  title: "行ってきます顔文字一覧（Kaomoji）｜出かける時の挨拶をコピペ",
  description:
    "行ってきます顔文字（Kaomoji）をまとめて掲載。元気な行ってきます・可愛い行ってきますまで、出かける時の挨拶に使える顔文字をワンクリックでコピー。LINE/X（Twitter）/Instagram/Discordにそのままコピペ。登録不要で無料。",
  ...withCanonical("/ittekimasu-kaomoji"),
};

export const ittekimasuKaomojiHeroContent: KaomojiHeroProps = {
  title: "行ってきます顔文字一覧",
  kaomoji: "(｡･ω･)ﾉﾞｲｯﾃｷﾏｰｽ",
  subtitle: "出かける時の挨拶【コピペ簡単】",
  description:
    "行ってきます顔文字（Kaomoji）は、家を出る時や外出する時の挨拶を表現するKaomoji。元気よく手を振って出かける様子や、行ってらっしゃいと返す相手への配慮まで、様々な出発の気持ちを伝えましょう。",
  primaryCta: { href: "#list", label: "顔文字を探す" },
  secondaryCta: { href: "/", label: "ホームへ" },
};

export const ittekimasuKaomojiWhatContent: KaomojiWhatProps = {
  heading: "行ってきます顔文字（Kaomoji）とは？",
  intro:
    "行ってきます顔文字は、外出する時の挨拶「行ってきます」を文字と記号で表現するKaomojiです。手を振る動作や笑顔を組み合わせて、元気な出発の気持ちを伝えられます。",
  usageHeading: "使えるシーン",
  usageItems: [
    "家を出る時の家族へのメッセージ",
    "仕事や学校に行く前の挨拶",
    "外出する時のLINEやSNS投稿",
    "友達と別れて帰る時",
    "オンライン会議から一時離席する時",
  ],
  typesHeading: "行ってきます顔文字のタイプ",
  types: [
    {
      title: "元気な行ってきます",
      description: "明るく前向きな出発の挨拶。",
      example: "例：(｡･ω･)ﾉﾞｲｯﾃｷﾏｰｽ  ＼(^o^)／行ってきます",
    },
    {
      title: "かわいい行ってきます",
      description: "親しみやすく可愛らしい表現。",
      example: "例：(*´꒳`*)ﾉ行ってきます  (｡◕‿◕｡)ﾉ行ってきま〜す",
    },
    {
      title: "シンプル",
      description: "使いやすい定番の表現。",
      example: "例：(´∀`)ﾉ行ってきます  (*´ω`*)ﾉ",
    },
  ],
  featuresHeading: "出発が伝わるパーツ",
  features: [
    {
      symbol: "ノ",
      title: "手を振る",
      description: "出かける時の定番の動作。",
    },
    {
      symbol: "ﾞ",
      title: "小さな手",
      description: "可愛らしく控えめな手振り。",
    },
    {
      symbol: "^",
      title: "笑顔",
      description: "元気で明るい出発を表現。",
    },
  ],
};

export const ittekimasuKaomojiWhyContent: KaomojiWhyProps = {
  heading: "行ってきます顔文字を上手に使うコツ",
  subheading: "相手や状況に合わせて、ぴったりの行ってきますを選びましょう。",
  guideHeading: "使い分けガイド",
  guides: [
    {
      title: "家族へ",
      bullets: ["温かく親しみやすい表現", "いってらっしゃいと返してもらいやすい"],
      recommend: "おすすめ：(｡･ω･)ﾉﾞｲｯﾃｷﾏｰｽ  (*´ω`*)ﾉ",
    },
    {
      title: "友達へ",
      bullets: ["元気で明るい印象", "カジュアルで使いやすい"],
      recommend: "おすすめ：＼(^o^)／行ってきます  ヾ(´∀`*)ﾉ",
    },
  ],
  cultureHeading: "出発の挨拶文化",
  cultureBody:
    "「行ってきます」は日本特有の出発の挨拶で、必ず帰ってくることを約束する温かい言葉です。顔文字を添えることで、ただの報告ではなく、相手への気遣いと明るい気持ちを伝えられます。",
  cultureCards: [
    { title: "帰りの約束", description: "また戻ってくることを伝える。" },
    { title: "相手への配慮", description: "行ってらっしゃいを促す挨拶。" },
  ],
  tipsHeading: "組み合わせ例",
  tips: [
    {
      title: "行ってきます＋予定",
      body: "どこに行くか添えると、会話が広がる。",
      example: "例：「買い物行ってきます(*´ω`*)ﾉ」",
    },
  ],
};

export const ittekimasuKaomojiFaqContent: KaomojiFaqProps = {
  heading: "よくある質問（FAQ）",
  subheading: "行ってきます顔文字、これだけ押さえればOK。",
  items: [
    {
      question: "行ってきます顔文字はどうやってコピーできますか？",
      answer:
        "顔文字の右側にあるコピーアイコンを押すだけでコピーできます。コピー後はLINEやSNSに貼り付けて使ってください。",
    },
    {
      question: "「行ってきます」と「行ってくる」の違いは？",
      answer:
        "「行ってきます」の方がより丁寧で一般的な表現です。「行ってくる」はよりカジュアルで、親しい相手に使います。",
    },
  ],
};

export const ittekimasuKaomojiGroups: KaomojiCollectionGroup[] = [
  {
    title: "元気な行ってきます",
    items: uniq([
      "(｡･ω･)ﾉﾞｲｯﾃｷﾏｰｽ",
      "＼(^o^)／行ってきます",
      "ヾ(´∀`*)ﾉ行ってきま〜す",
      "(*´▽`*)ﾉ行ってきます！",
      "(^-^)/行ってきます",
      "٩(ˊᗜˋ*)و行ってきます",
      "ヽ(*´∀｀*)ノ行ってきます",
      "(●´ω｀●)ﾉ行ってきます",
    ]).map((kaomoji) => ({ kaomoji, tags: ["行ってきます", "元気"] })),
  },
  {
    title: "かわいい",
    items: uniq([
      "(*´꒳`*)ﾉ行ってきます",
      "(｡◕‿◕｡)ﾉ行ってきま〜す",
      "(*´ω`*)ﾉ行ってきます",
      "(◍•ᴗ•◍)ﾉ行ってきます",
      "ฅ(＾・ω・＾ฅ)行ってきます",
      "(｡•̀ᴗ-)✧行ってきます",
    ]).map((kaomoji) => ({ kaomoji, tags: ["行ってきます", "かわいい"] })),
  },
  {
    title: "シンプル",
    items: uniq([
      "(´∀`)ﾉ行ってきます",
      "行ってきます(*´ω`*)ノ",
      "(･ω･)ﾉ行ってきます",
      "(｡･ω･)ﾉﾞ行ってきます",
      "行ってきます(^-^)ノ",
      "(*´∀｀*)ﾉ行ってきます",
    ]).map((kaomoji) => ({ kaomoji, tags: ["行ってきます", "シンプル"] })),
  },
];

export const ittekimasuKaomojiPlainText: string = uniq(
  ittekimasuKaomojiGroups.flatMap((group) => group.items.map((item) => item.kaomoji))
).join("\n");
