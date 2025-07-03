import { useQuery } from "@tanstack/react-query";
import { parseAsInteger, useQueryState } from "nuqs";

import { ProductApi } from "@/features/products/api/product-api";

export function useListProductsQuery() {
  const [page] = useQueryState("pagina", parseAsInteger.withDefault(1));

  return useQuery({
    queryKey: ["list-products", page],
    queryFn: async () => ProductApi.listProducts({ page }),
  });
}
