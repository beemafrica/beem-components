import React, { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { BmPrimaryWhite } from "../colors";
import { BmIcons } from "../iconStyles";
import { KeyboardArrowDown, KeyboardArrowUp } from "@material-ui/icons";

const { Provider, Consumer } = React.createContext({});

const Dropdown = (value, rest) => {
  if (value.expandIcon && value.expandIcon === "none") {
    return;
  }
  if (!value.expandIcon) {
    return value.toggle ? (
      <BmIcons icon={<KeyboardArrowDown />} {...rest} />
    ) : (
      <BmIcons icon={<KeyboardArrowUp />} {...rest} />
    );
  }
  if (value.expandIcon && value.expandIcon !== "none") {
    return <BmIcons icon={value.expandIcon} />;
  }
};
const BmAccordionMenu = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  ${"" /* padding: 0.571rem; */}
  padding: 0.571rem 1.143rem;
  border: 1px solid 
  background: ${BmPrimaryWhite};
  > *:not(:last-child) {
    margin-right: 0.5rem;
  }
`;

const BmAccordionDetails = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const BmAccordionWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const BmAccordion = ({ children, disabled, expandIcon, ...rest }) => {
  const [toggle, setToggle] = useState(false);

  return (
    <BmAccordionWrapper>
      <Provider value={{ toggle, setToggle, disabled, expandIcon }}>
        {children}
      </Provider>
    </BmAccordionWrapper>
  );
};

BmAccordion.Title = ({
  children,
  leadingIcon,
  trailingIcon,
  size,
  ...rest
}) => {
  return (
    <Consumer>
      {(value) => (
        <BmAccordionMenu
          {...rest}
          onClick={() =>
            !value.disabled || value.disabled === false
              ? value.setToggle(!value.toggle)
              : value.setToggle(false)
          }
        >
          {Dropdown(value, rest)}
          {leadingIcon && <BmIcons icon={leadingIcon} size={size} />}
          <BmAccordionDetails>{children}</BmAccordionDetails>
          {trailingIcon && <BmIcons icon={trailingIcon} size={size} />}
        </BmAccordionMenu>
      )}
    </Consumer>
  );
};

BmAccordion.Body = ({ children }) => {
  return (
    <Consumer>{(value) => value.toggle && <div>{children}</div>}</Consumer>
  );
};

BmAccordion.propTypes = {
  children: PropTypes.object,
  size: PropTypes.string,
  expandIcon: PropTypes.string,
  leadingIcon: PropTypes.node,
  trailingIcon: PropTypes.node,
  disabled: PropTypes.bool,
};

export default BmAccordion;
