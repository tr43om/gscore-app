import styled from "styled-components";
import React, { ReactNode, InputHTMLAttributes } from "react";

// react-hook-form
import {
  UseControllerProps,
  FieldValues,
  useController,
  Path,
} from "react-hook-form";

// components
import { Error, TextField } from "../ui";

const FormInput = <TFormValues extends FieldValues>(
  props: FormInputProps<TFormValues>
) => {
  const {
    field: { onChange, value },
    formState: { errors },
  } = useController(props);

  const errorMessage = errors[props.name]?.message?.toString();

  return (
    <FieldContainer>
      <TextField
        id={props.name}
        placeholder={props.placeholder || "Type a new value..."}
        onChange={(e: React.ChangeEvent) => onChange(e)}
        value={value}
        type={props.type}
        $error={Boolean(errors[props.name])}
        $success={props.$success}
      />
      {errors[props.name]?.message && <Error>{errorMessage}</Error>}
    </FieldContainer>
  );
};

interface FormInputProps<TFormValues extends FieldValues>
  extends UseControllerProps<TFormValues>,
    Omit<InputHTMLAttributes<HTMLInputElement>, "defaultValue"> {
  button?: ReactNode;
  name: Path<TFormValues>;
  $success?: boolean;
}

const FieldContainer = styled.div`
  width: 100%;
`;

export default FormInput;
