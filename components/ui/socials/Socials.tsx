import styled from "styled-components";

// icons
import Twitter from "./assets/Twitter.svg";
import Facebook from "./assets/Facebook.svg";
import LinkedIn from "./assets/LinkedIn.svg";

const Socials = (props: SocialProps) => {
  return (
    <Icons>
      <Icon>
        <Facebook />
      </Icon>
      <Icon>
        <Twitter />
      </Icon>
      <Icon>
        <LinkedIn />
      </Icon>
    </Icons>
  );
};

const Icons = styled.div`
  display: flex;
  gap: 1rem;
`;

const Icon = styled.a`
  cursor: pointer;

  & > svg > path {
    transition: all 0.2s;
  }

  &:hover > svg > path {
    fill: ${({ theme }) => theme.colors.accent};
  }
`;

type SocialProps = {};

export default Socials;
