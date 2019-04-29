import React, { Component } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Link,
  Route,
  Redirect
} from "react-router-dom";
import Login from "./Components/Login/Login";
import Dashboard from "./Components/Dashboard/Dashboard";
import LessonList from "./Components/Lesson/LessonList";
import Profile from "./Components/Profile/Profile";

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route path="/Profile" component={Profile}></Route>
            <Route path="/login" component={Login} />
            <Route path="/Dashboard" component={Dashboard} />
            <Route path="/lessonList" component={LessonList} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
