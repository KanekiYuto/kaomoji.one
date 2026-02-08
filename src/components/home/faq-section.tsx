import type { HomeFaqContent } from "@/features/kaomoji/types";

export function HomeFaqSection({ content }: { content: HomeFaqContent }) {
  return (
    <section>
      <div className="rounded-3xl bg-card p-8 md:p-12">
        <div className="space-y-3 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            {content.heading}
          </h2>
        </div>

        <div className="mt-10 space-y-4">
          {content.items.map((item) => (
            <div
              key={item.question}
              className="rounded-2xl border bg-background/40 p-6"
            >
              <h3 className="mb-3 text-xl font-semibold text-foreground">
                {item.question}
              </h3>
              <p className="text-base leading-relaxed text-muted-foreground">
                {item.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
