import { useMutation } from "@tanstack/react-query";

import { ProductApi } from "@/features/products/api/product-api";

export function useEditProductThumbnailMutation() {
  return useMutation({
    mutationFn: ProductApi.editProductThumbnail,
  });
}
