import styled from "styled-components";
import { ReactNode } from "react";
import { useTheme } from "styled-components";
import { Typography } from "../Typography";

const Error = ({ children }: ErrorProps) => <Root>{children}</Root>;

interface ErrorProps {
  children: ReactNode;
}

const Root = styled.div`
  color: ${({ theme }) => theme.colors.systemRed300};
  font: ${({ theme }) =>
    `${[Object.values(theme.typography.variants.paragraphSmall)][0].join(
      "/"
    )} ${theme.typography.fonts.thicccboi}`};
  font-weight: bold;
  margin-top: 0.5rem;
`;

export default Error;
