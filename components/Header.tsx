"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemedText from "./ThemedText";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  const pathname = usePathname();
  const items = [
    { key: "home", label: "Home", href: "/home" },
    {
      key: "projects",
      label: "Projects",
      href: "/projects" as const,
      badge: 20,
    },
    { key: "about", label: "About", href: "/about" as const },
    { key: "contact", label: "Contact", href: "/contact" as const },
  ];

  return (
    <header
      id="header"
      className="flex items-center justify-center px-5 py-4 bg-transparent border-0"
    >
      <div />
      <div className="flex flex-col">
        <ThemedText variant="lead" tone="muted" weight="bold" align="center">
          Diamond
        </ThemedText>
        <div className="flex items-center">
          <nav
            aria-label="Primary"
            className="relative flex items-center gap-1 rounded-full bg-neutral-900/95 px-1 py-1 shadow-[0_8px_24px_rgba(0,0,0,0.2)] ring-1 ring-black/10 backdrop-blur-sm"
          >
            {items.map((item) => {
              const isActive =
                (item.key === "home" && pathname?.startsWith("/home")) ||
                (item.key === "projects" &&
                  pathname?.startsWith("/projects")) ||
                (item.key === "about" && pathname?.startsWith("/about")) ||
                (item.key === "contact" && pathname?.startsWith("/contact"));
              const base =
                "relative flex items-center gap-2 rounded-full px-4 py-2 text-sm transition-colors";
              return (
                <Link
                  key={item.key}
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  className={[
                    base,
                    isActive
                      ? "bg-white text-black shadow-[0_2px_6px_rgba(0,0,0,0.18)]"
                      : "text-white/85 hover:text-white",
                  ].join(" ")}
                >
                  <span>{item.label}</span>
                  {"badge" in item && (
                    <span className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-2 text-xs font-medium leading-none text-white/80">
                      {item.badge}
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
      <ThemeToggle />
    </header>
  );
}
