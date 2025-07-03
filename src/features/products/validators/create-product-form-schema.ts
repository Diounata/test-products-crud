import z from "zod";

import { formSchema } from "@/lib/zod/form-schemas";

export type CreateProductInputType = {
  title: string;
  description: string;
  thumbnail: FileList;
};

export const createProductFormSchema = z.object({
  title: formSchema.string,
  description: formSchema.string,
  thumbnail: formSchema.image({ isOptional: false }),
});

export type CreateProductFormInput = z.infer<typeof createProductFormSchema>;
