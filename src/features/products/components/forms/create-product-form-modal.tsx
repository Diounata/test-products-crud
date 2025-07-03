"use client";
import { useCreateProduct } from "../../hooks/forms/use-create-product-form";

import { ProductFormModal } from "./product-form-modal";

export function CreateProductFormModal() {
  const {
    createProductForm,
    onSubmit,
    isCreatingProduct,
    setIsCreatingProduct,
  } = useCreateProduct();

  return (
    <ProductFormModal
      form={createProductForm}
      isOpen={isCreatingProduct}
      type="CREATE"
      onOpenChange={setIsCreatingProduct}
      onSubmit={onSubmit}
    />
  );
}
