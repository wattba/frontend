import React from "react";
import { Card } from "react-bootstrap";

class LessonCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      liked: false
    };
  }

  like(e) {
    e.preventDefault();
    var that = this;
    fetch("http://wattba.h9ssxfia9b.us-west-2.elasticbeanstalk.com/api/quick/lessons/" + this.props.id + "/bookmark")
    .then(() => this.props.callBack())
    this.setState({ liked: !this.state.liked });
  }

  render() {
    const tags = this.props.tags.split(",");
    let heart;
    const test = this.props.bookmarked;
    if (test === true)
      heart = (
        <i
          className="fas fa-bookmark like"
          onClick={this.like.bind(this)}
          style={{ color: "black" }}
        />
      );
    else if(test === false) {
      heart = (
        <i className="far fa-bookmark like" onClick={this.like.bind(this)} />
      );
    }
    else {
      heart = (
        <i className="fas fa-trash-alt like" onClick={this.like.bind(this)} />
      )
    }
    return (
      <a href={"/lesson/" + this.props.id} style={{ textDecoration: 'none', color: 'black' }}>
      <div
        className="col-md-12 lessons-card"
        style={{ marginBottom: "20px", marginTop: "10px" }}
      >
        <Card style={{ width: "auto", height: "230px", borderRadius: "15px" }}>
          <Card.Body>
            <div className="row">
              <div className="col-md-4">
                <Card.Title className="card-title">
                  {this.props.name}
                </Card.Title>
              </div>
              <div className="col-md-8">
                {tags.map(tags => (
                  <div className="tag">{tags}</div>
                ))}
              </div>
            </div>
            <Card.Text>{this.props.desc}</Card.Text>
          </Card.Body>
          <div className="row">
            <div className="col-md-6">{heart}</div>
            <div className="col-md-6">

            </div>
          </div>
        </Card>
      </div>
     </a>
    );
  }
}

export default LessonCard;
