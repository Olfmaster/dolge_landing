export default function Testimonial() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-5">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div className="gsap-reveal">
            <h2 className="text-2xl font-extrabold text-brand md:text-3xl">
              Das sagen unsere Kunden
            </h2>
            <p className="mt-4 text-sm text-[#1a1a24]/70">
              Thomas Koch, Leiter Elektrotechnik bei der Kartonfabrik Porstendorf, berichtet von
              beeindruckenden Ergebnissen nach der Installation unserer DOLGE-Filteranlage.
            </p>
            <p className="mt-3 text-sm text-[#1a1a24]/70">
              Diese Erfahrung zeigt, wie effektiv unsere Lösungen dabei helfen können,
              Produktionsstörungen zu minimieren und die Betriebseffizienz zu steigern.
            </p>
          </div>

          <figure className="gsap-reveal rounded-2xl bg-slate-50 p-8 shadow-sm">
            <div className="text-5xl font-serif leading-none text-brand/30">”</div>
            <blockquote className="-mt-4 text-base italic text-[#1a1a24]/80">
              „Wir hatten durch die Installation der DOLGE-Filteranlage eine deutliche Senkung
              unserer Steuerungsausfälle erwartet. Die Ergebnisse übertreffen unsere Erwartungen
              deutlich, denn seit der Filterinstallation gab es keinen Ausfall der SPS mehr.“
            </blockquote>
            <figcaption className="mt-4 text-xs">
              <span className="block font-bold text-brand">Thomas Koch</span>
              <span className="text-[#1a1a24]/60">
                Leiter Elektrotechnik der Kartonfabrik Porstendorf
              </span>
            </figcaption>
          </figure>
        </div>

        <div
          className="gsap-reveal mt-14 rounded-2xl px-8 py-12 text-center text-white"
          style={{ background: "linear-gradient(135deg, #252254 0%, #100717 100%)" }}
        >
          <h3 className="text-2xl font-extrabold md:text-3xl">
            Schützen Sie Ihre Elektronik – Vermeiden Sie teure Ausfälle
          </h3>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-white/80">
            Vermeiden Sie teure Ausfälle und verlängern Sie die Lebensdauer Ihrer Schaltschränke.
            Mit wenigen kurzen Schritten zu einer effizienteren Produktionsumgebung.
          </p>
          <a
            href="#korrosionsrisiko"
            className="mt-6 inline-flex rounded-lg bg-accent px-6 py-3 text-sm font-bold text-white transition hover:brightness-110"
          >
            Korrosionsrisiko prüfen
          </a>
        </div>
      </div>
    </section>
  );
}
