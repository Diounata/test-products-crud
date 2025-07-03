import { addToast } from "@heroui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCallback } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import { useAuthenticationStore } from "../../stores/authentication-store";

import { setAccessTokenCookie } from "@/features/authentication/actions/set-access-token-cookie";
import { useSignUpMutation } from "@/features/authentication/hooks/react-query/use-sign-up-mutation";
import {
  SignUpUserFormInput,
  signUpUserFormSchema,
} from "@/features/authentication/validators/sign-up-user-form-schema";

export function useSignUpUser() {
  const { setToken } = useAuthenticationStore();
  const signUpUserForm = useForm<SignUpUserFormInput>({
    resolver: zodResolver(signUpUserFormSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      verifyPassword: "",
      phone: "",
    },
  });

  const signUpMutation = useSignUpMutation({ form: signUpUserForm });

  const onSubmit: SubmitHandler<SignUpUserFormInput> = useCallback(
    async ({ name, email, password, verifyPassword, phone }) => {
      const response = await signUpMutation.mutateAsync({
        name,
        email,
        password,
        verifyPassword,
        phone: {
          country: "+55",
          ddd: phone.substring(0, 2),
          number: phone.substring(2),
        },
      });

      window.localStorage.setItem("accessToken", response.data.token);
      await setAccessTokenCookie(response.data.token);
      setToken(response.data.token);

      addToast({
        title: "Conta criada com sucesso",
        color: "success",
      });
    },
    [signUpUserForm],
  );

  return {
    signUpUserForm,
    onSubmit,
  };
}
