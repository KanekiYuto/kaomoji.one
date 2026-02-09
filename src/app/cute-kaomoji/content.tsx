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
  title: "かわいい顔文字一覧（Kaomoji）｜もこもこ・動物・ハートをコピペで簡単",
  description:
    "かわいい顔文字（Kaomoji）を厳選して掲載。もこもこ系・動物・ハートなど、気分に合わせてすぐコピペ。検索＆ワンクリックコピーで、LINE/X（Twitter）/Instagram/Discordの一言がふわっと可愛くなります。ワンクリックでコピーしてすぐ使える、登録不要で無料。",
  ...withCanonical("/cute-kaomoji"),
};

export const cuteKaomojiHeroContent: KaomojiHeroProps = {
  title: "かわいい顔文字一覧",
  kaomoji: "٩꒰｡•◡•｡꒱۶",
  subtitle: "もこもこ・動物・ハート…“かわいい”が詰まった顔文字を厳選【コピペ簡単】",
  description:
    "かわいい顔文字（Kaomoji）は、たった数文字で“空気”を変えられる表現です。SNSの投稿も、友だちとのチャットも、ふわっと優しい雰囲気に。気分に合う一つを見つけて、今すぐコピペで使えます。",
  primaryCta: { href: "#list", label: "顔文字を探す" },
  secondaryCta: { href: "/", label: "ホームへ" },
};

export const cuteKaomojiWhatContent: KaomojiWhatProps = {
  heading: "かわいい顔文字（Kaomoji）とは？",
  intro:
    "かわいい顔文字（Kaomoji）は、記号や文字を組み合わせた“日本発”のテキスト表現。emojiよりも表情のニュアンスが作りやすく、語尾のかわいさや気持ちの揺れまで伝えられます。",
  usageHeading: "使えるシーン",
  usageItems: [
    "SNS投稿：一言の印象をやわらかくして、反応を引き出す",
    "友だちとのチャット：距離感を縮めて、会話をふんわり可愛く",
    "お礼・あいさつ：丁寧さを保ちつつ“冷たさ”を消す",
    "応援メッセージ：元気づけたいときに、優しい温度を足す",
    "プロフィール・署名：個性を可愛く演出する",
  ],
  typesHeading: "かわいい顔文字の種類",
  types: [
    {
      title: "もこもこ系",
      description: "括弧の形がふわっとしていて、見た瞬間に“可愛い”が伝わる。",
      example: "例：٩꒰｡•◡•｡꒱۶  ꒰✩˙˟˙✩꒱",
    },
    {
      title: "もきゅ系",
      description: "擬音で甘さをプラス。会話が一気に“ゆるかわ”になる。",
      example: "例：(*´v｀)ﾓｷｭ  ﾓｷｭ(｡´•ㅅ•｡)",
    },
    {
      title: "ガオー系",
      description: "“吠える”のに怖くない。元気・ノリの良さを可愛く表現。",
      example: "例：(｢・ω・)｢ｶﾞｵｰ  ฅ^•ﻌ•^ฅがお～♪",
    },
    {
      title: "ちょこん系",
      description: "座って待ってる感じがたまらない。“控えめ可愛い”の定番。",
      example: "例：_( ˙꒳​˙ _ )  ( ⊃'-'⊂ )ﾁｮｺﾝ♡",
    },
    {
      title: "動物系",
      description: "猫・うさぎ・くまなど、可愛さが直球で伝わる。",
      example: "例：ฅ^•ﻌ•^ฅ  ʕ•ﻌ•ʔ",
    },
    {
      title: "ハート系",
      description: "好き・ありがとう・ときめきを、やさしく可視化できる。",
      example: "例：₍ᐢ •͈ ༝ •͈ ᐢ₎♡  つ♡⊂",
    },
  ],
  featuresHeading: "可愛さが出る“パーツ”",
  features: [
    {
      symbol: "꒰ ꒱",
      title: "もこもこ括弧",
      description: "一眼で“ふわっ”とした雰囲気。やさしい可愛さを演出。",
    },
    {
      symbol: "•◡•",
      title: "きらっと目元",
      description: "小さな差で表情が変わる。感情のニュアンス調整に便利。",
    },
    {
      symbol: "ෆ",
      title: "ハート印",
      description: "好き・ときめき・ありがとう。温度感を上げたいときに。",
    },
    {
      symbol: "ฅ",
      title: "ねこ爪モチーフ",
      description: "一気に“動物っぽさ”が出て、可愛さがぐっと増す。",
    },
  ],
};

