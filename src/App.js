import React from "react";

import socketIOClient from "socket.io-client";
import RegisterPage from "pages/RegisterPage";
import LoginPage from "pages/LoginPage";
import NewUserFormPage from "pages/NewUserFormPage";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProfilePage from "pages/ProfilePage";
import LandingPage from "pages/LandingPage";
import WorkoutPage from "pages/WorkoutPage";

function App() {
  const ENDPOINT = "https://vast-wildwood-00327.herokuapp.com";
  const socket = socketIOClient(ENDPOINT);
  const [user] = useAuthState(auth);

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>
        {!user ? (
          <Switch>
            <Route exact path="/register">
              <RegisterPage />
            </Route>
            <Route exact path="/login">
              <LoginPage />
            </Route>
          </Switch>
        ) : (
          <Switch>
            <Route exact path="/newuserform">
              <NewUserFormPage />
            </Route>
            <Switch>
              <Route exact path="/profile">
                <ProfilePage />
              </Route>
              <Route exact path="/workout"/>
              <Route path = "/workout/:workoutId">
                <WorkoutPage socket={socket} />
              </Route>
            </Switch>
          </Switch>
        )}
      </Switch>
    </Router>
  );
}

export default App;
