import ContactForm from "@/components/forms/ContactForm";

const benefits = [
  "Elektronikausfälle reduzieren",
  "Standzeiten optimieren",
  "Über 30+ Jahre Erfahrung",
];

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-brand text-white"
    >
      {/* Hintergrundbild + Indigo-Verlauf */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: "url(/images/hero-bg.jpg)" }}
        aria-hidden
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, #252254 0%, #1d1a47 55%, #100717 100%)",
          opacity: 0.92,
        }}
        aria-hidden
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 md:grid-cols-2 md:py-24">
        <div>
          <h1
            data-hero
            className="text-4xl font-extrabold leading-tight tracking-tight md:text-5xl"
          >
            Schützen Sie Ihre Elektronik mit{" "}
            <span className="text-accent">innovativer Filtrationstechnologie</span>
          </h1>

          <figure data-hero className="mt-8 border-l-2 border-accent/70 pl-4">
            <blockquote className="text-sm italic text-white/85 md:text-base">
              „Wir hatten durch die Installation der DOLGE-Filteranlage eine deutliche Senkung
              unserer Steuerungsausfälle erwartet. Die Ergebnisse übertreffen unsere Erwartungen
              deutlich, denn seit der Filterinstallation gab es keinen Ausfall der SPS mehr.“
            </blockquote>
            <figcaption className="mt-3 text-xs">
              <span className="block font-bold uppercase tracking-wide">Thomas Koch</span>
              <span className="text-white/70">
                Leiter Elektrotechnik der Kartonfabrik Porstendorf
              </span>
            </figcaption>
          </figure>

          <ul data-hero className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
            {benefits.map((b) => (
              <li key={b} className="flex items-center gap-2 text-sm font-semibold">
                <Check /> {b}
              </li>
            ))}
          </ul>
        </div>

        <div data-hero>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

function Check() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="m5 13 4 4L19 7"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-success"
      />
    </svg>
  );
}
