import React, { Component } from 'react';


class Tutorial extends Component {
    constructor(props) {
        super(props);
        this.state = {
            initial_value: 0,
        }
    }
    handleClick_add_click =()=>{
        console.log("handleClick_add_click")
        if(this.state.initial_value<10){
            this.setState({initial_value: this.state.initial_value + 1})
        }
        
    }

    handleClick_minus_click=()=>{
        if(this.state.initial_value>0){
            this.setState({initial_value:this.state.initial_value - 1 })
        }
    }
    render() {
        return (
            <div>
                <div>{this.props.state}</div>
                <button onClick= {this.handleClick_add_click}>Add Me</button>
                <button onClick= {this.handleClick_minus_click}>Minus Me</button>
                <div>{this.state.initial_value}</div>
                
                {/* <div>{this.state.initial_value}</div> */}
            </div>
        )
    }
}

export default Tutorial;