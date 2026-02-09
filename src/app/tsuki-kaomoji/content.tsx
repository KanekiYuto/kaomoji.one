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
  title: "月顔文字一覧（Kaomoji）｜基本・かわいい・シンプルもコピペ",
  description:
    "月顔文字（Kaomoji）をまとめて掲載。基本・かわいい・シンプル・デコ・絵文字付きまで。検索＆ワンクリックでコピーして、LINE/X（Twitter）/Instagram/Discordにそのままコピペ。登録不要で無料。スマホでもOK。",
  ...withCanonical("/tsuki-kaomoji"),
};

export const tsukiKaomojiHeroContent: KaomojiHeroProps = {
  title: "月顔文字一覧",
  kaomoji: "(☾_☾)  (っ´ω｀)っ🌕",
  subtitle: "基本・かわいいまで【コピペ簡単】",
  description:
    "「月っぽさ」が出る顔文字を集めました。シンプルから可愛い系、装飾つき、ユニーク系まで幅広く掲載。気に入った顔文字はワンクリックでコピーして、そのまま貼り付けできます。",
  primaryCta: { href: "#list", label: "顔文字を探す" },
  secondaryCta: { href: "/", label: "ホームへ" },
};

export const tsukiKaomojiWhatContent: KaomojiWhatProps = {
  heading: "月顔文字（Kaomoji）とは？",
  intro:
    "月顔文字は、記号や絵文字、キャラっぽいパーツを組み合わせて「月」の雰囲気を表現するKaomojiです。短い一言でもテーマが伝わりやすく、SNSやチャットのリアクションに便利です。",
  usageHeading: "使えるシーン",
  usageItems: [
    "月の話題に",
    "挨拶や日常の返信に",
    "SNS投稿のテーマに",
    "かわいく盛りたいときに",
    "ネタやユニークな一言に",
  ],
  typesHeading: "月顔文字の種類",
  types: [
    {
      title: "基本",
      description: "このカテゴリの定番をまとめてチェック。",
      example: "例: (☾_☾)  (☽_☽)",
    },
    {
      title: "かわいい",
      description: "このカテゴリの定番をまとめてチェック。",
      example: "例: (っ´ω｀)っ🌕  (∩˃o˂∩)♡ お月見",
    },
    {
      title: "シンプル",
      description: "このカテゴリの定番をまとめてチェック。",
      example: "例: ☪︎  ︎︎☾。",
    },
    {
      title: "デコ",
      description: "このカテゴリの定番をまとめてチェック。",
      example: "例: ☽ ⋆°・:.。.☆𓇼𓈒𓐍  ⋆☾·̩͙꙳",
    },
    {
      title: "絵文字付き",
      description: "このカテゴリの定番をまとめてチェック。",
      example: "例: 🌙✨  🌕🐇",
    },
  ],
  featuresHeading: "月らしさが出るポイント",
  features: [
    { symbol: "(☾_☾)", title: "定番", description: "まずは短くて使いやすい定番から。" },
    { symbol: "♡", title: "かわいい", description: "かわいい系のカテゴリを選ぶと柔らかい印象に。" },
    { symbol: "✨", title: "装飾", description: "絵文字や装飾つきは投稿で映えます。" },
    { symbol: "ASCII", title: "AA/アート", description: "大きめの表現はネタとして強いです。" },
  ],
};

export const tsukiKaomojiWhyContent: KaomojiWhyProps = {
  heading: "月顔文字の使い分け",
  subheading: "シンプルから装飾まで。場面に合わせて“雰囲気”を調整できます。",
  guideHeading: "シーン別ガイド",
  guides: [
    {
      title: "日常の返信",
      bullets: ["短めのシンプル系が自然", "文章に馴染みやすい"],
      recommend: "おすすめ: (☾_☾)",
    },
    {
      title: "SNS投稿",
      bullets: ["装飾つきでテーマが伝わりやすい", "写真と合わせると映える"],
      recommend: "おすすめ: (っ´ω｀)っ🌕",
    },
    {
      title: "ネタ・ユニーク",
      bullets: ["ユニーク/AA系でインパクト", "使いすぎると読みにくいので注意"],
      recommend: "おすすめ: ☪︎",
    },
    {
      title: "かわいく盛る",
      bullets: ["可愛いカテゴリを選ぶ", "一言に添えると収まりが良い"],
      recommend: "おすすめ: (っ´ω｀)っ🌕",
    },
  ],
  cultureHeading: "「月」モチーフは一言で伝わる",
  cultureBody:
    "月は見た目のイメージが強く、短い文章でもテーマが伝わりやすいモチーフです。顔文字を添えるだけで、投稿や返信の雰囲気を軽く・かわいく・面白く調整できます。",
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
      example: "例: 今日はいい日 (☾_☾)",
    },
    {
      title: "投稿のテーマ",
      body: "写真や話題に合わせて選ぶと伝わりやすい。",
      example: "例: 月かわいい (っ´ω｀)っ🌕",
    },
  ],
};

