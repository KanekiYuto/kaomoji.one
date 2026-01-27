import type { KaomojiWhyProps } from "@/features/kaomoji/types";

export function HomeWhySection({
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
    <section>
      <div className="space-y-3 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          {heading}
        </h2>
        <p className="mx-auto max-w-2xl text-sm text-muted-foreground md:text-base">
          {subheading}
        </p>
      </div>

      <div className="mt-10 space-y-6">
        <div className="rounded-3xl border bg-gradient-to-br from-primary/5 via-background to-background p-6 md:p-8">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h3 className="text-lg font-semibold text-foreground md:text-xl">
              {guideHeading}
            </h3>
            <span className="rounded-full border bg-muted/40 px-3 py-1 text-xs font-medium text-muted-foreground">
              快速选择
            </span>
          </div>

          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {guides.map((guide) => (
              <div key={guide.title} className="rounded-2xl border bg-card/60 p-5">
                <div className="flex items-center gap-2">
                  <span
                    aria-hidden="true"
                    className="inline-flex size-6 items-center justify-center rounded-full bg-primary/10 text-primary"
                  >
                    ✓
                  </span>
                  <h4 className="font-medium text-foreground">{guide.title}</h4>
                </div>

                <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                  {guide.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2">
                      <span className="mt-1 size-1.5 shrink-0 rounded-full bg-primary/60" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-4 rounded-2xl border bg-background/60 p-3 font-mono text-sm text-muted-foreground">
                  {guide.recommend}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border bg-gradient-to-br from-muted/40 to-background p-6 md:p-8">
          <h3 className="text-lg font-semibold text-foreground md:text-xl">
            {cultureHeading}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            {cultureBody}
          </p>

          <div className="mt-5 grid gap-3 md:grid-cols-3">
            {cultureCards.map((card) => (
              <div key={card.title} className="rounded-2xl border bg-card/60 p-4">
                <div className="text-sm font-semibold text-foreground">
                  {card.title}
                </div>
                <p className="mt-1 text-sm text-muted-foreground">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border bg-gradient-to-br from-muted/40 to-background p-6 md:p-8">
          <h3 className="text-lg font-semibold text-foreground md:text-xl">
            {tipsHeading}
          </h3>

          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {tips.map((tip, index) => (
              <div key={tip.title} className="rounded-2xl border bg-card/60 p-4">
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex size-7 shrink-0 items-center justify-center rounded-full border bg-background/60 text-xs font-semibold text-muted-foreground">
                    {index + 1}
                  </span>
                  <div className="min-w-0">
                    <div className="text-sm font-semibold text-foreground">
                      {tip.title}
                    </div>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {tip.body}
                    </p>
                    <p className="mt-2 rounded-2xl border bg-background/60 p-2 font-mono text-xs text-muted-foreground">
                      {tip.example}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
