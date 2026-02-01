export type KaomojiCategoryMeta = {
  href: string;
  label: string;
  sample: string;
  description: string;
};

export const KAOMOJI_CATEGORIES: KaomojiCategoryMeta[] = [
  {
    href: "/cute-kaomoji",
    label: "かわいい",
    sample: "٩꒰｡•◡•｡꒱۶",
    description: "もこもこ・動物・ハート系など、ふわっと可愛い顔文字まとめ。",
  },
  {
    href: "/kawaii-kaomoji",
    label: "kawaii",
    sample: "(｡♥‿♥｡)",
    description: "ハート・動物・照れ顔など。可愛い 顔 文字（kawaii）をまとめてコピペ。",
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
    description: "激しく泣く・大泣き表情。号泣顔文字をまとめてコピペ。",
  },
  {
    href: "/doya-kaomoji",
    label: "ドヤ顔",
    sample: "(｀・ω・´)✧",
    description: "得意げ・キメ顔で自信をアピール。ドヤ顔顔文字をまとめてコピペ。",
  },
  {
    href: "/kimoi-kaomoji",
    label: "キモい",
    sample: "(ಠ_ಠ)",
    description: "気持ち悪い・ドン引き・ゾワゾワ（ホラー）まで。キモい顔文字をコピペ。",
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
    description: "夢かわいい・パステル・天使・キラキラ。ゆめかわ顔文字をまとめてコピペ。",
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
    description: "毛並み・ぬいぐるみ感をふんわり表現。もふもふ・もこもこ系をまとめてコピペ。",
  },
  {
    href: "/biyoon-kaomoji",
    label: "びよーん",
    sample: "o<(´ω`*)>o",
    description: "伸ばす・引っ張る・もちもち。びよーん系の動作顔文字をまとめてコピペ。",
  },
];

const POPULAR: string[] = [
  "/cute-kaomoji",
  "/cry-kaomoji",
  "/gougoku-kaomoji",
  "/doya-kaomoji",
  "/kawaii-kaomoji",
  "/iphone-kaomoji",
  "/yumekawa-kaomoji",
];

const RELATED_BY_ROUTE: Record<string, string[]> = {
  "/cute-kaomoji": [
    "/kawaii-kaomoji",
    "/yumekawa-kaomoji",
    "/fuwafuwa-kaomoji",
    "/mofumofu-kaomoji",
    "/cry-kaomoji",
    "/doya-kaomoji",
  ],
  "/kawaii-kaomoji": [
    "/cute-kaomoji",
    "/yumekawa-kaomoji",
    "/fuwafuwa-kaomoji",
    "/mofumofu-kaomoji",
    "/cry-kaomoji",
    "/doya-kaomoji",
  ],
  "/cry-kaomoji": [
    "/gougoku-kaomoji",
    "/fuwafuwa-kaomoji",
    "/mofumofu-kaomoji",
    "/cute-kaomoji",
    "/yumekawa-kaomoji",
    "/kawaii-kaomoji",
    "/iphone-kaomoji",
  ],
  "/gougoku-kaomoji": [
    "/cry-kaomoji",
    "/fuwafuwa-kaomoji",
    "/mofumofu-kaomoji",
    "/cute-kaomoji",
    "/kawaii-kaomoji",
    "/iphone-kaomoji",
  ],
  "/doya-kaomoji": [
    "/kimoi-kaomoji",
    "/cute-kaomoji",
    "/kawaii-kaomoji",
    "/cry-kaomoji",
    "/gougoku-kaomoji",
    "/iphone-kaomoji",
    "/biyoon-kaomoji",
  ],
  "/kimoi-kaomoji": [
    "/doya-kaomoji",
    "/cry-kaomoji",
    "/gougoku-kaomoji",
    "/iphone-kaomoji",
    "/cute-kaomoji",
    "/kawaii-kaomoji",
    "/biyoon-kaomoji",
  ],
  "/iphone-kaomoji": [
    "/cute-kaomoji",
    "/cry-kaomoji",
    "/gougoku-kaomoji",
    "/doya-kaomoji",
    "/kawaii-kaomoji",
    "/yumekawa-kaomoji",
    "/fuwafuwa-kaomoji",
  ],
  "/yumekawa-kaomoji": [
    "/cute-kaomoji",
    "/kawaii-kaomoji",
    "/fuwafuwa-kaomoji",
    "/mofumofu-kaomoji",
    "/cry-kaomoji",
    "/doya-kaomoji",
  ],
  "/fuwafuwa-kaomoji": [
    "/mofumofu-kaomoji",
    "/cute-kaomoji",
    "/yumekawa-kaomoji",
    "/cry-kaomoji",
    "/kawaii-kaomoji",
    "/iphone-kaomoji",
  ],
  "/mofumofu-kaomoji": [
    "/fuwafuwa-kaomoji",
    "/cute-kaomoji",
    "/yumekawa-kaomoji",
    "/cry-kaomoji",
    "/kawaii-kaomoji",
    "/iphone-kaomoji",
  ],
  "/biyoon-kaomoji": [
    "/cute-kaomoji",
    "/kawaii-kaomoji",
    "/iphone-kaomoji",
    "/doya-kaomoji",
    "/cry-kaomoji",
    "/yumekawa-kaomoji",
  ],
};

