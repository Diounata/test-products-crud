import { Textarea as HeroTextarea, TextAreaProps } from "@heroui/input";
import { Controller, useFormContext } from "react-hook-form";

interface Props extends TextAreaProps {
  name: string;
}

export function Textarea({ name, ...props }: Props) {
  const form = useFormContext();

  return (
    <Controller
      control={form.control}
      name={name}
      render={({
        field: { name, value, onChange, onBlur, ref },
        fieldState: { invalid, error },
      }) => (
        <HeroTextarea
          {...props}
          ref={ref}
          errorMessage={error?.message}
          isInvalid={invalid}
          name={name}
          value={value}
          onBlur={onBlur}
          onChange={onChange}
        />
      )}
    />
  );
}
