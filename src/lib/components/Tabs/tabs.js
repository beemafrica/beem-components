import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { BmGrey400, BmPrimaryBlue, BmPrimaryWhite } from "../colors";
import { BmIcons } from "../iconStyles";

const BmTabWrapper = styled.div`
  display: inline-flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0.714rem 1.714rem;
  background: ${BmPrimaryWhite};
  box-shadow: ${({ state }) => {
    if (state === "active") {
      return `inset 0px -3px 0px ${BmPrimaryBlue}`;
    }
    if (state === "inactive") {
      return `inset 0px -3px 0px ${BmGrey400}`;
    }
    return "none";
  }};
  > *:not(:last-child) {
    margin-right: 0.5rem;
  }
  ${({ color, children, disabled }) =>
    children && disabled
      ? `
    > * {
     color: ${BmGrey400};
  }
  `
      : `
    > * {
     color: ${color};
  }
  `}
`;

export const BmTab = ({
  leadingIcon,
  trailingIcon,
  children,
  size,
  color,
  icon,
  disabled,
  ...rest
}) => {
  return (
    <BmTabWrapper
      leadingIcon={leadingIcon}
      trailingIcon={trailingIcon}
      color={color}
      disabled={disabled}
      {...rest}
    >
      {leadingIcon && (
        <BmIcons
          icon={leadingIcon}
          size={size || 'large'}
          color={disabled ? `${BmGrey400}` : color}
        />
      )}
      {children}
      {trailingIcon && (
        <BmIcons
          icon={trailingIcon}
          size={size || 'large'}
          color={disabled ? `${BmGrey400}` : color}
        />
      )}
    </BmTabWrapper>
  );
};

BmTab.propTypes = {
  children: PropTypes.object,
  trailingIcon: PropTypes.node,
  leadingIcon: PropTypes.node,
  state: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.string,
};