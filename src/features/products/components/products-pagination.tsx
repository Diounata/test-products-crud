import { Button } from "@heroui/react";
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";
import { parseAsInteger, useQueryState } from "nuqs";
import { useEffect } from "react";

import { useListProductsQuery } from "../hooks/react-query/use-list-products-query";

export function ProductsPagination() {
  const listProducts = useListProductsQuery();
  const [page, setPage] = useQueryState(
    "pagina",
    parseAsInteger.withDefault(1),
  );

  const totalPages = listProducts.data?.data.meta.totalPages ?? 1;

  const setFirstPage = () => {
    setPage(1);
  };

  const previousPage = () => {
    if (page === 1) return;
    setPage((page) => page - 1);
  };

  const nextPage = () => {
    if (page === totalPages) return;
    setPage((page) => page + 1);
  };

  const setLastPage = () => {
    setPage(totalPages);
  };

  useEffect(() => {
    if (page <= 0) {
      setPage(1);
    }
  }, [page, setPage]);

  if (totalPages <= 0) return null;

  return (
    <section className="flex items-center justify-center gap-1.5 sm:justify-start">
      <Button
        isIconOnly
        className="size-8"
        isDisabled={page <= 1}
        radius="sm"
        variant="flat"
        onPress={setFirstPage}
      >
        <ChevronsLeft />
      </Button>

      <Button
        isIconOnly
        className="size-8"
        isDisabled={page <= 1}
        radius="sm"
        variant="flat"
        onPress={previousPage}
      >
        <ChevronLeft />
      </Button>

      <p className="mx-2 text-sm font-semibold">
        Página {page} de {totalPages}
      </p>

      <Button
        isIconOnly
        className="size-8"
        isDisabled={page >= totalPages}
        radius="sm"
        variant="flat"
        onPress={nextPage}
      >
        <ChevronRight />
      </Button>

      <Button
        isIconOnly
        className="size-8"
        isDisabled={page >= totalPages}
        radius="sm"
        variant="flat"
        onPress={setLastPage}
      >
        <ChevronsRight />
      </Button>
    </section>
  );
}
