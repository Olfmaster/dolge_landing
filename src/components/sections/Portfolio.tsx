"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import Check from "@/components/ui/Check";

const items = [
  {
    label: "Ab-, Um- und Zuluft",
    img: "/images/portfolio/abluft.png",
    text: "DOLGE bietet flexible Filtrationslösungen für Zu-, Um- und Abluft, die unabhängig von Lüftungsanlagen arbeiten können. Unsere Systeme sind sowohl zentral als auch dezentral einsetzbar und bieten vielfältige Anschlussoptionen. So garantieren wir maßgeschneiderte Lösungen für optimale Luftqualität in jeder Umgebung.",
    lead: "Auch als:",
    points: ["Polizeifilter", "Ersatz für Biofilter", "Hallenlüftung"],
  },
  {
    label: "Ausfallvermeidung",
    img: "/images/portfolio/korrosionsausfaelle.png",
    text: "Korrosive Gase in industriellen Umgebungen können teure Ausfälle und Schäden an Ihren Anlagen verursachen. DOLGE bietet Filtersysteme, die effektiv gegen korrosive Gase wirken und Korrosionsschäden eindämmen und präventieren. So optimieren Sie Ihre Anlagenverfügbarkeit und sichern den reibungslosen Betrieb Ihrer Produktion.",
    points: ["Systemausfälle verhindern", "Anlagenverfügbarkeit erhöhen"],
  },
  {
    label: "Geruchsneutralisation",
    img: "/images/portfolio/geruchsneutralisation.png",
    text: "Ob toxisch oder einfach nur übelriechend – wir bieten Lösungen, die sowohl schädliche als auch unangenehme Gase eliminieren. Damit schützen Sie nicht nur Mensch und Umwelt, sondern verhindern auch mögliche Beschwerden durch Geruchsbelästigung.",
    points: ["Schädliche sowie unangenehme Gase entfernen", "Umwelt schützen", "Keine Geruchsbelästigungen"],
  },
  {
    label: "Gebäudetechnik",
    img: "/images/portfolio/gebaeudetechnik.jpg",
    text: "DOLGE Systemtechnik bietet nicht nur Filterlösungen für industrielle Anwendungen, sondern auch für die Gebäudetechnik. Mit unserer vielfältigen Auswahl an Filtermedien sind wir in der Lage, zahlreiche Herausforderungen im Bereich der Gebäudetechnik zu bewältigen. Ob Gase, Gerüche, Partikel, Schimmel, Bakterien oder Viren – wir haben die passende Lösung.",
    points: [
      "Vielfältige Auswahl an Filtermedien",
      "Effektiv gegen Gase, Gerüche, Partikel, Schimmel, Bakterien oder Viren",
      "Integration in vorhandene Lüftungssysteme",
    ],
  },
  {
    label: "Erhaltung von Kulturgütern",
    img: "/images/filter-hero.jpg",
    text: "Schützen Sie wertvolle Kunstwerke vor zerstörerischen Umwelteinflüssen mit den präventiven Konservierungslösungen von DOLGE. Seit über 30 Jahren widmen wir uns dem Schutz des kulturellen Erbes durch fortschrittliche Technologien, die darauf abzielen, Schäden zu verhindern, bevor sie auftreten, oder den Verfall zu stoppen. Investieren Sie in die Zukunft Ihrer Sammlung und sichern Sie die Langlebigkeit Ihrer Artefakte für kommende Generationen.",
    points: ["Präventiver Schutz", "Langlebigkeit"],
  },
  {
    label: "Toxgassicherung",
    img: "/images/portfolio/coupon-2.jpg",
    text: "Der sichere Umgang mit Chlorgas zur effektiven Wasserdesinfektion erfordert spezialisierte Technologien und höchste Sorgfalt, sei es im Trinkwasserbereich, in Schwimmbädern oder in industriellen Prozessen. DOLGE bietet zuverlässige Lösungen, die große Mengen Chlorgas schnell und effektiv neutralisieren, ohne dass Gefahr eines Gasaustritts besteht. Unsere Technologie gewährleistet eine sichere Desinfektion bei minimalen Betriebs- und Wartungskosten sowie maximaler Umweltverträglichkeit.",
    points: ["Chlorgas schnell und effektiv neutralisieren", "Sichere Desinfektion bei minimalen Betriebs- und Wartungskosten"],
  },
  {
    label: "Korrosionsmesssysteme",
    img: "/images/portfolio/coupon-3.jpg",
    text: "Korrosionsmesssysteme spielen eine zentrale Rolle im Schutz industrieller Anlagen vor Korrosionsschäden. Sie ermöglichen eine präzise Überwachung und frühzeitige Erkennung von Korrosion. Der 30-Tage-Test mit Korrosions-Coupons liefert detaillierte Analysen, während kontinuierliche Überwachungssensoren in Echtzeit Parameter messen. Diese Technologien helfen Unternehmen, proaktiv zu handeln, Ausfallzeiten zu minimieren und die Betriebssicherheit zu verbessern.",
    points: ["Schnelle und kostengünstige Korrosionsanalyse", "Daten in Echtzeit", "Einstufung des Korrosionspotentials in die ISA-Klassen"],
  },
];

export default function Portfolio() {
  const [active, setActive] = useState(0);
  const panelRef = useRef<HTMLDivElement>(null);
  const item = items[active];

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (panelRef.current) {
      gsap.fromTo(
        panelRef.current,
        { opacity: 0, y: 12 },
        { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" }
      );
    }
  }, [active]);

  return (
    <section className="bg-slate-50 py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-5">
        <h2 className="gsap-reveal text-center text-2xl font-extrabold text-brand md:text-3xl">
          Effektive Filtration für jede Herausforderung
        </h2>
        <p className="gsap-reveal mx-auto mt-4 max-w-3xl text-center text-sm text-[#1a1a24]/70">
          Was das Auge nicht sieht, fangen wir für Sie ein. Ob Staub, Gase oder feinste Partikel,
          seit über 30 Jahren bieten wir effektive und sichere Luftfiltration.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {items.map((it, i) => (
            <button
              key={it.label}
              onClick={() => setActive(i)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                i === active
                  ? "bg-brand text-white shadow"
                  : "bg-white text-brand hover:bg-brand/5"
              }`}
            >
              {it.label}
            </button>
          ))}
        </div>

        <div
          ref={panelRef}
          className="mt-8 grid items-center gap-8 rounded-2xl border border-black/5 bg-white p-6 shadow-sm md:grid-cols-2 md:p-10"
        >
          <div>
            <h3 className="text-xl font-bold text-brand">{item.label}</h3>
            <p className="mt-3 text-sm leading-relaxed text-[#1a1a24]/75">{item.text}</p>
            {item.lead && (
              <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-[#1a1a24]/50">
                {item.lead}
              </p>
            )}
            <ul className="mt-3 space-y-1.5">
              {item.points.map((p) => (
                <li key={p} className="flex items-center gap-2 text-sm text-[#1a1a24]/80">
                  <Check /> {p}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-slate-100">
            <Image
              src={item.img}
              alt={item.label}
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
