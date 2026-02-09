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
  title: "馬顔文字一覧（Kaomoji）｜シンプル 𓃗・絵文字付き 🐴・チェス・特殊文字 ♘もコピペ",
  description:
    "馬顔文字（Kaomoji）をまとめて掲載。シンプル 𓃗・絵文字付き 🐴・チェス・特殊文字 ♘まで。検索＆ワンクリックでコピーして、LINE/X（Twitter）/Instagram/Discordにそのままコピペ。登録不要で無料。スマホでもOK。",
  ...withCanonical("/horse-kaomoji"),
};

export const horseKaomojiHeroContent: KaomojiHeroProps = {
  title: "馬顔文字一覧",
  kaomoji: "𓃗 ⋆  𓃗 ะ",
  subtitle: "シンプル 𓃗・絵文字付き 🐴まで【コピペ簡単】",
  description:
    "「馬っぽさ」が出る顔文字を集めました。シンプルから可愛い系、装飾つき、ユニーク系まで幅広く掲載。気に入った顔文字はワンクリックでコピーして、そのまま貼り付けできます。",
  primaryCta: { href: "#list", label: "顔文字を探す" },
  secondaryCta: { href: "/", label: "ホームへ" },
};

export const horseKaomojiWhatContent: KaomojiWhatProps = {
  heading: "馬顔文字（Kaomoji）とは？",
  intro:
    "馬顔文字は、記号や絵文字、キャラっぽいパーツを組み合わせて「馬」の雰囲気を表現するKaomojiです。短い一言でもテーマが伝わりやすく、SNSやチャットのリアクションに便利です。",
  usageHeading: "使えるシーン",
  usageItems: [
    "馬の話題に",
    "挨拶や日常の返信に",
    "SNS投稿のテーマに",
    "かわいく盛りたいときに",
    "ネタやユニークな一言に",
  ],
  typesHeading: "馬顔文字の種類",
  types: [
    {
      title: "シンプル 𓃗",
      description: "このカテゴリの定番をまとめてチェック。",
      example: "例: 𓃗 ⋆  𓃗 ะ",
    },
    {
      title: "絵文字付き 🐴",
      description: "このカテゴリの定番をまとめてチェック。",
      example: "例: 🐴( '-' 🐴)ｳﾏﾁｬﾝ  (・∀・)🐴",
    },
    {
      title: "チェス・特殊文字 ♘",
      description: "このカテゴリの定番をまとめてチェック。",
      example: "例: ♘  ♞",
    },
  ],
  featuresHeading: "馬らしさが出るポイント",
  features: [
    { symbol: "𓃗 ⋆", title: "定番", description: "まずは短くて使いやすい定番から。" },
    { symbol: "♡", title: "かわいい", description: "かわいい系のカテゴリを選ぶと柔らかい印象に。" },
    { symbol: "✨", title: "装飾", description: "絵文字や装飾つきは投稿で映えます。" },
    { symbol: "ASCII", title: "AA/アート", description: "大きめの表現はネタとして強いです。" },
  ],
};

export const horseKaomojiWhyContent: KaomojiWhyProps = {
  heading: "馬顔文字の使い分け",
  subheading: "シンプルから装飾まで。場面に合わせて“雰囲気”を調整できます。",
  guideHeading: "シーン別ガイド",
  guides: [
    {
      title: "日常の返信",
      bullets: ["短めのシンプル系が自然", "文章に馴染みやすい"],
      recommend: "おすすめ: 𓃗 ⋆",
    },
    {
      title: "SNS投稿",
      bullets: ["装飾つきでテーマが伝わりやすい", "写真と合わせると映える"],
      recommend: "おすすめ: 🐴( '-' 🐴)ｳﾏﾁｬﾝ",
    },
    {
      title: "ネタ・ユニーク",
      bullets: ["ユニーク/AA系でインパクト", "使いすぎると読みにくいので注意"],
      recommend: "おすすめ: ♘",
    },
    {
      title: "かわいく盛る",
      bullets: ["可愛いカテゴリを選ぶ", "一言に添えると収まりが良い"],
      recommend: "おすすめ: 🐴( '-' 🐴)ｳﾏﾁｬﾝ",
    },
  ],
  cultureHeading: "「馬」モチーフは一言で伝わる",
  cultureBody:
    "馬は見た目のイメージが強く、短い文章でもテーマが伝わりやすいモチーフです。顔文字を添えるだけで、投稿や返信の雰囲気を軽く・かわいく・面白く調整できます。",
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
      example: "例: 今日はいい日 𓃗 ⋆",
    },
    {
      title: "投稿のテーマ",
      body: "写真や話題に合わせて選ぶと伝わりやすい。",
      example: "例: 馬かわいい 𓃗 ะ",
    },
  ],
};

