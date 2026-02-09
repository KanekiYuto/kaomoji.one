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
  title: "鳥顔文字一覧（Kaomoji）｜シンプル・かわいい・ひよこもコピペ",
  description:
    "鳥顔文字（Kaomoji）をまとめて掲載。シンプル・かわいい・ひよこ・飛ぶ鳥・ふくろう・ペンギン・エジプト風・歌う鳥まで。検索＆ワンクリックでコピーして、LINE/X（Twitter）/Instagram/Discordにそのままコピペ。登録不要で無料。スマホでもOK。",
  ...withCanonical("/tori-kaomoji"),
};

export const toriKaomojiHeroContent: KaomojiHeroProps = {
  title: "鳥顔文字一覧",
  kaomoji: "(・⊝・)  🐦(*•ө•*)",
  subtitle: "シンプル・かわいいまで【コピペ簡単】",
  description:
    "「鳥っぽさ」が出る顔文字を集めました。シンプルから可愛い系、装飾つき、ユニーク系まで幅広く掲載。気に入った顔文字はワンクリックでコピーして、そのまま貼り付けできます。",
  primaryCta: { href: "#list", label: "顔文字を探す" },
  secondaryCta: { href: "/", label: "ホームへ" },
};

export const toriKaomojiWhatContent: KaomojiWhatProps = {
  heading: "鳥顔文字（Kaomoji）とは？",
  intro:
    "鳥顔文字は、記号や絵文字、キャラっぽいパーツを組み合わせて「鳥」の雰囲気を表現するKaomojiです。短い一言でもテーマが伝わりやすく、SNSやチャットのリアクションに便利です。",
  usageHeading: "使えるシーン",
  usageItems: [
    "鳥の話題に",
    "挨拶や日常の返信に",
    "SNS投稿のテーマに",
    "かわいく盛りたいときに",
    "ネタやユニークな一言に",
  ],
  typesHeading: "鳥顔文字の種類",
  types: [
    {
      title: "シンプル",
      description: "このカテゴリの定番をまとめてチェック。",
      example: "例: (・⊝・)  (・Θ・)",
    },
    {
      title: "かわいい",
      description: "このカテゴリの定番をまとめてチェック。",
      example: "例: 🐦(*•ө•*)  🕊️(˶ᵔ ᵕ ᵔ˶)",
    },
    {
      title: "ひよこ",
      description: "このカテゴリの定番をまとめてチェック。",
      example: "例: 🐣ピヨピヨ  🐥(・θ・)",
    },
    {
      title: "飛ぶ鳥",
      description: "このカテゴリの定番をまとめてチェック。",
      example: "例: ⋋(◍'Θ'◍)⋌  🕊️ヽ(•‿•)ノ",
    },
    {
      title: "ふくろう",
      description: "このカテゴリの定番をまとめてチェック。",
      example: "例: (ŎωŎ)  🦉(Ő∇Ő)",
    },
  ],
  featuresHeading: "鳥らしさが出るポイント",
  features: [
    { symbol: "(・⊝・)", title: "定番", description: "まずは短くて使いやすい定番から。" },
    { symbol: "♡", title: "かわいい", description: "かわいい系のカテゴリを選ぶと柔らかい印象に。" },
    { symbol: "✨", title: "装飾", description: "絵文字や装飾つきは投稿で映えます。" },
    { symbol: "ASCII", title: "AA/アート", description: "大きめの表現はネタとして強いです。" },
  ],
};

export const toriKaomojiWhyContent: KaomojiWhyProps = {
  heading: "鳥顔文字の使い分け",
  subheading: "シンプルから装飾まで。場面に合わせて“雰囲気”を調整できます。",
  guideHeading: "シーン別ガイド",
  guides: [
    {
      title: "日常の返信",
      bullets: ["短めのシンプル系が自然", "文章に馴染みやすい"],
      recommend: "おすすめ: (・⊝・)",
    },
    {
      title: "SNS投稿",
      bullets: ["装飾つきでテーマが伝わりやすい", "写真と合わせると映える"],
      recommend: "おすすめ: 🐦(*•ө•*)",
    },
    {
      title: "ネタ・ユニーク",
      bullets: ["ユニーク/AA系でインパクト", "使いすぎると読みにくいので注意"],
      recommend: "おすすめ: (Θ皿Θ)",
    },
    {
      title: "かわいく盛る",
      bullets: ["可愛いカテゴリを選ぶ", "一言に添えると収まりが良い"],
      recommend: "おすすめ: 🐦(*•ө•*)",
    },
  ],
  cultureHeading: "「鳥」モチーフは一言で伝わる",
  cultureBody:
    "鳥は見た目のイメージが強く、短い文章でもテーマが伝わりやすいモチーフです。顔文字を添えるだけで、投稿や返信の雰囲気を軽く・かわいく・面白く調整できます。",
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
      example: "例: 今日はいい日 (・⊝・)",
    },
    {
      title: "投稿のテーマ",
      body: "写真や話題に合わせて選ぶと伝わりやすい。",
      example: "例: 鳥かわいい 🐦(*•ө•*)",
    },
  ],
};

