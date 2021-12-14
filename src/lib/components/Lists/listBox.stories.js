/* eslint-disable import/no-anonymous-default-export */
import React, { useState } from "react";
import { BmListBox } from "./listBox";
import { KeyboardArrowRight } from "@material-ui/icons";
import { BmRowLabel } from "./rowLabels";
import { BmButton } from "../Buttons/buttons";

export default {
  component: BmListBox,
  title: "components/Lists/ListBox",
  argTypes: {
    isOpen: {
      description:
        "true/false (optional), Used for handling the display of listbox",
    },
  },
};

export const ListBox = () => {
  return (
    <BmListBox>
      <BmRowLabel trailingIcon={<KeyboardArrowRight />} size="large">
        <h4>Row Label</h4>
      </BmRowLabel>
      <BmRowLabel size="large">
        <h4>Row Label</h4>
      </BmRowLabel>
    </BmListBox>
  );
};

export const FunctionalListBox = () => {
  const [List, showList] = useState(true);
  return (
    <>
      <BmButton onClick={() => showList(!List)}>Click Me!</BmButton>
      <BmListBox isOpen={List}>
        <BmRowLabel trailingIcon={<KeyboardArrowRight />} size="large">
          <h4>Row Label</h4>
        </BmRowLabel>
        <BmRowLabel size="large">
          <h4>Row Label</h4>
        </BmRowLabel>
      </BmListBox>
    </>
  );
};
