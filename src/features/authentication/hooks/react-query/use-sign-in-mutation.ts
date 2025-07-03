import { addToast } from "@heroui/react";
import { useMutation } from "@tanstack/react-query";

import { AuthenticationApi } from "../../api/authentication-api";

export function useSignInMutation() {
  return useMutation({
    mutationFn: AuthenticationApi.signIn,
    onError: () => {
      addToast({
        title: "Credenciais inválidas",
        description: "Verifique seu e-mail e senha e tente novamente.",
        color: "danger",
      });
    },
  });
}
