import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@heroui/react";
import { parseAsString, useQueryState } from "nuqs";
import { PropsWithChildren } from "react";

import { useDeleteProductMutation } from "@/features/products/hooks/react-query/use-delete-product-mutation";
import { Product } from "@/features/products/types/product";

interface Props extends PropsWithChildren {
  product: Product;
}

export function DeleteProductModal({ product, children }: Props) {
  const deleteProductMutation = useDeleteProductMutation();
  const [deletingProductId, setDeletingProductId] = useQueryState(
    "deletar-produto",
    parseAsString,
  );

  return (
    <>
      {children}
      <Modal
        isDismissable={false}
        isKeyboardDismissDisabled={true}
        isOpen={product.id === deletingProductId}
        onOpenChange={() => setDeletingProductId(null)}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Deletar produto
              </ModalHeader>
              <ModalBody>
                <p>
                  Tem certeza que deseja deletar o produto{" "}
                  <strong>{product.title}</strong>? Esta ação não pode ser
                  desfeita.
                </p>
              </ModalBody>

              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Fechar
                </Button>

                <Button
                  color="danger"
                  onPress={async () =>
                    await deleteProductMutation.mutateAsync(product.id)
                  }
                >
                  Deletar
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
