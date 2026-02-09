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
  title: "可愛い 顔文字一覧（Kaomoji）｜kawaii系をコピペで簡単",
  description:
    "可愛い 顔文字（kawaii/Kaomoji）をまとめて掲載。ハート・動物・照れ顔など、気分に合う可愛い表情がすぐ見つかります。検索＆ワンクリックでコピーして、LINE/X（Twitter）/Instagram/Discordにそのままコピペ。登録不要で無料。スマホでもOK。すぐ使えます。",
  ...withCanonical("/kawaii-kaomoji"),
};

export const kawaiiKaomojiHeroContent: KaomojiHeroProps = {
  title: "可愛い 顔文字一覧",
  kaomoji: "(｡♥‿♥｡)",
  subtitle:
    "可愛い 顔 文字（kawaii）を厳選｜ハート・動物・照れ顔をコピペで簡単",
  description:
    "可愛い 顔 文字（可愛い顔文字 / Kaomoji）は、短い一言に“やさしい雰囲気”を足せる日本発のテキスト表現。かわいい・照れ・好きなどの気持ちを、SNSやチャットで自然に伝えたいときに、今すぐコピペで使えます。",
  primaryCta: { href: "#list", label: "顔文字を探す" },
  secondaryCta: { href: "/", label: "ホームへ" },
};

export const kawaiiKaomojiWhatContent: KaomojiWhatProps = {
  heading: "可愛い 顔文字（Kaomoji）とは？",
  intro:
    "可愛い 顔文字（Kaomoji）は、記号や文字を組み合わせて作る“かわいい表情”のテキスト。emojiより細かいニュアンスが出しやすく、語尾の温度感・照れ・好きの気持ちまで自然に伝えられます。",
  usageHeading: "使えるシーン",
  usageItems: [
    "LINE・チャット：会話をふんわりやわらかくする",
    "SNS投稿：短文の印象を可愛くして反応を引き出す",
    "あいさつ・お礼：丁寧さを保ちつつ冷たさを消す",
    "応援・励まし：強すぎない“やさしい応援”ができる",
    "プロフィール・署名：雰囲気をkawaii寄りに整える",
  ],
  typesHeading: "可愛い 顔文字の種類",
  types: [
    {
      title: "ハート系",
      description: "好き・ありがとう・ときめきを、やさしく表現できる定番。",
      example: "例：(｡♥‿♥｡)  (ღ˘⌣˘ღ)  ₍ᐢ •͈ ༝ •͈ ᐢ₎♡",
    },
    {
      title: "動物系",
      description: "猫・くま・うさぎなど、可愛さが直球で伝わる定番。",
      example: "例：ฅ^•ﻌ•^ฅ  ʕ•ﻌ•ʔ",
    },
    {
      title: "照れ系",
      description: "かわいい・恥ずかしい・てへ、のニュアンスを出したいときに。",
      example: "例：(*/ω＼*)  (//∇//)  (｡>﹏<｡)",
    },
    {
      title: "擬音（もきゅ）系",
      description: "甘さを足して“ゆるかわ”に。距離感を縮めたいときに便利。",
      example: "例：(*´v｀)ﾓｷｭ  ﾓｷｭ(｡´•ㅅ•｡)",
    },
  ],
  featuresHeading: "可愛い 顔文字の“パーツ”",
  features: [
    {
      symbol: "♡",
      title: "ハート",
      description: "好意や感謝の温度感を上げて、可愛い印象にまとめられる。",
    },
    {
      symbol: "•◡•",
      title: "きらっと目元",
      description: "微差で表情が変わるので、ニュアンス調整に強い。",
    },
    {
      symbol: "〃",
      title: "照れ記号",
      description: "恥ずかしい・てれる気持ちが出て、可愛い空気を作れる。",
    },
    {
      symbol: "ฅ",
      title: "ねこ爪モチーフ",
      description: "動物っぽさが出て、一気に可愛い顔文字寄りになる。",
    },
  ],
};

export const kawaiiKaomojiWhyContent: KaomojiWhyProps = {
  heading: "可愛い 顔文字が“効く”理由",
  subheading: "一言がやわらぐ。空気が丸くなる。",
  guideHeading: "場面別の使い分け",
  guides: [
    {
      title: "友だちとのチャット",
      bullets: ["照れや甘えを自然に出せる", "文末がやわらかくなる"],
      recommend: "おすすめ：(｡•̀ᴗ-)✧  (*´꒳`*)",
    },
    {
      title: "SNS投稿",
      bullets: ["短文の印象を可愛く整える", "リアクションをもらいやすい"],
      recommend: "おすすめ：ꉂ(ˊᗜˋ*)  (◕‿◕)",
    },
    {
      title: "お礼・あいさつ",
      bullets: ["丁寧なのに冷たく見えない", "相手に寄り添う雰囲気が出る"],
      recommend: "おすすめ：₍ᐢ •͈ ༝ •͈ ᐢ₎♡  (♡˙︶˙♡)",
    },
    {
      title: "応援メッセージ",
      bullets: ["強い圧になりにくい", "“やさしい応援”ができる"],
      recommend: "おすすめ：ᕙ(•̀ᴗ•́)ᕘ  ฅ^•ﻌ•^ฅがお～♪",
    },
  ],
  cultureHeading: "“可愛い”と顔文字",
  cultureBody:
    "「可愛い」は見た目だけでなく、相手に寄り添う“やさしさ”の表現でもあります。可愛い 顔文字（Kaomoji）は、その空気感をテキストだけで再現できる便利な方法。文章の角を取って、気持ちを伝えやすくしてくれます。",
  cultureCards: [
    { title: "やわらぐ", description: "言葉のトゲが取れて、印象がマイルドになる。" },
    { title: "伝わる", description: "感情の温度が見えるので、誤解が減る。" },
    { title: "軽い", description: "コピペで使える。スタンプより手軽。" },
  ],
  tipsHeading: "可愛い 顔文字のコツ",
  tips: [
    {
      title: "一文にひとつだけ",
      body: "使いすぎない方が自然に見えて、可愛さが残る。",
      example: "例：「おはよう٩꒰｡•◡•｡꒱۶」",
    },
    {
      title: "相手に合わせて強さを調整",
      body: "仲の良い相手は甘め、仕事は控えめにするとバランスが良い。",
      example: "例：「了解です (｀・ω・´)ゞ」",
    },
    {
      title: "検索→カテゴリで微調整",
      body: "まずは気分を検索して、カテゴリで“ちょうどいい”を選ぶ。",
      example: "例：検索「かわいい / ありがとう / 泣く」",
    },
  ],
};

