import React, { Component } from "react";
import LessonCard from "./LessonCard";
import "./Lessons.css";
import { Container, Row, Col } from "react-bootstrap";

class LessonList extends Component {
  constructor(props) {
    super(props);
    this.state = { resultsRecommends: [], resultsTrending: [], lessons: [], filtered: [] };
    this.search = this.search.bind(this);
  }

  componentDidMount() {
    fetch(
      "http://wattba.h9ssxfia9b.us-west-2.elasticbeanstalk.com/api/quick/lessons/recommended"
    )
      .then(response => response.json())
      .then(data => this.setState({ resultsRecommends: data }));

    fetch(
      "http://wattba.h9ssxfia9b.us-west-2.elasticbeanstalk.com/api/quick/lessons/trending"
    )
      .then(response => response.json())
      .then(data => this.setState({ resultsTrending: data }));

    fetch("http://wattba.h9ssxfia9b.us-west-2.elasticbeanstalk.com/api/v1/lessons/")
      .then(data => data.json())
      .then(data => this.setState({ lessons: data.results }));
  }

  search(e) {

      let val = e.target.value;
      console.log(this.state.lessons);
      const lessons = this.state.lessons;
      let filtered = [];

      for(var i = 0; i < lessons.length; i++) {
        if(lessons[i].title.toLowerCase().match(val.toLowerCase()))
          filtered.push(lessons[i]);
      }
      if(val === "") filtered = []
      this.setState({ filtered, });
      console.log(filtered);

  }

  render() {
    const dataRecommends = this.state.resultsRecommends;
    const dataTrending = this.state.resultsTrending;

    const original = <div className="original">
      <div
        style={{ padding: "20px", marginTop: "-5em" }}
        className="trending-section"
      >
        <h4 className="trending">Trending</h4>
        <div className="row">
            {dataRecommends.map(data => (
              <div className="col-md-4">
                <LessonCard
                  name={data.title}
                  desc={data.description.slice(0, 200) + "..."}
                  tags={data.tags}
                  id={data.id}
                />
              </div>
            ))}
        </div>
      </div>

      <div
        style={{ padding: "20px", marginTop: "-5em" }}
        className="recomm-section"
      >
        <h4 className="trending">Recommended for you</h4>
        <div className="row">
          {dataTrending.map(data => (
            <div className="col-md-4">
              <LessonCard
                name={data.title}
                desc={data.description.slice(0, 200) + "..."}
                tags={data.tags}
              />
            </div>
          ))}
        </div>
      </div>
   </div>

   const filtered = this.state.filtered;

   let filtered_res =  filtered.map( (data) =>
    <div className="col-md-4">
     <LessonCard
       name={data.title}
       desc={data.summary.slice(0, 200) + "..."}
       tags={data.tags}
     />
     </div>
   )

    const display = (this.state.filtered.length !== 0)? filtered_res : original;

    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-10">
            <form>
              <div className="form-group main-group">
                <input
                  type="text"
                  className="form-control top-search"
                  placeholder="Search"
                  onChange={this.search}
                />
              </div>
            </form>
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
                  <a href="/login">Logout</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {display}


      </div>
    );
  }
}

export default LessonList;
