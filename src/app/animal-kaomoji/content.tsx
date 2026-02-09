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
  title: "動物顔文字一覧（Kaomoji）｜猫・犬・熊・兎などをワンクリックでコピー",
  description:
    "動物顔文字（Kaomoji）を種類別にまとめて掲載。猫・犬・熊・兎・鳥・魚・アザラシなど、かわいい動物の表情を検索＆ワンクリックでコピーできます。LINE/X（Twitter）/Instagram/Discordでもそのまま使えます。登録不要で無料。スマホでもOK。",
  ...withCanonical("/animal-kaomoji"),
};

export const animalKaomojiHeroContent: KaomojiHeroProps = {
  title: "動物顔文字一覧",
  kaomoji: "(=^･ω･^=)  ∪･ω･∪  ʕ •ᴥ• ʔ",
  subtitle: "猫・犬・熊・兎など動物の顔文字をまとめてチェック",
  description:
    "動物顔文字（Kaomoji）は、かわいさや癒しを短いテキストで伝えられる便利な表現です。猫や犬の定番から、鳥・魚・アザラシなどの個性派まで、気分に合う動物を探してそのままコピペできます。",
  primaryCta: { href: "#list", label: "一覧を見る" },
  secondaryCta: { href: "/", label: "トップ" },
};

export const animalKaomojiGroups: KaomojiCollectionGroup[] = [
  {
    title: "猫",
    items: uniq([
      "(=^･ω･^=)",
      "(=^･ｪ･^=)",
      "(=ↀωↀ=)",
      "ฅ•ω•ฅ",
      "(ฅ^･ω･^ฅ)",
    ]).map((kaomoji) => ({ kaomoji, tags: ["猫", "ねこ", "動物"] })),
  },
  {
    title: "犬",
    items: uniq([
      "∪･ω･∪",
      "U・ᴥ・U",
      "U^ｪ^U",
      "V●ᴥ●V",
      "(ᐡ •͈ ·̫ •͈ ᐡ)",
    ]).map((kaomoji) => ({ kaomoji, tags: ["犬", "いぬ", "動物"] })),
  },
  {
    title: "熊",
    items: uniq([
      "ʕ •ᴥ• ʔ",
      "ʕ ᵔᴥᵔ ʔ",
      "( ´(ｴ)ˋ )",
      "(￣(ｴ)￣)",
      "(‐(エ)‐)",
      "ʕ๑•ﻌ•๑ʔ",
    ]).map((kaomoji) => ({ kaomoji, tags: ["熊", "くま", "動物"] })),
  },
  {
    title: "兎",
    items: uniq([
      "₍ᐢ.ˬ.ᐢ₎",
      "／(･ × ･)＼",
      "／(=´x`=)＼",
      "ᐢ. ̫ .ᐢ",
      "(・×・)",
      "(≧ x ≦)",
    ]).map((kaomoji) => ({ kaomoji, tags: ["兎", "うさぎ", "動物"] })),
  },
  {
    title: "鳥",
    items: uniq([
      "(･Θ･)",
      "(•ө•)",
      "(｡･Θ･｡)",
      "(・8・)",
    ]).map((kaomoji) => ({ kaomoji, tags: ["鳥", "とり", "動物"] })),
  },
  {
    title: "魚",
    items: uniq([
      "<゜)))彡",
      ">゜)))彡",
      "くコ:彡",
      "くコ:彡>",
      "<*))>=<",
    ]).map((kaomoji) => ({ kaomoji, tags: ["魚", "さかな", "動物"] })),
  },
  {
    title: "アザラシ",
    items: uniq([
      "(´ω` )っЗ",
      "(´･ω･`)っЗ",
      "(っ˘ω˘)っЗ",
    ]).map((kaomoji) => ({ kaomoji, tags: ["アザラシ", "海", "動物"] })),
  },
  {
    title: "豚",
    items: uniq([
      "(´(00)` )",
      "(￣(oo)￣)",
      "( ´(00)ˋ )",
    ]).map((kaomoji) => ({ kaomoji, tags: ["豚", "ぶた", "動物"] })),
  },
  {
    title: "蛇",
    items: uniq([
      "～(m--)m",
      "~(m--)m",
      "〜(m--)m",
    ]).map((kaomoji) => ({ kaomoji, tags: ["蛇", "へび", "動物"] })),
  },
  {
    title: "蜘蛛",
    items: uniq([
      "/\\(\\oo/)/\\",
      "/╲/\\(╭•̀ﮧ •́╮)/\\╱\\",
    ]).map((kaomoji) => ({ kaomoji, tags: ["蜘蛛", "くも", "動物"] })),
  },
  {
    title: "特殊・その他",
    items: uniq([
      "(^ω^)",
      "Ｕ･J･Ｕ",
      "(・ω・∋)",
      "(・∞・)",
    ]).map((kaomoji) => ({ kaomoji, tags: ["その他", "動物", "バリエーション"] })),
  },
];

