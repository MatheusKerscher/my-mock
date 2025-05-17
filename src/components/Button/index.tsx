import { useTranslation } from "react-i18next";
import styled from "styled-components";

type ButtonProps = {
  label: string;
  onClick: () => void;
};

const StyledButton = styled.button`
  border: none;
  outline: none;
  background-color: var(--color-primary);
  color: #ffffff;
  padding: 8px 12px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
  }

  @media screen and (max-width: 480px) {
    padding: 12px 16px;
  }
`;

const Button = ({ label, onClick }: ButtonProps) => {
  const { t } = useTranslation();

  return (
    <StyledButton type="button" onClick={onClick}>
      {t(label)}
    </StyledButton>
  );
};

export default Button;
