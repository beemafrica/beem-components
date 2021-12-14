import React from "react";
import styled from "styled-components";
import {
  BmPrimaryWhite,
  BmSecondaryDarkGreen,
  BmSecondaryRed,
  BmPrimaryBlack,
  BmGrey100,
  BmGrey400,
  BmPrimaryGold,
} from "./colors";
import { BmTagIcon } from "./iconStyles";

const BeemTag = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 0.21875rem;
  height: ${({ size }) => {
    if (size === "small") return "1.286rem";
    if (size === "default") return "1.714rem";
    return "1.714rem";
  }};
  padding: ${({ size }) => {
    if (size === "small") return "0.071rem 0.571rem";
    if (size === "default") return "0.214rem 0.571rem";
    return "0.214rem 0.571rem";
  }};
  background: ${({ variant }) => {
    if (variant === "neutral") return `${BmGrey100}`;
    if (variant === "success") return `${BmSecondaryDarkGreen}`;
    if (variant === "warning") return `${BmPrimaryGold}`;
    if (variant === "error") return `${BmSecondaryRed}`;
    if (variant === "light") return `${BmPrimaryWhite}`;
    if (variant === undefined) return `${BmGrey100}`;
    return variant;
  }};
  border: 0.071rem solid
    ${({ variant }) => {
      if (variant === "neutral") return `${BmGrey100}`;
      if (variant === "success") return `${BmSecondaryDarkGreen}`;
      if (variant === "warning") return `${BmPrimaryGold}`;
      if (variant === "error") return `${BmSecondaryRed}`;
      if (variant === "light") return `${BmGrey400}`;
      return `${BmGrey100}`;
    }};
  border-radius: 0.21875rem;
`;

const TagText = styled.p`
  color: ${({ variant }) => {
    if (variant === "light" || variant === "neutral")
      return `${BmPrimaryBlack}`;
    return `${BmPrimaryWhite}`;
  }};
  text-transform: uppercase;
`;

export const BmLeftIcon = styled(BmTagIcon)`
  margin-right: 0.643rem;
`;

export const BmRightIcon = styled(BmTagIcon)`
  margin-left: 0.643rem;
`;

export const BmTag = (props) => {
  const {
    variant,
    size,
    disabled,
    children,
    leadingIcon,
    trailingIcon,
    ...rest
  } = props;
  return (
    <BeemTag size={size} variant={variant} disabled={disabled} {...rest}>
      {leadingIcon && (
        <BmLeftIcon
          disabled={disabled}
          icon={leadingIcon}
          variant={variant}
          size={size}
        />
      )}
      <TagText disabled={disabled} variant={variant} size={size}>
        {children}
      </TagText>
      {trailingIcon && (
        <BmRightIcon
          icon={trailingIcon}
          disabled={disabled}
          variant={variant}
          size={size}
        />
      )}
    </BeemTag>
  );
};
