import styled from "styled-components";
import { useRef, useState } from "react";
import { ArrowDownIcon, LogOutIcon, SettingsIcon } from "../../assets";
import useOnClickOutside from "../../hooks/useOnOutsideClick";

import Link from "next/link";
import { useAppDispatch } from "../../store/store";
import { logOut } from "../../store/ducks/user";

import { useSelector } from "react-redux";
import { selectUsername } from "../../store/ducks";

const Dropdown = (props: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLUListElement>(null);
  const dispatch = useAppDispatch();

  const username = useSelector(selectUsername);

  useOnClickOutside(dropdownRef, () => setIsOpen(false));

  return (
    <Root>
      <DropdownLabel onClick={() => setIsOpen((p) => !p)}>
        <Label>{username}</Label>
        <ArrowIconStyled $isOpen={isOpen} />
      </DropdownLabel>
      {isOpen && (
        <DropdownItems ref={dropdownRef}>
          <Link href="/settings">
            <DropdownItem>
              <SettingsIconStyled />
              <Label>Settings</Label>
            </DropdownItem>
          </Link>
          <Link href="/">
            <DropdownItem onClick={() => dispatch(logOut())}>
              <LogOutIconStyled />
              <Label>Logout</Label>
            </DropdownItem>
          </Link>
        </DropdownItems>
      )}
    </Root>
  );
};

type DropdownProps = {};

const Root = styled.div`
  position: relative;

  font: ${({
    theme: {
      variants: { textSingle300: t },
    },
  }) => `${t.fontSize}/${t.lineHeight} ${t.fontFamily}`};

  @media ${({ theme: { devices } }) => devices.laptopAndBelow} {
    font: ${({
      theme: {
        variants: { textSingle100Regular: t },
      },
    }) => `${t.fontSize}/${t.lineHeight} ${t.fontFamily}`};
  }
`;

const DropdownItems = styled.ul.attrs(({ ref }) => ({
  ref: ref,
}))`
  display: grid;
  gap: 2rem;
  padding: 0;
  padding-top: 2rem;

  border-radius: 12px;
  list-style: none;
  background-color: ${({ theme: { colors } }) => colors.neutral700};

  @media ${({ theme: { devices } }) => devices.desktop} {
    position: absolute;
    right: 0;
    top: 2rem;
    padding: 2rem 1.5rem;
  }
`;

const SettingsIconStyled = styled(SettingsIcon)``;
const LogOutIconStyled = styled(LogOutIcon)``;
const DropdownItem = styled.li`
  display: flex;
  cursor: pointer;
  gap: 0.9rem;

  @media ${({ theme: { devices } }) => devices.laptopAndBelow} {
    color: ${({
      theme: {
        colors: { neutral500 },
      },
    }) => neutral500};
  }

  ${SettingsIconStyled}, ${LogOutIconStyled} {
    & > path {
      @media ${({ theme: { devices } }) => devices.laptopAndBelow} {
        color: ${({
          theme: {
            colors: { neutral500 },
          },
        }) => neutral500};
      }
    }
  }
`;
const DropdownLabel = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  gap: 0.75rem;
`;
const Label = styled.p``;

const ArrowIconStyled = styled(ArrowDownIcon)<{ $isOpen: boolean }>`
  transform: ${({ $isOpen }) => ($isOpen ? "rotate(180deg)" : "")};
`;

export default Dropdown;
