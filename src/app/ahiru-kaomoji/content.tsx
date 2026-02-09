import type { Metadata } from "next";

import type {
  KaomojiCollectionGroup,
  KaomojiFaqProps,
  KaomojiHeroProps,
  KaomojiWhatProps,
  KaomojiWhyProps,
} from "@/features/kaomoji/types";

import { withCanonical } from "@/lib/seo";

export const metadata: Metadata = {
  title: "アヒル顔文字一覧（Kaomoji）｜基本・かわいい・シンプルもコピペ",
  description:
    "アヒル顔文字（Kaomoji）をまとめて掲載。基本・かわいい・シンプル・デコ・絵文字付きまで。検索＆ワンクリックでコピーして、LINE/X（Twitter）/Instagram/Discordにそのままコピペ。登録不要で無料。スマホでもOK。",
  ...withCanonical("/ahiru-kaomoji"),
};

export const ahiruKaomojiHeroContent: KaomojiHeroProps = {
  title: "アヒル顔文字一覧",
  kaomoji: "(・Θ・)  (・ɞ・)",
  subtitle: "基本・かわいいまで【コピペ簡単】",
  description:
    "「アヒルっぽさ」が出る顔文字を集めました。シンプルから可愛い系、装飾つき、ユニーク系まで幅広く掲載。気に入った顔文字はワンクリックでコピーして、そのまま貼り付けできます。",
  primaryCta: { href: "#list", label: "顔文字を探す" },
  secondaryCta: { href: "/", label: "ホームへ" },
};

export const ahiruKaomojiWhatContent: KaomojiWhatProps = {
  heading: "アヒル顔文字（Kaomoji）とは？",
  intro:
    "アヒル顔文字は、記号や絵文字、キャラっぽいパーツを組み合わせて「アヒル」の雰囲気を表現するKaomojiです。短い一言でもテーマが伝わりやすく、SNSやチャットのリアクションに便利です。",
  usageHeading: "使えるシーン",
  usageItems: [
    "アヒルの話題に",
    "挨拶や日常の返信に",
    "SNS投稿のテーマに",
    "かわいく盛りたいときに",
    "ネタやユニークな一言に",
  ],
  typesHeading: "アヒル顔文字の種類",
  types: [
    {
      title: "基本",
      description: "このカテゴリの定番をまとめてチェック。",
      example: "例: (・Θ・)  (・ɞ・)",
    },
    {
      title: "かわいい",
      description: "このカテゴリの定番をまとめてチェック。",
      example: "例: (o・θ・o)  (｡・Θ・｡)",
    },
    {
      title: "シンプル",
      description: "このカテゴリの定番をまとめてチェック。",
      example: "例: ・θ・  ・ө・",
    },
    {
      title: "デコ",
      description: "このカテゴリの定番をまとめてチェック。",
      example: "例: ∧(・Θ・)∧≡≡  ⋋(◍'Θ'◍)⋌",
    },
    {
      title: "絵文字付き",
      description: "このカテゴリの定番をまとめてチェック。",
      example: "例: (・θ・)🦆  (・Θ・)ノ💨",
    },
  ],
  featuresHeading: "アヒルらしさが出るポイント",
  features: [
    { symbol: "(・Θ・)", title: "定番", description: "まずは短くて使いやすい定番から。" },
    { symbol: "♡", title: "かわいい", description: "かわいい系のカテゴリを選ぶと柔らかい印象に。" },
    { symbol: "✨", title: "装飾", description: "絵文字や装飾つきは投稿で映えます。" },
    { symbol: "ASCII", title: "AA/アート", description: "大きめの表現はネタとして強いです。" },
  ],
};

