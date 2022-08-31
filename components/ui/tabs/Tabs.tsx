import styled from "styled-components";
import { ReactElement, useState } from "react";

const Tabs = ({ children, $mb }: TabsProps) => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <>
      <Root mb={$mb || "0"}>
        <TabsContainer>
          {children.map((item, i) => (
            <Title
              key={i}
              onClick={() => setActiveTab(i)}
              active={i === activeTab}
            >
              {item.props.title}
            </Title>
          ))}
        </TabsContainer>
        <Divider />
      </Root>
      {children[activeTab]}
    </>
  );
};

type TabsProps = {
  children: ReactElement[];
  $mb?: string;
};

const Root = styled.div<{ mb: string }>`
  position: relative;
  margin-bottom: ${({ mb }) => mb};
`;

const TabsContainer = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
`;

const Title = styled.li<{ active: boolean }>`
  font: ${({ theme }) =>
    `700 ${[Object.values(theme.typography.variants.textSingle200)][0].join(
      "/"
    )} ${theme.typography.fonts.thicccboi700}`};

  color: ${({ theme, active }) =>
    active ? theme.colors.accent : theme.colors.neutral600};
  padding-inline: 1.5rem;
  padding-bottom: 0.75rem;
  border-bottom: 2px solid
    ${({ theme, active }) => active && theme.colors.accent};
  cursor: pointer;
`;

const Divider = styled.div`
  position: absolute;
  width: 100%;
  bottom: 0;
  z-index: -1;
  border-bottom: 2px solid ${({ theme }) => theme.colors.neutral600};
`;

export default Tabs;
