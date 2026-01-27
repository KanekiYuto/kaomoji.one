import type { KaomojiWhatProps } from "@/features/kaomoji/types";

export function KaomojiWhat({
  heading,
  intro,
  usageHeading,
  usageItems,
  typesHeading,
  types,
  featuresHeading,
  features,
}: KaomojiWhatProps) {
  return (
    <section className="space-y-6">
      <div className="space-y-2 text-center">
        <h2 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
          {heading}
        </h2>
      </div>

      <div className="mx-auto max-w-4xl space-y-8">
        <div className="relative overflow-hidden rounded-2xl border bg-background/80 p-6 md:p-8">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -top-24 right-0 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
            <div className="absolute -bottom-24 left-0 h-72 w-72 rounded-full bg-primary/5 blur-3xl" />
          </div>

          <div className="relative grid gap-5 md:grid-cols-[180px_1fr] md:items-center">
            <div className="rounded-xl border bg-muted/30 p-4">
              <div className="text-center font-mono text-2xl leading-snug text-foreground">
                (｡•◡•｡)
              </div>
              <div className="mt-2 text-center text-xs tracking-wide text-muted-foreground">
                KAOMOJI
              </div>
            </div>

            <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
              {intro}
            </p>
          </div>
        </div>

        <div className="rounded-xl border bg-background/80 p-6 md:p-8">
          <h3 className="mb-4 text-xl font-bold text-foreground">{usageHeading}</h3>
          <ul className="space-y-3 text-muted-foreground">
            {usageItems.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1 text-primary">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-xl border bg-background/80 p-6 md:p-8">
          <h3 className="mb-6 text-xl font-bold text-foreground">{typesHeading}</h3>
          <div className="grid gap-6 md:grid-cols-2">
            {types.map((type) => (
              <div key={type.title} className="space-y-2">
                <h4 className="font-medium text-foreground">{type.title}</h4>
                <p className="text-sm text-muted-foreground">{type.description}</p>
                <p className="text-sm font-mono text-muted-foreground">{type.example}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-xl border bg-background/80 p-6 md:p-8">
          <h3 className="mb-4 text-xl font-bold text-foreground">{featuresHeading}</h3>
          <div className="grid gap-6 sm:grid-cols-2">
            {features.map((feature) => (
              <div key={feature.title} className="space-y-2">
                <div className="font-mono text-lg text-primary">{feature.symbol}</div>
                <h4 className="font-medium text-foreground">{feature.title}</h4>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
