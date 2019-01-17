import React from "react";
import Home from "./Home";
import { DataContext } from "../../Contexts/Context";

export default () => (
  <DataContext.Consumer>
    {({ home }) => <Home home={home} />}
  </DataContext.Consumer>
);
