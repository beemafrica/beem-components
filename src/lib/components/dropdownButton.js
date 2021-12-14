import React from "react";
import { KeyboardArrowDown } from "@material-ui/icons";
import styled from "styled-components";
import { BmBtnIcon } from "../components/Buttons/buttonIconsOnly";
import { BmButton } from "../components/Buttons/buttons";
import {
  BmPrimaryWhite,
  BmPrimaryBlue,
  BmSecondaryRed,
  BmSecondaryDarkGreen,
  BmGrey400,
  BmGrey100,
} from "./colors";

const Wrapper = styled.div`
  display: flex;
  padding: 0rem;
  margin: 0rem;
`;

export const Drop = styled(BmBtnIcon)`
  background: ${({ variant, disabled }) => {
    if (!disabled) {
      if (variant === "primary") return `${BmPrimaryBlue}`;
      if (variant === "secondary") return "none";
      if (variant === "tertiary") return "none";
      if (variant === "destructive") return `${BmSecondaryRed}`;
      if (variant === "success") return `${BmSecondaryDarkGreen}`;
      if (variant === "neutral") return `${BmPrimaryWhite}`;
      return `${BmPrimaryBlue}`;
    } else {
      if (variant === "primary") return `${BmGrey100}`;
      if (variant === "secondary") return "none";
      if (variant === "tertiary") return "none";
      return `${BmGrey100}`;
    }
  }};
  border: 0.071rem solid
    ${({ variant, disabled }) => {
      if (!disabled) {
        if (variant === "primary") return `${BmPrimaryBlue}`;
        if (variant === "secondary") return `${BmPrimaryBlue}`;
        if (variant === "tertiary") return "transparent";
        if (variant === "destructive") return `${BmSecondaryRed}`;
        if (variant === "success") return `${BmSecondaryDarkGreen}`;
        if (variant === "neutral") return `${BmGrey400}`;
        return `${BmPrimaryBlue}`;
      } else {
        if (variant === "primary") return `${BmGrey100}`;
        if (variant === "secondary") return `${BmGrey400}`;
        if (variant === "tertiary") return "transparent";
      }
    }};
    border-left:  0.071rem solid
    ${({ variant, disabled }) => {
      if (!disabled) {
        if (variant === "primary") return `${BmPrimaryWhite}`;
        if (variant === "secondary") return `${BmPrimaryBlue}`;
        if (variant === "tertiary") return "transparent";
        if (variant === "destructive") return `${BmSecondaryRed}`;
        if (variant === "success") return `${BmSecondaryDarkGreen}`;
        if (variant === "neutral") return `${BmGrey400}`;
        return `${BmPrimaryWhite}`;
      } else {
        if (variant === "primary") return `${BmGrey400}`;
        if (variant === "secondary") return `${BmGrey400}`;
        if (variant === "tertiary") return "transparent";
      }
    }};
  border-top-left-radius: 0.071rem; */}
  border-bottom-left-radius: 0.071rem; */}
  padding: 0rem */}
`;

export const Button = styled(BmButton)`
  border-top-right-radius: 0.071rem; */}
  border-bottom-right-radius: 0.071rem; */}
  ${"" /* padding: 0.714rem 1.143rem 0.714rem 1.714rem; */}
  ${
    "" /* padding: ${({ size }) => {
    if (size === "large") return "0.714rem 1.714rem";
    if (size === "medium") return "0.5rem 1.143rem";
    if (size === "small") return "0.429rem 0.857rem";
    return "0.714rem 1.714rem";
  }}; */
  }
  border-radius: none;
  border-right: none;
`;

export const BmButtonDropDown = ({ children, ...rest }) => {
  return (
    <>
      <Wrapper {...rest}>
        <Button {...rest}>{children}</Button>
        <Drop {...rest} icon={<KeyboardArrowDown />} />
      </Wrapper>
    </>
  );
};
