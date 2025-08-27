"use client";

import React from "react";

type FormState = {
  name: string;
  email: string;
  message: string;
  budget?: string;
};

// Enkel kontaktform med klientvalidering och POST till /api/contact
export default function ContactForm() {
  const [form, setForm] = React.useState<FormState>({ name: "", email: "", message: "", budget: "" });
  const [submitting, setSubmitting] = React.useState(false);
  const [success, setSuccess] = React.useState<string | null>(null);
  const [error, setError] = React.useState<string | null>(null);

  function handleChange<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    // Enkel validering
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError("Fyll i namn, e‑post och meddelande.");
      return;
    }
    // Enkel e‑postkontroll
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setError("Ogiltig e‑postadress.");
      return;
    }

    try {
      setSubmitting(true);
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, source: "landing" }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        throw new Error((data && data.error) || "Något gick fel");
      }
      setSuccess("Tack! Vi återkommer inom kort.");
      setForm({ name: "", email: "", message: "", budget: "" });
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : typeof err === "string" ? err : "Kunde inte skicka meddelandet.";
      setError(message);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm mb-1">Namn</label>
          <input
            type="text"
            value={form.name}
            onChange={(e) => handleChange("name", e.target.value)}
            className="w-full rounded-md border border-foreground/20 bg-transparent px-3 py-2 outline-none focus:ring-2 focus:ring-foreground/20"
            placeholder="Ditt namn"
            required
          />
        </div>
        <div>
          <label className="block text-sm mb-1">E‑post</label>
          <input
            type="email"
            value={form.email}
            onChange={(e) => handleChange("email", e.target.value)}
            className="w-full rounded-md border border-foreground/20 bg-transparent px-3 py-2 outline-none focus:ring-2 focus:ring-foreground/20"
            placeholder="namn@företag.se"
            required
          />
        </div>
      </div>

      <div>
        <label className="block text-sm mb-1">Budget (valfritt)</label>
        <input
          type="text"
          value={form.budget}
          onChange={(e) => handleChange("budget", e.target.value)}
          className="w-full rounded-md border border-foreground/20 bg-transparent px-3 py-2 outline-none focus:ring-2 focus:ring-foreground/20"
          placeholder="t.ex. 50–150 tkr/mån"
        />
      </div>

      <div>
        <label className="block text-sm mb-1">Meddelande</label>
        <textarea
          value={form.message}
          onChange={(e) => handleChange("message", e.target.value)}
          className="w-full min-h-[120px] rounded-md border border-foreground/20 bg-transparent px-3 py-2 outline-none focus:ring-2 focus:ring-foreground/20"
          placeholder="Berätta kort om mål, kanaler och tidslinje."
          required
        />
      </div>

      <div className="flex items-center gap-3">
        <button
          type="submit"
          disabled={submitting}
          className="inline-flex h-10 items-center rounded-md bg-foreground px-4 text-background text-sm font-medium hover:opacity-90 disabled:opacity-60"
        >
          {submitting ? "Skickar…" : "Skicka"}
        </button>
        {success ? <span className="text-sm text-green-600">{success}</span> : null}
        {error ? <span className="text-sm text-red-600">{error}</span> : null}
      </div>
    </form>
  );
}


