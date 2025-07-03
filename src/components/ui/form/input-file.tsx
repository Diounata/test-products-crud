import { Input as HeroInput, InputProps } from "@heroui/input";
import { ChangeEvent } from "react";
import { Controller, useFormContext } from "react-hook-form";

interface Props extends InputProps {
  name: string;
}

export function InputFile({ name, ...props }: Props) {
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
          type="file"
          onBlur={onBlur}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            onChange(e.target.files && e.target.files[0]);
          }}
        />
      )}
    />
  );
}
