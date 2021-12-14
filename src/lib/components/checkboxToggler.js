import React from "react";
import Switch from "@material-ui/core/Switch";

export const BmCheckboxToggler = ()  => {
  const [state, setState] = React.useState(false);

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <Switch
      checked={state}
      onChange={handleChange}
      name="checkedA"
    //   inputProps={{ "aria-label": "secondary checkbox" }}
    />
  );
}
