/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { BmPerformanceIndicator } from "./performanceIndicator";

export default {
  component: BmPerformanceIndicator,
  title: "components/PerformanceIndicator",
  argTypes: {
    size: {
      options: ["small", "medium", "large", "xlarge"],
      control: { type: "select" },
      description: "Size of the Indicator (Can also be predefined e.g. 10px)",
      defaultValue: { summary: "xlarge" },
    },
    type: {
      options: ["upwards", "downwards"],
      control: { type: "select" },
      description: "Type of Indicator",
      defaultValue: { summary: undefined },
    },
    children: {
      description: "Performance Indicator Value (h2)",
      defaultValue: { summary: undefined },
    },
    color: {
      description: "Color of Performance Indicator",
      defaultValue: { summary: undefined },
    },
  },
};

const MainPI = (args) => <BmPerformanceIndicator {...args} />;

export const PerformanceIndicator = MainPI.bind({});
PerformanceIndicator.args = {
  type: "upwards",
  size: "xlarge",
  children: "100%",
  color: undefined,
};
