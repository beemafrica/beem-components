/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { BmBtnIcon } from "../buttonIconsOnly";
import { Favorite } from "@material-ui/icons";

export default {
  component: BmBtnIcon,
  title: "components/Buttons/IconsOnly",
  argTypes: {
    size: {
      options: ["small", "medium", "large"],
      control: { type: "select" },
      description: "Size",
      defaultValue: { summary: "large" },
    },
    variant: {
      options: [
        "primary",
        "secondary",
        "tertiary",
        "success",
        "neutral",
        "destructive",
        "active",
        "enabled",
      ],
      control: { type: "select" },
      description: "Variant",
      defaultValue: { summary: "primary" },
    },
    icon: {
      description: "Material UI Icons",
    },
    color: {
      description: "Color of the button",
      defaultValue: { summary: "primary color" },
    },
  },
};

const MainButtonIcon = (args) => <BmBtnIcon {...args} />;

export const ButtonIcon = MainButtonIcon.bind({});
ButtonIcon.args = {
  icon: <Favorite />,
  size: "large",
  variant: "primary",
  color: undefined,
};
