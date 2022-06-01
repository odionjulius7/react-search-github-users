import React from "react";

//
import { Dashboard, Login, PrivateRoute, AuthWrapper, Error } from "./pages"; // all export wrapped in the index.js import at once here
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <AuthWrapper>
      {/* // AuthWrapper is used to check if the auth0 isLoading/error is false so as to redirect us to
      the wrapper children content */}
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route path="login" element={<Login />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </AuthWrapper>
  );
}

export default App;