export const cuteKaomojiWhyContent: KaomojiWhyProps = {
  heading: "かわいい顔文字が“効く”理由",
  subheading: "一文字で、空気がやわらぐ。距離が縮まる。",
  guideHeading: "場面別の使い分けガイド",
  guides: [
    {
      title: "SNS投稿",
      bullets: ["読み手の心理的ハードルを下げる", "可愛い印象でリアクションを増やしやすい"],
      recommend: "おすすめ：٩꒰｡•◡•｡꒱۶  (´｡• ᵕ •｡`)",
    },
    {
      title: "友だちとのチャット",
      bullets: ["いつもの会話を“ゆるかわ”に", "照れや甘えも自然に伝わる"],
      recommend: "おすすめ：꒰✩˙˟˙✩꒱  (*´v｀)ﾓｷｭ",
    },
    {
      title: "応援メッセージ",
      bullets: ["頑張れの圧をやわらげる", "優しく背中を押せる"],
      recommend: "おすすめ：ᕙ(•̀ᴗ•́)ᕘ  ฅ^•ﻌ•^ฅがお～♪",
    },
    {
      title: "お祝い・お礼",
      bullets: ["言葉に温度を足せる", "丁寧なのに可愛くなる"],
      recommend: "おすすめ：つ♡⊂  ₍ᐢ •͈ ༝ •͈ ᐢ₎♡",
    },
  ],
  cultureHeading: "“かわいい”文化と顔文字",
  cultureBody:
    "日本の“かわいい”文化は、相手に寄り添うやさしさの表現でもあります。顔文字はその空気感をテキストで再現できる便利ツール。ちょっと照れる言葉も、可愛く包んで伝えられます。",
  cultureCards: [
    { title: "癒し効果", description: "可愛い表情は気持ちを和らげ、ストレスを軽くする。" },
    { title: "距離を縮める", description: "語尾がやわらぎ、会話が親しみやすくなる。" },
    { title: "表現の幅", description: "動物・ハート・擬音など、ニュアンスを細かく作れる。" },
  ],
  tipsHeading: "組み合わせのコツ",
  tips: [
    {
      title: "あいさつ＋もこもこ",
      body: "最初の一言に可愛さを足すと、会話の空気が一気に明るくなる。",
      example: "例：「おはよう٩꒰｡•◡•｡꒱۶」",
    },
    {
      title: "応援＋動物",
      body: "“頑張れ”が優しくなる。押しつけずに背中を押せる。",
      example: "例：「ファイトฅ^•ﻌ•^ฅ」",
    },
    {
      title: "感謝＋ハート",
      body: "ありがとうの温度感が上がる。軽すぎず、重すぎない。",
      example: "例：「ありがとう₍ᐢ •͈ ༝ •͈ ᐢ₎♡」",
    },
  ],
};

