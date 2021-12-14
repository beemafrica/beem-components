/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import BmCard from "./cards";
import { text, boolean, select } from "@storybook/addon-knobs";
import "../../../main.scss";
import { Favorite, Home } from "@material-ui/icons";
import { BmButton } from "../Buttons/buttons";
import { BmTag } from "../tags";
import Image from "../../assets/beem.jpeg";

export default {
  component: BmCard,
  title: "components/Card",
  argTypes: {
    children: {
      description: "Accordion Title Text",
      defaultValue: { summary: undefined },
    },
  },
};
export const BasicCardSample = () => {
  return (
    <div>
      <BmCard disabled={boolean("disabled", false)}>
        <BmCard.Header>
          <h3>{text("children", "Card Header")}</h3>
        </BmCard.Header>
        <BmCard.Body>Card Body</BmCard.Body>
        <BmCard.Footer>Card Footer</BmCard.Footer>
      </BmCard>
    </div>
  );
};

export const Example = () => {
  return (
    <BmCard>
      <BmCard.Header>
        <h3>Overview</h3>
      </BmCard.Header>
      <BmCard.Body>
        <img src={Image} alt="Imagebody" />
      </BmCard.Body>
      <BmCard.Footer>
        <BmButton size="small">Send</BmButton>
        <BmButton variant="tertiary" size="small">
          View
        </BmButton>
      </BmCard.Footer>
    </BmCard>
  );
};
