import React from 'react';
import logo from '../../logo.svg';

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

                <img src={logo} alt="Project"></img>
                <hr />
                <div className="project-card-container">
                    <h4>Project 1</h4>
                    <p>Project description here...</p>
                </div>
            </div>
            <div className="project-card">

                <img src={logo} alt="Project"></img>
                <hr />
                <div className="project-card-container">
                    <h4>Project 1</h4>
                    <p>Project description here...</p>
                </div>
            </div>
            <div className="project-card">

                <img src={logo} alt="Project"></img>
                <hr />
                <div className="project-card-container">
                    <h4>Project 1</h4>
                    <p>Project description here...</p>
                </div>
            </div>
        </div>

        return jsx;
    }
}

export default ProjectTab;