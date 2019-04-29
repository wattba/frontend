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
            <a href="#"><b style={{ color: 'black', fontSize: '65px', marginLeft: '-17em' }}>Open <br/> <span style={{ marginLeft: '-12em' }}> Curriculum </span></b></a>
          </div>
        </div>
      </nav>
    )
  }
}

export default AuthNavbar;
