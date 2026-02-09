import type { Metadata } from "next";

import type {
  KaomojiCollectionGroup,
  KaomojiFaqProps,
  KaomojiHeroProps,
  KaomojiWhatProps,
  KaomojiWhyProps,
} from "@/features/kaomoji/types";
import { uniq } from "@/features/kaomoji/data/uniq";
import { withCanonical } from "@/lib/seo";

export const metadata: Metadata = {
  title: "アンパンマン顔文字一覧（Kaomoji）｜可愛い・元気・アンパンチの表情をコピペ",
  description:
    "アンパンマンの特徴的な丸い顔と赤いほっぺを表現した顔文字をまとめて掲載。基本表情から可愛い・元気・アクション系まで、ワンクリックでコピーできます。",
  ...withCanonical("/anpanman-kaomoji"),
};

export const anpanmanKaomojiHeroContent: KaomojiHeroProps = {
  title: "アンパンマン顔文字一覧",
  kaomoji: "(● ̍̑⚈ ̍̑●)  (●'◡'●)  (●'▽'●)",
  subtitle: "元気・勇気・やさしさを伝えるアンパンマン顔文字",
  description:
    "アンパンマンの丸い顔と赤いほっぺの特徴を活かした顔文字を厳選。笑顔・元気・アクションまで、楽しく使える表情を集めました。",
  primaryCta: { href: "#list", label: "一覧を見る" },
  secondaryCta: { href: "/", label: "トップ" },
};

export const anpanmanKaomojiWhatContent: KaomojiWhatProps = {
  heading: "アンパンマン顔文字とは？",
  intro:
    "アンパンマン顔文字は、丸い顔と赤いほっぺをモチーフにしたヒーロー系のKaomojiです。元気や勇気、やさしさを表現したいときにぴったりで、子供向けのやりとりや応援メッセージでも活躍します。",
  usageHeading: "使えるシーン",
  usageItems: [
    "子供とのメッセージや家族のやりとりで使いたいとき",
    "元気を出してほしい相手を応援したいとき",
    "楽しい気分や正義感を伝えたいとき",
    "可愛い雰囲気を演出したいとき",
    "ヒーロー系の話題で盛り上げたいとき",
  ],
  typesHeading: "アンパンマン顔文字の種類",
  types: [
    {
      title: "基本系",
      description: "丸い顔と赤いほっぺの定番表情。使いやすいベースの顔文字です。",
      example: "例: (●'●'●)  (● ̍̑⚈ ̍̑●)",
    },
    {
      title: "可愛い系",
      description: "ハートやキラキラで可愛さを強調。柔らかい雰囲気に。",
      example: "例: (●'♡'●)  (●'☆'●)  (●'✨'●)",
    },
    {
      title: "嬉しい・元気系",
      description: "笑顔やテンションの高さを表現。応援や喜びに向いています。",
      example: "例: (●'◡'●)  (●'▽'●)  (●'♪'●)",
    },
    {
      title: "アクション系",
      description: "腕や動きでヒーローらしさを表現。アクションのニュアンスに。",
      example: "例: ┏(● ̍̑⚈ ̍̑●)┓  ╰(● ̍̑⚈ ̍̑●)╯",
    },
    {
      title: "表情バリエーション",
      description: "ちょっとした感情の差を表せる顔文字。会話の温度感に合わせて使えます。",
      example: "例: (●'o'●)  (●'~'●)  (●'^'●)",
    },
  ],
  featuresHeading: "アンパンマン顔文字の特徴",
  features: [
    {
      symbol: "●",
      title: "丸い顔と赤いほっぺ",
      description: "アンパンマンらしい特徴をそのまま文字で表現できます。",
    },
    {
      symbol: "✨",
      title: "元気・勇気の表現",
      description: "応援や励ましのメッセージに合わせやすい表情が多めです。",
    },
    {
      symbol: "🎉",
      title: "楽しい雰囲気づくり",
      description: "笑顔やアクションで場を明るくしたいときに便利です。",
    },
  ],
};

export const anpanmanKaomojiWhyContent: KaomojiWhyProps = {
  heading: "アンパンマン顔文字の使い分け",
  subheading: "シーンに合わせて表情を変えると、伝えたい気持ちがより届きます。",
  guideHeading: "使い分けのコツ",
  guides: [
    {
      title: "応援したいとき",
      bullets: ["元気や勇気を伝えたいときに最適", "明るい印象で励ましやすい"],
      recommend: "おすすめ: (●'◡'●)  (●'▽'●)",
    },
    {
      title: "可愛い雰囲気にしたいとき",
      bullets: ["やさしい印象にしたい会話に", "子供向けのやりとりにも使いやすい"],
      recommend: "おすすめ: (●'♡'●)  (●'☆'●)",
    },
    {
      title: "動きのある表現をしたいとき",
      bullets: ["ヒーローっぽさを出したい", "アクション系のリアクションに"],
      recommend: "おすすめ: ┏(● ̍̑⚈ ̍̑●)┓  ╰(● ̍̑⚈ ̍̑●)╯",
    },
  ],
  cultureHeading: "アンパンマン顔文字の魅力",
  cultureBody:
    "アンパンマンの顔文字は、元気と勇気、やさしさを一目で伝えられるのが魅力です。表情の違いを使い分ければ、応援から日常の会話まで幅広く活躍します。",
  cultureCards: [
    { title: "元気", description: "笑顔で前向きな雰囲気に" },
    { title: "やさしさ", description: "相手に寄り添う印象を作れる" },
    { title: "ヒーロー感", description: "頼もしさや勇気を表現できる" },
  ],
  tipsHeading: "すぐ使える例文",
  tips: [
    {
      title: "応援メッセージ",
      body: "ひと言に元気な表情を添えると、励ましが伝わりやすくなります。",
      example: "例: がんばって！ (●'◡'●)",
    },
    {
      title: "楽しいリアクション",
      body: "嬉しい気分を伝えたいときに。",
      example: "例: やったね！ (●'♪'●)",
    },
    {
      title: "ヒーローっぽく",
      body: "アクション系の顔文字で雰囲気アップ。",
      example: "例: アンパンチ！ ┏(● ̍̑⚈ ̍̑●)┓",
    },
  ],
};

