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
  const { loading, error } = useSelector(getActivationStatus);
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

        <Status isActive={status === "Active"}>{status}</Status>
      </StatusContainer>
    </Root>
  );
};

const Root = styled.section`
  padding: 1.5rem;
  display: grid;
  grid-template-columns: auto 4fr 6fr 1fr;
  gap: 1.8rem;
  background-color: ${({ theme: { colors } }) => colors.neutral700};
  border-radius: 12px;
  max-width: 100%;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;
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

const Status = styled.p<{ isActive: boolean }>`
  font: ${({
    theme: {
      variants: {
        typography4: { lineHeight, fontFamily, fontSize },
      },
    },
  }) => `${fontSize}/${lineHeight} ${fontFamily}`};
  color: ${({ isActive, theme: { colors } }) =>
    isActive ? colors.systemGreen : colors.systemRed300};
  margin-top: 1.5rem;
`;

const Column = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  gap: 0.8rem;
`;
const LicenseCodeContainer = styled(Column)``;
const DomainContainer = styled(Column)`
  flex: 1;
`;
const StatusContainer = styled(Column)``;
const CheckboxContainer = styled(Column)`
  margin-top: 0.7rem;
`;

const StyledSecondaryButton = styled(SecondaryButton)`
  margin-top: 1.3rem;
  max-width: 7rem;
`;

type LicenseCodeCardProps = {
  code: LicenceCodeResponseDto;
};

export default LicenseCodeCard;
