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
  title: "ひよこ顔文字一覧（Kaomoji）｜基本・かわいい・デコもコピペ",
  description:
    "ひよこ顔文字（Kaomoji）をまとめて掲載。基本・かわいい・デコ・絵文字付き・テキスト入りまで。検索＆ワンクリックでコピーして、LINE/X（Twitter）/Instagram/Discordにそのままコピペ。登録不要で無料。スマホでもOK。",
  ...withCanonical("/hiyoko-kaomoji"),
};

export const hiyokoKaomojiHeroContent: KaomojiHeroProps = {
  title: "ひよこ顔文字一覧",
  kaomoji: "(・Θ・)  (•ө•)♡",
  subtitle: "基本・かわいいまで【コピペ簡単】",
  description:
    "「ひよこっぽさ」が出る顔文字を集めました。シンプルから可愛い系、装飾つき、ユニーク系まで幅広く掲載。気に入った顔文字はワンクリックでコピーして、そのまま貼り付けできます。",
  primaryCta: { href: "#list", label: "顔文字を探す" },
  secondaryCta: { href: "/", label: "ホームへ" },
};

export const hiyokoKaomojiWhatContent: KaomojiWhatProps = {
  heading: "ひよこ顔文字（Kaomoji）とは？",
  intro:
    "ひよこ顔文字は、記号や絵文字、キャラっぽいパーツを組み合わせて「ひよこ」の雰囲気を表現するKaomojiです。短い一言でもテーマが伝わりやすく、SNSやチャットのリアクションに便利です。",
  usageHeading: "使えるシーン",
  usageItems: [
    "ひよこの話題に",
    "挨拶や日常の返信に",
    "SNS投稿のテーマに",
    "かわいく盛りたいときに",
    "ネタやユニークな一言に",
  ],
  typesHeading: "ひよこ顔文字の種類",
  types: [
    {
      title: "基本",
      description: "このカテゴリの定番をまとめてチェック。",
      example: "例: (・Θ・)  (*°θ°*)",
    },
    {
      title: "かわいい",
      description: "このカテゴリの定番をまとめてチェック。",
      example: "例: (•ө•)♡  (｡･ө･｡)",
    },
    {
      title: "デコ",
      description: "このカテゴリの定番をまとめてチェック。",
      example: "例: ⋋(◍'Θ'◍)⋌  ∧( 'Θ' )∧",
    },
    {
      title: "絵文字付き",
      description: "このカテゴリの定番をまとめてチェック。",
      example: "例: 🐤(・Θ・)ﾋﾟﾖ  🐥(•ө•)♪",
    },
    {
      title: "テキスト入り",
      description: "このカテゴリの定番をまとめてチェック。",
      example: "例: ﾋﾟﾖ(・Θ・)ﾋﾟﾖ  (*・Θ・*)ﾋﾟﾖｯ",
    },
  ],
  featuresHeading: "ひよこらしさが出るポイント",
  features: [
    { symbol: "(・Θ・)", title: "定番", description: "まずは短くて使いやすい定番から。" },
    { symbol: "♡", title: "かわいい", description: "かわいい系のカテゴリを選ぶと柔らかい印象に。" },
    { symbol: "✨", title: "装飾", description: "絵文字や装飾つきは投稿で映えます。" },
    { symbol: "ASCII", title: "AA/アート", description: "大きめの表現はネタとして強いです。" },
  ],
};

