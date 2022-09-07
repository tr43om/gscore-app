import styled from "styled-components";
import { CheckIcon } from "../../../../assets";

const Checkbox = (props: CheckboxProps) => {
  return (
    <CheckboxContainer>
      <HiddenCheckbox id={props.id} />
      <StyledCheckbox htmlFor={props.id}>
        <CheckIcon />
      </StyledCheckbox>
    </CheckboxContainer>
  );
};

const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`;

const StyledCheckbox = styled.label`
  display: grid;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  background: ${({ theme: { colors } }) => colors.neutral100};
  border-radius: 7px;
  transition: all 150ms;
  cursor: pointer;
  border: 1px solid ${({ theme: { colors } }) => colors.neutral400};
  box-shadow: ${({ theme: { shadows } }) => shadows.general01};

  & > svg {
    visibility: hidden;
  }
  &:hover {
    background: ${({ theme: { colors } }) => colors.neutral400};
    border-color: ${({ theme: { colors } }) => colors.neutral400};
  }
`;

const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  border: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;

  white-space: nowrap;
  width: 1px;

  &:checked + ${StyledCheckbox} {
    background: ${({ theme: { colors } }) => colors.accent};
    border-color: ${({ theme: { colors } }) => colors.accent};

    & > svg {
      visibility: visible;
    }

    &:hover {
      background: ${({ theme: { colors } }) => colors.systemRed400};
      border-color: ${({ theme: { colors } }) => colors.systemRed400};
    }
  }
`;

type CheckboxProps = {
  id: string;
};

export default Checkbox;