export const kawaiiKaomojiFaqContent: KaomojiFaqProps = {
  heading: "よくある質問（FAQ）",
  subheading: "可愛い 顔文字を、迷わずコピペ。",
  items: [
    {
      question: "可愛い 顔文字はどうやってコピーできますか？",
      answer:
        "一覧の顔文字をクリック（またはコピーアイコン）するだけでコピーできます。コピーしたら、そのままLINEやSNSに貼り付けてください。",
    },
    {
      question: "可愛い 顔文字の“定番”は？",
      answer:
        "迷ったら「(*´꒳`*)」「(｡•̀ᴗ-)✧」「(｡♥‿♥｡)」あたりが使いやすいです。どんな文章にもなじみやすく、可愛さも十分です。",
    },
    {
      question: "スマホで表示が崩れることはありますか？",
      answer:
        "アプリやフォントによって見え方が変わる場合があります。投稿前に一度貼って確認するのがおすすめです。",
    },
    {
      question: "商用でも使えますか？",
      answer:
        "はい。SNS・ブログ・広告などにも利用できます。ただし、顔文字そのものを商品として販売する行為はお控えください。",
    },
  ],
};

export const kawaiiKaomojiGroups: KaomojiCollectionGroup[] = [
  {
    title: "可愛い 顔 文字｜人気・定番",
    items: uniq([
      "(*´꒳`*)",
      "(｡•̀ᴗ-)✧",
      "(´｡• ᵕ •｡`)",
      "(๑>◡<๑)",
      "(≧▽≦)",
      "ꉂ(ˊᗜˋ*)",
      "(◕‿◕)",
      "⸜(*ˊᗜˋ*)⸝",
      "(*ﾉωﾉ)",
      "(*/ω＼*)",
    ]).map((kaomoji) => ({ kaomoji, tags: ["可愛い", "kawaii", "定番"] })),
  },
  {
    title: "照れ・てへ",
    items: uniq([
      "(ﾉ´ヮ`)ﾉ*: ･ﾟ",
      "(//∇//)",
      "(〃ﾉωﾉ)",
      "(*ﾉ∀`*)",
      "(///ω///)",
      "(๑´ڡ`๑)",
      "(๑>ᴗ<๑)",
      "(｡>﹏<｡)",
      "(´>ω<`)",
    ]).map((kaomoji) => ({ kaomoji, tags: ["可愛い", "照れ"] })),
  },
  {
    title: "ハート・好き",
    items: uniq([
      "(｡♥‿♥｡)",
      "(♡˙︶˙♡)",
      "(*˘︶˘*).｡.:*♡",
      "(´｡• ᵕ •｡`) ♡",
      "♡(｡- ω -)",
      "₍ᐢ •͈ ༝ •͈ ᐢ₎♡",
      "つ♡⊂",
      "(ღ˘⌣˘ღ)",
    ]).map((kaomoji) => ({ kaomoji, tags: ["可愛い", "ハート"] })),
  },
  {
    title: "動物（ねこ・くま・うさぎ）",
    items: uniq([
      "(=^･ω･^=)",
      "ฅ^•ﻌ•^ฅ",
      "(ฅ'ω'ฅ)",
      "ʕ•ﻌ•ʔ",
      "ʕ•ᴥ•ʔ",
      "(・x・)",
      "U・ᴥ・U",
      "(ᐢ ᵕ ᐢ)",
      "૮₍ ˃̵ᴗ˂̵ ₎ა",
    ]).map((kaomoji) => ({ kaomoji, tags: ["可愛い", "動物"] })),
  },
  {
    title: "ちいさめ（ミニ）",
    items: uniq([
      "ᐠ( ᐛ )ᐟ",
      "ʕっ•ᴥ•ʔっ",
      "ᕙ( ˙-˙ )ᕗ",
      "ᕦ(ò_óˇ)ᕤ",
      "ᐢ. .ᐢ",
      "ᐡ•͈ ·̫ •͈ᐡ",
      "ᐠ( ᐢ ᵕ ᐢ )ᐟ",
    ]).map((kaomoji) => ({ kaomoji, tags: ["可愛い", "ミニ"] })),
  },
];