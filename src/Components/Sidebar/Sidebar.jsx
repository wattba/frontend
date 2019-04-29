import React, { Component } from 'react';
import './Sidebar.css';
import { BrowserRouter as Router, Switch, Link, Route, Redirect } from 'react-router-dom';

class Sidebar extends Component {
 render() {
   return (
     <div className="side-bar">
       <ul className="item">
         <li className="list-item">My boards</li>
         <li className="list-item">Math</li>
       </ul>
     </div>
   );
 }
}

export default Sidebar;
