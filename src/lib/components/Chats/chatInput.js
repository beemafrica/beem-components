import React from "react";
import styled from "styled-components";
import {
  BmGrey400,
  BmGrey50,
  BmPrimaryWhite,
  BmSecondaryGrey,
} from "../colors";
import { BmEmojiIcon } from "../iconStyles";
import { Send } from "@material-ui/icons";
import { BmInputField } from "../input";

// Main wrapper
export const BmMessageTab = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  ${'' /* height: 15%; */}
  background: ${BmGrey50};
  padding: 0.786rem 1.786rem !important;
`;

export const BmMessageTabInput = styled(BmInputField)`
  color: ${BmSecondaryGrey};
  flex-grow: 1;
  padding: 0rem !important;
  border: none !important;
  &:visited,
  &:active,
  &:hover,
  &:focus {
    outline: none !important;
    text-decoration: none !important;
  }
  max-width: 100%;
`;

export const BmSendIconWrapper = styled.div`
  padding-left: 1.429rem;
`;

export const BmSend = (props) => {
  return (
    <BmSendIconWrapper>
      <BmEmojiIcon icon={<Send />} {...props} />
    </BmSendIconWrapper>
  );
};

// Div for attachments
export const BmAttachment = styled("div")`
  justify-content: center;
  padding-right: 1.143rem !important;
`;

// Div for message input
export const BmMessage = styled("div")`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0.714rem 1.143rem !important;
  background: ${BmPrimaryWhite};
  border: 0.071rem solid ${BmGrey400};
  box-sizing: border-box;
  border-radius: 0.21875rem;
  flex-grow: 1;
  max-width: 75%;
`;