export const ahiruKaomojiWhyContent: KaomojiWhyProps = {
  heading: "アヒル顔文字の使い分け",
  subheading: "シンプルから装飾まで。場面に合わせて“雰囲気”を調整できます。",
  guideHeading: "シーン別ガイド",
  guides: [
    {
      title: "日常の返信",
      bullets: ["短めのシンプル系が自然", "文章に馴染みやすい"],
      recommend: "おすすめ: (・Θ・)",
    },
    {
      title: "SNS投稿",
      bullets: ["装飾つきでテーマが伝わりやすい", "写真と合わせると映える"],
      recommend: "おすすめ: (o・θ・o)",
    },
    {
      title: "ネタ・ユニーク",
      bullets: ["ユニーク/AA系でインパクト", "使いすぎると読みにくいので注意"],
      recommend: "おすすめ: ・θ・",
    },
    {
      title: "かわいく盛る",
      bullets: ["可愛いカテゴリを選ぶ", "一言に添えると収まりが良い"],
      recommend: "おすすめ: (o・θ・o)",
    },
  ],
  cultureHeading: "「アヒル」モチーフは一言で伝わる",
  cultureBody:
    "アヒルは見た目のイメージが強く、短い文章でもテーマが伝わりやすいモチーフです。顔文字を添えるだけで、投稿や返信の雰囲気を軽く・かわいく・面白く調整できます。",
  cultureCards: [
    { title: "雰囲気", description: "テーマが一目で伝わる。" },
    { title: "リアクション", description: "一言に感情を足せる。" },
    { title: "盛れる", description: "装飾や絵文字で映える。" },
  ],
  tipsHeading: "すぐ使える例文",
  tips: [
    {
      title: "一言に添える",
      body: "短文 + 顔文字が使いやすいです。",
      example: "例: 今日はいい日 (・Θ・)",
    },
    {
      title: "投稿のテーマ",
      body: "写真や話題に合わせて選ぶと伝わりやすい。",
      example: "例: アヒルかわいい (・ɞ・)",
    },
  ],
};

export const ahiruKaomojiFaqContent: KaomojiFaqProps = {
  heading: "よくある質問（FAQ）",
  subheading: "アヒル顔文字、迷ったらここだけ見ればOK。",
  items: [
    {
      question: "アヒル顔文字はどうやってコピーできますか？",
      answer:
        "一覧から好きな顔文字をクリックするとコピーできます。あとはLINEやSNSなどに貼り付けるだけです。",
    },
    {
      question: "文字化けしにくいのはどれ？",
      answer:
        "環境によっては絵文字や特殊文字の見え方が変わることがあります。心配なときは、記号中心のシンプル系を選ぶと安心です。",
    },
    {
      question: "タグは何のためにありますか？",
      answer:
        "検索用の目印です。気分や用途（かわいい/動作/ユニーク など）で絞り込んで探せます。",
    },
  ],
};

