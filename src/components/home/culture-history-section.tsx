import type { HomeCultureHistoryContent } from "@/features/kaomoji/types";

export function CultureHistorySection({
  content,
}: {
  content: HomeCultureHistoryContent;
}) {
  return (
    <section>
      <div className="rounded-3xl border border-border/50 bg-gradient-to-r from-muted/40 via-background to-primary/5 p-8 md:p-12">
        <h2 className="mb-12 text-center text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          {content.heading}
        </h2>

        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-foreground">
              {content.leftHeading}
            </h3>
            <p className="leading-relaxed text-muted-foreground">
              {content.body}
            </p>

            <div className="rounded-2xl border border-border/50 bg-card/70 p-5">
              <h4 className="mb-3 font-semibold text-foreground">
                {content.featuresHeading}
              </h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {content.features.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="rounded-3xl border border-border/50 bg-card/70 p-8 text-center">
            <h4 className="mb-6 text-xl font-semibold text-foreground">
              {content.timelineHeading}
            </h4>

            <div className="space-y-2">
              {content.timeline.map((item, index) => (
                <div
                  key={item.label}
                  className={[
                    "flex items-center justify-between gap-6 py-3",
                    index === content.timeline.length - 1
                      ? ""
                      : "border-b border-border/60",
                  ].join(" ")}
                >
                  <span className="text-sm text-muted-foreground">{item.label}</span>
                  <span className="font-mono text-lg text-foreground">{item.kaomoji}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
