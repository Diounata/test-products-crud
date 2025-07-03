import { useQuery } from "@tanstack/react-query";

import { ProductApi } from "@/features/products/api/product-api";

interface Props {
  productId: string;
}

export function useGetProductQuery({ productId }: Props) {
  return useQuery({
    queryKey: ["get-product", productId],
    queryFn: async () => ProductApi.getProductById(productId),
  });
}
