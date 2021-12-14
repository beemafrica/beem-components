import { Delete, Favorite } from "@material-ui/icons";
import React from "react";
import "../src/main.scss";
import { GlobalStyle } from "./lib/components/globalStyles";
import { BmPill } from "./lib/components/Pills/pills";

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <BmPill label="pill" icon={<Favorite />} onDelete deleteIcon={<Delete />}>
        Hello
      </BmPill>
      <BmPill label="pill" icon={<Favorite />} deleteIcon={<Delete />}>
        Hello
      </BmPill>
    </>
  );
};

export default App;
