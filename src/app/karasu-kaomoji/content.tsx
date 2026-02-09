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
  title: "カラス顔文字一覧（Kaomoji）｜絵文字系・シンプル・かわいいもコピペ",
  description:
    "カラス顔文字（Kaomoji）をまとめて掲載。絵文字系・シンプル・かわいい・鳴き声・飛ぶ・アクション・装飾・特殊文字まで。検索＆ワンクリックでコピーして、LINE/X（Twitter）/Instagram/Discordにそのままコピペ。登録不要で無料。スマホでもOK。",
  ...withCanonical("/karasu-kaomoji"),
};

export const karasuKaomojiHeroContent: KaomojiHeroProps = {
  title: "カラス顔文字一覧",
  kaomoji: "🐦‍⬛  Σ^)/",
  subtitle: "絵文字系・シンプルまで【コピペ簡単】",
  description:
    "「カラスっぽさ」が出る顔文字を集めました。シンプルから可愛い系、装飾つき、ユニーク系まで幅広く掲載。気に入った顔文字はワンクリックでコピーして、そのまま貼り付けできます。",
  primaryCta: { href: "#list", label: "顔文字を探す" },
  secondaryCta: { href: "/", label: "ホームへ" },
};

export const karasuKaomojiWhatContent: KaomojiWhatProps = {
  heading: "カラス顔文字（Kaomoji）とは？",
  intro:
    "カラス顔文字は、記号や絵文字、キャラっぽいパーツを組み合わせて「カラス」の雰囲気を表現するKaomojiです。短い一言でもテーマが伝わりやすく、SNSやチャットのリアクションに便利です。",
  usageHeading: "使えるシーン",
  usageItems: [
    "カラスの話題に",
    "挨拶や日常の返信に",
    "SNS投稿のテーマに",
    "かわいく盛りたいときに",
    "ネタやユニークな一言に",
  ],
  typesHeading: "カラス顔文字の種類",
  types: [
    {
      title: "絵文字系",
      description: "このカテゴリの定番をまとめてチェック。",
      example: "例: 🐦‍⬛  🐦‍⬛◝ˎˊ˗",
    },
    {
      title: "シンプル",
      description: "このカテゴリの定番をまとめてチェック。",
      example: "例: Σ^)/  Σ^ )/",
    },
    {
      title: "かわいい",
      description: "このカテゴリの定番をまとめてチェック。",
      example: "例: ‹‹‪𓆩(•ө• )𓆪‪›‬‬  ∑σ໒꒱",
    },
    {
      title: "鳴き声",
      description: "このカテゴリの定番をまとめてチェック。",
      example: "例: Σ^)/カァー  Σ^)/＝３ カァカァ",
    },
    {
      title: "飛ぶ",
      description: "このカテゴリの定番をまとめてチェック。",
      example: "例: ＼Σ^)／  ＼Σ^ )／",
    },
  ],
  featuresHeading: "カラスらしさが出るポイント",
  features: [
    { symbol: "🐦‍⬛", title: "定番", description: "まずは短くて使いやすい定番から。" },
    { symbol: "♡", title: "かわいい", description: "かわいい系のカテゴリを選ぶと柔らかい印象に。" },
    { symbol: "✨", title: "装飾", description: "絵文字や装飾つきは投稿で映えます。" },
    { symbol: "ASCII", title: "AA/アート", description: "大きめの表現はネタとして強いです。" },
  ],
};

