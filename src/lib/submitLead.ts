export type SubmitState =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "success" }
  | { status: "error"; message: string };

export type LeadType = "contact" | "risk" | "booklet";

/** Schickt die Formulardaten an die Mail-API. Eine Funktion für alle drei Formulare. */
export async function submitLead(
  type: LeadType,
  fields: Record<string, unknown>
): Promise<SubmitState> {
  try {
    const res = await fetch("/api/lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ type, fields }),
    });
    if (!res.ok) {
      const data = (await res.json().catch(() => null)) as { error?: string } | null;
      return { status: "error", message: data?.error ?? "Senden fehlgeschlagen. Bitte später erneut versuchen." };
    }
    return { status: "success" };
  } catch {
    return { status: "error", message: "Netzwerkfehler. Bitte prüfen Sie Ihre Verbindung." };
  }
}
