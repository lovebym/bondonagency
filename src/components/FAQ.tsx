import Section from "@/components/Section";

const faqs = [
  {
    q: "Hur snabbt kan vi komma igång?",
    a: "Ofta inom 1–2 veckor. Vi startar med nuläge/mål, därefter hypoteser och första sprint.",
  },
  {
    q: "Vilka kanaler jobbar ni med?",
    a: "Betald social/sök, e‑post/CRM, webb/landningssidor samt content för organiska kanaler.",
  },
  {
    q: "Jobbar ni på plats eller remote?",
    a: "Främst remote men vi kan anpassa oss efter behov för workshops och större genomgångar.",
  },
  {
    q: "Hur mäter ni effekt?",
    a: "Vi utgår från definierade KPI:er (t.ex. ROAS, CPA, SQL) och följer upp varje sprint.",
  },
];

export default function FAQ() {
  return (
    <Section id="faq" title="Vanliga frågor">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        {faqs.map((f) => (
          <div key={f.q} className="rounded-xl border border-foreground/10 p-5">
            <h4 className="font-semibold text-sm sm:text-base">{f.q}</h4>
            <p className="mt-2 text-sm text-foreground/80">{f.a}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}


