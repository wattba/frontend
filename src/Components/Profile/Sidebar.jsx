import React, { Component } from 'react';
import Avatar from './Avatar';
import './Sidebar.css';
import { BrowserRouter as Router, Switch, Link, Route, Redirect } from 'react-router-dom';

class Sidebar extends Component {
 render() {
   return (
     <div className="side-bar">
      <Avatar />
     </div>
   );
 }
}

export default Sidebar;

