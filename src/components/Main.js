import React from 'react';
import '../index.css';
//import profile_img from '../resources/MyProfilePicture.jpg';
import ProjectTab from './main/ProjectTab';
import AboutMeTab from './main/AboutMeTab';
//import github_icon from '../resources/github_icon.png';
//import gmail_icon from '../resources/gmail_icon.svg';
//import linkedin_icon from '../resources/linkedin_icon.svg';

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
            <nav className="navbar-section navbar-section-rwd">
                <div>
                    <a href="#project-jump">Projects</a>
                    <a href="#contact-jump">Contact</a>
                </div>
            </nav>
            <div className="layout layout-rwd">
                <header className="profile-heading-section" ref={this.refTopOfPage}>
                    <h1>Jimmy He</h1>
                    <h4>Full Stack Developer</h4>
                    <p>
                        Aspiring developer with a degree in computer science.
                        Experienced in object oriented programming, back end development, testing and debugging.
                        Successful working in teams and independently. Love to learn and apply knowledge.
                    </p>
                </header>
                <main>
                    <section className="skills-section">
                        <h2 className="header-of-section">
                            <span>&lt;</span>
                            &emsp;
                            <span>Skills</span>
                            &emsp;
                            <span>&gt;</span>
                        </h2>
                        <div className="skills-section__layout">
                            <p className="skills-subheading">technologies
                                <span className="skills-curlybraces">: &#123;</span> &emsp;
                                <ul className="skills-subjects">
                                    <li>"node.js",</li>
                                    <li>"express.js",</li>
                                    <li>"react.js",</li>
                                    <li>"git",</li>
                                    <li>"restful services",</li>
                                    <li>"bootstrap"</li>
                                </ul>
                                <span className="skills-curlybraces">&#125;</span>
                            </p>
                            <p className="skills-subheading">languages 
                                <span className="skills-curlybraces">: &#123;</span> &emsp;
                                <ul className="skills-subjects">
                                    <li>"javascript",</li>
                                    <li>"java",</li>
                                    <li>"php",</li>
                                    <li>"mySQL"</li>
                                    <li>"html",</li>
                                    <li>"css"</li>
                                </ul>
                                <span className="skills-curlybraces">&#125;</span>
                            </p>
                            <div className="skills-section__listing">

                            </div>
                        </div>
                    </section>
                    <section className="project-section">
                        <h2 id="project-jump" className="header-of-section">
                            <span>&lt;</span>
                            &emsp;
                            <span>Projects</span>
                            &emsp;
                            <span>&gt;</span>
                        </h2>
                        {activePanel}
                    </section>
                </main>
                <footer>
                    <div ref={this.refContactSection}>
                        <div className="footer-section">
                            <h2 id="contact-jump" className="header-of-section">
                                <span>&lt;</span>
                                &emsp;
                                <span>Contact</span>
                                &emsp;
                                <span>&gt;</span>
                            </h2>
                            <div className="footer-section--display">
                                <div className="contact-info-item">
                                    {/*<img src={gmail_icon} alt="gmail icon"></img>*/}
                                    <a href="mailto:jimmyhe3452@gmail.com" style={{fontSize: "100%"}}>jimmyhe3452@gmail.com</a>
                                </div>
                                <div className="contact-info-item">
                                    {/*<img src={linkedin_icon} alt="linkedin icon"></img>*/}
                                    <a href="https://www.linkedin.com/in/jimmy-he" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                                </div>
                                <div className="contact-info-item">
                                    {/*<img src={github_icon} alt="github icon"></img>*/}
                                    <a href="https://github.com/jimmyh3" target="_blank" rel="noopener noreferrer">Github</a>
                                </div>
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