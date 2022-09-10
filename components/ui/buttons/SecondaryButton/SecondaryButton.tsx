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
      {!isLoading ? children : <StyledSpinner />}
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
  background-color: ${({ theme: { colors } }) => colors.neutral100};
  color: ${({ theme: { colors } }) => colors.accent};
  cursor: pointer;
  width: 100%;
  max-width: ${({ fullWidth }) => (fullWidth ? "100%" : "200px")};
  padding-block: 20px;
  border-radius: 4px;

  box-shadow: ${({ theme: { shadows } }) => shadows.color03};

  font: ${({
    theme: {
      variants: {
        textSingle100: { lineHeight, fontFamily, fontSize },
      },
    },
  }) => `${fontSize}/${lineHeight} ${fontFamily}`};

  &:hover {
    color: ${({ theme: { colors } }) => colors.systemRed400};
  }

  &:focus {
    outline: 4px solid ${({ theme: { colors } }) => `${colors.neutral100}4c`};
  }
`;

const StyledSpinner = styled(Spinner)`
  & > * {
    stroke: ${({ theme: { colors } }) => colors.accent};
  }
`;

export default SecondaryButton;
