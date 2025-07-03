"use client";
import type { ThemeProviderProps } from "next-themes";

import { ToastProvider } from "@heroui/react";
import { HeroUIProvider } from "@heroui/system";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import * as dateFns from "date-fns";
import { ptBR } from "date-fns/locale";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { useRouter } from "next/navigation";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import * as React from "react";

export interface ProvidersProps {
  children: React.ReactNode;
  themeProps?: ThemeProviderProps;
}

declare module "@react-types/shared" {
  interface RouterConfig {
    routerOptions: NonNullable<
      Parameters<ReturnType<typeof useRouter>["push"]>[1]
    >;
  }
}

const queryClient = new QueryClient();

export function DependenciesProviders({
  children,
  themeProps,
}: ProvidersProps) {
  const router = useRouter();

  dateFns.setDefaultOptions({
    locale: ptBR,
  });

  return (
    <QueryClientProvider client={queryClient}>
      <HeroUIProvider navigate={router.push}>
        <NuqsAdapter>
          <NextThemesProvider {...themeProps}>{children}</NextThemesProvider>
          <ToastProvider placement="top-center" />
        </NuqsAdapter>
      </HeroUIProvider>
    </QueryClientProvider>
  );
}