export const animalKaomojiWhatContent: KaomojiWhatProps = {
  heading: "動物顔文字とは？",
  intro:
    "動物顔文字は、動物の顔や動きを文字で表したKaomojiです。猫・犬・熊などの定番はもちろん、海の生き物やちょっとマニアックな動物も人気。絵文字よりも軽く、文脈に合わせて表情を選べるのが魅力です。",
  usageHeading: "使えるシーン",
  usageItems: [
    "挨拶やお礼にちょっとかわいさを足したいとき",
    "癒し・ほっこり系のリアクションを送りたいとき",
    "ペットや動物の話題で雰囲気を合わせたいとき",
    "子供向け・家族向けのやりとりでやさしく伝えたいとき",
    "SNSや配信でテンポよく感情を表現したいとき",
  ],
  typesHeading: "動物顔文字の種類",
  types: [
    {
      title: "猫系",
      description: "目やひげのニュアンスで表情が豊富。かわいい系・クール系どちらも使えます。",
      example: "例: (=^･ω･^=)  (=ↀωↀ=)",
    },
    {
      title: "犬系",
      description: "元気で親しみやすい印象。応援や励ましにも相性がいいです。",
      example: "例: ∪･ω･∪  U・ᴥ・U",
    },
    {
      title: "熊・兎系",
      description: "やさしい雰囲気や癒し感が強め。ふわっとした印象にしたいときに。",
      example: "例: ʕ •ᴥ• ʔ  ／(･ × ･)＼",
    },
    {
      title: "鳥・魚・海の生き物",
      description: "個性派の表現にぴったり。トークのアクセントになります。",
      example: "例: (･Θ･)  <゜)))彡  (´ω` )っЗ",
    },
  ],
  featuresHeading: "動物顔文字の特徴",
  features: [
    {
      symbol: "🐾",
      title: "選べる種類が豊富",
      description: "定番動物から海の生き物まで、話題や気分に合わせて選べます。",
    },
    {
      symbol: "✨",
      title: "親しみやすい雰囲気",
      description: "硬くなりがちな文章に、やわらかい印象を足せます。",
    },
    {
      symbol: "🎯",
      title: "伝えたい感情に寄り添う",
      description: "かわいい・元気・しょんぼりなど、表情を調整できます。",
    },
  ],
};

export const animalKaomojiWhyContent: KaomojiWhyProps = {
  heading: "動物顔文字の使い分け",
  subheading: "動物ごとの雰囲気を使い分けると、伝わり方がぐっと良くなります。",
  guideHeading: "使い分けのコツ",
  guides: [
    {
      title: "日常の挨拶に使う",
      bullets: [
        "さりげなくかわいさを足して柔らかい印象に",
        "相手との距離感を縮めたいときにおすすめ",
      ],
      recommend: "おすすめ: (=^･ω･^=)  ∪･ω･∪",
    },
    {
      title: "癒しや応援に使う",
      bullets: [
        "ゆるい雰囲気を作りたいとき",
        "落ち着いた励ましや共感に向いています",
      ],
      recommend: "おすすめ: ʕ •ᴥ• ʔ  (´ω` )っЗ",
    },
    {
      title: "アクセントを加えたいとき",
      bullets: [
        "会話にちょっとした遊び心を入れたいとき",
        "個性を出して印象に残したいとき",
      ],
      recommend: "おすすめ: (･Θ･)  <゜)))彡",
    },
  ],
  cultureHeading: "動物顔文字の魅力",
  cultureBody:
    "動物顔文字は、種別だけで印象が変わるのが面白いポイントです。猫はかわいさ、犬は元気、熊や兎はやさしさなど、表情のニュアンスを選ぶだけでメッセージの温度感を調整できます。",
  cultureCards: [
    { title: "親しみ", description: "堅い文章をやわらかくしてくれる" },
    { title: "癒し", description: "ちょっと疲れたときの気分転換に" },
    { title: "個性", description: "好きな動物で自分らしさを出せる" },
  ],
  tipsHeading: "すぐ使える例文",
  tips: [
    {
      title: "挨拶にプラス",
      body: "短い挨拶文に動物を添えると、親しみやすさがアップします。",
      example: "例: おはよう！ (=^･ω･^=)",
    },
    {
      title: "癒しのリアクション",
      body: "がんばっている相手にやさしい雰囲気を届けたいときに。",
      example: "例: 無理しすぎないでね ʕ •ᴥ• ʔ",
    },
    {
      title: "気分転換のひと言",
      body: "会話の区切りでゆるさを出すのに便利です。",
      example: "例: ちょっと休憩〜 (´ω` )っЗ",
    },
  ],
};

export const animalKaomojiFaqContent: KaomojiFaqProps = {
  heading: "動物顔文字のよくある質問",
  subheading: "ワンクリックでコピーして、そのまま使えます。",
  items: [
    {
      question: "動物顔文字はどんなときに使うと便利ですか？",
      answer:
        "挨拶やリアクションにやさしい雰囲気を足したいときに便利です。SNSやチャットの短いやりとりでも、表情が伝わりやすくなります。",
    },
    {
      question: "人気の動物顔文字はどれですか？",
      answer:
        "猫・犬・熊・兎は定番人気です。迷ったときはこのあたりから選ぶと使いやすいです。",
    },
    {
      question: "スマホでも同じように表示されますか？",
      answer:
        "多くの端末で表示できますが、一部の特殊文字は機種やアプリで見え方が変わることがあります。",
    },
    {
      question: "動物の種類を増やして探せますか？",
      answer:
        "検索やカテゴリで絞り込みができます。気分や話題に合わせて探してみてください。",
    },
    {
      question: "コピーできないときはどうしたらいいですか？",
      answer:
        "ブラウザの権限設定によってはコピーがうまくいかないことがあります。選択して手動コピーもお試しください。",
    },
  ],
};