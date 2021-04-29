import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Auth0Provider } from "@auth0/auth0-react";
import { Provider } from "react-redux";
import configureStore from "./store";

ReactDOM.render(
  <Auth0Provider
    domain="dev-ruzhysn0.eu.auth0.com"
    clientId="2KK7KEFFm2ndhdZKTKXXR7kEs8nAfhQB"
    redirectUri="https://spotify-eight-mu.vercel.app"
    //redirectUri={window.location.origin}
  >
    <Provider store={configureStore()}>
      <App />
    </Provider>
  </Auth0Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
