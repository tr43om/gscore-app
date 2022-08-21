import { ReactNode } from "react";
import styled from "styled-components";
import { theme } from "../../../styles/theme";

const Typography = ({
  $variant,
  children,
  component = "p",
  $fontFamily,
  $mb,
  $mt,
}: TypographyProps) => {
  return (
    <Root
      variant={$variant}
      as={component}
      fontFamily={$fontFamily}
      mb={$mb || ""}
      mt={$mt || ""}
    >
      {children}
    </Root>
  );
};

type TypographyProps = {
  children: ReactNode;
  component?: string;
  $variant?: {
    fontSize: string;
    lineHeight: string;
  };
  $fontFamily?: string;
  $fontWeight?: string;
  $mb?: string;
  $mt?: string;
};

const Root: any = styled.div<RootProps>`
  font-size: ${({ variant }) =>
    variant?.fontSize || theme.typography.variants.paragraphDefault.fontSize};
  line-height: ${({ variant }) =>
    variant?.lineHeight ||
    theme.typography.variants.paragraphDefault.lineHeight};
  font-weight: ${({ fontWeight }) => fontWeight || "400"};
  font-family: ${({ fontFamily }) =>
    fontFamily || theme.typography.fonts.thicccboi};
  margin-bottom: ${({ mb }) => mb};
  margin-top: ${({ mt }) => mt};
`;

type RootProps = {
  variant: {
    fontSize: string;
    lineHeight: string;
  };
  fontFamily: string;
  fontWeight: string;
  mb: string;
  mt: string;
};

export default Typography;
