import { InputHTMLAttributes } from "react";
import styled from "styled-components";
import SuccessIcon from "./assets/SuccessIcon.svg";
import ErrorIcon from "./assets/ErrorIcon.svg";

const TextField = ({
  placeholder = "Placeholder",
  onChange,
  type = "text",
  $error,
  $success,
}: TextFieldProps) => {
  return (
    <Root>
      <Input
        placeholder={placeholder}
        error={$error || false}
        success={$success || false}
        type={type}
        onChange={onChange}
      />
      <StyledSuccessIcon success={$success || false} />
      <StyledErrorIcon error={$error || false} />
    </Root>
  );
};

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  $error?: boolean;
  $success?: boolean;
}

const Root = styled.div`
  position: relative;
`;

const Input = styled.input<{
  error: boolean;
  success: boolean;
}>`
  width: 100%;
  outline: none;
  color: var(--c-neutral-700);

  padding: 25px 23px;
  border-radius: 6px;
  caret-color: var(--c-accent);

  border: 1px solid
    ${({ error, success }) => {
      if (error) {
        return "var(--c-system-red-300)";
      } else if (success) {
        return "var(--c-system-green)";
      } else {
        return "var(--c-neutral-300)";
      }
    }};
  box-shadow: ${({ theme }) => theme.shadows.color02};

  &::placeholder {
    color: var(--c-neutral-500);
  }
`;

const StyledSuccessIcon = styled(SuccessIcon)<{ success: boolean }>`
  position: absolute;
  display: ${({ success }) => (success ? "block" : "none")};
  top: 25px;
  right: 23px;
  & > path {
    stroke: var(--c-system-green);
  }
`;

const StyledErrorIcon = styled(ErrorIcon)<{ error: boolean }>`
  position: absolute;
  display: ${({ error }) => (error ? "block" : "none")};
  top: 25px;
  right: 23px;
  & > path {
    stroke: var(--c-system-red-300);
  }
`;

export default TextField;
