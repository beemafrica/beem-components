import React from 'react';
import styled from "styled-components";
import { BmGrey400, BmPrimaryBlack, BmPrimaryBlue, BmGrey100 } from "./colors";

const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  display: flex;
  border: 0;
  height: 0.071rem;
  margin: -0.071rem;
  overflow: hidden;
  padding: 0;
  white-space: nowrap;
  width: 0.071rem;
  display: none;
`;

const Icon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 0.143rem;
`;

const StyledCheckbox = styled.div`
  display: flex;
  width: 1.143rem;
  height: 1.143rem;
  background: ${({ checked, disabled }) => {
    if (!disabled && checked) return `${BmPrimaryBlue}`;
    if (disabled && !checked) return `${BmGrey100}`;
    if (disabled && checked) return `${BmGrey100}`;
    return "";
  }};
  border-radius: 0.143rem;
  transition: all 150ms;
  border: 0.071rem solid
    ${({ checked, disabled }) => {
      if (!disabled && checked) return `${BmPrimaryBlue}`;
      if (disabled && !checked) return `${BmGrey400}`;
      if (disabled && checked) return "none";
      return `${BmGrey400}`;
    }};
  ${Icon} {
    visibility: ${(props) => (props.checked ? "visible" : "hidden")};
  }
`;

const CheckboxContainer = styled.div`
  display: flex;
`;

const CheckboxLabel = styled.p`
  color: ${BmPrimaryBlack};
  margin-left: 0.5rem;
`;

export const BmCheckbox = ({
  className,
  checked,
  label,
  value,
  disabled,
  ...props
}) => (
  <label>
    <CheckboxContainer {...props}>
      <HiddenCheckbox
        checked={checked}
        disabled={disabled}
        value={value}
        {...props}
      />
      <StyledCheckbox checked={checked} disabled={disabled}>
        <Icon viewBox="0 0 24 24">
          <polyline points="20 6 9 17 4 12" />
        </Icon>
      </StyledCheckbox>
      <CheckboxLabel>{label}</CheckboxLabel>
    </CheckboxContainer>
  </label>
);
