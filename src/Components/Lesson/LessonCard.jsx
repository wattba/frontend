import React from "react";
import { Card } from "react-bootstrap";

class LessonCard extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        liked: false
      };
  }

  like() {
    this.setState({ liked: !this.state.liked })
  }

  render() {
    let heart;
    if(this.state.liked)
      heart = <i className="fas fa-bookmark like" onClick={this.like.bind(this)} style={{ color: 'red' }}></i>
    else
      heart = <i className="fas fa-bookmark like" onClick={this.like.bind(this)}></i>
    return (
      <div
        className="col-md-12 lessons-card"
        style={{ marginBottom: "20px", marginTop: "10px" }}
      >
        <Card style={{ width: "auto", height: "230px", borderRadius: '15px' }}>
          <Card.Body>
            <div className="row">
              <div className="col-md-6">
                <Card.Title className="card-title">{this.props.name}</Card.Title>
              </div>
              <div className="col-md-6">
                <div className="tag">
                  {this.props.tags}
                </div>
              </div>
            </div>
            <Card.Text>{this.props.desc}</Card.Text>
          </Card.Body>
          <div className="row">
            <div className="col-md-6">
              {heart}
            </div>
            <div className="col-md-6">
              <a href={"/lesson/" + this.props.name}><i className="fas fa-arrow-circle-right arrow"></i></a>
            </div>
          </div>
        </Card>
      </div>
    );
  }
}

export default LessonCard;
