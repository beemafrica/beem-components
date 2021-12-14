import React from 'react';
import styled from "styled-components";
import {
  BmPrimaryWhite,
  BmGrey400,
  BmSecondaryGrey,
  BmPrimaryBlack,
} from "./colors";
import { BmDropdown } from "./dropdown";
import { BmSearchIcon } from "./iconStyles";

const BmSearchField = styled.input`
  color: ${BmSecondaryGrey};
  border: none;
  padding: 0rem;
  &:visited,
  &:active,
  &:hover,
  &:focus {
    outline: none !important;
    text-decoration: none;
    color: ${BmPrimaryBlack};
  }
  ${(props) => props.dropdown === "yes" && "margin-right: 1.714rem;"}
`;

const BmSearchWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background: ${BmPrimaryWhite};
  border: 0.071rem solid ${BmGrey400};
  box-sizing: border-box;
  border-radius: 0.21875rem;
  ${"" /* height: 2.929rem; */}
  padding: ${({ dropdown }) => {
    if (dropdown === "yes") {
      return "0rem 0rem 0rem 1.143rem";
    } else {
      return "0.786rem 1.143rem";
    }
  }};
`;

const BmStretch = styled.div`
  display: flex;
  flex-direction: row;
`;
const SearchIcon = styled(BmSearchIcon)`
  margin-right: 0.714rem;
  display: flex;
`;
export const BmSearch = ({ dropdown, ...rest }) => {
  return (
    <div>
      <BmStretch {...rest}>
        <BmSearchWrapper dropdown={dropdown} {...rest}>
          <SearchIcon size="small" {...rest} />
          <BmSearchField {...rest} dropdown={dropdown} />
        </BmSearchWrapper>
        {dropdown === "yes" && <BmDropdown />}
      </BmStretch>
    </div>
  );
};
