import { useState } from "react";

import { fakerPT_BR } from "@faker-js/faker";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import toast from "react-hot-toast";

import FieldMock from "../FieldMock";
import MockActions from "../MockActions";

import { jsonExport } from "../../utils/jsonExport";
import { generateCPF } from "./cpfGenerator";
import { copyToClipboard } from "../../utils/copyToClipboard";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  width: 100%;
`;

const PersonMock = () => {
  const { t } = useTranslation();

  const [fullName, setFullName] = useState(fakerPT_BR.person.fullName());
  const [cpf, setCPF] = useState(generateCPF());
  const [zodiacSign, setZodiacSign] = useState(fakerPT_BR.person.zodiacSign());
  const [streetAddress, setStreetAddress] = useState(
    fakerPT_BR.location.street()
  );
  const [streetNumber, setStreetNumber] = useState(
    fakerPT_BR.location.buildingNumber()
  );
  const [city, setCity] = useState(fakerPT_BR.location.city());
  const [state, setState] = useState(fakerPT_BR.location.state());
  const [phone, setPhone] = useState(fakerPT_BR.phone.number());

  const generatePersonMockData = () => {
    return {
      fullName,
      cpf,
      zodiacSign,
      streetAddress,
      streetNumber,
      city,
      state,
      phone,
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
    setFullName(fakerPT_BR.person.fullName());
    setCPF(generateCPF());
    setZodiacSign(fakerPT_BR.person.zodiacSign());
    setStreetAddress(fakerPT_BR.location.street());
    setStreetNumber(fakerPT_BR.location.buildingNumber());
    setCity(fakerPT_BR.location.city());
    setState(fakerPT_BR.location.state());
    setPhone(fakerPT_BR.phone.number({ style: "national" }));
  };

  return (
    <StyledContainer>
      <FieldMock
        label="fieldFullName"
        value={fullName}
        copyValue={() => handleCopy("fieldFullName", fullName)}
      />

      <FieldMock
        label="fieldCPF"
        value={cpf}
        copyValue={() => handleCopy("fieldCPF", cpf)}
      />

      <FieldMock
        label="fieldPhone"
        value={phone}
        copyValue={() => handleCopy("fieldPhone", phone)}
      />

      <FieldMock
        label="fieldZodiacSign"
        value={zodiacSign}
        copyValue={() => handleCopy("fieldZodiacSign", zodiacSign)}
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

export default PersonMock;
