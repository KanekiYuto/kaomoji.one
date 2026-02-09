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
  title: "泣く顔文字一覧（Kaomoji）｜かわいい泣き顔・うるうる・大泣きをコピペ",
  description:
    "泣く顔文字（Kaomoji）をまとめて掲載。うるうる・えーん・しくしく・大泣きまで、気持ちに合う泣き顔がすぐ見つかります。検索＆ワンクリックでコピーして、LINE/X（Twitter）/Instagram/Discordにそのままコピペ。気持ちを素直に伝えたい時に。登録不要で無料。スマホでもOK。",
  ...withCanonical("/cry-kaomoji"),
};

export const cryKaomojiHeroContent: KaomojiHeroProps = {
  title: "泣く顔文字一覧",
  kaomoji: "(ಥ﹏ಥ) ｡ﾟ(ﾟ´Д｀ﾟ)ﾟ｡",
  subtitle: "かわいい泣き顔から大泣きまで【コピペ簡単】",
  description:
    "泣く顔文字（Kaomoji）は、涙・悲しみ・切なさはもちろん、感動やうれし泣きまで表現できる便利な文字の組み合わせ。気持ちの強さに合わせて、ぴったりの“泣き方”を見つけてください。",
  primaryCta: { href: "#list", label: "顔文字を探す" },
  secondaryCta: { href: "/", label: "ホームへ" },
};

export const cryKaomojiWhatContent: KaomojiWhatProps = {
  heading: "泣く顔文字（Kaomoji）とは？",
  intro:
    "泣く顔文字は、涙を表す記号や目元の表情を組み合わせて“泣いている気持ち”を文字で伝えるKaomojiです。軽いしょんぼりから、うるうる、大泣きまで、ニュアンスの幅が広いのが特徴。",
  usageHeading: "使えるシーン",
  usageItems: [
    "悲しい・落ち込んだとき：気持ちをやさしく共有する",
    "感動したとき：うれし涙や胸が熱い瞬間を表す",
    "甘えたいとき：重くならずに“お願い”できる",
    "共感したいとき：相手の話に寄り添うリアクションとして",
    "自虐や冗談：空気を和ませながら“泣き”を表現する",
  ],
  typesHeading: "泣く顔文字のタイプ",
  types: [
    {
      title: "かわいい泣き顔",
      description: "可愛さを残しつつ、涙の気持ちを表す万能タイプ。",
      example: "例：(;ㅿ;)  (ಥ﹏ಥ)",
    },
    {
      title: "うるうる（涙がたまる）",
      description: "泣く直前の“こらえてる”感じ。感動やお願いにも相性◎。",
      example: "例：( இωஇ )  (｡இ﹏இ｡)",
    },
    {
      title: "えーん（甘える/小泣き）",
      description: "軽めの泣き。日常会話で使いやすい。",
      example: "例：(つд⊂)ｴｰﾝ  ｡ﾟﾟ(´□`｡)°ﾟ｡",
    },
    {
      title: "うわーん（大泣き）",
      description: "感情が爆発。強めに泣きたいときの定番。",
      example: "例：ｳﾜｧｧ━━｡ﾟ(ﾟ´Д｀ﾟ)ﾟ｡━━ﾝ!!",
    },
    {
      title: "しょんぼり（落ち込み）",
      description: "泣くより“落ち込み”寄り。静かな気持ちに。",
      example: "例：(´･_･`)  •﹏•",
    },
  ],
  featuresHeading: "“泣き”が伝わるパーツ",
  features: [
    {
      symbol: "｡ﾟ",
      title: "涙の粒",
      description: "涙がこぼれる演出に。感情の強さも出しやすい。",
    },
    {
      symbol: "⊃",
      title: "隠れる手",
      description: "顔を覆う/こらえる雰囲気が出て、切なさが増す。",
    },
    {
      symbol: "ಥ",
      title: "切ない目元",
      description: "泣き顔の定番パーツ。表情の説得力が上がる。",
    },
    {
      symbol: "﹏",
      title: "崩れた口元",
      description: "ぐっと我慢している感じや、しょんぼり感を演出。",
    },
  ],
};

export const cryKaomojiWhyContent: KaomojiWhyProps = {
  heading: "泣く顔文字を上手に使うコツ",
  subheading: "泣き方を変えるだけで、伝わり方が変わる。",
  guideHeading: "使い分けガイド",
  guides: [
    {
      title: "共感・寄り添い",
      bullets: ["相手の気持ちに合わせて“静かな泣き”を選ぶ", "深刻になりすぎない温度に調整できる"],
      recommend: "おすすめ：(´･_･`)  (｡இ﹏இ｡)",
    },
    {
      title: "感動・うれし涙",
      bullets: ["“悲しい”ではなく“胸が熱い”を表現できる", "お礼やお祝いにも使いやすい"],
      recommend: "おすすめ：( இωஇ )  ｡ﾟ(ﾟ＾ω＾ﾟ)ﾟ｡",
    },
    {
      title: "甘え・お願い",
      bullets: ["頼みごとが可愛くなる", "柔らかい印象で受け入れられやすい"],
      recommend: "おすすめ：(つд⊂)ｴｰﾝ  (´｡つД⊂ﾟ｡｀)",
    },
    {
      title: "ガチ泣き・叫び",
      bullets: ["強い感情を一発で伝えられる", "ネタとしても使える（使いすぎ注意）"],
      recommend: "おすすめ：ｳﾜｧｧ━━｡ﾟ(ﾟ´Д｀ﾟ)ﾟ｡━━ﾝ!!",
    },
  ],
  cultureHeading: "“泣き”のニュアンス文化",
  cultureBody:
    "日本語のコミュニケーションは、気持ちの“強さ”や“間”を大切にします。泣く顔文字は、その微妙なニュアンスを文字だけで表現できる便利な手段。言いづらい気持ちも、やさしく包んで伝えられます。",
  cultureCards: [
    { title: "共感が伝わる", description: "一言に“寄り添い”が乗りやすい。" },
    { title: "温度を調整できる", description: "重くしすぎず、軽くしすぎず伝えられる。" },
    { title: "表情の幅が広い", description: "うるうる〜大泣きまで、細かく選べる。" },
  ],
  tipsHeading: "組み合わせ例",
  tips: [
    {
      title: "報告＋しょんぼり",
      body: "淡々とした文章に感情を足して、冷たさをなくす。",
      example: "例：「今日はうまくいかなかった… (´･_･`)」",
    },
    {
      title: "感謝＋うれし涙",
      body: "お礼が一気にあたたかくなる。相手も嬉しくなる。",
      example: "例：「助かった…ありがとう ( இωஇ )」",
    },
    {
      title: "お願い＋えーん",
      body: "可愛く頼むと角が立ちにくい。場面に合わせて調整。",
      example: "例：「それ手伝って…(つд⊂)ｴｰﾝ」",
    },
  ],
};

