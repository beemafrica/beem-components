import React, { useEffect, useCallback, useState } from "react";
import PropTypes from "prop-types";
import { Clear } from "@material-ui/icons";
import styled from "styled-components";
import { BmBgGrey45, BmPrimaryWhite } from "../colors";
import { BmIcons } from "../iconStyles";

const { Provider, Consumer } = React.createContext();

export const Overlay = styled.div`
 	position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  width: 100%;
  height: 100%;
  background-color: ${BmBgGrey45};
}
`;
export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 0.25rem;
  padding: 1rem;
  margin: auto;
  background: ${BmPrimaryWhite};
  width: ${({ size }) => {
    if (size) {
      if (size === "small") return "21.429rem";
      if (size === "default") return "35.714rem";
      if (size === "large") return "57.143rem";
      if (size === "xlarge") return "81.429rem";
      return size;
    }
    return "35.714rem";
  }};
  > *:not(:last-child) {
    margin-bottom: 1rem;
  }
`;

export const ModalWrapper = styled.div`
  z-index: 9999;
  overflow-x: auto;
  overflow-y: auto;
  outline: 0;
  position: fixed;
  height: auto;
  top: ${({ centered }) => {
    if (centered) {
      return "50%";
    }
    return "10%";
  }};
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const BmModal = ({
  children,
  show,
  size,
  onHide,
  centered,
  ...rest
}) => {
  const [toggle, setToggle] = useState(show);
  useEffect(() => {
    setToggle(show);
  }, [show]);

  const keyPress = useCallback(
    (e) => {
      if (e.key === "Escape" && show && onHide !== undefined) {
        onHide(false);
      }
    },
    [onHide, show],
  );

  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);

  return (
    <>
      {toggle && (
        <>
          <Overlay />
          <ModalWrapper showModal={show} centered={centered} onHide={onHide}>
            <Provider value={{ toggle, setToggle, size, show, onHide }}>
              <ModalContent size={size} {...rest}>
                {children}
              </ModalContent>
            </Provider>
          </ModalWrapper>
        </>
      )}
    </>
  );
};

const ModalHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

BmModal.Header = ({ children, size, onHide, closeButton, show, ...rest }) => {
  return (
    <Consumer>
      {(value) => (
        <>
          <ModalHeader {...rest}>
            {children}
            {closeButton && (
              <BmIcons
                size="xlarge"
                icon={<Clear />}
                onClick={() =>
                  value && value.onHide && value.onHide(!value.show)
                }
                {...rest}
              />
            )}
          </ModalHeader>
        </>
      )}
    </Consumer>
  );
};

BmModal.Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

BmModal.Footer = styled.div`
  display: flex;
  justify-content: space-between;
`;

BmModal.propTypes = {
  size: PropTypes.string,
  centered: PropTypes.bool,
  show: PropTypes.bool.isRequired,
  onHide: PropTypes.func.isRequired,
  closeButton: PropTypes.bool,
};
export default BmModal;
