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
          <div className="col-md-2">
            <div class="btn-group">
              <button type="button" class="btn btn-default side-btn left">My profile </button>
              <button type="button" class="btn btn-default  side-btn" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <span class="caret"></span>
              <span class="sr-only">Toggle Dropdown</span>
              </button>
              <ul class="dropdown-menu">
                <li><a href="#">Action</a></li>
                <li><a href="#">Another action</a></li>
                <li><a href="#">Something else here</a></li>
                <li role="separator" class="divider"></li>
                <li><a href="#">Logout</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div style={{ padding: '20px', marginTop: '-5em' }} className="trending-section">
          <h4 className="trending">Trending</h4>
          <div className="row">
            <div className="col-md-4">
              <LessonCard
                name={"Lesson One"}
                desc={
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a nisi in eros tincidunt venenatis. Vivamus in tristique ex, sed pharetra metus. Maecenas ornare, nisi ut sodales malesuada, ligula quam dictum odio, in aliquet elit velit vel sem. "
                }
                tags={"math"}
              />
            </div>
            <div className="col-md-4">
              <LessonCard
                name={"Lesson Two"}
                desc={
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a nisi in eros tincidunt venenatis. Vivamus in tristique ex, sed pharetra metus. Maecenas ornare, nisi ut sodales malesuada, ligula quam dictum odio, in aliquet elit velit vel sem. "
                }
                tags={"math"}
              />
            </div>
            <div className="col-md-4">
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

        <div style={{ padding: '20px', marginTop: '-5em' }} className="recomm-section">
          <h4 className="trending">Recommended for you</h4>
          <div className="row">
            <div className="col-md-4">
              <LessonCard
                name={"Lesson One"}
                desc={
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a nisi in eros tincidunt venenatis. Vivamus in tristique ex, sed pharetra metus. Maecenas ornare, nisi ut sodales malesuada, ligula quam dictum odio, in aliquet elit velit vel sem. "
                }
                tags={"math"}
              />
            </div>
            <div className="col-md-4">
              <LessonCard
                name={"Lesson Two"}
                desc={
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a nisi in eros tincidunt venenatis. Vivamus in tristique ex, sed pharetra metus. Maecenas ornare, nisi ut sodales malesuada, ligula quam dictum odio, in aliquet elit velit vel sem. "
                }
                tags={"math"}
              />
            </div>
            <div className="col-md-4">
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

      </div>
    );
  }
}

export default LessonList;
