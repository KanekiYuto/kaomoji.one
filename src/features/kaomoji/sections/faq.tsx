import type { KaomojiFaqProps } from "@/features/kaomoji/types";

export function KaomojiFaq({ heading, subheading, items }: KaomojiFaqProps) {
  return (
    <section className="space-y-8">
      <div className="space-y-2 text-center">
        <h2 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
          {heading}
        </h2>
        {subheading ? (
          <p className="mx-auto max-w-2xl text-sm text-muted-foreground md:text-base">
            {subheading}
          </p>
        ) : null}
      </div>

      <div className="mx-auto max-w-4xl space-y-3">
        {items.map((item) => (
          <details
            key={item.question}
            className="group rounded-2xl border bg-background/80 p-5"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
              <span className="font-medium text-foreground">{item.question}</span>
              <span
                aria-hidden="true"
                className="text-sm text-muted-foreground transition-transform group-open:rotate-180"
              >
                ⌄
              </span>
            </summary>
            <div className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {item.answer}
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
