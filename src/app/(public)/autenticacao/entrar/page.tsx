import { Metadata } from "next";

import { AuthenticationCard } from "@/features/authentication/components/authentication-card";

export const metadata: Metadata = {
  title: "Entrar",
};

export default function SignInPage() {
  return <AuthenticationCard type="SIGN-IN" />;
}
