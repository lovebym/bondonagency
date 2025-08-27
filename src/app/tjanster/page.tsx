import Link from "next/link";
import Section from "@/components/Section";

const services = [
  {
    slug: "kreativitet",
    name: "Kreativitet",
    desc: "Idéarbete, hookar och format per målgrupp. AI‑stödd copy/design och snabb variantframtagning.",
  },
  {
    slug: "produktion",
    name: "Produktion",
    desc: "Effektiv produktion för kanaler/format. Automatisering utan att tumma på kvalitet.",
  },
  {
    slug: "analys",
    name: "Analys",
    desc: "Experiment, mätning och insikter. Dashboard och tydliga beslut varje sprint.",
  },
  {
    slug: "performance",
    name: "Performance",
    desc: "Planering, budget och optimering i betalda kanaler (Meta, TikTok, Google).",
  },
  {
    slug: "branding",
    name: "Branding",
    desc: "Varumärkesplattform, tonalitet och kreativa riktlinjer för skalbar produktion.",
  },
  {
    slug: "crm",
    name: "CRM & Retention",
    desc: "E‑post/marketing automation, onboarding‑flöden och aktivering för högre LTV.",
  },
];

export default function ServicesPage() {
  return (
    <main>
      <Section title="Tjänster" subtitle="Välj område eller kombinera flera för maximal effekt.">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {services.map((s) => (
            <Link key={s.slug} href={`/tjanster/${s.slug}`} className="rounded-xl border border-foreground/10 p-6 hover:bg-foreground/5 transition-colors">
              <h2 className="text-lg font-semibold">{s.name}</h2>
              <p className="mt-2 text-sm text-foreground/80">{s.desc}</p>
              <span className="mt-3 inline-flex text-xs opacity-80">Läs mer →</span>
            </Link>
          ))}
        </div>
      </Section>
    </main>
  );
}


