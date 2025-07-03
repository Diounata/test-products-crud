import { PropsWithChildren } from "react";

export default function AuthenticationLayout({ children }: PropsWithChildren) {
  return (
    <div className="flex min-h-screen w-screen flex-col items-center justify-center bg-white sm:bg-gray-100">
      {children}
    </div>
  );
}
