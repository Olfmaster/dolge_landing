import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://dolge-systemtechnik.de"),
  title: "Schaltschrank-Schutz mit Filtrationstechnologie | DOLGE Systemtechnik",
  description:
    "Schützen Sie Ihre Elektronik mit chemisorptiven Luftfiltersystemen von DOLGE Systemtechnik. Korrosion, Schadgase und Überhitzung in Schaltschränken und Betriebsräumen zuverlässig verhindern.",
  openGraph: {
    title: "Schaltschrank-Schutz mit innovativer Filtrationstechnologie",
    description:
      "Chemisorptive Luftfiltersysteme gegen Korrosion und Elektronikausfälle. Über 20 Jahre Erfahrung.",
    type: "website",
    locale: "de_DE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de" className="h-full" suppressHydrationWarning>
      {/* `js`-Klasse aktiviert die GSAP-Reveal-Startzustände nur bei aktivem JS */}
      <body className="min-h-full flex flex-col bg-white text-[#1a1a24]">
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js');",
          }}
        />
        {children}
      </body>
    </html>
  );
}
