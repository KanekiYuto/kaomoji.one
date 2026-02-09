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
  title: "たぬき/狸/タヌキ顔文字一覧（Kaomoji）｜基本・かわいい・シンプルもコピペ",
  description:
    "たぬき/狸/タヌキ顔文字（Kaomoji）をまとめて掲載。基本・かわいい・シンプル・デコ・AA・テキスト系まで。検索＆ワンクリックでコピーして、LINE/X（Twitter）/Instagram/Discordにそのままコピペ。登録不要で無料。スマホでもOK。",
  ...withCanonical("/tanuki-kaomoji"),
};

export const tanukiKaomojiHeroContent: KaomojiHeroProps = {
  title: "たぬき/狸/タヌキ顔文字一覧",
  kaomoji: "₍ᐢ⓿ᴥ⓿ᐢ₎  ₍ᐢ⓿ᴥ⓿ᐢ₎♡",
  subtitle: "基本・かわいいまで【コピペ簡単】",
  description:
    "「たぬき/狸/タヌキっぽさ」が出る顔文字を集めました。シンプルから可愛い系、装飾つき、ユニーク系まで幅広く掲載。気に入った顔文字はワンクリックでコピーして、そのまま貼り付けできます。",
  primaryCta: { href: "#list", label: "顔文字を探す" },
  secondaryCta: { href: "/", label: "ホームへ" },
};

export const tanukiKaomojiWhatContent: KaomojiWhatProps = {
  heading: "たぬき/狸/タヌキ顔文字（Kaomoji）とは？",
  intro:
    "たぬき/狸/タヌキ顔文字は、記号や絵文字、キャラっぽいパーツを組み合わせて「たぬき/狸/タヌキ」の雰囲気を表現するKaomojiです。短い一言でもテーマが伝わりやすく、SNSやチャットのリアクションに便利です。",
  usageHeading: "使えるシーン",
  usageItems: [
    "たぬき/狸/タヌキの話題に",
    "挨拶や日常の返信に",
    "SNS投稿のテーマに",
    "かわいく盛りたいときに",
    "ネタやユニークな一言に",
  ],
  typesHeading: "たぬき/狸/タヌキ顔文字の種類",
  types: [
    {
      title: "基本",
      description: "このカテゴリの定番をまとめてチェック。",
      example: "例: ₍ᐢ⓿ᴥ⓿ᐢ₎  ⋝^⁎⓿ᴥ⓿⁎^⋜",
    },
    {
      title: "かわいい",
      description: "このカテゴリの定番をまとめてチェック。",
      example: "例: ₍ᐢ⓿ᴥ⓿ᐢ₎♡  ₍ᐢ˙꒳˙ᐢ₎",
    },
    {
      title: "シンプル",
      description: "このカテゴリの定番をまとめてチェック。",
      example: "例: ₍ᐢ⸝•ᴥ•⸝ᐢ₎  ( ⓿ᴥ⓿)",
    },
    {
      title: "デコ",
      description: "このカテゴリの定番をまとめてチェック。",
      example: "例: ┌(┌ ᐢ⓿ᴥ⓿ᐢ)┐ﾀﾞﾝｯ  (Ѳ(ｴ)Ѳ*)⊃",
    },
    {
      title: "AA・テキスト系",
      description: "このカテゴリの定番をまとめてチェック。",
      example: "例: . (⌒)_(⌒) ☪︎.˚ ⋝⁎⓿ᴥ⓿⋜ / , ─ ヽ ∪| x )  / ヽ ／ヽ ／ ￣￣￣＼)| / /⌒Ｙ⌒＼ ヽ ｜(●/▼ヽ●) | /／(_人_) ＼ ヽ \\彡彡 ミミﾐﾌ",
    },
  ],
  featuresHeading: "たぬき/狸/タヌキらしさが出るポイント",
  features: [
    { symbol: "₍ᐢ⓿ᴥ⓿ᐢ₎", title: "定番", description: "まずは短くて使いやすい定番から。" },
    { symbol: "♡", title: "かわいい", description: "かわいい系のカテゴリを選ぶと柔らかい印象に。" },
    { symbol: "✨", title: "装飾", description: "絵文字や装飾つきは投稿で映えます。" },
    { symbol: "ASCII", title: "AA/アート", description: "大きめの表現はネタとして強いです。" },
  ],
};

