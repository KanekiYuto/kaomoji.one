import { Copy, Search, Smartphone } from "lucide-react";

import type { HomeFeaturesContent } from "@/features/kaomoji/content/home";

type FeatureItem = {
  title: string;
  description: string;
  icon: React.ReactNode;
  accentClassName: string;
};

function resolveFeatureUI(
  key: HomeFeaturesContent["items"][number]["key"]
): FeatureItem {
  switch (key) {
    case "copy":
      return {
        title: "一键复制",
        description: "",
        icon: <Copy className="size-8" aria-hidden="true" />,
        accentClassName: "text-blue-600 dark:text-blue-400",
      };
    case "categories":
      return {
        title: "按类别整理",
        description: "",
        icon: <Search className="size-8" aria-hidden="true" />,
        accentClassName: "text-emerald-600 dark:text-emerald-400",
      };
    case "mobile":
      return {
        title: "兼容移动设备",
        description: "",
        icon: <Smartphone className="size-8" aria-hidden="true" />,
        accentClassName: "text-violet-600 dark:text-violet-400",
      };
  }

  throw new Error(`Unknown feature key: ${key satisfies never}`);
}

export function FeaturesSection({ content }: { content: HomeFeaturesContent }) {
  return (
    <section>
      <div className="rounded-3xl border border-border/50 bg-card p-8 md:p-12">
        <div className="space-y-3 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            {content.heading}
          </h2>
          <p className="mx-auto max-w-2xl text-sm text-muted-foreground md:text-base">
            {content.subheading}
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3 md:gap-6">
          {content.items.map((item) => {
            const ui = resolveFeatureUI(item.key);
            return (
            <div
              key={item.key}
              className="group relative h-full overflow-hidden rounded-2xl border bg-background/40 p-6 transition-colors hover:border-primary/30 hover:bg-accent/20"
            >
              <div className="relative flex items-start gap-4">
                <div
                  className={[
                    "flex size-12 shrink-0 items-center justify-center rounded-xl",
                    "bg-muted/60 ring-1 ring-border",
                    "transition-transform duration-300 group-hover:-translate-y-0.5",
                    ui.accentClassName,
                  ].join(" ")}
                >
                  {ui.icon}
                </div>

                <div className="min-w-0">
                  <h3 className="text-lg font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
