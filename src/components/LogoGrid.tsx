import Section from "@/components/Section";

type Logo = { name: string; initials: string };

// Logo-grid för kundloggor (byt till riktiga loggor när de finns)
export default function LogoGrid() {
  const logos: Logo[] = [
    { name: "NorthCo", initials: "NC" },
    { name: "Aurora", initials: "AU" },
    { name: "Fenix", initials: "FX" },
    { name: "Nimbus", initials: "NB" },
    { name: "Polar", initials: "PL" },
  ];
  return (
    <Section id="logos" title="Tillsammans med">
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
    </Section>
  );
}


