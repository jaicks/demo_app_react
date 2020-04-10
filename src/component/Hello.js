import React, { Component } from "react";
import App from "../App";
import List from "./List";


class Hello extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        
        return (
            <div>
                {/* <div>HI This is just a demo</div> */}
                <List />
            </div>
        )

    }
}

export default Hello;