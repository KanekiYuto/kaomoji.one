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
  title: "うさぎ/ウサギ/兎顔文字一覧（Kaomoji）｜基本うさぎ顔文字・ハート付きうさぎ・装飾・絵文字風もコピペ",
  description:
    "うさぎ/ウサギ/兎顔文字（Kaomoji）をまとめて掲載。基本うさぎ顔文字・ハート付きうさぎ・装飾・絵文字風・複雑・組み合わせ・その他スタイルまで。検索＆ワンクリックでコピーして、LINE/X（Twitter）/Instagram/Discordにそのままコピペ。登録不要で無料。スマホでもOK。",
  ...withCanonical("/rabbit-kaomoji"),
};

export const rabbitKaomojiHeroContent: KaomojiHeroProps = {
  title: "うさぎ/ウサギ/兎顔文字一覧",
  kaomoji: "₍ᐢ.ˬ.ᐢ₎  ₍ᐢ. ̫.ᐢ₎",
  subtitle: "基本うさぎ顔文字・ハート付きうさぎまで【コピペ簡単】",
  description:
    "「うさぎ/ウサギ/兎っぽさ」が出る顔文字を集めました。シンプルから可愛い系、装飾つき、ユニーク系まで幅広く掲載。気に入った顔文字はワンクリックでコピーして、そのまま貼り付けできます。",
  primaryCta: { href: "#list", label: "顔文字を探す" },
  secondaryCta: { href: "/", label: "ホームへ" },
};

export const rabbitKaomojiWhatContent: KaomojiWhatProps = {
  heading: "うさぎ/ウサギ/兎顔文字（Kaomoji）とは？",
  intro:
    "うさぎ/ウサギ/兎顔文字は、記号や絵文字、キャラっぽいパーツを組み合わせて「うさぎ/ウサギ/兎」の雰囲気を表現するKaomojiです。短い一言でもテーマが伝わりやすく、SNSやチャットのリアクションに便利です。",
  usageHeading: "使えるシーン",
  usageItems: [
    "うさぎ/ウサギ/兎の話題に",
    "挨拶や日常の返信に",
    "SNS投稿のテーマに",
    "かわいく盛りたいときに",
    "ネタやユニークな一言に",
  ],
  typesHeading: "うさぎ/ウサギ/兎顔文字の種類",
  types: [
    {
      title: "基本うさぎ顔文字",
      description: "このカテゴリの定番をまとめてチェック。",
      example: "例: ₍ᐢ.ˬ.ᐢ₎  ₍ᐢ. ̫.ᐢ₎",
    },
    {
      title: "ハート付きうさぎ",
      description: "このカテゴリの定番をまとめてチェック。",
      example: "例: ₍ᐢ. ̫.ᐢ₎♡  ₍ᐢ‥ᐢ₎ ♡",
    },
    {
      title: "装飾・絵文字風",
      description: "このカテゴリの定番をまとめてチェック。",
      example: "例: ₍ᐢ..ᐢ₎🎀  ₍ᐢ- -ᐢ₎🎀",
    },
    {
      title: "複雑・組み合わせ",
      description: "このカテゴリの定番をまとめてチェック。",
      example: "例: ૮ ꒰ྀི ∩ˊ ᵕ ˋ∩ ꒱ྀི ა  ૮₍⑅ᐢ..ᐢ₎ა",
    },
    {
      title: "その他スタイル",
      description: "このカテゴリの定番をまとめてチェック。",
      example: "例: ᕱ⑅ᕱ  (・×・)",
    },
  ],
  featuresHeading: "うさぎ/ウサギ/兎らしさが出るポイント",
  features: [
    { symbol: "₍ᐢ.ˬ.ᐢ₎", title: "定番", description: "まずは短くて使いやすい定番から。" },
    { symbol: "♡", title: "かわいい", description: "かわいい系のカテゴリを選ぶと柔らかい印象に。" },
    { symbol: "✨", title: "装飾", description: "絵文字や装飾つきは投稿で映えます。" },
    { symbol: "ASCII", title: "AA/アート", description: "大きめの表現はネタとして強いです。" },
  ],
};

