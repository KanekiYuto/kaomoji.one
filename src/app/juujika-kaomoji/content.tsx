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
  title: "十字架顔文字一覧（Kaomoji）｜シンプルな十字架・可愛い十字架・祈りの十字架もコピペ",
  description:
    "十字架顔文字（Kaomoji）をまとめて掲載。シンプルな十字架・可愛い十字架・祈りの十字架・装飾された十字架・ゴシック系・天使と十字架・教会関連・アクション系まで。検索＆ワンクリックでコピーして、LINE/X（Twitter）/Instagram/Discordにそのままコピペ。登録不要で無料。スマホでもOK。",
  ...withCanonical("/juujika-kaomoji"),
};

export const juujikaKaomojiHeroContent: KaomojiHeroProps = {
  title: "十字架顔文字一覧",
  kaomoji: "†  †(｡･ω･｡)",
  subtitle: "シンプルな十字架・可愛い十字架まで【コピペ簡単】",
  description:
    "「十字架っぽさ」が出る顔文字を集めました。シンプルから可愛い系、装飾つき、ユニーク系まで幅広く掲載。気に入った顔文字はワンクリックでコピーして、そのまま貼り付けできます。",
  primaryCta: { href: "#list", label: "顔文字を探す" },
  secondaryCta: { href: "/", label: "ホームへ" },
};

export const juujikaKaomojiWhatContent: KaomojiWhatProps = {
  heading: "十字架顔文字（Kaomoji）とは？",
  intro:
    "十字架顔文字は、記号や絵文字、キャラっぽいパーツを組み合わせて「十字架」の雰囲気を表現するKaomojiです。短い一言でもテーマが伝わりやすく、SNSやチャットのリアクションに便利です。",
  usageHeading: "使えるシーン",
  usageItems: [
    "十字架の話題に",
    "挨拶や日常の返信に",
    "SNS投稿のテーマに",
    "かわいく盛りたいときに",
    "ネタやユニークな一言に",
  ],
  typesHeading: "十字架顔文字の種類",
  types: [
    {
      title: "シンプルな十字架",
      description: "このカテゴリの定番をまとめてチェック。",
      example: "例: †  ✝",
    },
    {
      title: "可愛い十字架",
      description: "このカテゴリの定番をまとめてチェック。",
      example: "例: †(｡･ω･｡)  (｡･ω･)†",
    },
    {
      title: "祈りの十字架",
      description: "このカテゴリの定番をまとめてチェック。",
      example: "例: †(-人-)  ✝(-人-)✝",
    },
    {
      title: "装飾された十字架",
      description: "このカテゴリの定番をまとめてチェック。",
      example: "例: †━━†  ✝━━✝",
    },
    {
      title: "ゴシック系",
      description: "このカテゴリの定番をまとめてチェック。",
      example: "例: †(｀皿´)†  ✝(ಠ_ಠ)✝",
    },
  ],
  featuresHeading: "十字架らしさが出るポイント",
  features: [
    { symbol: "†", title: "定番", description: "まずは短くて使いやすい定番から。" },
    { symbol: "♡", title: "かわいい", description: "かわいい系のカテゴリを選ぶと柔らかい印象に。" },
    { symbol: "✨", title: "装飾", description: "絵文字や装飾つきは投稿で映えます。" },
    { symbol: "ASCII", title: "AA/アート", description: "大きめの表現はネタとして強いです。" },
  ],
};

export const juujikaKaomojiWhyContent: KaomojiWhyProps = {
  heading: "十字架顔文字の使い分け",
  subheading: "シンプルから装飾まで。場面に合わせて“雰囲気”を調整できます。",
  guideHeading: "シーン別ガイド",
  guides: [
    {
      title: "日常の返信",
      bullets: ["短めのシンプル系が自然", "文章に馴染みやすい"],
      recommend: "おすすめ: †",
    },
    {
      title: "SNS投稿",
      bullets: ["装飾つきでテーマが伝わりやすい", "写真と合わせると映える"],
      recommend: "おすすめ: †(｡･ω･｡)",
    },
    {
      title: "ネタ・ユニーク",
      bullets: ["ユニーク/AA系でインパクト", "使いすぎると読みにくいので注意"],
      recommend: "おすすめ: †(-人-)",
    },
    {
      title: "かわいく盛る",
      bullets: ["可愛いカテゴリを選ぶ", "一言に添えると収まりが良い"],
      recommend: "おすすめ: †(｡･ω･｡)",
    },
  ],
  cultureHeading: "「十字架」モチーフは一言で伝わる",
  cultureBody:
    "十字架は見た目のイメージが強く、短い文章でもテーマが伝わりやすいモチーフです。顔文字を添えるだけで、投稿や返信の雰囲気を軽く・かわいく・面白く調整できます。",
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
      example: "例: 今日はいい日 †",
    },
    {
      title: "投稿のテーマ",
      body: "写真や話題に合わせて選ぶと伝わりやすい。",
      example: "例: 十字架かわいい †(｡･ω･｡)",
    },
  ],
};

