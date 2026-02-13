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
  title: "おはよう顔文字一覧（Kaomoji）｜朝の挨拶・Good Morning顔文字をコピペ",
  description:
    "おはよう顔文字（Kaomoji）をまとめて掲載。元気なおはよう・眠そうなおはよう・可愛いおはようまで、朝の気分に合わせた顔文字をワンクリックでコピー。LINE/X（Twitter）/Instagram/Discordにそのままコピペ。登録不要で無料。スマホでもOK。",
  ...withCanonical("/ohayou-kaomoji"),
};

export const ohayouKaomojiHeroContent: KaomojiHeroProps = {
  title: "おはよう顔文字一覧",
  kaomoji: "(*´∀｀*)ﾉｵﾊﾖｰ ☆(≧∀≦*)ﾉ",
  subtitle: "朝の挨拶・Good Morning【コピペ簡単】",
  description:
    "おはよう顔文字（Kaomoji）は、朝の挨拶に温かみと元気を添える表現。元気いっぱいの朝から、ちょっと眠そうな朝まで、その日の気分に合わせた「おはよう」で、素敵な一日をスタートしましょう。",
  primaryCta: { href: "#list", label: "顔文字を探す" },
  secondaryCta: { href: "/", label: "ホームへ" },
};

export const ohayouKaomojiWhatContent: KaomojiWhatProps = {
  heading: "おはよう顔文字（Kaomoji）とは？",
  intro:
    "おはよう顔文字は、朝の挨拶「おはよう」や「Good Morning」を、文字と記号で表現するKaomojiです。元気な笑顔から眠そうな表情まで、朝の気分を豊かに伝えられます。",
  usageHeading: "使えるシーン",
  usageItems: [
    "朝のLINEやSNSでの挨拶",
    "グループチャットでの朝の挨拶",
    "職場やチームでの朝のメッセージ",
    "家族や友人への朝のメッセージ",
    "SNSの朝の投稿や配信開始時",
  ],
  typesHeading: "おはよう顔文字のタイプ",
  types: [
    {
      title: "元気なおはよう",
      description: "明るく元気いっぱいの朝の挨拶。一日を前向きに。",
      example: "例：＼(^o^)／ｵﾊﾖｰ  ヽ(*´∀｀*)ノおはよ～♪",
    },
    {
      title: "かわいいおはよう",
      description: "親しみやすく可愛らしい朝の表現。",
      example: "例：(*´꒳`*)ﾉおはよ♪  ฅʕ,,•ꈊ•,,ʔおはよう",
    },
    {
      title: "眠そうなおはよう",
      description: "まだ眠い朝の気持ちを正直に表現。",
      example: "例：(´-ω-`)おはよう  (つω-)zzz おはよ",
    },
    {
      title: "丁寧なおはよう",
      description: "ビジネスシーンでも使える丁寧な朝の挨拶。",
      example: "例：(｡･ω･)ﾉﾞおはようございます",
    },
  ],
  featuresHeading: "朝の挨拶が伝わるパーツ",
  features: [
    {
      symbol: "☆",
      title: "キラキラ",
      description: "朝の爽やかさや元気を表現。",
    },
    {
      symbol: "ノ",
      title: "手を振る",
      description: "元気よく挨拶する動作を表現。",
    },
    {
      symbol: "zzz",
      title: "眠気",
      description: "まだ眠い朝の雰囲気を演出。",
    },
    {
      symbol: "♪",
      title: "楽しさ",
      description: "明るく楽しい朝の気分を表現。",
    },
  ],
};