export const rabbitKaomojiWhyContent: KaomojiWhyProps = {
  heading: "うさぎ/ウサギ/兎顔文字の使い分け",
  subheading: "シンプルから装飾まで。場面に合わせて“雰囲気”を調整できます。",
  guideHeading: "シーン別ガイド",
  guides: [
    {
      title: "日常の返信",
      bullets: ["短めのシンプル系が自然", "文章に馴染みやすい"],
      recommend: "おすすめ: ₍ᐢ.ˬ.ᐢ₎",
    },
    {
      title: "SNS投稿",
      bullets: ["装飾つきでテーマが伝わりやすい", "写真と合わせると映える"],
      recommend: "おすすめ: ₍ᐢ..ᐢ₎🎀",
    },
    {
      title: "ネタ・ユニーク",
      bullets: ["ユニーク/AA系でインパクト", "使いすぎると読みにくいので注意"],
      recommend: "おすすめ: ₍ᐢ..ᐢ₎🎀",
    },
    {
      title: "かわいく盛る",
      bullets: ["可愛いカテゴリを選ぶ", "一言に添えると収まりが良い"],
      recommend: "おすすめ: ₍ᐢ..ᐢ₎🎀",
    },
  ],
  cultureHeading: "「うさぎ/ウサギ/兎」モチーフは一言で伝わる",
  cultureBody:
    "うさぎ/ウサギ/兎は見た目のイメージが強く、短い文章でもテーマが伝わりやすいモチーフです。顔文字を添えるだけで、投稿や返信の雰囲気を軽く・かわいく・面白く調整できます。",
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
      example: "例: 今日はいい日 ₍ᐢ.ˬ.ᐢ₎",
    },
    {
      title: "投稿のテーマ",
      body: "写真や話題に合わせて選ぶと伝わりやすい。",
      example: "例: うさぎ/ウサギ/兎かわいい ₍ᐢ. ̫.ᐢ₎",
    },
  ],
};

