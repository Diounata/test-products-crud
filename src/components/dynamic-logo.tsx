"use client";
import { cn, Image } from "@heroui/react";
import { useTheme } from "next-themes";

interface Props {
  className?: string;
}

export function DynamicLogo({ className }: Props) {
  const { theme } = useTheme();

  return (
    <Image
      suppressHydrationWarning
      alt="prod.ct"
      className={cn("h-40 rounded-none", className)}
      fallbackSrc="https://via.placeholder.com/100x100"
      src={theme === "dark" ? "/logo-full-dark.png" : "/logo-full-light.png"}
    />
  );
}
