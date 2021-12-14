import styled from "styled-components";
import { BmBgGreyBlue, BmGrey400 } from "../colors";

// Main wrapper
export const Main = styled.div`
  display: flex;
  flex-direction: row;
  align-item: center;
  ${'' /* justify-content: space-between; */}
  max-height: calc(100vh - 12.857rem);
  height: calc(100vh - 12.857rem);
  max-width: 100%;
  width: 100%;
`;

// Main Chat Wrapper
export const BmChat = styled.div`
  background: ${BmBgGreyBlue};
  display: flex;
  flex-direction: column;
  ${'' /* flex-grow: 1; */}
  border-top: 0.0625rem solid ${BmGrey400};
  border-bottom: 0.0625rem solid ${BmGrey400};
  max-width: 70%;
  width: 70%;
  max-height: 100%;
  height: 100%;
`;

export const BmChatMenu = styled.div`
  display: flex;
  padding: 1.5rem !important;
  flex-grow: 1;
  height: 100%;
  max-height: 100%;
  overflow: auto;
  flex-direction: column-reverse;
  ${'' /* border: 0.714rem solid yellow; */}
`;

// Incoming message
export const MessageIn = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  padding: 0.5rem 0rem !important;
`;

// Outgoing message
export const MessageOut = styled.div`
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  padding: 0.5rem 0rem !important;
`;

export const MainWrapper = styled.div`
  padding: 2.1875rem;
  background-color: ${BmBgGreyBlue};
`;
