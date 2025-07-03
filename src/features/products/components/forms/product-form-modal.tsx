import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@heroui/react";
import { FormProvider, UseFormReturn } from "react-hook-form";

import { Input } from "@/components/ui/form/input";
import { InputFile } from "@/components/ui/form/input-file";
import { Textarea } from "@/components/ui/form/textarea";

interface Props {
  type: "CREATE" | "EDIT";
  form: UseFormReturn<any>;
  onSubmit: (data: any) => void;
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ProductFormModal({
  type,
  form,
  onSubmit,
  isOpen,
  onOpenChange,
}: Props) {
  return (
    <Modal isOpen={isOpen} placement="center" onOpenChange={onOpenChange}>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              {type === "CREATE" ? "Criar produto" : "Editar produto"}
            </ModalHeader>

            <ModalBody>
              <FormProvider {...form}>
                <form
                  className="space-y-4"
                  onSubmit={form.handleSubmit(onSubmit)}
                >
                  <Input isRequired label="Título" name="title" />
                  <Textarea isRequired label="Descrição" name="description" />
                  <InputFile
                    isRequired={type === "CREATE"}
                    label="Foto de capa"
                    name="thumbnail"
                  />

                  <ModalFooter className="px-0">
                    <Button variant="flat" onPress={onClose}>
                      Fechar
                    </Button>

                    <Button color="primary" type="submit">
                      {type === "CREATE" ? "Criar" : "Editar"}
                    </Button>
                  </ModalFooter>
                </form>
              </FormProvider>
            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
