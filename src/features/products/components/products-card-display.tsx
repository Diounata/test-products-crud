"use client";
import { ProductCard } from "./product-card";
import { ProductsPagination } from "./products-pagination";

import { Loading } from "@/components/ui/loading";
import { useListProductsQuery } from "@/features/products/hooks/react-query/use-list-products-query";

export function ProductsCardDisplay() {
  const listProductsQuery = useListProductsQuery();

  if (listProductsQuery.isLoading) {
    return <Loading label="Carregando produtos..." />;
  }

  return (
    <section className="flex flex-col gap-4 mb-4">
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5">
        {listProductsQuery.data?.data.data.map((product) => (
          <ProductCard key={product.id} productId={product.id} />
        ))}
      </div>

      <ProductsPagination />
    </section>
  );
}
