"use client";

import { useState } from "react";
import { submitLead, type SubmitState } from "@/lib/submitLead";

export default function ContactForm() {
  const [tab, setTab] = useState<"kontakt" | "termin">("kontakt");
  const [state, setState] = useState<SubmitState>({ status: "idle" });

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState({ status: "loading" });
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    setState(await submitLead("contact", data));
  }

  const inputCls =
    "w-full rounded-md border border-black/10 bg-white px-3 py-2.5 text-sm text-[#1a1a24] outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20";
  const labelCls = "mb-1 block text-xs font-semibold text-brand";

  return (
    <div className="w-full rounded-2xl bg-white p-6 shadow-card sm:p-7">
      <h2 className="mb-4 text-lg font-bold text-brand">Jetzt unverbindlich beraten lassen!</h2>

      <div className="mb-5 grid grid-cols-2 gap-1 rounded-lg bg-black/5 p-1 text-sm font-semibold">
        <button
          type="button"
          onClick={() => setTab("kontakt")}
          className={`rounded-md py-2 transition ${tab === "kontakt" ? "bg-brand text-white shadow" : "text-brand"}`}
        >
          Kontaktanfrage
        </button>
        <button
          type="button"
          onClick={() => setTab("termin")}
          className={`rounded-md py-2 transition ${tab === "termin" ? "bg-brand text-white shadow" : "text-brand"}`}
        >
          Online Termin
        </button>
      </div>

      {tab === "termin" ? (
        <div className="rounded-lg bg-black/5 p-6 text-center text-sm text-[#1a1a24]/70">
          Wählen Sie „Kontaktanfrage", um Ihre Anfrage direkt zu senden – oder rufen Sie uns an
          unter{" "}
          <a className="font-semibold text-brand" href="tel:+49565122730">
            05651 22730
          </a>
          . Wir vereinbaren gern einen passenden Termin.
        </div>
      ) : state.status === "success" ? (
        <p className="rounded-lg bg-success/10 p-6 text-center text-sm font-semibold text-success">
          Vielen Dank! Ihre Anfrage ist bei uns eingegangen – wir melden uns zeitnah.
        </p>
      ) : (
        <form onSubmit={onSubmit} className="space-y-3">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <div>
              <label className={labelCls} htmlFor="c-name">Name</label>
              <input id="c-name" name="name" required className={inputCls} placeholder="Name" />
            </div>
            <div>
              <label className={labelCls} htmlFor="c-email">E-Mail</label>
              <input id="c-email" name="email" type="email" required className={inputCls} placeholder="E-Mail" />
            </div>
            <div>
              <label className={labelCls} htmlFor="c-phone">Telefonnummer</label>
              <input id="c-phone" name="phone" className={inputCls} placeholder="Telefonnummer" />
            </div>
            <div>
              <label className={labelCls} htmlFor="c-type">Ich bin</label>
              <select id="c-type" name="kundentyp" className={inputCls} defaultValue="Privat">
                <option>Privat</option>
                <option>Geschäftlich</option>
              </select>
            </div>
          </div>
          <div>
            <label className={labelCls} htmlFor="c-msg">Ihre Nachricht</label>
            <textarea id="c-msg" name="message" rows={3} className={inputCls} placeholder="Ihre Nachricht" />
          </div>

          <label className="flex items-start gap-2 text-xs text-[#1a1a24]/70">
            <input type="checkbox" name="datenschutz" required className="mt-0.5" />
            <span>
              Ich akzeptiere die{" "}
              <a href="/datenschutz" className="font-semibold text-brand underline">
                Datenschutzbedingungen
              </a>
              .
            </span>
          </label>

          {state.status === "error" && (
            <p className="text-xs font-semibold text-red-600">{state.message}</p>
          )}

          <button
            type="submit"
            disabled={state.status === "loading"}
            className="w-full rounded-lg bg-cta px-5 py-3 text-sm font-bold text-white transition hover:bg-cta-hover disabled:opacity-60"
          >
            {state.status === "loading" ? "Senden…" : "Senden"}
          </button>
        </form>
      )}
    </div>
  );
}
