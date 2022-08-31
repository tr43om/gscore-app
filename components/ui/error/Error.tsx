import styled from "styled-components";
import { ReactNode } from "react";

const Error = ({ children }: ErrorProps) => <Root>{children}</Root>;

interface ErrorProps {
  children: ReactNode;
}

const Root = styled.div`
  color: ${({ theme: { colors } }) => colors.systemRed300};
  font: ${({
    theme: {
      variants: {
        paragraphSmall: { lineHeight, fontFamily, fontSize },
      },
    },
  }) => `${fontSize}/${lineHeight} ${fontFamily}`};
  font-weight: bold;
  margin-top: 0.5rem;
`;

export default Error;
