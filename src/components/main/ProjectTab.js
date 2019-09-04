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
                    <h4>Team-I Chess</h4>
                    <p>An online multiplayer chess game with user registration and live chatting.</p>
                </div>
                <a href="http://team-i-chess.herokuapp.com/" target="_blank" rel="noopener noreferrer" className="project-card-link">View</a>
            </div>
            <div className="project-card">
                <img src={myplaceIcon} alt="Project"></img>
                <div className="project-card-text">
                    <h4>MyPlace</h4>
                    <p>An apartment rental site for SFSU students.</p>
                </div>
                <a href="https://myplace-sfsu.herokuapp.com/" target="_blank" rel="noopener noreferrer" className="project-card-link">View</a>
            </div>
        </div>

        return jsx;
    }
}

export default ProjectTab;