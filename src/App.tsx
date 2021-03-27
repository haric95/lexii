import "antd/dist/antd.css";
import { User } from "pages/user";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.scss";
import { AppPath } from "./constants";
import { FindAPartner } from "./pages/find-a-partner";
import { Landing } from "./pages/landing";
import { SignIn } from "./pages/sign-in";
import { SignUp } from "./pages/sign-up";
import { Volunteer } from "./pages/volunteer";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path={AppPath.FIND_A_PARTNER}>
            <FindAPartner />
          </Route>
          <Route path={AppPath.VOLUNTEER}>
            <Volunteer />
          </Route>
          <Route path={AppPath.SIGN_UP}>
            <SignUp />
          </Route>
          <Route path={AppPath.SIGN_IN}>
            <SignIn />
          </Route>
          <Route path={AppPath.USER}>
            <User />
          </Route>
          <Route path={AppPath.ROOT}>
            <Landing />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
