import * as React from "react";

import { cn } from "@/lib/utils";

export type EmptyProps = {
  title: string;
  description?: string;
  icon?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
};

export function Empty({ title, description, icon, children, className }: EmptyProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border bg-muted/20 px-6 py-10 text-center md:px-8",
        className
      )}
    >
      {icon ? <div className="mx-auto mb-4 flex justify-center">{icon}</div> : null}
      <div className="text-base font-semibold text-foreground">{title}</div>
      {description ? (
        <p className="mx-auto mt-2 max-w-prose text-sm text-muted-foreground">
          {description}
        </p>
      ) : null}
      {children ? <div className="mt-4 flex justify-center">{children}</div> : null}
    </div>
  );
}

