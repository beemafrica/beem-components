/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import { BmRouteLink } from "./link";

export default {
  component: BmRouteLink,
  title: "components/RouteLink",
};

export const SampleLink = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <BmRouteLink to="#">Click Me!</BmRouteLink>
        </Switch>
      </BrowserRouter>
    </>
  );
};
