import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import loadingGif from "../images/preloader.gif";
import styled from "styled-components";

// is needed to check if the user and authenticated is true(firstly)
// but mainly to check if the Auth0 isLoading/Error is false so as to redirect us to the wrapper children content
function AuthWrapper({ children }) {
  const { isLoading, error } = useAuth0();

  // if authen0 is still loading(authenticating and get user details) then display loading
  if (isLoading) {
    return (
      <Wrapper>
        <img src={loadingGif} alt="spinner" />
      </Wrapper>
    );
  }

  // if there is an error display error message
  if (error) {
    return (
      <Wrapper>
        <h1>{error.message}</h1>
      </Wrapper>
    );
  }

  // if both are false then display children content of the wrapper auth
  return <>{children}</>;
}

const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  place-items: center;
  img {
    width: 150px;
  }
`;

export default AuthWrapper;
