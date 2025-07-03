import { PropsWithChildren } from "react";

import { ThemeSwitch } from "@/components/theme-switch";

export default function AuthenticationLayout({ children }: PropsWithChildren) {
  return (
    <div className="flex min-h-screen w-screen flex-col items-center justify-center bg-white dark:bg-zinc-900 sm:bg-gray-100 dark:sm:bg-zinc-800">
      {children}

      <div className="absolute bottom-6 right-6">
        <ThemeSwitch />
      </div>
    </div>
  );
}
