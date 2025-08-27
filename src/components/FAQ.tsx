import Section from "@/components/Section";

const faqs = [
  {
    q: "Hur snabbt kommer vi igång?",
    a: "Inom 1–2 veckor. Vi startar med mål, hypoteser och första sprint.",
  },
  {
    q: "Vad ingår i paketen?",
    a: "Strategi, kreativ produktion, distribution och analys. Antal kanaler/sprintar varierar.",
  },
  {
    q: "Vilka kanaler jobbar ni med?",
    a: "Betald social/sök, e‑post/CRM och webb/landningssidor. Även organiskt content vid behov.",
  },
  {
    q: "Hur mäter ni resultat?",
    a: "KPI:er sätts upfront (ROAS, CPA, SQL). Vi rapporterar och itererar varje sprint.",
  },
  {
    q: "Kan ni arbeta med vårt team/partners?",
    a: "Ja. Vi pluggar in i befintliga flöden eller kör end‑to‑end.",
  },
  {
    q: "Bindningstid?",
    a: "Nej. Månadsvis med 30 dagars uppsägning.",
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


