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

        const jsx = 
        <div>
            <div className="layout layout-rwd">
                <nav className="navbar-section">
                    <a href="#contact-jump">Contact</a>
                    <a href="#project-jump">Projects</a>
                </nav>
                <header className="profile-heading-section" ref={this.refTopOfPage}>
                    <h1 id="project-jump">Jimmy He</h1>
                    <h2>Full Stack Developer</h2>
                    <p>
                        Aspiring developer with a degree in computer science.
                        Experienced in object oriented programming, back end development, testing and debugging.
                        Successful working in teams and independently. Love to learn and apply knowledge.
                    </p>
                </header>
                <main>
                    <section className="skills-section">
                        <h2>Skills</h2>
                        <div className="skills-section__layout">
                            <div className="skills-section__listing">
                                <h3>Technologies</h3>
                                <ul>
                                    <li>Node.js</li>
                                    <li>Express.js</li>
                                    <li>Git</li>
                                    <li>RESTful Services</li>
                                    <li>Bootstrap</li>
                                </ul>
                            </div>
                            <div className="skills-section__listing">
                                <h3>Languages</h3>
                                <ul>
                                    <li>Java</li>
                                    <li>PHP</li>
                                    <li>JavaScript</li>
                                    <li>HTML</li>
                                    <li>CSS</li>
                                    <li>MySQL</li>
                                </ul>
                            </div>
                        </div>
                    </section>
                    <section className="project-section">
                        <h2>Projects</h2>
                        {activePanel}
                    </section>
                </main>
                <footer>
                    <div ref={this.refContactSection}>
                        <div className="footer-section">
                            <h2 id="contact-jump">Contact</h2>
                            <div className="footer-section--display">
                                <a href="mailto:jimmyhe3452@gmail.com" >jimmyhe3452@gmail.com</a>
                                <a href="https://www.linkedin.com/in/jimmy-he" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                                <a href="https://github.com/jimmyh3" target="_blank" rel="noopener noreferrer">github</a>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>

        return jsx;
    }
}

export default Main;