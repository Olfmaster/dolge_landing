# DOLGE Schaltschrank-Landingpage (2026)

Moderner Nachbau der Landingpage „Schaltschrank-Schutz" im DOLGE-CI mit **Next.js 16**,
**Tailwind CSS v4** und **GSAP**-Animationen. Inhalt 1:1 von der bestehenden Seite übernommen.

## Stack

- Next.js (App Router, `output: "standalone"`)
- Tailwind CSS v4 (CI-Tokens in `src/app/globals.css` via `@theme`)
- GSAP + ScrollTrigger (`src/components/ScrollAnimations.tsx`)
- Formularversand per nodemailer/SMTP (`src/app/api/lead/route.ts`)

## Lokal starten

```bash
npm install
npm run dev        # http://localhost:3000
```

## Formulare (SMTP) konfigurieren

`.env.example` nach `.env.local` kopieren und ausfüllen:

```bash
cp .env.example .env.local
```

| Variable | Bedeutung |
|----------|-----------|
| `SMTP_HOST` / `SMTP_PORT` | Mailserver (z. B. `smtp.hostinger.com` / `587`) |
| `SMTP_USER` / `SMTP_PASS` | Postfach-Zugangsdaten |
| `MAIL_TO` | Empfängeradresse für die Leads |
| `MAIL_FROM` | Absender (optional) |

Ohne SMTP-Konfig zeigen die Formulare eine freundliche Fehlermeldung (Telefonnummer).

Alle drei Formulare (Kontakt, Korrosionsrisiko, Booklet) POSTen an `/api/lead` und werden
serverseitig validiert + per E-Mail zugestellt.

## Deployment (Hostinger VPS)

```bash
npm run build
# Standalone-Output unter .next/standalone
node .next/standalone/server.js   # bzw. via PM2:
# pm2 start .next/standalone/server.js --name dolge-landing --env production
```

Wichtig beim Standalone-Build: `.next/static` und `public/` neben `server.js` bereitstellen
(Next kopiert `public` und `static` mit). Dahinter ein Nginx-Reverse-Proxy auf den gewählten Port.

## Offene Punkte

- `/impressum` und `/datenschutz` sind verlinkt, aber noch nicht angelegt (Rechtstexte folgen).
- „Online Termin"-Tab verweist aktuell auf die Telefonnummer (keine Kalenderbuchung angebunden).
