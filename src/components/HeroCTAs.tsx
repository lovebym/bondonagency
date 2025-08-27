"use client";

import Link from "next/link";
import { track } from "@/lib/analytics";

export default function HeroCTAs() {
  return (
    <div className="mt-6 flex items-center gap-3">
      <Link
        href="#kontakt"
        onClick={() => track({ name: "cta_click", props: { cta: "Boka intro" } })}
        className="inline-flex h-10 items-center rounded-md bg-foreground px-4 text-background text-sm font-medium hover:opacity-90 transition-transform hover:-translate-y-0.5"
      >
        Boka intro
      </Link>
      <Link
        href="#tjanster"
        onClick={() => track({ name: "cta_click", props: { cta: "Se hur vi jobbar" } })}
        className="inline-flex h-10 items-center rounded-md border border-foreground/20 px-4 text-sm font-medium hover:bg-foreground/5 transition-colors"
      >
        Se hur vi jobbar
      </Link>
    </div>
  );
}


