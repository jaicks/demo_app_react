import React, { Component } from 'react'

class Form_add extends Component {
    constructor(props) {
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
        console.log(this.state.first_name + " " + this.state.last_name)
        this.setState({ adding: this.state.first_name + " " + this.state.last_name })
    }
    render() {
        return (
            <div>
                <div className="form-group">
                    <label for="first_name">First Name</label>
                    <input className="form-control" placeholder="Enter First Name" onChange={(e) => { this.handleFirstname(e) }} /></div>
                <div className="form-group">
                    <label for="last_name">Last Name</label>
                    <input className="form-control" placeholder="Enter Last Name" onChange={(e) => { this.handleLastname(e) }} /></div>
                <button className="btn btn-primary mb-4" onClick={this.handleadd}>Add</button>

                <div className="list_container">
                    <div className="list-name">{this.state.first_name}</div>
                    <div className="list-name">{this.state.last_name}</div>
                    <div className="list-name">{this.state.adding}</div>
                </div>
            </div>

        )
    }
}

export default Form_add;