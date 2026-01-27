import type { KaomojiCollectionGroup } from "@/features/kaomoji/types";
import { uniq } from "@/features/kaomoji/data/uniq";

export const cryKaomojiGroups: KaomojiCollectionGroup[] = [
  {
    title: "かわいい泣き顔",
    items: uniq([
      "(;ㅿ;)",
      "( ;ᯅ; )",
      "｡ﾟ(ﾟ´Д｀ﾟ)ﾟ｡",
      "(ಥ﹏ಥ)",
      "｡ﾟ(ﾟஇωஇﾟ)ﾟ｡",
      "｡°(°´ᯅ`°)°｡",
      "｡･ﾟ(ﾟ⊃ω⊂ﾟ)ﾟ･｡",
      "°‧°·(ฅдฅ｡)‧°·°",
      "｡ﾟ(´つω•`｡)ﾟ｡",
      "(´•̥ ω •̥` )",
    ]).map((kaomoji) => ({ kaomoji, tags: ["泣く", "かわいい"] })),
  },
  {
    title: "うるうる（涙がたまる）",
    items: uniq([
      "( இωஇ )",
      "(இωஇ)",
      "(｡இ﹏இ｡)",
      "(இдஇ`｡)",
      "(இ﹏இ`｡)",
      "(இдஇ; )",
      "｡ﾟ( ﾟஇωஇﾟ)ﾟ｡",
    ]).map((kaomoji) => ({ kaomoji, tags: ["うるうる", "涙"] })),
  },
  {
    title: "えーん（甘える/小泣き）",
    items: uniq([
      "(つд⊂)",
      "(つд⊂)ｴｰﾝ",
      "(´｡つД⊂ﾟ｡｀)",
      "･ﾟﾟ(p>д<q)ﾟﾟ･",
      "｡ﾟﾟ(´□`｡)°ﾟ｡",
      "(´Д⊂ヽ",
    ]).map((kaomoji) => ({ kaomoji, tags: ["えーん", "甘える"] })),
  },
  {
    title: "うわーん（大泣き）",
    items: uniq([
      "ｳﾜｧｧ━━｡ﾟ(ﾟ´Д｀ﾟ)ﾟ｡━━ﾝ!!",
      "｡･ﾟ･(ﾟ`д´ﾟ)･ﾟ･｡",
      "｡ﾟ(ﾟ´ω`ﾟ)ﾟ｡",
      "(ﾟ´Д｀ﾟ)ﾟ｡",
      "｡ﾟ(ﾟ´Ч`ﾟ)ﾟ｡",
    ]).map((kaomoji) => ({ kaomoji, tags: ["うわーん", "大泣き"] })),
  },
  {
    title: "しょんぼり（落ち込み）",
    items: uniq([
      "(´･_･`)",
      "(´；ω；`)",
      "(´；д；`)",
      "˃̣̣̥᷄⌓˂̣̣̥᷅",
      "( •︠ˍ•︡ )",
      "•﹏•",
    ]).map((kaomoji) => ({ kaomoji, tags: ["しょんぼり", "落ち込み"] })),
  },
];