export const hiyokoKaomojiWhyContent: KaomojiWhyProps = {
  heading: "ひよこ顔文字の使い分け",
  subheading: "シンプルから装飾まで。場面に合わせて“雰囲気”を調整できます。",
  guideHeading: "シーン別ガイド",
  guides: [
    {
      title: "日常の返信",
      bullets: ["短めのシンプル系が自然", "文章に馴染みやすい"],
      recommend: "おすすめ: (・Θ・)",
    },
    {
      title: "SNS投稿",
      bullets: ["装飾つきでテーマが伝わりやすい", "写真と合わせると映える"],
      recommend: "おすすめ: (•ө•)♡",
    },
    {
      title: "ネタ・ユニーク",
      bullets: ["ユニーク/AA系でインパクト", "使いすぎると読みにくいので注意"],
      recommend: "おすすめ: ⋋(◍'Θ'◍)⋌",
    },
    {
      title: "かわいく盛る",
      bullets: ["可愛いカテゴリを選ぶ", "一言に添えると収まりが良い"],
      recommend: "おすすめ: (•ө•)♡",
    },
  ],
  cultureHeading: "「ひよこ」モチーフは一言で伝わる",
  cultureBody:
    "ひよこは見た目のイメージが強く、短い文章でもテーマが伝わりやすいモチーフです。顔文字を添えるだけで、投稿や返信の雰囲気を軽く・かわいく・面白く調整できます。",
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
      example: "例: 今日はいい日 (・Θ・)",
    },
    {
      title: "投稿のテーマ",
      body: "写真や話題に合わせて選ぶと伝わりやすい。",
      example: "例: ひよこかわいい (•ө•)♡",
    },
  ],
};

