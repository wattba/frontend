import React, { Component } from "react";
import "./Sidebar.css";
import {
  BrowserRouter as Router,
  Switch,
  Link,
  Route,
  Redirect
} from "react-router-dom";

class Sidebar extends Component {
  render() {
    return (
      <div className="side-bar">
        <ul className="item">
          <li
            className="list-item hj"
            style={{ border: "1px solid black", paddingTop: "0.8em" }}
          >
            <i class="fas fa-plus" />
            &nbsp; ADD LESSON
          </li>
          <hr />
          <li className="list-item bold">My Boards</li>
          <li className="list-item">Math</li>
          <li className="list-item">Physics</li>
          <li className="list-item">Chemistry</li>
        </ul>
      </div>
    );
  }
}

export default Sidebar;
