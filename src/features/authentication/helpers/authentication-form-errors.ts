import { FormErrorProps } from "@/lib/react-hook-form/handle-request-error";

interface Props {
  [key: string]: FormErrorProps;
}

export const authenticationFormErrors: Props = {
  USR_0004: {
    name: "email",
    message: "Este e-mail já está sendo utilizado",
  },
  ATH_0004: {
    name: "password",
    message: "Credenciais inválidas",
  },
};
