/* eslint-disable import/no-anonymous-default-export */
import { Favorite, KeyboardArrowDown } from "@material-ui/icons";
import React from "react";
import { BmTab } from "./tabs";

export default {
  component: BmTab,
  title: "components/Tabs",
  argTypes: {
    color: {
      control: { type: "text" },
      description: "Color of the Icons and Text",
    },
    state: {
      options: ["active", "inactive"],
      control: { type: "select" },
      description: "State of the Tabs (optional)",
    },
    size: {
      options: ["small", "medium", "large"],
      control: { type: "select" },
      description: "Size of the icons",
      defaultValue: { summary: "large" },
    },
  },
};

const MainTab = (args) => <BmTab {...args} />;

export const Tabs = MainTab.bind({});
Tabs.args = {
  children: <h3>Tabs</h3>,
  leadingIcon: <Favorite />,
  trailingIcon: <KeyboardArrowDown />,
  disabled: false,
};
