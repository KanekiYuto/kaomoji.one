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
  title: "虎顔文字一覧（Kaomoji）｜基本・かわいい・テキスト系もコピペ",
  description:
    "虎顔文字（Kaomoji）をまとめて掲載。基本・かわいい・テキスト系・絵文字付き・デコまで。検索＆ワンクリックでコピーして、LINE/X（Twitter）/Instagram/Discordにそのままコピペ。登録不要で無料。スマホでもOK。",
  ...withCanonical("/tora-kaomoji"),
};

export const toraKaomojiHeroContent: KaomojiHeroProps = {
  title: "虎顔文字一覧",
  kaomoji: "ฅ(`ω´)ฅ  (≡・x・≡)",
  subtitle: "基本・かわいいまで【コピペ簡単】",
  description:
    "「虎っぽさ」が出る顔文字を集めました。シンプルから可愛い系、装飾つき、ユニーク系まで幅広く掲載。気に入った顔文字はワンクリックでコピーして、そのまま貼り付けできます。",
  primaryCta: { href: "#list", label: "顔文字を探す" },
  secondaryCta: { href: "/", label: "ホームへ" },
};

export const toraKaomojiWhatContent: KaomojiWhatProps = {
  heading: "虎顔文字（Kaomoji）とは？",
  intro:
    "虎顔文字は、記号や絵文字、キャラっぽいパーツを組み合わせて「虎」の雰囲気を表現するKaomojiです。短い一言でもテーマが伝わりやすく、SNSやチャットのリアクションに便利です。",
  usageHeading: "使えるシーン",
  usageItems: [
    "虎の話題に",
    "挨拶や日常の返信に",
    "SNS投稿のテーマに",
    "かわいく盛りたいときに",
    "ネタやユニークな一言に",
  ],
  typesHeading: "虎顔文字の種類",
  types: [
    {
      title: "基本",
      description: "このカテゴリの定番をまとめてチェック。",
      example: "例: ฅ(`ω´)ฅ  (≡・x・≡)",
    },
    {
      title: "かわいい",
      description: "このカテゴリの定番をまとめてチェック。",
      example: "例: ᐢ(･◡･)ᐢ  ⌒( ´•ω•` )⌒",
    },
    {
      title: "テキスト系",
      description: "このカテゴリの定番をまとめてチェック。",
      example: "例: ﾄﾗ(・ω・)ﾄﾗ  ﾄﾗ(ง ´⊙ω⊙`)วﾄﾗ",
    },
    {
      title: "絵文字付き",
      description: "このカテゴリの定番をまとめてチェック。",
      example: "例: 🐯( '-' 🐯 )ﾄﾗｯﾁｬﾝ  （‪‪⋆🐯•᎑•‪‪🐯⋆）",
    },
    {
      title: "デコ",
      description: "このカテゴリの定番をまとめてチェック。",
      example: "例: ⋆͛🐯⋆͛(≡・ω・≡)⋆͛🐯⋆͛  .+*:ﾟ+ฅ(`ω´)ﾅﾃﾞﾃﾞ+:*+.",
    },
  ],
  featuresHeading: "虎らしさが出るポイント",
  features: [
    { symbol: "ฅ(`ω´)ฅ", title: "定番", description: "まずは短くて使いやすい定番から。" },
    { symbol: "♡", title: "かわいい", description: "かわいい系のカテゴリを選ぶと柔らかい印象に。" },
    { symbol: "✨", title: "装飾", description: "絵文字や装飾つきは投稿で映えます。" },
    { symbol: "ASCII", title: "AA/アート", description: "大きめの表現はネタとして強いです。" },
  ],
};

export const toraKaomojiWhyContent: KaomojiWhyProps = {
  heading: "虎顔文字の使い分け",
  subheading: "シンプルから装飾まで。場面に合わせて“雰囲気”を調整できます。",
  guideHeading: "シーン別ガイド",
  guides: [
    {
      title: "日常の返信",
      bullets: ["短めのシンプル系が自然", "文章に馴染みやすい"],
      recommend: "おすすめ: ฅ(`ω´)ฅ",
    },
    {
      title: "SNS投稿",
      bullets: ["装飾つきでテーマが伝わりやすい", "写真と合わせると映える"],
      recommend: "おすすめ: ᐢ(･◡･)ᐢ",
    },
    {
      title: "ネタ・ユニーク",
      bullets: ["ユニーク/AA系でインパクト", "使いすぎると読みにくいので注意"],
      recommend: "おすすめ: ﾄﾗ(・ω・)ﾄﾗ",
    },
    {
      title: "かわいく盛る",
      bullets: ["可愛いカテゴリを選ぶ", "一言に添えると収まりが良い"],
      recommend: "おすすめ: ᐢ(･◡･)ᐢ",
    },
  ],
  cultureHeading: "「虎」モチーフは一言で伝わる",
  cultureBody:
    "虎は見た目のイメージが強く、短い文章でもテーマが伝わりやすいモチーフです。顔文字を添えるだけで、投稿や返信の雰囲気を軽く・かわいく・面白く調整できます。",
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
      example: "例: 今日はいい日 ฅ(`ω´)ฅ",
    },
    {
      title: "投稿のテーマ",
      body: "写真や話題に合わせて選ぶと伝わりやすい。",
      example: "例: 虎かわいい (≡・x・≡)",
    },
  ],
};

