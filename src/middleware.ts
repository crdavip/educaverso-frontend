import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getUserMeLoader } from "@/data";

const restrictedIfHasUser = ["/auth/ingreso", "/auth/registro"];

function isRestrictedIfHasUser(path: string): boolean {
  return restrictedIfHasUser.some((route) => path.startsWith(route));
}

export async function middleware(request: NextRequest) {
  const user = await getUserMeLoader();
  const currentPath = request.nextUrl.pathname;

  if (isRestrictedIfHasUser(currentPath) && user.ok === true) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}