export function getRecommendedKaomojiCategories(
  currentPath: string | undefined,
  limit = 6
): KaomojiCategoryMeta[] {
  const current = (currentPath ?? "").trim();
  const byHref = new Map(KAOMOJI_CATEGORIES.map((item) => [item.href, item]));

  const preferred = (RELATED_BY_ROUTE[current] ?? []).filter((href) => href !== current);
  const fallback = POPULAR.filter((href) => href !== current);

  const selected: string[] = [];
  for (const href of preferred) {
    if (!byHref.has(href)) continue;
    if (selected.includes(href)) continue;
    selected.push(href);
    if (selected.length >= limit) break;
  }

  if (selected.length < limit) {
    for (const href of fallback) {
      if (!byHref.has(href)) continue;
      if (selected.includes(href)) continue;
      selected.push(href);
      if (selected.length >= limit) break;
    }
  }

  if (selected.length < limit) {
    for (const href of KAOMOJI_CATEGORIES.map((item) => item.href)) {
      if (href === current) continue;
      if (selected.includes(href)) continue;
      selected.push(href);
      if (selected.length >= limit) break;
    }
  }

  return selected.map((href) => byHref.get(href)).filter(Boolean) as KaomojiCategoryMeta[];
}

function sampleWithoutReplacement<T>(items: readonly T[], count: number, rng: () => number) {
  const pool = items.slice();
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    const tmp = pool[i];
    pool[i] = pool[j];
    pool[j] = tmp;
  }
  return pool.slice(0, Math.max(0, Math.min(count, pool.length)));
}

export function pickRecommendedKaomojiCategories(
  currentPath: string | undefined,
  limit = 6,
  rng: () => number = Math.random
): KaomojiCategoryMeta[] {
  const current = (currentPath ?? "").trim();
  const byHref = new Map(KAOMOJI_CATEGORIES.map((item) => [item.href, item]));

  const preferredHrefs = (RELATED_BY_ROUTE[current] ?? []).filter((href) => href !== current);
  const preferred = preferredHrefs
    .map((href) => byHref.get(href))
    .filter(Boolean) as KaomojiCategoryMeta[];

  const secondaryHrefs = [
    ...POPULAR,
    ...KAOMOJI_CATEGORIES.map((item) => item.href),
  ].filter((href) => href !== current && !preferredHrefs.includes(href));
  const secondary = secondaryHrefs
    .map((href) => byHref.get(href))
    .filter(Boolean) as KaomojiCategoryMeta[];

  const primaryCount = Math.min(Math.max(0, limit - 2), preferred.length);
  const pickedPrimary = sampleWithoutReplacement(preferred, primaryCount, rng);

  const remaining = limit - pickedPrimary.length;
  const pickedSecondary = sampleWithoutReplacement(secondary, remaining, rng);

  return [...pickedPrimary, ...pickedSecondary].slice(0, limit);
}
