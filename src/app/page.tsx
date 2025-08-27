import Link from "next/link";
import Section from "@/components/Section";
import ContactForm from "@/components/ContactForm";
import ThemeToggle from "@/components/ThemeToggle";
import HeroHeading from "@/components/HeroHeading";
import HeroCTAs from "@/components/HeroCTAs";
import LogoGrid from "@/components/LogoGrid";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";

export default function Home() {
  return (
    <div className="font-sans min-h-screen">
      <header className="w-full border-b border-foreground/10 sticky top-0 backdrop-blur supports-[backdrop-filter]:bg-background/70 z-10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 group">
            <span className="inline-block h-3 w-3 rounded-full bg-foreground transition-transform group-hover:scale-110" />
            <span className="text-sm font-semibold tracking-wide">BONDON Agency</span>
          </div>
          <nav className="hidden sm:flex items-center gap-6 text-sm">
            <Link className="hover:opacity-80" href="#tjanster">Tjänster</Link>
            <Link className="hover:opacity-80" href="#case">Case</Link>
            <Link className="hover:opacity-80" href="#kontakt">Kontakt</Link>
          </nav>
          <div className="hidden sm:block"><ThemeToggle /></div>
        </div>
      </header>

      <main>
        {/* Hero */}
        <Section className="py-16 sm:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <HeroHeading />
              <p className="mt-4 text-base sm:text-lg text-foreground/80 max-w-prose">
                Vi kombinerar strategi, kreativ produktion och analys med AI för att maximera
                effekt från första dagen. Färre silos, snabbare leveranser, bättre ROI.
              </p>
              <HeroCTAs />
            </div>
            <div className="md:justify-self-end">
              <div className="h-48 sm:h-64 md:h-72 aspect-[4/3] rounded-xl border border-foreground/10 bg-gradient-to-br from-foreground/5 to-transparent animate-pulse" />
            </div>
          </div>
        </Section>

        {/* Logotyper */}
        <LogoGrid />

        {/* Tjänster / Pelare */}
        <Section id="tjanster" title="Vad vi optimerar" subtitle="Allt vi gör är byggt för hastighet, kvalitet och lärande.">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            <div className="rounded-lg border border-foreground/10 p-5">
              <h3 className="text-base font-semibold">Kreativitet</h3>
              <p className="mt-1 text-sm text-foreground/80">
                Snabba idéprocesser, varianttestning och AI‑stödd copy/design som träffar rätt.
              </p>
            </div>
            <div className="rounded-lg border border-foreground/10 p-5">
              <h3 className="text-base font-semibold">Produktion</h3>
              <p className="mt-1 text-sm text-foreground/80">
                Automatiserad innehållsproduktion för kanaler och format, i hög kvalitet.
              </p>
            </div>
            <div className="rounded-lg border border-foreground/10 p-5">
              <h3 className="text-base font-semibold">Analys</h3>
              <p className="mt-1 text-sm text-foreground/80">
                Kontinuerligt lärande, experiment och dashboards som kopplar insikt till beslut.
              </p>
            </div>
          </div>
        </Section>

        {/* Testimonials */}
        <Testimonials />

        {/* Case */}
        <Section id="case" title="Case" subtitle="Snabba tester, mätbar effekt och iterativ förbättring.">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {[
              { title: "D2C: +27% ROAS", desc: "Kreativa varianter per målgrupp + snabb landningssida → fler köp till lägre kostnad." },
              { title: "B2B SaaS: 2× SQL, −30% CAC", desc: "Segmenterad content‑motor, multi‑touch nurture och SDR‑enablement." },
              { title: "App: −25% CPA, +40% retention (D30)", desc: "TikTok/Meta‑hookar, store‑optimering och funnel‑analys med kontinuerliga tester." },
            ].map((c) => (
              <div key={c.title} className="rounded-lg border border-foreground/10 p-5">
                <h3 className="text-base font-semibold">{c.title}</h3>
                <p className="mt-1 text-sm text-foreground/80">{c.desc}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Process */}
        <Section id="process" title="Vår process" subtitle="Snabbt igång, tydlig takt och kontinuerligt lärande.">
          <ol className="grid grid-cols-1 md:grid-cols-4 gap-4 sm:gap-6 list-decimal list-inside">
            <li className="rounded-lg border border-foreground/10 p-5">
              <h4 className="font-semibold">1. Nuläge & mål</h4>
              <p className="mt-1 text-sm text-foreground/80">Data, kanaler och prioriterade KPI:er.</p>
            </li>
            <li className="rounded-lg border border-foreground/10 p-5">
              <h4 className="font-semibold">2. Hypoteser</h4>
              <p className="mt-1 text-sm text-foreground/80">Kreativa vinklar, målgrupper och funnel‑steg.</p>
            </li>
            <li className="rounded-lg border border-foreground/10 p-5">
              <h4 className="font-semibold">3. Produktion</h4>
              <p className="mt-1 text-sm text-foreground/80">AI‑stödd copy/design och snabb variantframtagning.</p>
          </li>
            <li className="rounded-lg border border-foreground/10 p-5">
              <h4 className="font-semibold">4. Analys</h4>
              <p className="mt-1 text-sm text-foreground/80">Experiment, insikter och nästa iteration.</p>
          </li>
        </ol>
        </Section>

        {/* Priser */}
        <Section id="priser" title="Priser" subtitle="Enkla paket utan överraskningar.">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            {[
              { name: "Start", price: "35 000 kr/mån", points: ["2 kanaler", "Bas‑produktion", "Månadsrapport"] },
              { name: "Tillväxt", price: "65 000 kr/mån", points: ["4 kanaler", "Utökad produktion", "Veckotakt"] },
              { name: "Skala", price: "Från 95 000 kr/mån", points: [">4 kanaler", "Full produktion", "Experimentstudio"] },
            ].map((p) => (
              <div key={p.name} className="rounded-xl border border-foreground/10 p-6">
                <div className="flex items-end justify-between">
                  <h3 className="text-lg font-semibold">{p.name}</h3>
                  <span className="text-sm opacity-80">{p.price}</span>
                </div>
                <ul className="mt-3 space-y-2 text-sm">
                  {p.points.map((pt) => (
                    <li key={pt} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-foreground/70" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        {/* Kontakt */}
        <Section id="kontakt" title="Kontakta oss" subtitle="Svara på tre frågor så hör vi av oss.">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl border border-foreground/10 p-6">
              <ContactForm />
            </div>
            <div className="rounded-xl border border-foreground/10 p-6">
              <h4 className="text-lg font-semibold">Vad händer sen?</h4>
              <ul className="mt-3 space-y-2 text-sm">
                <li>Vi bekräftar och föreslår tid för kort intro.</li>
                <li>Vi tar fram initial hypotes och snabb plan.</li>
                <li>Vi sätter upp arbetsflöde och första experiment.</li>
              </ul>
            </div>
        </div>
        </Section>

        {/* FAQ */}
        <FAQ />
      </main>

      <footer className="border-t border-foreground/10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 h-14 flex items-center justify-between text-sm">
          <span>BONDON Agency © {new Date().getFullYear()}</span>
          <a className="hover:opacity-80" href="mailto:hello@bondon.agency">hello@bondon.agency</a>
        </div>
      </footer>
    </div>
  );
}
