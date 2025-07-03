"use client";
import { Card, CardBody, CardHeader, Image, Link } from "@heroui/react";
import { PropsWithChildren } from "react";

import { SignInForm } from "./forms/sign-in-form";

interface Props {
  type: "SIGN-IN" | "SIGN-UP";
}

export function AuthenticationCard({ type }: PropsWithChildren<Props>) {
  return (
    <Card className="w-full max-w-lg p-4">
      <CardHeader className="flex-col gap-4">
        <Image alt="Logo" className="h-40 rounded-none" src="/logo-full.png" />
        <h1 className="text-center font-medium text-2xl">
          {type === "SIGN-IN" ? "Entrar" : "Criar conta"}
        </h1>
      </CardHeader>

      <CardBody className="space-y-4">
        {type === "SIGN-IN" ? <SignInForm /> : null}

        <p className="text-sm text-center text-gray-500">
          {type === "SIGN-IN" ? (
            <>
              Não tem uma conta? <Link href="/">Cadastre-se</Link>
            </>
          ) : null}
        </p>
      </CardBody>
    </Card>
  );
}
