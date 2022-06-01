import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const PrivateRoute = ({ children }) => {
  const { isAuthenticated, user } = useAuth0();

  // we need check this to be sure both are true
  const isUser = isAuthenticated && user; // checking authentication of a user // user is available too
  if (!isUser) {
    // if user is not true(authen and available)
    return <Navigate to="/login" />; // navigate to login
  }
  return children; // else display children values
};
export default PrivateRoute;
