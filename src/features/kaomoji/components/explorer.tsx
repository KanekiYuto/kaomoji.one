"use client";

import * as React from "react";
import { Search } from "lucide-react";

import type { KaomojiCollectionGroup } from "@/features/kaomoji/types";
import { CopyButton } from "@/features/kaomoji/components/copy-button";
import { Card, CardContent } from "@/components/ui/card";
import { Empty } from "@/components/ui/empty";

export type KaomojiExplorerProps = {
  groups: KaomojiCollectionGroup[];
  searchPlaceholder?: string;
  allLabel?: string;
  groupCountSuffix?: string;
  totalPrefix?: string;
  totalSuffix?: string;
  emptyTitle?: string;
  emptyDescription?: string;
};

function normalize(value: string) {
  return value.trim().toLowerCase();
}

export function KaomojiExplorer({
  groups,
  searchPlaceholder = "顔文字やタグを検索…",
  allLabel = "すべて",
  groupCountSuffix = "個の顔文字",
  totalPrefix = "表示：",
  totalSuffix = "個",
  emptyTitle = "見つかりませんでした",
  emptyDescription = "キーワードやカテゴリを変えて、もう一度お試しください。",
}: KaomojiExplorerProps) {
  const [query, setQuery] = React.useState("");
  const [activeCategory, setActiveCategory] = React.useState<string>("__all__");

  const categories = React.useMemo(
    () => groups.map((group) => group.title),
    [groups]
  );

  const filteredGroups = React.useMemo(() => {
    const q = normalize(query);

    return groups
      .filter(
        (group) => activeCategory === "__all__" || group.title === activeCategory
      )
      .map((group) => {
        if (!q) return group;

        const items = group.items.filter((item) => {
          const hay = [item.kaomoji, ...(item.tags ?? [])].join(" ").toLowerCase();
          return hay.includes(q);
        });

        return { ...group, items };
      })
      .filter((group) => group.items.length > 0);
  }, [activeCategory, groups, query]);

  const totalCount = React.useMemo(
    () => filteredGroups.reduce((sum, group) => sum + group.items.length, 0),
    [filteredGroups]
  );

  return (
    <section className="space-y-6">
      <div className="space-y-5">
        <div className="relative">
          <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder={searchPlaceholder}
            className="flex h-10 w-full rounded-md border border-input bg-background pl-10 pr-3 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          />
        </div>

        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setActiveCategory("__all__")}
            className={
              activeCategory === "__all__"
                ? "inline-flex items-center rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground"
                : "inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium text-foreground hover:bg-accent"
            }
          >
            {allLabel}
          </button>

          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={
                activeCategory === category
                  ? "inline-flex items-center rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground"
                  : "inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium text-foreground hover:bg-accent"
              }
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {totalCount === 0 ? (
        <Empty
          title={emptyTitle}
          description={emptyDescription}
          icon={<Search className="size-5 text-muted-foreground" />}
        />
      ) : (
        <>
          <div className="space-y-14">
            {filteredGroups.map((group) => (
              <section key={group.title} className="space-y-6">
                <div className="rounded-lg border bg-muted/30 p-5">
                  <h2 className="text-2xl font-bold text-foreground">{group.title}</h2>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {group.items.length}
                    {groupCountSuffix}
                  </p>
                </div>

                <div className="flex flex-wrap gap-3 md:gap-4">
                  {group.items.map((item, index) => (
                    <Card
                      key={`${group.title}:${index}`}
                      className="inline-flex items-center gap-0 rounded-2xl border-border py-0 shadow-none transition-colors hover:border-primary/30 hover:bg-accent/30"
                    >
                      <CardContent className="flex items-center gap-2 p-3">
                        <span
                          className="font-mono text-base leading-tight break-all md:text-lg"
                          title={item.kaomoji}
                        >
                          {item.kaomoji}
                        </span>
                        <CopyButton text={item.kaomoji} />
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>
            ))}
          </div>

          <div className="border-t pt-6 text-center text-sm text-muted-foreground">
            {totalPrefix}
            <span className="font-medium text-foreground">{totalCount}</span>
            {totalSuffix}
          </div>
        </>
      )}
    </section>
  );
}
