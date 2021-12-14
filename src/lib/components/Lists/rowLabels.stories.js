/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { BmRowLabel } from "./rowLabels";
import "../../../main.scss";
import { Favorite, KeyboardArrowRight } from "@material-ui/icons";

export default {
  component: BmRowLabel,
  title: "components/Lists/RowLabels",
  argType: {
    size: {
      options: ["small", "medium", "large"],
      control: { type: "select" },
      description: "Size of the icons",
      defaultValue: { summary: "small" },
    },
    trailingIcon: {
      description: "Material-UI Icon(optional)",
      defaultValue: { summary: undefined },
    },
    leadingIcon: {
      description: "Material-UI Icon(optional)",
      defaultValue: { summary: undefined },
    },
    color: {
      description: "Color of the Icons",
    },
    children: {
      description: "Row Label text",
    },
    label: {
      description: "Label Text",
    },
  },
};

const MainRowLabel = (args) => <BmRowLabel {...args} />;

export const TextOnly = MainRowLabel.bind({});
TextOnly.args = {
  children: <h3>Row Label</h3>,
};

export const TextLabel = MainRowLabel.bind({});
TextLabel.args = {
  children: <h3>Row Label</h3>,
  label: <h3>Label</h3>,
};

export const LabelIcons = MainRowLabel.bind({});
LabelIcons.args = {
  ...TextLabel.args,
  trailingIcon: <KeyboardArrowRight />,
  leadingIcon: <Favorite />,
  size: "large",
};

//TODO: add checkbox button example
//TODO: size not working
