import React, { PureComponent } from "react";
import "./Main.css";
import axios from "axios";
import $ from 'jquery';

class Main extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      summary: "",
      author: "",
      content: "",
      subject: "",
      grade: "",
      tags: ""
    };
  }

  submitCurriculum = event => {
    event.preventDefault();

    axios({
      method: "post",
      url:
        "http://wattba.h9ssxfia9b.us-west-2.elasticbeanstalk.com/api/quick/lessons/save",
      data: {
        title: this.state.title,
        summary: this.state.summary,
        content: this.state.content,
        subject: this.state.subject,
        grade: this.state.grade,
        tags: this.state.tags,
        author: this.state.author
      }
    })
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  updateTitle = val => {
    this.setState({ title: val });
  };

  updateDes = val => {
    this.setState({ summary: val });
  };

  updateSubject = e => {
    e.preventDefault();
    $("#"+e.target.value).css({ background: 'linear-gradient(to right, #607acb, #39d2c0)' });
    this.setState({ subject: e.target.value });
  };

  grade = e => {
    this.setState({ grade: e.target.value });
  };

  author = e => {
    this.setState({ author: e.target.value });
  };

  tags = e => {
    this.setState({ tags: e.target.value });
  }

  render() {
    console.log(this.state);
    return (
      <form className="form-body" onSubmit={e => this.submitCurriculum(e)}>
        <div>
          <div className="main-header">Build Your Lesson Plan</div>
          <div className="audience">
            {/* <div className="subheader">Your curriculum</div> */}
            <p className="share-your-curriculum">
              <i class="fas fa-check" style={{color: '#3ad4bb'}}></i>
              &nbsp;&nbsp;Share your curriculum with other teachers
            </p>
            <p className="share-your-curriculum">
              <i class="fas fa-check" style={{color: '#3ad4bb'}}></i>
              &nbsp;&nbsp;Connect with teachers in your community and around the world
            </p>

            <p className="share-your-curriculum">
              <i class="fas fa-check" style={{color: '#3ad4bb'}}></i>
              &nbsp;&nbsp;Participate in the world's largest repository of curriculum
            </p>
          </div>
        </div>
        <div className="main-container">
          <div>
            <div className="lesson-title-container">
              <div className="subheader">Title</div>
              <input
                className="lesson-title"
                onChange={e => this.updateTitle(e.target.value)}
              />
            </div>
            <div className="lesson-description-container">
              <div className="subheader">Summary</div>
              <textarea
                className="lesson-description"
                placeholder="Summary (300 characters max)"
                onChange={e => this.updateDes(e.target.value)}
              />
            </div>
          </div>
          <div className="upload-section">
            <div>
              <button alt="Upload Your Curriculum" className="addfile">
                Upload Your Curriculum
              </button>
              <input type="file" className="upload" />
            </div>
          </div>
        </div>
        <div className="main-body">
          <div className="subheader">Subjects</div>
          <div className="main-subjects">
            <button
              className="subject-btn"
              value="Math"
              onClick={e => this.updateSubject(e)}
              id="Math"
            >
              Math
            </button>
            <button
              className="subject-btn"
              value="Sciences"
              onClick={e => this.updateSubject(e)}
              id="Sciences"
            >
              Sciences
            </button>
            <button
              className="subject-btn"
              value="Technology"
              onClick={e => this.updateSubject(e)}
              id="Technology"
            >
              Technology
            </button>
          </div>
          <div className="main-subjects">
            <button
              className="subject-btn"
              value="Humanities"
              onClick={e => this.updateSubject(e)}
              id="Humanities"
            >
              Humanities
            </button>
            <button
                className="subject-btn"
                value="Art"
                onClick={e => this.updateSubject(e)}
                id="Art"
              >
                Art
            </button>
            <button
              className="subject-btn"
              value="Engineering"
              onClick={e => this.updateSubject(e)}
              id="Engineering"
            >
              Engineering
            </button>
          </div>
          <div className="main-subjects">
            <button
              className="subject-btn"
              value="Languages"
              onClick={e => this.updateSubject(e)}
              id="Languages"
            >
              Languages
            </button>
            <button
              className="subject-btn"
              value="Health"
              onClick={e => this.updateSubject(e)}
              id="Health"
            >
              Health
            </button>
            <button
              className="subject-btn"
              value="Accounting"
              onClick={e => this.updateSubject(e)}
              id="Accounting"
            >
              Accounting
            </button>
          </div>
          <div className="audience">
            <div className="subheader">Grade</div>
            <div className="submit-subject">
              <input
                className="submit-your-topic"
                onChange={e => this.grade(e)}
              />
            </div>
          </div>
          <div className="audience">
            <div className="subheader">Tags</div>
            <div className="submit-subject">
              <input
                className="submit-your-topic"
                onChange={e => this.tags(e)}
              />
            </div>
          </div>
          <div className="complete-add-class">
            <p className="share-your-curriculum" />
            <button className="submit-btn">Submit</button>
          </div>
        </div>
      </form>
    );
  }
}

export default Main;
