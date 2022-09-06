import styled from "styled-components";
import { ClipboardIcon } from "../../assets";
import { LicenceCodeResponseDto } from "../../types/models/LicenceCodeResponseDto";
import { SecondaryButton } from "../ui";
import { activateCode } from "../../store/ducks";
import { useAppDispatch } from "../../store/store";
import { useSelector } from "react-redux";
import { getActivationStatus } from "../../store/ducks";

const LicenseCodeCard = ({ code }: LicenseCodeCardProps) => {
  const dispatch = useAppDispatch();
  const { loading, error } = useSelector(getActivationStatus);
  const status = code.status.charAt(0) + code.status.substring(1).toLowerCase();

  const handleActivateCode = () => {
    dispatch(activateCode(code.code));
  };
  return (
    <Root>
      <StatusCheckbox />
      <LicenseCodeContainer>
        <Title>License Code</Title>
        <CodeField>{code.code}</CodeField>
      </LicenseCodeContainer>

      <DomainContainer>
        <Title>Domain</Title>
        <DomainField></DomainField>
      </DomainContainer>

      {status !== "Active" && (
        <SecondaryButton isLoading={loading} onClick={handleActivateCode}>
          Activate
        </SecondaryButton>
      )}

      <StatusContainer>
        <Title>Status</Title>
        <Status isActive={status === "Active"}>{status}</Status>
      </StatusContainer>
    </Root>
  );
};

const Root = styled.section`
  padding: 1rem;
  display: flex;
  justify-content: space-around;
  background-color: ${({ theme: { colors } }) => colors.neutral700};
  border-radius: 12px;
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
  color: ${({ isActive, theme: { colors } }) =>
    isActive ? colors.systemGreen : colors.systemRed300};
`;

const Field = styled.div`
  color: ${({ theme: { colors } }) => colors.neutral500};
  background-color: ${({ theme: { colors } }) => colors.neutral600};
  border-radius: 12px;
`;
const CodeField = styled(Field)``;
const DomainField = styled(Field)``;
const StatusCheckbox = styled.div``;
const LicenseCodeContainer = styled.div``;
const DomainContainer = styled.div``;
const StatusContainer = styled.div``;

type LicenseCodeCardProps = {
  code: LicenceCodeResponseDto;
};

export default LicenseCodeCard;
