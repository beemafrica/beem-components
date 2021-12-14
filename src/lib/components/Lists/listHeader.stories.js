/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { BmListHeader } from "./listheader";
import "../../../main.scss";
import { Favorite } from "@material-ui/icons";

export default {
  component: BmListHeader,
  title: "components/Lists/ListHeader",
  argType: {
    size: {
      options: ["small", "medium", "large"],
      control: { type: "select" },
      description: "Size of the trailing icon",
      defaultValue: { summary: "large" },
    },
    trailingIcon: {
      description: "Material-UI Icon(optional)",
      defaultValue: { summary: undefined },
    },
    color: {
      description: "Color of the Icon",
    },
    children: {
      description: "List header text",
    },
  },
};

const MainListHeader = (args) => <BmListHeader {...args} />;

export const ListHeader = MainListHeader.bind({});
ListHeader.args = {
  children: <h3>List Header</h3>,
  trailingIcon: <Favorite />,
};
