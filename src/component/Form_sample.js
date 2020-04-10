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

                <div>Name:<input placeholder="Enter Name" onChange={(e) => { this.handleName(e) }} /></div>
                <div>Email:<input placeholder="Enter Email" onChange={(e) => { this.handleEmail(e) }} /></div>
                <div>Mobile No:<input placeholder="Enter Mobile No" onChange={(e) => { this.handleMobile(e) }} /></div>
                {/* <button onChange={this.onSubmit}>Add</button> */}

                {
                    <div>
                    <p>{this.state.name}</p>
                    <p>{this.state.email}</p>
                    <p>{this.state.Mobile}</p>
                    </div>
                    // <div>{this.state.user_List && this.state.user_List.map((data, index) => {
                    //     console.log(data,index)
                    //     return (
                    //         <div className="list_container" key={index}>
                    //             <div className="profile"></div>
                    //             <div className="list-name">{data.name}</div>
                    //             <div className="list-email">{data.email}</div>
                    //             <div className="list-city">{data.mobile}</div>
                    //         </div>

                    //     );
                    // })}
                    // </div>
                }

            </div>
        )
    }
}


export default Form_sample; 
