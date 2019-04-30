import React, { Component } from "react";
import LessonCard from "./LessonCard";
import SidebarGen from '../Sidebar/SidebarGen';
import Navbar from '../Navbar/Navbar';
import { Container, Row, Col } from "react-bootstrap";

class Bookmarks extends Component {
  constructor(props) {
    super(props);
    this.state = { lessons: [] };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    fetch(
      "http://wattba.h9ssxfia9b.us-west-2.elasticbeanstalk.com/api/quick/users/bookmarked"
    )
      .then(response => response.json())
      .then(data => this.setState({ lessons: data }));
  }

  handleChange() {
    fetch("http://wattba.h9ssxfia9b.us-west-2.elasticbeanstalk.com/api/quick/users/bookmarked")
      .then(data => data.json())
      .then(data => this.setState({ lessons: data }));
  }


  render() {
    const lessons = this.state.lessons;

    const original = <div className="original">
      <div
        style={{ padding: "20px", marginTop: "-5em" }}
        className="trending-section"
      >
        <h4 className="trending">My Bookmarks</h4>
        <div className="row">
            {lessons.map(data => (
              <div className="col-md-4">
                <LessonCard
                  name={data.title}
                  desc={data.description.slice(0, 200) + "..."}
                  tags={data.tags}
                  id={data.id}
                  bookmarked={null}
                  callBack={this.handleChange}
                />
              </div>
            ))}
        </div>
      </div>
   </div>

    const display = original;

    return (
      <div className="Dashboard container-fluid">
         <div className="header">
           <Navbar />
         </div>
         <div className="row" style={{ zIndex: '-100', backgroundColor: '#000' }}>
           <div className="col-md-3" style={{ borderRight: '1px solid black', backgroundColor: '#efeefe' }}>
             <SidebarGen />
           </div>
           <div className="col-md-9 main-dash">
           <div className="container-fluid">
             <div className="row">
               <div className="col-md-10">

               </div>
               <div className="col-md-2">
                 <div class="btn-group">
                   <button
                     type="button"
                     href="/profile"
                     class="btn btn-default side-btn left"
                   >
                     <a>My profile</a>
                   </button>
                   <button
                     type="button"
                     class="btn btn-default  side-btn"
                     data-toggle="dropdown"
                     aria-haspopup="true"
                     aria-expanded="false"
                   >
                     <span class="caret" />
                     <span class="sr-only">Toggle Dropdown</span>
                   </button>
                   <ul class="dropdown-menu">
                   <li>
                     <a href="/dashboard">Dashboard</a>
                   </li>
                     <li>
                       <a href="/login">Logout</a>
                     </li>
                   </ul>
                 </div>
               </div>
             </div>

             {display}


           </div>
           </div>
         </div>
      </div>

    );
  }
}


export default Bookmarks;
