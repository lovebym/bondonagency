import Section from "@/components/Section";

type Logo = { name: string; initials: string };

// Social proof med enkel SVG-logogrid (byt till riktiga loggor när de finns)
export default function SocialProof() {
  const logos: Logo[] = [
    { name: "NorthCo", initials: "NC" },
    { name: "Aurora", initials: "AU" },
    { name: "Fenix", initials: "FX" },
    { name: "Nimbus", initials: "NB" },
    { name: "Polar", initials: "PL" },
  ];
  return (
    <Section id="social" title="Förtroende" subtitle="Team med erfarenhet från snabbväxande varumärken och B2B‑bolag.">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-6 items-center">
        {logos.map((logo) => (
          <div key={logo.name} className="h-12 rounded-md border border-foreground/10 flex items-center justify-center opacity-80 hover:opacity-100 transition-opacity">
            <svg viewBox="0 0 100 32" className="h-6" aria-label={logo.name} role="img">
              <rect x="0" y="0" width="100" height="32" fill="transparent" />
              <text x="0" y="22" fontSize="18" fontFamily="ui-sans-serif, system-ui" fill="currentColor">{logo.initials}</text>
            </svg>
          </div>
        ))}
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
        <blockquote className="rounded-xl border border-foreground/10 p-5">
          <p className="text-sm">“Vi halverade tiden från idé till live‑kampanj utan att tappa kvalitet.”</p>
          <footer className="mt-2 text-xs text-foreground/70">CMO, D2C‑brand</footer>
        </blockquote>
        <blockquote className="rounded-xl border border-foreground/10 p-5">
          <p className="text-sm">“SQL ökade 68% på 8 veckor tack vare tydlig testtakt och bättre kreativa vinklar.”</p>
          <footer className="mt-2 text-xs text-foreground/70">VP Marketing, B2B‑SaaS</footer>
        </blockquote>
        <blockquote className="rounded-xl border border-foreground/10 p-5">
          <p className="text-sm">“Lägre CPA och högre retention efter att vi synkade kreativ, produkt och analys.”</p>
          <footer className="mt-2 text-xs text-foreground/70">Growth Lead, App</footer>
        </blockquote>
      </div>
    </Section>
  );
}


