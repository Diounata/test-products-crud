import { useMutation } from "@tanstack/react-query";

import { ProductApi } from "@/features/products/api/product-api";

export function useCreateProductMutation() {
  return useMutation({
    mutationFn: ProductApi.createProduct,
  });
}
