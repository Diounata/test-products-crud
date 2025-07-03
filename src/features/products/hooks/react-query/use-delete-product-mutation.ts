import { addToast } from "@heroui/react";
import { useMutation } from "@tanstack/react-query";

import { useListProductsQuery } from "./use-list-products-query";

import { ProductApi } from "@/features/products/api/product-api";

export function useDeleteProductMutation() {
  const listProductsQuery = useListProductsQuery();

  return useMutation({
    mutationFn: async (productId: string) =>
      await ProductApi.deleteProduct(productId),
    onSuccess: async () => {
      await listProductsQuery.refetch();
      addToast({ title: "Produto deletado com sucesso!", color: "success" });
    },
  });
}
