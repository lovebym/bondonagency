import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Skydda /admin/** med Basic Auth. Läser ADMIN_USER och ADMIN_PASS från env.
export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  if (!pathname.startsWith("/admin")) {
    return NextResponse.next();
  }

  const auth = req.headers.get("authorization");
  if (!auth || !auth.toLowerCase().startsWith("basic ")) {
    return unauthorized();
  }

  try {
    const encoded = auth.split(" ")[1] || "";
    const decoded = atob(encoded);
    const [user, pass] = decoded.split(":");
    const envUser = process.env.ADMIN_USER || "";
    const envPass = process.env.ADMIN_PASS || "";

    if (user === envUser && pass === envPass && user && pass) {
      return NextResponse.next();
    }
  } catch {
    // ignore and fallthrough to unauthorized
  }

  return unauthorized();
}

function unauthorized() {
  return new NextResponse("Authentication required", {
    status: 401,
    headers: {
      "WWW-Authenticate": 'Basic realm="Restricted", charset="UTF-8"',
    },
  });
}

export const config = {
  matcher: ["/admin/:path*"],
};


