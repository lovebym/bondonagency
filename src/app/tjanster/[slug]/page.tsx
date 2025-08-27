import Section from "@/components/Section";
import Link from "next/link";

const content: Record<string, { title: string; body: string[] }> = {
  kreativitet: {
    title: "Kreativitet",
    body: [
      "Idéarbete, hookar och format per målgrupp.",
      "AI‑stödd copy/design och snabb variantframtagning.",
      "Varianttestning och lärande per kanal.",
    ],
  },
  performance: {
    title: "Performance",
    body: [
      "Kanalstrategi, budget och attribution.",
      "Kampanjstruktur för skala och lärande.",
      "Daglig optimering och rapport per sprint.",
    ],
  },
  branding: {
    title: "Branding",
    body: [
      "Varumärkesplattform och tonalitet.",
      "Guidelines för kreativa format och innehåll.",
      "Brand‑lift och kvalitativa mätpunkter.",
    ],
  },
  crm: {
    title: "CRM & Retention",
    body: [
      "Kundresa, segment och onboarding‑flöden.",
      "Marketing automation och experiment.",
      "Retention/Kohorter, CLV och re‑aktivering.",
    ],
  },
  produktion: {
    title: "Produktion",
    body: [
      "Effektiv produktion för kanaler och format.",
      "Automatisering och mallar utan att tumma på kvalitet.",
      "Snabb leverans med tydlig sprinttakt.",
    ],
  },
  analys: {
    title: "Analys",
    body: [
      "Experimentdesign och mätning.",
      "Dashboard med KPI:er och insikter.",
      "Rekommendationer för nästa iteration.",
    ],
  },
};

type Params = { params: { slug: string } };

export default function ServiceDetail({ params }: Params) {
  const { slug } = params;
  const data = content[slug] || { title: "Tjänst", body: ["Innehåll saknas."] };
  return (
    <main>
      <Section title={data.title} subtitle="Så här jobbar vi i praktiken.">
        <div className="space-y-3 text-sm text-foreground/80 max-w-prose">
          {data.body.map((line, idx) => (
            <p key={idx}>{line}</p>
          ))}
        </div>
        <div className="mt-6 flex items-center gap-3">
          <Link href="#kontakt" className="inline-flex h-10 items-center rounded-md bg-foreground px-4 text-background text-sm font-medium hover:opacity-90">Boka intro</Link>
          <Link href="/tjanster" className="inline-flex h-10 items-center rounded-md border border-foreground/20 px-4 text-sm font-medium hover:bg-foreground/5">Tillbaka</Link>
        </div>
      </Section>

      <Section>
        <div className="rounded-xl border border-foreground/10 p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <h3 className="text-lg font-semibold">Redo att ta nästa steg?</h3>
            <p className="mt-1 text-sm text-foreground/80">Se våra paket eller hör av dig så skräddarsyr vi en plan.</p>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/#priser" className="inline-flex h-10 items-center rounded-md border border-foreground/20 px-4 text-sm font-medium hover:bg-foreground/5">Se priser</Link>
            <Link href="/#kontakt" className="inline-flex h-10 items-center rounded-md bg-foreground px-4 text-background text-sm font-medium hover:opacity-90">Kontakta oss</Link>
          </div>
        </div>
      </Section>
    </main>
  );
}


