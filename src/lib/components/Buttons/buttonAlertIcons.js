import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import {
  BmSecondaryGrey,
  BmSecondaryRed,
  BmPrimaryWhite,
} from "../colors";
import Badge from "@material-ui/core/Badge";
import { PoppinsMedium } from "../typography";

const size = (props) => {
  if (props.size === "small") return "1.429rem";
  if (props.size === "medium") return "1.714rem";
  if (props.size === "large") return "2.286rem";
  return "2.286rem";
};

const Badgesize = (props) => {
  if (props.size === "small") return "0.857rem";
  if (props.size === "medium") return "0.857rem";
  if (props.size === "large") return "0.857rem";
  return "0.857rem";
};

const AlertIcon = {
  root: {
    height: (props) => size(props),
    width: (props) => size(props),
    fill: (props) => props.color || `${BmSecondaryGrey}`,
  },
};

const BadgeIcon = () => ({
  badge: {
    height: (props) => Badgesize(props),
    width: (props) => Badgesize(props),
    minWidth: (props) => Badgesize(props),
    background: (props) => props.badgeColor || `${BmSecondaryRed}`,
    color: `${BmPrimaryWhite}`,
    fontFamily: `${PoppinsMedium}`,
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: "0.643rem",
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    letterSpacing: "-0.02em",
  },
});

const BmBadge = withStyles(BadgeIcon)((props) => <Badge action {...props} />);

export const BmIcon = withStyles(AlertIcon)((props) => {
  if (props.icon) {
    const Icon = props.icon.type;
    return (
      <BmBadge
        badgeContent={props.badgeContent}
        badgeColor={props.badgeColor}
        overlap="circle"
      >
        <Icon action {...props} />
      </BmBadge>
    );
  }
  return null;
});

export const BmBtnIconWrapper = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0.536rem;
  border: none;
  background: none;
`;

export const BmAlertIcon = (props) => {
  const { icon, badgeContent, badgeColor, size, ...rest } = props;
  return (
    <BmBtnIconWrapper>
      <BmIcon
        icon={icon}
        size={size}
        badgeContent={badgeContent}
        badgeColor={badgeColor}
        {...rest}
      />
    </BmBtnIconWrapper>
  );
};

BmAlertIcon.propTypes = {
  size: PropTypes.string,
  badgeColor: PropTypes.string,
  badgeContent: PropTypes.string,
  icon: PropTypes.node,
  color: PropTypes.string,
};
