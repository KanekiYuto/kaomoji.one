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
  title: "おかえり顔文字一覧（Kaomoji）｜帰宅を迎える挨拶をコピペ",
  description:
    "おかえり顔文字（Kaomoji）をまとめて掲載。温かいおかえり・嬉しいおかえりまで、帰宅を迎える挨拶に使える顔文字をワンクリックでコピー。LINE/X（Twitter）/Instagram/Discordにそのままコピペ。登録不要で無料。",
  ...withCanonical("/okaeri-kaomoji"),
};

export const okaeriKaomojiHeroContent: KaomojiHeroProps = {
  title: "おかえり顔文字一覧",
  kaomoji: "(｡･ω･)ﾉﾞｵｶｴﾘ",
  subtitle: "帰宅を迎える挨拶【コピペ簡単】",
  description:
    "おかえり顔文字（Kaomoji）は、帰ってきた人を迎える温かい挨拶を表現するKaomoji。嬉しさや労いの気持ちを込めて、相手の帰宅を歓迎しましょう。",
  primaryCta: { href: "#list", label: "顔文字を探す" },
  secondaryCta: { href: "/", label: "ホームへ" },
};

export const okaeriKaomojiWhatContent: KaomojiWhatProps = {
  heading: "おかえり顔文字（Kaomoji）とは？",
  intro:
    "おかえり顔文字は、帰ってきた人を迎える挨拶「おかえり」「おかえりなさい」を文字と記号で表現するKaomojiです。笑顔や温かい雰囲気で、相手の帰宅を歓迎する気持ちを伝えられます。",
  usageHeading: "使えるシーン",
  usageItems: [
    "家族が帰ってきた時の返事",
    "友達や恋人が戻ってきた時",
    "オンライン会議に戻った人への挨拶",
    "チャットに復帰した人を迎える時",
    "久しぶりに会った時の挨拶",
  ],
  typesHeading: "おかえり顔文字のタイプ",
  types: [
    {
      title: "温かいおかえり",
      description: "優しく迎え入れる気持ちを表現。",
      example: "例：(｡･ω･)ﾉﾞｵｶｴﾘ  (*´ω`*)おかえり",
    },
    {
      title: "嬉しいおかえり",
      description: "喜びを込めて歓迎する表現。",
      example: "例：ヾ(´∀`*)ﾉおかえり〜  (*´▽`*)ﾉおかえり！",
    },
    {
      title: "労いのおかえり",
      description: "お疲れ様の気持ちを込めて。",
      example: "例：(´-ω-`)おかえり  お疲れ様(*´ω`*)ノ",
    },
  ],
  featuresHeading: "歓迎が伝わるパーツ",
  features: [
    {
      symbol: "ノ",
      title: "手を振る",
      description: "迎え入れる動作を表現。",
    },
    {
      symbol: "^",
      title: "笑顔",
      description: "嬉しい気持ちや温かさを表現。",
    },
  ],
};

export const okaeriKaomojiWhyContent: KaomojiWhyProps = {
  heading: "おかえり顔文字を上手に使うコツ",
  subheading: "相手の様子に合わせて、ぴったりのおかえりを選びましょう。",
  guideHeading: "使い分けガイド",
  guides: [
    {
      title: "元気に迎える",
      bullets: ["明るく嬉しい気持ちを伝える", "相手も元気になれる挨拶"],
      recommend: "おすすめ：ヾ(´∀`*)ﾉおかえり  (*´▽`*)ﾉおかえり！",
    },
    {
      title: "疲れた相手を労う",
      bullets: ["お疲れ様の気持ちを込めて", "優しく労いの言葉を添える"],
      recommend: "おすすめ：(´-ω-`)おかえり  お疲れ様(*´ω`*)ノ",
    },
  ],
  cultureHeading: "迎える挨拶の文化",
  cultureBody:
    "「おかえり」「おかえりなさい」は、「ただいま」に対する返事として、無事に帰ってきたことを喜び迎え入れる日本特有の挨拶です。顔文字を添えることで、ただの返事ではなく、相手の帰宅を心から歓迎する温かい気持ちが伝わります。",
  cultureCards: [
    { title: "歓迎の気持ち", description: "帰りを待っていたことを伝える。" },
    { title: "労いの心", description: "一日の疲れを癒す優しさ。" },
  ],
  tipsHeading: "組み合わせ例",
  tips: [
    {
      title: "おかえり＋労い",
      body: "お疲れ様を添えて、相手を労う気持ちを表現。",
      example: "例：「おかえり(*´ω`*)ノ お疲れ様！」",
    },
  ],
};

