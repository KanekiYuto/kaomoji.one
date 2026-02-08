import type { Metadata } from "next";

import { withCanonical } from "@/lib/seo";

export const metadata: Metadata = {
  title: "バックリンク｜被リンク一覧",
  description:
    "当サイトに関連する被リンク（Backlinks）/友リンクの一覧ページ。掲載URLをドメイン別に整理して公開し、検索エンジンの発見・クロールを支援します。更新日も表示。掲載内容の追加・修正の依頼も受付中です。リンク確認にもご利用ください。被リンク元を一覧でまとめて確認できます。便利です。",
  ...withCanonical("/back-links"),
};

