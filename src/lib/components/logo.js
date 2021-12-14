import React from 'react';
import styled from "styled-components";

export const Logo = styled.img`
  height: 45;
  width: 9.857rem;
  ${"" /* border: 0.071rem solid #33B1BA; */}
  box-sizing: border-box;
`;

export const BmLogo = ({ src, ...rest }) => {
  return <Logo src={src} {...rest} />;
};
