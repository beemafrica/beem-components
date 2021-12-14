/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { BmNoteBar } from "./noteBar";

export default {
  component: BmNoteBar,
  title: "components/NoteBar",
  argTypes: {
    size: {
      options: ["small", "medium", "large"],
      control: { type: "select" },
      description: "Size of the icons",
      defaultValue: { summary: "large" },
    },
    children: {
      description: "Note Description ",
      defaultValue: { summary: undefined },
    },
    type: {
      options: ["info", "warning", "error"],
      control: { type: "select" },
      description: "Type of note",
      defaultValue: { summary: undefined },
    },
    color: {
      description: "Color of the icon ",
      defaultValue: { summary: undefined },
    },
  },
};

const MainNoteBar = (args) => <BmNoteBar {...args} />;

export const NoteBar = MainNoteBar.bind({});
NoteBar.args = {
  type: "warning",
  size: "large",
  children: <p>NoteBar</p>,
  color: undefined,
};