export const toriKaomojiFaqContent: KaomojiFaqProps = {
  heading: "よくある質問（FAQ）",
  subheading: "鳥顔文字、迷ったらここだけ見ればOK。",
  items: [
    {
      question: "鳥顔文字はどうやってコピーできますか？",
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

export const toriKaomojiGroups: KaomojiCollectionGroup[] = [
  {
    title: "シンプル",
    items: [
      { kaomoji: "(・⊝・)", tags: ["シンプル","鳥","基本"] },
      { kaomoji: "(・Θ・)", tags: ["シンプル","鳥","基本"] },
      { kaomoji: "∧( 'Θ' )∧", tags: ["シンプル","鳥","翼"] },
      { kaomoji: "(⊙ө⊙)", tags: ["シンプル","鳥","驚き"] },
      { kaomoji: "(◉Θ◉)", tags: ["シンプル","鳥","目が大きい"] },
      { kaomoji: "(・⊝・∞)", tags: ["シンプル","鳥","無限"] },
      { kaomoji: "(・θ・)", tags: ["シンプル","鳥","基本"] },
      { kaomoji: "(°Θ°)", tags: ["シンプル","鳥","驚き"] },
      { kaomoji: "(ΘεΘ)", tags: ["シンプル","鳥","キス"] },
      { kaomoji: "(Θ_Θ)", tags: ["シンプル","鳥","困る"] },
    ],
  },
  {
    title: "かわいい",
    items: [
      { kaomoji: "🐦(*•ө•*)", tags: ["かわいい","鳥","絵文字","ほっぺ"] },
      { kaomoji: "🕊️(˶ᵔ ᵕ ᵔ˶)", tags: ["かわいい","鳥","絵文字","ハト"] },
      { kaomoji: "🐥(•ө•)♡", tags: ["かわいい","鳥","絵文字","ひよこ","ハート"] },
      { kaomoji: "(*•ө•*)", tags: ["かわいい","鳥","ほっぺ"] },
      { kaomoji: "✨(•ө•)✨", tags: ["かわいい","鳥","キラキラ","絵文字"] },
      { kaomoji: "(｡•ө•｡)", tags: ["かわいい","鳥","やさしい"] },
      { kaomoji: "*✯。.⋋('Θ'◍)⋌", tags: ["かわいい","鳥","キラキラ","翼"] },
      { kaomoji: "🌸(•ө•)🌸", tags: ["かわいい","鳥","花","絵文字"] },
      { kaomoji: "(ↀДↀ)✧", tags: ["かわいい","鳥","キラキラ"] },
      { kaomoji: "⊂(◉Θ◉)⊃", tags: ["かわいい","鳥","手を広げる"] },
      { kaomoji: "💕(ˊo̴̶̷̤ ̫ o̴̶̷̤ˋ)💕", tags: ["かわいい","鳥","ハート","絵文字"] },
      { kaomoji: "(◍•ө•◍)", tags: ["かわいい","鳥","ほっぺ"] },
      { kaomoji: "ε('ﻬ')з", tags: ["かわいい","鳥","翼"] },
      { kaomoji: "🎵(•ө•)🎵", tags: ["かわいい","鳥","歌う","絵文字"] },
      { kaomoji: "(๑•ө•๑)", tags: ["かわいい","鳥","タイ文字"] },
    ],
  },
  {
    title: "ひよこ",
    items: [
      { kaomoji: "🐣ピヨピヨ", tags: ["ひよこ","鳥","ピヨピヨ","絵文字"] },
      { kaomoji: "🐥(・θ・)", tags: ["ひよこ","鳥","絵文字"] },
      { kaomoji: "(⊙ө⊙)🐣", tags: ["ひよこ","鳥","絵文字"] },
      { kaomoji: "(Ő θ Ő)", tags: ["ひよこ","鳥","驚き"] },
      { kaomoji: "✨🐤✨", tags: ["ひよこ","鳥","キラキラ","絵文字"] },
      { kaomoji: "(´⊙ө⊙`)", tags: ["ひよこ","鳥","かわいい"] },
      { kaomoji: "🌟(・Θ・)🌟", tags: ["ひよこ","鳥","キラキラ","絵文字"] },
      { kaomoji: "(◦'Θ'◦)", tags: ["ひよこ","鳥","まる"] },
      { kaomoji: "🍀(•ө•)🍀", tags: ["ひよこ","鳥","クローバー","絵文字"] },
      { kaomoji: "(⑅ ॣ•͈ө•͈ ॣ)", tags: ["ひよこ","鳥","かわいい"] },
    ],
  },
  {
    title: "飛ぶ鳥",
    items: [
      { kaomoji: "⋋(◍'Θ'◍)⋌", tags: ["飛ぶ","鳥","翼"] },
      { kaomoji: "🕊️ヽ(•‿•)ノ", tags: ["飛ぶ","鳥","ハト","絵文字"] },
      { kaomoji: "( 'Θ')ノ~~~", tags: ["飛ぶ","鳥","手を振る"] },
      { kaomoji: "✈️(•ө•)✈️", tags: ["飛ぶ","鳥","絵文字"] },
      { kaomoji: "⋋('Θ')⋌", tags: ["飛ぶ","鳥","翼"] },
      { kaomoji: "∧('Θ')∧", tags: ["飛ぶ","鳥","翼"] },
      { kaomoji: "🌤️(◉Θ◉)🌤️", tags: ["飛ぶ","鳥","空","絵文字"] },
      { kaomoji: "ε('Θ')з", tags: ["飛ぶ","鳥","翼"] },
      { kaomoji: "☁️(•ө•)☁️", tags: ["飛ぶ","鳥","雲","絵文字"] },
      { kaomoji: "╰('Θ')╯", tags: ["飛ぶ","鳥","翼"] },
    ],
  },
  {
    title: "ふくろう",
    items: [
      { kaomoji: "(ŎωŎ)", tags: ["ふくろう","鳥","目が大きい"] },
      { kaomoji: "🦉(Ő∇Ő)", tags: ["ふくろう","鳥","絵文字"] },
      { kaomoji: "(Ő ω Ő)", tags: ["ふくろう","鳥","かわいい"] },
      { kaomoji: "🌙(ŎдŎ)🌙", tags: ["ふくろう","鳥","月","絵文字"] },
      { kaomoji: "(◎●◎)", tags: ["ふくろう","鳥","目が大きい"] },
      { kaomoji: "(Ő_Ő)", tags: ["ふくろう","鳥","困る"] },
      { kaomoji: "✨(ŎωŎ)✨", tags: ["ふくろう","鳥","キラキラ","絵文字"] },
      { kaomoji: "(Ő᎑Ő)", tags: ["ふくろう","鳥","かわいい"] },
      { kaomoji: "🌃(Ő∀Ő)🌃", tags: ["ふくろう","鳥","夜","絵文字"] },
      { kaomoji: "(ŎεŎ)", tags: ["ふくろう","鳥","キス"] },
    ],
  },
  {
    title: "ペンギン",
    items: [
      { kaomoji: "🐧(･ω･)", tags: ["ペンギン","鳥","絵文字"] },
      { kaomoji: "(･ө･)", tags: ["ペンギン","鳥","シンプル"] },
      { kaomoji: "❄️🐧❄️", tags: ["ペンギン","鳥","雪","絵文字"] },
      { kaomoji: "(・⊝・｀)", tags: ["ペンギン","鳥","かわいい"] },
      { kaomoji: "🧊(･Θ･)🧊", tags: ["ペンギン","鳥","氷","絵文字"] },
      { kaomoji: "<(･⊝･)>", tags: ["ペンギン","鳥","翼"] },
      { kaomoji: "🌊🐧🌊", tags: ["ペンギン","鳥","海","絵文字"] },
      { kaomoji: "(･⊝･｀)ノ", tags: ["ペンギン","鳥","手を振る"] },
      { kaomoji: "⛄(･ω･)⛄", tags: ["ペンギン","鳥","雪だるま","絵文字"] },
      { kaomoji: "ヽ(･⊝･)ﾉ", tags: ["ペンギン","鳥","喜ぶ"] },
    ],
  },
  {
    title: "エジプト風",
    items: [
      { kaomoji: "𓅪˒˒", tags: ["エジプト","鳥","象形文字"] },
      { kaomoji: "𓅮 𓂃𓋪◌", tags: ["エジプト","鳥","象形文字","飾り"] },
      { kaomoji: "𓅰𓂃𓋪◌", tags: ["エジプト","鳥","象形文字","飾り"] },
      { kaomoji: "𓅯˒˒", tags: ["エジプト","鳥","象形文字"] },
      { kaomoji: "✨𓅪✨", tags: ["エジプト","鳥","象形文字","キラキラ","絵文字"] },
      { kaomoji: "𓅮˒˒˒", tags: ["エジプト","鳥","象形文字"] },
      { kaomoji: "🌟𓅰🌟", tags: ["エジプト","鳥","象形文字","キラキラ","絵文字"] },
      { kaomoji: "𓅱˒˒", tags: ["エジプト","鳥","象形文字"] },
      { kaomoji: "𓅓𓂃𓋪◌", tags: ["エジプト","鳥","象形文字","飾り"] },
      { kaomoji: "𓅪𓅮𓅰", tags: ["エジプト","鳥","象形文字","複数"] },
    ],
  },
  {
    title: "歌う鳥",
    items: [
      { kaomoji: "♪(･ө･)♪", tags: ["歌う","鳥","音符"] },
      { kaomoji: "🎶('Θ')🎶", tags: ["歌う","鳥","音符","絵文字"] },
      { kaomoji: "(♫'Θ'♫)", tags: ["歌う","鳥","音符"] },
      { kaomoji: "🎵(•ө•)♬", tags: ["歌う","鳥","音符","絵文字"] },
      { kaomoji: "♬(◉Θ◉)♬", tags: ["歌う","鳥","音符"] },
      { kaomoji: "🎤(･⊝･)🎤", tags: ["歌う","鳥","マイク","絵文字"] },
      { kaomoji: "♪♫('ө')♫♪", tags: ["歌う","鳥","音符"] },
      { kaomoji: "(｡♫‿♫｡)", tags: ["歌う","鳥","音符","楽しい"] },
      { kaomoji: "🎼(Θ∀Θ)🎼", tags: ["歌う","鳥","楽譜","絵文字"] },
      { kaomoji: "♪~(´ө｀ )", tags: ["歌う","鳥","音符","リラックス"] },
    ],
  },
  {
    title: "嬉しい鳥",
    items: [
      { kaomoji: "(˶‾᷄ө‾᷅˵)", tags: ["嬉しい","鳥","喜ぶ"] },
      { kaomoji: "🎉(•ө•)🎉", tags: ["嬉しい","鳥","お祝い","絵文字"] },
      { kaomoji: "(Θ∀Θ)", tags: ["嬉しい","鳥","笑顔"] },
      { kaomoji: "ヽ('Θ')ﾉ", tags: ["嬉しい","鳥","万歳"] },
      { kaomoji: "✨(Θ▽Θ)✨", tags: ["嬉しい","鳥","キラキラ","絵文字"] },
      { kaomoji: "(Θ‿Θ)", tags: ["嬉しい","鳥","笑顔"] },
      { kaomoji: "🌈(•ө•)🌈", tags: ["嬉しい","鳥","虹","絵文字"] },
      { kaomoji: "(Θ◡Θ)", tags: ["嬉しい","鳥","優しい笑顔"] },
      { kaomoji: "⊂('Θ')⊃", tags: ["嬉しい","鳥","ハグ"] },
      { kaomoji: "🎊(Θ▿Θ)🎊", tags: ["嬉しい","鳥","お祝い","絵文字"] },
    ],
  },
  {
    title: "ユニーク",
    items: [
      { kaomoji: "(Θ皿Θ)", tags: ["ユニーク","鳥","怒る"] },
      { kaomoji: "(ΘзΘ)", tags: ["ユニーク","鳥","キス"] },
      { kaomoji: "🎩('Θ')🎩", tags: ["ユニーク","鳥","帽子","絵文字"] },
      { kaomoji: "(Θ﹏Θ)", tags: ["ユニーク","鳥","悲しい"] },
      { kaomoji: "👑(◉Θ◉)👑", tags: ["ユニーク","鳥","王冠","絵文字"] },
      { kaomoji: "(ΘдΘ)", tags: ["ユニーク","鳥","ショック"] },
      { kaomoji: "🎀(･⊝･)🎀", tags: ["ユニーク","鳥","リボン","絵文字"] },
      { kaomoji: "(ΘoΘ)", tags: ["ユニーク","鳥","驚き"] },
      { kaomoji: "🌺(•ө•)🌺", tags: ["ユニーク","鳥","ハイビスカス","絵文字"] },
      { kaomoji: "(Θ益Θ)", tags: ["ユニーク","鳥","怒る"] },
      { kaomoji: "🎨('Θ')🎨", tags: ["ユニーク","鳥","アート","絵文字"] },
      { kaomoji: "(ΘωΘ；)", tags: ["ユニーク","鳥","困る"] },
      { kaomoji: "💎(･ө･)💎", tags: ["ユニーク","鳥","ダイヤ","絵文字"] },
      { kaomoji: "(Θ□Θ)", tags: ["ユニーク","鳥","びっくり"] },
      { kaomoji: "🍃(◉Θ◉)🍃", tags: ["ユニーク","鳥","葉っぱ","絵文字"] },
    ],
  },
];

