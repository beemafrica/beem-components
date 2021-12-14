import { Person } from "@material-ui/icons";
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { BmGrey100, BmPrimaryBlue, BmGrey400 } from "../colors";
import { BmAvatarIcon } from "../iconStyles";
import SmartToyIcon from '@mui/icons-material/SmartToy';

export const BmAvatarWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${({ size }) => {
    if (size === "large") return "3.429rem";
    if (size === "medium") return "2.286rem";
    if (size === "small") return "1.714rem";
    if (size === "xsmall") return "1.429rem";
    if (!size) return "3.429rem";
    return size;
  }};
  width: ${({ size }) => {
    if (size === "large") return "3.429rem";
    if (size === "medium") return "2.286rem";
    if (size === "small") return "1.714rem";
    if (size === "xsmall") return "1.429rem";
    if (!size) return "3.429rem";
    return size;
  }};
  background: ${({ user }) => {
    if (user === "chatbot") return `${BmPrimaryBlue}`;
    if (user === "employee") return `${BmGrey100}`;
    if (user === "default") return `${BmPrimaryBlue}`;
    return `${BmPrimaryBlue}`;
  }};
  border-radius: ${({ type }) => {
    if (type === "circle") return "7.143rem";
    if (type === "square") return "0.179rem";
    return "7.143rem";
  }};
  border: 0.071rem solid
    ${({ user }) => {
      if (user === "chatbot") return `${BmPrimaryBlue}`;
      if (user === "employee") return `${BmGrey400}`;
      if (user === "default") return `${BmPrimaryBlue}`;
      return `${BmPrimaryBlue}`;
    }};
`;

export const BmAvatar = (props) => {
  const { user, size, color, ...rest } = props;
  return (
    <BmAvatarWrapper user={user} size={size} {...rest}>
      {user === "employee" && (
        <BmAvatarIcon icon={<Person />} size={size} color={color} {...rest} />
      )}
      {user === "chatbot" && (
        <BmAvatarIcon icon={<SmartToyIcon />} size={size} color={color} {...rest} />
      )}
      {user !== "chatbot" && user !== "employee" && user !== "default" && (
        <BmAvatarIcon icon={user} size={size} color={color} {...rest} />
      )}
    </BmAvatarWrapper>
  );
};

BmAvatar.propTypes = {
  size: PropTypes.string,
  type: PropTypes.string,
  color: PropTypes.string,
  user: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
};
