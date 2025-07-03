"use client";
import { Button } from "@heroui/button";
import { Plus } from "lucide-react";
import { parseAsBoolean, useQueryState } from "nuqs";

import { CreateProductFormModal } from "./forms/create-product-form-modal";

export function ProductsHeader() {
  const [, setIsCreatingProduct] = useQueryState(
    "criar-produto",
    parseAsBoolean.withDefault(false),
  );

  return (
    <header className="flex flex-col gap-4 py-4 sm:flex-row sm:items-center sm:justify-between">
      <h1 className="text-2xl font-bold">Produtos disponíveis</h1>

      <Button
        color="primary"
        radius="sm"
        onPress={() => {
          setIsCreatingProduct(true);
        }}
      >
        <Plus /> Novo
      </Button>

      <CreateProductFormModal />
    </header>
  );
}
