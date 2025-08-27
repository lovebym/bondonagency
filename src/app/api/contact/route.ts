import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

type Payload = {
  name: string;
  email: string;
  message: string;
  budget?: string;
  source?: string;
};

// Spara lokalt till .data/contact.json i projektroten
const DATA_DIR = path.join(process.cwd(), ".data");
const DATA_FILE = path.join(DATA_DIR, "contact.json");

async function ensureDataFile() {
  try {
    await fs.mkdir(DATA_DIR, { recursive: true });
    try {
      await fs.access(DATA_FILE);
    } catch {
      await fs.writeFile(DATA_FILE, JSON.stringify([], null, 2), "utf8");
    }
  } catch (err) {
    console.error("Failed to ensure data file", err);
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as Payload;
    if (!body?.name || !body?.email || !body?.message) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    await ensureDataFile();

    const now = new Date().toISOString();
    const record = { id: `${Date.now()}`, receivedAt: now, ...body };

    const content = await fs.readFile(DATA_FILE, "utf8").catch(() => "[]");
    const list = JSON.parse(content || "[]");
    list.push(record);
    await fs.writeFile(DATA_FILE, JSON.stringify(list, null, 2), "utf8");

    return NextResponse.json({ ok: true, id: record.id });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}


