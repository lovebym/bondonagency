"use client";

import React from "react";

// Enkel A/B-test för hero-rubrik, sticky i localStorage
export default function HeroHeading() {
  const [variant, setVariant] = React.useState<"A" | "B">("A");
  React.useEffect(() => {
    const key = "hero-variant";
    const saved = window.localStorage.getItem(key) as "A" | "B" | null;
    const v = saved || (Math.random() < 0.5 ? "A" : "B");
    window.localStorage.setItem(key, v);
    setVariant(v);
  }, []);

  const text =
    variant === "A"
      ? "AI‑driven kreativ och digital marknadsföring som skalar resultat"
      : "Snabbare idéer, smartare produktion och analys — med AI i kärnan";

  return <h1 className="text-3xl sm:text-5xl font-semibold leading-tight">{text}</h1>;
}


