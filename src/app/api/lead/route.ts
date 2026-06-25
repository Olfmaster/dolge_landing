import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

const LABELS: Record<string, string> = {
  contact: "Kontaktanfrage",
  risk: "Korrosionsrisiko-Analyse",
  booklet: "Booklet-Anforderung",
};

export async function POST(req: Request) {
  let payload: { type?: string; fields?: Record<string, unknown> };
  try {
    payload = await req.json();
  } catch {
    return NextResponse.json({ error: "Ungültige Anfrage." }, { status: 400 });
  }

  const { type, fields } = payload;
  if (!type || !LABELS[type] || !fields || typeof fields !== "object") {
    return NextResponse.json({ error: "Unvollständige Daten." }, { status: 400 });
  }

  // Minimal-Validierung: E-Mail muss plausibel sein (alle drei Formulare erfassen eine).
  const email = String(fields.email ?? "");
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Bitte geben Sie eine gültige E-Mail-Adresse an." }, { status: 400 });
  }

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, MAIL_TO, MAIL_FROM } = process.env;
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS || !MAIL_TO) {
    console.error("SMTP-Konfiguration fehlt (SMTP_HOST/SMTP_USER/SMTP_PASS/MAIL_TO).");
    return NextResponse.json(
      { error: "Versand momentan nicht möglich. Bitte rufen Sie uns an: 05651 22730." },
      { status: 500 }
    );
  }

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT ?? 587),
    secure: Number(SMTP_PORT ?? 587) === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });

  const rows = Object.entries(fields)
    .filter(([, v]) => v !== "" && v != null)
    .map(([k, v]) => `${k}: ${Array.isArray(v) ? v.join(", ") : String(v)}`)
    .join("\n");

  try {
    await transporter.sendMail({
      from: MAIL_FROM ?? `DOLGE Landing <${SMTP_USER}>`,
      to: MAIL_TO,
      replyTo: email,
      subject: `[Landing] ${LABELS[type]} – ${String(fields.name ?? email)}`,
      text: `Neue ${LABELS[type]} über die Landingpage:\n\n${rows}\n`,
    });
  } catch (err) {
    console.error("Mailversand fehlgeschlagen:", err);
    return NextResponse.json(
      { error: "Versand fehlgeschlagen. Bitte versuchen Sie es später erneut." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
