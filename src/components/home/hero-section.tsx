import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import type { HomeHeroContent } from "@/features/kaomoji/content/home";

export function HomeHeroSection({ content }: { content: HomeHeroContent }) {
  return (
    <section className="space-y-6">
      <div className="relative overflow-hidden rounded-3xl border border-border/50 bg-card px-6 py-10 md:px-10 md:py-14">
        <div className="relative grid items-center gap-10 md:grid-cols-12">
          <div className="space-y-5 md:col-span-7">
            <div className="space-y-3">
              <h1 className="text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
                {content.title}
              </h1>
              <p className="max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
                {content.description}
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg">
                <Link href={content.primaryCta.href}>
                  {content.primaryCta.label}
                  <ArrowRight className="ml-2 size-4" aria-hidden="true" />
                </Link>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <Link href={content.secondaryCta.href}>
                  {content.secondaryCta.label}
                </Link>
              </Button>
            </div>

            <div className="flex flex-wrap gap-2 text-xs text-muted-foreground">
              {content.badges.map((badge) => (
                <span
                  key={badge}
                  className="rounded-full border bg-background/50 px-3 py-1"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>

          <div className="md:col-span-5">
            <div className="rounded-3xl border bg-background/50 p-6">
              <div className="text-sm font-medium text-foreground">
                {content.sample.title}
              </div>
              <div className="mt-4 space-y-3 font-mono text-lg text-foreground">
                {content.sample.rows.map((row) => (
                  <div
                    key={`${row.label}:${row.kaomoji}`}
                    className="flex items-center justify-between gap-4 rounded-2xl border bg-card/60 px-4 py-3"
                  >
                    <span>{row.kaomoji}</span>
                    <span className="text-sm text-muted-foreground">{row.label}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 text-xs text-muted-foreground">
                {content.sample.hint}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
