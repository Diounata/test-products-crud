import { useSignInUser } from "../../hooks/forms/sign-in-user-form";

import { AuthenticationForm } from ".";

export function SignInForm() {
  const { signInUserForm, onSubmit } = useSignInUser();

  return <AuthenticationForm form={signInUserForm} onSubmit={onSubmit} />;
}
