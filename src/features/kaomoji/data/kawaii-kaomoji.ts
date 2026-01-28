import type { KaomojiCollectionGroup } from "@/features/kaomoji/types";
import { uniq } from "@/features/kaomoji/data/uniq";

export const kawaiiKaomojiGroups: KaomojiCollectionGroup[] = [
  {
    title: "可愛い 顔 文字｜人気・定番",
    items: uniq([
      "(*´꒳`*)",
      "(｡•̀ᴗ-)✧",
      "(´｡• ᵕ •｡`)",
      "(๑>◡<๑)",
      "(≧▽≦)",
      "ꉂ(ˊᗜˋ*)",
      "(◕‿◕)",
      "⸜(*ˊᗜˋ*)⸝",
      "(*ﾉωﾉ)",
      "(*/ω＼*)",
    ]).map((kaomoji) => ({ kaomoji, tags: ["可愛い", "kawaii", "定番"] })),
  },
  {
    title: "照れ・てへ",
    items: uniq([
      "(ﾉ´ヮ`)ﾉ*: ･ﾟ",
      "(//∇//)",
      "(〃ﾉωﾉ)",
      "(*ﾉ∀`*)",
      "(///ω///)",
      "(๑´ڡ`๑)",
      "(๑>ᴗ<๑)",
      "(｡>﹏<｡)",
      "(´>ω<`)",
    ]).map((kaomoji) => ({ kaomoji, tags: ["可愛い", "照れ"] })),
  },
  {
    title: "ハート・好き",
    items: uniq([
      "(｡♥‿♥｡)",
      "(♡˙︶˙♡)",
      "(*˘︶˘*).｡.:*♡",
      "(´｡• ᵕ •｡`) ♡",
      "♡(｡- ω -)",
      "₍ᐢ •͈ ༝ •͈ ᐢ₎♡",
      "つ♡⊂",
      "(ღ˘⌣˘ღ)",
    ]).map((kaomoji) => ({ kaomoji, tags: ["可愛い", "ハート"] })),
  },
  {
    title: "動物（ねこ・くま・うさぎ）",
    items: uniq([
      "(=^･ω･^=)",
      "ฅ^•ﻌ•^ฅ",
      "(ฅ'ω'ฅ)",
      "ʕ•ﻌ•ʔ",
      "ʕ•ᴥ•ʔ",
      "(・x・)",
      "U・ᴥ・U",
      "(ᐢ ᵕ ᐢ)",
      "૮₍ ˃̵ᴗ˂̵ ₎ა",
    ]).map((kaomoji) => ({ kaomoji, tags: ["可愛い", "動物"] })),
  },
  {
    title: "ちいさめ（ミニ）",
    items: uniq([
      "ᐠ( ᐛ )ᐟ",
      "ʕっ•ᴥ•ʔっ",
      "ᕙ( ˙-˙ )ᕗ",
      "ᕦ(ò_óˇ)ᕤ",
      "ᐢ. .ᐢ",
      "ᐡ•͈ ·̫ •͈ᐡ",
      "ᐠ( ᐢ ᵕ ᐢ )ᐟ",
    ]).map((kaomoji) => ({ kaomoji, tags: ["可愛い", "ミニ"] })),
  },
];
