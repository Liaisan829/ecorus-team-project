import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "mobx-react";
import reportWebVitals from "./reportWebVitals";
import mainStore from "./stores/MainStore";
import App from "./App";
import { ModalConstructor } from "./components/Modals/ModalConstructor/ModalConstructor";
import axios from "axios";
import "./index.scss";

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
    <BrowserRouter>
      <Provider {...mainStore}>
        <App />

        <ModalConstructor />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
