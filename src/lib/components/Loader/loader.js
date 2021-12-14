import React from "react";
import Proptypes from 'prop-types';
import CircularProgress from "@material-ui/core/CircularProgress";
import styled from "styled-components";
import { withStyles } from "@material-ui/core/styles";
import {
  BmPrimaryBlue,
  BmSecondaryDarkGreen,
  BmSecondaryRed,
  BmPrimaryGold,
} from "../colors";

const style = {
  colorPrimary: {
    color: ({ type }) => {
      if (type === "success") return `${BmSecondaryDarkGreen}`;
      if (type === "warning") return `${BmPrimaryGold}`;
      if (type === "error") return `${BmSecondaryRed}`;
      return `${BmPrimaryBlue}`;
    },
  },
};

export const BmLoader = withStyles(style)(({ size, ...rest }) => {
  let defaultSize = size || "2.286rem";
  if (size) {
    if (size === "large") defaultSize = "2.286rem";
    if (size === "medium") defaultSize = "1.714rem";
    if (size === "small") defaultSize = "1.429rem";
  }
  return <CircularProgress action size={defaultSize} {...rest} />;
});

export const Loader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

BmLoader.propTypes = {
  size: Proptypes.string,
  type: Proptypes.string,
}