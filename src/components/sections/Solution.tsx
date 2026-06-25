import Check from "@/components/ui/Check";

const advantages = [
  { title: "Befreiung von Schmutz", text: "Schutz vor Partikeln und Feinstaub." },
  { title: "Korrosionsschutz", text: "Bewahren Sie Ihre Geräte vor schädlichen Gasen." },
  { title: "Überhitzung vermeiden", text: "Keine Wärmestaus durch Staubablagerungen." },
  { title: "Produktiv bleiben", text: "Verhindern Sie Ausfälle durch Korrosion." },
  { title: "Kosten senken", text: "Längere Lebensdauer, weniger Reparaturen." },
  { title: "Individuelle Lösungen", text: "Maßgeschneiderte Antworten für Ihre Anforderungen." },
];

export default function Solution() {
  return (
    <section
      className="relative overflow-hidden py-16 text-white md:py-24"
      style={{ background: "linear-gradient(135deg, #1d1a47 0%, #100717 100%)" }}
    >
      <div className="mx-auto grid max-w-6xl gap-12 px-5 md:grid-cols-2">
        <div>
          <h2 className="gsap-reveal text-3xl font-extrabold leading-tight md:text-4xl">
            Die Lösung für maximalen Schutz und Produktivität
          </h2>
          <p className="gsap-reveal mt-5 text-sm text-white/80 md:text-base">
            Bei DOLGE Systemtechnik sind wir Experten für saubere Luft und verstehen die
            spezifischen Herausforderungen, denen Sie bei der Wartung und der Sicherheit Ihrer
            Schaltschränke gegenüberstehen.
          </p>
          <p className="gsap-reveal mt-4 text-sm text-white/80 md:text-base">
            Wir setzen auf ganzheitlichen Schutz: Unsere chemisorptiven Luftfilter entfernen
            zuverlässig korrosive Gase, während integrierte Partikelfilter Schmutz und Staub aus der
            Luft filtern.
          </p>
        </div>

        <div>
          <h3 className="gsap-reveal mb-5 text-lg font-bold text-accent">
            Vorteile eines chemisorptiven Luftfiltersystems
          </h3>
          <div className="grid gap-4 sm:grid-cols-2">
            {advantages.map((a) => (
              <div
                key={a.title}
                className="gsap-reveal rounded-xl border border-white/10 bg-white/5 p-4"
              >
                <div className="flex items-center gap-2">
                  <Check className="text-success" />
                  <h4 className="text-sm font-bold">{a.title}</h4>
                </div>
                <p className="mt-1.5 text-xs text-white/70">{a.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
