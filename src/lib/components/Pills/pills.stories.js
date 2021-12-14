/* eslint-disable import/no-anonymous-default-export */
import { Delete, Favorite, Person } from "@material-ui/icons";
import React from "react";
import { BmPrimaryBlue } from "../colors";
import { BmPill } from "./pills";

export default {
  component: BmPill,
  title: "components/Pills",
  argTypes: {
    icon: {
      description: "Material-UI icon(optional)",
      defaultValue: { summary: undefined },
    },
    avatarIcon: {
      description: "Material-UI icon(optional)",
      defaultValue: { summary: undefined },
    },
    size: {
      options: ["xsmall", "small", "medium", "large", "xlarge"],
      control: { type: "select" },
      description: "Size of the Icon (Can also be predefined e.g. 10px)",
      defaultValue: { summary: "xsmall" },
    },
    avatarSize: {
      options: ["xsmall", "small", "medium", "large", "xlarge"],
      control: { type: "select" },
      description: "Size of the AvatarIcon (Can also be predefined e.g. 10px)",
      defaultValue: { summary: "xsmall" },
    },
    label: {
      description: "Pill label in uppercase",
      defaultValue: { summary: "undefined" },
    },
    color: {
      description: "Color of Pill ",
      defaultValue: { summary: "black" },
    },
    onDelete: {
      description: "Handles Deleting Pill",
      defaultValue: { summary: undefined },
    },
    deleteIcon: {
      description: "Material-UI icon (Used only when OnDelete is present)",
      defaultValue: { summary: undefined },
    },
  },
};

const MainPill = (args) => <BmPill {...args} />;

export const BasicPill = MainPill.bind({});
BasicPill.args = {
  icon: <Favorite />,
  label: "label",
  color: undefined,
  onDelete: undefined,
  deleteIcon: undefined,
  avatarIcon: undefined,
  avatarSize: undefined,
  size: undefined,
};

export const CustomPill = MainPill.bind({});
CustomPill.args = {
  icon: undefined,
  label: "label",
  color: undefined,
  onDelete: true,
  deleteIcon: <Delete />,
  avatarIcon: <Person />,
  avatarSize: undefined,
  size: undefined,
};
