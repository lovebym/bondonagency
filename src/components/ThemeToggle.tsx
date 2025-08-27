"use client";

import React from "react";

// En enkel toggle som läser/skrivertema i localStorage och data-theme på <html>
export default function ThemeToggle() {
  const [theme, setTheme] = React.useState<string | null>(null);

  React.useEffect(() => {
    const stored = window.localStorage.getItem("theme");
    const initial = stored || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    setTheme(initial);
    document.documentElement.dataset.theme = initial;
  }, []);

  function toggle() {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.dataset.theme = next;
    window.localStorage.setItem("theme", next);
  }

  return (
    <button
      type="button"
      onClick={toggle}
      className="inline-flex h-8 items-center rounded-md border border-foreground/20 px-3 text-xs hover:bg-foreground/5"
      aria-label="Växla tema"
      title="Växla tema"
    >
      {theme === "dark" ? "Mörkt" : "Ljust"}
    </button>
  );
}


