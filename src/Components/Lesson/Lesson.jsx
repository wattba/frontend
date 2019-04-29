import React, { Component } from "react";
import "./Lessons.css";

function RenderStarts(steps) {
  var indents = [];
  for (var i = 0; i < steps; i++) {
    indents.push(
      <i className="fas fa-star bookmarked" style={{ paddingTop: "30px" }} />
    );
  }
  return indents;
}

function Lesson(props) {
  const rating = 4;
  const starts = [];
  console.log(props.match.params.name);
  return (
    <div className="container">
      <div className="row">
        <div className="col-xs-9">
          <div>
            <div className="row">
              <div className="col-xs-12">
                <div className="titleLessons bookmarked">
                  {" "}
                  <i className="fas fa-bookmark" />
                  &nbsp; {props.match.params.name}
                </div>
              </div>
            </div>
            <br />
          </div>
        </div>
        <div className="col-xs-3">
          Rating {RenderStarts(rating)} ({rating * 3.5})
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
          <div className="subtitles">Age Range:</div>
          <div className="subtitles">Language:</div>
          <div className="subtitles">Translation:</div>
          <div className="subtitles">Subject Matter:</div>
          <div className="subtitles">Topic:</div>
          <div className="subtitles">Activity Type:</div>
          <div className="subtitles">Duration:</div>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-12" style={{ paddingTop: "30px" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
          sodales eros eu lacus viverra porta. Pellentesque ut ligula aliquet,
          mollis enim id, sagittis ante. Cras hendrerit consectetur sem, in
          placerat ligula tincidunt eget. Nullam ultrices efficitur hendrerit.
          Vivamus dignissim elementum velit, non egestas velit. Sed eu orci
          purus. Quisque pharetra pellentesque egestas. Curabitur condimentum
          ante sit amet enim mattis, et mollis dolor iaculis. Proin vulputate
          dolor quam, ut gravida mauris vulputate vitae. Phasellus convallis
          convallis nisi, ac imperdiet risus. Integer at facilisis libero. Etiam
          ac pretium diam. Nunc porttitor ex risus, a volutpat nulla gravida
          sed. Etiam semper, ex eu facilisis pretium, erat dolor viverra augue,
          sed egestas urna lacus in nisl. Curabitur id nulla semper nisl mattis
          eleifend ut in dolor. Aliquam ultricies eros quis risus condimentum
          rhoncus. Suspendisse efficitur, lacus ac fermentum ultricies, magna
          tellus commodo nulla, ac placerat arcu turpis vel nulla.
          {/*Related Files Component goes here */}
        </div>
      </div>
    </div>
  );
}

export default Lesson;
