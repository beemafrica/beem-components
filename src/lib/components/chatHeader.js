import styled from "styled-components";
import { BmGrey400, BmPrimaryBlack, BmPrimaryWhite, BmSecondaryGrey } from "./colors";

export const BmChatHeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-top: 0.071rem solid ${BmGrey400};
  border-right: 0.071rem solid ${BmGrey400};
  background: ${BmPrimaryWhite};
  padding: 0rem 1.143rem;
  max-height: 15%;
  height: 15%;
  ${'' /* border: 0.714rem solid blue; */}
`;

export const BmChatHeaderText = styled.h2`
  color: ${BmPrimaryBlack};
`;

export const BmChatHeaderTime = styled.h4`
  color: ${BmSecondaryGrey};
  margin: 0rem 0.571rem;
`;

export const BmChatHeaderInfoIcon = styled.div`
  margin-left: 0.571rem;
`;

export const BmChatHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding : 1.286rem 0rem;
  margin: 0rem;
`;
