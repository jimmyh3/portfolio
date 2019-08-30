import React from 'react';

class AboutMeTab extends React.Component {
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
        About Me
        </div>

        return jsx;
    }
}

export default AboutMeTab;