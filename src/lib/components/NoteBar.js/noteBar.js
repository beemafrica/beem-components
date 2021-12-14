import React from "react";
import Proptypes from "prop-types";
import { Error, Info, Warning } from "@material-ui/icons";
import styled from "styled-components";
import {
  BmGrey400,
  BmPrimaryBlue,
  BmSecondaryRed,
  BmPrimaryGold,
} from "../colors";
import { BmIcons } from "../iconStyles";

export const NoteBarWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0.5rem 1rem;
  border: 0.071rem solid ${BmGrey400};
  border-radius: 0.25rem;
  > *:not(:last-child) {
    margin-right: 0.5rem;
  }
`;

export const BmNoteBar = ({ type, children, color, size, ...rest }) => {
  return (
    <NoteBarWrapper {...rest}>
      {type === "info" && (
        <BmIcons
          icon={<Info />}
          color={color ? color : `${BmPrimaryBlue}`}
          size={size ? size : "large"}
        />
      )}
      {type === "error" && (
        <BmIcons
          icon={<Error />}
          color={color ? color : `${BmSecondaryRed}`}
          size={size ? size : "large"}
        />
      )}
      {type === "warning" && (
        <BmIcons
          icon={<Warning />}
          color={color ? color : `${BmPrimaryGold}`}
          size={size ? size : "large"}
        />
      )}
      {children}
    </NoteBarWrapper>
  );
};

BmNoteBar.propTypes = {
  children: Proptypes.object,
  color: Proptypes.string,
  size: Proptypes.string,
  type: Proptypes.string,
};
