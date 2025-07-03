import { PropsWithChildren, ReactNode } from "react";

interface Props extends PropsWithChildren {
  condition: any;
  fallback?: ReactNode;
}

export function If({ condition, children, fallback = null }: Props) {
  return !!condition ? children : fallback;
}
