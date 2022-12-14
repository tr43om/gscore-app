import styled from "styled-components";

// icons
import { TwitterIcon, FacebookIcon, LinkedInIcon } from "../../../assets";

const Socials = (props: SocialProps) => {
  return (
    <Icons>
      <Icon>
        <FacebookIcon width={30} height={30} />
      </Icon>
      <Icon>
        <TwitterIcon width={30} height={30} />
      </Icon>
      <Icon>
        <LinkedInIcon width={30} height={30} />
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
