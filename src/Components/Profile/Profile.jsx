import React, { Component } from 'react';
import Avatar from './Avatar';
import './profile.css';

class Profile extends Component {
 render() {
   return (
    <div className="profile-container">
      <div className="profile-nav-bar">
        <a
          className="logo" 
          href="/">
          Open Curriculum
        </a>
      </div>
      <div className="profile-sidebar">
        <Avatar />
      </div>
      <div className="profile-main">
        <div className="profile-header">
        </div>
        <div className="profile-body">
          <div className="profile-details">
            <div className="profile-item">
              <div className="profile-item-info">Name</div>
              <div className="profile-item-detail">Chloe Lin</div>
            </div>
            <div className="profile-item">
              <div className="profile-item-info">Department&nbsp;</div>
              <div className="profile-item-detail">Computer Science</div>
            </div>
            <div className="profile-item">
               <div className="profile-item-info">Username&nbsp;</div>
               <div className="profile-item-detail">@chloewlin</div>
            </div>
            <div className="profile-item">
              <div className="profile-item-info">Phone&nbsp;</div>
              <div className="profile-item-detail">405-111-1111</div>
            </div>
            <div className="profile-item">
              <div className="profile-item-info">Email&nbsp;</div>
              <div className="profile-item-detail">chloe@facebook.com</div>
            </div>
            <div className="profile-item">
               <div className="profile-item-info">School&nbsp;</div>
               <div className="profile-item-detail">Facebook Middle School</div>
            </div>
            <div className="profile-item">
              <div className="profile-item-info">Education&nbsp;</div>
              <div className="education">Computer Science and English Literature, Yale University</div>
            </div>
            <div className="profile-item">
              <div className="profile-item-info">Specialty&nbsp;</div>
              <div className="education">Shakespeare, Algorithms</div>
            </div>
            <div className="profile-item">
              <div className="profile-item-info">Address&nbsp;</div>
              <div className="profile-item-detail">1 Hacker Way, Menlo Park, California 94025</div>
            </div>
            <div className="profile-item">
              <div className="profile-item-info">Subjects&nbsp;</div>
              <div className="profile-item-detail">English, Math</div>
            </div>
            <div className="profile-item">
              <div className="profile-item-info">Teaching Philosophy&nbsp;</div>
              <div className="profile-item-detail">
                <div className="teaching-philosophy">
                  I like to approach new students in a way that reduces their affective filter. Whether they have been unsuccessful in schooling in the past, or have not been motivated to complete their education, I try to reassure them that mistakes, challenges, and setbacks are valuable in their learning process. My goal is to convey to all students that they have the capacity to learn and succeed. I teach difficult mathematical concepts in an easy to understand way with to make it relatable in the students’ daily life. As an educator, my hope is that students will build endurance, perseverance and determination through rewarding experiences at school, so that they will be enthusiastic life-long learners to inspire generations to come.
                </div>
              </div>
            </div>
            <div className="profile-item">
              <div className="profile-item-info">My curriculum&nbsp;</div>
              <div className="profile-item-detail"></div>
            </div>
          </div>
        </div>
      </div>
    </div>   
   );
 }
}

export default Profile;
