import React from "react";
import styled from "styled-components";
import { BmGrey100, BmPrimaryBlack, BmPrimaryWhite } from "../colors";
import { BmIcons } from "../iconStyles";
import PropTypes from "prop-types";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0.5rem 1rem;
  justify-content: space-between;
  background: ${BmPrimaryWhite};
  margin: 0rem;
  &:hover {
    background: ${BmGrey100};
  }
`;

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: flex-start;
  align-items: center;
  > * {
    margin-right: 0.5rem;
  }
`;

export const RightContainer = styled.div`
  margin-left: auto;
  display: flex;
  flex-direction: flex-end;
  align-items: center;
`;

export const Label = styled.p`
  color: ${BmPrimaryBlack};
  ${({ trailingIcon }) =>
    trailingIcon &&
    `
    margin-right: 0.5rem;
  `}
`;
export const BmRowLabel = ({
  children,
  trailingIcon,
  leadingIcon,
  label,
  color,
  size,
  ...rest
}) => {
  return (
    <Container
      trailingIcon={trailingIcon}
      leadingIcon={leadingIcon}
      label={label}
      size={size}
      {...rest}
    >
      <LeftContainer>
        {leadingIcon && (
          <BmIcons
            icon={leadingIcon}
            color={color || `${BmPrimaryBlack}}`}
            size={size || 'small'}
          />
        )}
        {children}
      </LeftContainer>
      <RightContainer>
        {label && <Label trailingIcon={trailingIcon}>{label}</Label>}
        {trailingIcon && (
          <BmIcons
            icon={trailingIcon}
            color={color || `${BmPrimaryBlack}}`}
            size={size ||  'small'}
          />
        )}
      </RightContainer>
    </Container>
  );
};

BmRowLabel.propTypes = {
  children: PropTypes.object,
  trailingIcon: PropTypes.node,
  label: PropTypes.object,
  leadingIcon: PropTypes.node,
  color: PropTypes.string,
  size: PropTypes.string,
};
