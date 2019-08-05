import React from 'react';
import logo from '../logo.svg'
import '../index.css';
import profile_img from '../resources/MyProfilePicture.jpg';

function Main() {
    const jsx = 
    <div className="main">
        {/* Add everything here first and then worry about design later. */}
        <img src={profile_img} className="profile-image" alt="Profile Image"></img>
        <p>
            Aspiring web developer with a degree in computer science.
            Experienced in object oriented programming, back end development, testing and debugging.
            Successful working in teams and independently. Love to learn and apply knowledge.
        </p>
        <div className="project-card">
            <img src={logo} alt="Project Image"></img>
            <div className="project-card-container">
                <h4>Project 1</h4>
                <p>Project description here...</p>
            </div>
        </div>
    </div>

    return jsx;
}

export default Main;