import { InputHTMLAttributes } from "react";
import styled from "styled-components";

import { ErrorIcon, SuccessIcon } from "../../../../assets";

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
  color: ${({ theme }) => theme.colors.neutral700};

  padding: 25px 23px;
  border-radius: 6px;
  caret-color: ${({ theme }) => theme.colors.accent};

  border: 1px solid
    ${({ error, success, theme }) => {
      if (error) {
        return theme.colors.systemRed300;
      } else if (success) {
        return theme.colors.systemGreen;
      } else {
        return theme.colors.neutral300;
      }
    }};
  box-shadow: ${({ theme }) => theme.shadows.color02};

  &::placeholder {
    color: ${({ theme }) => theme.colors.neutral500};
  }
`;

const StyledSuccessIcon = styled(SuccessIcon)<{ success: boolean }>`
  position: absolute;
  display: ${({ success }) => (success ? "block" : "none")};
  top: 25px;
  right: 23px;
  & > path {
    stroke: ${({ theme }) => theme.colors.systemGreen};
  }
`;

const StyledErrorIcon = styled(ErrorIcon)<{ error: boolean }>`
  position: absolute;
  display: ${({ error }) => (error ? "block" : "none")};
  top: 25px;
  right: 23px;
  & > path {
    stroke: ${({ theme }) => theme.colors.systemRed300};
  }
`;

export default TextField;
