import type {
  KaomojiFaqProps,
  KaomojiHeroProps,
  KaomojiWhatProps,
  KaomojiWhyProps,
} from "@/features/kaomoji/types";

export const kimoiKaomojiHeroContent: KaomojiHeroProps = {
  title: "キモい顔文字一覧",
  kaomoji: "(ಠ_ಠ)",
  subtitle: "気持ち悪い・ドン引き・ゾワゾワ…“うわ…”を表現できる顔文字をコピペ",
  description:
    "キモい顔文字（気持ち悪い顔文字 / Kaomoji）は、言葉にしにくい「うわ…」「それは無理」「引く」をやわらかく（たまに強めに）伝えられる表現です。LINEやSNSの返信に、コピペでサッと使えます。",
  primaryCta: { href: "#list", label: "顔文字を探す" },
  secondaryCta: { href: "/", label: "ホームへ" },
};

export const kimoiKaomojiWhatContent: KaomojiWhatProps = {
  heading: "キモい顔文字（Kaomoji）とは？",
  intro:
    "キモい顔文字は、「気持ち悪い」「引いた」「ゾワゾワする」などのリアクションを、テキストだけで表現する顔文字です。強い言い方を避けたいときは“ジト目系”、あえてインパクトを出したいときは“ホラー系”が便利。",
  usageHeading: "使えるシーン",
  usageItems: [
    "冗談へのツッコミ：笑いに変えて、角を立てにくくする",
    "軽く距離を置きたいとき：やんわりと「無理」を伝える",
    "びっくり・ゾッとしたとき：怖さや鳥肌を短く表現する",
    "友だち同士のノリ：クセ強リアクションで盛り上げる",
    "自虐・黒歴史：自分のミスを“うわ…”で締める",
  ],
  typesHeading: "キモい顔文字の種類",
  types: [
    {
      title: "ドン引き系",
      description: "本気で引いてる感を、短く伝える。返事が重くならないのが強み。",
      example: "例：(・_・;)  (；・∀・)  ((( ；ﾟДﾟ)))",
    },
    {
      title: "ゾワゾワ・ホラー系",
      description: "鳥肌・恐怖・違和感を演出。インパクト重視のリアクションに。",
      example: "例：(ﾟдﾟ)  (´◉◞౪◟◉)  (✧≖‿ゝ≖)",
    },
    {
      title: "ジト目・ねっとり系",
      description: "言葉を減らして圧を出せる。相手に“察して”を促すときに。",
      example: "例：(￢_￢)  (눈_눈)  (¬_¬ )",
    },
    {
      title: "変顔・クセ強系",
      description: "冗談っぽく変な空気を作る。ノリの良い会話に相性◎。",
      example: "例：( ͡° ͜ʖ ͡°)  (☉_☉)  (☠_☠)",
    },
  ],
  featuresHeading: "雰囲気が出る“パーツ”",
  features: [
    {
      symbol: "¬ ￢",
      title: "疑い・ジト目",
      description: "うさんくさい／引いてるニュアンスが出る定番パーツ。",
    },
    {
      symbol: "；",
      title: "冷や汗",
      description: "気まずさや“うわ…”感を足して、柔らかい引きにできる。",
    },
    {
      symbol: "ﾟ",
      title: "驚き・ゾワゾワ",
      description: "鳥肌や驚きの強さを上げて、ホラー感を演出。",
    },
    {
      symbol: "◉",
      title: "不気味目",
      description: "インパクト特化。ネタ寄りの恐怖や違和感に。",
    },
  ],
};

export const kimoiKaomojiWhyContent: KaomojiWhyProps = {
  heading: "キモい顔文字が便利な理由",
  subheading: "強い言葉を避けても、気持ちは伝わる。",
  guideHeading: "使い分けガイド",
  guides: [
    {
      title: "軽くツッコミたい",
      bullets: ["冗談っぽく返せる", "相手を傷つけにくい"],
      recommend: "おすすめ：(・_・;)  (；・∀・)",
    },
    {
      title: "ちゃんと引いてる",
      bullets: ["言葉を増やさず圧が出る", "無理ラインを示せる"],
      recommend: "おすすめ：(￢_￢)  (눈_눈)",
    },
    {
      title: "ゾッとした・怖い",
      bullets: ["鳥肌や違和感を短く表現", "ホラー演出ができる"],
      recommend: "おすすめ：(ﾟдﾟ)  (´◉◞౪◟◉)",
    },
    {
      title: "ネタで盛り上げたい",
      bullets: ["クセ強リアクションで笑いに", "空気を変えられる"],
      recommend: "おすすめ：( ͡° ͜ʖ ͡°)  (☞ﾟヮﾟ)☞",
    },
  ],
  cultureHeading: "“キモい”の言い換えとして",
  cultureBody:
    "「キモい」は強い言葉になりやすい一方、会話では“冗談”や“ニュアンス”として使われることもあります。顔文字を挟むことで、トーンを調整しやすくなり、攻撃的に見えにくくできます。",
  cultureCards: [
    { title: "角が取れる", description: "短い一言でも、表情があると柔らかく見える。" },
    { title: "伝わりやすい", description: "驚き・引き・ゾワゾワが一目で分かる。" },
    { title: "使い分けできる", description: "ジト目〜ホラーまで、強さを調整できる。" },
  ],
  tipsHeading: "上手な使い方",
  tips: [
    {
      title: "強い言葉の前に置く",
      body: "ストレートな否定がきついとき、顔文字でトーンを落とせる。",
      example: "例：「それはちょっと… (；一_一)」",
    },
    {
      title: "関係性に合わせて強さ調整",
      body: "仕事や初対面ではジト目系、仲良い相手はネタ系が無難。",
      example: "例：「うーん… (￢_￢)」",
    },
    {
      title: "相手を傷つけない言い方に",
      body: "“キモい”が相手に向くときは、言葉を選ぶのが安全。",
      example: "例：「その話、ちょっとゾワッとした… (ﾟдﾟ)」",
    },
  ],
};

export const kimoiKaomojiFaqContent: KaomojiFaqProps = {
  heading: "よくある質問（FAQ）",
  subheading: "キモい顔文字を、ちょうどよく使う。",
  items: [
    {
      question: "キモい顔文字は失礼になりませんか？",
      answer:
        "相手や場面によります。強い否定に見えることがあるので、仲の良い相手との冗談や、自分の感想として使うのが安全です。迷う場合はジト目系など弱めを選ぶのがおすすめです。",
    },
    {
      question: "LINEやX（Twitter）で文字化けしませんか？",
      answer:
        "多くは問題なく表示されますが、環境によって見え方が変わる場合があります。投稿前に一度貼って確認してください。",
    },
    {
      question: "どれが“弱め”で使いやすいですか？",
      answer:
        "まずは「(・_・;)」「(；・∀・)」「(￢_￢)」あたりが使いやすいです。ホラー系はインパクトが強いので、ノリが合う相手向けです。",
    },
    {
      question: "商用でも使えますか？",
      answer:
        "はい。SNS・ブログ・広告などにも利用できます。ただし、顔文字そのものを商品として販売する行為はお控えください。",
    },
  ],
};

