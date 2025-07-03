"use client";
import { Card, CardBody, CardFooter } from "@heroui/card";
import { Button, Image } from "@heroui/react";
import { formatDistanceToNow } from "date-fns";
import { Pencil, Trash2 } from "lucide-react";
import { parseAsString, useQueryState } from "nuqs";

import { EditProductFormModal } from "../forms/edit-product-form-modal";

import { DeleteProductModal } from "./delete-product-modal";

import { useGetProductQuery } from "@/features/products/hooks/react-query/use-get-product-query";

interface Props {
  productId: string;
}

export function ProductCard({ productId }: Props) {
  const getProductQuery = useGetProductQuery({ productId });
  const [, setEditingProductId] = useQueryState(
    "editar-produto",
    parseAsString,
  );
  const [, setDeletingProductId] = useQueryState(
    "deletar-produto",
    parseAsString,
  );

  if (getProductQuery.isLoading) {
    return (
      <Card shadow="sm">
        <CardBody className="overflow-visible p-0">
          <div className="h-[160px] w-full animate-pulse rounded-lg bg-gray-200" />
        </CardBody>
        <CardFooter className="flex-col items-start justify-between py-8 text-small">
          <div className="mb-2 h-6 w-2/3 animate-pulse rounded bg-gray-200" />
          <div className="mb-2 h-4 w-full animate-pulse rounded bg-gray-200" />
          <div className="mb-2 h-4 w-1/3 animate-pulse rounded bg-gray-200" />
          <footer className="mt-5 flex gap-1">
            <div className="h-8 w-20 animate-pulse rounded bg-gray-200" />
            <div className="h-8 w-20 animate-pulse rounded bg-gray-200" />
          </footer>
        </CardFooter>
      </Card>
    );
  }
  if (!getProductQuery.data) return null;

  const product = getProductQuery.data.data.data;
  const { title, description, createdAt, thumbnail } = product;

  return (
    <Card shadow="sm">
      <CardBody className="overflow-visible border-b border-[#eaeaea] dark:border-[#3b3b3b] p-0">
        <Image
          alt={""}
          className="h-[160px] object-contain py-2"
          radius="none"
          src={thumbnail.url}
          width="100%"
        />
      </CardBody>
      <CardFooter className="flex-col items-start justify-between py-8 text-small">
        <p className="text-lg font-bold">{title}</p>
        <p className="line-clamp-3 text-start">{description}</p>
        <p className="text-start opacity-75">
          Criado {formatDistanceToNow(createdAt, { addSuffix: true })}
        </p>
        <footer className="mt-5 flex gap-1">
          <EditProductFormModal productId={productId} />

          <Button
            color="primary"
            size="sm"
            onPress={() => setEditingProductId(productId)}
          >
            <Pencil size={16} />
            Editar
          </Button>

          <DeleteProductModal product={product}>
            <Button
              color="danger"
              size="sm"
              onPress={() => setDeletingProductId(productId)}
            >
              <Trash2 size={16} />
              Deletar
            </Button>
          </DeleteProductModal>
        </footer>
      </CardFooter>
    </Card>
  );
}
