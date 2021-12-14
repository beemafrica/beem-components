/* eslint-disable import/no-anonymous-default-export */
import React, { useState } from "react";
import BmModal from "./modal";
import { BmButton } from "../Buttons/buttons";

export default {
  component: BmModal,
  title: "components/Modals",
  argType: {
    size: {
      options: ["small", "default", "large", "xlarge"],
      control: { type: "select" },
      description: "Size of the Modal (Optional)",
      defaultValue: { summary: "default" },
    },
    closeButton: {
      description:
        "Placed on BmModal.Header component. Displays the close button (X)",
    },
    centered: {
      description: "Centers the modal",
    },
    show: {
      control: { type: "boolean" },
      description: "Handling the opening and closing of the modal",
    },
    onHide: {
      description: "Handling the closing of the modal",
    },
  },
};

export const SampleModal = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <div>
        <BmButton onClick={() => setShowModal(!showModal)}>Click Me!</BmButton>
      </div>
      <BmModal show={showModal} onHide={() => setShowModal(false)} centered>
        <BmModal.Header closeButton>
          <h2>Header</h2>
        </BmModal.Header>
        <BmModal.Body>
          <p>This is a body</p>
        </BmModal.Body>
        <BmModal.Footer>
          <p>This is a footer</p>
        </BmModal.Footer>
      </BmModal>
    </>
  );
};
export const ExampleModal = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <div>
        <BmButton onClick={() => setShowModal(!showModal)}>Click Me!</BmButton>
      </div>
      <BmModal
        size="small"
        show={showModal}
        onHide={() => setShowModal(false)}
        centered
      >
        <BmModal.Header closeButton>
          <h2>Header</h2>
        </BmModal.Header>
        <BmModal.Body>
          <p>This is a body</p>
        </BmModal.Body>
        <BmModal.Footer>
          <BmButton size="small">Send</BmButton>
          <BmButton size="small" variant="secondary">
            View
          </BmButton>
        </BmModal.Footer>
      </BmModal>
    </>
  );
};
