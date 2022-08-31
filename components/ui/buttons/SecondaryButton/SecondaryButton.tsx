import styled from "styled-components";
import { ButtonHTMLAttributes, ReactNode } from "react";
import { Spinner } from "../../spinners";

const SecondaryButton = ({
  children,
  isLoading,
  onClick,
  $fullWidth = false,
  className,
}: IButtonProps) => {
  return (
    <Root onClick={onClick} fullWidth={$fullWidth} className={className}>
      {!isLoading ? children : <Spinner />}
    </Root>
  );
};

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  isLoading?: boolean;
  $fullWidth?: boolean;
  className?: string;
}

type RootProps = {
  fullWidth: boolean;
};

const Root = styled.button<RootProps>`
  all: unset;
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.neutral100};

  color: ${({ theme }) => theme.colors.accent};
  cursor: pointer;
  width: 100%;
  max-width: ${({ fullWidth }) => (fullWidth ? "100%" : "200px")};
  padding-block: 20px;
  border-radius: 4px;
  font-family: ${({ theme }) => theme.typography.fonts.thicccboi700};
  box-shadow: ${({ theme }) => theme.shadows.color03};

  &:hover {
    color: ${({ theme }) => theme.colors.systemRed400};
  }

  &:focus {
    outline: 4px solid ${({ theme }) => `${theme.colors.neutral100}4c`};
  }
`;

export default SecondaryButton;
