import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';
import Lessons from '../Lesson/LessonList';
import './Dashboard.css';
import { BrowserRouter as Router, Switch, Link, Route, Redirect } from 'react-router-dom';

class Dashboard extends Component {
 render() {
   return (
     <div className="Dashboard container-fluid">
        <div className="header">
          <Navbar />
        </div>
        <div className="row" style={{ zIndex: '-100', backgroundColor: '#000' }}>
          <div className="col-md-3" style={{ borderRight: '1px solid black', backgroundColor: '#efeefe' }}>
            <Sidebar />
          </div>
          <div className="col-md-9 main-dash">
            <Lessons />
          </div>
        </div>
     </div>
   );
 }
}

export default Dashboard;
