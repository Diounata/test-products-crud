"use client";
import { Card, CardBody, CardHeader, Image, Link } from "@heroui/react";
import { PropsWithChildren } from "react";

import { SignInForm } from "./forms/sign-in-form";
import { SignUpForm } from "./forms/sign-up-form";

import { configuration } from "@/lib/config/configuration";

interface Props {
  type: "SIGN-IN" | "SIGN-UP";
}

export function AuthenticationCard({ type }: PropsWithChildren<Props>) {
  return (
    <Card className="w-full max-w-lg p-4 shadow-none sm:shadow-md">
      <CardHeader className="flex-col gap-4">
        <Image alt="Logo" className="h-40 rounded-none" src="/logo-full.png" />
        <h1 className="text-center text-2xl font-medium">
          {type === "SIGN-IN" ? "Entrar" : "Registrar conta"}
        </h1>
      </CardHeader>

      <CardBody className="space-y-4">
        {type === "SIGN-IN" ? <SignInForm /> : <SignUpForm />}

        <p className="text-center text-sm text-gray-500">
          {type === "SIGN-IN" ? (
            <>
              Não tem uma conta?{" "}
              <Link href={configuration.paths.authentication.signUp}>
                Registre-se
              </Link>
            </>
          ) : (
            <>
              Já tem uma conta?{" "}
              <Link href={configuration.paths.authentication.signIn}>
                Entrar
              </Link>
            </>
          )}
        </p>
      </CardBody>
    </Card>
  );
}
