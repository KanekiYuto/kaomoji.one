import type { Metadata } from "next";

import type {
  KaomojiFaqProps,
  KaomojiHeroProps,
  KaomojiWhatProps,
  KaomojiWhyProps,
} from "@/features/kaomoji/types";
import { withCanonical } from "@/lib/seo";

export const metadata: Metadata = {
  title: "もふもふ顔文字一覧（Kaomoji）｜癒し・かわいい・動物",
  description:
    "もふもふ顔文字（Kaomoji）をカテゴリ別にまとめて掲載。検索＆ワンクリックコピー対応で、癒し・かわいい・動物系の表情がすぐ見つかります。気分に合う一つが見つかります。LINE/X（Twitter）/Instagram/Discordにそのままコピペで使えます。登録不要で無料。スマホでもOK。",
  ...withCanonical("/mofumofu-kaomoji"),
};

export const mofumofuKaomojiHeroContent: KaomojiHeroProps = {
  title: "もふもふ顔文字",
  kaomoji: "(ﾉ)•ω•(ヾ)",
  subtitle: "毛並み・ぬいぐるみ感をふんわり表現",
  description:
    "もふもふ・もこもこ・ふわふわした「触り心地」を文字で表現できる顔文字をまとめました。シンプル〜かわいい系、ナデナデ系、動物系、言葉入りまで、気分に合わせてコピペできます。",
  primaryCta: { href: "#list", label: "一覧を見る" },
  secondaryCta: { href: "/", label: "トップ" },
};

export const mofumofuKaomojiWhatContent: KaomojiWhatProps = {
  heading: "もふもふ顔文字とは？",
  intro:
    "もふもふ顔文字は、動物の毛並みやぬいぐるみのような柔らかさを表現する顔文字です。やさしく癒し系の雰囲気を出したいときに便利で、LINEやSNSのやり取りに添えるだけで空気感がふんわりします。",
  usageHeading: "使えるシーン",
  usageItems: [
    "ペットやぬいぐるみの可愛さを伝えたいとき",
    "癒される気持ちを表現したいとき",
    "ねぎらい・感謝をやさしく伝えたいとき",
    "ほっこりした雰囲気の会話を作りたいとき",
    "SNS投稿をふんわり可愛く見せたいとき",
  ],
  typesHeading: "カテゴリ別の例",
  types: [
    {
      title: "シンプル",
      description: "普段の会話に混ぜやすい、さりげないもふもふ感。",
      example: "例: (ﾉ)•ω•(ヾ) / ﾓﾌ(っ・ω・ｃ)ﾓﾌ / ( ˊᵕˋ )",
    },
    {
      title: "かわいい",
      description: "ハートや装飾で、可愛さを少し足したいときに。",
      example: "例: ꒰ᐡ⸝⸝ ·̫ ⸝⸝ᐡ꒱♡ / (ฅ^•ω•^ฅ) / ‎꒰ ՞•ﻌ•՞ ꒱💕",
    },
    {
      title: "ナデナデ",
      description: "撫でてる・甘やかすニュアンスを入れたいときに。",
      example: "例: ナデ(´・ω・`)ナデ♡ / ヾ(･ω･*)ナデナデ💕",
    },
    {
      title: "動物",
      description: "クマ・ネコ・イヌなど、毛並みの可愛さを強調したいときに。",
      example: "例: ʕ •ᴥ•ʔ / ฅ^•ω•^ฅ / ‎꒰ ՞•ﻌ•՞ ꒱💕",
    },
    {
      title: "言葉入り（もふもふ・もこもこ）",
      description: "「もふもふ」「もこもこ」など、言葉で雰囲気を強調したいときに。",
      example: "例: (´•ω•`) もふもふ / (っ´•ω•`c) もふもふ / (⊃)≧ω≦(⊂)ﾓﾌﾓﾌ",
    },
  ],
  featuresHeading: "もふもふ顔文字の魅力",
  features: [
    {
      symbol: "🧸",
      title: "癒しと温かさ",
      description: "優しい気持ちや、ほっこり感を短い一言でも伝えやすい。",
    },
    {
      symbol: "🐾",
      title: "動物との相性◎",
      description: "ペット・ぬいぐるみ・もふもふ話題にぴったり。",
    },
    {
      symbol: "✍️",
      title: "使い分けしやすい",
      description: "シンプル〜言葉入りまであるので、場面に合わせて選べる。",
    },
  ],
};