export const cryKaomojiFaqContent: KaomojiFaqProps = {
  heading: "よくある質問（FAQ）",
  subheading: "泣く顔文字、これだけ押さえればOK。",
  items: [
    {
      question: "泣く顔文字はどうやってコピーできますか？",
      answer:
        "顔文字の右側にあるコピーアイコンを押すだけでコピーできます。コピー後はLINEやSNSに貼り付けて使ってください。",
    },
    {
      question: "泣く顔文字と悲しい顔文字の違いは？",
      answer:
        "泣く顔文字は“涙”の動きがある表現が中心で、悲しい顔文字は“気持ち”の落ち込み寄り。泣く顔文字には感動やうれし泣きも含まれるので、必ずしもネガティブだけではありません。",
    },
    {
      question: "うるうる系はどんな場面で使う？",
      answer:
        "泣く直前の“こらえてる”感じなので、感動したときや、ちょっとお願いしたいときに相性が良いです。強く泣かずに気持ちを伝えられます。",
    },
    {
      question: "タグは何のためにありますか？",
      answer:
        "検索用の目印です。「うるうる」「えーん」「大泣き」などで絞り込めるので、気分に合う顔文字をすばやく見つけられます。",
    },
  ],
};

export const cryKaomojiGroups: KaomojiCollectionGroup[] = [
  {
    title: "かわいい泣き顔",
    items: uniq([
      "(;ㅿ;)",
      "( ;ᯅ; )",
      "｡ﾟ(ﾟ´Д｀ﾟ)ﾟ｡",
      "(ಥ﹏ಥ)",
      "｡ﾟ(ﾟஇωஇﾟ)ﾟ｡",
      "｡°(°´ᯅ`°)°｡",
      "｡･ﾟ(ﾟ⊃ω⊂ﾟ)ﾟ･｡",
      "°‧°·(ฅдฅ｡)‧°·°",
      "｡ﾟ(´つω•`｡)ﾟ｡",
      "(´•̥ ω •̥` )",
    ]).map((kaomoji) => ({ kaomoji, tags: ["泣く", "かわいい"] })),
  },
  {
    title: "うるうる（涙がたまる）",
    items: uniq([
      "( இωஇ )",
      "(இωஇ)",
      "(｡இ﹏இ｡)",
      "(இдஇ`｡)",
      "(இ﹏இ`｡)",
      "(இдஇ; )",
      "｡ﾟ( ﾟஇωஇﾟ)ﾟ｡",
    ]).map((kaomoji) => ({ kaomoji, tags: ["うるうる", "涙"] })),
  },
  {
    title: "えーん（甘える/小泣き）",
    items: uniq([
      "(つд⊂)",
      "(つд⊂)ｴｰﾝ",
      "(´｡つД⊂ﾟ｡｀)",
      "･ﾟﾟ(p>д<q)ﾟﾟ･",
      "｡ﾟﾟ(´□`｡)°ﾟ｡",
      "(´Д⊂ヽ",
    ]).map((kaomoji) => ({ kaomoji, tags: ["えーん", "甘える"] })),
  },
  {
    title: "うわーん（大泣き）",
    items: uniq([
      "ｳﾜｧｧ━━｡ﾟ(ﾟ´Д｀ﾟ)ﾟ｡━━ﾝ!!",
      "｡･ﾟ･(ﾟ`д´ﾟ)･ﾟ･｡",
      "｡ﾟ(ﾟ´ω`ﾟ)ﾟ｡",
      "(ﾟ´Д｀ﾟ)ﾟ｡",
      "｡ﾟ(ﾟ´Ч`ﾟ)ﾟ｡",
    ]).map((kaomoji) => ({ kaomoji, tags: ["うわーん", "大泣き"] })),
  },
  {
    title: "しょんぼり（落ち込み）",
    items: uniq([
      "(´･_･`)",
      "(´；ω；`)",
      "(´；д；`)",
      "˃̣̣̥᷄⌓˂̣̣̥᷅",
      "( •︠ˍ•︡ )",
      "•﹏•",
    ]).map((kaomoji) => ({ kaomoji, tags: ["しょんぼり", "落ち込み"] })),
  },
];

// Plain text dump for SEO tools that over-weight text/HTML ratio.
// This is also useful for users who want to copy multiple kaomojis at once.
export const cryKaomojiPlainText: string = uniq(
  cryKaomojiGroups.flatMap((group) => group.items.map((item) => item.kaomoji))
).join("\n");
