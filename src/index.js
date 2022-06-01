import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { GithubProvider } from "./context/context";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      // domain, redirectUrl and clientId comes from the Auth0 documentation and setup
      domain="dev-pu8wyk-g.us.auth0.com"
      clientId="GYsVn60CkUU6fa4yiwpRrT1KVL5KuzPh"
      redirectUri={window.location.origin}
      cacheLocation="localstorage"
      // note: the cache location from the Auth0 docs is needed to save the social login to localstoarge
      // but what for, if we login with email and then we mistaken go to a ulr in our page that is not
      // correct and the error page gives us the link to go back to home page, with email we can go back home
      // but with social login we can't do that instead we are logout automatically
    >
      <GithubProvider>
        <App />
      </GithubProvider>
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
