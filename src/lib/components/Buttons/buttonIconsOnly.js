import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import {
  BmPrimaryWhite,
  BmPrimaryBlue,
  BmGrey100,
  BmGrey50,
  BmSecondaryRed,
  BmSecondaryDarkGreen,
  BmGrey400,
} from "../colors";
import { BmButtonIcon } from "../iconStyles";

const BeemButtonIcon = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background: ${({ variant, disabled }) => {
    if (!disabled) {
      if (variant === "active") return `${BmPrimaryBlue}`;
      if (variant === "enabled") return `${BmGrey50}`;
      if (variant === "destructive") return `${BmSecondaryRed}`;
      if (variant === "success") return `${BmSecondaryDarkGreen}`;
      if (variant === "neutral") return `${BmPrimaryWhite}`;
      if (variant === "primary") return `${BmPrimaryBlue}`;
      if (variant === "secondary") return `${BmPrimaryWhite}`;
      if (variant === "tertiary") return `${BmPrimaryWhite}`;
      return `${BmPrimaryBlue}`;
    } else {
      return `${BmGrey100}`;
    }
  }};
  border: 0.0625rem solid
    ${({ variant, disabled }) => {
      if (!disabled) {
        if (variant === "active") return `${BmPrimaryBlue}`;
        if (variant === "enabled") return `${BmGrey50}`;
        if (variant === "destructive") return `${BmSecondaryRed}`;
        if (variant === "success") return `${BmSecondaryDarkGreen}`;
        if (variant === "neutral") return `${BmGrey400}`;
        if (variant === "primary") return `${BmPrimaryBlue}`;
        if (variant === "secondary") return `${BmPrimaryBlue}`;
        if (variant === "tertiary") return `${BmPrimaryWhite}`;
        return `${BmPrimaryBlue}`;
      } else {
        return `${BmGrey100}`;
      }
    }};
  box-sizing: border-box;
  border-radius: 0.21875rem;
  padding: 0rem;
`;

export const BmIconWrapper = styled.div`
  padding: 0.5rem !important;
`;

export const BmBtnIcon = (props) => {
  const { variant, size, disabled, children, icon, color, ...rest } = props;

  return (
    <BeemButtonIcon size={size} variant={variant} disabled={disabled} {...rest}>
      {icon && (
        <BmIconWrapper>
          <BmButtonIcon
            disabled={disabled}
            icon={icon}
            variant={variant}
            size={size}
            color={color}
          />
        </BmIconWrapper>
      )}
    </BeemButtonIcon>
  );
};

BmBtnIcon.propTypes = {
  size: PropTypes.string,
  variant: PropTypes.string,
  icon: PropTypes.node,
  color: PropTypes.string,
  disabled: PropTypes.bool,
};
