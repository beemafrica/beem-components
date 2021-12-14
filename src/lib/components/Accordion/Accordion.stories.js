/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import BmAccordion from "./Accordion";
import { text, boolean, select } from "@storybook/addon-knobs";
import { Favorite, Home } from "@material-ui/icons";

export default {
  component: BmAccordion,
  subcomponents: BmAccordion.Title,
  title: "components/Accordion",
  argTypes: {
    size: {
      options: ["small", "medium", "large"],
      control: { type: "select" },
      description: "Size of the icons",
      defaultValue: { summary: "large" },
    },
    disabled: {
      description: "Optional",
      defaultValue: { summary: false },
      control: { type: "boolean" },
    },
    children: {
      description: "Accordion Title Text",
      defaultValue: { summary: undefined },
    },
    expandIcon: {
      description: "'none' or Material-UI icon (optional)",
      defaultValue: { summary: undefined },
    },
    leadingIcon: {
      description: "Material-UI icon(optional)",
      defaultValue: { summary: undefined },
    },
    trailingIcon: {
      description: "Material-UI icon(optional)",
      defaultValue: { summary: undefined },
    },
  },
};

const optionSize = {
  small: "small",
  medium: "medium",
  large: "large",
};

export const Accordion = () => {
  return (
    <div>
      <BmAccordion disabled={boolean("disabled", false)}>
        <BmAccordion.Title
          leadingIcon={<Home />}
          trailingIcon={<Favorite />}
          size={select("size", optionSize, "large")}
        >
          <h3>{text("children", "Accordion")}</h3>
        </BmAccordion.Title>
        <BmAccordion.Body>Accordion Body</BmAccordion.Body>
      </BmAccordion>
    </div>
  );
};
