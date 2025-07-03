import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { UseFormReturn } from "react-hook-form";

import { AuthenticationApi } from "@/features/authentication/api/authentication-api";
import { authenticationFormErrors } from "@/features/authentication/helpers/authentication-form-errors";
import { handleAxiosRequestError } from "@/lib/react-hook-form/handle-request-error";

interface Props {
  form: UseFormReturn<any>;
}

export function useSignUpMutation({ form }: Props) {
  return useMutation({
    mutationFn: AuthenticationApi.signUp,
    onError: (e) => {
      if (e instanceof AxiosError) {
        handleAxiosRequestError({
          e,
          form,
          formErrors: authenticationFormErrors,
        });
      }
    },
  });
}
