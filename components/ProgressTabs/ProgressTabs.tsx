import styled from "styled-components";
import { Typography } from "../ui/typography";
import { useTheme } from "styled-components";
import { variantType } from "../../types";

const ProgressTabs = (props: ProgressTabsProps) => {
  const { typography } = useTheme();
  const { variants } = typography;
  return (
    <Root mb={props.$mb || ""}>
      <Tab>
        <Typography $variant={props.$font || variants.textSingle300}>
          Create account
        </Typography>
        <Bar isActive={props.$step >= 1} />
      </Tab>
      <Tab>
        <Typography $variant={props.$font || variants.textSingle300}>
          Log in
        </Typography>
        <Bar isActive={props.$step >= 2} />
      </Tab>
      <Tab>
        <Typography $variant={props.$font || variants.textSingle300}>
          Checkout
        </Typography>
        <Bar isActive={props.$step === 3} />
      </Tab>
    </Root>
  );
};

type ProgressTabsProps = {
  $font?: variantType;
  $step: number;
  $mb?: string;
};

const Root = styled.div<{ mb: string }>`
  display: flex;
  gap: 1rem;
  margin-bottom: ${({ mb }) => mb};
`;

const Tab = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  flex-grow: 1;
`;

const Bar = styled.div<{ isActive: boolean }>`
  height: 8px;
  width: 100%;

  background-color: ${({ isActive }) =>
    isActive ? "var(--c-accent)" : "var(--c-neutral-700)"};
  border-radius: 10px;
`;

export default ProgressTabs;
