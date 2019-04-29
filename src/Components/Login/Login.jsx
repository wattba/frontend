import React, { Component } from 'react';
import AuthNavbar from './AuthNavbar';
import LoginForm from './LoginForm';
import '../../App.css';

class Login extends Component {
  render() {
    return (
      <div className="App container-fluid" id="login-screen">
        <div className="full-screen">
          <AuthNavbar />
          <div className="row">
            <div className="col-md-6">
              <h1 className="welcome" style={{ fontWeight: 300, fontSize: '75px' }}>Welcome to <br /><span style={{ color: 'white', fontSize: '75px' }}>Open curriculum !!</span></h1>
            </div>
            <div className="col-md-6">
              <LoginForm />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
