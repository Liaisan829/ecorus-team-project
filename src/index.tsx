import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "mobx-react";
import reportWebVitals from "./reportWebVitals";
import mainStore from "./stores/MainStore";
import App from "./App";
import { ModalConstructor } from "./components/Modals/ModalConstructor/ModalConstructor";
import "./index.scss";
import axios from "axios";

axios.defaults.baseURL = "https://ecoapp.cloud.technokratos.com/eco-rus/api/v1/";

axios.interceptors.request.use(({ ...config }) => {

  const token = localStorage.getItem("token");

  if (token) {
    return {
      ...config,
      headers: {
        ...(config.headers || {}),
        "Access-Control-Allow-Origin": "*",
        Authorization: token,
        "Content-type": "application/json"
      }
    };
  } else {
    return config;
  }
});

ReactDOM.render(
  <React.StrictMode>
    <Provider {...mainStore}>
      <App />

      <ModalConstructor />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
