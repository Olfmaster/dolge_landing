import RiskForm from "@/components/forms/RiskForm";
import Check from "@/components/ui/Check";

const badges = [
  "Elektronikausfälle reduzieren",
  "Standzeiten optimieren",
  "Über 20+ Jahre Erfahrung",
];

export default function RiskSection() {
  return (
    <section
      id="korrosionsrisiko"
      className="scroll-mt-20 py-16 text-white md:py-24"
      style={{ background: "linear-gradient(135deg, #252254 0%, #100717 100%)" }}
    >
      <div className="mx-auto max-w-4xl px-5">
        <h2 className="gsap-reveal text-center text-3xl font-extrabold md:text-4xl">
          Jetzt kostenfrei Korrosionsrisiko prüfen!
        </h2>
        <p className="gsap-reveal mx-auto mt-3 max-w-2xl text-center text-sm text-white/75">
          Beantworten Sie ein paar kurze Fragen – wir melden uns mit einer Einschätzung Ihres
          individuellen Korrosionsrisikos.
        </p>

        <div className="gsap-reveal mt-10 rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8">
          <RiskForm />
        </div>

        <ul className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {badges.map((b) => (
            <li key={b} className="flex items-center gap-2 text-sm font-semibold">
              <Check className="text-success" /> {b}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
