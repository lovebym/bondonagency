import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

const DATA_DIR = path.join(process.cwd(), ".data");
const EVENTS_FILE = path.join(DATA_DIR, "events.json");

async function ensure() {
  await fs.mkdir(DATA_DIR, { recursive: true });
  try {
    await fs.access(EVENTS_FILE);
  } catch {
    await fs.writeFile(EVENTS_FILE, JSON.stringify([], null, 2), "utf8");
  }
}

export async function POST(req: NextRequest) {
  try {
    const payload = await req.json();
    await ensure();
    const now = new Date().toISOString();
    const content = await fs.readFile(EVENTS_FILE, "utf8");
    const list = JSON.parse(content || "[]");
    list.push({ receivedAt: now, ...payload });
    await fs.writeFile(EVENTS_FILE, JSON.stringify(list, null, 2), "utf8");
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}


