import React from 'react';

class Test extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: props.data
        }
    }

    componentDidMount() {
        fetch("/test")
            .then((res) => {
                console.log(res);
                return res.text();
            })
            .then((res) => {
                this.setState((prevState) => {
                    return {
                        data: res
                    }
                })
                
            })
    }

    render() {
        const jfx = 
        <div>
            <p>{this.state.data}</p>
        </div>

        return jfx;
    }
}

export default Test;