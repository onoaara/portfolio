"use client";

import { useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState<boolean>(() => {
    if (typeof document === "undefined") return false;
    return document.documentElement.classList.contains("dark");
  });

  const toggle = () => {
    const isDark = document.documentElement.classList.toggle("dark");
    setDark(isDark);
    try {
      localStorage.setItem("theme", isDark ? "dark" : "light");
    } catch {}
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle color theme"
      className={[
        "ml-3 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm transition-colors",
        dark
          ? "border-white/20 bg-white/10 text-white hover:bg-white/20"
          : "border-black/10 bg-black/5 text-black hover:bg-black/10",
      ].join(" ")}
    >
      {dark ? "Dark" : "Light"}
    </button>
  );
}
