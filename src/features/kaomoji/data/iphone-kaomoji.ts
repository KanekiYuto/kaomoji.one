import type { KaomojiCollectionGroup } from "@/features/kaomoji/types";
import { uniq } from "@/features/kaomoji/data/uniq";

export const iphoneKaomojiGroups: KaomojiCollectionGroup[] = [
  {
    title: "iPhoneで使いやすい｜定番",
    items: uniq([
      "(^_^)",
      "(´∀`)",
      "(・∀・)",
      "(^o^)",
      "(>_<)",
      "(T_T)",
      "＼(^o^)／",
      "(｀・ω・´)ゞ",
      "(；´Д｀)",
      "(・_・;)",
    ]).map((kaomoji) => ({ kaomoji, tags: ["iPhone", "定番"] })),
  },
  {
    title: "かわいい（シンプル）",
    items: uniq([
      "(*´꒳`*)",
      "(｡•̀ᴗ-)✧",
      "(´｡• ᵕ •｡`)",
      "(〃'▽'〃)",
      "(๑>◡<๑)",
      "(≧▽≦)",
      "(•‿•)",
      "(o^^o)",
    ]).map((kaomoji) => ({ kaomoji, tags: ["iPhone", "かわいい"] })),
  },
  {
    title: "泣く・しょんぼり",
    items: uniq([
      "(T_T)",
      "(;_;)",
      "(；＿；)",
      "(´；ω；`)",
      "(´・ω・｀)",
      "(._.)",
      "(´・_・`)",
      "(；一_一)",
    ]).map((kaomoji) => ({ kaomoji, tags: ["iPhone", "泣く"] })),
  },
  {
    title: "驚き・焦り",
    items: uniq([
      "(ﾟдﾟ)",
      "(；ﾟДﾟ)",
      "Σ(ﾟДﾟ；)",
      "(；・∀・)",
      "(°_°)",
      "(・・;)",
      "(・_・;)",
      "(@_@)",
    ]).map((kaomoji) => ({ kaomoji, tags: ["iPhone", "驚き"] })),
  },
  {
    title: "仕事・丁寧（控えめ）",
    items: uniq([
      "(｀・ω・´)ゞ",
      "(._.)",
      "(｀・ω・´)",
      "(ง •̀_•́)ง",
      "(^^ゞ",
      "(・_・)ゞ",
      "(｀_´)ゞ",
      "(。-`ω-)",
    ]).map((kaomoji) => ({ kaomoji, tags: ["iPhone", "丁寧"] })),
  },
];

