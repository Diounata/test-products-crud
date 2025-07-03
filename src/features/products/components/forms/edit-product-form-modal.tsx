"use client";
import { parseAsString, useQueryState } from "nuqs";

import { ProductFormModal } from "./product-form-modal";

import { useEditProduct } from "@/features/products/hooks/forms/use-edit-product-form";

interface Props {
  productId: string;
}

export function EditProductFormModal({ productId }: Props) {
  const [editingProductId, setEditingProductId] = useQueryState(
    "editar-produto",
    parseAsString,
  );
  const { editProductForm, onSubmit } = useEditProduct({ productId });

  return (
    <ProductFormModal
      form={editProductForm}
      isOpen={editingProductId === productId}
      type="EDIT"
      onOpenChange={() => setEditingProductId(null)}
      onSubmit={onSubmit}
    />
  );
}
