"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import icon from "@/app/icon.png";

import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";
import { Container } from "@/components/container";
import { ThemeToggle } from "@/components/theme-toggle";

export function SiteHeader() {
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-40 border-b bg-background/80 backdrop-blur">
      <Container className="flex h-14 items-center justify-between gap-4">
        <Link href="/" aria-label="Home">
          <Image src={icon} alt={siteConfig.name} className="size-8 rounded-lg" />
        </Link>

        <nav className="flex items-center gap-1">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-md px-2.5 py-1.5 text-sm transition-colors hover:text-foreground",
                isActive(item.href)
                  ? "font-medium text-foreground"
                  : "text-muted-foreground"
              )}
            >
              {item.title}
            </Link>
          ))}
          <div className="ml-1">
            <ThemeToggle />
          </div>
        </nav>
      </Container>
    </header>
  );
}
