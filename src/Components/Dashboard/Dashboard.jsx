import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';
import Lessons from '../Lesson/LessonList';
import { BrowserRouter as Router, Switch, Link, Route, Redirect } from 'react-router-dom';

class Dashboard extends Component {
 render() {
   return (
     <div className="container-fluid">
        <div className="header">
          <Navbar />
        </div>
        <div className="row">
          <div className="col-md-3" style={{ borderRight: '1px solid black' }}>
            <Sidebar />
          </div>
          <div className="col-md-9">
            <Lessons />
          </div>
        </div>
     </div>
   );
 }
}

export default Dashboard;
