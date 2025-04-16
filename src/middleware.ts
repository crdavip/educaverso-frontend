import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getUserMeLoader } from "@/data";

const protectedRoutes = ["/perfil"];
const restrictedIfHasUser = ["/auth/ingreso", "/auth/registro"];

function isProtectedRoute(path: string): boolean {
  return protectedRoutes.some((route) => path.startsWith(route));
}

function isRestrictedIfHasUser(path: string): boolean {
  return restrictedIfHasUser.some((route) => path.startsWith(route));
}

export async function middleware(request: NextRequest) {
  const user = await getUserMeLoader();
  const currentPath = request.nextUrl.pathname;

  if (isProtectedRoute(currentPath) && user.ok === false) {
    return NextResponse.redirect(new URL("/auth/ingreso", request.url));
  }

  if (isRestrictedIfHasUser(currentPath) && user.ok === true) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}