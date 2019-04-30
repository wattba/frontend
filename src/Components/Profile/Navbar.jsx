import React, { Component } from "react";
import "./Navbar.css";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar main-nav">
        <div className="container-fluid">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#bs-example-navbar-collapse-1"
              aria-expanded="false"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
            <div className="row">
              <div className="col-xs-2">
                <a className="navbar-brand main" href="#">
                  OpenCurriculum
                </a>
              </div>
              <div className="col-xs-10" />
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
