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
  title: "ミッフィー顔文字一覧（Kaomoji）｜基本型・点型・表情変化もコピペ",
  description:
    "ミッフィー顔文字（Kaomoji）をまとめて掲載。基本型・点型・表情変化・アクション・装飾型・耳付き・特殊型・感情型まで。検索＆ワンクリックでコピーして、LINE/X（Twitter）/Instagram/Discordにそのままコピペ。登録不要で無料。スマホでもOK。",
  ...withCanonical("/miffy-kaomoji"),
};

export const miffyKaomojiHeroContent: KaomojiHeroProps = {
  title: "ミッフィー顔文字一覧",
  kaomoji: "(・×・)  (･×･)",
  subtitle: "基本型・点型まで【コピペ簡単】",
  description:
    "「ミッフィーっぽさ」が出る顔文字を集めました。シンプルから可愛い系、装飾つき、ユニーク系まで幅広く掲載。気に入った顔文字はワンクリックでコピーして、そのまま貼り付けできます。",
  primaryCta: { href: "#list", label: "顔文字を探す" },
  secondaryCta: { href: "/", label: "ホームへ" },
};

export const miffyKaomojiWhatContent: KaomojiWhatProps = {
  heading: "ミッフィー顔文字（Kaomoji）とは？",
  intro:
    "ミッフィー顔文字は、記号や絵文字、キャラっぽいパーツを組み合わせて「ミッフィー」の雰囲気を表現するKaomojiです。短い一言でもテーマが伝わりやすく、SNSやチャットのリアクションに便利です。",
  usageHeading: "使えるシーン",
  usageItems: [
    "ミッフィーの話題に",
    "挨拶や日常の返信に",
    "SNS投稿のテーマに",
    "かわいく盛りたいときに",
    "ネタやユニークな一言に",
  ],
  typesHeading: "ミッフィー顔文字の種類",
  types: [
    {
      title: "基本型",
      description: "このカテゴリの定番をまとめてチェック。",
      example: "例: (・×・)  (･×･)",
    },
    {
      title: "点型",
      description: "このカテゴリの定番をまとめてチェック。",
      example: "例: ˙˟˙  ˙ ˟ ˙",
    },
    {
      title: "表情変化",
      description: "このカテゴリの定番をまとめてチェック。",
      example: "例: (´･×･`)  (´・×・｀)",
    },
    {
      title: "アクション",
      description: "このカテゴリの定番をまとめてチェック。",
      example: "例: ⊂((・×・))⊃  ⊂((・x・))⊃",
    },
    {
      title: "装飾型",
      description: "このカテゴリの定番をまとめてチェック。",
      example: "例: ᐡ ・×・ᐡ  ᐢ. ₓ .ᐢ",
    },
  ],
  featuresHeading: "ミッフィーらしさが出るポイント",
  features: [
    { symbol: "(・×・)", title: "定番", description: "まずは短くて使いやすい定番から。" },
    { symbol: "♡", title: "かわいい", description: "かわいい系のカテゴリを選ぶと柔らかい印象に。" },
    { symbol: "✨", title: "装飾", description: "絵文字や装飾つきは投稿で映えます。" },
    { symbol: "ASCII", title: "AA/アート", description: "大きめの表現はネタとして強いです。" },
  ],
};

export const miffyKaomojiWhyContent: KaomojiWhyProps = {
  heading: "ミッフィー顔文字の使い分け",
  subheading: "シンプルから装飾まで。場面に合わせて“雰囲気”を調整できます。",
  guideHeading: "シーン別ガイド",
  guides: [
    {
      title: "日常の返信",
      bullets: ["短めのシンプル系が自然", "文章に馴染みやすい"],
      recommend: "おすすめ: (・×・)",
    },
    {
      title: "SNS投稿",
      bullets: ["装飾つきでテーマが伝わりやすい", "写真と合わせると映える"],
      recommend: "おすすめ: ˙˟˙",
    },
    {
      title: "ネタ・ユニーク",
      bullets: ["ユニーク/AA系でインパクト", "使いすぎると読みにくいので注意"],
      recommend: "おすすめ: /ヽ ／ヽ ｜ | /　ノ ｜ |/ ／ ／ ＼ / ヽ | ・ ・ | ＼＿ｘ＿＿ノ ／(_ｏ_ノ＼ (_/ ヽ＿) L＿＿＿_| (＿(＿)",
    },
    {
      title: "かわいく盛る",
      bullets: ["可愛いカテゴリを選ぶ", "一言に添えると収まりが良い"],
      recommend: "おすすめ: ˙˟˙",
    },
  ],
  cultureHeading: "「ミッフィー」モチーフは一言で伝わる",
  cultureBody:
    "ミッフィーは見た目のイメージが強く、短い文章でもテーマが伝わりやすいモチーフです。顔文字を添えるだけで、投稿や返信の雰囲気を軽く・かわいく・面白く調整できます。",
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
      example: "例: 今日はいい日 (・×・)",
    },
    {
      title: "投稿のテーマ",
      body: "写真や話題に合わせて選ぶと伝わりやすい。",
      example: "例: ミッフィーかわいい (･×･)",
    },
  ],
};

