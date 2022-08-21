import Image from "next/image";
import styled from "styled-components";
import { Container } from "../layouts";
import Link from "next/link";
import { Socials } from "../ui";

const Footer = (props: FooterProps) => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <FooterTop>
          <Image src="/images/Logo.svg" alt="logo" width="170" height="42" />
          <Text>
            Ut enim ad minim veniam quis <br /> nostrud exercitation ea commodo
          </Text>
        </FooterTop>
        <FooterBottom>
          <CopyrightText>
            Copyright © 2022 GScore | All Rights Reserved |{" "}
            <Link href="#">Cookies</Link> | <Link href="#">Privacy Policy</Link>
          </CopyrightText>
          <Socials />
        </FooterBottom>
      </FooterWrapper>
    </FooterContainer>
  );
};

type FooterProps = {};

const FooterContainer = styled.footer`
  border-top: 1px solid var(--c-neutral-700);
  padding-top: 3.75rem;
  padding-bottom: 3rem;
  margin-top: 5rem;
  margin-top: auto;

  font-family: "Inter", sans-serif;

  color: var(--c-neutral-400);

  a {
    color: var(--c-neutral-100);
  }
`;

const FooterWrapper = styled.div`
  width: 100%;
  max-width: 79.125rem;
  padding-inline: 1rem;
  margin: 0 auto;
`;

const FooterTop = styled.div`
  padding-bottom: 4rem;
`;

const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 2.75rem;
  border-top: 1px solid var(--c-neutral-700);
`;

const CopyrightText = styled.div``;

const Text = styled.p`
  margin-top: 1.5rem;
`;

export default Footer;