export const ohayouKaomojiWhyContent: KaomojiWhyProps = {
  heading: "おはよう顔文字を上手に使うコツ",
  subheading: "朝の気分や相手に合わせて、ぴったりのおはようを選びましょう。",
  guideHeading: "使い分けガイド",
  guides: [
    {
      title: "元気な朝に",
      bullets: ["明るく前向きな一日のスタート", "相手も元気になれる挨拶"],
      recommend: "おすすめ：＼(^o^)／ｵﾊﾖｰ  ☆(≧∀≦*)ﾉｵﾊﾖｯ",
    },
    {
      title: "眠い朝に",
      bullets: ["正直な気持ちを可愛く表現", "共感を得やすい親しみやすさ"],
      recommend: "おすすめ：(´-ω-`)おはよう  (つω-)zzz おはよ",
    },
    {
      title: "ビジネスシーン",
      bullets: ["丁寧で好印象な朝の挨拶", "フォーマルな場面でも使える"],
      recommend: "おすすめ：(｡･ω･)ﾉﾞおはようございます",
    },
    {
      title: "親しい相手に",
      bullets: ["可愛く親しみやすい表現", "距離を縮める朝の挨拶"],
      recommend: "おすすめ：(*´꒳`*)ﾉおはよ♪  ヾ(*´∀`*)ノおはよ～",
    },
  ],
  cultureHeading: "朝の挨拶の文化",
  cultureBody:
    "朝の「おはよう」は、一日の始まりを告げる大切な挨拶です。顔文字を添えることで、文字だけでは伝わりにくい朝の気分や温度感を表現でき、より心のこもった挨拶になります。",
  cultureCards: [
    { title: "一日のスタート", description: "良い朝の挨拶で良い一日に。" },
    { title: "気分の共有", description: "元気や眠気を素直に表現できる。" },
    { title: "距離の縮まり", description: "親しみやすい挨拶で関係性が深まる。" },
  ],
  tipsHeading: "組み合わせ例",
  tips: [
    {
      title: "おはよう＋天気",
      body: "天気の話題を添えると、より会話が広がる。",
      example: "例：「おはよう(*´∀｀*)ﾉ 今日はいい天気だね！」",
    },
    {
      title: "おはよう＋励まし",
      body: "応援の言葉を添えて、元気を届ける。",
      example: "例：「おはよう！今日も頑張ろうね (•̀ᴗ•́)و ̑̑」",
    },
    {
      title: "おはよう＋正直な気持ち",
      body: "眠い気持ちを正直に伝えると、共感を得やすい。",
      example: "例：「おはよう(´-ω-`) まだ眠いけど頑張る…」",
    },
  ],
};

export const ohayouKaomojiFaqContent: KaomojiFaqProps = {
  heading: "よくある質問（FAQ）",
  subheading: "おはよう顔文字、これだけ押さえればOK。",
  items: [
    {
      question: "おはよう顔文字はどうやってコピーできますか？",
      answer:
        "顔文字の右側にあるコピーアイコンを押すだけでコピーできます。コピー後はLINEやSNSに貼り付けて使ってください。",
    },
    {
      question: "おはようは何時まで使える？",
      answer:
        "一般的には午前中までが目安ですが、親しい相手なら朝の挨拶として柔軟に使えます。昼過ぎには「こんにちは」に切り替えるのが自然です。",
    },
    {
      question: "ビジネスシーンでも使える？",
      answer:
        "シンプルで丁寧な表現なら使えます。(｡･ω･)ﾉﾞおはようございます など、控えめな顔文字を選ぶと良いでしょう。",
    },
    {
      question: "眠そうな顔文字は失礼にならない？",
      answer:
        "親しい相手や同僚なら問題ありません。むしろ正直で親しみやすい印象を与えます。ただし、目上の方や重要な相手には避けた方が無難です。",
    },
  ],
};

