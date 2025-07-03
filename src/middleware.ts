import { decodeJwt } from "jose";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

import { configuration } from "./lib/config/configuration";

const protectedRoutes = ["/dashboard"];
const publicRoutes = ["/autenticacao"];

export default async function middleware(req: NextRequest) {
  const cookieStore = await cookies();
  const path = req.nextUrl.pathname;
  const isProtectedRoute = protectedRoutes.some((route) => path.match(route));
  const isPublicRoute = publicRoutes.some((route) => path.match(route));
  const cookie = cookieStore.get("accessToken")?.value;
  const session = cookie ? decodeJwt(cookie) : undefined;
  const isAuthenticated = !!session?.exp;

  if (isProtectedRoute && !isAuthenticated) {
    return NextResponse.redirect(
      new URL(configuration.paths.authentication.signIn, req.nextUrl),
    );
  }

  if (isPublicRoute && isAuthenticated) {
    return NextResponse.redirect(
      new URL(configuration.paths.dashboard, req.nextUrl),
    );
  }

  return NextResponse.next();
}
