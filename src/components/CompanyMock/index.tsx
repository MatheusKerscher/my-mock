import { useState } from "react";

import { fakerPT_BR } from "@faker-js/faker";
import { useTranslation } from "react-i18next";
import toast from "react-hot-toast";
import styled from "styled-components";

import FieldMock from "../FieldMock";
import MockActions from "../MockActions";

import { generateCNPJ } from "./generateCNPJ";
import { copyToClipboard } from "../../utils/copyToClipboard";
import { jsonExport } from "../../utils/jsonExport";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  width: 100%;
`;

const CompanyMock = () => {
  const { t } = useTranslation();

  const [companyName, setCompanyName] = useState(fakerPT_BR.company.name());
  const [tradeName, setTradeName] = useState(fakerPT_BR.company.name());
  const [cnpj, setCnpj] = useState(generateCNPJ());
  const [phone, setPhone] = useState(fakerPT_BR.phone.number());
  const [ie, setIe] = useState(
    fakerPT_BR.number.int({ min: 10000000, max: 99999999 }).toString()
  );
  const [foundationDate, setFoundationDate] = useState(
    fakerPT_BR.date.past({ years: 10 }).toLocaleDateString()
  );
  const [email, setEmail] = useState(fakerPT_BR.internet.email());
  const [streetAddress, setStreetAddress] = useState(
    fakerPT_BR.location.street()
  );
  const [streetNumber, setStreetNumber] = useState(
    fakerPT_BR.location.buildingNumber()
  );
  const [city, setCity] = useState(fakerPT_BR.location.city());
  const [state, setState] = useState(fakerPT_BR.location.state());

  const generatePersonMockData = () => {
    return {
      companyName,
      tradeName,
      phone,
      streetAddress,
      streetNumber,
      city,
      state,
      ie,
      foundationDate,
      email,
    };
  };

  const handleCopy = (field: string, value: string) => {
    copyToClipboard(value)
      .then(() => {
        toast.success(t("copyFieldSuccess", { field: t(field) }));
      })
      .catch(() => {
        toast.error(t("copyFieldFail", { field: t(field) }));
      });
  };

  const handleCopyAll = () => {
    copyToClipboard(JSON.stringify(generatePersonMockData()))
      .then(() => {
        toast.success(t("copyAllFieldsSuccess"));
      })
      .catch(() => {
        toast.error(t("copyAllFieldsFail"));
      });
  };

  const handleJSONExport = () => {
    jsonExport(generatePersonMockData());

    toast.success(t("exportJSONSuccess"));
  };

  const handleGenerateDate = () => {
    setStreetAddress(fakerPT_BR.location.street());
    setStreetNumber(fakerPT_BR.location.buildingNumber());
    setCity(fakerPT_BR.location.city());
    setState(fakerPT_BR.location.state());
    setPhone(fakerPT_BR.phone.number({ style: "national" }));
    setCompanyName(fakerPT_BR.company.name());
    setTradeName(fakerPT_BR.company.name());
    setCnpj(generateCNPJ());
    setIe(fakerPT_BR.number.int({ min: 10000000, max: 99999999 }).toString());
    setFoundationDate(
      fakerPT_BR.date.past({ years: 10 }).toLocaleDateString()
    );
    setEmail(fakerPT_BR.internet.email());
  };

  return (
    <StyledContainer>
      <FieldMock
        label="fieldCompanyName"
        value={companyName}
        copyValue={() => handleCopy("fieldCompanyName", companyName)}
      />

      <FieldMock
        label="fieldTradeName"
        value={tradeName}
        copyValue={() => handleCopy("fieldTradeName", tradeName)}
      />

      <FieldMock
        label="fieldCNPJ"
        value={cnpj}
        copyValue={() => handleCopy("fieldCNPJ", cnpj)}
      />

      <FieldMock
        label="fieldPhone"
        value={phone}
        copyValue={() => handleCopy("fieldPhone", phone)}
      />

      <FieldMock
        label="fieldIE"
        value={ie}
        copyValue={() => handleCopy("fieldIE", ie)}
      />

      <FieldMock
        label="fieldFoundationDate"
        value={foundationDate}
        copyValue={() => handleCopy("fieldFoundationDate", foundationDate)}
      />

      <FieldMock
        label="fieldEmail"
        value={email}
        copyValue={() => handleCopy("fieldEmail", email)}
      />

      <FieldMock
        label="fieldStreetAddress"
        value={streetAddress}
        copyValue={() => handleCopy("fieldStreetAddress", streetAddress)}
      />

      <FieldMock
        label="fieldStreetNumber"
        value={streetNumber}
        copyValue={() => handleCopy("fieldStreetNumber", streetNumber)}
      />

      <FieldMock
        label="fieldCity"
        value={city}
        copyValue={() => handleCopy("fieldCity", city)}
      />

      <FieldMock
        label="fieldState"
        value={state}
        copyValue={() => handleCopy("fieldState", state)}
      />

      <MockActions
        onCLickGenerateDate={handleGenerateDate}
        onClickCopyAll={handleCopyAll}
        onClickJSONExport={handleJSONExport}
      />
    </StyledContainer>
  );
};

export default CompanyMock;
