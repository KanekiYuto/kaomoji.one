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
  title: "カービィ顔文字一覧（Kaomoji）｜基本的なカービィ・ポヨポヨ系・アクション系もコピペ",
  description:
    "カービィ顔文字（Kaomoji）をまとめて掲載。基本的なカービィ・ポヨポヨ系・アクション系・感情表現系・特殊・ASCII Artまで。検索＆ワンクリックでコピーして、LINE/X（Twitter）/Instagram/Discordにそのままコピペ。登録不要で無料。スマホでもOK。",
  ...withCanonical("/kirby-kaomoji"),
};

export const kirbyKaomojiHeroContent: KaomojiHeroProps = {
  title: "カービィ顔文字一覧",
  kaomoji: "( ⊃'-'⊂ )  (っ'o'c)",
  subtitle: "基本的なカービィ・ポヨポヨ系まで【コピペ簡単】",
  description:
    "「カービィっぽさ」が出る顔文字を集めました。シンプルから可愛い系、装飾つき、ユニーク系まで幅広く掲載。気に入った顔文字はワンクリックでコピーして、そのまま貼り付けできます。",
  primaryCta: { href: "#list", label: "顔文字を探す" },
  secondaryCta: { href: "/", label: "ホームへ" },
};

export const kirbyKaomojiWhatContent: KaomojiWhatProps = {
  heading: "カービィ顔文字（Kaomoji）とは？",
  intro:
    "カービィ顔文字は、記号や絵文字、キャラっぽいパーツを組み合わせて「カービィ」の雰囲気を表現するKaomojiです。短い一言でもテーマが伝わりやすく、SNSやチャットのリアクションに便利です。",
  usageHeading: "使えるシーン",
  usageItems: [
    "カービィの話題に",
    "挨拶や日常の返信に",
    "SNS投稿のテーマに",
    "かわいく盛りたいときに",
    "ネタやユニークな一言に",
  ],
  typesHeading: "カービィ顔文字の種類",
  types: [
    {
      title: "基本的なカービィ",
      description: "このカテゴリの定番をまとめてチェック。",
      example: "例: ⠀ ＿_ ／ ｀ヽ / ┃ ┃ ヽ- 、 し　\" ∇　\"　|‐' >、 ノ、 （:::::＞――‐＜:::::）  ／￣￣＼ / ┃┃ ヽ | ∪ |⊃ ヽ ∇ / ~∪￣∪",
    },
    {
      title: "ポヨポヨ系",
      description: "このカテゴリの定番をまとめてチェック。",
      example: "例: (⊂'〇'⊃)ポヨ  ⊂( ˶•́⌓•̀˶ )⊃ポヨ",
    },
    {
      title: "アクション系",
      description: "このカテゴリの定番をまとめてチェック。",
      example: "例: ‪͟͟͞͞= ‪͟͟͞͞=('〇'- )ｽｩ-  ⭐‪͟͟͞͞= ‪͟͟͞͞=('〇'- )ﾄﾞﾝｯ",
    },
    {
      title: "感情表現系",
      description: "このカテゴリの定番をまとめてチェック。",
      example: "例: ⊂('〇')⊃はあぁぁぁぁぁぁ  （*´~`*）ﾎﾟｴ~",
    },
    {
      title: "特殊・ASCII Art",
      description: "このカテゴリの定番をまとめてチェック。",
      example: "例: 星のカービィ٩( ॑﹀ ॑ )  夢の泉の物語⊂( '‎ࠏ '",
    },
  ],
  featuresHeading: "カービィらしさが出るポイント",
  features: [
    { symbol: "( ⊃'-'⊂ )", title: "定番", description: "まずは短くて使いやすい定番から。" },
    { symbol: "♡", title: "かわいい", description: "かわいい系のカテゴリを選ぶと柔らかい印象に。" },
    { symbol: "✨", title: "装飾", description: "絵文字や装飾つきは投稿で映えます。" },
    { symbol: "ASCII", title: "AA/アート", description: "大きめの表現はネタとして強いです。" },
  ],
};

