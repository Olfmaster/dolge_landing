"use client";

import { useState } from "react";
import { submitLead, type SubmitState } from "@/lib/submitLead";

export default function BookletForm() {
  const [state, setState] = useState<SubmitState>({ status: "idle" });

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState({ status: "loading" });
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    setState(await submitLead("booklet", data));
  }

  const inputCls =
    "w-full rounded-md border border-black/10 bg-white px-3 py-2.5 text-sm outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20";

  if (state.status === "success") {
    return (
      <p className="rounded-lg bg-success/10 p-6 text-center text-sm font-semibold text-success">
        Danke! Wir senden Ihnen das Booklet in Kürze per E-Mail zu.
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-3">
      <div>
        <label className="mb-1 block text-xs font-semibold text-brand" htmlFor="b-name">
          Ihr Name
        </label>
        <input id="b-name" name="name" required className={inputCls} placeholder="Ihr Name" />
      </div>
      <div>
        <label className="mb-1 block text-xs font-semibold text-brand" htmlFor="b-email">
          E-Mail
        </label>
        <input id="b-email" name="email" type="email" required className={inputCls} placeholder="E-Mail" />
      </div>
      <div>
        <label className="mb-1 block text-xs font-semibold text-brand" htmlFor="b-type">
          Ich bin:
        </label>
        <select id="b-type" name="kundentyp" defaultValue="Gewerblich" className={inputCls}>
          <option>Gewerblich</option>
          <option>Privat</option>
        </select>
      </div>

      <label className="flex items-start gap-2 text-xs text-[#1a1a24]/70">
        <input type="checkbox" name="datenschutz" required className="mt-0.5" />
        <span>Es gelten unsere Datenschutzbestimmungen.</span>
      </label>

      {state.status === "error" && (
        <p className="text-xs font-semibold text-red-600">{state.message}</p>
      )}

      <button
        type="submit"
        disabled={state.status === "loading"}
        className="w-full rounded-lg bg-cta px-5 py-3 text-sm font-bold text-white transition hover:bg-cta-hover disabled:opacity-60"
      >
        {state.status === "loading" ? "Senden…" : "Weiter"}
      </button>
      <p className="text-center text-[11px] text-[#1a1a24]/60">
        Sie erhalten unser Booklet kostenlos als PDF per E-Mail. Wir versenden keine Werbung an Sie.
      </p>
    </form>
  );
}
