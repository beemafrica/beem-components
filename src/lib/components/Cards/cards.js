import React from "react";
import styled from "styled-components";
import {
  BmGrey400,
  BmPrimaryBlack,
  BmPrimaryWhite,
  BmPrimaryBlue,
} from "../colors";

export const BmCard = styled.div`
  display: flex;
  flex-direction: column;
  background: ${BmPrimaryWhite};
  border: 0.0625rem solid ${BmGrey400};
  border-radius: 0.21875rem;
`;

BmCard.Header = styled.div`
  display: flex;
  flex-direction: row;
  padding: 1rem 1rem 0rem 1rem;
`;

BmCard.Body = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 0.5rem;
  margin-bottom: 1rem;
  padding: 0rem 1rem;
`;

export const CardTitleText = styled.h3`
  color: ${BmPrimaryBlack};
`;

export const BmCardBodyText = styled.h1`
  display: flex;
  color: ${BmPrimaryBlack};
  align-items: center;
`;

export const BmCardBodyImg = styled.div`
  display: flex;
  background: ${BmPrimaryBlue};
  height: 3rem;
  width: 3rem;
`;

BmCard.Footer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-top: 0.0625rem solid ${BmGrey400};
  padding: 1rem;
  align-items: center;
`;

export const BmCardFooterText = styled.p`
  display: flex;
  color: ${BmPrimaryBlack};
  align-items: center;
`;

export const BmCardDetails = styled.div`
  display: flex;
  align-items: center;
`;

export default BmCard;