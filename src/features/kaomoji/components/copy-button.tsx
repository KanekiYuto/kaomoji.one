"use client";

import * as React from "react";
import { Check, Copy } from "lucide-react";

import { Button } from "@/components/ui/button";

export function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = React.useState(false);

  const onCopy = React.useCallback(async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1200);
    } catch {
      setCopied(false);
    }
  }, [text]);

  return (
    <Button
      type="button"
      variant="ghost"
      size="icon-sm"
      onClick={onCopy}
      aria-label={copied ? "已复制" : "复制"}
      title={copied ? "已复制" : "复制"}
    >
      {copied ? <Check /> : <Copy />}
    </Button>
  );
}
