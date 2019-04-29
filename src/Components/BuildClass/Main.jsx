import React, {PureComponent} from "react";
import './Main.css';

class Main extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      curriculum: '',
      cover_image: '',
      subject: '',
      custom_topic: '',
      audience_language: '',
      audience_age: '',
      supplies_item1: '',
      supplies_qty1: 0,
      supplies_item2: '',
      supplies_qty2: 0,
      supplies_item3: '',
      supplies_qty3: 0,
      supplies_item4: '',
      supplies_qty4: 0,
      duration: '',
      complete: false
    }
  }

  updateTitle = (val) => {
    this.setState({title: val})
  }

  updateDes = (val) => {
    this.setState({description: val})
  }

  updateSubject = (e) => {
    e.preventDefault();
    this.setState({subject: e.target.value})
  }

  addYourTopic = (e) => {
    this.setState({custom_topic: e.target.value})
  }

  addLanguage = (e) => {
    this.setState({audience_language: e.target.value})
  }

  addAge = (e) => {
    this.setState({audience_age: e.target.value})
  }

  addSupply1 = (e) => {
    this.setState({supplies_item1: e.target.value})
  }

  addSupplyQty1 = (e) => {
    this.setState({supplies_qty1: e.target.value})
  }

  addSupply2 = (e) => {
    this.setState({supplies_item2: e.target.value})
  }

  addSupplyQty2 = (e) => {
    this.setState({supplies_qty2: e.target.value})
  }

  addSupply3 = (e) => {
    this.setState({supplies_item3: e.target.value})
  }

  addSupplyQty3 = (e) => {
    this.setState({supplies_qty3: e.target.value})
  }

  addSupply4 = (e) => {
    this.setState({supplies_item4: e.target.value})
  }

  addSupplyQty4 = (e) => {
    this.setState({supplies_qty4: e.target.value})
  }

  updateDuration = (e) => {
    e.preventDefault();
    this.setState({duration: e.target.value})
  }

  isComplete = (e) => {
    e.preventDefault();
    this.setState({complete: true});
  }

  render() {
    console.log(this.state);
    return (
    <form onSubmit={this.handleSubmit}>
      <div className="main-container">
        <div>
          <div>
            Build Your Lesson Plan
          </div>
          <div className="lesson-title-container">
            <input className="lesson-title" placeholder="Title" onChange={(e) => this.updateTitle(e.target.value)}/>
          </div>
          <div className="lesson-description-container">
            <textarea className="lesson-description" placeholder="Description (300 characters max)" onChange={(e) => this.updateDes(e.target.value)}/>
          </div>
        </div>
        <div className="upload-section">
          <div>
            <button
              alt="Upload Your Curriculum"
              src="addfile.png"
              className="addfile"
            >Upload Your Curriculum</button>
          </div>
          <div>
            <button
              alt="Upload Your Curriculum"
              src="addfile.png"
              className="addfile"
            >Add cover image</button>
          </div>
        </div>
      </div>
      <div className="main-body">
        <div>Subjects</div>
        <div className="main-subjects">
          <button className="subject-btn" value="English" onClick={(e) => this.updateSubject(e)}>English</button>
          <button className="subject-btn" value="Math" onClick={(e) => this.updateSubject(e)}>Math</button>
          <button className="subject-btn" value="Sciences" onClick={(e) => this.updateSubject(e)}>Sciences</button>
          <button className="subject-btn" value="Technology" onClick={(e) => this.updateSubject(e)}>Technology</button>
          <button className="subject-btn" value="Social Studies" onClick={(e) => this.updateSubject(e)}>Social Studies</button>
        </div>
        <div className="main-subjects">
          <button className="subject-btn" value="Art" onClick={(e) => this.updateSubject(e)}>Art</button>
          <button className="subject-btn" value="Engineering" onClick={(e) => this.updateSubject(e)}>Engineering</button>
          <button className="subject-btn" value="Reading" onClick={(e) => this.updateSubject(e)}>Reading</button>
          <button className="subject-btn" value="Foreign Languages" onClick={(e) => this.updateSubject(e)}>Foreign Languages</button>
          <button className="subject-btn" value="Health" onClick={(e) => this.updateSubject(e)}>Health</button>
          <button className="subject-btn" value="Physical Education" onClick={(e) => this.updateSubject(e)}>Physical Education</button>
        </div>
        <div className="submit-subject">
          <input className="submit-your-topic" onChange={(e) => this.addYourTopic(e)} placeholder="Add your topic"></input>
        </div>
        <div className="audience">
          <div>Audience</div>
          <div className="submit-subject">
            <input className="submit-your-topic" onChange={(e) => this.addLanguage(e)} placeholder="Language"></input>
          </div>
          <div className="submit-subject">
            <input className="submit-your-topic" onChange={(e) => this.addAge(e)} placeholder="Age"></input>
          </div>
        </div>
        <div className="supplies">
          <div>Supplies</div>
          <div className="supplies-sub-header">
            <div className="sublies-item">Items</div>
            <div className="sublies-qty">Qty.</div>
          </div>
          <div className="submit-subject">
            <input className="submit-your-topic" onChange={(e) => this.addSupply1(e)}></input>
            <input className="qty" onChange={(e) => this.addSupplyQty1(e)}></input>
          </div>
          <div className="submit-subject">
            <input className="submit-your-topic" onChange={(e) => this.addSupply2(e)}></input>
            <input className="qty" onChange={(e) => this.addSupplyQty2(e)}></input>
          </div>
          <div className="submit-subject">
            <input className="submit-your-topic" onChange={(e) => this.addSupply3(e)}></input>
            <input className="qty" onChange={(e) => this.addSupplyQty3(e)}></input>
          </div>
          <div className="submit-subject">
            <input className="submit-your-topic" onChange={(e) => this.addSupply4(e)}></input>
            <input className="qty" onChange={(e) => this.addSupplyQty4(e)}></input>
          </div>
          <div className="duration">
            <div>Duration</div>
            <div>
              <button value="Short Activities" className="subject-btn" onClick={(e) => this.updateDuration(e)}>Short Activities</button>
              <button value="Multi-day" className="subject-btn" onClick={(e) => this.updateDuration(e)}>Multi-day</button>
              <button value="Semester" className="subject-btn" onClick={(e) => this.updateDuration(e)}>Semester</button>
            </div>
          </div>
        </div>
        <div className="complete-add-class">
          <button className="subject-btn" onSubmit={(e) => this.isComplete(e)}>Submit</button>
          </div>
      </div>
    </form>
    );
  }
}
 
export default Main;
