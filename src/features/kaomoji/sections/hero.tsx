import Link from "next/link";
import { Button } from "@/components/ui/button";
import type { KaomojiHeroProps } from "@/features/kaomoji/types";

export function KaomojiHero({
  title,
  kaomoji,
  subtitle,
  description,
  primaryCta,
  secondaryCta,
}: KaomojiHeroProps) {
  return (
    <section className="relative overflow-hidden border-b bg-background">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/2 h-64 w-[48rem] -translate-x-1/2 rounded-full bg-gradient-to-r from-primary/10 via-transparent to-primary/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 py-14 md:px-6 md:py-20">
        <div className="space-y-6">
          <div className="space-y-3">
            <h1 className="text-3xl font-semibold tracking-tight md:text-5xl">
              {title}{" "}
              <span className="whitespace-nowrap font-mono text-foreground">
                {kaomoji}
              </span>
            </h1>
            <p className="text-lg text-muted-foreground md:text-xl">
              {subtitle}
            </p>
          </div>

          <p className="max-w-prose text-muted-foreground">
            {description}
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <Button asChild>
              <Link href={primaryCta.href}>{primaryCta.label}</Link>
            </Button>
            {secondaryCta ? (
              <Button variant="outline" asChild>
                <Link href={secondaryCta.href}>{secondaryCta.label}</Link>
              </Button>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
