import Image from "next/image";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-black/5">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
        <a href="#top" className="flex items-center">
          <Image
            src="/images/dolge-logo.png"
            alt="DOLGE Systemtechnik – Ihr Experte für saubere Luft"
            width={150}
            height={48}
            priority
            className="h-9 w-auto md:h-11"
          />
        </a>
        <a
          href="tel:+49565122730"
          className="group flex items-center gap-2 text-brand"
        >
          <span className="hidden text-sm font-semibold sm:inline">Direkt anrufen!</span>
          <span className="flex items-center gap-2 rounded-full bg-brand px-4 py-2 text-sm font-bold text-white transition-colors group-hover:bg-cta">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.6.1.4 0 .8-.3 1l-2.2 2.2z" />
            </svg>
            05651 22730
          </span>
        </a>
      </div>
    </header>
  );
}
