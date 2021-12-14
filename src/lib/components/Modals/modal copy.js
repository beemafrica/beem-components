import React, { useEffect, useCallback, useState } from "react";
import { Clear } from "@material-ui/icons";
import styled from "styled-components";
import { BmBgGrey45, BmPrimaryBlack, BmPrimaryWhite } from "../colors";
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
      console.log({ size });
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

export const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 1.143rem 0rem;
`;

export const HeaderText = styled.h2`
  text-align: center;
  display: flex;
  color: ${BmPrimaryBlack};
  margin-left: auto;
`;

export const Close = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-left: auto;
`;

export const BmModal = ({
  children,
  show,
  size,
  centered,
  setShowModals,
  ...rest
}) => {
  const [toggle, setToggle] = useState(show);
  useEffect(() => {
    setToggle(show);
  }, [show]);
  return (
    <>
      {toggle && (
        <>
          <Overlay />
          <ModalWrapper showModal={show} centered={centered}>
            <Provider value={{ toggle, setToggle, size, show }}>
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

BmModal.Header = ({
  children,
  leadingIcon,
  trailingIcon,
  size,
  closeButton,
  show,
  ...rest
}) => {
  return (
    <Consumer>
      {(value) => (
        <>
          <ModalHeader {...rest}>
            {JSON.stringify(value)}
            {children}
            {closeButton && (
              <BmIcons
                size="xlarge"
                icon={<Clear />}
                onClick={() =>
                  value.setToggle(!value.toggle)
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

export default BmModal;