export const hiyokoKaomojiFaqContent: KaomojiFaqProps = {
  heading: "よくある質問（FAQ）",
  subheading: "ひよこ顔文字、迷ったらここだけ見ればOK。",
  items: [
    {
      question: "ひよこ顔文字はどうやってコピーできますか？",
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

export const hiyokoKaomojiGroups: KaomojiCollectionGroup[] = [
  {
    title: "基本",
    items: [
      { kaomoji: "(・Θ・)", tags: ["基本","ひよこ"] },
      { kaomoji: "(*°θ°*)", tags: ["基本","ひよこ"] },
      { kaomoji: "(•ө•)", tags: ["基本","ひよこ"] },
      { kaomoji: "(・θ・)", tags: ["基本","くちばし"] },
      { kaomoji: "(`・Θ・´)", tags: ["基本","元気"] },
      { kaomoji: "(￣Θ￣)", tags: ["基本","のんびり"] },
      { kaomoji: "(・⊝・)", tags: ["基本","くちばし"] },
      { kaomoji: "(⊙ө⊙)", tags: ["基本","驚き"] },
      { kaomoji: "(◉Θ◉)", tags: ["基本","目が大きい"] },
      { kaomoji: "(`Θ´)", tags: ["基本","怒り"] },
      { kaomoji: "(￣･Θ･￣)", tags: ["基本","ひよこ"] },
      { kaomoji: "( ＾Θ＾)", tags: ["基本","笑顔"] },
      { kaomoji: "(＋Θ＋)", tags: ["基本","目を閉じる"] },
      { kaomoji: "(`θ`)", tags: ["基本","シンプル"] },
      { kaomoji: "(・ё・)", tags: ["基本","くちばし"] },
      { kaomoji: "( ˘⊖˘)", tags: ["基本","眠い"] },
      { kaomoji: "(・◇・)", tags: ["基本","くちばし"] },
      { kaomoji: "( •᷄Θ•᷅ )", tags: ["基本","困る"] },
      { kaomoji: "(◎ｖ◎)", tags: ["基本","ひよこ"] },
      { kaomoji: "( ˋ Θ ´ )", tags: ["基本","怒り"] },
    ],
  },
  {
    title: "かわいい",
    items: [
      { kaomoji: "(•ө•)♡", tags: ["かわいい","ハート"] },
      { kaomoji: "(｡･ө･｡)", tags: ["かわいい","ひよこ"] },
      { kaomoji: "(*・Θ・*)", tags: ["かわいい","ほっぺ"] },
      { kaomoji: "(o´Θ`o)", tags: ["かわいい","のんびり"] },
      { kaomoji: "(〃・Θ・〃)", tags: ["かわいい","照れ"] },
      { kaomoji: "(•͈◇•͈⑅)", tags: ["かわいい","キラキラ"] },
      { kaomoji: "( ó ✧ò)", tags: ["かわいい","キラキラ"] },
      { kaomoji: "( ･✧･)", tags: ["かわいい","キラキラ"] },
      { kaomoji: "(˘・ө・˘)", tags: ["かわいい","のんびり"] },
      { kaomoji: "( óθò)", tags: ["かわいい","ひよこ"] },
      { kaomoji: "( óёò)", tags: ["かわいい","ひよこ"] },
      { kaomoji: "(´-θ-`)", tags: ["かわいい","眠い"] },
      { kaomoji: "(*•ө•*)", tags: ["かわいい","ほっぺ"] },
      { kaomoji: "( ˙◊˙ )", tags: ["かわいい","驚き"] },
      { kaomoji: "(;・Θ・;)", tags: ["かわいい","困る"] },
      { kaomoji: "( ･˂̵˃̶･)", tags: ["かわいい","くちばし"] },
      { kaomoji: "( ó ˂̵˃̶ò)", tags: ["かわいい","くちばし"] },
      { kaomoji: "(；Θ；)", tags: ["かわいい","泣く"] },
      { kaomoji: "(´◉◞⊖◟◉`)", tags: ["かわいい","大きい目"] },
      { kaomoji: "(-8-)", tags: ["かわいい","眠い"] },
    ],
  },
  {
    title: "デコ",
    items: [
      { kaomoji: "⋋(◍'Θ'◍)⋌", tags: ["デコ","翼"] },
      { kaomoji: "∧( 'Θ' )∧", tags: ["デコ","翼"] },
      { kaomoji: "⋛⋋( 'Θ')⋌⋚", tags: ["デコ","翼"] },
      { kaomoji: "ϵ( 'Θ' )϶", tags: ["デコ","翼"] },
      { kaomoji: "є(･Θ･｡)э", tags: ["デコ","翼"] },
      { kaomoji: "＼( ･Θ･ )／", tags: ["デコ","バンザイ"] },
      { kaomoji: "⋋( ◕ ∧ ◕ )⋌", tags: ["デコ","翼"] },
      { kaomoji: "♩є(･◇･｡)э", tags: ["デコ","音符"] },
      { kaomoji: "⋋('Θ'◍)⋌ :.。✯*", tags: ["デコ","キラキラ"] },
      { kaomoji: "♪( 'Θ')ﾉ~☆", tags: ["デコ","音符"] },
      { kaomoji: "⊹⋛⋋( ՞ਊ ՞)⋌⋚⊹", tags: ["デコ","特殊"] },
      { kaomoji: "♩є(･Θ･｡)э", tags: ["デコ","音符"] },
      { kaomoji: "＼( ˋ Θ ´ )／", tags: ["デコ","バンザイ"] },
      { kaomoji: "ξ(｡◕ˇ◊ˇ◕｡)ξ", tags: ["デコ","特殊"] },
      { kaomoji: "ㄟ( ･◇･ )ㄏ", tags: ["デコ","翼"] },
      { kaomoji: "ㄟ( ･ө･ )ㄏ", tags: ["デコ","翼"] },
      { kaomoji: "ヾ(ﾟΘﾟ )ヾ", tags: ["デコ","動き"] },
      { kaomoji: "⋋║ ՞ ▽ ՞ ║⋌", tags: ["デコ","特殊"] },
      { kaomoji: "⊹⋛⋋(◐⊝◑)⋌⋚⊹", tags: ["デコ","特殊"] },
      { kaomoji: "乁[ᓀ˵▾˵ᓂ]ㄏ", tags: ["デコ","特殊"] },
    ],
  },
  {
    title: "絵文字付き",
    items: [
      { kaomoji: "🐤(・Θ・)ﾋﾟﾖ", tags: ["絵文字","ひよこ"] },
      { kaomoji: "🐥(•ө•)♪", tags: ["絵文字","ひよこ"] },
      { kaomoji: "(・Θ・)🐣", tags: ["絵文字","卵"] },
      { kaomoji: "🐤(*°θ°*)🐤", tags: ["絵文字","ひよこ"] },
      { kaomoji: "🌸(・Θ・)🌸", tags: ["絵文字","春"] },
      { kaomoji: "🐣(`・Θ・´)🐣", tags: ["絵文字","卵"] },
      { kaomoji: "(•ө•)🌻", tags: ["絵文字","ひまわり"] },
      { kaomoji: "✨(・Θ・)✨", tags: ["絵文字","キラキラ"] },
      { kaomoji: "🐤(｡･ө･｡)🐤", tags: ["絵文字","かわいい"] },
      { kaomoji: "💛(・Θ・)💛", tags: ["絵文字","ハート"] },
      { kaomoji: "🐥є(･Θ･｡)э🐥", tags: ["絵文字","翼"] },
      { kaomoji: "(・Θ・)🎵", tags: ["絵文字","音符"] },
      { kaomoji: "🌼(•ө•)🌼", tags: ["絵文字","花"] },
      { kaomoji: "🐤(´-θ-`)zzz", tags: ["絵文字","眠い"] },
      { kaomoji: "🥚(•ө•)🐣", tags: ["絵文字","卵"] },
      { kaomoji: "(・Θ・)💕", tags: ["絵文字","ハート"] },
      { kaomoji: "🐤(◎ｖ◎)🐤", tags: ["絵文字","ひよこ"] },
      { kaomoji: "🐥(`θ`)🐥", tags: ["絵文字","ひよこ"] },
      { kaomoji: "☀️(・Θ・)☀️", tags: ["絵文字","太陽"] },
      { kaomoji: "(•ө•)🍀", tags: ["絵文字","四つ葉"] },
    ],
  },
  {
    title: "テキスト入り",
    items: [
      { kaomoji: "ﾋﾟﾖ(・Θ・)ﾋﾟﾖ", tags: ["テキスト","ピヨ"] },
      { kaomoji: "(*・Θ・*)ﾋﾟﾖｯ", tags: ["テキスト","ピヨ"] },
      { kaomoji: "ヾ(・◇・)ﾉ ﾋﾟﾖﾋﾟﾖ", tags: ["テキスト","ピヨピヨ"] },
      { kaomoji: "m(・Θ・)m ﾖﾛｼｸﾋﾟﾖ♪", tags: ["テキスト","よろしく"] },
      { kaomoji: "ﾔﾚﾔﾚ ┐(・Θ・)┌ ﾋﾟﾖｯﾀﾈ", tags: ["テキスト","やれやれ"] },
      { kaomoji: "(・Θ・)ﾉ\"\"ﾏﾀﾈｰ!!", tags: ["テキスト","またね"] },
      { kaomoji: "ｵﾒﾃﾞﾄ(･Θ･)ﾋﾟﾖﾋﾟﾖ♪", tags: ["テキスト","おめでとう"] },
      { kaomoji: "ｐ(・Θ・)ｑ ﾌｧｲﾄｰ!", tags: ["テキスト","ファイト"] },
      { kaomoji: "(・Θ・)ゝ\"了解ﾋﾟﾖｯ♪", tags: ["テキスト","了解"] },
      { kaomoji: "(σ*・Θ・)σネッ!!", tags: ["テキスト","ネッ"] },
      { kaomoji: "\"φ(・Θ・)゛ ﾒﾓﾒﾓﾋﾟﾖﾋﾟﾖ", tags: ["テキスト","メモ"] },
      { kaomoji: "(・Θ・)人(・Θ・)ﾅｶﾏ♪", tags: ["テキスト","仲間"] },
      { kaomoji: "(･Θ･;)ｱｾｱｾ…", tags: ["テキスト","あせあせ"] },
      { kaomoji: "( ・ Θ ・ )ｼﾞｨｰ", tags: ["テキスト","ジー"] },
      { kaomoji: "ﾀﾞｰｲ＼(・Θ・)／ｽｷｯ★", tags: ["テキスト","好き"] },
      { kaomoji: "ヾ(・Θ・)ﾉ☆ﾟ'･:*☆ｵﾒﾃﾞﾄｫ♪", tags: ["テキスト","おめでとう"] },
      { kaomoji: "(/・Θ・＼) ﾊｽﾞｶｼｲ♪", tags: ["テキスト","恥ずかしい"] },
      { kaomoji: "柱|Θ・｡)･･･ｼｮﾎﾞｰﾝ", tags: ["テキスト","しょぼーん"] },
      { kaomoji: "ε＝(ﾉ・Θ・)ﾉﾀﾀﾞｲﾏ", tags: ["テキスト","ただいま"] },
      { kaomoji: "(｡・Θ・)(・Θ・｡)ﾈｰ", tags: ["テキスト","ねー"] },
    ],
  },
];

