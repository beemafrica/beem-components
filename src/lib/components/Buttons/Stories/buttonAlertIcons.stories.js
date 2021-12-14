/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { BmAlertIcon } from "../buttonAlertIcons";
import { AssignmentLateOutlined } from "@material-ui/icons";

export default {
  component: BmAlertIcon,
  title: "components/Buttons/AlertIcons",
  argTypes: {
    size: {
      options: ["small", "medium", "large"],
      control: { type: "select" },
      description: "Size",
      defaultValue: { summary: "large" },
    },
    icon: {
      description: "Material UI Icons",
    },
    color: {
      description: "Color of the icon",
      defaultValue: { summary: "#575757" },
    },
    badgeContent: {
      description: "Badge Content",
    },
    badgeColor: {
      description: "Color of the badge content",
      defaultValue: { summary: "#F62E48" },
    },
  },
};

const MainButtonAlertIcon = (args) => <BmAlertIcon {...args} />;

export const ButtonAlertIcon = MainButtonAlertIcon.bind({});
ButtonAlertIcon.args = {
  icon: <AssignmentLateOutlined />,
  badgeContent: 4,
  badgeColor: "red",
  size: "large",
  color: "black",
};
