import React, { Component } from "react";
import LessonCard from "./LessonCard";
import "./Lessons.css";
import { Container, Row, Col } from "react-bootstrap";

class LessonList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleUpdateList = this.handleUpdateList.bind();
  }

  handleUpdateList() {}

  render() {
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
          <div className="col-md-2" />
        </div>
        <div className="row">
          <div className="col-md-6">
            <LessonCard
              name={"Lesson One"}
              desc={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a nisi in eros tincidunt venenatis. Vivamus in tristique ex, sed pharetra metus. Maecenas ornare, nisi ut sodales malesuada, ligula quam dictum odio, in aliquet elit velit vel sem. "
              }
              tags={"math"}
            />
          </div>
          <div className="col-md-6">
            <LessonCard
              name={"Lesson Two"}
              desc={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a nisi in eros tincidunt venenatis. Vivamus in tristique ex, sed pharetra metus. Maecenas ornare, nisi ut sodales malesuada, ligula quam dictum odio, in aliquet elit velit vel sem. "
              }
              tags={"math"}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <LessonCard
              name={"Lesson One"}
              desc={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a nisi in eros tincidunt venenatis. Vivamus in tristique ex, sed pharetra metus. Maecenas ornare, nisi ut sodales malesuada, ligula quam dictum odio, in aliquet elit velit vel sem. "
              }
              tags={"math"}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default LessonList;
