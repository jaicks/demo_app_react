import React, { Component } from 'react'

class Form_sample extends Component {

    constructor(props) {
        super();
        this.state = {
            name: "",
            email: "",
            Mobile: ""
        }
    }

    handleName = (e) => {
        console.log(e.target.value)
        this.setState({ name: e.target.value })
    }

    handleEmail = (e) => {
        this.setState({ email: e.target.value })
    }

    handleMobile = (e) => {
        this.setState({ Mobile: e.target.value })
    }


    onSubmit = () => {
        let list = this.state.user_List;
        let objData = {
            name: this.state.name,
            email: this.state.email,
            mobile: this.state.Mobile
        }
        list.push(objData)
        console.log(list)
        this.setState({ user_List: list })
    }
    render() {
        return (
            <div>

                <div className="form-group">
                    <label for ="name">Name</label>
                    <input className="form-control" placeholder="Enter Name" onChange={(e) => { this.handleName(e) }} /></div>
                <div className="form-group">
                    <label for ="eail"> Email</label>
                    <input className="form-control" placeholder="Enter Email" onChange={(e) => { this.handleEmail(e) }} /></div>
                <div className="form-group">
                    <label for ="mobile">Mobile Number</label>
                    <input className="form-control mb-4" placeholder="Enter Mobile No" onChange={(e) => { this.handleMobile(e) }} /></div>
                {
                    <div className="list_container">
                        <div className="list-name">{this.state.name}</div>
                        <div className="list-name">{this.state.email}</div>
                        <div className="list-name">{this.state.Mobile}</div>


                    </div>
                }
            </div>
        )
    }
}


export default Form_sample; 
