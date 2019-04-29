import React, {Component} from "react";
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
        <div>
        </div>
      </div>
    );
  }
}
 
export default BuildYourClass;

