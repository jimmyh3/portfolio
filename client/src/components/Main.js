import React from 'react';
import '../index.css';
import profile_img from '../resources/MyProfilePicture.jpg';
import ProjectTab from './main/ProjectTab';
import AboutMeTab from './main/AboutMeTab';

class Main extends React.Component {

    constructor(props) {
        super(props);
        this.refTopOfPage = React.createRef();
        this.state = {
            showProjectTab: true,
            showAboutMeTab: false
        }
    }

    handleClickButtonPanel(index) {
        this.setState((prevState) => {
            const obj = {
                showProjectTab: (index === 0) ? true : false,
                showAboutMeTab: (index === 1) ? true : false
            }
            return obj;
        });

        window.scrollTo(0, this.refTopOfPage.current.offsetTop);
    }

    render() {
        const panelToDisplay = () => {
            if (this.state.showProjectTab) { 
                return <ProjectTab content={{project_display: "block", project_bgColor: "darkgray"}}/>;
            } else {
                return <AboutMeTab content={{project_display: "block", project_bgColor: "darkgray"}}/>;
            }
        };

        const panelBtnColor = (isActive, activeColor, inactiveColor) => {
            const style = {};
            if (isActive) {
                style.backgroundColor = activeColor;
            } else {
                style.backgroundColor = inactiveColor;
            }
            return style;
        }

        const jsx = 
        <div>
            <div className="layout">
                <header className="grid-one profile-heading" ref={this.refTopOfPage}>
                    {/* Add everything here first and then worry about design later. */}
                    <img src={profile_img} alt="Profile"></img>
                    <h2>Full Stack Developer</h2>
                    <p>
                        Aspiring developer with a degree in computer science.
                        Experienced in object oriented programming, back end development, testing and debugging.
                        Successful working in teams and independently. Love to learn and apply knowledge.
                    </p>
                </header>
                <main className="grid-two">
                    {/* */}
                    <section className="profile-info">
                        <div className="navtab-buttons">
                            <button
                                id="project-tab"
                                style={panelBtnColor(this.state.showProjectTab, "lightgray", "darkgray")}
                                onClick={() => this.handleClickButtonPanel(0)}
                            >
                            Projects
                            </button>

                            <button
                                id="aboutme-tab"
                                style={panelBtnColor(this.state.showAboutMeTab, "lightgray", "darkgray")}
                                onClick={() => this.handleClickButtonPanel(1)}
                            >
                            About Me
                            </button>
                        </div>
                        
                        {panelToDisplay()}

                    </section>
                </main>
            </div>
        </div>

        return jsx;
    }
}

export default Main;