/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { BmProgressBar } from "./progressbar";
import { Home } from "@material-ui/icons";

export default {
  component: BmProgressBar,
  title: "components/ProgressBar",
  argTypes: {
    value: {
      control: { type: "text" },
      description: "Progress value",
    },
    color: {
      control: { type: "text" },
      description: "Color of the progress bar",
    },
  },
};

const MainProgressBar = (args) => <BmProgressBar {...args} />;

export const ProgressBar = MainProgressBar.bind({});
ProgressBar.args = {
  value: "50",
};
