"use client";

import React from "react";

type Lead = {
  id: string;
  receivedAt: string;
  name: string;
  email: string;
  message: string;
  budget?: string;
  source?: string;
};

export default function LeadsTable({ initialLeads }: { initialLeads: Lead[] }) {
  const [query, setQuery] = React.useState("");
  const [budget, setBudget] = React.useState("");
  const [from, setFrom] = React.useState("");
  const [to, setTo] = React.useState("");

  const leads = React.useMemo(() => {
    return initialLeads
      .filter((l) => {
        if (!query) return true;
        const q = query.toLowerCase();
        return (
          l.name.toLowerCase().includes(q) ||
          l.email.toLowerCase().includes(q) ||
          l.message.toLowerCase().includes(q)
        );
      })
      .filter((l) => (budget ? (l.budget || "").toLowerCase().includes(budget.toLowerCase()) : true))
      .filter((l) => {
        if (!from && !to) return true;
        const d = new Date(l.receivedAt).getTime();
        const after = from ? new Date(from).getTime() : -Infinity;
        const before = to ? new Date(to).getTime() : Infinity;
        return d >= after && d <= before;
      })
      .sort((a, b) => (a.receivedAt < b.receivedAt ? 1 : -1));
  }, [initialLeads, query, budget, from, to]);

  return (
    <div className="p-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Sök namn, e‑post, meddelande"
          className="h-10 rounded-md border border-foreground/20 bg-transparent px-3 text-sm outline-none focus:ring-2 focus:ring-foreground/20"
        />
        <input
          value={budget}
          onChange={(e) => setBudget(e.target.value)}
          placeholder="Budgetfilter"
          className="h-10 rounded-md border border-foreground/20 bg-transparent px-3 text-sm outline-none focus:ring-2 focus:ring-foreground/20"
        />
        <input
          type="date"
          value={from}
          onChange={(e) => setFrom(e.target.value)}
          className="h-10 rounded-md border border-foreground/20 bg-transparent px-3 text-sm outline-none focus:ring-2 focus:ring-foreground/20"
        />
        <input
          type="date"
          value={to}
          onChange={(e) => setTo(e.target.value)}
          className="h-10 rounded-md border border-foreground/20 bg-transparent px-3 text-sm outline-none focus:ring-2 focus:ring-foreground/20"
        />
      </div>
      <div className="mt-4 overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left border-b border-foreground/10">
              <th className="py-2 pr-4">Datum</th>
              <th className="py-2 pr-4">Namn</th>
              <th className="py-2 pr-4">E‑post</th>
              <th className="py-2 pr-4">Budget</th>
              <th className="py-2 pr-4">Meddelande</th>
            </tr>
          </thead>
          <tbody>
            {leads.map((l) => (
              <tr key={l.id} className="border-b border-foreground/5 hover:bg-foreground/5">
                <td className="py-2 pr-4 whitespace-nowrap">{new Date(l.receivedAt).toLocaleString()}</td>
                <td className="py-2 pr-4 whitespace-nowrap">{l.name}</td>
                <td className="py-2 pr-4 whitespace-nowrap">
                  <a href={`mailto:${l.email}`} className="hover:underline">
                    {l.email}
                  </a>
                </td>
                <td className="py-2 pr-4 whitespace-nowrap">{l.budget || "—"}</td>
                <td className="py-2 pr-4 min-w-[300px] max-w-[520px]">
                  <div className="line-clamp-3">{l.message}</div>
                </td>
              </tr>
            ))}
            {leads.length === 0 ? (
              <tr>
                <td colSpan={5} className="py-6 text-center text-foreground/60">
                  Inga leads matchar filtret.
                </td>
              </tr>
            ) : null}
          </tbody>
        </table>
      </div>
    </div>
  );
}


