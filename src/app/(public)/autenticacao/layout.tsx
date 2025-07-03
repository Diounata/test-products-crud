import { PropsWithChildren } from "react";

import { ThemeSwitch } from "@/components/theme-switch";

export default function AuthenticationLayout({ children }: PropsWithChildren) {
  return (
    <div className="flex min-h-screen w-screen flex-col items-center justify-center bg-white sm:bg-gray-100 dark:bg-zinc-900 dark:sm:bg-zinc-800">
      {children}
      <ThemeSwitch />
    </div>
  );
}
