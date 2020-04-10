import React, { Component } from 'react'

class Form_add extends Component {
    constructor(props){
        super();
        this.state = {
            first_name: "",
            last_name: "",
            adding: ""
        }

    }

    handleFirstname = (e) => {
        console.log(e.target.value)
        this.setState({ first_name: e.target.value })
    }
    handleLastname = (e) => {
        console.log(e.target.value)
        this.setState({ last_name: e.target.value })
    }

    handleadd = (e) => {
        console.log(this.state.first_name + " " + this.state.last_name )
        this.setState({ adding: this.state.first_name + " " + this.state.last_name })
    }
    render() {
        return (
            <div>
                <div>First Name:<input placeholder="Enter First Name" onChange={(e) => { this.handleFirstname(e) }} /></div>
                <div>Last Name:<input placeholder="Enter Last Name" onChange={(e) => { this.handleLastname(e) }} /></div>
                <button onClick = {this.handleadd}>Add</button>
            <div>
                <p>{this.state.first_name}</p>
                <p>{this.state.last_name}</p>
                <p>{this.state.adding}</p>
            </div>
            </div>

        )
    }
}

export default Form_add;