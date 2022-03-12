import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import mainStore from "./stores/MainStore";
import { Provider } from "mobx-react";
import { ModalConstructor } from "./components/Modals/ModalConstructor/ModalConstructor";

ReactDOM.render(
  <React.StrictMode>
    <Provider {...mainStore}>
      <App />
      
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
