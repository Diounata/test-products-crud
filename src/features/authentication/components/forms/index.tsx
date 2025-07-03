import { Button } from "@heroui/button";
import { FormProvider, UseFormReturn } from "react-hook-form";

import { Input } from "@/components/ui/form/input";

interface Props {
  form: UseFormReturn<any>;
  onSubmit: (data: any) => void;
}

export function AuthenticationForm({ form, onSubmit }: Props) {
  return (
    <FormProvider {...form}>
      <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
        <Input isRequired label="E-mail" name="email" />
        <Input isRequired label="Senha" name="password" type="password" />

        <Button className="w-full" color="primary" size="lg" type="submit">
          Entrar
        </Button>
      </form>
    </FormProvider>
  );
}