export const rabbitKaomojiFaqContent: KaomojiFaqProps = {
  heading: "よくある質問（FAQ）",
  subheading: "うさぎ/ウサギ/兎顔文字、迷ったらここだけ見ればOK。",
  items: [
    {
      question: "うさぎ/ウサギ/兎顔文字はどうやってコピーできますか？",
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

export const rabbitKaomojiGroups: KaomojiCollectionGroup[] = [
  {
    title: "基本うさぎ顔文字",
    items: [
      { kaomoji: "₍ᐢ.ˬ.ᐢ₎", tags: ["うさぎ","基本","可愛い","人気"] },
      { kaomoji: "₍ᐢ. ̫.ᐢ₎", tags: ["うさぎ","基本","可愛い"] },
      { kaomoji: "( ᐡ｡• ·̫ •｡ᐡ )", tags: ["うさぎ","基本","可愛い"] },
      { kaomoji: "₍ᐢ..ᐢ₎", tags: ["うさぎ","基本","シンプル"] },
      { kaomoji: "( ᐡ. ̫ .ᐡ )", tags: ["うさぎ","基本","可愛い"] },
      { kaomoji: "₍ᐢ｡•༝•｡ᐢ₎", tags: ["うさぎ","基本","可愛い"] },
      { kaomoji: "ᐢ.ˬ.ᐢ", tags: ["うさぎ","基本","シンプル"] },
      { kaomoji: "₍ᐢ⑅•ᴗ•⑅ᐢ₎", tags: ["うさぎ","基本","嬉しい"] },
      { kaomoji: "₍ᐢ⑅•ω•⑅ᐢ₎", tags: ["うさぎ","基本","嬉しい"] },
      { kaomoji: "₍ᐢ•௰•ᐢ₎", tags: ["うさぎ","基本","嬉しい"] },
      { kaomoji: "₍ᐢ- ̫-ᐢ₎", tags: ["うさぎ","基本","眠い"] },
      { kaomoji: "₍ᐢ- -ᐢ₎", tags: ["うさぎ","基本","眠い"] },
      { kaomoji: "₍ᐢ> ̫<ᐢ₎", tags: ["うさぎ","基本","嬉しい"] },
      { kaomoji: "₍ᐢ⸝⸝- -⸝⸝ᐢ₎", tags: ["うさぎ","基本","眠い"] },
      { kaomoji: "₍ᐢ,,- -,,ᐢ₎", tags: ["うさぎ","基本","眠い"] },
      { kaomoji: "₍ᐢ. ⩊ .ᐢ₎", tags: ["うさぎ","基本","可愛い"] },
      { kaomoji: "₍ᐢ⌯௰⌯ᐢ₎", tags: ["うさぎ","基本","楽しい"] },
      { kaomoji: "₍ᐢ･௰･ᐢ₎", tags: ["うさぎ","基本","楽しい"] },
    ],
  },
  {
    title: "ハート付きうさぎ",
    items: [
      { kaomoji: "₍ᐢ. ̫.ᐢ₎♡", tags: ["うさぎ","ハート","愛情"] },
      { kaomoji: "₍ᐢ‥ᐢ₎ ♡", tags: ["うさぎ","ハート","愛情"] },
      { kaomoji: "₍ᐢ｡•༝•｡ᐢ₎♡", tags: ["うさぎ","ハート","愛情"] },
      { kaomoji: "❤︎₍ᐢ·͈༝·͈ᐢ₎", tags: ["うさぎ","ハート","愛情"] },
      { kaomoji: "₍ᐢ •̥ ̫ •̥ ᐢ₎ ♥", tags: ["うさぎ","ハート","愛情"] },
      { kaomoji: "₍ᐢ•͈༝•͈ᐢ₎♡", tags: ["うさぎ","ハート","愛情"] },
      { kaomoji: "₍ᐢ ̥ ̞ ̥ᐢ₎ ♥", tags: ["うさぎ","ハート","愛情"] },
      { kaomoji: "∩• ௰ •∩ ੈ♡", tags: ["うさぎ","ハート","愛情"] },
      { kaomoji: "( ´x` )♡", tags: ["うさぎ","ハート","愛情"] },
      { kaomoji: "(´･×･`)♡♩", tags: ["うさぎ","ハート","×口"] },
      { kaomoji: "ᕱ⑅ᕱ♥", tags: ["うさぎ","ハート","可愛い"] },
      { kaomoji: "U・x・U♡♡", tags: ["うさぎ","ハート","可愛い"] },
    ],
  },
  {
    title: "装飾・絵文字風",
    items: [
      { kaomoji: "₍ᐢ..ᐢ₎🎀", tags: ["うさぎ","装飾","リボン"] },
      { kaomoji: "₍ᐢ- -ᐢ₎🎀", tags: ["うさぎ","装飾","リボン"] },
      { kaomoji: "₍ᐢ- ̫-ᐢ₎🎀", tags: ["うさぎ","装飾","リボン"] },
      { kaomoji: "₍ᐢ.ˬ.ᐢ🥕₎", tags: ["うさぎ","装飾","人参"] },
      { kaomoji: "₍ᐢ• ·̫ •ᐢ₎⊃🍵", tags: ["うさぎ","装飾","お茶"] },
      { kaomoji: "₍ᐢ⑅•ω•⑅ᐢ₎ദ⸒⸒", tags: ["うさぎ","装飾","動作"] },
      { kaomoji: "₍ᐢ⑅•ᴗ•⑅ᐢ₎ദ⸒⸒", tags: ["うさぎ","装飾","動作"] },
      { kaomoji: "₍ᐢ•ᴗ•⑅ᐢ₎ദ⸒⸒❦ʾʾ", tags: ["うさぎ","装飾","ハート"] },
      { kaomoji: "₍ᐢ..ᐢ₎ദ⸒⸒", tags: ["うさぎ","装飾","手を振る"] },
      { kaomoji: "₍ᐢ ᐢ₎ദ⸒⸒", tags: ["うさぎ","装飾","手を振る"] },
      { kaomoji: "₍ᐢ.ˬ.ᐢ₎ฅ", tags: ["うさぎ","装飾","手"] },
      { kaomoji: "₍ᐢ• ·̫ •ᐢ₎⊃", tags: ["うさぎ","装飾","手を出す"] },
      { kaomoji: "ପ₍ᐢ｡•༝•｡ᐢ₎ଓ", tags: ["うさぎ","装飾","抱きしめる"] },
      { kaomoji: "♡₍ᐢ⑅•ω•⑅ᐢ₎ദ⸒⸒", tags: ["うさぎ","装飾","ハート"] },
      { kaomoji: "ʜɪ⚞₍⑅ᐢ.ˬ.ᐢ₎♡", tags: ["うさぎ","装飾","挨拶"] },
      { kaomoji: "ʚ₍⑅ᐢ.ﻌ.ᐢ₎ɞ", tags: ["うさぎ","装飾","羽"] },
    ],
  },
  {
    title: "複雑・組み合わせ",
    items: [
      { kaomoji: "૮ ꒰ྀི ∩ˊ ᵕ ˋ∩ ꒱ྀི ა", tags: ["うさぎ","複雑","可愛い"] },
      { kaomoji: "૮₍⑅ᐢ..ᐢ₎ა", tags: ["うさぎ","複雑","可愛い"] },
      { kaomoji: "໒꒰ྀི⸝⸝´ ˘ `⸝⸝꒱ྀིა", tags: ["うさぎ","複雑","可愛い"] },
      { kaomoji: "꒰ᐢ⸝⸝•༝•⸝⸝ᐢ꒱", tags: ["うさぎ","複雑","可愛い"] },
      { kaomoji: "꒰ᐢ⸝⸝•௰•⸝⸝ᐢ꒱", tags: ["うさぎ","複雑","可愛い"] },
      { kaomoji: "꒰ᐡ⸝⸝ᴗ ̫ ᴗ⸝⸝ᐡ꒱", tags: ["うさぎ","複雑","可愛い"] },
      { kaomoji: "૮₍ .ܸ՞‸ .ܸ՞₎ა", tags: ["うさぎ","複雑","泣く"] },
      { kaomoji: "૮(˵⩌ᴗ⩌˵)ა", tags: ["うさぎ","複雑","嬉しい"] },
      { kaomoji: "૮꒰ྀི⸝⸝․․⸝⸝꒱ྀིა", tags: ["うさぎ","複雑","可愛い"] },
      { kaomoji: "૮ . ̫ . ა", tags: ["うさぎ","複雑","シンプル"] },
      { kaomoji: "૮₍´｡• ᵕ •｡`₎ა", tags: ["うさぎ","複雑","可愛い"] },
      { kaomoji: "໒꒰ྀི⁄ ⁄>⁄ ⁄ <⁄ ⁄꒱ྀི১", tags: ["うさぎ","複雑","照れる"] },
      { kaomoji: "໒꒰ྀིᵔ ᵕ ᵔ ꒱ྀི১", tags: ["うさぎ","複雑","嬉しい"] },
      { kaomoji: "૮₍๑⃙⃘´༥`๑⃙⃘₎ა", tags: ["うさぎ","複雑","困る"] },
      { kaomoji: "໒꒰ྀི•᷄ ࡇ •᷅ ꒱ྀིა", tags: ["うさぎ","複雑","困る"] },
      { kaomoji: "꒰ᐢ. ⩊ . ྀིᐢ꒱", tags: ["うさぎ","複雑","可愛い"] },
    ],
  },
  {
    title: "その他スタイル",
    items: [
      { kaomoji: "ᕱ⑅ᕱ", tags: ["うさぎ","特殊","シンプル"] },
      { kaomoji: "(・×・)", tags: ["うさぎ","×口","人気"] },
      { kaomoji: "(´・×・｀)", tags: ["うさぎ","×口","可愛い"] },
      { kaomoji: "(´･×･`)", tags: ["うさぎ","×口","可愛い"] },
      { kaomoji: "(*´×`*)", tags: ["うさぎ","×口","照れる"] },
      { kaomoji: "(๑´×`๑)", tags: ["うさぎ","×口","照れる"] },
      { kaomoji: "U(・x・)U", tags: ["うさぎ","×口","耳付き"] },
      { kaomoji: "⌒(・x・)⌒", tags: ["うさぎ","×口","耳付き"] },
      { kaomoji: "（≡・ x ・≡）", tags: ["うさぎ","可愛い","ひげ"] },
      { kaomoji: "U｡･.･｡U", tags: ["うさぎ","可愛い","耳付き"] },
      { kaomoji: "(•ㅅ•)", tags: ["うさぎ","シンプル","可愛い"] },
      { kaomoji: "￣(•ㅅ•)￣", tags: ["うさぎ","耳付き","可愛い"] },
      { kaomoji: "/(•ㅅ•)\\", tags: ["うさぎ","耳付き","可愛い"] },
      { kaomoji: "(๑╹ᆺ╹)", tags: ["うさぎ","可愛い","キラキラ"] },
      { kaomoji: "(,,◕ ⋏ ◕,,)", tags: ["うさぎ","可愛い","目"] },
      { kaomoji: "˚ᆺ˚", tags: ["うさぎ","シンプル","顔"] },
    ],
  },
];

