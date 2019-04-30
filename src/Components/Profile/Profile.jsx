import React, { Component } from "react";
import Navbar from "./Navbar";
import SidebarGen from "../Sidebar/SidebarGen";
import "./profile.css";

class Profile extends Component {
  render() {
    return (
      <div className="Dashboard container-fluid">
        <div className="header">
          <Navbar />
        </div>
        <div
          className="row"
          style={{ zIndex: "-100", backgroundColor: "#000" }}
        >
          <div
            className="col-md-3"
            style={{
              borderRight: "1px solid black",
              backgroundColor: "#efeefe"
            }}
          />
          <div className="col-md-9 main-dash">
            <h2>Profile View</h2>
            <div className="row">
              <div className="col-xs-12" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
