import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "mobx-react";
import reportWebVitals from "./reportWebVitals";
import mainStore from "./stores/MainStore";
import App from "./App";
import { ModalConstructor } from "./components/Modals/ModalConstructor/ModalConstructor";
import "./index.scss";


ReactDOM.render(
  <React.StrictMode>
    <Provider {...mainStore}>
      <App />

      <ModalConstructor/>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