export const karasuKaomojiWhyContent: KaomojiWhyProps = {
  heading: "カラス顔文字の使い分け",
  subheading: "シンプルから装飾まで。場面に合わせて“雰囲気”を調整できます。",
  guideHeading: "シーン別ガイド",
  guides: [
    {
      title: "日常の返信",
      bullets: ["短めのシンプル系が自然", "文章に馴染みやすい"],
      recommend: "おすすめ: Σ^)/",
    },
    {
      title: "SNS投稿",
      bullets: ["装飾つきでテーマが伝わりやすい", "写真と合わせると映える"],
      recommend: "おすすめ: 🐦‍⬛",
    },
    {
      title: "ネタ・ユニーク",
      bullets: ["ユニーク/AA系でインパクト", "使いすぎると読みにくいので注意"],
      recommend: "おすすめ: ∩Σ^)∩",
    },
    {
      title: "かわいく盛る",
      bullets: ["可愛いカテゴリを選ぶ", "一言に添えると収まりが良い"],
      recommend: "おすすめ: 🐦‍⬛",
    },
  ],
  cultureHeading: "「カラス」モチーフは一言で伝わる",
  cultureBody:
    "カラスは見た目のイメージが強く、短い文章でもテーマが伝わりやすいモチーフです。顔文字を添えるだけで、投稿や返信の雰囲気を軽く・かわいく・面白く調整できます。",
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
      example: "例: 今日はいい日 🐦‍⬛",
    },
    {
      title: "投稿のテーマ",
      body: "写真や話題に合わせて選ぶと伝わりやすい。",
      example: "例: カラスかわいい Σ^)/",
    },
  ],
};

