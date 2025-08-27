import Section from "@/components/Section";

// Enkel social proof med plats för loggor och ett citat
export default function SocialProof() {
  const logos = ["NorthCo", "Aurora", "Fenix", "Nimbus", "Polar"]; // byt till riktiga loggor senare
  return (
    <Section id="social" title="Förtroende" subtitle="Team med erfarenhet från snabbväxande varumärken och B2B‑bolag.">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-6 items-center">
        {logos.map((name) => (
          <div key={name} className="h-12 rounded-md border border-foreground/10 flex items-center justify-center text-xs sm:text-sm opacity-70">
            {name}
          </div>
        ))}
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        <blockquote className="rounded-xl border border-foreground/10 p-5">
          <p className="text-sm">“Vi halverade tiden från idé till kampanj utan att kompromissa på kvalitet.”</p>
          <footer className="mt-2 text-xs text-foreground/70">CMO, D2C‑brand</footer>
        </blockquote>
        <blockquote className="rounded-xl border border-foreground/10 p-5">
          <p className="text-sm">“Kombinationen av kreativitet och analys gav tydlig effekt på SQL‑volymen.”</p>
          <footer className="mt-2 text-xs text-foreground/70">VP Marketing, B2B‑SaaS</footer>
        </blockquote>
      </div>
    </Section>
  );
}


