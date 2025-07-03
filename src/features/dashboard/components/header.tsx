"use client";
import { Button } from "@heroui/react";
import { decodeJwt } from "jose";
import { LogOut } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";

import { DynamicLogo } from "@/components/dynamic-logo";
import { deleteAccessTokenCookie } from "@/features/authentication/actions/delete-access-token-cookie";
import { useAuthenticationStore } from "@/features/authentication/stores/authentication-store";
import { configuration } from "@/lib/config/configuration";

export function DashboardHeader() {
  const { user, setUser, logout } = useAuthenticationStore();

  useEffect(() => {
    const token = localStorage.getItem("accessToken") ?? "";
    const { userId, email }: { userId: string; email: string } =
      decodeJwt(token);

    setUser({ id: userId, email });
  }, []);

  return (
    <header className="flex w-full items-center gap-8 bg-white px-4 py-4 shadow-md dark:bg-zinc-900 md:px-16">
      <section className="flex items-center space-x-4">
        <DynamicLogo className="size-12 md:size-16" />
        <h1 className="text-xl font-bold text-gray-800 dark:text-white md:text-4xl">
          prod.ct
        </h1>
      </section>
      <nav className="hidden space-x-4 md:flex">
        <Link
          className="text-xl font-bold text-gray-800 underline dark:text-white"
          href={configuration.paths.dashboard}
        >
          Dashboard
        </Link>
      </nav>
      <div className="ml-auto flex items-center gap-5">
        {user && (
          <span className="hidden text-sm font-semibold text-gray-800 dark:text-white md:block">
            {user.email}
          </span>
        )}
        <Button
          size="md"
          variant="light"
          onPress={async () => {
            logout();
            localStorage.removeItem("accessToken");
            await deleteAccessTokenCookie();
          }}
        >
          <LogOut size={16} />
          Sair
        </Button>
      </div>
    </header>
  );
}
