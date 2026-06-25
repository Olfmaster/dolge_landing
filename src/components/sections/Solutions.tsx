import Image from "next/image";
import Check from "@/components/ui/Check";

const solutions = [
  {
    img: "/images/products/schaltschraenke.jpg",
    title: "Lösungen für Schaltschränke",
    points: ["Kleinanwendungen lokal vor Ort", "Indoor- & Outdoornutzung"],
  },
  {
    img: "/images/products/schaltraeume.jpg",
    title: "Lösungen für Schalträume",
    points: ["Geschlossene elektrische Betriebsräume", "Um- und Zuluft"],
  },
  {
    img: "/images/products/kleine-loesung.jpg",
    title: "Unsere kleinste Lösung",
    points: ["Wenig Platz", "Kleine Schaltschränke"],
  },
];

export default function Solutions() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-5">
        <h2 className="gsap-reveal text-center text-2xl font-extrabold text-brand md:text-3xl">
          Unsere Lösungen für Ihre individuellen Herausforderungen
        </h2>
        <p className="gsap-reveal mx-auto mt-4 max-w-3xl text-center text-sm text-[#1a1a24]/70">
          Ob für den Schaltschrank, den Schaltraum oder das Klimagerät, bei DOLGE finden wir immer
          eine passende Lösung für Ihre Herausforderungen. Unsere Experten für saubere Luft
          unterstützen Sie gerne.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {solutions.map((s) => (
            <article
              key={s.title}
              className="gsap-reveal overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm transition hover:shadow-card"
            >
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={s.img}
                  alt={s.title}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-brand">{s.title}</h3>
                <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-[#1a1a24]/50">
                  Optimal für:
                </p>
                <ul className="mt-2 space-y-1.5">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-center gap-2 text-sm text-[#1a1a24]/80">
                      <Check /> {p}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="#korrosionsrisiko"
            className="inline-flex rounded-lg bg-cta px-6 py-3 text-sm font-bold text-white transition hover:bg-cta-hover"
          >
            Jetzt Beratung anfordern
          </a>
        </div>
      </div>
    </section>
  );
}
