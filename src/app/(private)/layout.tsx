import { PropsWithChildren } from "react";

import { ThemeSwitch } from "@/components/theme-switch";
import { DashboardHeader } from "@/features/dashboard/components/header";

export default function DashboardLayout({ children }: PropsWithChildren) {
  return (
    <div className="flex min-h-screen flex-col bg-white dark:bg-zinc-900 sm:bg-gray-100 dark:sm:bg-zinc-800">
      <DashboardHeader />

      <main className="p-4 md:p-16 md:py-12">{children}</main>

      <div className="fixed bottom-6 right-6">
        <ThemeSwitch />
      </div>
    </div>
  );
}
