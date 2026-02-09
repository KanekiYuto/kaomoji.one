import type { Metadata } from "next";

import type {
  KaomojiWhyProps,
  HomeCtaContent,
  HomeCultureHistoryContent,
  HomeFaqContent,
  HomeFeaturesContent,
  HomeHeroContent,
  HomeHowToUseContent,
} from "@/features/kaomoji/types";

import { withCanonical } from "@/lib/seo";

export const metadata: Metadata = {
  title: "顔文字一覧｜かわいい顔文字・泣く顔文字をワンクリックでコピー",
  description:
    "顔文字（カオモジ/Kaomoji）をテーマ別に検索してワンクリックでコピー。かわいい・泣く・キラキラ・もふもふ・怒る・照れるなど豊富に収録。人気の定番から流行まで、LINE/X（Twitter）/Instagram/Discordにそのままコピペで使えます。登録不要で無料。スマホでもOK。",
  ...withCanonical("/"),
};

export const homeHeroContent: HomeHeroContent = {
  title: "顔文字（Kaomoji）",
  description:
    "カテゴリから顔文字ページへ。絵文字の代わりに、コピペで使える顔文字を、かわいい・泣くなどの定番テーマからすぐに見つけられます。",
  primaryCta: { href: "#categories", label: "カテゴリから探す" },
  secondaryCta: { href: "/cute-kaomoji", label: "かわいい顔文字を見る" },
  badges: ["顔文字をワンクリックでコピー", "カテゴリ + 検索", "モバイル対応"],
  sample: {
    title: "まずはひとつ：",
    hint: "一覧の顔文字をクリックするとコピーできます。",
    rows: [
      { kaomoji: "(｡•̀ᴗ-)✧", label: "かわいい" },
      { kaomoji: "(´；ω；`)", label: "泣く" },
      { kaomoji: "＼(^o^)／", label: "うれしい" },
    ],
  },
};

export const homeFeaturesContent: HomeFeaturesContent = {
  heading: "顔文字（Kaomoji）の特徴",
  subheading: "軽くて直感的。伝えたい気持ちを、もっと素早く。",
  items: [
    {
      key: "copy",
      title: "ワンクリックコピー",
      description: "クリックするだけでコピー。どこへでも貼り付けできます。",
    },
    {
      key: "categories",
      title: "カテゴリ整理",
      description: "気分・シーン別に分類。検索と組み合わせればさらに早い。",
    },
    {
      key: "mobile",
      title: "モバイル対応",
      description: "スマホでも見やすく、操作しやすいデザイン。",
    },
  ],
};

export const homeHowToUseContent: HomeHowToUseContent = {
  heading: "顔文字（Kaomoji）の使い方",
  subheading: "4ステップ：カテゴリ選択 → クリックでコピー → 貼り付けて送信。",
  steps: [
    {
      key: "choose",
      title: "1. カテゴリを選ぶ",
      description: "気分や用途に合わせてカテゴリを選びます。",
      step: "01",
      visual: "（´∀`）",
    },
    {
      key: "click",
      title: "2. 顔文字をクリック",
      description: "クリックで自動コピー。選択してコピーする手間が不要です。",
      step: "02",
    },
    {
      key: "paste",
      title: "3. アプリに貼り付け",
      description: "LINE、X（Twitter）、メールなど好きなアプリに貼り付けます。",
      step: "03",
    },
    {
      key: "enjoy",
      title: "4. 会話を楽しむ",
      description: "文字だけでは伝えにくいニュアンスを、自然に届けられます。",
      step: "04",
    },
  ],
};

export const homeCultureHistoryContent: HomeCultureHistoryContent = {
  heading: "顔文字の文化と歴史",
  leftHeading: "日本で生まれた“文字の表情”文化",
  body:
    "顔文字は、1980年代の日本で広まったと言われる独特なテキスト表現です。西洋の横向き表情（例：:D、:-)）と違い、正面の“目”で感情を伝えるため、より繊細で豊かなニュアンスを表現できます。",
  featuresHeading: "特徴",
  features: [
    "正面の“顔”（特に目の表情）を重視",
    "括弧や記号の組み合わせで細かな感情を表現",
    "“空気を読む”文化的コミュニケーションの影響",
    "初期インターネット文化から普及・発展",
  ],
  timelineHeading: "代表的な顔文字の変遷",
  timeline: [
    { label: "1980年代", kaomoji: "(^_^)" },
    { label: "1990年代", kaomoji: "（´∀`）" },
    { label: "2000年代", kaomoji: "(´｡• ᵕ •｡`)" },
    { label: "いま", kaomoji: "✧*｡٩(ˊᗜˋ*)و✧*｡" },
  ],
};

