import Link from "next/link";

const footerSections = [
  {
    title: "ページ",
    links: [
      { label: "ホーム", href: "/" },
      { label: "かわいい", href: "/cute-kaomoji" },
      { label: "泣く", href: "/cry-kaomoji" },
      { label: "バックリンク", href: "/back-links" },
    ],
  },
  {
    title: "関連サイト",
    links: [{ label: "PicooAI", href: "https://picooai.com", external: true }],
  },
] as const;

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-16 w-full rounded-t-3xl border-t bg-card">
      <div className="mx-auto max-w-6xl px-4 py-12 md:px-6">
        <div className="mb-10 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          {footerSections.map((section) => (
            <div key={section.title}>
              <div className="mb-3 text-xs font-medium text-muted-foreground md:text-sm">
                {section.title}
              </div>
              <ul className="space-y-2 md:space-y-3">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      target={"external" in link && link.external ? "_blank" : undefined}
                      rel={
                        "external" in link && link.external
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="text-xs text-foreground/80 transition-colors hover:text-primary md:text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="relative overflow-hidden py-10">
          <div className="select-none text-center text-[3.5rem] font-semibold leading-none tracking-tighter text-foreground/10 sm:text-[5rem] md:text-[8rem] lg:text-[12rem]">
            kaomoji
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 border-t pt-6 text-xs text-muted-foreground md:flex-row md:gap-6 md:text-sm">
          <p>© {year} kaomoji</p>
          <p className="text-center md:text-right">
            かわいさを、もっと気軽に。コピーしてすぐ使える顔文字。
          </p>
        </div>
      </div>
    </footer>
  );
}
