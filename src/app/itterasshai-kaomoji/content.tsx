import type { Metadata } from "next";
import type { KaomojiCollectionGroup, KaomojiFaqProps, KaomojiHeroProps, KaomojiWhatProps, KaomojiWhyProps } from "@/features/kaomoji/types";
import { withCanonical } from "@/lib/seo";
import { uniq } from "@/features/kaomoji/data/uniq";

export const metadata: Metadata = {
  title: "行ってらっしゃい顔文字一覧（Kaomoji）｜見送りの挨拶をコピペ",
  description: "行ってらっしゃい顔文字（Kaomoji）をまとめて掲載。温かい見送り・応援の気持ちを込めた顔文字をワンクリックでコピー。LINE/X/Instagram/Discordにコピペ。登録不要で無料。",
  ...withCanonical("/itterasshai-kaomoji"),
};

export const itterasshaiKaomojiHeroContent: KaomojiHeroProps = {
  title: "行ってらっしゃい顔文字一覧",
  kaomoji: "(｡･ω･)ﾉﾞｲｯﾃﾗｯｼｬｲ",
  subtitle: "見送りの挨拶【コピペ簡単】",
  description: "行ってらっしゃい顔文字（Kaomoji）は、出かける人を見送る温かい挨拶。気をつけての気持ちや応援を込めて、相手の無事を願う優しい言葉を届けましょう。",
  primaryCta: { href: "#list", label: "顔文字を探す" },
  secondaryCta: { href: "/", label: "ホームへ" },
};

export const itterasshaiKaomojiWhatContent: KaomojiWhatProps = {
  heading: "行ってらっしゃい顔文字（Kaomoji）とは？",
  intro: "行ってらっしゃい顔文字は、「行ってきます」に対する返事として、出かける人を見送り無事を願う挨拶を表現するKaomojiです。",
  usageHeading: "使えるシーン",
  usageItems: ["家族が出かける時の見送り", "友達との別れ際", "仕事や学校に行く人への応援"],
  typesHeading: "行ってらっしゃい顔文字のタイプ",
  types: [
    { title: "温かい見送り", description: "優しく見送る気持ちを表現。", example: "例：(｡･ω･)ﾉﾞｲｯﾃﾗｯｼｬｲ" },
    { title: "応援", description: "頑張ってねの気持ちを込めて。", example: "例：(•̀ᴗ•́)و ̑̑いってらっしゃい" },
  ],
  featuresHeading: "見送りが伝わるパーツ",
  features: [
    { symbol: "ノ", title: "手を振る", description: "見送る動作を表現。" },
    { symbol: "^", title: "笑顔", description: "温かく送り出す気持ち。" },
  ],
};

export const itterasshaiKaomojiWhyContent: KaomojiWhyProps = {
  heading: "行ってらっしゃい顔文字を上手に使うコツ",
  subheading: "相手への気遣いを込めて、温かい見送りを。",
  guideHeading: "使い分けガイド",
  guides: [
    { title: "家族へ", bullets: ["温かく見送る気持ち", "無事を願う優しさ"], recommend: "おすすめ：(｡･ω･)ﾉﾞｲｯﾃﾗｯｼｬｲ" },
    { title: "応援を込めて", bullets: ["頑張ってねの気持ち", "前向きなエネルギー"], recommend: "おすすめ：(•̀ᴗ•́)و ̑̑いってらっしゃい" },
  ],
  cultureHeading: "見送りの文化",
  cultureBody: "「行ってらっしゃい」は、「行ってきます」に対する温かい返事。相手の無事を願い、また会えることを楽しみにする気持ちを込めた日本特有の挨拶です。",
  cultureCards: [
    { title: "無事を願う", description: "気をつけての気持ちを込めて。" },
    { title: "また会う約束", description: "帰りを待っている優しさ。" },
  ],
  tipsHeading: "組み合わせ例",
  tips: [
    { title: "行ってらっしゃい＋応援", body: "頑張ってねを添えて、励ましの気持ちを。", example: "例：「行ってらっしゃい(｡･ω･)ﾉﾞ 頑張ってね！」" },
  ],
};

export const itterasshaiKaomojiFaqContent: KaomojiFaqProps = {
  heading: "よくある質問（FAQ）",
  subheading: "行ってらっしゃい顔文字、これだけ押さえればOK。",
  items: [
    { question: "行ってらっしゃい顔文字はどうやってコピーできますか？", answer: "顔文字の右側にあるコピーアイコンを押すだけでコピーできます。" },
  ],
};

export const itterasshaiKaomojiGroups: KaomojiCollectionGroup[] = [
  {
    title: "温かい見送り",
    items: uniq(["(｡･ω･)ﾉﾞｲｯﾃﾗｯｼｬｲ", "(*´ω`*)ﾉ行ってらっしゃい", "(´∀`)ﾉ行ってらっしゃい", "(◍•ᴗ•◍)行ってらっしゃい"]).map((kaomoji) => ({ kaomoji, tags: ["行ってらっしゃい", "温かい"] })),
  },
  {
    title: "応援",
    items: uniq(["(•̀ᴗ•́)و ̑̑いってらっしゃい", "٩(ˊᗜˋ*)و行ってらっしゃい", "ヽ(*´∀｀*)ノ行ってらっしゃい"]).map((kaomoji) => ({ kaomoji, tags: ["行ってらっしゃい", "応援"] })),
  },
];

export const itterasshaiKaomojiPlainText: string = uniq(itterasshaiKaomojiGroups.flatMap((group) => group.items.map((item) => item.kaomoji))).join("\n");
