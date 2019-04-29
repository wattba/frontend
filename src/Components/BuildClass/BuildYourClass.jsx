import React, {Component} from "react";
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Main from './Main';
import './buildyourclass.css';

class BuildYourClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      'class': '',
      'hasUploadedPDF': false
    };
  }


  render() {
    return (
      <div className="buildyourclass-container">
        <div className="header">
          <Navbar />
        </div>
        <div className="row">
          <div className="col-md-3" style={{ borderRight: '1px solid black' }}>
            <Sidebar />
          </div>
          <div className="col-md-9">
            <Main />
          </div>
        </div>
      </div>
    );
  }
}
 
export default BuildYourClass;
