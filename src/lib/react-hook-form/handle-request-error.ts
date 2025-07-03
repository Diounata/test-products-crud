import { addToast } from "@heroui/react";
import { AxiosError } from "axios";
import { UseFormReturn } from "react-hook-form";

import { registerFormError } from "./register-form-error";

export interface FormErrorProps {
  name: string;
  message: string;
}

interface Props {
  e: AxiosError<any>;
  form: UseFormReturn<any>;
  formErrors: { [key: string]: FormErrorProps };
}

export function handleAxiosRequestError({ e, form, formErrors }: Props) {
  if (!(e.response?.data.codeIntern in formErrors)) {
    return addToast({
      title: "HTTP error",
      description: "Um erro inexperado aconteceu. Por favor tente novamente.",
      color: "danger",
    });
  }

  registerFormError({
    form,
    ...formErrors[e.response?.data.codeIntern],
  });
}