export const homeFaqContent: HomeFaqContent = {
  heading: "よくある質問",
  items: [
    {
      question: "Q：スマホで顔文字が正しく表示されません。どうすれば？",
      answer:
        "A：多くのスマホは問題なく表示できます。文字化けする場合は、OSやブラウザ／アプリを最新に更新してください。入力方式やフォントを変えると改善することもあります。",
    },
    {
      question: "Q：LINE や X（Twitter）で使えますか？",
      answer:
        "A：はい。LINE、X（Twitter）、Instagram、Discord、メールなど、ほとんどのアプリで利用できます。コピーして貼り付けるだけです。",
    },
    {
      question: "Q：コピーできないときは？",
      answer:
        "A：ブラウザのクリップボード権限が無効だったり、APIに未対応の可能性があります。その場合は顔文字を選択して、Windowsは Ctrl+C、Macは Cmd+C でコピーしてください。",
    },
    {
      question: "Q：商用利用はできますか？",
      answer:
        "A：はい。ブログ、SNS、広告、印刷物など商用でも無料で利用できます。ただし、顔文字そのものを商品として販売する行為はお控えください。",
    },
    {
      question: "Q：新しい顔文字の追加リクエストはできますか？",
      answer:
        "A：現時点ではリクエストフォームはありませんが、カテゴリや内容は随時追加していきます。人気テーマや季節の内容を優先して更新する予定です。",
    },
    {
      question: "Q：ずっと無料で使えますか？",
      answer:
        "A：はい。現在は登録不要で無料です。運営は広告などで支えながら、できるだけ長く無料提供を続けます。",
    },
  ],
};

export const homeCtaContent: HomeCtaContent = {
  heading: "今すぐ、気持ちを“ちょうどよく”伝えよう",
  description:
    "カテゴリから選んで、クリックでコピー。そのまま普段のチャットに貼り付けるだけ。",
  example: "例： (｡•̀ᴗ-)✧　(；＿；)　＼(^o^)／",
  primaryCta: { href: "#categories", label: "カテゴリから始める" },
  secondaryCta: { href: "/cute-kaomoji", label: "かわいい顔文字を一覧で見る" },
};

export const homeKaomojiWhyContent: KaomojiWhyProps = {
  heading: "なぜ 顔文字（Kaomoji）？",
  subheading:
    "文字だけより温度があり、スタンプより軽い。コピーするだけで、どんな会話でも気持ちが伝わります。",
  guideHeading: "シーン別おすすめ",
  guides: [
    {
      title: "かわいく見せたい",
      bullets: ["あいさつ・お礼・甘えたいときに", "印象がやわらかく、空気も軽くなる"],
      recommend: "(｡•̀ᴗ-)✧  (｡>﹏<｡)",
    },
    {
      title: "ちょっとしんどい",
      bullets: ["落ち込み・しょんぼり・疲れた気持ちに", "励ましてほしい気持ちが伝わりやすい"],
      recommend: "(；＿；)  (´；ω；`)",
    },
    {
      title: "場を盛り上げたい",
      bullets: ["冗談・ツッコミ・軽いノリに", "やわらかく伝わって、角が立ちにくい"],
      recommend: "＼(^o^)／  (≧▽≦)",
    },
    {
      title: "丁寧に、でも冷たくなく",
      bullets: ["仕事やフォーマルな場面に", "丁寧さの中に親しみを添えられる"],
      recommend: "(｀・ω・´)ゞ  (ง •̀_•́)ง",
    },
  ],
  cultureHeading: "Kaomoji の背景",
  cultureBody:
    "顔文字（Kaomoji）は日常のチャットやコミュニティ文化で広く使われ、特に“目”で感情を伝えるのが特徴です。画像に頼らず、プラットフォームのスタンプ制限も受けにくく、コピーしてすぐ使えます。",
  cultureCards: [
    { title: "軽い", description: "テキストだけ。送信が速く、互換性も高い" },
    { title: "直感的", description: "感情が一目で伝わり、語気が明確に" },
    { title: "組み合わせ自由", description: "文章と合わせて、表現をより繊細に" },
  ],
  tipsHeading: "ちょっとしたコツ",
  tips: [
    {
      title: "一文 + 顔文字ひとつ",
      body: "自然に見えて、使いすぎも防げます。",
      example: "例：今天有点累 (´；ω；`)",
    },
    {
      title: "相手に合わせて強さを調整",
      body: "仲の良い相手には少し大げさに、仕事では控えめに。",
      example: "例：了解です。すぐ対応します (｀・ω・´)ゞ",
    },
    {
      title: "まず検索、次にカテゴリで絞る",
      body: "キーワードで当ててから、カテゴリで微調整。",
      example: "例：検索「泣く / うれしい / ありがとう」",
    },
  ],
};