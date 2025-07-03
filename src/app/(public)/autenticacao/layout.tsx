import { PropsWithChildren } from "react";

export default function AuthenticationLayout({ children }: PropsWithChildren) {
  return (
    <div className="flex min-h-screen w-screen bg-gray-100 items-center justify-center flex-col">
      {children}
    </div>
  );
}
