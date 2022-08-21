import styled from "styled-components";
import { ButtonHTMLAttributes, ReactNode } from "react";
import { Spinner } from "../../spinners";

const PrimaryButton = ({ children, isLoading, onClick }: IButtonProps) => {
  return <Root onClick={onClick}>{!isLoading ? children : <Spinner />}</Root>;
};

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  isLoading?: boolean;
}

const Root = styled.button`
  all: unset;
  display: flex;
  justify-content: center;
  background-color: var(--c-accent);
  color: var(--c-neutral-100);
  cursor: pointer;
  width: 100%;
  max-width: 200px;
  padding-block: 20px;
  border-radius: 4px;
  font-family: ${({ theme }) => theme.typography.fonts.thicccboi700};
  box-shadow: ${({ theme }) => theme.shadows.color03};

  &:hover {
    background-color: var(--c-system-red-400);
    opacity: 1;
  }

  &:focus {
    outline: 4px solid rgba(252, 88, 66, 0.3); // REFACTOR
  }
`;

export default PrimaryButton;
