import React, { Component } from "react";
import AuthNavbar from "./AuthNavbar";
import LoginForm from "./LoginForm";
import "../../App.css";
import Navbar from "../Navbar/Navbar";
class Login extends Component {
  render() {
    return (
      <div>
        <div className="header">
          <Navbar />
        </div>
        <div className="App container-fluid backgroundLogin">
          <div className="full-screen">
            <br />
            <div className="row">
              <div className="col-xs-12" />
              <div className="col-md-3" />
              <div className="col-md-5">
                {" "}
                <LoginForm />
              </div>
              <div className="col-md-4" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
