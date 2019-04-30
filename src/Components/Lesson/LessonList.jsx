import React, { Component } from "react";
import LessonCard from "./LessonCard";
import "./Lessons.css";
import { Container, Row, Col } from "react-bootstrap";

class LessonList extends Component {
  constructor(props) {
    super(props);
    this.state = { resultsRecommends: [], resultsTrending: [], lessons: [], filtered: [] };
    this.search = this.search.bind(this);
    this.handleBook = this.handleBook.bind(this);
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
      let val = e.target.value.toLowerCase();
      const lessons = this.state.lessons;
      let filtered = [];

      for(var i = 0; i < lessons.length; i++) {
        let lesson_title = lessons[i].title.toLowerCase(), lesson_tags = lessons[i].tags;
        if(lesson_title.match(val))
          filtered.push(lessons[i]);
        else {
          for(var j=0;j<lesson_tags.length;j++) {
            if(val.match(lesson_tags[j].toLowerCase()))
              break;
          }
          filtered.push(lessons[i]);
        }
      }
      if(val === "") filtered = []
      this.setState({ filtered, });

  }

  handleChange() {
    let filtered_tmp = [];
    for(let i=0;i<this.state.filtered.length;i++) {
      for(let j=0;j<this.state.lessons.length;j++) {
        if(this.state.lessons[j].id === this.state.filtered[i].id)
          filtered_tmp.push(this.state.lessons[j]);
      }
    }
    this.setState({ filtered: filtered_tmp });
  }

  handleBook()
  {
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
          .then(data => this.setState({ lessons: data.results }))
          .then(() => this.handleChange());
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
                  bookmarked={data.bookmarked}
                  callBack={this.handleBook}
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
                  id={data.id}
                bookmarked={data.bookmarked}
                callBack={this.handleBook}
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
         id={data.id}
       bookmarked={data.bookmarked}
       callBack={this.handleBook}
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
                <a href="/bookmarks">My Bookmarks</a>
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
    );
  }
}

export default LessonList;
