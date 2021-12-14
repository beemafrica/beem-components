import styled from "styled-components";
import { Link } from "react-router-dom";
import { BmPrimaryBlack } from "../colors";
import { p } from "../text";

export const BmRouteLink = styled(Link)`
  ${p}
  color: ${BmPrimaryBlack};
  text-decoration: none;
  &:hover,
  &:focus,
  &:active {
    color: ${BmPrimaryBlack};
    font-weight: 600;
    &:before {
      font-weight: normal;
    }
  }
`;
