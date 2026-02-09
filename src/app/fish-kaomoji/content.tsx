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
  title: "魚顔文字一覧（Kaomoji）｜∈(ﾟ◎ﾟ)∋・金魚・フグもコピペ",
  description:
    "魚顔文字（Kaomoji）をまとめて掲載。基本の魚、特殊文字🐟、金魚、かわいい魚、フグ🐡まで。検索＆ワンクリックでコピーして、LINE/X（Twitter）/Instagram/Discordにそのままコピペ。登録不要で無料。スマホでもOK。",
  ...withCanonical("/fish-kaomoji"),
};

export const fishKaomojiHeroContent: KaomojiHeroProps = {
  title: "魚顔文字一覧",
  kaomoji: "∈(ﾟ◎ﾟ)∋  <+))><<",
  subtitle: "金魚・フグ・特殊文字🐟まで【コピペ簡単】",
  description:
    "魚の形を文字で表現した顔文字を集めました。シンプルな魚から、金魚っぽいもの、フグ（膨らむ）系、絵文字入りまで。気に入った顔文字はワンクリックでコピーして、そのまま貼り付けできます。",
  primaryCta: { href: "#list", label: "顔文字を探す" },
  secondaryCta: { href: "/", label: "ホームへ" },
};

export const fishKaomojiWhatContent: KaomojiWhatProps = {
  heading: "魚顔文字（Kaomoji）とは？",
  intro:
    "魚顔文字は、魚の体・口・目・ひれなどを記号で表現したKaomojiです。水族館・釣り・海の話題などで使いやすく、文章に遊び心を足せます。",
  usageHeading: "使えるシーン",
  usageItems: [
    "釣り・海・水族館の話題に",
    "ごはん（魚料理）の投稿や感想に",
    "夏っぽい雰囲気を出したいとき",
    "かわいい金魚やフグでアクセントを付けたいとき",
    "SNSの一言にゆるい絵文字感を足したいとき",
  ],
  typesHeading: "魚顔文字の種類",
  types: [
    {
      title: "基本の魚",
      description: "シンプルで使いやすい定番の魚。",
      example: "例: <+))><<  ∈(ﾟ◎ﾟ)∋",
    },
    {
      title: "特殊文字🐟",
      description: "絵文字や装飾つきで、見た目を盛りたいときに。",
      example: "例: 🐟<+)))><<  ✨∈(ﾟ◎ﾟ)∋✨",
    },
    {
      title: "金魚",
      description: "小さくて可愛い雰囲気。夏やお祭りにも合います。",
      example: "例: <゜)))彡  くコ:彡",
    },
    {
      title: "かわいい魚",
      description: "目や口が可愛いタイプ。会話で使いやすい。",
      example: "例: ∈(・◎・)∋  ∈(￣◎￣)∋",
    },
    {
      title: "フグ🐡",
      description: "膨らむ・驚く系。ネタにも使えます。",
      example: "例: ∈(ﾟ◎ﾟ)∋  ∈( ⊙_________ ⊙)∋",
    },
  ],
  featuresHeading: "魚っぽさが出るパーツ",
  features: [
    { symbol: "∈", title: "輪郭", description: "魚の体っぽい形を作りやすい記号。" },
    { symbol: "◎", title: "口・目", description: "丸い口/目で魚っぽい表情を作れます。" },
    { symbol: "<><", title: "しっぽ", description: "泳いでいる雰囲気を出しやすい定番。" },
    { symbol: "🐟🐡", title: "絵文字", description: "投稿で目立たせたいときに便利。" },
  ],
};

