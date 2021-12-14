/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { BmButton } from "../buttons";
import { Favorite, Home } from "@material-ui/icons";

export default {
  component: BmButton,
  title: "components/Buttons/Basic",
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
      ],
      control: { type: "select" },
      description: "Variant",
      defaultValue: { summary: "primary" },
    },
    leadingIcon: {
      description: "Material UI Icons",
    },
    trailingIcon: {
      description: "Material UI Icons",
    },
    children: {
      description: "Text of the button",
      default: "Button",
    },
  },
};

const MainButton = (args) => <BmButton {...args} />;

export const BasicButton = MainButton.bind({});
BasicButton.args = {
  variant: "primary",
  size: "large",
  children: "Button",
  leadingIcon: <Home />,
  trailingIcon: <Favorite />,
};
