import styled from "styled-components";

const Divider = (props: DividerProps) => {
  return <Root />;
};

type DividerProps = {};

const Root = styled.div`
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.colors.neutral100};
  opacity: 0.7;
`;

export default Divider;