export const fishKaomojiWhyContent: KaomojiWhyProps = {
  heading: "魚顔文字の使い分け",
  subheading: "シンプルから装飾まで。場面に合わせて“魚感”を調整できます。",
  guideHeading: "シーン別ガイド",
  guides: [
    {
      title: "日常の一言",
      bullets: ["基本の魚でサラッと", "短文 + 1つが読みやすい"],
      recommend: "おすすめ: <+))><<  ∈(・◎・)∋",
    },
    {
      title: "夏・海の投稿",
      bullets: ["特殊文字や絵文字で盛る", "写真と合わせると映える"],
      recommend: "おすすめ: 🐟<+)))><<  ✨∈(ﾟ◎ﾟ)∋✨",
    },
    {
      title: "かわいさ重視",
      bullets: ["金魚/かわいい魚を選ぶ", "連投しすぎないと可愛い"],
      recommend: "おすすめ: <゜)))彡  くコ:彡",
    },
    {
      title: "ネタ（フグ）",
      bullets: ["驚きや膨らむ表現に", "使いすぎると強いので注意"],
      recommend: "おすすめ: ∈(ﾟ◎ﾟ)∋  ∈( ⊙_________ ⊙)∋",
    },
  ],
  cultureHeading: "魚顔文字は“ゆるい季節感”が出る",
  cultureBody:
    "魚は海・夏・ごはんなどの連想が強く、短い文章でも季節感や雰囲気を足しやすいモチーフです。魚顔文字は、ちょっとした遊び心を出したいときに便利です。",
  cultureCards: [
    { title: "雰囲気", description: "夏・海っぽさを足せる。" },
    { title: "ネタ", description: "フグ系で驚きも表現できる。" },
    { title: "可愛い", description: "金魚や小さめの魚が使いやすい。" },
  ],
  tipsHeading: "すぐ使える例文",
  tips: [
    {
      title: "投稿に添える",
      body: "一言に魚を足すとテーマが伝わります。",
      example: "例: 今日は水族館！ <゜)))彡",
    },
    {
      title: "ごはん",
      body: "魚料理の感想に。",
      example: "例: お魚おいしい 🐟<+)))><<",
    },
    {
      title: "驚き",
      body: "フグで驚きを表現。",
      example: "例: まじで！？ ∈(ﾟ◎ﾟ)∋",
    },
  ],
};

export const fishKaomojiFaqContent: KaomojiFaqProps = {
  heading: "よくある質問（FAQ）",
  subheading: "魚顔文字、迷ったらここだけ見ればOK。",
  items: [
    {
      question: "魚顔文字はどうやってコピーできますか？",
      answer:
        "一覧から好きな魚顔文字をクリックするとコピーできます。あとはLINEやSNSなどに貼り付けるだけです。",
    },
    {
      question: "文字化けしにくいのはどれ？",
      answer:
        "環境によっては特殊文字や絵文字の見え方が変わることがあります。心配なときは、基本の魚（<+))><< など）を選ぶと安心です。",
    },
    {
      question: "金魚と魚の違いは？",
      answer:
        "金魚系は『<゜)))彡』のような形が多く、夏・お祭りっぽい雰囲気に合います。用途に合わせて選んでください。",
    },
    {
      question: "タグは何のためにありますか？",
      answer:
        "検索用の目印です。『金魚』『フグ』などで絞り込んで探せます。",
    },
  ],
};

