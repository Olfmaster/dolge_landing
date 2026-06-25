import { faq } from "@/lib/faq";

export default function Faq() {
  // FAQPage-Schema aus derselben Datenquelle – kein Drift zwischen Anzeige und Markup.
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <section id="faq" className="scroll-mt-20 bg-white py-16 md:py-20">
      <div className="mx-auto max-w-3xl px-5">
        <h2 className="gsap-reveal text-center text-2xl font-extrabold text-brand md:text-3xl">
          Häufige Fragen zu Schaltschrank-Klimatisierung & Korrosionsschutz
        </h2>
        <p className="gsap-reveal mx-auto mt-4 max-w-2xl text-center text-sm text-[#1a1a24]/70">
          Antworten zu Kühlung, Außenaufstellung, korrosiven Gasen und chemisorptiver Filtration.
        </p>

        <div className="mt-10 divide-y divide-black/10 rounded-2xl border border-black/10">
          {faq.map((f) => (
            <details key={f.q} className="group px-5 py-4 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-base font-semibold text-brand">
                {f.q}
                <svg
                  className="shrink-0 text-brand transition-transform duration-200 group-open:rotate-45"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden
                >
                  <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-[#1a1a24]/75">{f.a}</p>
            </details>
          ))}
        </div>
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </section>
  );
}