export const toraKaomojiFaqContent: KaomojiFaqProps = {
  heading: "よくある質問（FAQ）",
  subheading: "虎顔文字、迷ったらここだけ見ればOK。",
  items: [
    {
      question: "虎顔文字はどうやってコピーできますか？",
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

export const toraKaomojiGroups: KaomojiCollectionGroup[] = [
  {
    title: "基本",
    items: [
      { kaomoji: "ฅ(`ω´)ฅ", tags: ["基本","人気","定番"] },
      { kaomoji: "(≡・x・≡)", tags: ["トラ","基本"] },
      { kaomoji: "≦^.≡.^≧", tags: ["トラ顔","定番"] },
      { kaomoji: "ฅ( ˙Ⱉ˙ )ฅ", tags: ["ガオー","基本"] },
      { kaomoji: "(≡・꒳・≡)", tags: ["トラ","かわいい"] },
      { kaomoji: "≡˙Ⱉ˙≡", tags: ["シンプル","顔のみ"] },
      { kaomoji: "(≡ﾟ∀ﾟ≡)", tags: ["トラ","元気"] },
      { kaomoji: "⌒(•̀ω•́)⌒", tags: ["トラ耳","強い"] },
      { kaomoji: "ฅ^•ﻌ•^ฅ", tags: ["爪","基本"] },
      { kaomoji: "⎛( ˙Ⱉ˙ )⎞", tags: ["トラ","基本"] },
      { kaomoji: "(≡ω≡)", tags: ["シンプル","基本"] },
      { kaomoji: "(‎‎‎˙Ⱉ˙)", tags: ["トラ顔","基本"] },
      { kaomoji: "🐯≡(´•ω•`)≡", tags: ["トラ","困る"] },
      { kaomoji: "ฅ( `･ω･´ )ฅ🐾", tags: ["爪","威嚇"] },
      { kaomoji: "🐯(≡・♔・≡)", tags: ["王冠","トラ"] },
      { kaomoji: "(=｀・∞・´=)", tags: ["ヒゲ","基本"] },
      { kaomoji: "ก₍⸍⸌̣ʷ̣̫⸍̣⸌₎ค", tags: ["トラ","特殊"] },
      { kaomoji: "ʢ•̀رق•́ʡ", tags: ["トラ","怒る"] },
      { kaomoji: "≧(=˙Ⱉ˙=)≦", tags: ["トラ","大きい"] },
      { kaomoji: "(ง •̀⻋•́)ว", tags: ["爪","威嚇"] },
    ],
  },
  {
    title: "かわいい",
    items: [
      { kaomoji: "ᐢ(･◡･)ᐢ", tags: ["かわいい","笑顔"] },
      { kaomoji: "⌒( ´•ω•` )⌒", tags: ["かわいい","トラ耳"] },
      { kaomoji: "ᓚᘏᗢ", tags: ["かわいい","シンプル"] },
      { kaomoji: "(っ-˘ω˘-)っ💤", tags: ["すやすや","眠い"] },
      { kaomoji: "🐯⸜( ´•ω•` )⸝", tags: ["バンザイ","かわいい"] },
      { kaomoji: "( *´꒳`* )", tags: ["照れ","かわいい"] },
      { kaomoji: "🐯⊂(・ω・)⊃🐯", tags: ["抱っこ","かわいい"] },
      { kaomoji: "(´∩ω∩｀)", tags: ["もぐもぐ","かわいい"] },
      { kaomoji: "ᓚᘏᗢ ♡", tags: ["ハート","かわいい"] },
      { kaomoji: "⊂( ´∩ω∩` )⊃", tags: ["もふもふ","包む"] },
      { kaomoji: "⌒( ´∩ω∩` )⌒", tags: ["幸せ","トラ耳"] },
      { kaomoji: "🐾⎛( ´•ω•` )⎞🐾", tags: ["おすわり","かわいい"] },
      { kaomoji: "💛⸜( ´ω` )⸝💛", tags: ["ほんわか","かわいい"] },
      { kaomoji: "( ´⸝⸝⸝⸝⸝⸝⸝`)", tags: ["照れ","もじもじ"] },
      { kaomoji: "(⌒⸝⸝⸝⸝⸝⌒)", tags: ["にっこり","かわいい"] },
      { kaomoji: "(o´ω`o)", tags: ["のんびり","かわいい"] },
      { kaomoji: "ఇ ◝‿◜ ఇ", tags: ["にこにこ","トラ耳"] },
      { kaomoji: "꒰⌯͒•ɷ•⌯͒꒱", tags: ["もふもふ","かわいい"] },
      { kaomoji: "꒰⌯͒•·̫•⌯͒꒱", tags: ["ふわふわ","かわいい"] },
      { kaomoji: "ᯫ̀৹᳐ ̫̌৹᳐́ᯫ", tags: ["トラ","独特"] },
    ],
  },
  {
    title: "テキスト系",
    items: [
      { kaomoji: "ﾄﾗ(・ω・)ﾄﾗ", tags: ["トラ","テキスト入り"] },
      { kaomoji: "ﾄﾗ(ง ´⊙ω⊙`)วﾄﾗ", tags: ["トラ","驚き"] },
      { kaomoji: "ﾄﾗ(=´∀`=)ﾄﾗ", tags: ["トラ","笑顔"] },
      { kaomoji: "ﾄﾗ(✪ω✪)ﾉ", tags: ["トラ","キラキラ"] },
      { kaomoji: "ﾄﾗ(∩´∀`∩)ﾄﾗ", tags: ["トラ","嬉しい"] },
      { kaomoji: "ﾄﾗ(＾●ω●＾)ﾉ", tags: ["トラ","挨拶"] },
      { kaomoji: "ﾄﾗ(⊙ω⊙)ﾄﾗ", tags: ["トラ","びっくり"] },
      { kaomoji: "ﾄﾗ(ง ´⸝⸝⸝⸝⸝⸝)ว", tags: ["トラ","照れ"] },
      { kaomoji: "ﾄﾗ( ´⸝⸝⸝⸝⸝⸝⸝⸝`)ﾄﾗ", tags: ["トラ","困った"] },
      { kaomoji: "(｢=・ω・=)｢ｶﾞｵｰ", tags: ["ガオー","トラ"] },
      { kaomoji: "(*ฅ•̀ω•́ฅ*)ｶﾞｵｰ", tags: ["ガオー","かわいい"] },
      { kaomoji: "(「・ω・)「ｶﾞｵｰ", tags: ["ガオー","定番"] },
      { kaomoji: "ฅ(•̀㉨•́ )ฅｶﾞｵｰ", tags: ["ガオー","爪"] },
      { kaomoji: "( •̀.̫•́) ｶﾞｵｰ！", tags: ["ガオー","強い"] },
      { kaomoji: "(ง°益°)ง ｶﾞｵｰ🔥", tags: ["ガオー","怒る"] },
      { kaomoji: "(г･ω･)г ｶﾞｵｶﾞｵ💕", tags: ["ガオガオ","かわいい"] },
      { kaomoji: "ﾄﾗ(ง₮ ॑꒳ ॑)วﾄﾗ", tags: ["トラ","独特"] },
      { kaomoji: "🐯虎(≡・ω・≡)虎🐯", tags: ["虎","漢字入り"] },
      { kaomoji: "🐅虎ฅ( ˙Ⱉ˙ )ฅ虎🐅", tags: ["虎","ガオー"] },
      { kaomoji: "とら(≡^・ω・^≡)とら", tags: ["とら","ひらがな"] },
    ],
  },
  {
    title: "絵文字付き",
    items: [
      { kaomoji: "🐯( '-' 🐯 )ﾄﾗｯﾁｬﾝ", tags: ["絵文字","トラちゃん"] },
      { kaomoji: "（‪‪⋆🐯•᎑•‪‪🐯⋆）", tags: ["絵文字","キラキラ"] },
      { kaomoji: "🐯( ´•ω•` )🐯", tags: ["絵文字","かわいい"] },
      { kaomoji: "🐅( '-'🐅)ﾄﾗﾁｬﾝ", tags: ["絵文字","虎"] },
      { kaomoji: "🐯≡˙Ⱉ˙≡🐯", tags: ["絵文字","シンプル"] },
      { kaomoji: "🐯(≡・ω・≡)🐯", tags: ["絵文字","定番"] },
      { kaomoji: "⋆🐯( ˙꒳˙ )🐯⋆", tags: ["キラキラ","虎"] },
      { kaomoji: "🐯ฅ(`ω´)ฅ🐯", tags: ["絵文字","ガオー"] },
      { kaomoji: "🐾(≡・x・≡)🐾", tags: ["肉球","トラ"] },
      { kaomoji: "🐯ﾄﾗ(・ω・)ﾄﾗ🐯", tags: ["絵文字","トラ"] },
      { kaomoji: "🐅(≡ﾟ∀ﾟ≡)🐅", tags: ["虎","元気"] },
      { kaomoji: "✨🐯(≡・꒳・≡)🐯✨", tags: ["キラキラ","トラ"] },
      { kaomoji: "🐯( •̀ω•́ )🐯ｶﾞｵｰ", tags: ["ガオー","絵文字"] },
      { kaomoji: "💛🐯(≡ω≡)🐯💛", tags: ["ハート","トラ"] },
      { kaomoji: "🐯⌒(•̀ω•́)⌒🐯", tags: ["トラ耳","絵文字"] },
      { kaomoji: "🐾ฅ^•ﻌ•^ฅ🐾", tags: ["肉球","爪"] },
      { kaomoji: "🐯ᓚᘏᗢ🐯", tags: ["絵文字","シンプル"] },
      { kaomoji: "🐯(=´∀`=)🐯", tags: ["笑顔","絵文字"] },
      { kaomoji: "🐅ﾄﾗ(✪ω✪)ﾉ🐅", tags: ["キラキラ","虎"] },
      { kaomoji: "🐯ᐢ(･◡･)ᐢ🐯", tags: ["笑顔","絵文字"] },
    ],
  },
  {
    title: "デコ",
    items: [
      { kaomoji: "⋆͛🐯⋆͛(≡・ω・≡)⋆͛🐯⋆͛", tags: ["デコ","キラキラ"] },
      { kaomoji: ".+*:ﾟ+ฅ(`ω´)ﾅﾃﾞﾃﾞ+:*+.", tags: ["デコ","なでなで"] },
      { kaomoji: ".*:ﾟ(≡・x・≡)ﾟ:*.", tags: ["デコ","キラキラ"] },
      { kaomoji: "✧(≡・꒳・≡)✧", tags: ["星","キラキラ"] },
      { kaomoji: "♔ฅ(`ω´)ฅ♔", tags: ["王冠","百獣の王"] },
      { kaomoji: "~(≡・ω・≡)~", tags: ["しっぽ","トラ"] },
      { kaomoji: "☆ﾄﾗ(・ω・)ﾄﾗ☆", tags: ["星","デコ"] },
      { kaomoji: "🎵(≡・꒳・≡)🎵", tags: ["音符","楽しい"] },
      { kaomoji: "🌸(≡・x・≡)🌸", tags: ["花","デコ"] },
      { kaomoji: "◆≡˙Ⱉ˙≡◆", tags: ["ダイヤ","デコ"] },
      { kaomoji: "░▒▓(≡ﾟ∀ﾟ≡)▓▒░", tags: ["縞模様","トラ柄"] },
      { kaomoji: "┃≡˙Ⱉ˙≡┃", tags: ["枠","デコ"] },
      { kaomoji: "♕⌒(•̀ω•́)⌒♕", tags: ["王冠","かっこいい"] },
      { kaomoji: "★ฅ( ˙Ⱉ˙ )ฅ★", tags: ["星","ガオー"] },
      { kaomoji: "≋≋(≡・ω・≡)≋≋", tags: ["波","デコ"] },
      { kaomoji: "╲(≡・꒳・≡)╱", tags: ["万歳","デコ"] },
      { kaomoji: "⫸(≡ﾟ∀ﾟ≡)⫷", tags: ["矢印","デコ"] },
      { kaomoji: "▼・ᴥ・▼(≡・x・≡)", tags: ["犬と虎","デコ"] },
      { kaomoji: "❄🐯ฅ^•ﻌ•^ฅ🐯❄", tags: ["雪結晶","冬トラ"] },
      { kaomoji: "⋆⸜(≡・ω・≡)⸝⋆", tags: ["キラキラ","万歳"] },
    ],
  },
];

