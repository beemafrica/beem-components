import React from "react";
import styled from "styled-components";
import {
  BmGrey100,
  BmPrimaryBlack,
  BmPrimaryBlue,
  BmPrimaryWhite,
} from "./colors";

export const BmContactSideBar = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0rem;
  overflow: auto;
`;
// Main wrapper
export const BmContact = styled.div`
  display: flex;
  flex-direction: row;
  padding: 1.143rem 0rem 1.143rem 1.714rem;
  &:hover {
    background: ${BmGrey100};
  }

  ${({ active }) =>
    active &&
    `    
    background: ${BmGrey100};
  `}
`;

// Contact Item
export const BmContactItem = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 1.143rem;
  flex-grow: 1;
  margin: 0rem;
`;

// Contact Name
export const BmContactText = styled.h3`
  color: ${BmPrimaryBlack};
  cursor: pointer;
`;

export const BmContactTextWrapper = styled.div`
  display: flex;
  flex-direction: row;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  overflow-wrap: break-word !important;
  word-wrap: break-word !important;
  max-width: 85%;
`;

export const BmContactName = ({ children, ...rest }) => {
  return (
    <BmContactTextWrapper>
      <BmContactText {...rest}>{children}</BmContactText>
    </BmContactTextWrapper>
  );
};

// Contact Icon Wrapper
export const BmContactIcon = styled.div`
  display: flex;
  flex-direction: row;
`;

// Message
export const BmMessageTexts = styled.p`
  color: ${BmPrimaryBlack};
  padding: 0rem;
  cursor: pointer;
`;

export const BmMessageText = ({ children, ...rest }) => {
  return (
    <BmContactTextWrapper>
      <BmMessageTexts {...rest}>{children}</BmMessageTexts>
    </BmContactTextWrapper>
  );
};

export const BmMessageContact = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-top: 0.286rem;
  cursor: pointer;
`;

export const BmUnreadMessage = styled.p`
  align-items: center;
  text-align: center;
  letter-spacing: -0.02em;
  color: ${BmPrimaryWhite};
  margin: 0rem 0.571rem;
  width: 1.429rem;
  height: 1.429rem;
  border-radius: 50%;
  text-align: center;
  background: ${BmPrimaryBlue};
  margin-left: auto;
`;
export const BmContactMessage = (props) => {
  const { children } = props;
  return (
    <BmMessageContact>
      <BmMessageText>{children}</BmMessageText>
    </BmMessageContact>
  );
};

// Contact Details Wrapper
export const BmContactDetails = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-top: 0.786rem;
  cursor: pointer;
`;

// Contact time
export const BmContactTime = styled.p`
  text-align: right;
  letter-spacing: -0.02em;
  color: ${BmPrimaryBlack};
  margin: 0rem 0.571rem;
  margin-left: auto;
`;
