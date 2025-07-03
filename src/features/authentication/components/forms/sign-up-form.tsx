import { AuthenticationForm } from ".";

import { useSignUpUser } from "@/features/authentication/hooks/forms/sign-up-user-form";

export function SignUpForm() {
  const { signUpUserForm, onSubmit } = useSignUpUser();

  return (
    <AuthenticationForm
      form={signUpUserForm}
      type="SIGN-UP"
      onSubmit={onSubmit}
    />
  );
}
