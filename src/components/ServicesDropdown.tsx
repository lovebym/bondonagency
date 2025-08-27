"use client";

import React from "react";
import Link from "next/link";

const items = [
  { href: "/tjanster/kreativitet", label: "Kreativitet" },
  { href: "/tjanster/produktion", label: "Produktion" },
  { href: "/tjanster/analys", label: "Analys" },
  { href: "/tjanster/performance", label: "Performance" },
  { href: "/tjanster/branding", label: "Branding" },
  { href: "/tjanster/crm", label: "CRM & Retention" },
];

export default function ServicesDropdown() {
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (!ref.current) return;
      if (!ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="inline-flex items-center gap-1 hover:opacity-80"
        aria-haspopup="menu"
        aria-expanded={open}
      >
        Tjänster
        <span className={`transition-transform ${open ? "rotate-180" : "rotate-0"}`}>▾</span>
      </button>
      {open ? (
        <div
          role="menu"
          className="absolute left-0 mt-2 w-56 rounded-md border border-foreground/10 bg-background shadow-sm z-20"
        >
          <div className="py-1 text-sm">
            <Link href="/tjanster" className="block px-3 py-2 hover:bg-foreground/5" onClick={() => setOpen(false)}>
              Översikt
            </Link>
            <div className="my-1 h-px bg-foreground/10" />
            {items.map((it) => (
              <Link
                key={it.href}
                href={it.href}
                className="block px-3 py-2 hover:bg-foreground/5"
                onClick={() => setOpen(false)}
              >
                {it.label}
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}


