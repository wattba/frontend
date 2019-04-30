import React, { Component } from "react";
import Sidebar from "../Sidebar/SidebarGen";
import "./Lessons.css";
import Navbar from "../Navbar/Navbar";

function RenderStarts(steps) {
  var indents = [];
  for (var i = 0; i < steps; i++) {
    indents.push(
      <i className="fas fa-star bookmarked" style={{ paddingTop: "30px" }} />
    );
  }
  return indents;
}

function timeConverter(UNIX_timestamp) {
  var a = new Date(UNIX_timestamp);
  var months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ];
  var year = a.getFullYear();
  var month = months[a.getMonth()];
  var date = a.getDate();
  var hour = a.getHours();
  var min = a.getMinutes();
  var sec = a.getSeconds();
  var time =
    date + " " + month + " " + year + " " + hour + ":" + min + ":" + sec;
  return time.slice(0, 12);
}

class Lesson extends Component {
  constructor(props) {
    super(props);
    this.state = {
      files: [],
      reviews: [],
      details: {}
    };
  }

  componentDidMount() {
    fetch(
      "http://wattba.h9ssxfia9b.us-west-2.elasticbeanstalk.com/api/quick/lessons/" +
        this.props.match.params.id +
        "/comments"
    )
      .then(data => data.json())
      .then(data => this.setState({ reviews: data }));

    fetch(
      "http://wattba.h9ssxfia9b.us-west-2.elasticbeanstalk.com/api/quick/lessons/" +
        this.props.match.params.id +
        "/files"
    )
      .then(data => data.json())
      .then(data => this.setState({ files: data }));

    fetch(
      "http://wattba.h9ssxfia9b.us-west-2.elasticbeanstalk.com/api/quick/lessons/" +
        this.props.match.params.id +
        "/detail"
    )
      .then(data => data.json())
      .then(data => {
        this.setState({ details: data[0] });
      });
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="header">
          <Navbar />
        </div>
        <div className="row">
          <div className="col-md-3">
            <Sidebar />
          </div>
          <div className="col-md-9">
            <div className="row">
              <div className="col-xs-9">
                <div>
                  <div className="row">
                    <div className="col-xs-12">
                      <div className="titleLessons bookmarked">
                        {" "}
                        <i className="fas fa-bookmark" />
                        &nbsp; {this.state.details.topic}
                      </div>
                    </div>
                  </div>
                  <br />
                </div>
              </div>
              <div className="col-xs-3">
                Rating {RenderStarts(this.state.details.rating)} (
                {this.state.details.rating * 3.5})
              </div>
            </div>
            <div className="line" />
            <div className="row">
              <div className="col-xs-4">
                <img
                  src=""
                  width="300px"
                  height="300px"
                  style={{ paddingTop: "20px" }}
                />
              </div>
              <div className="col-xs-8">
                <div className="subtitles">
                  Age Range:&nbsp;&nbsp; {this.state.details.age_range}
                </div>
                <div className="subtitles">
                  Language:&nbsp;&nbsp; {this.state.details.language}
                </div>
                <div className="subtitles">
                  Translation:&nbsp;&nbsp; {this.state.details.translation}
                </div>
                <div className="subtitles">
                  Subject Matter:&nbsp;&nbsp;{" "}
                  {this.state.details.subject_matter}
                </div>
                <div className="subtitles">
                  Activity Type:&nbsp;&nbsp; {this.state.details.activity_type}
                </div>
                <div className="subtitles">
                  Duration:&nbsp;&nbsp; {this.state.details.duration}
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12" style={{ marginTop: "3em" }}>
                <h4 className="trending" style={{ color: "black" }}>
                  DESCRIPTION
                </h4>
                <br />
                <div className="desc" style={{ margin: "1em" }}>
                  {this.state.details.description}
                </div>
              </div>
            </div>
            <div className="related-files">
              <h4 className="trending" style={{ color: "black" }}>
                RELATED FILES
              </h4>
              <br />
              <div className="file-div">
                {this.state.files.map(file => (
                  <div className="file-handler hj">
                    <div className="row">
                      <div className="col-md-3">
                        <i
                          className="fas fa-file"
                          style={{ fontSize: "25px" }}
                        />
                      </div>
                      <div className="col-md-9">
                        <a href="#" className="filename">
                          {file.name}
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="reviews">
              <h4 className="trending" style={{ color: "black" }}>
                REVIEWS ({this.state.reviews.length})
              </h4>
              <br />
              <div className="review-div">
                {this.state.reviews.map(review => (
                  <div className="review-handler">
                    <div
                      className="row"
                      style={{ marginTop: "2.5em", width: "90%" }}
                    >
                      <div className="col-md-2" style={{ padding: "2em" }}>
                        {/*<i className="fas fa-file" style={{ fontSize: '35px', borderRadius: '50%' }} />*/}

                        <img
                          src={review.user_logo}
                          className="user_logo"
                          style={{
                            borderRadius: "50%",
                            width: "80px",
                            height: "80px"
                          }}
                        />
                      </div>
                      <div className="col-md-10" style={{ padding: "0em" }}>
                        {RenderStarts(review.stars)}
                        <p>{review.review}</p>
                        <p>{timeConverter(review.date)}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Lesson;
