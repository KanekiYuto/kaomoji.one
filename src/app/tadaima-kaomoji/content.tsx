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
  title: "ただいま顔文字一覧（Kaomoji）｜帰宅時の挨拶をコピペ",
  description:
    "ただいま顔文字（Kaomoji）をまとめて掲載。元気なただいま・疲れたただいままで、帰宅時の挨拶に使える顔文字をワンクリックでコピー。LINE/X（Twitter）/Instagram/Discordにそのままコピペ。登録不要で無料。",
  ...withCanonical("/tadaima-kaomoji"),
};

export const tadaimaKaomojiHeroContent: KaomojiHeroProps = {
  title: "ただいま顔文字一覧",
  kaomoji: "(｡･ω･)ﾉﾞﾀﾀﾞｲﾏ",
  subtitle: "帰宅時の挨拶【コピペ簡単】",
  description:
    "ただいま顔文字（Kaomoji）は、家に帰ってきた時の挨拶を表現するKaomoji。元気に帰ってきた様子や、疲れて帰宅した気持ちまで、様々な帰宅の気持ちを伝えましょう。",
  primaryCta: { href: "#list", label: "顔文字を探す" },
  secondaryCta: { href: "/", label: "ホームへ" },
};

export const tadaimaKaomojiWhatContent: KaomojiWhatProps = {
  heading: "ただいま顔文字（Kaomoji）とは？",
  intro:
    "ただいま顔文字は、帰宅時の挨拶「ただいま」を文字と記号で表現するKaomojiです。元気な表情や疲れた様子を組み合わせて、その日の気分を素直に伝えられます。",
  usageHeading: "使えるシーン",
  usageItems: [
    "家に帰ってきた時の家族へのメッセージ",
    "仕事や学校から帰った時の挨拶",
    "外出先から戻った時のLINEやSNS",
    "オンライン会議に戻った時",
    "一時離席から戻った時",
  ],
  typesHeading: "ただいま顔文字のタイプ",
  types: [
    {
      title: "元気なただいま",
      description: "明るく帰宅した様子を表現。",
      example: "例：(｡･ω･)ﾉﾞﾀﾀﾞｲﾏ  ヾ(´∀`*)ﾉただいま〜",
    },
    {
      title: "疲れたただいま",
      description: "一日の疲れを素直に表現。",
      example: "例：(´-ω-`)ただいま  (つω-｡)ただいま〜",
    },
    {
      title: "かわいい",
      description: "親しみやすく可愛らしい帰宅の挨拶。",
      example: "例：(*´꒳`*)ﾉただいま  (｡◕‿◕｡)ﾉただいま",
    },
  ],
  featuresHeading: "帰宅が伝わるパーツ",
  features: [
    {
      symbol: "ノ",
      title: "手を振る",
      description: "帰ってきたことを伝える動作。",
    },
    {
      symbol: "(-ω-)",
      title: "疲れた表情",
      description: "一日の疲れを素直に表現。",
    },
  ],
};

export const tadaimaKaomojiWhyContent: KaomojiWhyProps = {
  heading: "ただいま顔文字を上手に使うコツ",
  subheading: "その日の気分に合わせて、ぴったりのただいまを選びましょう。",
  guideHeading: "使い分けガイド",
  guides: [
    {
      title: "元気な日",
      bullets: ["明るく前向きな帰宅", "楽しかった一日を表現"],
      recommend: "おすすめ：(｡･ω･)ﾉﾞﾀﾀﾞｲﾏ  ヾ(´∀`*)ﾉただいま",
    },
    {
      title: "疲れた日",
      bullets: ["素直な疲れを伝える", "共感や労いをもらいやすい"],
      recommend: "おすすめ：(´-ω-`)ただいま  (つω-｡)ただいま",
    },
  ],
  cultureHeading: "帰宅の挨拶文化",
  cultureBody:
    "「ただいま」は「ただ今帰りました」の略で、無事に帰ってきたことを伝える日本特有の挨拶です。顔文字を添えることで、その日の気分や疲れ具合を素直に表現でき、相手に状況が伝わりやすくなります。",
  cultureCards: [
    { title: "無事の報告", description: "帰ってきたことを伝える。" },
    { title: "気分の共有", description: "その日の様子が伝わる。" },
  ],
  tipsHeading: "組み合わせ例",
  tips: [
    {
      title: "ただいま＋報告",
      body: "その日のできごとを添えると、会話が広がる。",
      example: "例：「ただいま(*´ω`*)ノ 今日は楽しかったよ！」",
    },
  ],
};

export const tadaimaKaomojiFaqContent: KaomojiFaqProps = {
  heading: "よくある質問（FAQ）",
  subheading: "ただいま顔文字、これだけ押さえればOK。",
  items: [
    {
      question: "ただいま顔文字はどうやってコピーできますか？",
      answer:
        "顔文字の右側にあるコピーアイコンを押すだけでコピーできます。コピー後はLINEやSNSに貼り付けて使ってください。",
    },
    {
      question: "「ただいま」と「ただいま帰りました」の違いは？",
      answer:
        "「ただいま」の方がカジュアルで日常的な表現です。「ただいま帰りました」はより丁寧で、目上の方にも使えます。",
    },
  ],
};

export const tadaimaKaomojiGroups: KaomojiCollectionGroup[] = [
  {
    title: "元気なただいま",
    items: uniq([
      "(｡･ω･)ﾉﾞﾀﾀﾞｲﾏ",
      "ヾ(´∀`*)ﾉただいま〜",
      "(*´▽`*)ﾉただいま！",
      "(^-^)/ただいま",
      "＼(^o^)／ただいま",
      "ヽ(*´∀｀*)ノただいま",
    ]).map((kaomoji) => ({ kaomoji, tags: ["ただいま", "元気"] })),
  },
  {
    title: "疲れたただいま",
    items: uniq([
      "(´-ω-`)ただいま",
      "(つω-｡)ただいま〜",
      "(-ω-)ただいま",
      "(´；ω；`)ただいま",
      "(っ_ _)っただいま",
      "(-｡-;)ただいま",
    ]).map((kaomoji) => ({ kaomoji, tags: ["ただいま", "疲れた"] })),
  },
  {
    title: "かわいい",
    items: uniq([
      "(*´꒳`*)ﾉただいま",
      "(｡◕‿◕｡)ﾉただいま",
      "(*´ω`*)ﾉただいま",
      "(◍•ᴗ•◍)ただいま",
      "(｡•̀ᴗ-)✧ただいま",
    ]).map((kaomoji) => ({ kaomoji, tags: ["ただいま", "かわいい"] })),
  },
  {
    title: "シンプル",
    items: uniq([
      "(´∀`)ﾉただいま",
      "ただいま(*´ω`*)ノ",
      "(･ω･)ﾉただいま",
      "(｡･ω･)ﾉﾞただいま",
      "ただいま(^-^)ノ",
    ]).map((kaomoji) => ({ kaomoji, tags: ["ただいま", "シンプル"] })),
  },
];

export const tadaimaKaomojiPlainText: string = uniq(
  tadaimaKaomojiGroups.flatMap((group) => group.items.map((item) => item.kaomoji))
).join("\n");