export const cuteKaomojiFaqContent: KaomojiFaqProps = {
  heading: "よくある質問（FAQ）",
  subheading: "はじめてでも、ここだけ見ればOK。",
  items: [
    {
      question: "かわいい顔文字はどうやってコピーできますか？",
      answer:
        "気になる顔文字の右側にあるコピーアイコンを押すだけでコピーできます。コピーしたら、そのままSNSやチャットに貼り付けてください。",
    },
    {
      question: "おすすめの“定番”はありますか？",
      answer:
        "まずは「٩꒰｡•◡•｡꒱۶」「(*´꒳`*)」「(´｡• ᵕ •｡`)」あたりが使いやすいです。どんな文章にもなじみやすく、可愛さも十分。",
    },
    {
      question: "スマホでも表示が崩れませんか？",
      answer:
        "多くの顔文字はスマホでも問題なく表示されますが、フォントやアプリによって見え方が変わる場合があります。気になるものは実際の投稿前に一度貼って確認するのがおすすめです。",
    },
    {
      question: "タグは何のためにありますか？",
      answer:
        "タグは検索をしやすくするためのヒントです。「もこもこ」「動物」「ハート」などで絞り込めるので、今の気分に近い顔文字を素早く探せます。",
    },
  ],
};

export const cuteKaomojiGroups: KaomojiCollectionGroup[] = [
  {
    title: "基本・定番",
    items: uniq([
      "٩꒰｡•◡•｡꒱۶",
      "(´｡• ᵕ •｡`)",
      "(*´꒳`*)",
      "(◕‿◕)",
      "｡◕‿◕｡",
      "(〃'▽'〃)",
      "(⁎⁍̴̛ᴗ⁍̴̛⁎)",
      "ꉂ(ˊᗜˋ*)",
      "⸜(*ˊᗜˋ*)⸝",
      "(｡•ᴗ-)_",
    ]).map((kaomoji) => ({ kaomoji, tags: ["かわいい", "定番"] })),
  },
  {
    title: "もこもこ系",
    items: uniq([
      "꒰｡•◡•｡꒱",
      "꒰◍⍢◍꒱",
      "꒰✩˙˟˙✩꒱",
      "꒰*´∀`*꒱",
      "꒰*･ω･*꒱",
      "◝꒰´꒳`꒱◟",
      "꒰๑•×•๑꒱",
      "꒰๑°꒵°๑꒱",
      "꒰ *´ω`* ꒱",
      "꒰｡･ω･`;꒱",
    ]).map((kaomoji) => ({ kaomoji, tags: ["もこもこ"] })),
  },
  {
    title: "もきゅ系",
    items: uniq([
      "(*´v｀)ﾓｷｭ",
      "(´･ω･｀)ﾓｷｭ",
      "ﾓｷｭ(｡´•ㅅ•｡)",
      "(っ ॑꒳ ॑c).゜ﾓｷｭ",
      "ﾓｷｭ(*´ω｀*)ﾓｷｭ",
      "(ノ)ω(ヾ)ﾓｷｭﾓｷｭ♡",
      "ﾓｷｭฅ(´-ω-`)ฅﾓｷｭ",
      "( っ)•ω•(ｃ )♡.゜",
    ]).map((kaomoji) => ({ kaomoji, tags: ["もきゅ", "擬音"] })),
  },
  {
    title: "ガオー系",
    items: uniq([
      "(｢・ω・)｢ｶﾞｵｰ",
      "(｢･ω･)｢ｶﾞｵｰ",
      "(｢ﾟДﾟ)｢がぉー",
      "ฅ^•ﻌ•^ฅがお～♪",
      "ガオー(*｢･д･)｢",
      "(｢=ω=)｢ｶﾞｵｰ",
      "ฅ(•̀㉨•́ )ฅｶﾞｵｰ♡",
      "(｢・A・)｢ ｶﾞｵｰ",
    ]).map((kaomoji) => ({ kaomoji, tags: ["ガオー", "動物"] })),
  },
  {
    title: "ちょこん系",
    items: uniq([
      "_( ˙꒳​˙ _ )",
      "_( ˙꒳​˙ _ )ﾁｮｺﾝ",
      "( ⊃'-'⊂ )ﾁｮｺﾝ♡",
      "_( *´꒳`* _ )_ﾁｮｺﾝ♡",
      "_( _ \" ꒳ \" )_ﾁｮｺﾝ♡",
      "待機_( ˙꒳​˙ _ )ﾁｮｺﾝ",
    ]).map((kaomoji) => ({ kaomoji, tags: ["ちょこん", "待機"] })),
  },
];