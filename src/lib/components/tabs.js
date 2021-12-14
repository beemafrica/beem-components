import React from "react";
import styled from "styled-components";
import {
  BmGrey400,
  BmPrimaryBlack,
  BmPrimaryBlue,
  BmPrimaryWhite,
} from "./colors";
import { BmButtonIcon } from "./iconStyles";

export const BmTabItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  padding: 0rem !important;
  flex-wrap: wrap;
`;

export const BmTabWrapper = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0.714rem 1.714rem;
  background: ${BmPrimaryWhite};
  box-shadow: inset 0rem -0.214rem 0rem ${({ state }) => {
      if (state === "active") return `${BmPrimaryBlue}`;
      if (state === "active") return `${BmPrimaryBlue}`;
      if (state === "disabled") return "transparent";
      return "transparent";
    }};
  &:hover {
    box-shadow: inset 0rem -0.214rem 0rem ${({ state }) => {
        if (state === "disabled") return "transparent";
        return `${BmGrey400}`;
      }};
  }
  border: none;
`;

export const BmTabText = styled.h3`
  letter-spacing: -0.02em;
  color: ${({ state, color }) => {
    if (state === "disabled") return `${BmGrey400}`;
    if (color && state !== "disabled") return color;
    return `${BmPrimaryBlack}`;
  }};
  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const BmLeftTabIcon = styled.div`
  padding-right: 0.714rem !important;
`;

export const BmRightTabIcon = styled.div`
  padding-left: 0.714rem !important;
`;

export const BmTab = (props) => {
  const {
    variant,
    size,
    disabled,
    children,
    leadingIcon,
    trailingIcon,
    color,
    state,
    ...rest
  } = props;
  const IconColor =
    state === "disabled"
      ? `${BmGrey400}`
      : color && state !== "disabled"
      ? color
      : `${BmPrimaryBlack}`;
  return (
    <BmTabWrapper
      size={size}
      variant={variant}
      disabled={state === "disabled" ? true : false}
      state={state}
      {...rest}
    >
      {leadingIcon && (
        <BmLeftTabIcon>
          <BmButtonIcon
            icon={leadingIcon}
            disabled={state === "disabled" ? true : false}
            variant={variant}
            size={size}
            state={state}
            color={IconColor}
          />
        </BmLeftTabIcon>
      )}
      <BmTabText
        disabled={state === "disabled" ? true : false}
        variant={variant}
        size={size}
        state={state}
        color={color}
      >
        {children}
      </BmTabText>
      {trailingIcon && (
        <BmRightTabIcon>
          <BmButtonIcon
            icon={trailingIcon}
            disabled={state === "disabled" ? true : false}
            state={state}
            variant={variant}
            size={size}
            color={IconColor}
          />
        </BmRightTabIcon>
      )}
    </BmTabWrapper>
  );
};
