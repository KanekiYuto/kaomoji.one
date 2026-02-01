"use client";

import * as React from "react";
import Link from "next/link";
import { ChevronDown, ChevronRight, Heart, Search } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Empty } from "@/components/ui/empty";
import { cn } from "@/lib/utils";
import {
  CATEGORY_GROUPS as CATEGORY_GROUPS_DATA,
  type KaomojiCategoryGroup,
  type KaomojiCategoryLinkItem,
} from "@/features/kaomoji/data/category-groups";

type CategoryGroup = {
  icon: React.ReactNode;
} & KaomojiCategoryGroup;

type CategoryLinkItem = KaomojiCategoryLinkItem;

const ICON_BY_TITLE: Record<string, React.ReactNode> = {
  感情表現: <Heart className="size-4" />,
};

const CATEGORY_GROUPS: CategoryGroup[] = CATEGORY_GROUPS_DATA.map((group) => ({
  ...group,
  icon: ICON_BY_TITLE[group.title] ?? <Heart className="size-4" />,
}));

function normalize(value: string) {
  return value.trim().toLowerCase();
}

function CategoryGroupSection({ title, icon, items, defaultOpen }: CategoryGroup) {
  const [open, setOpen] = React.useState(defaultOpen ?? true);

  return (
    <div className="space-y-4">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="group flex w-full items-center gap-3 transition-opacity hover:opacity-80"
        aria-expanded={open}
      >
        <div className="text-muted-foreground">{icon}</div>
        <h2 className="text-2xl font-bold text-foreground md:text-3xl">{title}</h2>
        <span className="text-sm text-muted-foreground">({items.length})</span>
        <div className="h-px flex-1 bg-gradient-to-r from-border to-transparent" />
        <div
          className={cn(
            "flex size-8 items-center justify-center rounded-full bg-muted/60 transition-colors duration-300 group-hover:bg-muted",
            open ? "rotate-180" : "rotate-0"
          )}
        >
          <ChevronDown className="size-5 text-muted-foreground" />
        </div>
      </button>

      {open ? (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {items.map((item) => (
            <Link key={item.href} href={item.href} className="block h-full">
              <Card className="group h-full gap-0 border-border py-0 shadow-none transition-colors hover:border-primary/30 hover:bg-accent/30">
                <CardContent className="flex h-full flex-col p-4">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl font-mono">{item.sample}</span>
                    <span className="font-medium text-foreground group-hover:text-primary">
                      {item.label}
                    </span>
                    <ChevronRight className="ml-auto size-4 text-muted-foreground transition-colors group-hover:text-primary" />
                  </div>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      ) : null}
    </div>
  );
}

export function CategoryGroups() {
  const [query, setQuery] = React.useState("");

  const filteredGroups = React.useMemo(() => {
    const q = normalize(query);
    if (!q) return CATEGORY_GROUPS;

    return CATEGORY_GROUPS
      .map((group) => {
        const items = group.items.filter((item) => {
          const hay = [
            group.title,
            item.label,
            item.description,
            item.sample,
            item.href,
          ]
            .join(" ")
            .toLowerCase();
          return hay.includes(q);
        });

        return { ...group, items };
      })
      .filter((group) => group.items.length > 0);
  }, [query]);

  const totalCount = React.useMemo(
    () => filteredGroups.reduce((sum, group) => sum + group.items.length, 0),
    [filteredGroups]
  );

  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
        顔文字一覧
      </h2>
      <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
        絵文字の代わりに使える顔文字を、カテゴリ別に探してコピペできます。かわいい顔文字・泣く顔文字・ふわふわ/もふもふ・夢かわなど。
      </p>

      <div className="space-y-4">
        <div className="relative">
          <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="カテゴリを検索…"
            className="flex h-10 w-full rounded-md border border-input bg-background pl-10 pr-3 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          />
        </div>
        {query ? (
          <div className="text-sm text-muted-foreground">
            表示：<span className="font-medium text-foreground">{totalCount}</span>件
          </div>
        ) : null}
      </div>

      {totalCount === 0 ? (
        <Empty
          title="該当するカテゴリが見つかりません"
          description="キーワードを変えて、もう一度お試しください。"
          icon={<Search className="size-5 text-muted-foreground" />}
        />
      ) : (
        <div className="space-y-10">
          {filteredGroups.map((group) => (
            <CategoryGroupSection key={group.title} {...group} />
          ))}
        </div>
      )}
    </div>
  );
}
