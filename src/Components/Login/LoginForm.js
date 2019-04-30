import React, { Component } from "react";
import "../../App.css";

class LoginForm extends Component {
  render() {
    return (
      <div>
        <div className="login-form backgroundLoginForm">
          <form>
            <div className="row">
              <div className="col-xs-12">
                <div className="col-xs-2" />
                <div className="col-xs-8">
                  {" "}
                  <input
                    type="text"
                    className="form-control inp"
                    placeholder="Subject Matter"
                  />{" "}
                  <button
                    type="submit"
                    href="/dashboard"
                    className="btn btn-default login-btn"
                  >
                    <a
                      href="/dashboard"
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      Search
                    </a>
                  </button>
                </div>
                <div className="col-xs-2" />
              </div>
            </div>
            <div className="row" />
          </form>
        </div>
      </div>
    );
  }
}

export default LoginForm;