export const tanukiKaomojiWhyContent: KaomojiWhyProps = {
  heading: "たぬき/狸/タヌキ顔文字の使い分け",
  subheading: "シンプルから装飾まで。場面に合わせて“雰囲気”を調整できます。",
  guideHeading: "シーン別ガイド",
  guides: [
    {
      title: "日常の返信",
      bullets: ["短めのシンプル系が自然", "文章に馴染みやすい"],
      recommend: "おすすめ: ₍ᐢ⓿ᴥ⓿ᐢ₎",
    },
    {
      title: "SNS投稿",
      bullets: ["装飾つきでテーマが伝わりやすい", "写真と合わせると映える"],
      recommend: "おすすめ: ₍ᐢ⓿ᴥ⓿ᐢ₎♡",
    },
    {
      title: "ネタ・ユニーク",
      bullets: ["ユニーク/AA系でインパクト", "使いすぎると読みにくいので注意"],
      recommend: "おすすめ: . (⌒)_(⌒) ☪︎.˚ ⋝⁎⓿ᴥ⓿⋜ / , ─ ヽ ∪| x )",
    },
    {
      title: "かわいく盛る",
      bullets: ["可愛いカテゴリを選ぶ", "一言に添えると収まりが良い"],
      recommend: "おすすめ: ₍ᐢ⓿ᴥ⓿ᐢ₎♡",
    },
  ],
  cultureHeading: "「たぬき/狸/タヌキ」モチーフは一言で伝わる",
  cultureBody:
    "たぬき/狸/タヌキは見た目のイメージが強く、短い文章でもテーマが伝わりやすいモチーフです。顔文字を添えるだけで、投稿や返信の雰囲気を軽く・かわいく・面白く調整できます。",
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
      example: "例: 今日はいい日 ₍ᐢ⓿ᴥ⓿ᐢ₎",
    },
    {
      title: "投稿のテーマ",
      body: "写真や話題に合わせて選ぶと伝わりやすい。",
      example: "例: たぬき/狸/タヌキかわいい ₍ᐢ⓿ᴥ⓿ᐢ₎♡",
    },
  ],
};