export const kirbyKaomojiWhyContent: KaomojiWhyProps = {
  heading: "カービィ顔文字の使い分け",
  subheading: "シンプルから装飾まで。場面に合わせて“雰囲気”を調整できます。",
  guideHeading: "シーン別ガイド",
  guides: [
    {
      title: "日常の返信",
      bullets: ["短めのシンプル系が自然", "文章に馴染みやすい"],
      recommend: "おすすめ: ⠀ ＿_ ／ ｀ヽ / ┃ ┃ ヽ- 、 し　\" ∇　\"　|‐' >、 ノ、 （:::::＞――‐＜:::::）",
    },
    {
      title: "SNS投稿",
      bullets: ["装飾つきでテーマが伝わりやすい", "写真と合わせると映える"],
      recommend: "おすすめ: (⊂'〇'⊃)ポヨ",
    },
    {
      title: "ネタ・ユニーク",
      bullets: ["ユニーク/AA系でインパクト", "使いすぎると読みにくいので注意"],
      recommend: "おすすめ: 星のカービィ٩( ॑﹀ ॑ )",
    },
    {
      title: "かわいく盛る",
      bullets: ["可愛いカテゴリを選ぶ", "一言に添えると収まりが良い"],
      recommend: "おすすめ: (⊂'〇'⊃)ポヨ",
    },
  ],
  cultureHeading: "「カービィ」モチーフは一言で伝わる",
  cultureBody:
    "カービィは見た目のイメージが強く、短い文章でもテーマが伝わりやすいモチーフです。顔文字を添えるだけで、投稿や返信の雰囲気を軽く・かわいく・面白く調整できます。",
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
      example: "例: 今日はいい日 ( ⊃'-'⊂ )",
    },
    {
      title: "投稿のテーマ",
      body: "写真や話題に合わせて選ぶと伝わりやすい。",
      example: "例: カービィかわいい (っ'o'c)",
    },
  ],
};

