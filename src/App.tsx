import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Landing } from "./pages/landing";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/">
            <Landing />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
