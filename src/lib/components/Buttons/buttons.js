import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import {
  BmPrimaryWhite,
  BmPrimaryBlue,
  BmSecondaryDarkGreen,
  BmSecondaryRed,
  BmGrey400,
  BmGrey100,
  BmGrey50,
  BmSecondaryCyan,
  BmSecondaryGreen8,
  BmSecondaryRed8,
} from "../colors";
import { BmButtonIcon } from "../iconStyles";
import { h3, h4 } from "../text";

const ButtonText = styled.div`
  ${({ size }) => {
    if (size === "large") return `${h3}`;
    if (size === "medium") return `${h3}`;
    if (size === "small") return `${h4}`;
    return `${h3}`;
  }}
  text-align: center;
  color: ${({ variant, disabled, color }) => {
    if (color) return color;
    if (!disabled) {
      if (variant === "primary") return `${BmPrimaryWhite}`;
      if (variant === "secondary") return `${BmPrimaryBlue}`;
      if (variant === "tertiary") return `${BmPrimaryBlue}`;
      if (variant === "destructive") return `${BmPrimaryWhite}`;
      if (variant === "success") return `${BmPrimaryWhite}`;
      if (variant === "neutral") return `${BmPrimaryBlue}`;
      return `${BmPrimaryWhite}`;
    } else {
      return `${BmGrey400}`;
    }
  }};
  padding: 0rem;
`;

const BeemButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 0.21875rem;
  padding: ${({ size }) => {
    if (size === "large") return "0.625rem 1.5rem";
    if (size === "medium") return "0.4375rem 1rem";
    if (size === "small") return "0.375rem 0.75rem";
    return "0.625rem 1.5rem";
  }};
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

  border: 0.0625rem solid
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

  &:hover {
    background: ${({ variant, disabled }) => {
      if (!disabled) {
        if (variant === "primary") return `${BmSecondaryCyan}`;
        if (variant === "neutral") return `${BmGrey50}`;
        if (variant === "success") return `${BmSecondaryGreen8}`;
        if (variant === "destructive") return `${BmSecondaryRed8}`;
        if (!variant) {
          return `${BmSecondaryCyan}`;
        }
      }
    }};
    border: 0.0625rem solid
      ${({ variant, disabled }) => {
        if (!disabled) {
          if (variant === "secondary") return `${BmSecondaryCyan}`;
        }
        return "none";
      }};
  }
  &:active {
    background: ${({ variant, disabled }) => {
      if (!disabled) {
        if (variant === "primary") return `${BmPrimaryBlue}`;
        if (variant === "neutral") return `${BmGrey100}`;
        if (variant === "success") return `${BmSecondaryDarkGreen}`;
        if (variant === "destructive") return `${BmSecondaryRed}`;
        if (!variant) {
          return `${BmPrimaryBlue}`;
        }
      }
    }};
    box-shadow: ${({ variant, disabled }) => {
      if (!disabled) {
        if (
          variant === "primary" ||
          variant === "success" ||
          variant === "destructive"
        )
          return "inset 0rem 0.125rem 0.25rem rgba(0, 0, 0, 0.25)";
        if (!variant) {
          return "inset 0rem 0.125rem 0.25rem rgba(0, 0, 0, 0.25)";
        }
      }
    }};
    border: 0.0625rem solid
      ${({ variant, disabled }) => {
        if (!disabled) {
          if (variant === "secondary") return `${BmPrimaryBlue}`;
        }
        return "none";
      }};
  }

  &:hover ${ButtonText} {
    color: ${({ variant, disabled }) => {
      if (!disabled) {
        if (variant === "secondary") return `${BmSecondaryCyan}`;
        if (variant === "tertiary") return `${BmSecondaryCyan}`;
      }
    }};
  }
  &:active ${ButtonText} {
    color: ${({ variant, disabled }) => {
      if (!disabled) {
        if (variant === "secondary") return `${BmPrimaryBlue}`;
        if (variant === "tertiary") return `${BmPrimaryBlue}`;
      }
    }};
  }
`;

export const BmLeftIcon = styled(BmButtonIcon)`
  margin-right: 0.5rem;
`;

export const BmRightIcon = styled(BmButtonIcon)`
  margin-left: 0.5rem;
`;
export const BmButton = (props) => {
  const {
    variant,
    size,
    disabled,
    children,
    leadingIcon,
    trailingIcon,
    color,
    ...rest
  } = props;
  return (
    <BeemButton
      size={size}
      variant={variant}
      disabled={disabled}
      color={color}
      {...rest}
    >
      {leadingIcon && (
        <BmLeftIcon
          disabled={disabled}
          icon={leadingIcon}
          variant={variant}
          size={size}
          color={color}
        />
      )}
      <ButtonText
        disabled={disabled}
        variant={variant}
        size={size}
        color={color}
        // {...rest}
      >
        {children}
      </ButtonText>
      {trailingIcon && (
        <BmRightIcon
          icon={trailingIcon}
          disabled={disabled}
          variant={variant}
          size={size}
          color={color}
        />
      )}
    </BeemButton>
  );
};

BmButton.propTypes = {
  size: PropTypes.string,
  variant: PropTypes.string,
  leadingIcon: PropTypes.node,
  trailingIcon: PropTypes.node,
  color: PropTypes.string,
  disabled: PropTypes.bool,
};
