import z from "zod";

import { formSchema } from "@/lib/zod/form-schemas";

export const editProductFormSchema = z.object({
  title: formSchema.string,
  description: formSchema.string,
  thumbnail: formSchema.image({ isOptional: true }),
});

export type EditProductFormInput = z.infer<typeof editProductFormSchema>;
