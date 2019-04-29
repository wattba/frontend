import React, { Component } from 'react';
import '../../App.css';

class AuthNavbar extends Component {
  render() {
    return (
      <nav className="navbar">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <div className="title-box">
              <h4 className="title">open curriculum</h4>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default AuthNavbar;
