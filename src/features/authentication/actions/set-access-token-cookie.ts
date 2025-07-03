"use server";
import { decodeJwt } from "jose";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

import { configuration } from "@/lib/config/configuration";

export async function setAccessTokenCookie(accessToken: string) {
  const cookieStore = await cookies();
  const cookieName = "accessToken";
  const expiresAt = decodeJwt(accessToken).exp;

  cookieStore.set(cookieName, accessToken, {
    httpOnly: true,
    expires: expiresAt ? new Date(expiresAt * 1000) : undefined,
    path: "/",
  });

  return NextResponse.redirect(
    new URL(
      configuration.paths.dashboard,
      process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000",
    ),
  );
}
