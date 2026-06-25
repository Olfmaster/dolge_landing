"use client";

import { useState } from "react";
import { submitLead, type SubmitState } from "@/lib/submitLead";

const GASES = ["H2S", "SO2", "NOx", "CL2", "NH3", "Weiß ich nicht"];

export default function RiskForm() {
  const [state, setState] = useState<SubmitState>({ status: "idle" });

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState({ status: "loading" });
    const fd = new FormData(e.currentTarget);
    const fields = Object.fromEntries(fd.entries());
    // Mehrfachauswahl Gase einsammeln
    (fields as Record<string, unknown>).gase = fd.getAll("gase");
    setState(await submitLead("risk", fields as Record<string, unknown>));
  }

  const input =
    "w-full rounded-md border border-white/15 bg-white/10 px-3 py-2.5 text-sm text-white placeholder-white/50 outline-none transition focus:border-white/40 focus:ring-2 focus:ring-white/15";
  const q = "mb-2 block text-sm font-semibold text-white";

  if (state.status === "success") {
    return (
      <div className="rounded-2xl bg-white/10 p-8 text-center">
        <p className="text-lg font-bold text-white">Vielen Dank!</p>
        <p className="mt-2 text-sm text-white/80">
          Wir werten Ihre Angaben aus und melden uns mit einer Einschätzung Ihres Korrosionsrisikos.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-5 sm:grid-cols-2">
      <div className="sm:col-span-2">
        <label className={q} htmlFor="r-sps">Welche SPS/Frequenzumrichter nutzen Sie?</label>
        <input id="r-sps" name="sps" className={input} placeholder="z. B. Siemens S7, …" />
      </div>

      <div className="sm:col-span-2">
        <label className={q} htmlFor="r-fehler">Welche Systemfehler werden Ihnen angezeigt?</label>
        <input id="r-fehler" name="systemfehler" className={input} placeholder="Fehlerbeschreibung" />
      </div>

      <div className="sm:col-span-2">
        <span className={q}>Arbeiten Sie in einer Branche, die von korrosiven Gasen betroffen ist?</span>
        <div className="flex flex-wrap gap-2">
          {GASES.map((g) => (
            <label
              key={g}
              className="flex cursor-pointer items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-sm text-white/90 transition has-[:checked]:border-white has-[:checked]:bg-white/20"
            >
              <input type="checkbox" name="gase" value={g} className="accent-accent" />
              {g}
            </label>
          ))}
        </div>
      </div>

      <div>
        <label className={q} htmlFor="r-geister">Häufig Geister-/intermittierende Fehler?</label>
        <select id="r-geister" name="intermittierend" className={input} defaultValue="">
          <option value="" disabled>Bitte wählen</option>
          <option>Ja</option>
          <option>Nein</option>
        </select>
      </div>

      <div>
        <label className={q} htmlFor="r-lueftung">Ist eine Lüftung/Klimatisierung installiert?</label>
        <select id="r-lueftung" name="lueftung" className={input} defaultValue="">
          <option value="" disabled>Bitte wählen</option>
          <option>Ja</option>
          <option>Nein</option>
          <option>Vielleicht</option>
        </select>
      </div>

      <div>
        <label className={q} htmlFor="r-dezentral">Sind Ihre Schaltschränke dezentral verbaut?</label>
        <select id="r-dezentral" name="dezentral" className={input} defaultValue="">
          <option value="" disabled>Bitte wählen</option>
          <option>Ja</option>
          <option>Nein</option>
        </select>
      </div>

      <div>
        <label className={q} htmlFor="r-umbau">Sind Umbaumaßnahmen geplant oder im Gange?</label>
        <select id="r-umbau" name="umbau" className={input} defaultValue="">
          <option value="" disabled>Bitte wählen</option>
          <option>Ja</option>
          <option>Nein</option>
        </select>
      </div>

      <div className="sm:col-span-2">
        <label className={q} htmlFor="r-anmerkung">Anmerkungen</label>
        <textarea id="r-anmerkung" name="anmerkungen" rows={2} className={input} />
      </div>

      <div className="grid gap-3 sm:col-span-2 sm:grid-cols-3">
        <input name="name" required placeholder="Name*" className={input} />
        <input name="email" type="email" required placeholder="E-Mail*" className={input} />
        <input name="phone" placeholder="Telefon" className={input} />
      </div>

      <label className="flex items-start gap-2 text-xs text-white/70 sm:col-span-2">
        <input type="checkbox" name="datenschutz" required className="mt-0.5 accent-accent" />
        <span>Ich akzeptiere die Datenschutzbedingungen.</span>
      </label>

      {state.status === "error" && (
        <p className="text-xs font-semibold text-red-300 sm:col-span-2">{state.message}</p>
      )}

      <button
        type="submit"
        disabled={state.status === "loading"}
        className="rounded-lg bg-white px-6 py-3 text-sm font-bold text-brand transition hover:bg-white/90 disabled:opacity-60 sm:col-span-2"
      >
        {state.status === "loading" ? "Wird gesendet…" : "Korrosionsrisiko prüfen"}
      </button>
    </form>
  );
}
