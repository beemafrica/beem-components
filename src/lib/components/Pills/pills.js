import React, { useState } from "react";
import Proptypes from "prop-types";
// eslint-disable-next-line no-unused-vars
import { Clear, KeyboardArrowDown } from "@material-ui/icons";
import styled from "styled-components";
import { BmAvatar } from "../Avatars/avatars";
import { BmGrey100 } from "../colors";
import { BmIcons } from "../iconStyles";
import { p } from "../text";

export const BmPillWrapper = styled.div`
  display: ${({ clicked }) => {
    if (clicked) {
      return "flex";
    }
    return "none";
  }};
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0.214rem 0.571rem;
  background: ${BmGrey100};
  border-radius: 0.25rem;
  ${({ label, color }) =>
    label &&
    `
    ${p}
    text-transform: uppercase;
    color: ${color};
  `}
  > * {
    margin-right: 0.25rem;
  }
`;

export const BmPill = ({
  type,
  icon,
  avatarIcon,
  size,
  avatarSize,
  color,
  label,
  onDelete,
  deleteIcon,
  ...rest
}) => {
  const [clicked, setClicked] = useState(true);
  return (
    <>
      <BmPillWrapper
        label={label}
        onDelete={onDelete}
        onClick={() => (onDelete ? setClicked(false) : setClicked(true))}
        color={color}
        clicked={clicked}
        {...rest}
      >
        {icon && <BmIcons size={size || "xsmall"} icon={icon} color={color} />}
        {avatarIcon && (
          <BmAvatar
            user={avatarIcon}
            size={avatarSize || "xsmall"}
            type="circle"
            color={color}
          />
        )}
        {label}
        {onDelete && (
          <BmIcons
            style={{ margin: "0rem 0rem 0rem 1rem" }}
            size={size || "xsmall"}
            icon={deleteIcon ? deleteIcon : <Clear />}
            color={color || "black"}
          />
        )}
      </BmPillWrapper>
    </>
  );
};

BmPill.propTypes = {
  icon: Proptypes.object,
  avatarIcon: Proptypes.object,
  size: Proptypes.string,
  avatarSize: Proptypes.string,
  color: Proptypes.string,
  label: Proptypes.string,
  onDelete: Proptypes.object,
  deleteIcon: Proptypes.object,
};
