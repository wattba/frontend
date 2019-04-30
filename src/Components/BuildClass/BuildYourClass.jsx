import React, { Component } from "react";
import Navbar from "../Navbar/Navbar";
import Sidebar from "./Sidebar";
import Main from "./Main";
import "./buildyourclass.css";

class BuildYourClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      class: "",
      hasUploadedPDF: false
    };
  }

  render() {
    return (
      <div className="buildyourclass-container">
        <div className="header">
          <Navbar />
        </div>
        <div className="row">
          <div
            className="col-md-3"
            style={{
              backgroundColor: "rgb(239, 238, 254)",
              borderRight: "2px solid #3e3c56"
            }}
          >
            <Sidebar />
          </div>
          <div className="build-your-class-main-container">
            <Main />
          </div>
        </div>
      </div>
    );
  }
}

export default BuildYourClass;
