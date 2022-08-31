import { ReactNode } from "react";
import styled from "styled-components";
const Tab = ({ children }: TabProps) => {
  return <Root>{children}</Root>;
};

const Root = styled.section`
  max-width: 32rem;
`;
type TabProps = {
  title: string;
  children?: ReactNode;
};

export default Tab;
