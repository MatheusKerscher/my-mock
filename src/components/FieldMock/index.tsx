import { useTranslation } from "react-i18next";
import { IoMdCopy } from "react-icons/io";
import styled from "styled-components";

type FieldMockProps = {
  label: string;
  value: string;
  copyValue: (value: string) => void;
};

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 360px;
  gap: 10px;
  color: var(--color-secondary);

  @media screen and (max-width: 480px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const StyledLabel = styled.span`
  font-weight: 500;
`;

const StyledMockValueContainer = styled.div`
  display: flex;
  gap: 6px;
  justify-content: flex-end;
  align-items: center;

  span {
    text-align: end;
  }

  button {
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;
    color: var(--color-secondary);
  }

  @media screen and (max-width: 480px) {
    justify-content: flex-start;
    border-bottom: 1px solid var(--color-tertiary);
    margin-bottom: 4px;
    padding-bottom: 6px;
    width: 100%;
  }
`;

const FieldMock = ({ label, value, copyValue }: FieldMockProps) => {
  const { t } = useTranslation();
  return (
    <StyledContainer>
      <StyledLabel>{t(label)}:</StyledLabel>

      <StyledMockValueContainer>
        <span>{value}</span>

        <button type="button" onClick={copyValue}>
          <IoMdCopy size={22} />
        </button>
      </StyledMockValueContainer>
    </StyledContainer>
  );
};

export default FieldMock;
