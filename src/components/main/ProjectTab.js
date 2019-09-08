import React from 'react';
import teamIChessIcon from '../../resources/team-i-chess_icon.svg';
import myplaceIcon from '../../resources/myplace_icon.svg';

class ProjectTab extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            navtab_panels: {
                project_display: this.props.content.project_display
            }
        }
    }

    render() {

        const jsx = 
        <div 
            className="navtab-panel"
            style={{
                display: this.state.navtab_panels.project_display
            }}
        >
            <div className="project-card">
                <img src={teamIChessIcon} alt="Project"></img>
                <div className="project-card-text">
                    <h3>Team-I Chess</h3>
                    <p>
                    Team-I-Chess is an online two player chess game with live chat enabled. 
                    Users may register accounts, create chess games, chat in-game and in lobby.
                    </p>
                    <ul className="project-card-skills">
                        <li>Nodejs</li>
                        <li>MySQL</li>
                        <li>Bootstrap</li>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>RESTful</li>
                    </ul>
                </div>
                <div className="project-card-links">
                    <a href="http://team-i-chess.herokuapp.com/" target="_blank" rel="noopener noreferrer" className="project-card-link">View Demo</a>
                    <a href="https://github.com/jimmyh3/team-i-chess" target="_blank" rel="noopener noreferrer" className="project-card-link">View Source Code</a>
                </div>
            </div>
            <div className="project-card">
                <img src={myplaceIcon} alt="Project"></img>
                <div className="project-card-text">
                    <h3>myPlace</h3>
                    <p>
                    myPlace is an apartment rental site tailored toward San Francisco State University students. 
                    Students may register and apply to listings.
                    </p>
                    <ul className="project-card-skills">
                        <li>PHP</li>
                        <li>MySQL</li>
                        <li>Bootstrap</li>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                    </ul>
                </div>
                <div className="project-card-links">
                    <a href="https://myplace-sfsu.herokuapp.com/" target="_blank" rel="noopener noreferrer">View Demo</a>
                    <a href="https://github.com/jimmyh3/myplace" target="_blank" rel="noopener noreferrer">View Source Code</a>                   
                </div>
            </div>
        </div>

        return jsx;
    }
}

export default ProjectTab;