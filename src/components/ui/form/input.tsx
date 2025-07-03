import { Input as HeroInput, InputProps } from "@heroui/input";
import { ChangeEvent } from "react";
import { Controller, useFormContext } from "react-hook-form";

import { formatNumberMask } from "@/utils/format-number-mask";

interface Props extends InputProps {
  name: string;
  mask?: string;
}

export function Input({ name, mask, ...props }: Props) {
  const form = useFormContext();

  return (
    <Controller
      control={form.control}
      name={name}
      render={({
        field: { name, value, onChange, onBlur, ref },
        fieldState: { invalid, error },
      }) => (
        <HeroInput
          {...props}
          ref={ref}
          errorMessage={error?.message}
          isInvalid={invalid}
          name={name}
          value={value}
          onBlur={onBlur}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            if (mask) {
              const value = formatNumberMask(e.currentTarget.value, mask);

              e.currentTarget.value = value;
            }

            onChange(e);
          }}
        />
      )}
    />
  );
}
