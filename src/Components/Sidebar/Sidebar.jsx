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
  constructor(props) {
    super(props);
    this.state = { recentLessons: [] };
  }

  componentDidMount() {
    fetch(
      "http://wattba.h9ssxfia9b.us-west-2.elasticbeanstalk.com/api/quick/users/1/recent"
    )
      .then(data => data.json())
      .then(response => this.setState({ recentLessons: response }));
  }

  render() {
    const recentList = this.state.recentLessons;
    console.log(recentList);
    return (
      <div className="side-bar">
        <ul className="item">
          <li
            className="list-item hj"
            style={{ border: "1px solid black", paddingTop: "0.8em" }}
          >
            <i class="fas fa-plus" />
            <a href="/build-your-class">&nbsp; ADD LESSON</a>
          </li>
          <hr />
          <li className="list-item bold">My Boards</li>
          {recentList.map(data => (
            <li className="list-item">
              <a href={"/lesson/" + data.id}>{data.title}</a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Sidebar;
