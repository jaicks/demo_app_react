import React, { component, Component } from "react";
import App from "../App";

class Function extends Component {
    constructor(props) {
        super(props);
        this.state = {
            initial_name:"Jaicky"

        }
    }
    handleClick=()=>{
        this.setState({initial_name: "JaicksSparraow"})

        // alert("This is Function Call")

    }
    render() {
        console.log(this.props);

        let func = "demo_project"
        return (
            <div> <p>This is functional Example</p>
                <button onClick= {this.handleClick}>Add</button>
        <div>{this.state.initial_name}</div>
        <div>{this.props.city}</div>
            </div>

        )
    }
}

export default Function;