export const tanukiKaomojiFaqContent: KaomojiFaqProps = {
  heading: "よくある質問（FAQ）",
  subheading: "たぬき/狸/タヌキ顔文字、迷ったらここだけ見ればOK。",
  items: [
    {
      question: "たぬき/狸/タヌキ顔文字はどうやってコピーできますか？",
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

export const tanukiKaomojiGroups: KaomojiCollectionGroup[] = [
  {
    title: "基本",
    items: [
      { kaomoji: "₍ᐢ⓿ᴥ⓿ᐢ₎", tags: ["基本","定番","可愛い"] },
      { kaomoji: "⋝^⁎⓿ᴥ⓿⁎^⋜", tags: ["基本","定番","人気"] },
      { kaomoji: "‎⓿ᴥ⓿", tags: ["シンプル","基本"] },
      { kaomoji: "⋝⁎⓿ᴥ⓿⁎⋜", tags: ["基本","可愛い"] },
      { kaomoji: "^⁎⓿ᴥ⓿⁎^", tags: ["基本","シンプル"] },
      { kaomoji: "‪₍ᐢ⓿ө⓿ᐢ₎‬", tags: ["基本","可愛い"] },
      { kaomoji: "ᐢ⓿ᴥ⓿ᐢ", tags: ["シンプル","基本"] },
      { kaomoji: "₍ᐢ • ᴥ • ᐢ₎", tags: ["基本","優しい"] },
      { kaomoji: "(ᐢ・ᴥ・ᐢ)", tags: ["基本","可愛い"] },
      { kaomoji: "⓿ᴥ⓿", tags: ["シンプル","ミニマル"] },
      { kaomoji: "₍ᐢ·ꞈ·ᐢ₎", tags: ["基本","シンプル"] },
      { kaomoji: "⠀⠀ᐢ⸌ᴥ⸍ᐢ", tags: ["シンプル","困り"] },
      { kaomoji: "⋝ᐢ⁎⓿ө⓿⁎ᐢ⋜", tags: ["基本","装飾"] },
      { kaomoji: "⋝⁎₍ᴥ₎⁎⋜", tags: ["基本","シンプル"] },
      { kaomoji: "⋝₍ᐡᴥᐡ₎⋜", tags: ["基本","シンプル"] },
    ],
  },
  {
    title: "かわいい",
    items: [
      { kaomoji: "₍ᐢ⓿ᴥ⓿ᐢ₎♡", tags: ["可愛い","ハート","愛"] },
      { kaomoji: "₍ᐢ˙꒳˙ᐢ₎", tags: ["可愛い","笑顔"] },
      { kaomoji: "c( ᐢ⓿ᴥ⓿)", tags: ["可愛い","ポーズ"] },
      { kaomoji: "₍ᐢ⓿ᴥ⓿ᐢ₎✨", tags: ["可愛い","キラキラ"] },
      { kaomoji: "(ᐢ˘ω˘ᐢ)⸝", tags: ["可愛い","癒し"] },
      { kaomoji: "₍ᐢᴥᐢ₎🐾", tags: ["可愛い","肉球"] },
      { kaomoji: "ᐢ⓿ᴥ⓿ᐢฅ", tags: ["可愛い","手"] },
      { kaomoji: "( ⓿ᴥ⓿ )〜☆", tags: ["可愛い","星"] },
      { kaomoji: "₍ᐢ⓿ᴥ⓿ᐢ₎♪", tags: ["可愛い","音楽"] },
      { kaomoji: "(ᐢ'ᴥ'ᐢ)", tags: ["可愛い","優しい"] },
      { kaomoji: "⸝⸝(ᐢᴥᐢ)⸝⸝", tags: ["可愛い","装飾"] },
      { kaomoji: "(ᐢ⌒ᴥ⌒ᐢ)⎝", tags: ["可愛い","笑顔"] },
      { kaomoji: "₍ᐢ⸝⸝•ω•⸝⸝ᐢ₎", tags: ["可愛い","装飾"] },
      { kaomoji: "₍ᐢ•⸝⸝•ᐢ₎", tags: ["可愛い","優しい"] },
      { kaomoji: "(ᐢ´•ᴥ•`ᐢ)", tags: ["可愛い","優しい"] },
      { kaomoji: "(●´^｀●)", tags: ["照れ","可愛い"] },
      { kaomoji: "⋝ᐡᵔᴥᵔᐡ⋜", tags: ["可愛い","笑顔"] },
      { kaomoji: "⋝ ^ᴥ^⋜", tags: ["可愛い","シンプル"] },
      { kaomoji: "⋝⁎ᵒᴥᵒ⁎⋜", tags: ["可愛い","丸い目"] },
      { kaomoji: "⋝⁎⍢ᴥ⍢⁎⋜", tags: ["可愛い","キラキラ"] },
    ],
  },
  {
    title: "シンプル",
    items: [
      { kaomoji: "₍ᐢ⸝•ᴥ•⸝ᐢ₎", tags: ["表情","可愛い"] },
      { kaomoji: "( ⓿ᴥ⓿)", tags: ["表情","基本"] },
      { kaomoji: "( ⓿^ω^)ノ", tags: ["手振り","挨拶"] },
      { kaomoji: "₍ᐢᐢ⏝ᐢᐢ₎", tags: ["悲しい","落ち込み"] },
      { kaomoji: "₍ᐢↀωↀᐢ₎", tags: ["キラキラ","興奮"] },
      { kaomoji: "( ᐢ·ꞈ·ᐢ)", tags: ["表情","シンプル"] },
      { kaomoji: "(₍ᐢ⸌ᴥ⸍ᐢ₎)", tags: ["困り","心配"] },
      { kaomoji: "(ᐢ-ω-)ᐢ", tags: ["疲れ","眠い"] },
      { kaomoji: "( ⓿˃ᴥ˂)", tags: ["喜び","嬉しい"] },
      { kaomoji: "( ⓿･ᴥ･⓿ )∩", tags: ["挨拶","手"] },
      { kaomoji: "( ᐢ⸍ω⸍ᐢ)", tags: ["困り","心配"] },
      { kaomoji: "₍ᐢ˃ᇂ˂ᐢ₎", tags: ["困り","悩み"] },
      { kaomoji: "⸝⸝(ᐢ⏝⸝ᐢ)⸝⸝", tags: ["悲しい","落ち込み"] },
      { kaomoji: "₍ᐢ⸍⸍⸍⸍␢₎", tags: ["疲れ","眠い"] },
      { kaomoji: "₍ᐢ˘⣿⣿˘ᐢ₎", tags: ["泣き","悲しい"] },
      { kaomoji: "( ᐢ⤷ᴥ⤸ᐢ )", tags: ["驚き","びっくり"] },
      { kaomoji: "₍ᐢ⧫⧫ᐢ₎", tags: ["キラキラ","目"] },
      { kaomoji: "₍ᐢ⃘˃ᇂ˂ᐢ₎", tags: ["困り","照れ"] },
      { kaomoji: "₍ᐢ⤷ᴥ⤸ᐢ₎", tags: ["驚き","困惑"] },
      { kaomoji: "՞ -_- ՞", tags: ["無表情","真顔"] },
      { kaomoji: "(｀ｴ´)", tags: ["ムッ","不満"] },
    ],
  },
  {
    title: "デコ",
    items: [
      { kaomoji: "┌(┌ ᐢ⓿ᴥ⓿ᐢ)┐ﾀﾞﾝｯ", tags: ["アクション","ダンス"] },
      { kaomoji: "(Ѳ(ｴ)Ѳ*)⊃", tags: ["アクション","指差し"] },
      { kaomoji: "(⓿ᴥ⓿ ᐢ )੭", tags: ["アクション","手"] },
      { kaomoji: "(⊃ᐢ·ᴥ·ᐢ⊂)", tags: ["抱きしめる","ハグ"] },
      { kaomoji: "(⊃ ᐢ⸌ᴥ⸍ᐢ⊂)", tags: ["抱きしめる","困り"] },
      { kaomoji: "₍ᐢꙬᐢ₎/", tags: ["万歳","喜び"] },
      { kaomoji: "ฅ(≦•ω•≧)ฅ", tags: ["手","可愛い"] },
      { kaomoji: "ʕ•͡ω•ʔ", tags: ["熊風","可愛い"] },
      { kaomoji: "ʕ◎Å◎ʔ", tags: ["驚き","びっくり"] },
      { kaomoji: "≧•ω•≦", tags: ["興奮","喜び"] },
      { kaomoji: "(・∞・^≡)", tags: ["動き","左向き"] },
      { kaomoji: "(≡^・∞・)", tags: ["動き","右向き"] },
      { kaomoji: "ﾀﾇｷﾊﾟﾝﾁ(ฅ˙ ꒳ ˙ )っ=)´Д`):∵ﾄﾞｺﾞｫ", tags: ["パンチ","アクション","面白い"] },
    ],
  },
  {
    title: "AA・テキスト系",
    items: [
      { kaomoji: ". (⌒)_(⌒) ☪︎.˚\n⋝⁎⓿ᴥ⓿⋜\n/ , ─ ヽ\n∪| x )", tags: ["特殊","AA","複雑"] },
      { kaomoji: "/ ヽ ／ヽ\n／ ￣￣￣＼)|\n/ /⌒Ｙ⌒＼ ヽ\n｜(●/▼ヽ●) |\n/／(_人_) ＼ ヽ\n\\彡彡 ミミﾐﾌ", tags: ["AA","アート","詳細"] },
      { kaomoji: "◎___◎\n(=ΘεΘ=)ノ", tags: ["AA","手振り"] },
      { kaomoji: "へwへ\n⋝ ⁎⓿ᴥ⓿⁎⋜\n/ ,〰〰､ヽ\nし （ x ）J\n_ '､ヽ ノ ∧\n(___ノＵωU (酒)", tags: ["AA","お酒","リラックス"] },
      { kaomoji: "⸝⸝ᐢ⓿ᴥ⓿ᐢ⸝⸝", tags: ["装飾","可愛い"] },
      { kaomoji: "₍ᐢ⸌ᴥ⸍ᐢ₎ 🦔", tags: ["絵文字","複合"] },
      { kaomoji: "₍ᐢ🦔🦔ᐢ₎", tags: ["絵文字","複合"] },
      { kaomoji: "⠀⣀⣀⣀(ᐢ⓿ᴥ⓿ᐢ)⣀⣀⣀⠀", tags: ["装飾","特殊"] },
      { kaomoji: "ʘ̥ꀾʘ̥", tags: ["特殊","ユニーク"] },
      { kaomoji: "ʕ•ᴥ•ʔ", tags: ["熊風","基本"] },
      { kaomoji: "⋝^⁎⓿ᴥ⓿⁎^ ⋜⋝^⁎⓿ᴥ⓿⁎^ ⋜", tags: ["連続","複数"] },
    ],
  },
];