export const juujikaKaomojiFaqContent: KaomojiFaqProps = {
  heading: "よくある質問（FAQ）",
  subheading: "十字架顔文字、迷ったらここだけ見ればOK。",
  items: [
    {
      question: "十字架顔文字はどうやってコピーできますか？",
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

export const juujikaKaomojiGroups: KaomojiCollectionGroup[] = [
  {
    title: "シンプルな十字架",
    items: [
      { kaomoji: "†", tags: ["十字架","シンプル","記号"] },
      { kaomoji: "✝", tags: ["十字架","シンプル","基本"] },
      { kaomoji: "✞", tags: ["十字架","シンプル","記号"] },
      { kaomoji: "✟", tags: ["十字架","シンプル","基本"] },
      { kaomoji: "☨", tags: ["十字架","シンプル","正教会"] },
      { kaomoji: "☦", tags: ["十字架","シンプル","正教会"] },
      { kaomoji: "⛧", tags: ["十字架","シンプル","逆十字"] },
      { kaomoji: "✚", tags: ["十字架","シンプル","プラス"] },
      { kaomoji: "✙", tags: ["十字架","シンプル","記号"] },
      { kaomoji: "✜", tags: ["十字架","シンプル","記号"] },
      { kaomoji: "十", tags: ["十字架","シンプル","漢字"] },
      { kaomoji: "⊕", tags: ["十字架","シンプル","丸"] },
      { kaomoji: "⊹", tags: ["十字架","シンプル","小さい"] },
      { kaomoji: "†(*^‿^*)", tags: ["十字架","シンプル","笑顔"] },
      { kaomoji: "✝(´∀｀)", tags: ["十字架","シンプル","笑顔"] },
    ],
  },
  {
    title: "可愛い十字架",
    items: [
      { kaomoji: "†(｡･ω･｡)", tags: ["十字架","かわいい","祈り"] },
      { kaomoji: "(｡･ω･)†", tags: ["十字架","かわいい","祈り"] },
      { kaomoji: "†(＾▽＾)†", tags: ["十字架","かわいい","笑顔"] },
      { kaomoji: "✞(◕‿◕)✞", tags: ["十字架","かわいい","笑顔"] },
      { kaomoji: "†(´｡• ᵕ •｡`)†", tags: ["十字架","かわいい","優しい"] },
      { kaomoji: "†(｡♥‿♥｡)†", tags: ["十字架","かわいい","愛"] },
      { kaomoji: "✝(◍•ᴗ•◍)✝", tags: ["十字架","かわいい","幸せ"] },
      { kaomoji: "†(｡•́‿•̀｡)†", tags: ["十字架","かわいい","微笑"] },
      { kaomoji: "✞(◠‿◠)✞", tags: ["十字架","かわいい","笑顔"] },
      { kaomoji: "†(≧◡≦)†", tags: ["十字架","かわいい","嬉しい"] },
      { kaomoji: "†(◕ᴗ◕✿)†", tags: ["十字架","かわいい","花"] },
      { kaomoji: "✝(｡•ᴗ-)✝", tags: ["十字架","かわいい","ウインク"] },
      { kaomoji: "†(◕‿◕✿)†", tags: ["十字架","かわいい","花"] },
      { kaomoji: "✞(ㆁωㆁ)✞", tags: ["十字架","かわいい","驚き"] },
      { kaomoji: "†(◕ω◕)†", tags: ["十字架","かわいい","可愛い"] },
    ],
  },
  {
    title: "祈りの十字架",
    items: [
      { kaomoji: "†(-人-)", tags: ["十字架","祈り","合掌"] },
      { kaomoji: "✝(-人-)✝", tags: ["十字架","祈り","合掌"] },
      { kaomoji: "✞(-人-)", tags: ["十字架","祈り","合掌"] },
      { kaomoji: "†(人-ω-)人", tags: ["十字架","祈り","願い"] },
      { kaomoji: "†( ˘͈ ᵕ ˘͈♡)", tags: ["十字架","祈り","愛"] },
      { kaomoji: "✝(๑•﹏•)", tags: ["十字架","祈り","悲しみ"] },
      { kaomoji: "†(-ω-人)", tags: ["十字架","祈り","願い"] },
      { kaomoji: "✝(っ˘̩╭╮˘̩)っ", tags: ["十字架","祈り","抱擁"] },
      { kaomoji: "†(-ω-;)", tags: ["十字架","祈り","心配"] },
      { kaomoji: "✝(´；ω；`)", tags: ["十字架","祈り","涙"] },
      { kaomoji: "†(ᗒᗣᗕ)՞", tags: ["十字架","祈り","悲しみ"] },
      { kaomoji: "✞(｡T ω T｡)", tags: ["十字架","祈り","泣く"] },
      { kaomoji: "†_(:3」∠)_", tags: ["十字架","祈り","土下座"] },
      { kaomoji: "✝(´ཀ`」 ∠)_", tags: ["十字架","祈り","土下座"] },
      { kaomoji: "†(m_ _)m", tags: ["十字架","祈り","お辞儀"] },
    ],
  },
  {
    title: "装飾された十字架",
    items: [
      { kaomoji: "†━━†", tags: ["十字架","装飾","線"] },
      { kaomoji: "✝━━✝", tags: ["十字架","装飾","線"] },
      { kaomoji: "†┏━━━┓†", tags: ["十字架","装飾","枠"] },
      { kaomoji: "✝｡･:*:･ﾟ'★", tags: ["十字架","装飾","星"] },
      { kaomoji: "✞ﾟ･*:.｡..｡.:*･ﾟ✞", tags: ["十字架","装飾","点"] },
      { kaomoji: "†❖†", tags: ["十字架","装飾","記号"] },
      { kaomoji: "†◆†", tags: ["十字架","装飾","ダイヤ"] },
      { kaomoji: "✝★✝", tags: ["十字架","装飾","星"] },
      { kaomoji: "†☆†", tags: ["十字架","装飾","星"] },
      { kaomoji: "✞◇✞", tags: ["十字架","装飾","ダイヤ"] },
      { kaomoji: "†◎†", tags: ["十字架","装飾","丸"] },
      { kaomoji: "†●†", tags: ["十字架","装飾","丸"] },
      { kaomoji: "✝♦✝", tags: ["十字架","装飾","ダイヤ"] },
      { kaomoji: "†═══†", tags: ["十字架","装飾","長い"] },
      { kaomoji: "✝━━━✝", tags: ["十字架","装飾","長い"] },
    ],
  },
  {
    title: "ゴシック系",
    items: [
      { kaomoji: "†(｀皿´)†", tags: ["十字架","ゴシック","怒り"] },
      { kaomoji: "✝(ಠ_ಠ)✝", tags: ["十字架","ゴシック","睨む"] },
      { kaomoji: "†(¬_¬)†", tags: ["十字架","ゴシック","不機嫌"] },
      { kaomoji: "✞(-_-)✞", tags: ["十字架","ゴシック","無表情"] },
      { kaomoji: "†(ಠ╭╮ಠ)†", tags: ["十字架","ゴシック","黒"] },
      { kaomoji: "✝(￣ー￣)✝", tags: ["十字架","ゴシック","クール"] },
      { kaomoji: "†(︶︿︶)†", tags: ["十字架","ゴシック","悲しい"] },
      { kaomoji: "✞(¬‿¬)✞", tags: ["十字架","ゴシック","邪悪"] },
      { kaomoji: "†(눈_눈)†", tags: ["十字架","ゴシック","睨む"] },
      { kaomoji: "✝(◣_◢)✝", tags: ["十字架","ゴシック","怒り"] },
      { kaomoji: "†(━_━)†", tags: ["十字架","ゴシック","冷酷"] },
      { kaomoji: "✞(҂‾ ▵‾)✞", tags: ["十字架","ゴシック","怒り"] },
      { kaomoji: "†(｀ε´)†", tags: ["十字架","ゴシック","不満"] },
      { kaomoji: "✝(-‸ლ)✝", tags: ["十字架","ゴシック","呆れ"] },
      { kaomoji: "†(ಠ益ಠ)†", tags: ["十字架","ゴシック","睨む"] },
    ],
  },
  {
    title: "天使と十字架",
    items: [
      { kaomoji: "†(ﾉ´ヮ`)ﾉ*: ･ﾟ", tags: ["十字架","天使","キラキラ"] },
      { kaomoji: "✝(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧", tags: ["十字架","天使","キラキラ"] },
      { kaomoji: "†｡ﾟ･*｡ﾟ+(人´∀`)†", tags: ["十字架","天使","幸せ"] },
      { kaomoji: "✝☁✝", tags: ["十字架","天使","雲"] },
      { kaomoji: "†⭐†", tags: ["十字架","天使","星"] },
      { kaomoji: "✞✨✞", tags: ["十字架","天使","キラキラ"] },
      { kaomoji: "†🌟†", tags: ["十字架","天使","星"] },
      { kaomoji: "✝(ﾉ≧∀≦)ﾉ", tags: ["十字架","天使","喜び"] },
      { kaomoji: "†(｡•̀ᴗ-)✧", tags: ["十字架","天使","ウインク"] },
      { kaomoji: "✞(ﾉ´∀`)ﾉ", tags: ["十字架","天使","嬉しい"] },
      { kaomoji: "†°˖✧◝(⁰▿⁰)◜✧˖°", tags: ["十字架","天使","キラキラ"] },
      { kaomoji: "✝(♡°▽°♡)", tags: ["十字架","天使","愛"] },
      { kaomoji: "†(ﾉ◕ヮ◕)ﾉ", tags: ["十字架","天使","嬉しい"] },
      { kaomoji: "✞💫", tags: ["十字架","天使","流れ星"] },
      { kaomoji: "†(◕‿◕✿)", tags: ["十字架","天使","可愛い"] },
    ],
  },
  {
    title: "教会関連",
    items: [
      { kaomoji: "†📖†", tags: ["十字架","教会","聖書"] },
      { kaomoji: "✝🔔✝", tags: ["十字架","教会","鐘"] },
      { kaomoji: "†(˘ω˘人)", tags: ["十字架","教会","祈り"] },
      { kaomoji: "✞(人´∀`)", tags: ["十字架","教会","祈り"] },
      { kaomoji: "†┃†", tags: ["十字架","教会","柱"] },
      { kaomoji: "✝╋✝", tags: ["十字架","教会","交差"] },
      { kaomoji: "†(๑•̀ㅂ•́)و", tags: ["十字架","教会","頑張る"] },
      { kaomoji: "✞(-人-)†", tags: ["十字架","教会","合掌"] },
      { kaomoji: "†🎶†", tags: ["十字架","教会","音楽"] },
      { kaomoji: "✝(｡-人-｡)", tags: ["十字架","教会","祈り"] },
      { kaomoji: "†🎵†", tags: ["十字架","教会","音楽"] },
      { kaomoji: "✞(´-人-`)", tags: ["十字架","教会","合掌"] },
      { kaomoji: "†(˘︶˘人)", tags: ["十字架","教会","平和"] },
      { kaomoji: "✝🙌✝", tags: ["十字架","教会","賛美"] },
      { kaomoji: "†(´∀｀人)", tags: ["十字架","教会","感謝"] },
    ],
  },
  {
    title: "アクション系",
    items: [
      { kaomoji: "ヽ(†)ﾉ", tags: ["十字架","アクション","持つ"] },
      { kaomoji: "╰(✝)╯", tags: ["十字架","アクション","持つ"] },
      { kaomoji: "†ヽ(°◇° )ノ†", tags: ["十字架","アクション","持つ"] },
      { kaomoji: "†ヾ(･ω･*)ﾉ", tags: ["十字架","アクション","振る"] },
      { kaomoji: "✞(╯°□°）╯", tags: ["十字架","アクション","投げる"] },
      { kaomoji: "†_(┐「ε:)_", tags: ["十字架","アクション","倒れる"] },
      { kaomoji: "✝(っ °Д °;)っ", tags: ["十字架","アクション","掴む"] },
      { kaomoji: "†(ﾉ*ФωФ)ﾉ", tags: ["十字架","アクション","持つ"] },
      { kaomoji: "✝⊂(◉‿◉)つ", tags: ["十字架","アクション","差し出す"] },
      { kaomoji: "†━(ﾉ゜∀゜)ﾉ", tags: ["十字架","アクション","振り回す"] },
      { kaomoji: "✞ヾ(≧▽≦*)o", tags: ["十字架","アクション","振る"] },
      { kaomoji: "✝(ง •̀_•́)ง", tags: ["十字架","アクション","戦う"] },
      { kaomoji: "†(ง'̀-'́)ง†", tags: ["十字架","アクション","戦う"] },
      { kaomoji: "✝╰(°▽°)╯", tags: ["十字架","アクション","喜ぶ"] },
    ],
  },
  {
    title: "感情表現",
    items: [
      { kaomoji: "†(´；ω；｀)", tags: ["十字架","感情","泣く"] },
      { kaomoji: "†(T_T)†", tags: ["十字架","感情","泣く"] },
      { kaomoji: "✝(╥﹏╥)", tags: ["十字架","感情","悲しい"] },
      { kaomoji: "†(｡•́︿•̀｡)†", tags: ["十字架","感情","悲しい"] },
      { kaomoji: "✞(◞‸◟)", tags: ["十字架","感情","落ち込む"] },
      { kaomoji: "✝(´°̥̥̥̥̥̥̥̥ω°̥̥̥̥̥̥̥̥｀)", tags: ["十字架","感情","涙"] },
      { kaomoji: "†(ಥ﹏ಥ)†", tags: ["十字架","感情","泣く"] },
      { kaomoji: "✝(இ﹏இ`｡)", tags: ["十字架","感情","泣く"] },
      { kaomoji: "†(｡╯︵╰｡)†", tags: ["十字架","感情","悲しい"] },
      { kaomoji: "✞(╯︵╰,)", tags: ["十字架","感情","落胆"] },
      { kaomoji: "✝(˘̩̩̩ε˘̩ƪ)", tags: ["十字架","感情","不安"] },
      { kaomoji: "†(｡•́_ก̀｡)", tags: ["十字架","感情","心配"] },
      { kaomoji: "✝(⌣̩̩́_⌣̩̩̀)", tags: ["十字架","感情","悲しい"] },
      { kaomoji: "†(╥_╥)†", tags: ["十字架","感情","泣く"] },
      { kaomoji: "✞(ꈨຶ꒳ꈨຶ)✞", tags: ["十字架","感情","涙"] },
    ],
  },
  {
    title: "特殊記号",
    items: [
      { kaomoji: "†━━━†", tags: ["十字架","特殊","長い"] },
      { kaomoji: "✝┃✝", tags: ["十字架","特殊","縦"] },
      { kaomoji: "†━†━†", tags: ["十字架","特殊","連続"] },
      { kaomoji: "✞━✞━✞", tags: ["十字架","特殊","連続"] },
      { kaomoji: "†╋†", tags: ["十字架","特殊","二重"] },
      { kaomoji: "†┿†", tags: ["十字架","特殊","二重"] },
      { kaomoji: "✝╬✝", tags: ["十字架","特殊","複雑"] },
      { kaomoji: "†▓†", tags: ["十字架","特殊","塗りつぶし"] },
      { kaomoji: "✞▒✞", tags: ["十字架","特殊","網掛け"] },
      { kaomoji: "✝░✝", tags: ["十字架","特殊","薄い"] },
      { kaomoji: "†▀†", tags: ["十字架","特殊","上半分"] },
      { kaomoji: "✝▄✝", tags: ["十字架","特殊","下半分"] },
      { kaomoji: "†█†", tags: ["十字架","特殊","塗りつぶし"] },
      { kaomoji: "✞▌✞", tags: ["十字架","特殊","左半分"] },
    ],
  },
];

