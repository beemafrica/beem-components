/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { BmLoader } from "./loader";

export default {
  component: BmLoader,
  title: "components/Loader",
  argTypes: {
    size: {
      options: ["small", "medium", "large"],
      control: { type: "select" },
      description: "Size of the loader (Can also be predefined e.g. 10px)",
      defaultValue: { summary: "large" },
    },
    type: {
      options: ["success", "warning", "error"],
      control: { type: "select" },
      description: "Type of loader",
      defaultValue: { summary: "Beem default loader" },
    },
  },
};

const MainLoader = (args) => <BmLoader {...args} />;

export const Loader = MainLoader.bind({});
Loader.args = {
  type: "success",
  size: "small",
};