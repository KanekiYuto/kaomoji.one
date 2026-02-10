"use client";

import * as React from "react";
import { Search } from "lucide-react";

import type { KaomojiCollectionGroup } from "@/features/kaomoji/types";
import { CopyButton } from "@/features/kaomoji/components/copy-button";
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

  const pillClassName = React.useCallback(
    (isActive: boolean) =>
      isActive ? "k-explorer__pill k-explorer__pill--active" : "k-explorer__pill",
    []
  );

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
    <section className="k-explorer">
      <div className="k-explorer__top">
        <div className="k-explorer__search">
          <Search className="k-explorer__searchIcon" />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder={searchPlaceholder}
            className="k-explorer__input"
          />
        </div>

        <div className="k-explorer__pills">
          <button
            type="button"
            onClick={() => setActiveCategory("__all__")}
            className={pillClassName(activeCategory === "__all__")}
          >
            {allLabel}
          </button>

          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={pillClassName(activeCategory === category)}
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
          <div className="k-explorer__groups">
            {filteredGroups.map((group) => (
              <section key={group.title} className="k-explorer__group">
                <div className="k-explorer__groupHeader">
                  <h2 className="k-explorer__groupTitle">{group.title}</h2>
                  <p className="k-explorer__groupCount">
                    {group.items.length}
                    {groupCountSuffix}
                  </p>
                </div>

                <div className="k-explorer__items">
                  {group.items.map((item) => (
                    <div
                      key={`${group.title}:${item.kaomoji}`}
                      className="k-explorer__item"
                    >
                      <span className="k-explorer__itemText">{item.kaomoji}</span>
                      <CopyButton text={item.kaomoji} />
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>

          <div className="k-explorer__total">
            {totalPrefix}
            <span className="font-medium text-foreground">{totalCount}</span>
            {totalSuffix}
          </div>
        </>
      )}
    </section>
  );
}
