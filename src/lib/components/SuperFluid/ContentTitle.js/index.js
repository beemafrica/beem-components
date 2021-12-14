import styled from "styled-components";
import { BmPrimaryBlack } from "../../colors";

export const BmContentTitle = styled.h1`
  color: ${BmPrimaryBlack};
  margin: 0.75rem 0rem;
`;

export const BmContentFooter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0rem;
  margin: 1rem 0rem 0rem;
  width: 100%;
`;

export const BmFooterLeft = styled.div`
  display: flex;
  flex-direction: flex-start;
  justify-content: space-between;
  align-items: center;
  padding: 0rem;
  margin: 0rem;
  div {
    margin: 0rem 0.5rem;
  }
`;

export const BmFooterRight = styled.div`
  display: flex;
  flex-direction: flex-end;
  justify-content: space-between;
  align-items: center;
  padding: 0rem;
  margin-left: auto;
  div {
    margin: 0rem 0.5rem;
  }
`;
