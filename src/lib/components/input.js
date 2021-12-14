import { Done, ErrorOutline } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { BmIcons } from ".";
import {
  BmPrimaryWhite,
  BmGrey400,
  BmSecondaryGrey,
  BmSecondaryRed,
  BmGrey50,
  BmSecondaryGreen15,
  BmPrimaryBlack,
  BmSecondaryDarkGreen,
  BmSecondaryRed15,
  BmGrey100,
} from "./colors";
import { BmSuccessIcon, BmErrorIcon } from "./iconStyles";

const BmInputLabel = styled.div`
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 0.929rem;
  line-height: 1.286rem;
  height: 1.286rem;
  letter-spacing: -0.02em;
  color: ${({ state }) => {
    if (state) {
      if (state === "incomplete") return `${BmSecondaryRed}`;
      return `${BmSecondaryGrey}`;
    }
    return `${BmSecondaryGrey}`;
  }};
  padding-top: 0.571rem;
`;

export const BmInputField = styled.input`
  padding: 0.786rem 1.143rem;
  letter-spacing: -0.02em;
  color: ${({ state }) => {
    if (state) {
      if (state === "disabled") return `${BmGrey400}`;
      return `${BmPrimaryBlack}`;
    }
    return `${BmPrimaryBlack}`;
  }};
  border: none;
  letter-spacing: -0.02em;
  text-align: left;
  margin: 0rem; /*added */

  ::placeholder {
    color: ${BmSecondaryGrey};
  }
  background: ${({ state }) => {
    if (state) {
      if (state === "pressed") return `${BmGrey50}`; // TODO: to be reviewed
      if (state === "positive") return `${BmSecondaryGreen15}`;
      if (state === "negative") return `${BmSecondaryRed15}`;
      if (state === "disabled") return `${BmGrey100}`;
      return `${BmPrimaryWhite}`;
    }
    return `${BmPrimaryWhite}`;
  }};
  &:visited,
  &:active,
  &:hover,
  &:focus {
    outline: none !important;
    text-decoration: none;
    color: ${BmPrimaryBlack};
  }
  }
`;
const BmInputWrapper = styled.div`
  display: flex;
  flex-direction: center;
  align-items: center;
  height: 2.929rem;
  border-radius: 0.21875rem;
  padding: 0rem;
  background: ${({ state }) => {
    if (state) {
      if (state === "pressed") return `${BmGrey50}`;
      if (state === "positive") return `${BmSecondaryGreen15}`;
      if (state === "disabled") return `${BmGrey100}`;
      return `${BmPrimaryWhite}`;
    }
    return `${BmPrimaryWhite}`;
  }};

  border: ${({ state }) => {
    if (state) {
      if (state === "positive") return `0.071rem solid ${BmSecondaryDarkGreen}`;
      if (state === "negative") return `0.071rem solid ${BmSecondaryRed}`;
      if (state === "disabled") return `0.071rem solid ${BmGrey100}`;
      return `0.071rem solid ${BmGrey400}`;
    }
    return `0.071rem solid ${BmGrey400}`;
  }};
  &:visited,
  &:active,
  &:hover,
  &:focus {
    border: 0.071rem solid ${BmPrimaryBlack};
  }
`;

export const BmInput = ({ id, iconSize, label, state, ...rest }) => {
  return (
    <>
      <BmInputWrapper state={state} {...rest}>
        <BmInputField
          id={id}
          {...rest}
          state={state}
          disabled={state === "disabled" ? true : false}
        />
        {state && state === "complete" && (
          <BmIcons icon={<ErrorOutline />} size="small" />
        )}
        {state && state === "incomplete" && (
          <BmIcons icon={<Done />} size="small" />
        )}
      </BmInputWrapper>
      {label && (
        <BmInputLabel htmlFor={id} state={state} {...rest}>
          {label}
        </BmInputLabel>
      )}
    </>
  );
};