export const kirbyKaomojiFaqContent: KaomojiFaqProps = {
  heading: "よくある質問（FAQ）",
  subheading: "カービィ顔文字、迷ったらここだけ見ればOK。",
  items: [
    {
      question: "カービィ顔文字はどうやってコピーできますか？",
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

export const kirbyKaomojiGroups: KaomojiCollectionGroup[] = [
  {
    title: "基本的なカービィ",
    items: [
      { kaomoji: "⠀　　　　　　＿_\n　　　　　／　　 　｀ヽ\n　　　　/　 　┃　 ┃　 ヽ- 、\n　　 　し　\"　 　∇　\"　|‐'\n　 　  　>、 　 　 　 　ノ、\n　 　  （:::::＞――‐＜:::::）", tags: ["基本","ASCII","大きい","人気"] },
      { kaomoji: "／￣￣＼\n/ ┃┃ ヽ\n| ∪ |⊃\nヽ ∇ /\n~∪￣∪", tags: ["基本","ASCII","シンプル"] },
      { kaomoji: ",-‐――､ ﾊｰｲ♪\n/ ┃┃ ヽ-､\nし '' ∇ '' |‐'\nヽ___ ＿ノ、\n\"'ｰ-'￣ `ｰ-'\"", tags: ["基本","ASCII","挨拶"] },
      { kaomoji: "░░▄▄░▄▄▀▀▀▄▄░▄░░\n▄▀░░▀░░░░░░░█░█░\n▀▄░░░░░░█░█░░█▀░\n░█░░▄▄░░▀░▀░░█░░\n░░█▀░░█░░▀░░▄▀▀█\n░░█░░░░█▄▄▄▀░░█░\n░░░▀▄█▀░░░▀█▄▀░░", tags: ["基本","ASCII","ピクセル"] },
      { kaomoji: "‌　, ─< ´  ￣￣ ヽ､\n（　　　ro　ro  \\）\n　`T　〃 `´　 `´　|\n  ／\\　　　  ﾟ 　/´ ￣ `\n /　 ＼＿　 ＿／　  ／\n |　   /　 ￣　 \\＿／\n  ⏝", tags: ["基本","ASCII","大きい"] },
      { kaomoji: "( ⊃'-'⊂ )", tags: ["基本","人気","カービィ"] },
      { kaomoji: "(っ'o'c)", tags: ["基本","可愛い"] },
      { kaomoji: "_(っ'o'c)_", tags: ["基本","飛ぶ"] },
      { kaomoji: "(⊂'〇'⊃)", tags: ["基本","ポヨ"] },
      { kaomoji: "(っ'-')っ)", tags: ["基本","可愛い"] },
      { kaomoji: "( ⊃ -.- ⊂ )", tags: ["基本","眠い"] },
      { kaomoji: "⊂( ˶'ᵕ'˶⊃)", tags: ["基本","笑顔"] },
      { kaomoji: "⊂(˘˘⊂)", tags: ["基本","リラックス"] },
      { kaomoji: "(⊂ '‐ '⊃)", tags: ["基本","普通"] },
      { kaomoji: "⊂(•‿•)⊃", tags: ["基本","笑顔"] },
      { kaomoji: "⊂(・∀・)⊃", tags: ["基本","元気"] },
      { kaomoji: "⊂( ˘ ⊂ )", tags: ["基本","眠い"] },
      { kaomoji: "⊂(˘ ˘)⊃", tags: ["基本","平和"] },
      { kaomoji: "(˶◝ ◜˶)", tags: ["基本","可愛い"] },
      { kaomoji: "( ˶'ᵕ'˶ )", tags: ["基本","笑顔"] },
      { kaomoji: "(-┃.┃-)", tags: ["基本","シンプル"] },
      { kaomoji: "(っ⌯' ˘ '⌯c)", tags: ["基本","可愛い"] },
      { kaomoji: "(っ˶'ᵕ'˶っ)", tags: ["基本","ハグ"] },
      { kaomoji: "( -'-'-)", tags: ["基本","シンプル"] },
      { kaomoji: "(･○･)っ", tags: ["基本","ポヨ"] },
      { kaomoji: "(o0.0o)", tags: ["基本","驚き"] },
      { kaomoji: "(｡\"｡)", tags: ["基本","シンプル"] },
      { kaomoji: "(･¨ (○)", tags: ["基本","可愛い"] },
      { kaomoji: "⊂( ˙◁˙ )⊃", tags: ["基本","ポヨ"] },
      { kaomoji: "⊂(°ᴗ°⊂)", tags: ["基本","笑顔"] },
      { kaomoji: "⊂(•▿•⊂)", tags: ["基本","元気"] },
      { kaomoji: "⊂(˘ω˘⊂)", tags: ["基本","可愛い"] },
      { kaomoji: "⊂(⁰▿⁰⊂)", tags: ["基本","驚き"] },
      { kaomoji: "⊂(•⩊•⊂)", tags: ["基本","可愛い"] },
      { kaomoji: "⊂(▿•⊂)", tags: ["基本","ウインク"] },
    ],
  },
  {
    title: "ポヨポヨ系",
    items: [
      { kaomoji: "(⊂'〇'⊃)ポヨ", tags: ["ポヨ","人気","可愛い"] },
      { kaomoji: "⊂( ˶•́⌓•̀˶ )⊃ポヨ", tags: ["ポヨ","困る"] },
      { kaomoji: "⊂('◕ω◕')⊃ポヨ", tags: ["ポヨ","可愛い"] },
      { kaomoji: "(⊂ 〇 ′⊃)ポヨ", tags: ["ポヨ","元気"] },
      { kaomoji: "⊂(｡•̀‿•́｡)⊃ポヨ", tags: ["ポヨ","笑顔"] },
      { kaomoji: "(⊂•´⌓`•⊃)ポヨ", tags: ["ポヨ","困る"] },
      { kaomoji: "⊂(•̀o•́)⊃ポヨ", tags: ["ポヨ","元気"] },
      { kaomoji: "⊂('◕ᴗ◕')⊃ポヨ", tags: ["ポヨ","可愛い"] },
      { kaomoji: "⊂( ´•́⌓•̀`)⊃ポヨ", tags: ["ポヨ","悲しい"] },
      { kaomoji: "( ･ω･)⊃ポヨ", tags: ["ポヨ","可愛い"] },
      { kaomoji: "(･○･)っポヨ?", tags: ["ポヨ","疑問"] },
      { kaomoji: "⊂(・-・)⊃ポヨ", tags: ["ポヨ","普通"] },
      { kaomoji: "⊂(◕▿◕⊂)ポヨ", tags: ["ポヨ","笑顔"] },
      { kaomoji: "⊂(⌒ω⌒)⊃ポヨ", tags: ["ポヨ","幸せ"] },
      { kaomoji: "⊂(•∀•⊂)ポヨ", tags: ["ポヨ","元気"] },
      { kaomoji: "⊂( ˘◡˘⊂)ポヨ", tags: ["ポヨ","可愛い"] },
      { kaomoji: "⊂(°⌓°⊂)ポヨ", tags: ["ポヨ","困る"] },
      { kaomoji: "(・-・)ฅポヨ", tags: ["ポヨ","シンプル"] },
      { kaomoji: "૮( ⊃⌯'. '⌯)⊃ポヨ", tags: ["ポヨ","可愛い"] },
      { kaomoji: "૮( ⊃⌯'༥'⌯)⊃ポヨ", tags: ["ポヨ","眠い"] },
      { kaomoji: "⊂(´ω`⊃)ポヨ", tags: ["ポヨ","可愛い"] },
      { kaomoji: "⊂(o˘ ˘ o⊂)ポヨ", tags: ["ポヨ","幸せ"] },
      { kaomoji: "⊂(⨀ ˘ ⨀⊂)ポヨ", tags: ["ポヨ","可愛い"] },
      { kaomoji: "⊂(˵·⨀⩊⨀·˵)⊃ポヨ", tags: ["ポヨ","特別"] },
      { kaomoji: "⊂(·̑◕⩊◕·̑⊂)ポヨ", tags: ["ポヨ","可愛い"] },
      { kaomoji: "⊂(◜•ᴗ•◝)⊃ポヨ", tags: ["ポヨ","笑顔"] },
      { kaomoji: "⊂( ᴗ•́ )⊃ポヨ", tags: ["ポヨ","元気"] },
      { kaomoji: "⊂(｡•́⩊•̀｡)⊃ポヨ", tags: ["ポヨ","可愛い"] },
      { kaomoji: "⊂(•˘˘˘˘˘˘•⊂)ポヨ", tags: ["ポヨ","長い"] },
      { kaomoji: "⊂(•⨀˘⨀•⊂)ポヨ", tags: ["ポヨ","特別"] },
    ],
  },
  {
    title: "アクション系",
    items: [
      { kaomoji: "‪͟͟͞͞= ‪͟͟͞͞=('〇'- )ｽｩ-", tags: ["アクション","人気","吸い込む"] },
      { kaomoji: "⭐‪͟͟͞͞= ‪͟͟͞͞=('〇'- )ﾄﾞﾝｯ", tags: ["アクション","星","攻撃"] },
      { kaomoji: "_(っ'o'c✱)_", tags: ["アクション","星","飛ぶ"] },
      { kaomoji: "(つ・・)╮ =͟͟͞͞♡ﾌﾚﾝｽﾞﾊｰﾄｱﾀｧｧｧｯｸ", tags: ["アクション","ハート","攻撃"] },
      { kaomoji: "(・-・)ฅﾎﾟﾖｵｵｵｵｵｵｵｵｵｵｵｵｵｵｵｵｵｵｵｵｵ", tags: ["アクション","吸い込む","長い"] },
      { kaomoji: "⊂( '‐ ' ⊃ )⊃))", tags: ["アクション","飛ぶ"] },
      { kaomoji: "o<( -'-')o+---", tags: ["アクション","ソード","剣"] },
      { kaomoji: "<( m-'-')m", tags: ["アクション","ゴースト","コピー"] },
      { kaomoji: "o<( _-_-).zZ", tags: ["アクション","眠る","スリープ"] },
      { kaomoji: "レ-'-')シ ミ卍", tags: ["アクション","ニンジャ"] },
      { kaomoji: "_ ⊂( っ'o')つ_", tags: ["アクション","飛ぶ"] },
      { kaomoji: "_ ⊂(っ'o')つ_", tags: ["アクション","滑空"] },
      { kaomoji: "(⊂'o'⊃)ｼﾞｰ", tags: ["アクション","見る"] },
      { kaomoji: "<(0_0<)", tags: ["アクション","ダンス","左"] },
      { kaomoji: "<(0_0)>", tags: ["アクション","ダンス","中"] },
      { kaomoji: "(>0_0)>", tags: ["アクション","ダンス","右"] },
      { kaomoji: "(>'-')>", tags: ["アクション","動き"] },
      { kaomoji: "< ('-'<)", tags: ["アクション","動き"] },
      { kaomoji: "^(' – ')^", tags: ["アクション","ジャンプ"] },
      { kaomoji: "<('-'<)", tags: ["アクション","左"] },
      { kaomoji: "☆⌒( ' ヮ' )っ", tags: ["アクション","星","投げる"] },
      { kaomoji: "⊂(⊃｡•́‿•̀｡)⊃", tags: ["アクション","飛ぶ"] },
      { kaomoji: "⊂( ⊂' ′ω′ ⊃)", tags: ["アクション","移動"] },
      { kaomoji: "⊂(•′∀′•⊂)", tags: ["アクション","元気"] },
      { kaomoji: "⊂(ω•́◡•̀ω)⊃", tags: ["アクション","飛ぶ"] },
      { kaomoji: "⊂(•‿•⊂)", tags: ["アクション","移動"] },
      { kaomoji: "(｀Д´)三🍰", tags: ["アクション","食べる","ケーキ"] },
      { kaomoji: "⊂(´-ω-`)⊃", tags: ["アクション","疲れ"] },
      { kaomoji: "⊂( ˃̣̣̣̣̣̣︿˂̣̣̣̣̣̣ )⊃", tags: ["アクション","泣く"] },
    ],
  },
  {
    title: "感情表現系",
    items: [
      { kaomoji: "⊂('〇')⊃はあぁぁぁぁぁぁ", tags: ["感情","人気","吸い込む"] },
      { kaomoji: "（*´~`*）ﾎﾟｴ~", tags: ["感情","満足","かわいい"] },
      { kaomoji: "⊂( ´•̥̥̥ω•̥̥̥`⊃)", tags: ["感情","泣く","悲しい"] },
      { kaomoji: "(⊂´ ˘ `⊃)", tags: ["感情","リラックス"] },
      { kaomoji: "⊂( ˘ ³˘⊂)", tags: ["感情","キス","可愛い"] },
      { kaomoji: "⊂(⊂´ ˘ `⊃)", tags: ["感情","眠い"] },
      { kaomoji: "⊂(´•̥̥̥ω•̥̥̥`⊃)", tags: ["感情","泣く"] },
      { kaomoji: "(⊂•́⌓•̀⊃)", tags: ["感情","困る"] },
      { kaomoji: "(⊂ ‵ω′ ⊃)", tags: ["感情","怒る"] },
      { kaomoji: "⊂(° ꒳ °⊂)", tags: ["感情","驚き"] },
      { kaomoji: "⊂( ´´ ˘ \"⊃)", tags: ["感情","眠い"] },
      { kaomoji: "⊂( ᵕ´ᵕ)⊃", tags: ["感情","可愛い"] },
      { kaomoji: "⊂( ｡•́ ⌣•̀｡)⊃", tags: ["感情","笑顔"] },
      { kaomoji: "(⊂'｀・ω・´⊃)", tags: ["感情","真剣"] },
      { kaomoji: "⊂( ⊂´ω`⊃)", tags: ["感情","疲れ"] },
      { kaomoji: "⊂(・◇・⊂)", tags: ["感情","驚き"] },
      { kaomoji: "⊂(⌒‿⌒)⊃", tags: ["感情","幸せ"] },
      { kaomoji: "⊂( ˶ 'ᵕ' ˶⊃)", tags: ["感情","可愛い"] },
      { kaomoji: "⊂(⚈᷀᷅•᷁ ⚈᷀᷅⊂)", tags: ["感情","悲しい"] },
      { kaomoji: "⊂( ˃̣̣̣̣̣̣᷄˂̣̣̣̣̣̣⊂)", tags: ["感情","泣く"] },
      { kaomoji: "⊂(⨀´˘`⨀⊂)", tags: ["感情","困る"] },
      { kaomoji: "⊂(｡´‿`｡)⊃", tags: ["感情","笑顔"] },
      { kaomoji: "(⊂˶'ᴗ'˶⊃)", tags: ["感情","可愛い"] },
      { kaomoji: "(՞ ' . ' ՞)", tags: ["感情","普通"] },
      { kaomoji: "– ̗̀ ( ˶'ᵕ'˶) ̖́-", tags: ["感情","笑顔"] },
      { kaomoji: "°ʚ♡ɞ°(⊂˶ 'ᵕ'˶⊂ )", tags: ["感情","愛","ハート"] },
      { kaomoji: "*….*..꒰ঌ( っ˶'ᵕ'˶ っ)*…*♡໒꒱", tags: ["感情","可愛い","特別"] },
      { kaomoji: "𓂂- · -𓂂", tags: ["感情","シンプル"] },
      { kaomoji: "(つ╹◡╹)つ", tags: ["感情","ハグ"] },
      { kaomoji: "⊂(´ω `⊃)", tags: ["感情","リラックス"] },
    ],
  },
  {
    title: "特殊・ASCII Art",
    items: [
      { kaomoji: "星のカービィ٩( ॑﹀ ॑ )", tags: ["特殊","人気","タイトル"] },
      { kaomoji: "夢の泉の物語⊂( '‎ࠏ '", tags: ["特殊","タイトル"] },
      { kaomoji: "(｡\"｡)ｶｰﾋﾞｨ", tags: ["特殊","名前"] },
      { kaomoji: "⊂(ᴑ╹.╹ᴑ)੭", tags: ["特殊","可愛い"] },
      { kaomoji: "•''.''•", tags: ["特殊","シンプル","目"] },
      { kaomoji: "⊂( ⊃⌯'. '⌯)⊃", tags: ["特殊","可愛い"] },
      { kaomoji: "⊂( ⊃⌯'༥'⌯)⊃", tags: ["特殊","眠い"] },
      { kaomoji: "(っ'-')っ", tags: ["特殊","シンプル"] },
      { kaomoji: "⊂(˵·⨀⩊⨀·˵)⊃", tags: ["特殊","驚き"] },
      { kaomoji: "⊂(·̑◕⩊◕·̑⊂)", tags: ["特殊","可愛い"] },
      { kaomoji: "⊂(◜•ᴗ•◝)⊃", tags: ["特殊","笑顔"] },
      { kaomoji: "⊂( ᴗ•́ )⊃", tags: ["特殊","ウインク"] },
      { kaomoji: "⊂(°⌓°⊂)", tags: ["特殊","困る"] },
      { kaomoji: "⊂(⨀ ˘ ⨀⊂)", tags: ["特殊","可愛い"] },
      { kaomoji: "⊂(•˘˘˘˘˘˘•⊂)", tags: ["特殊","長い"] },
      { kaomoji: "⊂(•⨀˘⨀•⊂)", tags: ["特殊","可愛い"] },
    ],
  },
];

