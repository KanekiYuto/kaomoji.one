"use client";

import * as React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import {
  getRecommendedKaomojiCategories,
  pickRecommendedKaomojiCategories,
} from "@/features/kaomoji/recommendations";

export type RecommendedKaomojiSectionProps = {
  currentPath?: string;
  className?: string;
  title?: string;
  description?: string;
};

export function RecommendedKaomojiSection({
  currentPath,
  className,
  title = "おすすめ",
  description = "次に使いやすい顔文字カテゴリもチェック。",
}: RecommendedKaomojiSectionProps) {
  const [items, setItems] = React.useState(() =>
    getRecommendedKaomojiCategories(currentPath, 6)
  );

  React.useEffect(() => {
    const cryptoRng = () => {
      if (typeof crypto === "undefined" || !("getRandomValues" in crypto)) return Math.random();
      const buf = new Uint32Array(1);
      crypto.getRandomValues(buf);
      return buf[0] / 2 ** 32;
    };

    setItems(pickRecommendedKaomojiCategories(currentPath, 6, cryptoRng));
  }, [currentPath]);

  return (
    <section className={cn("space-y-6", className)}>
      <div className="space-y-2 text-center">
        <h2 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
          {title}
        </h2>
        <p className="mx-auto max-w-2xl text-sm text-muted-foreground md:text-base">
          {description}
        </p>
      </div>

      <div className="mx-auto grid max-w-4xl gap-4 md:grid-cols-2 lg:grid-cols-3">
        {items.map((item, index) => (
          <Link key={index} href={item.href} className="block h-full">
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

      <div className="text-center">
        <Link
          href="/#categories"
          className="inline-flex items-center justify-center rounded-md border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
        >
          すべてのカテゴリを見る
        </Link>
      </div>
    </section>
  );
}
