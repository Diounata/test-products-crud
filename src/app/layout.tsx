import "@/app/globals.css";
import clsx from "clsx";
import { Metadata } from "next";
import { Inter } from "next/font/google";

import { DependenciesProviders } from "@/components/dependencies-provider";
import { configuration } from "@/lib/config/configuration";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "prod.ct",
    template: `%s - prod.ct`,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen text-foreground bg-background font-sans antialiased",
          inter.className,
        )}
      >
        <DependenciesProviders
          themeProps={{
            attribute: "class",
            defaultTheme: configuration.defaultTheme,
          }}
        >
          {children}
        </DependenciesProviders>
      </body>
    </html>
  );
}
