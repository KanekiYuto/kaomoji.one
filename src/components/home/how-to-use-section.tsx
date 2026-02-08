import { ClipboardPaste, MousePointerClick, Sparkles } from "lucide-react";

import type { HomeHowToUseContent } from "@/features/kaomoji/types";

type StepUI = {
  visual: React.ReactNode;
  visualClassName: string;
};

function resolveStepUI(key: HomeHowToUseContent["steps"][number]["key"], visual?: string): StepUI {
  switch (key) {
    case "choose":
      return {
        visual: <span className="font-mono text-2xl">{visual ?? "（´∀`）"}</span>,
        visualClassName: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
      };
    case "click":
      return {
        visual: <MousePointerClick className="size-7" aria-hidden="true" />,
        visualClassName:
          "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
      };
    case "paste":
      return {
        visual: <ClipboardPaste className="size-7" aria-hidden="true" />,
        visualClassName: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
      };
    case "enjoy":
      return {
        visual: <Sparkles className="size-7" aria-hidden="true" />,
        visualClassName: "bg-violet-500/10 text-violet-600 dark:text-violet-400",
      };
  }
}

export function HowToUseSection({ content }: { content: HomeHowToUseContent }) {
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

        <div className="mt-10 grid gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-4">
          {content.steps.map((step) => {
            const ui = resolveStepUI(step.key, step.visual);
            return (
            <div
              key={step.key}
              className="relative overflow-hidden rounded-2xl border bg-background/40 p-6"
            >
              <div className="flex items-start justify-between gap-3">
                <div
                  className={[
                    "flex size-14 items-center justify-center rounded-2xl ring-1 ring-border",
                    ui.visualClassName,
                  ].join(" ")}
                >
                  {ui.visual}
                </div>
                <div className="text-xs font-semibold tracking-widest text-muted-foreground">
                  {step.step}
                </div>
              </div>

              <h3 className="mt-5 text-base font-semibold text-foreground">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
