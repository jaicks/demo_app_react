import React, { Component } from 'react'

class UserForm extends Component {

    constructor(props) {
        super();
        this.state = {
            name: "",
            email: "",
            mobile: "",
            city: "",
            userList: []
        }
    }
    handleName = (e) => {
        console.log(e.target.value)
        this.setState({ name: e.target.value })
    }

    handleEmail = (e) => {
        console.log(e.target.value)
        this.setState({ email: e.target.value })
    }

    handleMobile = (e) => {
        this.setState({ mobile: e.target.value })
    }

    handleCity = (e) => {
        this.setState({ city: e.target.value })
    }

    onSubmit = () => {
        let list = this.state.userList;
        let objData = {
            name: this.state.name,
            email: this.state.email,
            mobile: this.state.mobile,
            city: this.state.city
        }
        list.push(objData)
        this.setState({ userList: list })
    }
    render() {
        console.log(this.state.userList)
        return (
            <div>

                <div className="form-group">
                    <label for="name" className="sr-only" >Name</label>
                    <input className="form-control" placeholder="Enter Name" onChange={(e) => { this.handleName(e) }} />
                </div>
                <div className="form-group">
                    <label for="email" className="sr-only" >Email:</label>
                    <input className="form-control" placeholder="Enter Email" onChange={(e) => { this.handleEmail(e) }} />
                </div>
                <div className="form-group">
                    <label for="mobileno" className="sr-only" >Mobile No:</label>
                    <input className="form-control" placeholder="Enter Mobile No" onChange={(e) => { this.handleMobile(e) }} />
                </div>
                <div className="form-group">
                    <label for="city" className="sr-only">City</label>
                    <input className="form-control mb-2" placeholder="Enter City" onChange={(e) => { this.handleCity(e) }} />
                    </div>
                    
                <button className="btn btn-primary mb-4"  onClick={this.onSubmit}>Add</button>
                

                {
                    <div>{this.state.userList && this.state.userList.map((data, index) => {
                        return (
                            <div className="list_container">
                                <div className="profile"></div>
                                <div className="list-name">{data.name}</div>
                                <div className="list-email">{data.email}</div>
                                <div className="list-city">{data.city}</div>
                                <div className="list-city">{data.mobile}</div>
                            </div>

                        );
                    })}
                    </div>
                }



            </div>
        )
    }
}

export default UserForm; 
