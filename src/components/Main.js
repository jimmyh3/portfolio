import React from 'react';
import '../index.css';
//import profile_img from '../resources/MyProfilePicture.jpg';
import ProjectTab from './main/ProjectTab';
import AboutMeTab from './main/AboutMeTab';

class Main extends React.Component {

    constructor(props) {
        super(props);
        this.refTopOfPage = React.createRef();
        this.refProjectSection = React.createRef();
        this.refContactSection = React.createRef();
        this.state = {
            showProjectTab: true,
            showAboutMeTab: false
        }

        this.handleClickButtonPanel = this.handleClickButtonPanel.bind(this);
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
        let activePanel;
        if (this.state.showProjectTab) { 
            activePanel = <ProjectTab content={{project_display: "block"}}/>;
        } else {
            activePanel = <AboutMeTab content={{project_display: "block"}}/>;
        }

        /*
        const panelBtnColor = (isActive, activeColor, inactiveColor) => {
            const style = {};
            if (isActive) {
                style.backgroundColor = activeColor;
            } else {
                style.backgroundColor = inactiveColor;
            }
            return style;
        }
        */
       
        const jsx = 
        <div>
            <div className="layout layout-rwd">
                <nav className="navbar">
                    <ul>
                        <li><a href="#project-section">Contact</a></li>
                        <li><a href="#contact-section">Project</a></li>
                    </ul>
                </nav>
                <header className="profile-heading" ref={this.refTopOfPage}>
                    <h1>Jimmy He</h1>
                    <h2>Full Stack Developer</h2>
                    <p>
                        Aspiring developer with a degree in computer science.
                        Experienced in object oriented programming, back end development, testing and debugging.
                        Successful working in teams and independently. Love to learn and apply knowledge.
                    </p>
                </header>
                <main>
                    <section>
                        { /*
                        <div id="project-section" className="navtab-buttons">
                            
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
                        */}
                        <h2>Projects</h2>
                        {activePanel}

                    </section>
                </main>
                <footer>
                    <div id="contact-section">

                    </div>
                </footer>
            </div>
        </div>

        return jsx;
    }
}

export default Main;