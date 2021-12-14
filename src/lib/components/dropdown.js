import React, { useState } from "react";
import styled from "styled-components";
import { BmPrimaryWhite, BmSecondaryGrey, BmGrey400 } from "./colors";
import { BmDropdownIcon } from "./iconStyles";

const BmDropdownWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: static;
  ${"" /* box-sizing: border-box; */}
  margin: 0rem;
  padding: 0.5rem 1.143rem;
  background: ${BmPrimaryWhite};
  border: 0.071rem solid ${BmGrey400};
  border-radius: 0.21875rem;
  ${'' /* box-shadow: inset 0.071rem 0rem 0rem #afafaf; */}
`;

const BmDropdownBtn = styled.div`
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 1rem;
  line-height: 1.5rem;
  text-align: center;
  letter-spacing: -0.02em;
  color: ${BmSecondaryGrey};
  flex: none;
  flex-grow: 0;
  margin: 0rem 0rem;
  padding: 0rem;
`;

const StyledLi = styled.div`
  float: left;
`;

const DownIcon = styled(BmDropdownIcon)`
  padding-left: 1.143rem;
`;

const DropDownContent = styled.div`
  display: block;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 11.429rem;
  box-shadow: 0rem 0.571rem 1.143rem 0rem rgba(0, 0, 0, 0.2);
  z-index: 1;
`;

// eslint-disable-next-line no-unused-vars
const BmDropdownList = styled(StyledLi)`
  display: inline-block;
`;

const BmDropdownItem = styled.button`
  padding: 0.5rem 1.143rem;
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 1rem;
  line-height: 1.5rem;
  text-align: center;
  letter-spacing: -0.02em;
  color: ${BmSecondaryGrey};
  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const BmDropdown = ({ ...rest }) => {
  const [isOpen, setIsOpen] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [value, setValue] = useState(undefined);
  const toggling = () => setIsOpen(!isOpen);
  return (
    <BmDropdownWrapper {...rest}>
      <BmDropdownBtn onClick={toggling}>ANY</BmDropdownBtn>
      <DownIcon />
      {isOpen && (
        <DropDownContent>
          <BmDropdownItem onClick={() => setValue("any")}>ANY</BmDropdownItem>
          <BmDropdownItem onClick={() => setValue("all")}>ALL</BmDropdownItem>
        </DropDownContent>
      )}
    </BmDropdownWrapper>
  );
};
