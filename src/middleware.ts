import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

// Hard-block abusive crawlers regardless of robots.txt compliance.
const BLOCKED_BOTS = /AhrefsBot/i;

export function middleware(request: NextRequest) {
  const userAgent = request.headers.get("user-agent") ?? "";

  if (BLOCKED_BOTS.test(userAgent)) {
    return new NextResponse("Forbidden", { status: 403 });
  }

  return NextResponse.next();
}

export const config = {
  // Run on all paths except Next internals and static assets.
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
