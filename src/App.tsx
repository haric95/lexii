import "antd/dist/antd.css";
import { Empty } from "pages/empty";
import { Home } from "pages/home";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { setAuth } from "reducers/auth";
import "./assets/main.css";
import { AppPath } from "./constants";
import { FindAPartner } from "./pages/find-a-partner";
import { Landing } from "./pages/landing";
import { SignIn } from "./pages/sign-in";
import { SignUp } from "./pages/sign-up";
import { Volunteer } from "./pages/volunteer";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const userId = window.localStorage.getItem("userId");
    const isSignedIn = !!userId;
    if (isSignedIn) {
      dispatch(
        setAuth({
          userId: parseInt(userId as string),
          signedInStatus: "signed_in",
          userType: "Volunteer",
        })
      );
    }
  }, []);
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
          <Route path={AppPath.HOME}>
            <Home />
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
