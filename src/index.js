import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { DataProvider, DataContext } from "./Contexts/Context";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <DataProvider>
    <DataContext.Consumer>
      {({ about, home }) => <App about={about} home={home} />}
    </DataContext.Consumer>
  </DataProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