export const miffyKaomojiFaqContent: KaomojiFaqProps = {
  heading: "よくある質問（FAQ）",
  subheading: "ミッフィー顔文字、迷ったらここだけ見ればOK。",
  items: [
    {
      question: "ミッフィー顔文字はどうやってコピーできますか？",
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

export const miffyKaomojiGroups: KaomojiCollectionGroup[] = [
  {
    title: "基本型",
    items: [
      { kaomoji: "(・×・)", tags: ["基本","ミッフィー","標準"] },
      { kaomoji: "(･×･)", tags: ["基本","ミッフィー","シンプル"] },
      { kaomoji: "（・×・）", tags: ["基本","全角","ミッフィー"] },
      { kaomoji: "・×・", tags: ["極簡","ミッフィー","顔のみ"] },
      { kaomoji: "･×･", tags: ["極簡","ミッフィー","小さい"] },
      { kaomoji: "(・x・)", tags: ["基本","小文字","ミッフィー"] },
      { kaomoji: "(･x･)", tags: ["基本","小文字","シンプル"] },
      { kaomoji: "( ・×・ )", tags: ["基本","スペース付き","ミッフィー"] },
      { kaomoji: "( ･×･ )", tags: ["基本","スペース付き","シンプル"] },
      { kaomoji: "(　･×･　)", tags: ["基本","全角スペース","ミッフィー"] },
      { kaomoji: "miffy(・ x ・)", tags: ["基本","スペース","ミッフィー"] },
      { kaomoji: "miffy( ･×･ )", tags: ["基本","空白","ミッフィー"] },
      { kaomoji: "miffy(･x･)", tags: ["基本","小文字","ミッフィー"] },
    ],
  },
  {
    title: "点型",
    items: [
      { kaomoji: "˙˟˙", tags: ["点","ミニマル","ミッフィー"] },
      { kaomoji: "˙ ˟ ˙", tags: ["点","スペース付き","ミッフィー"] },
      { kaomoji: "˘×˘", tags: ["点","曲線","ミッフィー"] },
      { kaomoji: "( ˘×˘ )", tags: ["点","括弧付き","ミッフィー"] },
    ],
  },
  {
    title: "表情変化",
    items: [
      { kaomoji: "(´･×･`)", tags: ["表情","困った","ミッフィー"] },
      { kaomoji: "(´・×・｀)", tags: ["表情","困惑","ミッフィー"] },
      { kaomoji: "(´・x・`)", tags: ["表情","心配","ミッフィー"] },
      { kaomoji: "(｡・×・｡)", tags: ["表情","丸い","ミッフィー"] },
      { kaomoji: "(｡･×･｡)", tags: ["表情","まるい","ミッフィー"] },
      { kaomoji: "('×')", tags: ["表情","シンプル","ミッフィー"] },
      { kaomoji: "(' × ')", tags: ["表情","スペース","ミッフィー"] },
      { kaomoji: "(｀・×・´)", tags: ["表情","きりっと","ミッフィー"] },
      { kaomoji: "(*´×`*)", tags: ["表情","恥ずかしい","ミッフィー"] },
      { kaomoji: "(๑´×`๑)", tags: ["表情","照れ","ミッフィー"] },
      { kaomoji: "miffy( ・x・` )", tags: ["表情","困惑","ミッフィー"] },
      { kaomoji: "miffy(๑´×`๑)", tags: ["表情","照れる","ミッフィー"] },
      { kaomoji: "miffy(*´×`*)", tags: ["表情","恥ずかしい","ミッフィー"] },
      { kaomoji: "miffy(´・×・｀)", tags: ["表情","心配","ミッフィー"] },
      { kaomoji: "miffy(｡・×・｡)", tags: ["表情","まるい","ミッフィー"] },
      { kaomoji: "miffy(｀・×・´)", tags: ["表情","真剣","ミッフィー"] },
      { kaomoji: "(≧×≦)", tags: ["表情","興奮","ミッフィー"] },
      { kaomoji: "(＞×＜)", tags: ["表情","怒り","ミッフィー"] },
      { kaomoji: "(；×；)", tags: ["表情","泣く","ミッフィー"] },
      { kaomoji: "(＾×＾)", tags: ["表情","笑顔","ミッフィー"] },
      { kaomoji: "(－×－)", tags: ["表情","眠い","ミッフィー"] },
      { kaomoji: "(＝×＝)", tags: ["表情","疲れ","ミッフィー"] },
    ],
  },
  {
    title: "アクション",
    items: [
      { kaomoji: "⊂((・×・))⊃", tags: ["動作","ハグ","ミッフィー"] },
      { kaomoji: "⊂((・x・))⊃", tags: ["動作","抱擁","ミッフィー"] },
      { kaomoji: "\\(・×・)/", tags: ["動作","バンザイ","ミッフィー"] },
      { kaomoji: "\\( ・×・ )/", tags: ["動作","万歳","ミッフィー"] },
      { kaomoji: "o(・×・)/", tags: ["動作","手を挙げる","ミッフィー"] },
      { kaomoji: "*\\(･ｘ･)/*", tags: ["動作","キラキラ","ミッフィー"] },
      { kaomoji: "(・×・三・×・)", tags: ["動作","走る","ミッフィー"] },
      { kaomoji: "∩･×･∩", tags: ["動作","ピース","ミッフィー"] },
      { kaomoji: "miffy(・×・三・×・) ŧ‹\"ŧ‹\"", tags: ["動作","走る","音付き"] },
      { kaomoji: "miffy(ु・x・) ु⁾⁾", tags: ["動作","ジャンプ","ミッフィー"] },
      { kaomoji: "⊂miffy(miffy(・×・))⊃", tags: ["動作","ハグ","重複"] },
    ],
  },
  {
    title: "装飾型",
    items: [
      { kaomoji: "ᐡ ・×・ᐡ", tags: ["装飾","かわいい","ミッフィー"] },
      { kaomoji: "ᐢ. ₓ .ᐢ", tags: ["装飾","ふわふわ","ミッフィー"] },
      { kaomoji: "( ᐢ・×・ᐢ )", tags: ["装飾","ふんわり","ミッフィー"] },
      { kaomoji: "₍ᐢ. ༝ .ᐢ₎", tags: ["装飾","もふもふ","ミッフィー"] },
      { kaomoji: "₍ᐢ•༝•ᐢ₎", tags: ["装飾","まるい","ミッフィー"] },
      { kaomoji: "꒰ ˙ ˟ ˙ ꒱", tags: ["装飾","括弧","ミッフィー"] },
      { kaomoji: "´｡•✕•｡`", tags: ["装飾","キラキラ","ミッフィー"] },
      { kaomoji: "ᐢ. ₓ .ᐢ⋆౨ৎ˚⟡˖ ࣪", tags: ["装飾","星","ミッフィー"] },
      { kaomoji: "miffy( ᐢ•̤ ·̫ •̤ᐢ )", tags: ["装飾","ふわふわ","ミッフィー"] },
      { kaomoji: "ᕱ⑅︎ᕱ(｡・×・｡)", tags: ["装飾","飾り","ミッフィー"] },
    ],
  },
  {
    title: "耳付き",
    items: [
      { kaomoji: "/) /) \n( ・×・)", tags: ["耳","立体","ミッフィー"] },
      { kaomoji: "/) /) \n(｡･×･)", tags: ["耳","立体的","ミッフィー"] },
      { kaomoji: "/* °×° *\\", tags: ["耳","横","ミッフィー"] },
      { kaomoji: "(ᥥ・ⅹ・ᥥ）", tags: ["耳","丸い","ミッフィー"] },
      { kaomoji: "(・ⅹ・）", tags: ["耳","シンプル","ミッフィー"] },
    ],
  },
  {
    title: "特殊型",
    items: [
      { kaomoji: "(≡・x・≡)", tags: ["特殊","ライン","ミッフィー"] },
      { kaomoji: "(° × ° )", tags: ["特殊","度記号","ミッフィー"] },
      { kaomoji: "（°×°）", tags: ["特殊","全角度","ミッフィー"] },
      { kaomoji: "( • ✕ • )", tags: ["特殊","点","ミッフィー"] },
      { kaomoji: "(゜ｘ゜)", tags: ["特殊","丸","ミッフィー"] },
      { kaomoji: "( – × – )", tags: ["特殊","ダッシュ","ミッフィー"] },
      { kaomoji: "( ੭ ・ⅹ ¬ )੭", tags: ["特殊","ユニーク","ミッフィー"] },
    ],
  },
  {
    title: "感情型",
    items: [
      { kaomoji: "(♡•×•♡)", tags: ["感情","愛","ミッフィー"] },
      { kaomoji: "( ᐢ・×・ᐢ )♡", tags: ["感情","ハート","ミッフィー"] },
      { kaomoji: "( ᐢ・×・ᐢ )♥", tags: ["感情","愛情","ミッフィー"] },
      { kaomoji: "× '", tags: ["感情","ウインク","ミッフィー"] },
    ],
  },
  {
    title: "文字付き",
    items: [
      { kaomoji: "miffy(・×・)", tags: ["文字","名前付き","ミッフィー"] },
      { kaomoji: "miffy(･×･)", tags: ["文字","ミッフィー名","シンプル"] },
      { kaomoji: "ミッフィー(・×・)", tags: ["文字","日本語","ミッフィー"] },
      { kaomoji: "（。・x・。）ミッフィーちゃん", tags: ["文字","ちゃん付け","ミッフィー"] },
      { kaomoji: "(ᐡ・ㅊ・ᐡ)ミッフィ〜", tags: ["文字","伸ばし","ミッフィー"] },
      { kaomoji: "( ᐢ・×・ᐢ )Miffy♡", tags: ["文字","英語","ミッフィー"] },
      { kaomoji: "( ᐢ・×・ᐢ )Miffy♥", tags: ["文字","英名","ミッフィー"] },
    ],
  },
  {
    title: "ミニ版",
    items: [
      { kaomoji: "·×·", tags: ["ミニ","小さい","ミッフィー"] },
      { kaomoji: "･✕･", tags: ["ミニ","小型","ミッフィー"] },
      { kaomoji: "•×•", tags: ["ミニ","極小","ミッフィー"] },
      { kaomoji: "·✕·", tags: ["ミニ","点","ミッフィー"] },
    ],
  },
  {
    title: "組合型",
    items: [
      { kaomoji: "∪・×・∪", tags: ["組合","カップ","ミッフィー"] },
      { kaomoji: "⌒(・×・)⌒", tags: ["組合","弧線","ミッフィー"] },
      { kaomoji: "☆(・×・)☆", tags: ["組合","星","ミッフィー"] },
      { kaomoji: "♪(・×・)♪", tags: ["組合","音符","ミッフィー"] },
      { kaomoji: "♡(・×・)♡", tags: ["組合","ハート","ミッフィー"] },
    ],
  },
  {
    title: "レア型",
    items: [
      { kaomoji: "(・✖・)", tags: ["レア","特殊記号","ミッフィー"] },
      { kaomoji: "(･✖･)", tags: ["レア","変わった","ミッフィー"] },
      { kaomoji: "(・╳・)", tags: ["レア","珍しい","ミッフィー"] },
      { kaomoji: "(･╳･)", tags: ["レア","特別","ミッフィー"] },
      { kaomoji: "(・✕・)", tags: ["レア","ユニーク","ミッフィー"] },
      { kaomoji: "(･✕･)", tags: ["レア","珍","ミッフィー"] },
    ],
  },
  {
    title: "ASCII アート",
    items: [
      { kaomoji: "　 　 /ヽ ／ヽ  \n　　 ｜ | /　ノ  \n　　 ｜ |/ ／  \n　　／　　 ＼  \n　 / 　　 　　 ヽ  \n　| ・　　・ 　 |  \n　 ＼＿ｘ＿＿ノ  \n　 ／(_ｏ_ノ＼  \n　(_/　　 ヽ＿)  \n　　L＿＿＿_|  \n　 　 (＿(＿)", tags: ["ASCII","大型","ミッフィー"] },
    ],
  },
];

