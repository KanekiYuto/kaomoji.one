import type { KaomojiWhyProps } from "@/features/kaomoji/types";

export function KaomojiWhy({
  heading,
  subheading,
  guideHeading,
  guides,
  cultureHeading,
  cultureBody,
  cultureCards,
  tipsHeading,
  tips,
}: KaomojiWhyProps) {
  return (
    <section className="space-y-8">
      <div className="space-y-2 text-center">
        <h2 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
          {heading}
        </h2>
        <p className="mx-auto max-w-2xl text-sm text-muted-foreground md:text-base">
          {subheading}
        </p>
      </div>

      <div className="mx-auto max-w-4xl space-y-8">
        <div className="relative overflow-hidden rounded-2xl border bg-background/80 p-6 md:p-8">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -top-24 right-6 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
          </div>

          <h3 className="relative mb-6 text-xl font-bold text-foreground">
            {guideHeading}
          </h3>

          <div className="relative grid gap-4 sm:grid-cols-2">
            {guides.map((guide) => (
              <div key={guide.title} className="rounded-xl border bg-muted/20 p-5">
                <div className="mb-3 flex items-center gap-2">
                  <span
                    aria-hidden="true"
                    className="inline-flex size-6 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-600"
                  >
                    ✓
                  </span>
                  <h4 className="font-medium text-foreground">{guide.title}</h4>
                </div>

                <ul className="space-y-2 text-sm text-muted-foreground">
                  {guide.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2">
                      <span className="mt-1 text-primary">•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-3 rounded-lg border bg-background/60 p-2 font-mono text-sm text-muted-foreground">
                  {guide.recommend}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border bg-background/80 p-6 md:p-8">
          <h3 className="mb-4 text-xl font-bold text-foreground">
            {cultureHeading}
          </h3>
          <p className="mb-4 leading-relaxed text-muted-foreground">{cultureBody}</p>

          <div className="grid gap-4 text-sm md:grid-cols-3">
            {cultureCards.map((card) => (
              <div key={card.title} className="rounded-xl border bg-muted/20 p-4">
                <h4 className="mb-2 font-medium text-foreground">{card.title}</h4>
                <p className="text-muted-foreground">{card.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border bg-background/80 p-6 md:p-8">
          <h3 className="mb-4 text-xl font-bold text-foreground">{tipsHeading}</h3>

          <div className="space-y-4">
            {tips.map((tip) => (
              <div key={tip.title} className="rounded-xl border bg-muted/10 p-4">
                <div className="border-l-4 border-primary/60 pl-4">
                  <h4 className="font-medium text-foreground">{tip.title}</h4>
                  <p className="mt-1 text-sm text-muted-foreground">{tip.body}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{tip.example}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
