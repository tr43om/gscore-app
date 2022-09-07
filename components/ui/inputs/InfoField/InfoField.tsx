import styled from "styled-components";
import { InputHTMLAttributes, ReactNode } from "react";

const InfoField = (props: InfoFieldProps) => {
  return (
    <Root>
      <Input
        defaultValue={props.defaultValue}
        isWithIcon={Boolean(props.icon)}
      />
      <Icon>{props.icon}</Icon>
    </Root>
  );
};

const Root = styled.div`
  position: relative;
  display: flex;
`;

const Input = styled.input.attrs({ disabled: true })<{ isWithIcon: boolean }>`
  all: unset;
  width: 100%;
  color: ${({ theme: { colors } }) => colors.neutral500};
  background-color: ${({ theme: { colors } }) => colors.neutral600};
  border-radius: 12px;
  padding: 25px 23px;
  padding-right: ${({ isWithIcon }) => isWithIcon && "5rem"};

  white-space: nowrap;
  text-overflow: ellipsis;

  overflow: hidden;
`;

const Icon = styled.div`
  position: absolute;
  cursor: pointer;
  top: 25px;
  right: 23px;

  &:hover {
    opacity: 0.7;
  }
`;

interface InfoFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: ReactNode;
}

export default InfoField;
