import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { CiDark, CiLight } from "react-icons/ci";
import { useContext } from "react";

import EnFlag from "../../assets/flags/en-us-flag.svg?react";
import PtBRFlag from "../../assets/flags/pt-br-flag.svg?react";
import { ThemeContext } from "../../context/ThemeContext";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 12px;
  padding: 12px 24px;
  background-color: var(--background-secondary);
`;

const StyledLogo = styled.h2`
  font-weight: bold;
  font-size: 24px;
  text-transform: uppercase;
  color: var(--color-secondary);
  user-select: none;

  span {
    color: var(--color-primary);
  }
`;

const StyledActionsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;

const StyledButton = styled.button`
  border: none;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: var(--color-secondary);

  svg {
    height: 25px;
    width: 25px;
    border-radius: 6px;
  }
`;

const iconProps = {
  size: 30,
};

const Header = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const {
    i18n: { changeLanguage, language },
  } = useTranslation();

  const handleChangeLanguage = () => {
    changeLanguage(language === "en" ? "pt-BR" : "en");
  };

  const handleToggleTheme = () => {
    setTheme(theme === "dark-theme" ? "light-theme" : "dark-theme");
  };

  return (
    <StyledHeader>
      <StyledLogo>
        My<span>Mock</span>
      </StyledLogo>

      <StyledActionsContainer>
        <StyledButton type="button" onClick={handleToggleTheme}>
          {theme === "dark-theme" ? (
            <CiLight {...iconProps} />
          ) : (
            <CiDark {...iconProps} />
          )}
        </StyledButton>

        <StyledButton type="button" onClick={handleChangeLanguage}>
          {language === "en" ? <EnFlag /> : <PtBRFlag />}
        </StyledButton>
      </StyledActionsContainer>
    </StyledHeader>
  );
};

export default Header;
