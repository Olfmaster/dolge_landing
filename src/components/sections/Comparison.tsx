import Image from "next/image";

export default function Comparison() {
  return (
    <section className="bg-slate-50 py-16 md:py-20">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 md:grid-cols-2">
        <div className="gsap-reveal overflow-hidden rounded-2xl border border-black/5 bg-white p-4 shadow-sm">
          <Image
            src="/images/portfolio/korrosionsausfaelle.png"
            alt="Grafik: Reduktion von Korrosionsausfällen durch DOLGE-Filtration"
            width={1024}
            height={677}
            className="h-auto w-full rounded-lg"
          />
        </div>

        <div>
          <h2 className="gsap-reveal text-2xl font-extrabold text-brand md:text-3xl">
            Lösungen, die überzeugen
          </h2>
          <p className="gsap-reveal mt-4 text-sm text-[#1a1a24]/70">
            Unsere Lösungen bieten eine Kombination aus Langlebigkeit, Energieeffizienz und
            Flexibilität, die herkömmliche Lösungen oft nicht bieten können.
          </p>

          <p className="gsap-reveal mt-6 text-xs font-semibold uppercase tracking-wide text-[#1a1a24]/50">
            Vergleich mit traditionellen Methoden
          </p>

          <div className="mt-4 space-y-4">
            <div className="gsap-reveal rounded-xl border border-black/10 bg-white p-5">
              <h3 className="text-sm font-bold text-[#1a1a24]/60">Traditionelle Lösungen</h3>
              <p className="mt-1.5 text-sm text-[#1a1a24]/70">
                Können oft nicht alle spezifischen Anforderungen moderner Schaltschränke abdecken,
                was zu häufigen Wartungen und Ausfällen führt.
              </p>
            </div>
            <div className="gsap-reveal rounded-xl border-2 border-brand bg-brand/5 p-5">
              <h3 className="text-sm font-bold text-brand">Unsere Lösungen</h3>
              <p className="mt-1.5 text-sm text-[#1a1a24]/80">
                Bieten umfassenden Schutz, erfordern weniger Wartung und sorgen für eine längere
                Lebensdauer Ihrer Elektronik.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
