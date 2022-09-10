import styled from "styled-components";

import { LicenceCodeResponseDto } from "../../types/models/LicenceCodeResponseDto";
import { Checkbox, SecondaryButton } from "../ui";
import { activateCode } from "../../store/ducks";
import { useAppDispatch } from "../../store/store";
import { useSelector } from "react-redux";
import { getActivationStatus } from "../../store/ducks";
import { InfoField } from "../ui";

const LicenseCodeCard = ({ code }: LicenseCodeCardProps) => {
  const dispatch = useAppDispatch();
  const { loading } = useSelector(getActivationStatus);
  const status = code.status.charAt(0) + code.status.substring(1).toLowerCase();

  const handleActivateCode = () => {
    dispatch(activateCode(code.code));
  };
  return (
    <Root>
      <CheckboxContainer>
        <span></span>
        <Checkbox id={`${code.id}`} />
      </CheckboxContainer>

      <LicenseCodeContainer>
        <Title>License Code</Title>

        <InfoField defaultValue={code.code} copy />
      </LicenseCodeContainer>

      <Wrapper>
        <DomainContainer>
          <Title>Domain</Title>
          <InfoField defaultValue="" />
        </DomainContainer>
        {status !== "Active" && (
          <StyledSecondaryButton
            isLoading={loading}
            onClick={handleActivateCode}
          >
            Activate
          </StyledSecondaryButton>
        )}
      </Wrapper>

      <StatusContainer>
        <Title>Status</Title>

        <Status $isActive={status === "Active"}>{status}</Status>
      </StatusContainer>
    </Root>
  );
};

const Column = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  gap: 0.8rem;
`;

const CheckboxContainer = styled(Column)`
  margin-top: 0.7rem;
`;

const StatusContainer = styled(Column)``;

const LicenseCodeContainer = styled(Column)`
  flex: 1;
`;
const DomainContainer = styled(Column)`
  flex: 1;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;
`;

const StyledSecondaryButton = styled(SecondaryButton)`
  margin-top: 1.3rem;
  max-width: 7rem;
`;

const Title = styled.h3`
  font: ${({
    theme: {
      variants: {
        textSingle100: { lineHeight, fontFamily, fontSize },
      },
    },
  }) => `${fontSize}/${lineHeight} ${fontFamily}`};

  color: ${({ theme: { colors } }) => colors.neutral500};
`;

const Root = styled.section`
  padding: 1.5rem;
  display: grid;
  position: relative;
  grid-template-columns: auto 4fr 6fr 1fr;
  gap: 1.8rem;
  background-color: ${({ theme: { colors } }) => colors.neutral700};
  border-radius: 12px;

  @media ${({ theme: { devices } }) => devices.laptopAndBelow} {
    display: flex;
    flex-wrap: wrap;
    gap: 1.3rem;
    padding-top: 2.3rem;

    ${CheckboxContainer} {
      margin-top: -1.7rem;
      order: -2;
    }

    ${StatusContainer} {
      order: -1;
      flex: 1;

      & > * {
        margin-top: 0;
      }

      ${Title} {
        display: none;
      }
    }

    ${CheckboxContainer}, ${StatusContainer} {
      display: unset;
    }

    ${LicenseCodeContainer}, ${Wrapper} {
      min-width: 100%;
    }

    ${StyledSecondaryButton} {
      position: absolute;
      top: 0;
      right: 1.5rem;
    }
  }
`;

const Status = styled.p<{ $isActive: boolean }>`
  font: ${({
    theme: {
      variants: {
        typography4: { lineHeight, fontFamily, fontSize },
      },
    },
  }) => `${fontSize}/${lineHeight} ${fontFamily}`};

  color: ${({ $isActive, theme: { colors } }) =>
    $isActive ? colors.systemGreen : colors.systemRed300};
  margin-top: 1.5rem;
`;

type LicenseCodeCardProps = {
  code: LicenceCodeResponseDto;
};

export default LicenseCodeCard;
