//External Import
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

//Internal Import
import App from "./App";
import "animate.css";
import "./assets/css/progress.css";
import "./index.css";
import store from "./redux/store/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
);
