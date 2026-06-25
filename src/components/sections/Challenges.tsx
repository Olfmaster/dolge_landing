const challenges = [
  {
    title: "Schadgas- und Staubinvasion",
    text: "Winzige Gas-Moleküle und Stäube dringen ungehindert in Schaltschränke ein.",
  },
  {
    title: "Hohes Korrosionspotential",
    text: "Korrosive Prozessgase greifen Metallteile an und verursachen Korrosion und Elektronikausfälle.",
  },
  {
    title: "Überhitzungsgefahr",
    text: "Unzureichende Belüftung und Staubansammlungen führen zu Überhitzungsschäden.",
  },
  {
    title: "Funktionsbeeinträchtigung",
    text: "Staubablagerungen auf Komponenten beeinträchtigen die Funktionalität.",
  },
];

export default function Challenges() {
  return (
    <section className="bg-slate-50 py-16 md:py-20">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 md:grid-cols-[1.4fr_1fr] md:items-center">
        <div>
          <h2 className="gsap-reveal text-2xl font-extrabold text-brand md:text-3xl">
            Die Herausforderungen Ihrer Schaltschränke
          </h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {challenges.map((c, i) => (
              <div
                key={c.title}
                className="gsap-reveal rounded-xl border border-black/5 bg-white p-5 shadow-sm"
              >
                <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-brand/10 text-sm font-bold text-brand">
                  {i + 1}
                </div>
                <h3 className="text-base font-bold text-brand">{c.title}</h3>
                <p className="mt-1.5 text-sm text-[#1a1a24]/70">{c.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="gsap-reveal rounded-2xl bg-brand p-8 text-white shadow-card">
          <h3 className="text-2xl font-extrabold leading-tight">
            Klimageräte allein reichen nicht!
          </h3>
          <p className="mt-3 text-sm text-white/80">
            Sie fragen sich warum? Jetzt Kontakt aufnehmen und mit uns das Risiko testen.
          </p>
          <a
            href="#korrosionsrisiko"
            className="mt-6 inline-flex rounded-lg bg-white px-5 py-3 text-sm font-bold text-brand transition hover:bg-white/90"
          >
            Korrosionsrisiko testen
          </a>
        </div>
      </div>
    </section>
  );
}