export const ahiruKaomojiGroups: KaomojiCollectionGroup[] = [
  {
    title: "基本",
    items: [
      { kaomoji: "(・Θ・)", tags: ["基本","アヒル"] },
      { kaomoji: "(・ɞ・)", tags: ["基本","アヒル"] },
      { kaomoji: "∧( 'Θ' )∧", tags: ["基本","羽"] },
      { kaomoji: "(ё)", tags: ["基本","シンプル"] },
      { kaomoji: "(・θ・)", tags: ["基本","アヒル"] },
      { kaomoji: "( 'Θ' )", tags: ["基本","アヒル"] },
      { kaomoji: "(•ө•)", tags: ["基本","アヒル"] },
      { kaomoji: "(・⊝・)", tags: ["基本","くちばし"] },
      { kaomoji: "(⊙ө⊙)", tags: ["基本","驚き"] },
      { kaomoji: "(◉Θ◉)", tags: ["基本","目が大きい"] },
      { kaomoji: "(・o・)", tags: ["基本","アヒル"] },
      { kaomoji: "(´Θ｀)", tags: ["基本","のんびり"] },
      { kaomoji: "(・△・)", tags: ["基本","くちばし"] },
      { kaomoji: "(・з・)", tags: ["基本","アヒル"] },
      { kaomoji: "( ˙Θ˙ )", tags: ["基本","アヒル"] },
      { kaomoji: "(｀Θ´)", tags: ["基本","怒り"] },
      { kaomoji: "(・=・)", tags: ["基本","アヒル"] },
      { kaomoji: "( Θ´)", tags: ["基本","横顔"] },
      { kaomoji: "(￣Θ￣)", tags: ["基本","アヒル"] },
      { kaomoji: "(・∋•)", tags: ["基本","くちばし"] },
    ],
  },
  {
    title: "かわいい",
    items: [
      { kaomoji: "(o・θ・o)", tags: ["かわいい","アヒル"] },
      { kaomoji: "(｡・Θ・｡)", tags: ["かわいい","アヒル"] },
      { kaomoji: "(*•ө•*)", tags: ["かわいい","アヒル"] },
      { kaomoji: "(o´Θ`o)", tags: ["かわいい","アヒル"] },
      { kaomoji: "(⌒Θ⌒)", tags: ["かわいい","にっこり"] },
      { kaomoji: "( ˘Θ˘ )", tags: ["かわいい","すやすや"] },
      { kaomoji: "(•ɞ•)♡", tags: ["かわいい","ハート"] },
      { kaomoji: "(｡•ө•｡)", tags: ["かわいい","アヒル"] },
      { kaomoji: "(•ө•)♡", tags: ["かわいい","ハート"] },
      { kaomoji: "(*´ө`*)", tags: ["かわいい","照れ"] },
      { kaomoji: "(´・θ・)", tags: ["かわいい","アヒル"] },
      { kaomoji: "(๑•ө•๑)", tags: ["かわいい","アヒル"] },
      { kaomoji: "(*^ ө ^*)", tags: ["かわいい","にっこり"] },
      { kaomoji: "(,,•ө •,,)", tags: ["かわいい","アヒル"] },
      { kaomoji: "(*･Θ･*)", tags: ["かわいい","アヒル"] },
      { kaomoji: "(.•ө•.)", tags: ["かわいい","アヒル"] },
      { kaomoji: "(❛ө❛)", tags: ["かわいい","アヒル"] },
      { kaomoji: "( •ө• )", tags: ["かわいい","アヒル"] },
      { kaomoji: "(•ө•)♥︎", tags: ["かわいい","ハート"] },
      { kaomoji: "(◍'Θ'◍)", tags: ["かわいい","アヒル"] },
    ],
  },
  {
    title: "シンプル",
    items: [
      { kaomoji: "・θ・", tags: ["シンプル","アヒル"] },
      { kaomoji: "・ө・", tags: ["シンプル","アヒル"] },
      { kaomoji: "Σ^)/", tags: ["シンプル","アヒル"] },
      { kaomoji: "\\_O<", tags: ["シンプル","泳ぐ"] },
      { kaomoji: "ヘΣ^)ヘ", tags: ["シンプル","歩く"] },
      { kaomoji: "ヘ(ё)ヘ", tags: ["シンプル","歩く"] },
      { kaomoji: "＼Σ^)／", tags: ["シンプル","万歳"] },
      { kaomoji: "<(･彡)з", tags: ["シンプル","泳ぐ"] },
      { kaomoji: "(⊃・)>", tags: ["シンプル","アヒル"] },
      { kaomoji: "<(・⊂)'", tags: ["シンプル","アヒル"] },
      { kaomoji: "(∵)∩", tags: ["シンプル","アヒル"] },
      { kaomoji: "∠(・Θ・)", tags: ["シンプル","アヒル"] },
      { kaomoji: "( ˋ Θ ´ )", tags: ["シンプル","アヒル"] },
      { kaomoji: "(´θ｀)", tags: ["シンプル","のんびり"] },
      { kaomoji: "( ´・Θ・)", tags: ["シンプル","アヒル"] },
      { kaomoji: "(・Θ・´)", tags: ["シンプル","アヒル"] },
      { kaomoji: "(ゝΘ･)", tags: ["シンプル","ウインク"] },
      { kaomoji: "(⁰⊖⁰)", tags: ["シンプル","アヒル"] },
      { kaomoji: "|⁰⊖⁰)", tags: ["シンプル","チラッ"] },
      { kaomoji: "(-ө-)", tags: ["シンプル","すやすや"] },
    ],
  },
  {
    title: "デコ",
    items: [
      { kaomoji: "∧(・Θ・)∧≡≡", tags: ["デコ","飛ぶ"] },
      { kaomoji: "⋋(◍'Θ'◍)⋌", tags: ["デコ","羽"] },
      { kaomoji: "∩(・Θ・)∩", tags: ["デコ","万歳"] },
      { kaomoji: "(･Θ･)✿", tags: ["デコ","花"] },
      { kaomoji: "٩( 'Θ' )۶", tags: ["デコ","万歳"] },
      { kaomoji: "(・Θ・)ﾟ✧", tags: ["デコ","キラキラ"] },
      { kaomoji: "(・θ・)♥", tags: ["デコ","ハート"] },
      { kaomoji: "( ˘Θ˘)~♪", tags: ["デコ","音符"] },
      { kaomoji: "(・Θ・)♪", tags: ["デコ","音符"] },
      { kaomoji: "╰( •ө• )╯♡", tags: ["デコ","ハート"] },
      { kaomoji: "∬(・Θ・)∬", tags: ["デコ","アヒル"] },
      { kaomoji: "∧(･Θ･)∧", tags: ["デコ","羽"] },
      { kaomoji: "ϵ( 'Θ' )϶", tags: ["デコ","羽"] },
      { kaomoji: "⁽⁽ଘ(｡•ө•｡)ଓ⁾⁾", tags: ["デコ","飛ぶ"] },
      { kaomoji: "⋛⋋( 'Θ')⋌⋚", tags: ["デコ","羽"] },
      { kaomoji: "(*･ө･*)♡", tags: ["デコ","ハート"] },
      { kaomoji: "ε(｡•ө•｡)з", tags: ["デコ","羽"] },
      { kaomoji: "♩є(･Θ･｡)э", tags: ["デコ","音符"] },
      { kaomoji: "⌒ ( •ө• ) ⌒", tags: ["デコ","アヒル"] },
      { kaomoji: "ε('Θ')з", tags: ["デコ","羽"] },
    ],
  },
  {
    title: "絵文字付き",
    items: [
      { kaomoji: "(・θ・)🦆", tags: ["絵文字","アヒル"] },
      { kaomoji: "(・Θ・)ノ💨", tags: ["絵文字","ダッシュ"] },
      { kaomoji: "(・Θ・)ﾉ✨", tags: ["絵文字","キラキラ"] },
      { kaomoji: "(・Θ・)/🦆", tags: ["絵文字","アヒル"] },
      { kaomoji: "(・Θ・)つ✨", tags: ["絵文字","キラキラ"] },
      { kaomoji: "🦆(・Θ・)🦆", tags: ["絵文字","アヒル"] },
      { kaomoji: "🐥(•ө•)🐥", tags: ["絵文字","ひよこ"] },
      { kaomoji: "(・Θ・)💛", tags: ["絵文字","ハート"] },
      { kaomoji: "アヒル( ˙Θ˙(˙Θ˙)˙Θ˙ )3兄妹", tags: ["絵文字","家族"] },
      { kaomoji: "🦆∧( 'Θ' )∧🦆", tags: ["絵文字","アヒル"] },
      { kaomoji: "(・↔・)ｸﾞﾜ🦆", tags: ["絵文字","鳴き声"] },
      { kaomoji: "(o・θ・o)ｸﾜｯ🦆", tags: ["絵文字","鳴き声"] },
      { kaomoji: "🌊(・Θ・)🌊", tags: ["絵文字","泳ぐ"] },
      { kaomoji: "(・Θ・)🍞", tags: ["絵文字","パン"] },
      { kaomoji: "💛(•ө•)💛", tags: ["絵文字","ハート"] },
      { kaomoji: "⁽⁽ଘ(｡•ө•｡)ଓ⁾⁾ﾋﾟﾖ💛", tags: ["絵文字","飛ぶ"] },
      { kaomoji: "(・Θ・)☀️", tags: ["絵文字","太陽"] },
      { kaomoji: "🦆( ˙Θ˙)ﾉ🦆", tags: ["絵文字","バイバイ"] },
      { kaomoji: "(・Θ・)ﾉ🎵", tags: ["絵文字","音符"] },
      { kaomoji: "🦆(・θ・)ﾉ~", tags: ["絵文字","バイバイ"] },
    ],
  },
];

