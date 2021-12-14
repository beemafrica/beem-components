/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { BmAvatar } from "./avatars";
import { Home } from "@material-ui/icons";

export default {
  component: BmAvatar,
  title: "components/Avatars",
  argTypes: {
    size: {
      options: ["xsmall", "small", "medium", "large"],
      control: { type: "select" },
      description: "Size of the Avatar",
      defaultValue: { summary: "large" },
    },
    type: {
      options: ["circle", "square"],
      control: { type: "select" },
      description: "Shape of the Avatar",
      defaultValue: { summary: "circle" },
    },
    user: {
      description:
        "Type of the Avatar ('chatbot', 'employee' or Material-UI icon)",
      defaultValue: { summary: undefined },
    },
  },
};

const MainAvatar = (args) => <BmAvatar {...args} />;

export const Avatar = MainAvatar.bind({});
Avatar.args = {
  user: "chatbot",
  size: "large",
  type: "circle",
};

export const CustomAvatar = MainAvatar.bind({});
CustomAvatar.args = {
  user: <Home />,
  size: "large",
  type: "square",
  color: "#000000",
};
