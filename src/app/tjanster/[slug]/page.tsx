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
    </main>
  );
}


