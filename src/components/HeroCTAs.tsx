"use client";

import React from "react";
import Link from "next/link";
import { track } from "@/lib/analytics";

const variants = [
  { primary: "Boka intro", secondary: "Se hur vi jobbar" },
  { primary: "Prata med oss", secondary: "Se vår metod" },
  { primary: "Starta nu", secondary: "Hur vi arbetar" },
];

export default function HeroCTAs() {
  const v = React.useMemo(() => variants[Math.floor(Math.random() * variants.length)], []);
  return (
    <div className="mt-6 flex items-center gap-3">
      <Link
        href="#kontakt"
        onClick={() => track({ name: "cta_click", props: { cta: v.primary } })}
        className="inline-flex h-10 items-center rounded-md bg-foreground px-4 text-background text-sm font-medium hover:opacity-90 transition-transform hover:-translate-y-0.5"
      >
        {v.primary}
      </Link>
      <Link
        href="#tjanster"
        onClick={() => track({ name: "cta_click", props: { cta: v.secondary } })}
        className="inline-flex h-10 items-center rounded-md border border-foreground/20 px-4 text-sm font-medium hover:bg-foreground/5 transition-colors"
      >
        {v.secondary}
      </Link>
    </div>
  );
}