export const okaeriKaomojiFaqContent: KaomojiFaqProps = {
  heading: "よくある質問（FAQ）",
  subheading: "おかえり顔文字、これだけ押さえればOK。",
  items: [
    {
      question: "おかえり顔文字はどうやってコピーできますか？",
      answer:
        "顔文字の右側にあるコピーアイコンを押すだけでコピーできます。コピー後はLINEやSNSに貼り付けて使ってください。",
    },
    {
      question: "「おかえり」と「おかえりなさい」の違いは？",
      answer:
        "「おかえりなさい」の方がより丁寧で正式な表現です。「おかえり」は親しい相手に使うカジュアルな表現です。",
    },
  ],
};

export const okaeriKaomojiGroups: KaomojiCollectionGroup[] = [
  {
    title: "温かいおかえり",
    items: uniq([
      "(｡･ω･)ﾉﾞｵｶｴﾘ",
      "(*´ω`*)おかえり",
      "(´∀`)ﾉおかえり",
      "(◍•ᴗ•◍)おかえり",
      "(｡•̀ᴗ-)✧おかえり",
      "(*´꒳`*)ﾉおかえり",
    ]).map((kaomoji) => ({ kaomoji, tags: ["おかえり", "温かい"] })),
  },
  {
    title: "嬉しいおかえり",
    items: uniq([
      "ヾ(´∀`*)ﾉおかえり〜",
      "(*´▽`*)ﾉおかえり！",
      "(^-^)/おかえり",
      "＼(^o^)／おかえり",
      "ヽ(*´∀｀*)ノおかえり",
      "٩(ˊᗜˋ*)وおかえり",
    ]).map((kaomoji) => ({ kaomoji, tags: ["おかえり", "嬉しい"] })),
  },
  {
    title: "労いのおかえり",
    items: uniq([
      "(´-ω-`)おかえり",
      "お疲れ様(*´ω`*)ノ",
      "おかえり(つω-｡)お疲れ様",
      "(｡-ω-)ﾉおかえり",
      "おかえり〜お疲れ様でした",
    ]).map((kaomoji) => ({ kaomoji, tags: ["おかえり", "労い"] })),
  },
  {
    title: "シンプル",
    items: uniq([
      "(´∀`)ﾉおかえり",
      "おかえり(*´ω`*)ノ",
      "(･ω･)ﾉおかえり",
      "(｡･ω･)ﾉﾞおかえり",
      "おかえり(^-^)ノ",
      "(*´∀｀*)ﾉおかえり",
    ]).map((kaomoji) => ({ kaomoji, tags: ["おかえり", "シンプル"] })),
  },
  {
    title: "デコ・装飾",
    items: uniq([
      "☆おかえり☆",
      "✨おかえり✨",
      "❀.(*´ω`*)❀.おかえり",
      "꒰๑˃͈꒳˂͈๑꒱ﾉおかえり♡",
      "゜*☆*゜おかえり゜*☆*゜",
      "✧*｡٩(ˊᗜˋ*)و✧おかえり",
    ]).map((kaomoji) => ({ kaomoji, tags: ["おかえり", "デコ"] })),
  },
];

export const okaeriKaomojiPlainText: string = uniq(
  okaeriKaomojiGroups.flatMap((group) => group.items.map((item) => item.kaomoji))
).join("\n");