export const karasuKaomojiFaqContent: KaomojiFaqProps = {
  heading: "よくある質問（FAQ）",
  subheading: "カラス顔文字、迷ったらここだけ見ればOK。",
  items: [
    {
      question: "カラス顔文字はどうやってコピーできますか？",
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

export const karasuKaomojiGroups: KaomojiCollectionGroup[] = [
  {
    title: "絵文字系",
    items: [
      { kaomoji: "🐦‍⬛", tags: ["黒い鳥","絵文字","シンプル"] },
      { kaomoji: "🐦‍⬛◝ˎˊ˗", tags: ["黒い鳥","絵文字","かわいい"] },
      { kaomoji: "❍🐦‍⬛", tags: ["黒い鳥","絵文字","装飾"] },
      { kaomoji: "🐦‍⬛✨", tags: ["黒い鳥","絵文字","キラキラ"] },
      { kaomoji: "🐦‍⬛🖤", tags: ["黒い鳥","絵文字","ハート"] },
      { kaomoji: "🐦‍⬛🌙", tags: ["黒い鳥","絵文字","月"] },
      { kaomoji: "🐦‍⬛☁️", tags: ["黒い鳥","絵文字","雲"] },
      { kaomoji: "🐦‍⬛🌑", tags: ["黒い鳥","絵文字","新月"] },
      { kaomoji: "🐦‍⬛🪶", tags: ["黒い鳥","絵文字","羽"] },
      { kaomoji: "🐦‍⬛💫", tags: ["黒い鳥","絵文字","星"] },
    ],
  },
  {
    title: "シンプル",
    items: [
      { kaomoji: "Σ^)/", tags: ["基本","鳴く","シンプル"] },
      { kaomoji: "Σ^ )/", tags: ["基本","鳴く","シンプル"] },
      { kaomoji: "Σ^)／", tags: ["基本","鳴く","シンプル"] },
      { kaomoji: "Σ^ )／", tags: ["基本","鳴く","シンプル"] },
      { kaomoji: "<^)", tags: ["基本","シンプル","横顔"] },
      { kaomoji: "(Σ^)", tags: ["基本","シンプル","顔"] },
      { kaomoji: "ΣΘ)β", tags: ["基本","シンプル","横顔"] },
      { kaomoji: "(´ )", tags: ["基本","シンプル","くちばし"] },
      { kaomoji: "(¯ )", tags: ["基本","シンプル","くちばし"] },
    ],
  },
  {
    title: "かわいい",
    items: [
      { kaomoji: "‹‹‪𓆩(•ө• )𓆪‪›‬‬", tags: ["かわいい","装飾","特殊文字"] },
      { kaomoji: "∑σ໒꒱", tags: ["かわいい","シンプル","特殊文字"] },
      { kaomoji: "(•ө• )", tags: ["かわいい","目","顔"] },
      { kaomoji: "ヾ(・Θ・)ノ", tags: ["かわいい","手を振る","挨拶"] },
      { kaomoji: "(◔ө◔)", tags: ["かわいい","大きい目","顔"] },
      { kaomoji: "(・Θ・)", tags: ["かわいい","顔","基本"] },
      { kaomoji: "♪(・Θ・)♪", tags: ["かわいい","音楽","歌う"] },
      { kaomoji: "(ˊᗜˋ๑)", tags: ["かわいい","笑顔","嬉しい"] },
      { kaomoji: "꒰ ᐢ ᴗ ᐢ ꒱", tags: ["かわいい","まる顔","優しい"] },
      { kaomoji: "(๑•ө•๑)", tags: ["かわいい","顔","まる"] },
    ],
  },
  {
    title: "鳴き声",
    items: [
      { kaomoji: "Σ^)/カァー", tags: ["鳴く","カァー","声"] },
      { kaomoji: "Σ^)/＝３ カァカァ", tags: ["鳴く","カァー","勢い"] },
      { kaomoji: "＼Σ^)／カァ～", tags: ["鳴く","カァー","飛ぶ"] },
      { kaomoji: "＼Σ^)／＝３ カァカァ", tags: ["鳴く","カァー","飛ぶ"] },
      { kaomoji: "Σ^)/＝３ アホーアホー", tags: ["鳴く","アホー","ユーモア"] },
      { kaomoji: "Σ^)／＝３ アホーアホー", tags: ["鳴く","アホー","ユーモア"] },
      { kaomoji: "Σ(´ )/ ｶｰｯ!", tags: ["鳴く","カー","叫ぶ"] },
      { kaomoji: "ε=Σ(´ )/ ｹｯ!", tags: ["鳴く","ケッ","勢い"] },
      { kaomoji: "ε=Σ(¯ )ﾊｧｰ", tags: ["鳴く","ハー","溜息"] },
      { kaomoji: "ｶｧｰΣ^)/ｶｧｰ", tags: ["鳴く","カァー","繰り返し"] },
    ],
  },
  {
    title: "飛ぶ",
    items: [
      { kaomoji: "＼Σ^)／", tags: ["飛ぶ","羽","動き"] },
      { kaomoji: "＼Σ^ )／", tags: ["飛ぶ","羽","動き"] },
      { kaomoji: "＼Σ^*)／", tags: ["飛ぶ","羽","嬉しい"] },
      { kaomoji: "ヘΣ^)ヘ", tags: ["飛ぶ","羽ばたく","動き"] },
      { kaomoji: "ヘΣ^ )ヘ", tags: ["飛ぶ","羽ばたく","動き"] },
      { kaomoji: "ヘΣ^*)ヘ", tags: ["飛ぶ","羽ばたく","嬉しい"] },
      { kaomoji: "ヾΣ^)ツ", tags: ["飛ぶ","羽","軽い"] },
      { kaomoji: "ヾΣ^ )ツ", tags: ["飛ぶ","羽","軽い"] },
      { kaomoji: "ヾΣ^*)ツ", tags: ["飛ぶ","羽","嬉しい"] },
      { kaomoji: "＼Σ^;)／", tags: ["飛ぶ","羽","焦る"] },
    ],
  },
  {
    title: "アクション",
    items: [
      { kaomoji: "Σ^)//", tags: ["動き","羽ばたく","勢い"] },
      { kaomoji: "Σ^ )//", tags: ["動き","羽ばたく","勢い"] },
      { kaomoji: "Σ^*)//", tags: ["動き","羽ばたく","嬉しい"] },
      { kaomoji: "Σ^)／／", tags: ["動き","羽ばたく","勢い"] },
      { kaomoji: "Σ^ )／／", tags: ["動き","羽ばたく","勢い"] },
      { kaomoji: "Σ^*)／／", tags: ["動き","羽ばたく","嬉しい"] },
      { kaomoji: "ヘΣ^;)ヘ", tags: ["動き","羽ばたく","焦る"] },
      { kaomoji: "ヾΣ^;)ツ", tags: ["動き","羽ばたく","焦る"] },
      { kaomoji: "Σ^;)/", tags: ["動き","鳴く","焦る"] },
      { kaomoji: "Σ^;)//", tags: ["動き","羽ばたく","焦る"] },
    ],
  },
  {
    title: "装飾",
    items: [
      { kaomoji: "✧Σ^)✧", tags: ["装飾","キラキラ","特別"] },
      { kaomoji: "☆Σ^)☆", tags: ["装飾","星","特別"] },
      { kaomoji: "◇Σ^)◇", tags: ["装飾","ダイヤ","特別"] },
      { kaomoji: "♪Σ^)♪", tags: ["装飾","音楽","歌う"] },
      { kaomoji: "♡Σ^)♡", tags: ["装飾","ハート","愛"] },
      { kaomoji: "◆Σ^)◆", tags: ["装飾","ダイヤ","特別"] },
      { kaomoji: "★Σ^)★", tags: ["装飾","星","特別"] },
      { kaomoji: "♬Σ^)♬", tags: ["装飾","音楽","歌う"] },
      { kaomoji: "✿Σ^)✿", tags: ["装飾","花","綺麗"] },
      { kaomoji: "❀Σ^)❀", tags: ["装飾","花","綺麗"] },
    ],
  },
  {
    title: "特殊文字",
    items: [
      { kaomoji: "𓅂", tags: ["特殊文字","象形文字","エジプト"] },
      { kaomoji: "𓆩Σ^)𓆪", tags: ["特殊文字","象形文字","装飾"] },
      { kaomoji: "【Σ^)】", tags: ["特殊","枠","強調"] },
      { kaomoji: "〈Σ^)〉", tags: ["特殊","枠","強調"] },
      { kaomoji: "《Σ^)》", tags: ["特殊","枠","強調"] },
      { kaomoji: "『Σ^)』", tags: ["特殊","枠","強調"] },
      { kaomoji: "（Σ^）", tags: ["特殊","全角","丸括弧"] },
      { kaomoji: "［Σ^］", tags: ["特殊","角括弧","枠"] },
      { kaomoji: "｛Σ^｝", tags: ["特殊","波括弧","枠"] },
      { kaomoji: "〔Σ^〕", tags: ["特殊","亀甲括弧","枠"] },
    ],
  },
  {
    title: "バリエーション",
    items: [
      { kaomoji: "Σ^o)/", tags: ["バリエーション","目","驚く"] },
      { kaomoji: "Σ^0)/", tags: ["バリエーション","目","驚く"] },
      { kaomoji: "Σ^○)/", tags: ["バリエーション","目","大きい"] },
      { kaomoji: "Σ^◎)/", tags: ["バリエーション","目","注目"] },
      { kaomoji: "Σ^●)/", tags: ["バリエーション","目","黒い"] },
      { kaomoji: "Σ^・)/", tags: ["バリエーション","目","小さい"] },
      { kaomoji: "Σ^ー)/", tags: ["バリエーション","目","閉じる"] },
      { kaomoji: "Σ^ω)/", tags: ["バリエーション","口","かわいい"] },
      { kaomoji: "Σ^▽)/", tags: ["バリエーション","口","笑顔"] },
      { kaomoji: "Σ^∀)/", tags: ["バリエーション","口","嬉しい"] },
    ],
  },
  {
    title: "感情表現",
    items: [
      { kaomoji: "Σ^T)/", tags: ["感情","泣く","悲しい"] },
      { kaomoji: "Σ^△)/", tags: ["感情","困る","心配"] },
      { kaomoji: "Σ^＿)/", tags: ["感情","無表情","平静"] },
      { kaomoji: "Σ^～)/", tags: ["感情","照れる","恥ずかしい"] },
      { kaomoji: "Σ^´)/", tags: ["感情","不満","怒る"] },
      { kaomoji: "Σ^｀)/", tags: ["感情","不満","むっ"] },
      { kaomoji: "Σ^.)/", tags: ["感情","静か","落ち着く"] },
      { kaomoji: "Σ^,)/", tags: ["感情","考える","思案"] },
      { kaomoji: "Σ^!)/", tags: ["感情","驚く","びっくり"] },
      { kaomoji: "Σ^?)/", tags: ["感情","疑問","不思議"] },
    ],
  },
  {
    title: "夜のカラス",
    items: [
      { kaomoji: "🌙Σ^)", tags: ["夜","月","暗い"] },
      { kaomoji: "⭐Σ^)", tags: ["夜","星","暗い"] },
      { kaomoji: "🌃Σ^)", tags: ["夜","街","暗い"] },
      { kaomoji: "🌌Σ^)", tags: ["夜","銀河","美しい"] },
      { kaomoji: "🌑Σ^)", tags: ["夜","新月","暗い"] },
      { kaomoji: "✨Σ^)✨", tags: ["夜","キラキラ","綺麗"] },
      { kaomoji: "💫Σ^)💫", tags: ["夜","星","輝く"] },
      { kaomoji: "🌠Σ^)", tags: ["夜","流れ星","願い"] },
      { kaomoji: "🌜Σ^)", tags: ["夜","月","顔"] },
      { kaomoji: "🌛Σ^)", tags: ["夜","月","顔"] },
    ],
  },
  {
    title: "群れ",
    items: [
      { kaomoji: "Σ^)Σ^)Σ^)", tags: ["群れ","複数","仲間"] },
      { kaomoji: "Σ^) Σ^) Σ^)", tags: ["群れ","複数","仲間"] },
      { kaomoji: "＼Σ^)／＼Σ^)／", tags: ["群れ","飛ぶ","複数"] },
      { kaomoji: "Σ^)/ Σ^)/ Σ^)/", tags: ["群れ","鳴く","複数"] },
      { kaomoji: "(Σ^)(Σ^)(Σ^)", tags: ["群れ","複数","並ぶ"] },
      { kaomoji: "ヾΣ^)ツ ヾΣ^)ツ", tags: ["群れ","飛ぶ","二羽"] },
      { kaomoji: "Σ^)Σ^)", tags: ["群れ","二羽","仲間"] },
      { kaomoji: "(Σ^) (Σ^)", tags: ["群れ","二羽","並ぶ"] },
      { kaomoji: "＼Σ^)／ ＼Σ^)／ ＼Σ^)／", tags: ["群れ","飛ぶ","三羽"] },
      { kaomoji: "Σ^)/ ♪ Σ^)/", tags: ["群れ","歌う","音楽"] },
    ],
  },
  {
    title: "ミニサイズ",
    items: [
      { kaomoji: "ᐛ)", tags: ["小さい","シンプル","かわいい"] },
      { kaomoji: "^)", tags: ["小さい","シンプル","基本"] },
      { kaomoji: "ᐛ)/", tags: ["小さい","シンプル","手"] },
      { kaomoji: "(ᐛ )", tags: ["小さい","シンプル","顔"] },
      { kaomoji: "( ᐛ)", tags: ["小さい","シンプル","顔"] },
      { kaomoji: "ᐛ", tags: ["小さい","シンプル","くちばし"] },
      { kaomoji: "ᐡ )", tags: ["小さい","シンプル","耳"] },
      { kaomoji: "( ᐡ)", tags: ["小さい","シンプル","耳"] },
      { kaomoji: "ᐢ )", tags: ["小さい","シンプル","耳"] },
      { kaomoji: "( ᐢ)", tags: ["小さい","シンプル","耳"] },
    ],
  },
  {
    title: "ユニーク",
    items: [
      { kaomoji: "∩Σ^)∩", tags: ["ユニーク","羽","上げる"] },
      { kaomoji: "⊂Σ^)⊃", tags: ["ユニーク","羽","広げる"] },
      { kaomoji: "ヽΣ^)ノ", tags: ["ユニーク","喜ぶ","バンザイ"] },
      { kaomoji: "∪Σ^)∪", tags: ["ユニーク","羽","丸い"] },
      { kaomoji: "┗Σ^)┛", tags: ["ユニーク","踊る","動き"] },
      { kaomoji: "┏Σ^)┓", tags: ["ユニーク","羽ばたく","動き"] },
      { kaomoji: "└Σ^)┘", tags: ["ユニーク","立つ","足"] },
      { kaomoji: "┌Σ^)┐", tags: ["ユニーク","羽","上げる"] },
      { kaomoji: "〜Σ^)〜", tags: ["ユニーク","揺れる","動き"] },
      { kaomoji: "≈Σ^)≈", tags: ["ユニーク","波","動き"] },
    ],
  },
  {
    title: "AI創作",
    items: [
      { kaomoji: "🐦‍⬛⚡", tags: ["AI創作","稲妻","力強い"] },
      { kaomoji: "🐦‍⬛🌟", tags: ["AI創作","星","輝く"] },
      { kaomoji: "🐦‍⬛🎵", tags: ["AI創作","音楽","歌う"] },
      { kaomoji: "🐦‍⬛🌸", tags: ["AI創作","桜","春"] },
      { kaomoji: "🐦‍⬛🍂", tags: ["AI創作","紅葉","秋"] },
      { kaomoji: "☁️Σ^)☁️", tags: ["AI創作","雲","空"] },
      { kaomoji: "🌈Σ^)", tags: ["AI創作","虹","綺麗"] },
      { kaomoji: "⚡Σ^)⚡", tags: ["AI創作","雷","強い"] },
      { kaomoji: "🔮Σ^)", tags: ["AI創作","水晶球","神秘"] },
      { kaomoji: "🎭Σ^)", tags: ["AI創作","仮面","芸術"] },
      { kaomoji: "Σ^)っ💎", tags: ["AI創作","宝石","持つ"] },
      { kaomoji: "Σ^)っ🌰", tags: ["AI創作","栗","食べ物"] },
      { kaomoji: "Σ^)っ🥜", tags: ["AI創作","ナッツ","食べ物"] },
      { kaomoji: "🗝️Σ^)", tags: ["AI創作","鍵","秘密"] },
      { kaomoji: "📜Σ^)", tags: ["AI創作","巻物","知恵"] },
      { kaomoji: "⌛Σ^)", tags: ["AI創作","砂時計","時間"] },
      { kaomoji: "🏔️Σ^)", tags: ["AI創作","山","高い"] },
      { kaomoji: "🌊Σ^)", tags: ["AI創作","波","海"] },
      { kaomoji: "🔥Σ^)", tags: ["AI創作","火","熱い"] },
      { kaomoji: "❄️Σ^)", tags: ["AI創作","雪","冬"] },
      { kaomoji: "🌺Σ^)", tags: ["AI創作","花","南国"] },
      { kaomoji: "🍁Σ^)", tags: ["AI創作","紅葉","秋"] },
      { kaomoji: "☔Σ^)", tags: ["AI創作","雨","傘"] },
      { kaomoji: "🌪️Σ^)", tags: ["AI創作","竜巻","風"] },
      { kaomoji: "🎃Σ^)", tags: ["AI創作","かぼちゃ","ハロウィン"] },
      { kaomoji: "🎄Σ^)", tags: ["AI創作","ツリー","クリスマス"] },
      { kaomoji: "🎋Σ^)", tags: ["AI創作","笹","七夕"] },
      { kaomoji: "🎑Σ^)", tags: ["AI創作","月見","秋"] },
      { kaomoji: "🎆Σ^)", tags: ["AI創作","花火","夏"] },
    ],
  },
];