export const fishKaomojiGroups: KaomojiCollectionGroup[] = [
  {
    title: "基本の魚",
    items: [
      { kaomoji: ">°))))彡", tags: ["基本","シンプル","右向き","泳ぐ"] },
      { kaomoji: "<°)))彡", tags: ["基本","シンプル","左向き","泳ぐ"] },
      { kaomoji: "🐟三三", tags: ["絵文字","泳ぐ","シンプル"] },
      { kaomoji: "～🐟～～～", tags: ["絵文字","泳ぐ","波"] },
      { kaomoji: "🐟🐟🐟", tags: ["絵文字","群れ","シンプル"] },
      { kaomoji: "<・ )))><<", tags: ["基本","目付き","左向き"] },
      { kaomoji: "🐟( '-' 🐟)ｻｶﾅﾁｬﾝ", tags: ["絵文字","可愛い","テキスト付き"] },
      { kaomoji: "ζ°)))彡", tags: ["基本","特殊文字","泳ぐ"] },
      { kaomoji: "(っ'-')╮ =͟͟͞͞🐟ﾌﾞｫﾝ", tags: ["絵文字","投げる","アクション"] },
      { kaomoji: "<゜)))彡", tags: ["基本","目付き","左向き"] },
      { kaomoji: "🐟≡🐟≡🐟", tags: ["絵文字","群れ","泳ぐ"] },
      { kaomoji: "<+ ))><<", tags: ["基本","十字目","左向き"] },
      { kaomoji: "🐟🐠🐡", tags: ["絵文字","海の生き物","カラフル"] },
      { kaomoji: "<_)))彡", tags: ["基本","眠い","左向き"] },
      { kaomoji: "～～🐟～～🐟～～", tags: ["絵文字","泳ぐ","二匹"] },
      { kaomoji: ">_)))彡", tags: ["基本","眠い","右向き"] },
      { kaomoji: ">°)))彡", tags: ["基本","シンプル","右向き"] },
      { kaomoji: "（：。）ミ", tags: ["基本","縦向き","シンプル"] },
      { kaomoji: "くコ:彡", tags: ["基本","イカ風","人気","シンプル"] },
      { kaomoji: "Ｃ：。ミ", tags: ["基本","縦向き","カーブ"] },
      { kaomoji: "＜コ：ミ", tags: ["基本","縦向き","角張り"] },
      { kaomoji: "<ニ：ミ", tags: ["基本","縦向き","二本線"] },
      { kaomoji: "<))彡", tags: ["基本","短い","左向き"] },
      { kaomoji: ">)))彡", tags: ["基本","短い","右向き"] },
      { kaomoji: ">゜彡", tags: ["基本","目付き","右向き","短い"] },
      { kaomoji: "＞°))))彡", tags: ["基本","長い","右向き","全角"] },
      { kaomoji: ">^)))<～～", tags: ["泳ぐ","波付き","動的"] },
      { kaomoji: "♪ ε=>`)))>ﾟ)))彡~~", tags: ["泳ぐ","音符付き","楽しい","群れ"] },
      { kaomoji: "゜~>゜))><<", tags: ["泳ぐ","波線","ゆったり"] },
      { kaomoji: "～ヽ。 }＼／ ⌒ ヾ、 /彡r､ ･∇･) ﾚ～", tags: ["泳ぐ","複雑","アート風"] },
      { kaomoji: "('-' ﾐэ )Э ~", tags: ["泳ぐ","波付き","シンプル"] },
      { kaomoji: "('ω' っ )３", tags: ["泳ぐ","速い","急いで"] },
      { kaomoji: "∈(ﾟ◎ﾟ)∋))))))))))))))))))3", tags: ["ウナギ","長い","くねくね"] },
      { kaomoji: "～・_・～", tags: ["ナマズ","ひげ","シンプル"] },
      { kaomoji: "～(ﾟ ・_・ ﾟ)～", tags: ["ナマズ","ひげ","顔付き"] },
      { kaomoji: ">ﾟ))))))))))))))))>=<", tags: ["サンマ","細長い","リアル"] },
      { kaomoji: "l>┼┼(.,,ﾟДﾟ)", tags: ["魚の骨","食べられた","ユーモア"] },
      { kaomoji: ">゜)++++<<<<", tags: ["魚の骨","シンプル","骨格"] },
      { kaomoji: "∽('△')∽", tags: ["正面","三角口","ユニーク"] },
      { kaomoji: "≫('♀')≪", tags: ["正面","メス記号","特殊"] },
      { kaomoji: "≫('∀')≪", tags: ["正面","笑顔","楽しい"] },
      { kaomoji: "<º))))><", tags: ["スタイル","度記号","ユニーク"] },
      { kaomoji: "<•))＞◁", tags: ["スタイル","ダイヤ尾","特殊"] },
      { kaomoji: "<•)))))><", tags: ["スタイル","長い","詳細"] },
      { kaomoji: "<Θ )))><<", tags: ["スタイル","シータ","ギリシャ文字"] },
      { kaomoji: "<*)) >>=<", tags: ["スタイル","星目","矢印尾"] },
      { kaomoji: "(Q )) ><ヨヨ", tags: ["遊び心","ヨーヨー","ユーモア"] },
      { kaomoji: "(゜))<<*)))", tags: ["遊び心","二匹","並ぶ"] },
      { kaomoji: "<*)) »=<", tags: ["遊び心","矢印","動的"] },
      { kaomoji: "><((((●ﾟ<", tags: ["遊び心","黒目","特徴的"] },
      { kaomoji: "><((((_ﾟ< >ﾟ_)))><", tags: ["遊び心","向かい合う","二匹"] },
      { kaomoji: "ζ`))))))<", tags: ["遊び心","ゼータ","ギリシャ文字"] },
      { kaomoji: "[<+))>« <*))>=<]", tags: ["群れ","二匹","囲み"] },
      { kaomoji: ">゜))))><", tags: ["群れ","向かい合う","シンプル"] },
      { kaomoji: "~(=^･ω･^)ﾍ >ﾟ)))彡", tags: ["猫付き","獲物","可愛い"] },
      { kaomoji: "~(=^･･^)ﾉ>ﾟ)##)彡", tags: ["猫付き","捕まえる","アクション"] },
      { kaomoji: "さかなクンฅ(⊙Д⊙\"\")ｷﾞ", tags: ["さかなクン","キャラクター","有名"] },
    ],
  },
  {
    title: "特殊文字🐟",
    items: [
      { kaomoji: "𓆝𓆟𓆜𓆞𓆡", tags: ["装飾","特殊文字","人気","セット"] },
      { kaomoji: "𓆛𓆜𓆝𓆞𓆟", tags: ["装飾","特殊文字","バリエーション"] },
      { kaomoji: "𓆡𓆜𓇼𓈒𓆉", tags: ["装飾","特殊文字","海洋セット"] },
      { kaomoji: "𓆡 ⭒ㅤ𓈒ㅤׂ", tags: ["装飾","星付き","キラキラ"] },
      { kaomoji: "𓇼 ⋆｡˚ 𓆝⋆｡˚ 𓇼", tags: ["装飾","星付き","対称"] },
      { kaomoji: "𓆝", tags: ["特殊文字","単体","装飾用"] },
      { kaomoji: "𓆟", tags: ["特殊文字","単体","装飾用"] },
      { kaomoji: "𓆜", tags: ["特殊文字","単体","装飾用"] },
      { kaomoji: "𓆞", tags: ["特殊文字","単体","装飾用"] },
      { kaomoji: "𓆡", tags: ["特殊文字","単体","装飾用"] },
      { kaomoji: "𓆛", tags: ["特殊文字","単体","装飾用"] },
      { kaomoji: "𓇼", tags: ["特殊文字","貝","海洋"] },
      { kaomoji: "𓈒", tags: ["特殊文字","波","海洋"] },
      { kaomoji: "𓆉", tags: ["特殊文字","亀","海洋"] },
    ],
  },
  {
    title: "金魚",
    items: [
      { kaomoji: "＜・∋巛", tags: ["金魚","尾びれ","優雅"] },
    ],
  },
  {
    title: "かわいい魚",
    items: [
      { kaomoji: "(°∀°ﾐэ)Э", tags: ["可愛い","顔付き","表情豊か"] },
      { kaomoji: "(ﾟ-ﾟﾐэ)Э", tags: ["可愛い","無表情","シンプル"] },
      { kaomoji: "ε( ε•o•)э。゜", tags: ["可愛い","驚き","バブル付き"] },
      { kaomoji: "(˙˘˙ ﾐэ)Э", tags: ["可愛い","満足","穏やか"] },
      { kaomoji: "ε( ε ˙³˙)з", tags: ["可愛い","キス顔","愛らしい"] },
      { kaomoji: "( °꒳°ﾐэ )Э", tags: ["可愛い","にっこり","幸せ"] },
      { kaomoji: "ε( ε ˙◁˙)з", tags: ["可愛い","ウインク","遊び心"] },
      { kaomoji: "(ω･ﾐэ )Э", tags: ["可愛い","オメガ口","個性的"] },
      { kaomoji: "є( 'Θ' )э", tags: ["可愛い","鳥風","ユニーク"] },
      { kaomoji: "('꒳​' ∋ )))<ｽｲｽｲ~", tags: ["可愛い","泳ぐ","アクション付き"] },
    ],
  },
  {
    title: "フグ🐡",
    items: [
      { kaomoji: "ε(＾‐＾)з", tags: ["フグ","膨らむ","可愛い"] },
      { kaomoji: "∈(ﾟ◎ﾟ)∋", tags: ["フグ","驚き","膨張"] },
      { kaomoji: "∈( 'Θ' )∋", tags: ["フグ","口","特徴的"] },
      { kaomoji: "∈( ⊙_________ ⊙)∋", tags: ["フグ","長い","伸びる"] },
    ],
  },
];
