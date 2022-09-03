import styled from "styled-components";
import { useState } from "react";
import { ArrowDownIcon, LogOutIcon, SettingsIcon } from "../../assets";

import Link from "next/link";
import { useAppDispatch } from "../../store/store";
import { logOut } from "../../store/ducks/user";

const Dropdown = (props: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useAppDispatch();
  return (
    <Root>
      <DropdownLabel onClick={() => setIsOpen((p) => !p)}>
        <Label>{props.label}</Label>
        <ArrowIconStyled isOpen={isOpen} />
      </DropdownLabel>
      {isOpen && (
        <DropdownItems>
          <Link href="/settings">
            <DropdownItem>
              <SettingsIcon />
              <Label>Settings</Label>
            </DropdownItem>
          </Link>
          <Link href="/">
            <DropdownItem onClick={() => dispatch(logOut())}>
              <LogOutIcon />
              <Label>Logout</Label>
            </DropdownItem>
          </Link>
        </DropdownItems>
      )}
    </Root>
  );
};

type DropdownProps = {
  label: string;
};

const Root = styled.div`
  position: relative;
`;

const DropdownLabel = styled.div`
  cursor: pointer;
  display: flex;
  gap: 0.75rem;
`;
const DropdownItems = styled.ul`
  display: grid;
  gap: 2rem;
  position: absolute;
  right: 0;
  top: 2rem;
  padding: 2rem 1.5rem;
  border-radius: 12px;
  list-style: none;
  background-color: ${({ theme: { colors } }) => colors.neutral700};
`;
const DropdownItem = styled.li`
  display: flex;
  cursor: pointer;
  gap: 0.9rem;
  color: ${({ theme }) => theme.colors.neutral100};
`;

const Label = styled.p`
  font: ${({
    theme: {
      variants: {
        textSingle300: { lineHeight, fontFamily, fontSize },
      },
    },
  }) => `${fontSize}/${lineHeight} ${fontFamily}`};
`;
const ArrowIconStyled = styled(ArrowDownIcon)<{ isOpen: boolean }>`
  transform: ${({ isOpen }) => (isOpen ? "rotate(180deg)" : "")};
`;

export default Dropdown;
