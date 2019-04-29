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
import Lesson from "./Components/Lesson/Lesson.jsx";
import LessonList from "./Components/Lesson/LessonList";
import Profile from "./Components/Profile/Profile";
import BuildYourClass from "./Components/BuildClass/BuildYourClass";

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route path="/Profile" component={Profile} />
            <Route path="/login" component={Login} />
            <Route path="/Dashboard" component={Dashboard} />
            <Route path="/lessonList" component={LessonList} />
            <Route path="/BuildYourClass" component={BuildYourClass}/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
