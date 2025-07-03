import z from "zod";

import { formSchema } from "@/lib/zod/form-schemas";

export const signInUserFormSchema = z.object({
  email: formSchema.email,
  password: formSchema.password,
});

export type SignInUserFormInput = z.infer<typeof signInUserFormSchema>;
