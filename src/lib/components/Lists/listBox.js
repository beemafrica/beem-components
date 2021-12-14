import styled from "styled-components";
import { BmGrey400, BmPrimaryWhite } from "../colors";
import PropTypes from "prop-types";

const show = (isOpen) => {
  if (isOpen !== undefined) {
    if (isOpen === true) {
      return `display: flex;
      position: absolute;
      margin-top: 0.5rem`;
    }
    if (isOpen === false) {
      return `display: none;
      position: absolute;
      margin-top: 0.5rem`;
    }
  }
  return "flex";
};
export const BmListBox = styled.div`
  ${(props) => show(props.isOpen)};
  flex-direction: column;
  padding: 0.286rem 0rem;
  background: ${BmPrimaryWhite};
  border: 0.071rem solid ${BmGrey400};
  box-shadow: 0rem 0.286rem 0.286rem rgba(0, 0, 0, 0.25);
  border-radius: 0.21875rem;
  z-index: 99999;
  cursor: pointer;
`;

BmListBox.propTypes = {
  isOpen: PropTypes.bool,
}