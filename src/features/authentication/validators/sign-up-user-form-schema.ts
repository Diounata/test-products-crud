import z from "zod";

import { formSchema } from "@/lib/zod/form-schemas";
import { formErrors } from "@/lib/zod/form-schemas/form-errors";

export const signUpUserFormSchema = z
  .object({
    name: formSchema.string.min(3, "O nome deve ter pelo menos 3 caracteres"),
    email: formSchema.email,
    password: formSchema.password,
    verifyPassword: formSchema.password,
    phone: formSchema.phone,
  })
  .refine((data) => data.password === data.verifyPassword, {
    message: formErrors.password.doesNotMatch,
    path: ["verifyPassword"],
  });

export type SignUpUserFormInput = z.infer<typeof signUpUserFormSchema>;
