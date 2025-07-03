import { Metadata } from "next";

import { AuthenticationCard } from "@/features/authentication/components/authentication-card";

export const metadata: Metadata = {
  title: "Cadastre-se",
};

export default function SignUpPage() {
  return <AuthenticationCard type="SIGN-UP" />;
}
