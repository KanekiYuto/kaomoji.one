export type KaomojiCategoryLinkItem = {
  href: string;
  label: string;
  sample: string;
  description: string;
};

export type KaomojiCategoryGroup = {
  title: string;
  items: KaomojiCategoryLinkItem[];
  defaultOpen?: boolean;
};

export const CATEGORY_GROUPS: KaomojiCategoryGroup[] = [
  {
    title: "感情表現",
    defaultOpen: true,
    items: [
      {
        href: "/cute-kaomoji",
        label: "可愛い",
        sample: "٩꒰｡•◡•｡꒱۶",
        description: "もこもこ・動物・ハート系など、ふわっと可愛い顔文字まとめ。",
      },
      {
        href: "/kawaii-kaomoji",
        label: "可愛い",
        sample: "(｡♥‿♥｡)",
        description: "可愛い 顔 文字（kawaii）をまとめてコピペ。ハート・動物・照れ顔など。",
      },
      {
        href: "/cry-kaomoji",
        label: "泣く",
        sample: "(ಥ﹏ಥ)",
        description: "うるうる・えーん・大泣きまで。気持ちに合う泣き顔文字をコピペ。",
      },
      {
        href: "/gougoku-kaomoji",
        label: "号泣",
        sample: "(༎ຶ⌑༎ຶ)",
        description: "激しく泣く・大泣き表情。絵文字付き・かわいい号泣・シンプル系をコピペ。",
      },
      {
        href: "/doya-kaomoji",
        label: "ドヤ顔",
        sample: "(｀・ω・´)✧",
        description:
          "得意げ・キメ顔で自信をアピール。かわいいドヤ顔からキリッとした決め顔までコピペ。",
      },
      {
        href: "/kimoi-kaomoji",
        label: "キモい",
        sample: "(ಠ_ಠ)",
        description:
          "気持ち悪い・ドン引き・ゾワゾワ（ホラー）まで。キモい顔文字をまとめてコピペ。",
      },
      {
        href: "/iphone-kaomoji",
        label: "iPhone",
        sample: "(^_^)",
        description: "iPhoneでコピペしやすい顔文字まとめ。LINE/iMessage/SNSですぐ使える定番中心。",
      },
      {
        href: "/yumekawa-kaomoji",
        label: "ゆめかわ",
        sample: "꒰⑅•ᴗ•⑅꒱",
        description:
          "夢かわいい・パステル・天使・キラキラ。ふんわり可愛いゆめかわ顔文字をまとめてコピペ。",
      },
      {
        href: "/fuwafuwa-kaomoji",
        label: "ふわふわ",
        sample: "( ⁎ᵕᴗᵕ⁎ )",
        description: "癒し・優しさ・ほんわか。ふわふわ系の顔文字をまとめてコピペ。",
      },
      {
        href: "/mofumofu-kaomoji",
        label: "もふもふ",
        sample: "(ﾉ)•ω•(ヾ)",
        description:
          "毛並み・ぬいぐるみ感をふんわり表現。もふもふ・もこもこ系の顔文字をまとめてコピペ。",
      },
      {
        href: "/biyoon-kaomoji",
        label: "びよーん",
        sample: "o<(´ω`*)>o",
        description: "伸ばす・引っ張る・もちもち。びよーん系の動作顔文字をまとめてコピペ。",
      },
    ],
  },
  {
    title: "キャラクター系",
    defaultOpen: true,
    items: [
      {
        href: "/character-kaomoji",
        label: "キャラクター系",
        sample: "ฅ(^^ฅ)",
        description:
          "動物（うさぎ/くま）や特殊・装飾まで。キャラクター顔文字をまとめてコピペ。",
      },
      {
        href: "/anpanman-kaomoji",
        label: "アンパンマン",
        sample: "(● ̍̑⚈ ̍̑●)",
        description:
          "アンパンマンの丸い顔と赤いほっぺが特徴の顔文字。元気・可愛い・アクション系をまとめてチェック。",
      },
      {
        href: "/animal-kaomoji",
        label: "動物",
        sample: "(=^･ω･^=)",
        description:
          "猫・犬・熊・兎など動物の顔文字をまとめてチェック。かわいい動物の表情をコピペできます。",
      },
      {
        href: "/cat-kaomoji",
        label: "猫",
        sample: "ฅ^•ω•^ฅ",
        description:
          "猫/ねこ/ネコ顔文字まとめ。定番・特殊文字・ニャー・招き猫・ハート系までコピペ。",
      },
      {
        href: "/chiikawa-kaomoji",
        label: "ちいかわ",
        sample: "(՞ᵕ՞)",
        description:
          "ちいかわ風の顔文字まとめ。嬉しい・悲しい（わァ…）・愛などを検索してコピペ。",
      },
    ],
  },
];

