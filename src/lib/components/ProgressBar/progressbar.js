import React from "react";
import styled from "styled-components";
import Proptypes from 'prop-types';
import { BmGrey100, BmPrimaryBlue } from "../colors";

const Container = styled.div`
  height: 0.75rem;
  width: 100%;
  position: relative;
`;

const BaseBox = styled.div`
  height: 100%;
  position: absolute;
  border-radius: 0.25rem;
  transition: width 1s ease-in-out;
`;

const Background = styled(BaseBox)`
  background: ${BmGrey100};
  width: 100%;
`;

const Progress = styled(BaseBox)`
  background: ${(props) => (props.color ? props.color : `${BmPrimaryBlue} `)};
  width: ${({ value }) => value}%;
`;

export const BmProgressBar = (props) => {
  const { value, color } = props;
  return (
    <Container>
      <Background />
      <Progress value={value} color={color} />
    </Container>
  );
};


BmProgressBar.propTypes = {
  value: Proptypes.string.isRequired,
  color: Proptypes.string,
}