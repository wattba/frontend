import React, { Component } from "react";
import "./Sidebar.css";

class SidebarGen extends Component {
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
    return (
      <div className="side-bar">
        <ul className="item">
          <li className="list-item">
            <b>My boards</b>
          </li>
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

export default SidebarGen;
