import { addToast } from "@heroui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCallback } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import { setAccessTokenCookie } from "../../actions/set-access-token-cookie";
import { useSignInMutation } from "../react-query/use-sign-in-mutation";

import {
  SignInUserFormInput,
  signInUserFormSchema,
} from "@/features/authentication/validators/sign-in-user-form-schema";

export function useSignInUser() {
  const signInUserForm = useForm<SignInUserFormInput>({
    resolver: zodResolver(signInUserFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const signInMutation = useSignInMutation({ form: signInUserForm });

  const onSubmit: SubmitHandler<SignInUserFormInput> = useCallback(
    async ({ email, password }) => {
      const response = await signInMutation.mutateAsync({ email, password });

      window.localStorage.setItem("accessToken", response.data.token);
      await setAccessTokenCookie(response.data.token);

      addToast({
        title: "Autenticado com sucesso",
        color: "success",
      });
    },
    [signInUserForm],
  );

  return {
    signInUserForm,
    onSubmit,
  };
}
