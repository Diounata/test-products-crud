"use client";
import { Button } from "@heroui/react";
import { LogOut } from "lucide-react";
import Link from "next/link";

import { DynamicLogo } from "@/components/dynamic-logo";
import { deleteAccessTokenCookie } from "@/features/authentication/actions/delete-access-token-cookie";
import { configuration } from "@/lib/config/configuration";

export function DashboardHeader() {
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
      <div className="ml-auto flex gap-5">
        <Button
          size="md"
          variant="light"
          onPress={async () => {
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
