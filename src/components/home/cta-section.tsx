import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import type { HomeCtaContent } from "@/features/kaomoji/content/home";

export function HomeCtaSection({ content }: { content: HomeCtaContent }) {
  return (
    <section>
      <div className="relative overflow-hidden rounded-3xl border border-border/50 bg-card p-8 md:p-12">
        <div className="relative grid items-center gap-6 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-7">
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              {content.heading}
            </h2>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground md:text-lg">
              {content.description}
            </p>
            <p className="mt-4 font-mono text-sm text-muted-foreground">
              {content.example}
            </p>
          </div>

          <div className="flex flex-col gap-3 md:col-span-5 md:items-end">
            <Button asChild size="lg" className="w-full md:w-auto">
              <Link href={content.primaryCta.href}>
                {content.primaryCta.label}
                <ArrowRight className="ml-2 size-4" aria-hidden="true" />
              </Link>
            </Button>
            <Button asChild variant="secondary" size="lg" className="w-full md:w-auto">
              <Link href={content.secondaryCta.href}>{content.secondaryCta.label}</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
