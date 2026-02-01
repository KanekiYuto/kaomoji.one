import { CATEGORY_GROUPS } from "@/features/kaomoji/data/category-groups";

function normalizePath(input: string | undefined): string {
  const raw = (input ?? "").trim();
  if (!raw) return "";

  const withoutHash = raw.split("#", 1)[0];
  const withoutQuery = withoutHash.split("?", 1)[0];

  try {
    if (/^https?:\/\//i.test(withoutQuery)) {
      const url = new URL(withoutQuery);
      return url.pathname === "/" ? "/" : url.pathname.replace(/\/+$/, "");
    }
  } catch {
    // ignore parsing errors and fall through to path normalization
  }

  if (withoutQuery === "/") return "/";
  return withoutQuery.replace(/\/+$/, "");
}

export type KaomojiCategoryMeta = {
  href: string;
  label: string;
  sample: string;
  description: string;
};

function getAllCategoryItems(): KaomojiCategoryMeta[] {
  const byHref = new Map<string, KaomojiCategoryMeta>();
  for (const group of CATEGORY_GROUPS) {
    for (const item of group.items) {
      byHref.set(item.href, item);
    }
  }
  return Array.from(byHref.values());
}

export function getRecommendedKaomojiCategories(
  currentPath: string | undefined,
  limit = 6
): KaomojiCategoryMeta[] {
  const current = normalizePath(currentPath);
  const items = getAllCategoryItems().filter((item) => item.href !== current);
  return items.slice(0, Math.max(0, limit));
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
  const current = normalizePath(currentPath);
  const items = getAllCategoryItems().filter((item) => item.href !== current);
  return sampleWithoutReplacement(items, Math.max(0, limit), rng);
}
