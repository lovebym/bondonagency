"use client";

import React from "react";

type SectionProps = {
  id?: string;
  title?: string;
  subtitle?: string;
  className?: string;
  children?: React.ReactNode;
};

// Enkel, återanvändbar sektion med valfri titel och innehåll
export default function Section({ id, title, subtitle, className, children }: SectionProps) {
  return (
    <section id={id} className={`w-full py-12 sm:py-16 ${className ?? ""}`}>
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        {title ? (
          <div className="mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">{title}</h2>
            {subtitle ? (
              <p className="mt-2 text-base sm:text-lg text-foreground/80">{subtitle}</p>
            ) : null}
          </div>
        ) : null}
        {children}
      </div>
    </section>
  );
}


