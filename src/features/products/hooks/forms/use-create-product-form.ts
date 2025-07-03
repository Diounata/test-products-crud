import { addToast } from "@heroui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { parseAsBoolean, useQueryState } from "nuqs";
import { useCallback } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import { useCreateProductMutation } from "../react-query/use-create-product-mutation";
import { useListProductsQuery } from "../react-query/use-list-products-query";

import {
  CreateProductFormInput,
  createProductFormSchema,
} from "@/features/products/validators/create-product-form-schema";

export function useCreateProduct() {
  const [isCreatingProduct, setIsCreatingProduct] = useQueryState(
    "criar-produto",
    parseAsBoolean.withDefault(false),
  );
  const listProductsQuery = useListProductsQuery();
  const createProductMutation = useCreateProductMutation();
  const createProductForm = useForm({
    resolver: zodResolver(createProductFormSchema),
    defaultValues: {
      title: "",
      description: "",
      thumbnail: undefined,
    },
  });

  const onSubmit: SubmitHandler<CreateProductFormInput> = useCallback(
    async ({ title, description, thumbnail }) => {
      if (!thumbnail)
        return addToast({ title: "Thumbnail é obrigatório", color: "danger" });

      await createProductMutation.mutateAsync({
        title,
        description,
        thumbnail,
      });

      createProductForm.reset();
      listProductsQuery.refetch();
      setIsCreatingProduct(false);
      addToast({
        title: "Produto criado com sucesso",
        color: "success",
      });
    },
    [createProductForm],
  );

  return {
    createProductForm,
    onSubmit,
    isCreatingProduct,
    setIsCreatingProduct,
  };
}
