import type { Metadata } from "next";
import Link from "next/link";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  BACK_LINK_URLS,
  BACK_LINKS_LAST_UPDATED,
} from "@/features/back-links/data/back-links";
import { withCanonical } from "@/lib/seo";

export const metadata: Metadata = {
  title: "バックリンク｜被リンク一覧",
  description:
    "当サイトに関連する被リンク（Backlinks）の一覧ページ。検索エンジンの発見・クロールを支援します。",
  ...withCanonical("/back-links"),
};

export default function BackLinksPage() {
  const rows = Array.from(new Set(BACK_LINK_URLS))
    .map((url) => url.trim())
    .filter(Boolean)
    .map((url) => {
      try {
        const parsed = new URL(url);
        return { url, domain: parsed.hostname };
      } catch {
        return { url, domain: url };
      }
    })
    .sort((a, b) =>
      a.domain === b.domain ? a.url.localeCompare(b.url) : a.domain.localeCompare(b.domain)
    );

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 md:px-6">
      <div className="space-y-3">
        <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          バックリンク（被リンク）一覧
        </h1>
        <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
          被リンク（Backlinks）/ 友リンクの一覧ページ。更新日：{BACK_LINKS_LAST_UPDATED}
        </p>
        <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
          追加・修正の依頼がある場合は、掲載したいサイト名・URL・簡単な説明を添えてご連絡ください。
        </p>
      </div>

      <div className="mt-8 rounded-xl border border-border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[240px]">ドメイン</TableHead>
              <TableHead>URL</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.url}>
                <TableCell className="font-medium text-foreground">{row.domain}</TableCell>
                <TableCell className="truncate">
                  <a
                    href={row.url}
                    target="_blank"
                    rel="nofollow ugc noopener noreferrer"
                    className="text-primary underline-offset-4 hover:underline"
                  >
                    {row.url}
                  </a>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div className="mt-10 text-sm text-muted-foreground">
        <Link href="/" className="underline-offset-4 hover:underline">
          ← ホームへ戻る
        </Link>
      </div>
    </div>
  );
}
