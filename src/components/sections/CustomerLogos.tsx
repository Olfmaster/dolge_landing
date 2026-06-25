import Image from "next/image";

const logos = [
  { src: "/images/logos/kmb.png", alt: "KMB Kommunalwirtschaft Mittlere Bergstraße" },
  { src: "/images/logos/palm.jpg", alt: "Palm" },
  { src: "/images/logos/stadtwerke-verden.png", alt: "Stadtwerke Verden" },
  { src: "/images/logos/leipa.png", alt: "LEIPA" },
  { src: "/images/logos/holcim.png", alt: "Holcim" },
  { src: "/images/logos/kp.png", alt: "Carl Macher Hülsenpapiere" },
  { src: "/images/logos/hcb.png", alt: "HCB" },
  { src: "/images/logos/bwb.png", alt: "BWB" },
  { src: "/images/logos/steb-koeln.jpg", alt: "Stadtentwässerungsbetriebe Köln" },
  { src: "/images/logos/logo1.png", alt: "Partnerunternehmen" },
];

export default function CustomerLogos() {
  return (
    <section className="border-b border-black/5 bg-white py-10">
      <div className="mx-auto max-w-6xl px-5">
        <div className="grid grid-cols-3 items-center gap-x-6 gap-y-8 sm:grid-cols-5">
          {logos.map((l) => (
            <div key={l.src} className="gsap-reveal flex items-center justify-center">
              <Image
                src={l.src}
                alt={l.alt}
                width={140}
                height={56}
                className="h-10 w-auto max-w-[140px] object-contain opacity-70 grayscale transition hover:opacity-100 hover:grayscale-0"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
