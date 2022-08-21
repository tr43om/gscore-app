import styled from "styled-components";
import IconSpinner from "./assets/Spinner.svg";
import { keyframes } from "styled-components";

const Spinner = ({ $color }: SpinnerProps) => {
  return <StyledSpinner color={$color} />;
};

type SpinnerProps = {
  $color?: string;
};

const spinAnimation = keyframes`
    from {
        transform: rotate(0turn);
    }

    to {
        transform: rotate(1turn);
    }
`;

const StyledSpinner = styled(IconSpinner)<{ color: string }>`
  animation: ${spinAnimation} 1s ease infinite;

  & > path {
    stroke: ${({ color }) => color};
  }
`;

export default Spinner;
