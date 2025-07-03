import { useMutation } from "@tanstack/react-query";

import { ProductApi } from "@/features/products/api/product-api";

export function useEditProductMutation() {
  return useMutation({
    mutationFn: ProductApi.editProduct,
  });
}
