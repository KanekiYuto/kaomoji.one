import type {
  KaomojiFaqProps,
  KaomojiHeroProps,
  KaomojiWhatProps,
  KaomojiWhyProps,
} from "@/features/kaomoji/types";

export const biyoonKaomojiHeroContent: KaomojiHeroProps = {
  title: "びよーん顔文字",
  kaomoji: "o<´･ω･`>oﾋﾞﾖｰﾝ",
  subtitle: "伸ばす・引っ張る・もちもちの動作系",
  description:
    "びよーん、びろーん、ほっぺもちもち、ぷるぷるなど、伸び縮みする可愛い動作を表現できる顔文字をまとめました。会話にノリやリアクションを足したいときに便利です。",
  primaryCta: { href: "#list", label: "一覧を見る" },
  secondaryCta: { href: "/", label: "トップ" },
};

export const biyoonKaomojiWhatContent: KaomojiWhatProps = {
  heading: "びよーん顔文字とは？",
  intro:
    "びよーん顔文字は、伸ばす・引っ張る・頬をむにむにするなど、動作が見えるリアクション系の顔文字です。文字だけでも「勢い」や「もちもち感」が伝わりやすく、友達とのやり取りを楽しくできます。",
  usageHeading: "使えるシーン",
  usageItems: [
    "ほっぺをつまむ・むにむにする可愛いリアクション",
    "伸びをする・だらーんとした雰囲気を出したいとき",
    "相手をちょっと引っ張って促したいとき",
    "甘える・ふざける・ノリよく返したいとき",
    "会話に勢い（動き）を付けたいとき",
  ],
  typesHeading: "よくあるタイプ",
  types: [
    {
      title: "基本のびよーん",
      description: "定番の形で「びよーん感」を出しやすい。",
      example: "例: o<´･ω･`>oﾋﾞﾖｰﾝ / ⊂( ･ω･ )⊃",
    },
    {
      title: "シンプル",
      description: "普段の会話に混ぜやすい、程よい動作系。",
      example: "例: o＜´ω｀＞o / p< ･ω･>q / ⊂(^_^)⊃",
    },
    {
      title: "可愛いびよーん",
      description: "ほっぺ系・ハート系で、可愛さを強めたいときに。",
      example: "例: (ﾉ)・ω・(ヾ)ﾑﾆﾑﾆ / ⊂(♡‿♡)⊃",
    },
  ],
  featuresHeading: "びよーん顔文字の魅力",
  features: [
    {
      symbol: "↔️",
      title: "動作が伝わる",
      description: "伸びる・引っ張るなどの動きが、文字だけでも表現しやすい。",
    },
    {
      symbol: "🫧",
      title: "もちもち感",
      description: "ほっぺ系の顔文字で、柔らかい可愛さを出せる。",
    },
    {
      symbol: "💬",
      title: "会話が盛り上がる",
      description: "リアクションとして使うと、テンポやノリを作りやすい。",
    },
  ],
};

export const biyoonKaomojiWhyContent: KaomojiWhyProps = {
  heading: "びよーん顔文字の使い分け",
  subheading: "場面に合わせて「びよーん」「びろーん」「もちもち」を選びましょう。",
  guideHeading: "使い分けのコツ",
  guides: [
    {
      title: "元気よく伸びる（びよーん）",
      bullets: ["テンション高めのリアクションに", "ノリよく返したいときに"],
      recommend: "おすすめ: o<´･ω･`>oﾋﾞﾖｰﾝ",
    },
    {
      title: "脱力して伸びる（びろーん）",
      bullets: ["だらーん・疲れた雰囲気に", "ゆるい返事に合わせやすい"],
      recommend: "おすすめ: o< ´・ω・` >oﾋﾞﾛｰﾝ",
    },
    {
      title: "ほっぺをむにむに（もちもち）",
      bullets: ["甘え・スキンシップの代わりに", "親しい相手との会話に"],
      recommend: "おすすめ: (ﾉ)・ω・(ヾ)ﾑﾆﾑﾆ",
    },
  ],
  cultureHeading: "「びよーん」と「びろーん」の違い",
  cultureBody:
    "「びよーん」は元気よく伸びる様子、「びろーん」はもっとゆっくり、だらーんと伸びる様子を表します。びろーんの方が脱力感や疲れた雰囲気が強いです。",
  cultureCards: [
    { title: "びよーん", description: "勢い・元気・テンション高め。" },
    { title: "びろーん", description: "脱力・だらーん・ゆるい雰囲気。" },
    { title: "もちもち", description: "可愛いスキンシップっぽさ。" },
  ],
  tipsHeading: "すぐ使える例文",
  tips: [
    {
      title: "ノリよく返す",
      body: "テンションを上げたいときに。",
      example: "例: いくぞ〜！o<´･ω･`>oﾋﾞﾖｰﾝ",
    },
    {
      title: "ゆるく脱力",
      body: "疲れた・眠い気分を表現。",
      example: "例: 今日はびろーん… o< ´・ω・` >oﾋﾞﾛｰﾝ",
    },
    {
      title: "もちもち",
      body: "親しい相手への可愛いリアクション。",
      example: "例: ほっぺむにむに(ﾉ)・ω・(ヾ)ﾑﾆﾑﾆ",
    },
  ],
};

export const biyoonKaomojiFaqContent: KaomojiFaqProps = {
  heading: "びよーん顔文字 よくある質問",
  subheading: "ワンクリックでコピーして、そのまま使えます。",
  items: [
    {
      question: "びよーん顔文字はどんな時に使いますか？",
      answer:
        "びよーん顔文字は、ほっぺを引っ張る可愛い動作、伸びをする様子、リラックスしている時、友達に甘える時、もちもちした柔らかい雰囲気を表現したい時などに使います。可愛らしいコミュニケーションに最適です。",
    },
    {
      question: "「びよーん」と「びろーん」の違いは？",
      answer:
        "「びよーん」は元気よく伸びる様子、「びろーん」はもっとゆっくり、だらーんと伸びる様子を表します。びろーんの方が脱力感や疲れた雰囲気が強いです。",
    },
    {
      question: "ほっぺもちもちの顔文字の使い方は？",
      answer:
        "ほっぺもちもちの顔文字（(ﾉ)・ω・(ヾ)など）は、相手のほっぺを優しくつまむような可愛い動作を表現しています。親しい友人や恋人とのやり取りで、愛情表現やスキンシップの代わりに使えます。",
    },
    {
      question: "引っ張る顔文字と伸ばす顔文字の使い分けは？",
      answer:
        "引っ張る系は相手を引きずったり、服を掴んだりする動作を表現し、アクティブな印象です。伸ばす系は自分が伸びる動作で、リラックスや疲れた様子を表現します。シチュエーションに応じて使い分けましょう。",
    },
    {
      question: "動くびよーん顔文字の特徴は？",
      answer:
        "動くびよーん顔文字（≡( ε:)など）は、動きや勢いを記号で表現しています。飛んでいく様子や走る様子など、アクティブな動作を可視化できるため、会話に躍動感を加えることができます。",
    },
  ],
};

