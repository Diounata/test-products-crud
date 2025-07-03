"use client";
import { cn, Image } from "@heroui/react";
import { useTheme } from "next-themes";

interface Props {
  type?: "FULL" | "ICON";
  className?: string;
}

export function DynamicLogo({ type = "ICON", className }: Props) {
  const { theme } = useTheme();

  return (
    <Image
      suppressHydrationWarning
      alt="prod.ct"
      className={cn("h-40 rounded-none", className)}
      fallbackSrc="https://via.placeholder.com/100x100"
      src={`/logo-${type.toLowerCase()}-${theme ?? "dark"}.png`}
    />
  );
}