export const tsukiKaomojiFaqContent: KaomojiFaqProps = {
  heading: "よくある質問（FAQ）",
  subheading: "月顔文字、迷ったらここだけ見ればOK。",
  items: [
    {
      question: "月顔文字はどうやってコピーできますか？",
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

export const tsukiKaomojiGroups: KaomojiCollectionGroup[] = [
  {
    title: "基本",
    items: [
      { kaomoji: "(☾_☾)", tags: ["基本","月"] },
      { kaomoji: "(☽_☽)", tags: ["基本","月"] },
      { kaomoji: "(☾▽☾)", tags: ["基本","笑顔"] },
      { kaomoji: "(☽▽☽)", tags: ["基本","笑顔"] },
      { kaomoji: "(*☾ω☾*)", tags: ["基本","嬉しい"] },
      { kaomoji: "(*☽ω☽*)", tags: ["基本","嬉しい"] },
      { kaomoji: "(´☽ω☽`)", tags: ["基本","穏やか"] },
      { kaomoji: "(´☾ω☾`)", tags: ["基本","穏やか"] },
      { kaomoji: "(*☾▽☾*)", tags: ["基本","笑顔"] },
      { kaomoji: "(*☽▽☽*)", tags: ["基本","笑顔"] },
      { kaomoji: "(๑☽ꇴ☽๑)", tags: ["基本","にっこり"] },
      { kaomoji: "(๑☾ꇴ☾๑)", tags: ["基本","にっこり"] },
      { kaomoji: "☽★ (。. ◦)", tags: ["月","星"] },
      { kaomoji: "☾★ (。. ◦)", tags: ["月","星"] },
      { kaomoji: "☾", tags: ["シンプル","月"] },
      { kaomoji: "☽", tags: ["シンプル","月"] },
      { kaomoji: "(´･ω･`) お月さま", tags: ["お月見","基本"] },
      { kaomoji: "(*´-`)｡oO(月きれい)", tags: ["月","きれい"] },
      { kaomoji: "( ˘ω˘ )月がきれい", tags: ["穏やか","月"] },
      { kaomoji: "(・∀・)月の時間♪", tags: ["月","楽しい"] },
    ],
  },
  {
    title: "かわいい",
    items: [
      { kaomoji: "(っ´ω｀)っ🌕", tags: ["可愛い","満月"] },
      { kaomoji: "(∩˃o˂∩)♡ お月見", tags: ["可愛い","お月見"] },
      { kaomoji: "(人*´∀｀)｡*ﾟ+ 月♪", tags: ["可愛い","月"] },
      { kaomoji: "(●´ω｀●)お月見♪", tags: ["可愛い","お月見"] },
      { kaomoji: "(　˘ ³˘)ノ° 満月♡", tags: ["可愛い","満月"] },
      { kaomoji: "(〃´ω｀〃) 今夜は月♡", tags: ["可愛い","夜"] },
      { kaomoji: "月がまんまるだよ(∩´∀｀)∩🌕", tags: ["可愛い","満月"] },
      { kaomoji: "(*≧▽≦)つ○ お月見", tags: ["可愛い","お月見"] },
      { kaomoji: "(o´∀｀o)お月さま", tags: ["可愛い","月"] },
      { kaomoji: "(｡･ω･｡)ﾉ♡ お月見", tags: ["可愛い","お月見"] },
      { kaomoji: "(*´∀｀*)ﾉ｡+ﾟ *｡ 月♪", tags: ["可愛い","月"] },
      { kaomoji: "(〃^∇^)o☆月～", tags: ["可愛い","月"] },
      { kaomoji: "(●´∀｀●) 月日和♪", tags: ["可愛い","穏やか"] },
      { kaomoji: "(´｡•ㅅ•｡`)月ロマンチック", tags: ["可愛い","ロマン"] },
      { kaomoji: "(っ＾▿＾)🌙", tags: ["可愛い","三日月"] },
      { kaomoji: "(=^･ω･^)ﾉ🌕", tags: ["猫","満月"] },
      { kaomoji: "(｡•̀ω-)b 月見OK☆", tags: ["可愛い","OK"] },
      { kaomoji: "お月見日和(*´∇｀*)♪", tags: ["可愛い","お月見"] },
      { kaomoji: "(っ´ω`c)○ 月見", tags: ["可愛い","月見"] },
      { kaomoji: "(*´ω｀*) 月きれい", tags: ["可愛い","きれい"] },
    ],
  },
  {
    title: "シンプル",
    items: [
      { kaomoji: "☪︎", tags: ["シンプル","月"] },
      { kaomoji: "︎︎☾。", tags: ["シンプル","月"] },
      { kaomoji: "⋆☽", tags: ["シンプル","星"] },
      { kaomoji: "☽⋰", tags: ["シンプル","月"] },
      { kaomoji: "☾ ໋", tags: ["シンプル","月"] },
      { kaomoji: "☪︎⋆", tags: ["シンプル","月"] },
      { kaomoji: ". ໋☪︎", tags: ["シンプル","月"] },
      { kaomoji: "☾𓂃⟡.·", tags: ["シンプル","月"] },
      { kaomoji: "⋆.☽:ﾟ", tags: ["シンプル","月"] },
      { kaomoji: "☽･:*", tags: ["シンプル","月"] },
      { kaomoji: "* ☾.*·̩͙", tags: ["シンプル","月"] },
      { kaomoji: "⋆⸜☾⸝‍⋆", tags: ["シンプル","月"] },
      { kaomoji: "☾𓈒𓂂𓏸", tags: ["シンプル","月"] },
      { kaomoji: "⋆☽·̩͙‪", tags: ["シンプル","月"] },
      { kaomoji: "☪︎｡꙳", tags: ["シンプル","月"] },
      { kaomoji: "☾⋆｡°✩", tags: ["月","星"] },
      { kaomoji: "☾ ໋꙳", tags: ["シンプル","月"] },
      { kaomoji: "✧☾✧", tags: ["シンプル","月"] },
      { kaomoji: "🌙·̩͙", tags: ["シンプル","月"] },
      { kaomoji: "🌙♩.•", tags: ["シンプル","月"] },
    ],
  },
  {
    title: "デコ",
    items: [
      { kaomoji: "☽ ⋆°・:.。.☆𓇼𓈒𓐍", tags: ["装飾","月"] },
      { kaomoji: "⋆☾·̩͙꙳", tags: ["装飾","月"] },
      { kaomoji: "☪︎·̩͙‪⋆͛", tags: ["装飾","月"] },
      { kaomoji: "☾✩‪𓂃 𓈒𓏸", tags: ["装飾","月"] },
      { kaomoji: "‪‪⋆ . * ☽ *", tags: ["装飾","月"] },
      { kaomoji: "‪⋆ . * ☽ * . ⋆‬", tags: ["装飾","月"] },
      { kaomoji: "⋆⸜☾‎𖤐⡱", tags: ["装飾","月"] },
      { kaomoji: "☾⃝໋᷂꙳⟡.·⑅", tags: ["装飾","月"] },
      { kaomoji: "⋆꙳☪·̩͙𖤐´-", tags: ["装飾","月"] },
      { kaomoji: "🌙୭*࿐", tags: ["装飾","月"] },
      { kaomoji: "*.꒰ঌ ☽꙳⋆ ໒꒱.*", tags: ["装飾","月"] },
      { kaomoji: "̗̀☾⋆⌒♡｡．", tags: ["装飾","ハート"] },
      { kaomoji: "☪︎。:*♡·̩͙⋆", tags: ["装飾","ハート"] },
      { kaomoji: "‪ꔛ‬☾⋆·̩͙⑅", tags: ["装飾","月"] },
      { kaomoji: "☾‪𓂃 𓈒𓏸", tags: ["装飾","月"] },
      { kaomoji: "🌙𓂃𓈒𓏸︎︎︎︎", tags: ["装飾","月"] },
      { kaomoji: "☾☆。──────☆。☾", tags: ["装飾","区切り"] },
      { kaomoji: "⋆☾·̩͙", tags: ["装飾","月"] },
      { kaomoji: "🌙‎𖤐⡱", tags: ["装飾","月"] },
      { kaomoji: "-𖤐🌝𖤐´-", tags: ["装飾","満月"] },
    ],
  },
  {
    title: "絵文字付き",
    items: [
      { kaomoji: "🌙✨", tags: ["絵文字","月"] },
      { kaomoji: "🌕🐇", tags: ["絵文字","うさぎ"] },
      { kaomoji: "🐇🌙", tags: ["絵文字","うさぎ"] },
      { kaomoji: "🌙🎑", tags: ["絵文字","お月見"] },
      { kaomoji: "🌙💫", tags: ["絵文字","キラキラ"] },
      { kaomoji: "🌝🎀", tags: ["絵文字","リボン"] },
      { kaomoji: "🌙🌟", tags: ["絵文字","星"] },
      { kaomoji: "🐈‍⬛🌙", tags: ["絵文字","猫"] },
      { kaomoji: "🌕🌖🌗🌘🌑🌒🌓🌔🌕", tags: ["絵文字","月の満ち欠け"] },
      { kaomoji: "🌙💛", tags: ["絵文字","ハート"] },
      { kaomoji: "🌛🤍", tags: ["絵文字","ハート"] },
      { kaomoji: "🌚🖤", tags: ["絵文字","新月"] },
      { kaomoji: "🌙🎀🐈‍⬛", tags: ["絵文字","猫"] },
      { kaomoji: "🌙💫🔭", tags: ["絵文字","望遠鏡"] },
      { kaomoji: "🌕🥀", tags: ["絵文字","バラ"] },
      { kaomoji: "🌙💓", tags: ["絵文字","ハート"] },
      { kaomoji: "🌛🛌", tags: ["絵文字","おやすみ"] },
      { kaomoji: "🌙🩵", tags: ["絵文字","ハート"] },
      { kaomoji: "🌙👑", tags: ["絵文字","王冠"] },
      { kaomoji: "🌙💫🌟", tags: ["絵文字","キラキラ"] },
    ],
  },
];

