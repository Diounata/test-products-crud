import { addToast } from "@heroui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { parseAsString, useQueryState } from "nuqs";
import { useCallback, useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import { useEditProductMutation } from "@/features/products/hooks/react-query/use-edit-product-mutation";
import { useEditProductThumbnailMutation } from "@/features/products/hooks/react-query/use-edit-product-thumbnail-mutation";
import { useGetProductQuery } from "@/features/products/hooks/react-query/use-get-product-query";
import {
  EditProductFormInput,
  editProductFormSchema,
} from "@/features/products/validators/edit-product-form-schema";

interface Props {
  productId: string;
}

export function useEditProduct({ productId }: Props) {
  const [, setIsEditingProduct] = useQueryState(
    "editar-produto",
    parseAsString,
  );
  const getProductQuery = useGetProductQuery({ productId });
  const editProductMutation = useEditProductMutation();
  const editProductThumbnailMutation = useEditProductThumbnailMutation();
  const editProductForm = useForm({
    resolver: zodResolver(editProductFormSchema),
    defaultValues: {
      title: "",
      description: "",
      thumbnail: undefined,
    },
  });

  const onSubmit: SubmitHandler<EditProductFormInput> = useCallback(
    async ({ title, description, thumbnail }) => {
      {
        if (thumbnail) {
          await editProductThumbnailMutation.mutateAsync({
            productId,
            thumbnail,
          });
        }
      }

      await editProductMutation.mutateAsync({
        productId,
        title,
        description,
      });

      editProductForm.reset({
        title,
        description,
      });
      getProductQuery.refetch();
      setIsEditingProduct(null);
      addToast({
        title: "Produto editado com sucesso",
        color: "success",
      });
    },
    [editProductForm],
  );

  useEffect(() => {
    if (getProductQuery.isSuccess) {
      const { title, description } = getProductQuery.data.data.data;

      editProductForm.reset({
        title,
        description,
      });
    }
  }, [editProductForm]);

  return {
    editProductForm,
    onSubmit,
  };
}
