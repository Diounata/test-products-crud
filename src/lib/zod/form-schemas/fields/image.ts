import { z } from "zod";

const MAX_SIZE = 5 * 1024 * 1024;
const ACCEPTED_TYPES = ["image/jpeg", "image/png", "image/webp"];

export const image = ({ isOptional = false }: { isOptional?: boolean } = {}) =>
  z
    .any()
    .refine(
      (file) => {
        if (!file && !isOptional) return false;
        if (!file) return true;

        return file instanceof File;
      },
      { message: "Arquivo inválido" },
    )
    .refine(
      (file) => {
        if (!file) return true;

        return file.size <= MAX_SIZE;
      },
      { message: "Imagem muito grande (máx. 5MB)" },
    )
    .refine(
      (file) => {
        if (!file) return true;

        return ACCEPTED_TYPES.includes(file.type);
      },
      { message: "Formato de imagem inválido" },
    )
    .transform((file) => file as File | undefined);
