"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * Zentrale GSAP-Steuerung. Bleibt die einzige Client-Komponente für Animationen,
 * damit die Sektionen Server-Komponenten bleiben können.
 *
 * - [data-hero]        : Einblend-Timeline beim Laden (gestaffelt)
 * - .gsap-reveal       : Scroll-getriggertes Einblenden (fade + slide up)
 * - [data-count]       : hochzählender Zahlenwert beim Scrollen
 */
export default function ScrollAnimations() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Respektiere Reduced-Motion: alles sofort sichtbar.
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        gsap.set(".gsap-reveal, [data-hero]", { opacity: 1, y: 0, clearProps: "all" });
        document.querySelectorAll<HTMLElement>("[data-count]").forEach((el) => {
          el.textContent = el.dataset.count ?? el.textContent;
        });
        return;
      }

      // Hero-Intro
      gsap.fromTo(
        "[data-hero]",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.9, ease: "power3.out", stagger: 0.12, delay: 0.1 }
      );

      // Scroll-Reveals (gestaffelt pro Sichtbarwerden)
      ScrollTrigger.batch(".gsap-reveal", {
        start: "top 85%",
        onEnter: (els) =>
          gsap.fromTo(
            els,
            { opacity: 0, y: 40 },
            { opacity: 1, y: 0, duration: 0.7, ease: "power2.out", stagger: 0.1, overwrite: true }
          ),
      });

      // Zähler
      document.querySelectorAll<HTMLElement>("[data-count]").forEach((el) => {
        const target = parseFloat(el.dataset.count ?? "0");
        const suffix = el.dataset.suffix ?? "";
        const obj = { val: 0 };
        ScrollTrigger.create({
          trigger: el,
          start: "top 90%",
          once: true,
          onEnter: () =>
            gsap.to(obj, {
              val: target,
              duration: 1.6,
              ease: "power1.out",
              onUpdate: () => {
                el.textContent = Math.round(obj.val).toString() + suffix;
              },
            }),
        });
      });
    });

    return () => ctx.revert();
  }, []);

  return null;
}
