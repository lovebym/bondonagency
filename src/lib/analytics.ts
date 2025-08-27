"use client";

export type EventPayload = {
  name: string;
  props?: Record<string, unknown>;
};

declare global {
  interface Window { _events?: Array<{ t: number } & EventPayload>; }
}

export function track(event: EventPayload) {
  try {
    // Spara i window för snabb debugging
    window._events = window._events || [];
    window._events.push({ t: Date.now(), ...event });
    // Skicka till API (kan bytas till GA4/Pixel)
    fetch("/api/event", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(event),
      keepalive: true,
    });
  } catch {}
}


