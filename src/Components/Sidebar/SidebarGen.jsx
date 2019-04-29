import React, { Component } from 'react';
import './Sidebar.css';

class SidebarGen extends Component {
 render() {
   return (
     <div className="side-bar">
       <ul className="item">
         <li className="list-item"><b>My boards</b></li>
         <li className="list-item">Physics</li>
         <li className="list-item">Chemistry</li>
       </ul>
     </div>
   );
 }
}

export default SidebarGen;