export const anpanmanKaomojiFaqContent: KaomojiFaqProps = {
  heading: "アンパンマン顔文字のよくある質問",
  subheading: "ワンクリックでコピーして、そのまま使えます。",
  items: [
    {
      question: "アンパンマン顔文字はどんな場面で使えますか？",
      answer:
        "元気づけたいときや可愛い雰囲気を出したいときに便利です。家族や子供向けのメッセージでも使いやすい表情が揃っています。",
    },
    {
      question: "人気の表情はどれですか？",
      answer:
        "基本の(● ̍̑⚈ ̍̑●)や、笑顔の(●'◡'●)(●'▽'●)が使いやすく人気です。",
    },
    {
      question: "スマホでも表示されますか？",
      answer:
        "多くの端末で表示できますが、特殊記号の見え方は環境によって差があります。",
    },
    {
      question: "アクション系はどんなときに使うのが良いですか？",
      answer:
        "ヒーローっぽさや元気な動きを伝えたいときにおすすめです。",
    },
    {
      question: "コピーできないときはどうすればいいですか？",
      answer:
        "ブラウザの権限設定でコピーが制限されることがあります。選択して手動コピーもお試しください。",
    },
  ],
};

export const anpanmanKaomojiGroups: KaomojiCollectionGroup[] = [
  {
    title: "基本的なアンパンマン",
    items: uniq([
      "(●'●'●)",
      "(○'○'○)",
      "(⚪'⚪'⚪)",
      "(⚫'⚫'⚫)",
      "О'̑〇̮'̑О",
      "(● ̍̑⚈ ̍̑●)",
      "(⚈ ̍̑⚈ ̍̑⚈)",
      "(● ̍̑● ̍̑●)",
    ]).map((kaomoji) => ({ kaomoji, tags: ["基本", "顔", "アンパンマン"] })),
  },
  {
    title: "嬉しい・元気",
    items: uniq([
      "(●'◡'●)",
      "(●'▽'●)",
      "(○'▽'○)",
      "(●'∀'●)",
      "(○'∀'○)",
      "(●'∇'●)",
      "(●'♪'●)",
      "(● ̍̑⚈ ̍̑●)ﾉ",
      "ヾ(● ̍̑⚈ ̍̑●)",
      "(● ̍̑⚈ ̍̑●)∩",
      "┏(● ̍̑⚈ ̍̑●)┓",
      "┗(● ̍̑⚈ ̍̑●)┛",
    ]).map((kaomoji) => ({ kaomoji, tags: ["元気", "笑顔", "アンパンマン"] })),
  },
  {
    title: "可愛いアンパンマン",
    items: uniq([
      "(○'ω'○)",
      "(●'ω'●)",
      "(●'3'●)",
      "(●'ε'●)",
      "(●'*'●)",
      "(●'♡'●)",
      "(●'♢'●)",
      "(●'☆'●)",
      "(●'⭐'●)",
      "(●'✨'●)",
      "(● ̍̑⚈ ̍̑●)っ✨",
      "✿(● ̍̑⚈ ̍̑●)✿",
    ]).map((kaomoji) => ({ kaomoji, tags: ["可愛い", "キラキラ", "アンパンマン"] })),
  },
  {
    title: "アンパンチ＆アクション",
    items: uniq([
      "┏(● ̍̑⚈ ̍̑●)┓",
      "┗(● ̍̑⚈ ̍̑●)┛",
      "╰(● ̍̑⚈ ̍̑●)╯",
      "∩(● ̍̑⚈ ̍̑●)∩",
      "♪৲(● ̍̑⚈ ̍̑●)৴",
      "(● ̍̑⚈ ̍̑●)৴♪",
      "⊂(● ̍̑⚈ ̍̑●)⊃",
    ]).map((kaomoji) => ({ kaomoji, tags: ["アクション", "アンパンチ", "アンパンマン"] })),
  },
  {
    title: "いろいろな表情",
    items: uniq([
      "(●'o'●)",
      "(●'~'●)",
      "(●'^'●)",
      "(●'v'●)",
      "(●'∩'●)",
      "(○'v'○)",
      "(○'∩'○)",
    ]).map((kaomoji) => ({ kaomoji, tags: ["表情", "バリエーション", "アンパンマン"] })),
  },
];
