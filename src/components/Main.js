import React from 'react';
import '../index.css';
//import profile_img from '../resources/MyProfilePicture.jpg';
import ProjectTab from './main/ProjectTab';
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
        let activePanel = <ProjectTab content={{project_display: "block"}}/>;

        const jsx = 
        <div>
            <nav className="navbar-section layout-rwd">
                <div>
                    <a href="#project-jump">Projects</a>
                    <a href="#contact-jump">Contact</a>
                </div>
            </nav>
            <div className="layout layout-rwd">
                <header className="profile-heading-section" ref={this.refTopOfPage}>
                    <h1>Jimmy He</h1>
                    {/*<h4>Full Stack Developer</h4>*/}
                    <p>
                    Aspiring developer with a degree in computer science. Experienced in object-oriented programming with emphasis in web development, manual and automation testing, conducting Test Driven Development. Successful working in teams and independently.
                    </p>
                </header>
                <main>
                    <section className="skills-section">
                        <h2 className="header-of-section">
                            <span>&lt;</span>
                            &emsp;
                            <span>Technical Skills</span>
                            &emsp;
                            <span>&gt;</span>
                        </h2>
                        <div className="skills-section__layout">
                            <p className="skills-subheading">technologies
                                <span>: &#123;</span> &emsp;
                                <ul className="skills-subjects">
                                    <li>"Maven"</li><span>,</span>
                                    <li>"Cucumber"</li><span>,</span>
                                    <li>"JUnit"</li><span>,</span>
                                    <li>"Selenium"</li><span>,</span>
                                    <li>"TestNG"</li><span>,</span>
                                    <li>"Jenkins"</li><span>,</span>
                                    <li>"JIRA"</li><span>,</span>
                                    <li>"Postman"</li><span>,</span>
                                    <li>"Git"</li><span>,</span>
                                    <li>"React.js"</li><span>,</span>
                                    <li>"Express.js"</li><span>,</span>
                                    <li>"Node.js"</li>
                                </ul>
                                <span>&#125;</span>
                            </p>
                            <p className="skills-subheading">languages 
                                <span className="skills-curlybraces">: &#123;</span> &emsp;
                                <ul className="skills-subjects">
                                    <li>"Java"</li><span>,</span>
                                    <li>"JavaScript"</li><span>,</span>
                                    <li>"C"</li><span>,</span>
                                    <li>"HTML"</li><span>,</span>
                                    <li>"CSS"</li><span>,</span>
                                    <li>"SQL"</li><span>,</span>
                                </ul>
                                <span>&#125;</span>
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
                                    <a href="mailto:jimmyhe3452@gmail.com" style={{fontSize: "100%"}} title="jimmyhe3452@gmail.com">jimmyhe3452@gmail.com</a>
                                </div>
                                <div className="contact-info-item">
                                    {/*<img src={linkedin_icon} alt="linkedin icon"></img>*/}
                                    <a href="https://www.linkedin.com/in/jimmy-he" target="_blank" rel="noopener noreferrer" title="LinkedIn">LinkedIn</a>
                                </div>
                                <div className="contact-info-item">
                                    {/*<img src={github_icon} alt="github icon"></img>*/}
                                    <a href="https://github.com/jimmyh3" target="_blank" rel="noopener noreferrer" title="Github">Github</a>
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