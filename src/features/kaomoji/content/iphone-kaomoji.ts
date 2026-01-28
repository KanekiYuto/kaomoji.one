import type {
  KaomojiFaqProps,
  KaomojiHeroProps,
  KaomojiWhatProps,
  KaomojiWhyProps,
} from "@/features/kaomoji/types";

export const iphoneKaomojiHeroContent: KaomojiHeroProps = {
  title: "iPhone 顔文字一覧",
  kaomoji: "(^_^)",
  subtitle: "iPhoneでコピペしやすい顔文字（Kaomoji）をカテゴリ別にまとめて紹介",
  description:
    "iPhoneで顔文字（Kaomoji）を使うなら、まずは“表示が崩れにくい・コピペしやすい”定番から。LINEやiMessage、X（Twitter）、Instagram、Discordなどに、そのまま貼り付けて使えます。",
  primaryCta: { href: "#list", label: "顔文字を探す" },
  secondaryCta: { href: "/", label: "ホームへ" },
};

export const iphoneKaomojiWhatContent: KaomojiWhatProps = {
  heading: "iPhoneで使う顔文字（Kaomoji）とは？",
  intro:
    "iPhoneでも顔文字はコピペで手軽に使えます。ただし、アプリやフォントによっては一部の記号が表示されにくい場合もあるため、まずは“シンプルで読みやすい”顔文字から使うのがおすすめです。",
  usageHeading: "使えるシーン",
  usageItems: [
    "LINE・iMessage：短文の印象をやわらかくする",
    "SNS投稿：語尾に足して“温度感”を出す",
    "仕事の連絡：丁寧さを保ちつつ冷たさを消す",
    "お礼・あいさつ：一言を感じよく見せる",
    "気持ちの補足：泣く・驚きなど反応を素早く伝える",
  ],
  typesHeading: "iPhone向き顔文字のタイプ",
  types: [
    {
      title: "定番・シンプル",
      description: "多くのアプリで崩れにくく、会話に自然になじむ。",
      example: "例：( ^_^ )  (´∀`)  (・∀・)",
    },
    {
      title: "かわいい（控えめ）",
      description: "可愛さは欲しいけど、派手すぎないものを選びたいときに。",
      example: "例：(*´꒳`*)  (｡•̀ᴗ-)✧  (〃'▽'〃)",
    },
    {
      title: "泣く・しょんぼり",
      description: "しんどい気持ちや謝罪のトーンをやわらげられる。",
      example: "例：(T_T)  (´；ω；`)  (；＿；)",
    },
    {
      title: "仕事・丁寧",
      description: "丁寧さ＋親しみを少し足したいときに便利。",
      example: "例：(｀・ω・´)ゞ  (._.)  (^^ゞ",
    },
  ],
  featuresHeading: "iPhoneで崩れにくいコツ",
  features: [
    {
      symbol: "( )",
      title: "シンプルな括弧",
      description: "基本形はどのアプリでも読みやすく、レイアウト崩れも少ない。",
    },
    {
      symbol: "^ _ ;",
      title: "一般的な記号",
      description: "特殊文字が少ないほど、環境差の影響を受けにくい。",
    },
    {
      symbol: "短い",
      title: "短めを選ぶ",
      description: "長い顔文字は改行や折り返しで見え方が変わることがある。",
    },
    {
      symbol: "事前確認",
      title: "送信前に貼ってチェック",
      description: "アプリや相手の環境で見え方が変わるので、念のため確認すると安心。",
    },
  ],
};

export const iphoneKaomojiWhyContent: KaomojiWhyProps = {
  heading: "iPhoneで顔文字を使うメリット",
  subheading: "スタンプより軽く、絵文字より表情が伝わる。",
  guideHeading: "用途別おすすめ",
  guides: [
    {
      title: "迷ったら定番",
      bullets: ["どこでも使いやすい", "表情が素直に伝わる"],
      recommend: "おすすめ：(^_^)  (´∀`)  (・∀・)",
    },
    {
      title: "かわいくしたい",
      bullets: ["語尾がやわらぐ", "印象が明るくなる"],
      recommend: "おすすめ：(*´꒳`*)  (｡•̀ᴗ-)✧",
    },
    {
      title: "しょんぼり・謝りたい",
      bullets: ["言い方が強くならない", "気持ちが伝わりやすい"],
      recommend: "おすすめ：(T_T)  (´；ω；`)  (；＿；)",
    },
    {
      title: "仕事で丁寧に",
      bullets: ["親しみを少し足せる", "硬すぎない文面になる"],
      recommend: "おすすめ：(｀・ω・´)ゞ  (._.)",
    },
  ],
  cultureHeading: "iPhoneと顔文字",
  cultureBody:
    "iPhoneではコピー＆ペーストが簡単で、顔文字も気軽に取り入れやすいのが特徴です。使い分けのコツは“短く・読みやすく・相手に合わせる”。それだけで、会話の空気がぐっとよくなります。",
  cultureCards: [
    { title: "軽い", description: "スタンプより手軽に送れて、テンポが崩れにくい。" },
    { title: "伝わる", description: "表情が分かるので、誤解が減りやすい。" },
    { title: "調整できる", description: "強さを選べるので、距離感に合わせやすい。" },
  ],
  tipsHeading: "iPhoneでの使い方のコツ",
  tips: [
    {
      title: "よく使う顔文字をメモに保存",
      body: "よく使うものをメモアプリに置いておくと、すぐコピペできる。",
      example: "例：メモに「(^_^) (*´꒳`*) (T_T)」を保存",
    },
    {
      title: "文章の最後に1つだけ",
      body: "自然に見えて、押しつけ感が出にくい。",
      example: "例：「了解です (｀・ω・´)ゞ」",
    },
    {
      title: "相手の環境を意識",
      body: "相手が別OSや古い端末の場合、特殊文字は避けると安全。",
      example: "例：「ありがとう(^_^)」",
    },
  ],
};

export const iphoneKaomojiFaqContent: KaomojiFaqProps = {
  heading: "よくある質問（FAQ）",
  subheading: "iPhoneで顔文字を、迷わずコピペ。",
  items: [
    {
      question: "iPhoneで顔文字はどうやってコピーできますか？",
      answer:
        "一覧の顔文字をタップ（またはコピー）して、そのままアプリに貼り付けるだけです。コピーできない場合は、顔文字を長押しで選択してコピーしてください。",
    },
    {
      question: "iPhoneで顔文字が四角（□）になることがあります",
      answer:
        "アプリやフォントが未対応の文字が含まれている可能性があります。まずは定番のシンプルな顔文字を使い、必要なら別の顔文字に変えるのがおすすめです。",
    },
    {
      question: "おすすめの“崩れにくい”顔文字は？",
      answer:
        "まずは「(^_^)」「(´∀`)」「(T_T)」「(・_・;)」などが使いやすいです。短くて一般的な記号が中心のものは、環境差の影響を受けにくい傾向があります。",
    },
    {
      question: "商用でも使えますか？",
      answer:
        "はい。SNS・ブログ・広告などにも利用できます。ただし、顔文字そのものを商品として販売する行為はお控えください。",
    },
  ],
};

