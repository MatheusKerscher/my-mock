import styled from "styled-components";
import Button from "../Button";

type MockActionsProps = {
  onCLickGenerateDate: () => void;
  onClickCopyAll: () => void;
  onClickJSONExport: () => void;
};

const StyledActionContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px;
  margin-top: 12px;
`;

const MockActions = ({onCLickGenerateDate, onClickCopyAll, onClickJSONExport}: MockActionsProps) => {
  return (
    <StyledActionContainer>
      <Button label="buttonGenerateData" onClick={onCLickGenerateDate} />
      <Button label="buttonCopyData" onClick={onClickCopyAll} />
      <Button label="buttonJSONExport" onClick={onClickJSONExport} />
    </StyledActionContainer>
  );
};

export default MockActions;
