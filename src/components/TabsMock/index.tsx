import { ConfigProvider, Tabs, type TabsProps } from "antd";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import PersonMock from "../PersonMock";
import CompanyMock from "../CompanyMock";

const tabItems: TabsProps["items"] = [
  {
    key: "1",
    label: "tabPeople",
    children: <PersonMock />,
  },
  {
    key: "2",
    label: "tabCompany",
    children: <CompanyMock />,
  }
];

type TabsMockProps = {
  theme: string;
};

const StyledTabsContainer = styled.section`
  width: 90%;
  margin: 24px auto 0;
  padding: 16px 24px;
  border-radius: 8px;
  background-color: var(--background-secondary);
  box-shadow: var(--shadow);

  .ant-tabs-nav::before {
    border-bottom: 1px solid var(--color-tertiary) !important;
  }
`;

const TabsMock = ({ theme }: TabsMockProps) => {
  const { t } = useTranslation();

  return (
    <StyledTabsContainer>
      <ConfigProvider
        theme={{
          components: {
            Tabs: {
              inkBarColor: "#fc1607", // Cor da aba ativa
              itemSelectedColor: "#fc1607", // Cor do texto da aba ativa
              itemColor: theme === "dark-theme" ? "#949494" : "#aaaaaa", // Cor do texto das abas inativas
              itemHoverColor: "#fc1607", // Cor ao passar o mouse
            },
          },
        }}
      >
        <Tabs
          defaultActiveKey="1"
          centered
          items={tabItems?.map((i) => {
            return {
              ...i,
              label: t(i.label as string),
            };
          })}
        />
      </ConfigProvider>
    </StyledTabsContainer>
  );
};

export default TabsMock;
