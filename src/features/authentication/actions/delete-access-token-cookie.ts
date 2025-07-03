"use server";
import { cookies } from "next/headers";
import { redirect, RedirectType } from "next/navigation";

import { configuration } from "@/lib/config/configuration";

export async function deleteAccessTokenCookie() {
  const cookieStore = await cookies();
  const cookieName = "accessToken";

  cookieStore.delete(cookieName);

  redirect(configuration.paths.authentication.signIn, RedirectType.replace);
}
