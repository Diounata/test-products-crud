"use server";
import { decodeJwt } from "jose";
import { cookies } from "next/headers";
import { redirect, RedirectType } from "next/navigation";

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

  redirect(configuration.paths.dashboard, RedirectType.replace);
}
