import React from 'react';
import '../test.css';

class Test extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: props.data
        }
    }

    /*
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
    */
   
    render() {
        const jfx = 
        <div>
            <p>{this.state.data}</p>
        </div>;

        const other =
        <div class="wrap">
            <div class="top"></div>

            <div class="mid">
                
                <div class="left">left</div>
            </div>

            <div class="bottom"></div>
        </div>;

        return other;
    }
}

export default Test;