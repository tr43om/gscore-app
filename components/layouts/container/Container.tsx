import { ReactNode } from "react";
import styled from "styled-components";

const Container = (props: ContainerProps) => {
  return <Root>{props.children}</Root>;
};

const Root = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 79.125rem;

  padding: 2rem 1rem;
  margin: 0 auto;
`;

type ContainerProps = {
  children: ReactNode;
};

export default Container;
