import styled from "styled-components";
import { Typography } from "../ui";
import { useTheme } from "styled-components";
import { useState } from "react";
import { ArrowDownIcon, LogOutIcon, SettingsIcon } from "../../assets";

import Link from "next/link";
import { useAppDispatch } from "../../store/store";
import { logOut } from "../../store/rootReducer";

const Dropdown = (props: DropdownProps) => {
  const { typography } = useTheme();
  const { variants, fonts } = typography;
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useAppDispatch();
  return (
    <Root>
      <DropdownLabel onClick={() => setIsOpen((p) => !p)}>
        <Typography
          $variant={variants.textSingle300}
          $fontFamily={fonts.thicccboi500}
        >
          {props.label}
        </Typography>
        <ArrowIconStyled isOpen={isOpen} />
      </DropdownLabel>
      {isOpen && (
        <DropdownItems>
          <Link href="/settings">
            <DropdownItem>
              <SettingsIcon />

              <Typography
                $variant={variants.textSingle300}
                $fontFamily={fonts.thicccboi500}
              >
                Settings
              </Typography>
            </DropdownItem>
          </Link>
          <Link href="/">
            <DropdownItem onClick={() => dispatch(logOut())}>
              <LogOutIcon />
              <Typography
                $variant={variants.textSingle300}
                $fontFamily={fonts.thicccboi500}
              >
                Logout
              </Typography>
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
  font-family: ${({ theme }) => theme.typography.fonts.thicccboi500};

  background-color: ${({ theme }) => theme.colors.neutral700};
`;
const DropdownItem = styled.li`
  display: flex;
  cursor: pointer;
  gap: 0.9rem;
  color: ${({ theme }) => theme.colors.neutral100};
`;

const ArrowIconStyled = styled(ArrowDownIcon)<{ isOpen: boolean }>`
  transform: ${({ isOpen }) => (isOpen ? "rotate(180deg)" : "")};
`;

export default Dropdown;
