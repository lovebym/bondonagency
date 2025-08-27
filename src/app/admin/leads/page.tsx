import { promises as fs } from "fs";
import path from "path";
import LeadsTable from "@/components/LeadsTable";

type Lead = {
  id: string;
  receivedAt: string;
  name: string;
  email: string;
  message: string;
  budget?: string;
  source?: string;
  contacted?: boolean;
};

async function readLeads(): Promise<Lead[]> {
  const file = path.join(process.cwd(), ".data", "contact.json");
  try {
    const content = await fs.readFile(file, "utf8");
    const json = JSON.parse(content || "[]");
    return Array.isArray(json) ? json : [];
  } catch {
    return [];
  }
}

export const dynamic = "force-dynamic";

export default async function LeadsPage() {
  const leads = await readLeads();
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 py-10">
      <h1 className="text-2xl font-semibold">Leads</h1>
      <p className="mt-1 text-sm text-foreground/80">{leads.length} inkomna förfrågningar.</p>
      <div className="mt-6 rounded-xl border border-foreground/10">
        <LeadsTable initialLeads={leads} />
      </div>
    </div>
  );
}


