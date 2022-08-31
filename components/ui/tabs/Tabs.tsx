import styled from "styled-components";
import { ReactElement, useState } from "react";

const Tabs = ({ children, $mb }: TabsProps) => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <>
      <Root mb={$mb}>
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

const Root = styled.div<{ mb: string | undefined }>`
  position: relative;
  margin-bottom: ${({ mb }) => mb};
`;

const TabsContainer = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
`;

const Title = styled.li<{ active: boolean }>`
  font: ${({
    theme: {
      variants: {
        textSingle200: { lineHeight, fontFamily, fontSize },
      },
    },
  }) => `${fontSize}/${lineHeight} ${fontFamily}`};

  color: ${({ theme: { colors }, active }) =>
    active ? colors.accent : colors.neutral600};
  padding-inline: 1.5rem;
  padding-bottom: 0.75rem;
  border-bottom: 2px solid
    ${({ theme: { colors }, active }) => active && colors.accent};
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
