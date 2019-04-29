import React, { Component } from 'react';
import '../../App.css';

class LoginForm extends Component {
  render() {
    return (
      <div className="login-form">
         <form>
          <div className="form-group inp-group">
            <table className="inner-table">
              <tr>
                <td><h2 className="lbl">S</h2></td>
                <td><input type="text" className="form-control inp" placeholder="Subject Matter" /></td>
              </tr>
            </table>
          </div>
          <div className="form-group inp-group">
            <table className="inner-table">
              <tr>
                <td><h2 className="lbl">L</h2></td>
                <td><input type="text" className="form-control inp" placeholder="Language" /></td>
              </tr>
            </table>
          </div>
          <button type="submit" className="btn btn-default login-btn"><a href="/dashboard" style={{ textDecoration: 'none', color: 'white' }}>Search</a></button>
          {/*<p className="no-acc">Dont have an account? <a href="/signup" className="signup-link">SIGNUP</a></p>*/}
        </form>

        
        <div className="tail"></div>
      </div>
    );
  }
}

export default LoginForm;
