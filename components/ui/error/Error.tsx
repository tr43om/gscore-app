import styled from "styled-components";
import { ReactNode } from "react";
import { useTheme } from "styled-components";
import { Typography } from "../typography";

const Error = ({ children }: ErrorProps) => {
  const { typography } = useTheme();

  return (
    <Root>
      <Typography $variant={typography.variants.paragraphSmall}>
        {children}
      </Typography>
    </Root>
  );
};

interface ErrorProps {
  children: ReactNode;
}

const Root = styled.div`
  color: var(--c-system-red-300);
  font-weight: bold;
  margin-top: 0.5rem;
`;

export default Error;