export const mofumofuKaomojiWhyContent: KaomojiWhyProps = {
  heading: "もふもふ顔文字の使い方",
  subheading: "相手との距離感や場面に合わせて、ふんわり使い分けましょう。",
  guideHeading: "使い分けのコツ",
  guides: [
    {
      title: "日常会話に添える",
      bullets: ["短い一言に添えるだけでOK", "入れすぎると幼い印象になることも"],
      recommend: "おすすめ: (ﾉ)•ω•(ヾ) / ﾓﾌ(っ・ω・ｃ)ﾓﾌ",
    },
    {
      title: "可愛さを強めたいとき",
      bullets: ["ハート付きで甘めに", "相手や場面に合わせて控えめに"],
      recommend: "おすすめ: ꒰ᐡ⸝⸝ ·̫ ⸝⸝ᐡ꒱♡ / ‎꒰ ՞•ﻌ•՞ ꒱💕",
    },
    {
      title: "撫でたい気持ちを表現",
      bullets: ["ナデナデ系は「甘やかす」ニュアンス", "仲が良い相手におすすめ"],
      recommend: "おすすめ: ナデ(´・ω・`)ナデ♡ / ヾ(･ω･*)ナデナデ💕",
    },
  ],
  cultureHeading: "「もふもふ」と「もこもこ」の違い",
  cultureBody:
    "「もふもふ」は動物の毛並みやぬいぐるみのような柔らかさ、「もこもこ」はセーターや雲のような厚みのある柔らかさを表現します。どちらも触りたくなるような温かい触感をイメージした言葉です。",
  cultureCards: [
    {
      title: "もふもふ",
      description: "毛並み・ぬいぐるみ感。撫でたくなる柔らかさ。",
    },
    {
      title: "もこもこ",
      description: "厚み・ふくらみ。冬物や雲っぽい柔らかさ。",
    },
    {
      title: "迷ったら",
      description: "両方入りの顔文字を使うのもおすすめ。",
    },
  ],
  tipsHeading: "すぐ使える例文",
  tips: [
    {
      title: "癒し",
      body: "ふわっとした気持ちを添えたいときに。",
      example: "例: 癒された〜(ﾉ)•ω•(ヾ)",
    },
    {
      title: "感謝",
      body: "ありがとうをやさしく。",
      example: "例: ありがとう(っ´•ω•`c) もふもふ",
    },
    {
      title: "ねぎらい",
      body: "おつかれさまを温かく。",
      example: "例: おつかれさま( ˊᵕˋ )",
    },
  ],
};

export const mofumofuKaomojiFaqContent: KaomojiFaqProps = {
  heading: "もふもふ顔文字 よくある質問",
  subheading: "ワンクリックでコピーして、そのまま使えます。",
  items: [
    {
      question: "「もふもふ」顔文字はどんな時に使うの？",
      answer:
        "もふもふ顔文字は、柔らかくて触り心地の良いものを表現したい時に使います。ペットを撫でている時、ふわふわした毛並みに癒された時、可愛いぬいぐるみを見た時など、温かい気持ちを伝えたいシーンに最適です。",
    },
    {
      question: "どの「もふもふ」顔文字が一番人気？",
      answer:
        "(ﾉ)•ω•(ヾ) や ﾓﾌ(っ・ω・ｃ)ﾓﾌ などのシンプルで温かみのある表現が特に人気です。また、꒰ᐡ⸝⸝ ·̫ ⸝⸝ᐡ꒱♡ や ૮꒰˵• ﻌ •˵꒱ა などの可愛らしい動物系も多く使われています。",
    },
    {
      question: "「もふもふ」と「もこもこ」の違いは？",
      answer:
        "「もふもふ」は動物の毛並みやぬいぐるみのような柔らかさ、「もこもこ」はセーターや雲のような厚みのある柔らかさを表現します。どちらも触りたくなるような温かい触感をイメージした言葉です。",
    },
    {
      question: "動物系の「もふもふ」顔文字の特徴は？",
      answer:
        "クマ、ネコ、イヌなどの動物をモチーフにした顔文字で、もふもふした毛並みの可愛らしさを表現できます。ʕ •ᴥ•ʔ のようなクマ系や、ฅ^•ω•^ฅ のようなネコ系が人気です。",
    },
    {
      question: "コピペで使える？",
      answer:
        "はい、すべての顔文字がワンクリックでコピーできます。コピーした顔文字は、LINE、Twitter、Instagram、Discord、メールなど、どこでも貼り付けて使用できます。",
    },
    {
      question: "「もふもふ」顔文字の種類は？",
      answer:
        "シンプル系、かわいい系、ナデナデ系、動物系、そして「もふもふ・もこもこ」という言葉が入った顔文字まで、5つの種類を用意しています。気分やシーンに合わせてお選びいただけます。",
    },
    {
      question: "「もこもこ」顔文字はどんな時に使うの？",
      answer:
        "もこもこ顔文字は、セーターや雲、羊毛のような厚みのある柔らかさを表現したい時に使います。冬の暖かいものや、ふんわりした雰囲気を伝えたいシーンにぴったりです。「もふもふ」よりも厚みや膨らみを感じさせる表現に最適です。",
    },
    {
      question: "「もふもふ」と「もこもこ」どちらを使えばいい？",
      answer:
        "動物の毛並みやぬいぐるみのような柔らかさには「もふもふ」、セーターや雲のような厚みのある柔らかさには「もこもこ」がおすすめです。両方入った顔文字もあるので、迷った時はそちらを使うのも良いでしょう。",
    },
  ],
};

