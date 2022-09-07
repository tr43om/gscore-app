import styled from "styled-components";
import { InputHTMLAttributes, useState } from "react";
import { copyTextToClipboard } from "../../../../helpers";
import { ClipboardIcon } from "../../../../assets";

const InfoField = ({ defaultValue, copy = false }: InfoFieldProps) => {
  const [isCopied, setIsCopied] = useState(false);
  const onCopy = async () => {
    await copyTextToClipboard(`${defaultValue}`)
      .then(() => {
        setIsCopied(true);
        setTimeout(() => {
          setIsCopied(false);
        }, 1500);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <Root>
      <Input defaultValue={defaultValue} isWithIcon={copy} />
      {copy && (
        <Icon>
          {isCopied ? (
            "copied"
          ) : (
            <ClipboardIcon width={30} height={30} onClick={onCopy} />
          )}
        </Icon>
      )}
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
  copy?: boolean;
}

export default InfoField;
