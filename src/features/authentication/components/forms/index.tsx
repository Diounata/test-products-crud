import { Button } from "@heroui/button";
import { FormProvider, UseFormReturn } from "react-hook-form";

import { If } from "@/components/if";
import { Input } from "@/components/ui/form/input";

interface Props {
  type?: "SIGN-IN" | "SIGN-UP";
  form: UseFormReturn<any>;
  onSubmit: (data: any) => void;
}

export function AuthenticationForm({
  type = "SIGN-IN",
  form,
  onSubmit,
}: Props) {
  return (
    <FormProvider {...form}>
      <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
        <If condition={type === "SIGN-UP"}>
          <Input isRequired label="Nome" name="name" />
          <Input
            isRequired
            label="Telefone"
            mask="(##) #####-####"
            name="phone"
          />
        </If>

        <Input isRequired label="E-mail" name="email" />
        <Input isRequired label="Senha" name="password" type="password" />

        <If condition={type === "SIGN-UP"}>
          <Input
            isRequired
            label="Repetir senha"
            name="verifyPassword"
            type="password"
          />
        </If>

        <Button className="w-full" color="primary" size="lg" type="submit">
          {type === "SIGN-IN" ? "Entrar" : "Registrar conta"}
        </Button>
      </form>
    </FormProvider>
  );
}
