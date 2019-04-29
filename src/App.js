import React, { Component } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Link,
  Route,
  Redirect
} from "react-router-dom";
import Dashboard from "./Components/Dashboard/Dashboard";
import Lesson from "./Components/Lesson/Lesson.jsx";

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route path="/Dashboard" component={Dashboard} />
            <Route path="/lesson/:name" component={Lesson} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
