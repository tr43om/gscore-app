import styled from "styled-components";

const Stepper = (props: StepperProps) => {
  return (
    <Root mb={props.$mb || ""}>
      <Step>
        <StepTitle>Create account</StepTitle>
        <Bar isActive={props.$step >= 1} />
      </Step>
      <Step>
        <StepTitle>Log in</StepTitle>
        <Bar isActive={props.$step >= 2} />
      </Step>
      <Step>
        <StepTitle>Checkout</StepTitle>
        <Bar isActive={props.$step === 3} />
      </Step>
    </Root>
  );
};

type StepperProps = {
  $step: number;
  $mb?: string;
};

const Root = styled.div<{ mb: string }>`
  display: flex;
  gap: 1rem;
  margin-bottom: 4rem;

  @media ${({ theme: { devices } }) => devices.laptopAndBelow} {
    gap: 0.8rem;
    margin-bottom: 2rem;
  }
`;

const Step = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  flex-grow: 1;
`;

const StepTitle = styled.p`
  font: ${({
    theme: {
      variants: {
        textSingle300: { lineHeight, fontFamily, fontSize },
      },
    },
  }) => `${fontSize}/${lineHeight} ${fontFamily}`};

  @media ${({ theme: { devices } }) => devices.laptopAndBelow} {
    font: ${({
      theme: {
        variants: {
          textSingle100Regular: { lineHeight, fontFamily, fontSize },
        },
      },
    }) => `${fontSize}/${lineHeight} ${fontFamily}`};
  }
`;

const Bar = styled.div<{ isActive: boolean }>`
  height: 8px;
  width: 100%;

  background-color: ${({ isActive, theme }) =>
    isActive ? theme.colors.accent : theme.colors.neutral700};
  border-radius: 10px;
`;

export default Stepper;
