import styled from "styled-components";
import { useRef, useState } from "react";
import { ArrowDownIcon, LogOutIcon, SettingsIcon } from "../../assets";
import useOnClickOutside from "../../hooks/useOnOutsideClick";

import Link from "next/link";
import { useAppDispatch } from "../../store/store";
import { logOut } from "../../store/ducks/user";

import { useDesktopMediaQuery } from "../../styles/breakpoints";

import { useSelector } from "react-redux";
import { selectUsername } from "../../store/ducks/user/selectors";

const Dropdown = (props: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLUListElement>(null);
  const dispatch = useAppDispatch();
  const isDesktop = useDesktopMediaQuery();
  const username = useSelector(selectUsername);

  useOnClickOutside(dropdownRef, () => setIsOpen(false));

  return (
    <Root isDesktop={isDesktop}>
      <DropdownLabel onClick={() => setIsOpen((p) => !p)}>
        <Label>{username}</Label>
        <ArrowIconStyled isOpen={isOpen} />
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

const DropdownItems = styled.ul.attrs(({ ref }) => ({
  ref: ref,
}))``;
const DropdownItem = styled.li``;
const DropdownLabel = styled.div``;
const Label = styled.p``;
const SettingsIconStyled = styled(SettingsIcon)``;
const LogOutIconStyled = styled(LogOutIcon)``;

const Root = styled.div<{ isDesktop: boolean }>`
  position: relative;
  font: ${({
    theme: {
      variants: { textSingle300: s300, textSingle100Regular: s100 },
    },
    isDesktop,
  }) =>
    isDesktop
      ? `${s300.fontSize}/${s300.lineHeight} ${s300.fontFamily}`
      : `${s100.fontSize}/${s100.lineHeight} ${s100.fontFamily}`};

  ${DropdownItems} {
    display: grid;
    gap: 2rem;
    padding: 0;
    padding-top: 2rem;

    border-radius: 12px;
    list-style: none;
    background-color: ${({ theme: { colors } }) => colors.neutral700};
    ${({ isDesktop }) =>
      isDesktop &&
      `
    position: absolute;
    right: 0;
    top: 2rem;
    padding: 2rem 1.5rem;
    `};

    ${DropdownItem} {
      display: flex;
      cursor: pointer;
      gap: 0.9rem;
      color: ${({
        theme: {
          colors: { neutral100, neutral500 },
        },
        isDesktop,
      }) => (isDesktop ? neutral100 : neutral500)};

      ${SettingsIconStyled}, ${LogOutIconStyled} {
        & > path {
          stroke: ${({
            theme: {
              colors: { neutral100, neutral500 },
            },
            isDesktop,
          }) => (isDesktop ? neutral100 : neutral500)};
        }
      }
    }
  }

  ${DropdownLabel} {
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    gap: 0.75rem;
  }
`;
const ArrowIconStyled = styled(ArrowDownIcon)<{ isOpen: boolean }>`
  transform: ${({ isOpen }) => (isOpen ? "rotate(180deg)" : "")};
`;

export default Dropdown;
