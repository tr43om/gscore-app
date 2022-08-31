import styled from "styled-components";
import { SpinnerIcon } from "../../../assets";
import { keyframes } from "styled-components";

const Spinner = ({ $color }: SpinnerProps) => {
  return <StyledSpinner stroke={$color} />;
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

const StyledSpinner = styled(SpinnerIcon)`
  animation: ${spinAnimation} 1s ease infinite;
`;

export default Spinner;
