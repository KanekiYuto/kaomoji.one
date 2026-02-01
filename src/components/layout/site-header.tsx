"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const navItems = [
  { label: "ホーム", href: "/" },
  { label: "かわいい", href: "/cute-kaomoji" },
  { label: "泣く", href: "/cry-kaomoji" },
  { label: "号泣", href: "/gougoku-kaomoji" },
  { label: "ドヤ顔", href: "/doya-kaomoji" },
] as const;

function Logo() {
  return (
    <span className="inline-flex items-center gap-2">
      <div className="relative h-10 w-10 overflow-hidden rounded-lg">
        <Image
          src="/logo.webp"
          alt="kaomoji Logo"
          width={128}
          height={128}
          className="object-contain"
          priority
        />
      </div>
    </span>
  );
}

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-16 max-w-6xl items-center gap-4 px-4 md:px-6">
        <Link href="/" className="shrink-0">
          <Logo />
        </Link>

        <Separator orientation="vertical" className="hidden h-6 md:block" />

        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground",
                pathname === item.href && "bg-accent text-foreground"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon-sm"
                className="md:hidden"
                aria-label="メニューを開く"
              >
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[22rem]">
              <SheetHeader>
                <SheetTitle>
                  <Link href="/" className="inline-flex" aria-label="ホームへ戻る">
                    <Logo />
                  </Link>
                </SheetTitle>
              </SheetHeader>

              <div className="px-4">
                <nav className="grid gap-1">
                  {navItems.map((item) => (
                    <SheetClose asChild key={item.href}>
                      <Link
                        href={item.href}
                        className={cn(
                          "rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground",
                          pathname === item.href && "bg-accent text-foreground"
                        )}
                      >
                        {item.label}
                      </Link>
                    </SheetClose>
                  ))}
                </nav>
              </div>

              <SheetFooter>
                <div />
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
