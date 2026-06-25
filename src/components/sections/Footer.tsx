import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto max-w-6xl px-5 py-14">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <Image
              src="/images/dolge-logo.png"
              alt="DOLGE Systemtechnik"
              width={160}
              height={52}
              className="h-11 w-auto brightness-0 invert"
            />
            <p className="mt-4 max-w-sm text-sm text-white/60">
              Ihr Experte für saubere Luft – chemisorptive Luftfiltersysteme für Schaltschränke,
              Schalträume und Betriebsräume.
            </p>
            <a
              href="tel:+49565122730"
              className="mt-4 inline-block text-sm font-semibold text-accent"
            >
              05651 22730
            </a>
          </div>

          <div className="md:justify-self-end">
            <h3 className="text-base font-bold">Jetzt gratis Korrosionsschutz-Booklet sichern</h3>
            <p className="mt-2 max-w-sm text-sm text-white/60">
              Melden Sie sich zum DOLGE Newsletter an und erhalten Sie Ihr kostenloses Booklet sofort
              per E-Mail mit wichtigen Informationen, um Ihre Anlagen zu schützen und Ausfälle zu
              vermeiden.
            </p>
            <a
              href="#booklet"
              className="mt-4 inline-flex rounded-lg bg-accent px-5 py-2.5 text-sm font-bold text-white transition hover:brightness-110"
            >
              Booklet anfordern
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row">
          <p>© {new Date().getFullYear()} DOLGE Systemtechnik GmbH</p>
          <nav className="flex gap-6">
            <a href="/impressum" className="hover:text-white">Impressum</a>
            <a href="/datenschutz" className="hover:text-white">Datenschutz</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
