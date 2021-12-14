import React from "react";
import styled from "styled-components";
import { BmPrimaryBlack, BmPrimaryBlue } from "../colors";
import { BmIcons } from "../iconStyles";
import PropTypes from "prop-types";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0rem 1rem 1rem 1rem;
  border-bottom: 0.125rem solid ${BmPrimaryBlue};
`;

export const BmListHeader = ({ children, trailingIcon, size, color }) => {
  return (
    <Container>
      {children}
      {trailingIcon && (
        <BmIcons
          icon={trailingIcon}
          color={color || `${BmPrimaryBlack}` }
          size={size || 'large'}
        />
      )}
    </Container>
  );
};

BmListHeader.propTypes = {
  children: PropTypes.object,
  trailingIcon: PropTypes.node,
  color: PropTypes.string,
  size: PropTypes.string,
};