export const ohayouKaomojiGroups: KaomojiCollectionGroup[] = [
  {
    title: "元気なおはよう",
    items: uniq([
      "＼(^o^)／ｵﾊﾖｰ",
      "☆(≧∀≦*)ﾉｵﾊﾖｯ",
      "ヽ(*´∀｀*)ノおはよ～♪",
      "٩(*ˊ︶`*)۶おはよ〜",
      "((((○゜ε゜○）ﾉｵﾊﾖｰ",
      "(*´▽`*)ﾉおはよー！",
      "ヾ(@⌒ｰ⌒@)ﾉおはよう",
      "♪(´ε｀ )おはよ",
      "٩(ˊﾛˋ*)وおはよーさーん！",
      "✧*｡٩(ˊᗜˋ*)و✧*｡おはよう",
    ]).map((kaomoji) => ({ kaomoji, tags: ["おはよう", "元気"] })),
  },
  {
    title: "かわいいおはよう",
    items: uniq([
      "(*´꒳`*)ﾉおはよ♪",
      "ฅʕ,,•ꈊ•,,ʔおはよう",
      "(*´ω｀*)ﾉおは",
      "(๑´꒳`)ﾉおはよう",
      "｡ﾟ(ﾟ´ω`ﾟ)ﾟ｡おはよ",
      "(◍•ᴗ•◍)おはよう",
      "ヾ(◕‿◕)ﾉおはよ～",
      "(｡•̀ᴗ-)✧おはよう",
      "(*ˊᗜˋ)ﾉおはよー",
      "(´｡• ᵕ •｡`)おはよう",
    ]).map((kaomoji) => ({ kaomoji, tags: ["おはよう", "かわいい"] })),
  },
  {
    title: "眠そうなおはよう",
    items: uniq([
      "(´-ω-`)おはよう",
      "(つω-)zzz おはよ",
      "(｡-ω-)ﾉおはよ",
      "( ˘ω˘ )おはよう…",
      "(っ_ _)っおはよ",
      "(-ω-;)おはよう",
      "(´~｀)ヾおはよ",
      "【布団】っω-)おはよう",
      "ｵﾊｫｯ☆＿〆(-ω-｀【布団",
      "(´σωσ`)ﾈﾑｲ…おはよう",
    ]).map((kaomoji) => ({ kaomoji, tags: ["おはよう", "眠い"] })),
  },
  {
    title: "シンプルなおはよう",
    items: uniq([
      "(´∀`)ﾉおはよう",
      "おはよう(^-^)ノ",
      "(･ω･)ﾉおはよ",
      "おはよう(*´ω`*)ノ",
      "(｡･ω･)ﾉﾞおはよう",
      "(*´∀｀*)ﾉｵﾊﾖｰ",
      "(^o^)丿おはよう",
      "おはよう(・∀・)ﾉ",
      "(⌒▽⌒)ノおはよ",
      "ヾ(´ω｀)ﾉﾞおはよう",
    ]).map((kaomoji) => ({ kaomoji, tags: ["おはよう", "シンプル"] })),
  },
  {
    title: "テキスト入り",
    items: uniq([
      "Good Morning(｡･ω･)ﾉﾞ",
      "☀おはよう☀",
      "✨おはよう✨",
      "໒꒱·ﾟおはよう",
      "おっはよー！(ﾉ´∀｀*)ﾉ",
      "おはよ～(*´ω｀*)",
      "おはようございます(｡･ω･)ﾉﾞ",
      "ｵﾊﾖｰ(○´ω｀○)ﾉ",
      "はよー٩(●˙▿˙●)۶",
      "Good morning✧*｡",
    ]).map((kaomoji) => ({ kaomoji, tags: ["おはよう", "テキスト"] })),
  },
  {
    title: "デコ・装飾",
    items: uniq([
      "☆.｡.:*･ﾟ☆おはよう☆ﾟ･*:.｡.☆",
      "✧*｡٩(ˊᗜˋ*)و✧*｡おはよ",
      "꒰๑˃͈꒳˂͈๑꒱ﾉおはよう♡",
      "❀.(*´ω`*)❀.おはよう",
      "☼おはよう☼",
      "゜*☆*゜おはよう゜*☆*゜",
      "ヾ(･ω･*)ﾉ☆Good Morning",
      "✨(*´∀｀*)ﾉおはよ～✨",
      "o(*′ω`*)oおはよ♪",
      "━━ヽ(´∀`)人(´∀`)ノ━━おはよう",
    ]).map((kaomoji) => ({ kaomoji, tags: ["おはよう", "デコ"] })),
  },
];

export const ohayouKaomojiPlainText: string = uniq(
  ohayouKaomojiGroups.flatMap((group) => group.items.map((item) => item.kaomoji))
).join("\n");
