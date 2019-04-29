import React, { Component } from "react";
import LessonCard from "./LessonCard";
import "./Lessons.css";
import { Container, Row, Col } from "react-bootstrap";

class LessonList extends Component {
  constructor(props) {
    super(props);
    this.state = { resultsRecommends: [], resultsTrending: [] };
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
  }

  render() {
    const dataRecommends = this.state.resultsRecommends;
    const dataTrending = this.state.resultsTrending;

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
                />
              </div>
            </form>
          </div>
          <div className="col-md-2">
            <div class="btn-group">
              <button type="button" class="btn btn-default side-btn left">
                My profile{" "}
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
        <div
          style={{ padding: "20px", marginTop: "-5em" }}
          className="trending-section"
        >
          <h4 className="trending">Trending</h4>
          <div className="row">
            <div className="col-md-12">
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
    );
  }
}

export default LessonList;
