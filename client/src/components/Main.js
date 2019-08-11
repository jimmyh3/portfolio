import React from 'react';
import logo from '../logo.svg'
import '../index.css';
import profile_img from '../resources/MyProfilePicture.jpg';

class Main extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            navtab_buttons: {
                project_bgColor: "#f44336",
                project_color: "white",
                aboutMe_bgColor: "",
                aboutMe_color: ""
            },

            navtab_panels: {
                project_display: "block",
                project_bgColor: "#f44336",
                aboutMe_display: "none",
                aboutMe_bgColor: ""
            }
        }
    }

    handleClickButtonPanel(index, newColor) {
        this.setState((prevState) => {
            const newState = {
                navtab_buttons: {
                    project_bgColor: (index === 0) ? newColor : "",
                    project_color: (index === 0) ? "white" : "",
                    aboutMe_bgColor: (index === 1) ? newColor : "",
                    aboutMe_color: (index === 1) ? "white": ""
                },

                navtab_panels: {
                    project_display: (index === 0) ? "block" : "none",
                    project_bgColor: (index === 0) ? newColor : "",
                    aboutMe_display: (index === 1) ? "block" : "none",
                    aboutMe_bgColor: (index === 1) ? newColor : ""
                }
            }

            return newState;
        })
    }

    render() {
        const jsx = 
        <div className="main">
            {/* Add everything here first and then worry about design later. */}
            <div className="profile-image-container">
                <img src={profile_img} alt="Profile Image"></img>
            </div>
            <p className="profile-description">
                Aspiring web developer with a degree in computer science.
                Experienced in object oriented programming, back end development, testing and debugging.
                Successful working in teams and independently. Love to learn and apply knowledge.
            </p>

            <div className="navtab-container">

                <div className="navtab-buttons">
                    <button 
                        style={{
                            backgroundColor: this.state.navtab_buttons.project_bgColor,
                            color: this.state.navtab_buttons.project_color
                        }} 
                        onClick={() => this.handleClickButtonPanel(0, '#f44336')}
                    >
                    Projects
                    </button>
                    <button
                        style={{
                            backgroundColor: this.state.navtab_buttons.aboutMe_bgColor,
                            color: this.state.navtab_buttons.aboutMe_color
                        }}
                        onClick={() => this.handleClickButtonPanel(1, '#4caf50')}
                    >
                    About Me
                    </button>
                </div>
                
                <div 
                    className="navtab-panel"
                    style={{
                        display: this.state.navtab_panels.project_display,
                        backgroundColor : this.state.navtab_panels.project_bgColor
                    }}
                >Projects
                    <div className="project-card">

                        <img src={logo} alt="Project Image"></img>
                        <hr />
                        <div className="project-card-container">
                            <h4>Project 1</h4>
                            <p>Project description here...</p>
                        </div>
                    </div>
                </div>
                <div 
                    className="navtab-panel"
                    style={{
                        display: this.state.navtab_panels.aboutMe_display,
                        backgroundColor : this.state.navtab_panels.aboutMe_bgColor
                    }}
                > About Me Panels
                </div>
                
            </div>
        </div>

        return jsx;
    }
}

export default Main;