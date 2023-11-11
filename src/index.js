import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { GithubProvider } from "./context/context";
import { Auth0Provider } from "@auth0/auth0-react";

const YOUR_AUTH0_DOMAIN = "sudiptabanerjee.us.auth0.com";
const YOUR_AUTH0_CLIENT_ID = "HBhuyA1hMFCDT3S2iiy6SrRKBPurtN4t";

ReactDOM.render(
  <Auth0Provider
    domain={YOUR_AUTH0_DOMAIN}
    clientId={YOUR_AUTH0_CLIENT_ID}
    redirectUri={window.location.origin}
    cacheLocation="localstorage"
  >
    <React.StrictMode>
      <GithubProvider>
        <App />
      </GithubProvider>
    </React.StrictMode>
  </Auth0Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
