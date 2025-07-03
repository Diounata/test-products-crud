import { PropsWithChildren } from "react";

import { ThemeSwitch } from "@/components/theme-switch";
import { DashboardHeader } from "@/features/dashboard/components/header";

export default function DashboardLayout({ children }: PropsWithChildren) {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-zinc-900 sm:bg-gray-100 dark:sm:bg-zinc-800">
      <DashboardHeader />

      {children}

      <div className="absolute bottom-6 right-6">
        <ThemeSwitch />
      </div>
    </div>
  );
}
