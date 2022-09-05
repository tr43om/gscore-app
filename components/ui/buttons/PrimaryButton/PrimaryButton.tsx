import styled from "styled-components";
import { ButtonHTMLAttributes, ReactNode } from "react";
import { Spinner } from "../../spinners";

const PrimaryButton = ({
  children,
  isLoading,
  onClick,
  $textColor,
  $fullWidth = false,
  $mb,
  $mt,
  className,
}: IButtonProps) => {
  return (
    <Root
      onClick={onClick}
      textColor={$textColor}
      fullWidth={$fullWidth}
      mb={$mb || ""}
      mt={$mt || ""}
      className={className}
    >
      {!isLoading ? children : <Spinner />}
    </Root>
  );
};

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  isLoading?: boolean;
  $textColor?: string | undefined;
  $mb?: string;
  $mt?: string;
  $fullWidth?: boolean;
}

type RootProps = {
  mb: string;
  mt: string;
  textColor: string | undefined;

  fullWidth: boolean;
};

const Root = styled.button<RootProps>`
  all: unset;
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.accent};
  color: ${({ textColor, theme: { colors } }) =>
    colors.neutral100 || textColor};
  cursor: pointer;
  width: 100%;
  max-width: ${({ fullWidth }) => (fullWidth ? "100%" : "200px")};
  padding-block: 20px;
  border-radius: 4px;
  box-shadow: ${({ theme }) => theme.shadows.color03};
  margin-bottom: ${({ mb }) => mb};
  margin-top: ${({ mt }) => mt};

  font: ${({
    theme: {
      variants: {
        textSingle100: { lineHeight, fontFamily, fontSize },
      },
    },
  }) => `${fontSize}/${lineHeight} ${fontFamily}`};

  &:hover {
    background-color: ${({ theme }) => theme.colors.systemRed400};
    opacity: 1;
  }

  &:focus {
    outline: 4px solid ${({ theme }) => `${theme.colors.systemRed400}4c`};
  }
`;

export default PrimaryButton;
