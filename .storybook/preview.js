import React from "react";
import { addDecorator } from "@storybook/react";
import { GlobalStyle } from "../src/lib/components/globalStyles";

addDecorator((Story) => (
  <>
    <GlobalStyle />
    <Story />
  </>
));