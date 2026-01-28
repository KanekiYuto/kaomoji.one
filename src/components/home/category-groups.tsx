"use client";

import * as React from "react";
import Link from "next/link";
import { ChevronDown, ChevronRight, Heart, Search } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Empty } from "@/components/ui/empty";
import { cn } from "@/lib/utils";

type CategoryLinkItem = {
  href: string;
  label: string;
  sample: string;
  description: string;
};

type CategoryGroup = {
  title: string;
  icon: React.ReactNode;
  items: CategoryLinkItem[];
  defaultOpen?: boolean;
};

const CATEGORY_GROUPS: CategoryGroup[] = [
  {
    title: "感情表現",
    icon: <Heart className="size-4" />,
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
        description:
          "iPhoneでコピペしやすい顔文字まとめ。LINE/iMessage/SNSですぐ使える定番中心。",
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
        description:
          "癒し・優しさ・ほんわか。ふわふわ系の顔文字をまとめてコピペ。",
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
        description:
          "伸ばす・引っ張る・もちもち。びよーん系の動作顔文字をまとめてコピペ。",
      },
    ],
  },
];

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
        かわいい顔文字・泣く顔文字・ふわふわ/もふもふ・夢かわなど、カテゴリ別に顔文字を探してコピペできます。
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
