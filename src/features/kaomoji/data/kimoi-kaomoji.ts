import type { KaomojiCollectionGroup } from "@/features/kaomoji/types";
import { uniq } from "@/features/kaomoji/data/uniq";

export const kimoiKaomojiGroups: KaomojiCollectionGroup[] = [
  {
    title: "キモい顔文字｜定番",
    items: uniq([
      "(ಠ_ಠ)",
      "(；一_一)",
      "(눈_눈)",
      "(￢_￢)",
      "(¬_¬ )",
      "(；¬＿¬)",
      "(°_°)",
      "(；ﾟДﾟ)",
      "(；´Д｀)",
      "(；´∀｀)",
    ]).map((kaomoji) => ({ kaomoji, tags: ["キモい", "気持ち悪い", "定番"] })),
  },
  {
    title: "ドン引き・引いてる",
    items: uniq([
      "(・_・;)",
      "(；・∀・)",
      "(；￣Д￣)",
      "(；-_-)",
      "(；´_ゝ`)",
      "(；´Д`)ｳﾜ…",
      "((( ；ﾟДﾟ)))",
      "Σ(ﾟДﾟ；)",
      "(；ﾟдﾟ)",
    ]).map((kaomoji) => ({ kaomoji, tags: ["ドン引き", "引く"] })),
  },
  {
    title: "ゾワゾワ・ホラー",
    items: uniq([
      "(ﾟдﾟ)",
      "(ﾟＡﾟ;)",
      "(ﾟ∀ﾟ)",
      "(ﾟ∇ﾟ)",
      "(ﾟωﾟ)",
      "(´◉◞౪◟◉)",
      "(✧≖‿ゝ≖)",
      "( ⊙_⊙)",
      "(；ﾟдﾟ)",
    ]).map((kaomoji) => ({ kaomoji, tags: ["ホラー", "ゾワゾワ"] })),
  },
  {
    title: "変顔・クセ強",
    items: uniq([
      "( ͡° ͜ʖ ͡°)",
      "( ͡ಠ ͜ʖ ͡ಠ)",
      "(☉_☉)",
      "(☠_☠)",
      "(๑•̀ㅂ•́)و✧",
      "(≖_≖ )",
      "(☞ﾟヮﾟ)☞",
      "(づ｡◕‿‿◕｡)づ",
    ]).map((kaomoji) => ({ kaomoji, tags: ["変顔", "クセ強"] })),
  },
  {
    title: "ねっとり・ジト目",
    items: uniq([
      "(￢‿￢ )",
      "(ಠ‿ಠ)",
      "(¬‿¬ )",
      "(눈‿눈)",
      "(¬_¬ )",
      "(￢_￢)",
      "(¬､¬)",
      "(¬‿¬)",
    ]).map((kaomoji) => ({ kaomoji, tags: ["ジト目", "ねっとり"] })),
  },
];