export const horseKaomojiFaqContent: KaomojiFaqProps = {
  heading: "よくある質問（FAQ）",
  subheading: "馬顔文字、迷ったらここだけ見ればOK。",
  items: [
    {
      question: "馬顔文字はどうやってコピーできますか？",
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

export const horseKaomojiGroups: KaomojiCollectionGroup[] = [
  {
    title: "シンプル 𓃗",
    items: [
      { kaomoji: "𓃗 ⋆", tags: ["馬","ヒエログリフ","キラキラ"] },
      { kaomoji: "𓃗 ะ", tags: ["馬","ヒエログリフ","タイ文字"] },
      { kaomoji: "♘☪♡♞", tags: ["馬","チェス","ハート"] },
      { kaomoji: "∈･^)೨⁾⁾", tags: ["馬","基本形","動き"] },
      { kaomoji: "𓃗✧", tags: ["馬","ヒエログリフ","星"] },
      { kaomoji: "𓃗", tags: ["馬","ヒエログリフ","エジプト"] },
      { kaomoji: "𓃗♡", tags: ["馬","ヒエログリフ","ハート"] },
      { kaomoji: "(☋)･^ミｳﾏｰ", tags: ["馬","基本形","ウマー"] },
      { kaomoji: "♘♡♞", tags: ["馬","チェス","ラブ"] },
      { kaomoji: "∈･^ミ ﾋﾋｨｰﾝ", tags: ["馬","基本形","鳴き声"] },
      { kaomoji: "𓃗ˊᵕˋ", tags: ["馬","ヒエログリフ","笑顔"] },
      { kaomoji: "♘⋆♞", tags: ["馬","チェス","キラキラ"] },
    ],
  },
  {
    title: "絵文字付き 🐴",
    items: [
      { kaomoji: "🐴( '-' 🐴)ｳﾏﾁｬﾝ", tags: ["馬","絵文字","ウマちゃん"] },
      { kaomoji: "(・∀・)🐴", tags: ["馬","絵文字","笑顔"] },
      { kaomoji: "(＾ω＾)🐎", tags: ["馬","絵文字","にこにこ"] },
      { kaomoji: "(´・ω・`)🐴", tags: ["馬","絵文字","ショボーン"] },
      { kaomoji: "(*´▽`*)🐎", tags: ["馬","絵文字","嬉しい"] },
      { kaomoji: "(≧∇≦)🐴", tags: ["馬","絵文字","テンション高い"] },
      { kaomoji: "(ﾉ´∀`*)🏇", tags: ["馬","絵文字","競馬"] },
      { kaomoji: "🐴(｀・ω・´)", tags: ["馬","絵文字","キリッ"] },
      { kaomoji: "🐎(* 'ω')ﾉ", tags: ["馬","絵文字","手を振る"] },
      { kaomoji: "🏇(*ﾟ∀ﾟ)ｯ", tags: ["馬","絵文字","興奮"] },
      { kaomoji: "🐴💨", tags: ["馬","絵文字","ダッシュ"] },
      { kaomoji: "🐎💨💨", tags: ["馬","絵文字","全力疾走"] },
      { kaomoji: "🦄✨", tags: ["馬","絵文字","ユニコーン"] },
      { kaomoji: "🎠✨", tags: ["馬","絵文字","メリーゴーランド"] },
      { kaomoji: "🏇🏆", tags: ["馬","絵文字","優勝"] },
      { kaomoji: "🐴🐴🐴", tags: ["馬","絵文字","三頭"] },
      { kaomoji: "🐎🌟", tags: ["馬","絵文字","スター"] },
      { kaomoji: "🦄🌈", tags: ["馬","絵文字","虹ユニコーン"] },
      { kaomoji: "🐴♡", tags: ["馬","絵文字","ラブ"] },
      { kaomoji: "🐎♪", tags: ["馬","絵文字","音楽"] },
      { kaomoji: "🏇✧", tags: ["馬","絵文字","キラキラ競馬"] },
      { kaomoji: "🐴(*´∀`*)", tags: ["馬","絵文字","幸せ"] },
      { kaomoji: "🐎(^_^)", tags: ["馬","絵文字","ニコニコ"] },
      { kaomoji: "🦄(≧◡≦)", tags: ["馬","絵文字","可愛い"] },
      { kaomoji: "🎠(◕ᴗ◕✿)", tags: ["馬","絵文字","メルヘン"] },
      { kaomoji: "🏇ヽ(^o^)丿", tags: ["馬","絵文字","万歳"] },
      { kaomoji: "🐴(ノ◕ヮ◕)ノ*:・゚✧", tags: ["馬","絵文字","魔法"] },
      { kaomoji: "🐎(ᵔᴥᵔ)", tags: ["馬","絵文字","くま顔"] },
      { kaomoji: "🦄(✧ω✧)", tags: ["馬","絵文字","キラキラ目"] },
      { kaomoji: "🐴٩(^‿^)۶", tags: ["馬","絵文字","ガッツ"] },
      { kaomoji: "🐎(｡♥‿♥｡)", tags: ["馬","絵文字","ラブラブ"] },
      { kaomoji: "🏇(☆▽☆)", tags: ["馬","絵文字","目がキラキラ"] },
      { kaomoji: "🐴(´,,•ω•,,)♡", tags: ["馬","絵文字","照れ"] },
      { kaomoji: "🐎(•̀ᴗ•́)و", tags: ["馬","絵文字","ファイト"] },
    ],
  },
  {
    title: "チェス・特殊文字 ♘",
    items: [
      { kaomoji: "♘", tags: ["馬","チェス","ナイト白"] },
      { kaomoji: "♞", tags: ["馬","チェス","ナイト黒"] },
      { kaomoji: "♘♞", tags: ["馬","チェス","ペア"] },
      { kaomoji: "♘✦♘", tags: ["馬","チェス","星"] },
      { kaomoji: "𓃗𓃗𓃗", tags: ["馬","ヒエログリフ","群れ"] },
      { kaomoji: "♞♡♘", tags: ["馬","チェス","ラブ"] },
      { kaomoji: "♘⋆♘", tags: ["馬","チェス","キラキラ"] },
      { kaomoji: "✧♘✧", tags: ["馬","チェス","装飾"] },
      { kaomoji: "𐂂𐂃", tags: ["馬","古代文字","線刻"] },
      { kaomoji: "𐂄𐂅", tags: ["馬","古代文字","ミノア"] },
      { kaomoji: "♘♘♘", tags: ["馬","チェス","三頭"] },
      { kaomoji: "♞♞♞", tags: ["馬","チェス","三頭黒"] },
      { kaomoji: "𓃗✧𓃗", tags: ["馬","ヒエログリフ","キラキラ"] },
      { kaomoji: "♘♡♡♘", tags: ["馬","チェス","ダブルハート"] },
      { kaomoji: "✦♞✦", tags: ["馬","チェス","星黒"] },
      { kaomoji: "𓃗⋆✧𓃗", tags: ["馬","ヒエログリフ","装飾"] },
      { kaomoji: "♘☆♘", tags: ["馬","チェス","白星"] },
      { kaomoji: "♞★♞", tags: ["馬","チェス","黒星"] },
    ],
  },
];

