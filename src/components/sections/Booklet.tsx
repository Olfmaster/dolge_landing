import Image from "next/image";
import BookletForm from "@/components/forms/BookletForm";

export default function Booklet() {
  return (
    <section id="booklet" className="scroll-mt-20 bg-white py-16 md:py-20">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 md:grid-cols-2">
        <div className="gsap-reveal">
          <div className="relative mx-auto max-w-sm">
            <Image
              src="/images/booklet.jpg"
              alt="Booklet: Korrosionsschutz in elektrischen Betriebsräumen"
              width={600}
              height={600}
              className="h-auto w-full rounded-2xl shadow-card"
            />
          </div>
        </div>

        <div className="gsap-reveal">
          <h2 className="text-2xl font-extrabold leading-tight text-brand md:text-3xl">
            Der unverzichtbare Leitfaden zur Luftqualität und Korrosionsprävention in elektrischen
            Betriebsräumen
          </h2>
          <p className="mt-4 text-sm text-[#1a1a24]/70">
            Erhalten Sie Ihr umfassendes Booklet „Korrosionsschutz in elektrischen Betriebsräumen:
            Ein Leitfaden zur Luftreinhaltung" und entdecken Sie bewährte Strategien, um Ihre
            Elektronik vor Korrosion zu schützen. Dieser Leitfaden bietet wertvolle Tipps und
            Lösungen für eine optimale Luftqualität in Ihren Betriebsräumen. Jetzt herunterladen und
            die Lebensdauer Ihrer Anlagen verlängern!
          </p>

          <div className="mt-6 rounded-2xl border border-black/5 bg-slate-50 p-6 shadow-sm">
            <BookletForm />
          </div>
        </div>
      </div>
    </section>
  );
}
