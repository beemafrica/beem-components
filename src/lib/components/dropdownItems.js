import React from "react";
import styled from "styled-components";
import { BmGrey100, BmGrey400, BmPrimaryBlack, BmPrimaryWhite } from "./colors";
import { BmIcons } from "./iconStyles";

export const BmCustomizedDropdown = styled.div`
  display: flex;
  flex-direction: column;
`;

export const BmButtonDropdownItem = styled.div`
  ${"" /* display: inline-block; */}
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")}};
  flex-direction: column;
  ${'' /* align-items: flex-start; */}
  padding: 0.286rem 0rem;
  background: ${BmPrimaryWhite};
  border: 0.071rem solid ${BmGrey400};
  box-shadow: 0rem 0.286rem 0.286rem rgba(0, 0, 0, 0.25);
  border-radius: 0.21875rem;
  z-index: 99999;
  position: absolute;
  cursor: pointer;
  width: 100%;
`;

export const BmDropDownMenu = styled.div`
  position: relative;
  margin-top: 0.357rem;
  width: 100%;
`;

export const ItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0.571rem 1.143rem;
  background: ${BmPrimaryWhite};
  &:hover {
    background: ${BmGrey100};
  }
  cursor: pointer;
`;

export const LeftItemIcon = styled(BmIcons)`
  margin-right: 0.571rem;
`;

export const RightItemIcon = styled(BmIcons)`
  margin-left: 0.571rem;
`;

export const ItemText = styled.p`
  color: ${BmPrimaryBlack};
`;

export const BmDropDownItem = ({
  children,
  leadingIcon,
  trailingIcon,
  color,
  size,
  ...rest
}) => {
  return (
    <>
      <ItemWrapper {...rest}>
        {leadingIcon && (
          <LeftItemIcon size={size} color={color} icon={leadingIcon} />
        )}
        <ItemText color={color}>{children}</ItemText>
        {trailingIcon && (
          <RightItemIcon size={size} color={color} icon={trailingIcon} />
        )}
      </ItemWrapper>
    </>
  );
};
