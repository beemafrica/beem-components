import { AttachFile, Done, DoneAll, GetApp } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import {
  BmGrey400,
  BmPrimaryBlack,
  BmPrimaryWhite,
  BmPrimaryBlue,
  BmGrey100,
  BmSecondaryGrey,
  BmSecondaryGreen,
} from "../colors";
import { BmIcons } from "../iconStyles";

export const BmChatWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 1.143rem;
  background: ${({ type }) => {
    if (type) {
      if (type === "inbound") return `${BmPrimaryWhite}`;
      if (type === "outbound") return `${BmPrimaryBlue}`;
    }
    return `${BmPrimaryWhite}`;
  }};
  border: 0.071rem solid ${BmGrey400};
  border-radius: 0.21875rem 0.21875rem 0.21875rem 0rem;
  max-width: 50%;
  overflow-wrap: break-word !important;
  word-wrap: break-word !important;
  margin: 0rem;
`;

export const BmChatText = styled.p`
  overflow-wrap: break-word;
  word-wrap: break-word;
  max-width: 100%;
  color: ${({ type }) => {
    if (type) {
      if (type === "inbound") return `${BmPrimaryBlack}`;
      if (type === "outbound") return `${BmPrimaryWhite}`;
    }
    return `${BmPrimaryBlack}`;
  }};
`;

export const BmDisplayTime = styled.p`
  color: ${BmPrimaryBlack};
  padding-top: 0.571rem !important;
  padding-bottom: 1.143rem;
`;

export const BmDisplay = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  ${BmDisplayTime} {
    margin-left: 0.5rem;
  }
`;

export const BmUserChat = ({
  children,
  displayTime,
  type,
  size,
  color,
  status,
  ...rest
}) => {
  return (
    <>
      <BmChatWrapper {...rest} type={type}>
        <BmChatText {...rest} type={type}>
          {children}
        </BmChatText>
      </BmChatWrapper>
      <BmDisplay>
        {type === "outbound" && status === "sent" && (
          <BmIcons
            icon={<DoneAll />}
            size={size || "small"}
            color={color || `${BmSecondaryGreen}`}
          />
        )}
        {type === "outbound" && status === "failed" && (
          <BmIcons
            icon={<Done />}
            size={size || "small"}
            color={color || `${BmPrimaryBlack}`}
          />
        )}
        {displayTime && <BmDisplayTime {...rest}>{displayTime}</BmDisplayTime>}
      </BmDisplay>
    </>
  );
};

//File Attachments
export const BmFileWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 1.143rem;
  background: ${({ type }) => {
    if (type) {
      if (type === "inbound") return `${BmPrimaryWhite}`;
      if (type === "outbound") return `${BmPrimaryBlue}`;
    }
    return `${BmPrimaryWhite}`;
  }};
  border: 0.071rem solid ${BmGrey400};
  border-radius: 3.357rem 3.357rem 3.357rem 0rem;
  max-width: 50%;
  align-items: center;
  overflow-wrap: break-word !important;
  word-wrap: break-word !important;
  margin: 0rem;
`;

export const BmFileText = styled.p`
  overflow-wrap: break-word;
  word-wrap: break-word;
  max-width: 100%;
  color: ${({ type }) => {
    if (type) {
      if (type === "inbound") return `${BmPrimaryBlue}`;
      if (type === "outbound") return `${BmPrimaryWhite}`;
    }
    return `${BmPrimaryBlue}`;
  }};
  margin: 0rem 1rem 0rem 0.5rem;
  flex-grow: 1;
`;

export const FileIcons = styled(BmIcons)`
  color: ${({ type }) => {
    if (type) {
      if (type === "inbound") return `${BmPrimaryBlack}`;
      if (type === "outbound") return `${BmPrimaryWhite}`;
    }
    return `${BmPrimaryBlack}`;
  }};
`;

export const BmFileChat = ({ children, displayTime, type, ...rest }) => {
  return (
    <>
      <BmFileWrapper type={type} {...rest}>
        <BmIcons
          icon={<AttachFile />}
          color={type === "outbound" ? `${BmPrimaryWhite}` : `${BmPrimaryBlue}`}
        />
        <BmFileText type={type}>{children}</BmFileText>
        <BmIcons
          icon={<GetApp />}
          color={
            type === "outbound" ? `${BmPrimaryWhite}` : `${BmSecondaryGrey}`
          }
        />
      </BmFileWrapper>
      {displayTime && <BmDisplayTime {...rest}>{displayTime}</BmDisplayTime>}
    </>
  );
};

export const BmImageWrapper = styled.div`
  background: ${BmGrey100};
  border: 0.071rem solid ${BmGrey400};
  border-radius: 0.21875rem 0.21875rem 0rem 0.21875rem;
  display: flex;
  flex-direction: column;
  max-width: 50%;
  max-height: 50%;
`;

export const BmImage = styled.img`
  width: 100%;
  ${"" /* height: 100%; */}
  object-fit: cover;
  flex-grow: 1;
`;

export const BmImageFileName = styled(BmFileChat)`
  padding: 0.5rem 1rem;
  max-width: 100%;
  border: none;
  border-top: 0.071rem solid ${BmSecondaryGrey};
  border-radius: 0rem;
  display: flex;
`;

export const BmImageChat = ({ children, displayTime, type, ...rest }) => {
  return (
    <>
      <BmImageWrapper {...rest} type={type}>
        {children}
      </BmImageWrapper>
      {displayTime && <BmDisplayTime {...rest}>{displayTime}</BmDisplayTime>}
    </>
  );
};
