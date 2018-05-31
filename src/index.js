import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter, HashRouter, Route, Switch } from "react-router-dom";
import { store } from "./store";
import registerServiceWorker from "./registerServiceWorker";

import App from "./App";
import Appbar from "./components/Appbar";
import "./styles/index.css";

ReactDOM.render(
  <Provider store={store}>
    <div>
      <BrowserRouter>
        <HashRouter>
          <div>
            <Appbar />
            <Switch>
              <Route path="/search" title={"Search"} component={App} />
            </Switch>
          </div>
        </HashRouter>
      </BrowserRouter>
    </div>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
