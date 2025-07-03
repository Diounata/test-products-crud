import { Input as HeroInput, InputProps } from "@heroui/input";
import { Controller, useFormContext } from "react-hook-form";

interface Props extends InputProps {
  name: string;
}

export function Input(props: Props) {
  const form = useFormContext();

  return (
    <Controller
      control={form.control}
      name={props.name}
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
          onChange={onChange}
        />
      )}
    />
  );
}
