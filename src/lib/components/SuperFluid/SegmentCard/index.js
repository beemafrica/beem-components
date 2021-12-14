import React from "react";
import { CheckCircle } from "@material-ui/icons";
import styled from "styled-components";
import { BmCheckbox } from "../../checkbox";
import { BmGrey400, BmPrimaryWhite, BmPrimaryBlue } from "../../colors";
import { BmIcons } from "../../iconStyles";

export const BmSegmentCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0.5rem 0rem;
  background: ${BmPrimaryWhite};
  border: 0.071rem solid ${BmGrey400};
  border-radius: 0.25rem 0rem 0rem 0.25rem;
  margin: 0rem;
  width: 20%;
`;

export const BmSegmentSelector = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1rem;
  background: ${BmPrimaryWhite};
  border: 0.071rem solid ${BmGrey400};
  border-left: none;
  border-radius: 0rem 0.188rem 0.25rem 0rem;
  margin: 0rem;
  width: 80%; 
`;

export const BmSegment = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background: ${BmPrimaryWhite};
  border-radius: 0rem 0.188rem 0.25rem 0rem;
  margin: 0rem;
  width: 100%;

  h2 {
    margin: 1rem 0rem;
    display: flex;
    flex-direction: column;
  }
`;

export const BmSegmentCheckBoxMargin = styled.div`
  margin: 0.5rem 0rem;
`;

export const BmSegmentCheckBox = (props) => {
  return (
    <BmSegmentCheckBoxMargin>
      <BmCheckbox {...props} />
    </BmSegmentCheckBoxMargin>
  );
};

export const BmSegmentCompleteContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 1rem 0rem;
  padding: 0rem;

  p {
    margin-top: 0.25rem;
  }

  h1 {
    margin-top: 0.5rem;
  }

  h4 {
    margin-top: 1.25rem;
    color: ${(props) => (props.color ? props.color : `${BmPrimaryBlue}`)};
  }
`;

export const BmSegmentCompleteIcon = (props) => {
  return (
    <BmIcons
      icon={<CheckCircle />}
      color={props.color ? props.color : `${BmPrimaryBlue}`}
      size={props.size ? props.size : "5rem"}
    />
  );
};

export const BmSegmentCreateContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;

  p {
    margin-top: 0.25rem;
  }

  h1 {
    margin-top: 0.5rem;
  }

  h4 {
    margin-top: 1.25rem;
    color: ${(props) => (props.color ? props.color : `${BmPrimaryBlue}`)};
  }
`;
