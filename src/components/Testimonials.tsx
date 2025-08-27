import Section from "@/components/Section";

export default function Testimonials() {
  return (
    <Section id="testimonials" title="Vad kunder säger">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
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


