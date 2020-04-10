import React, { Component } from 'react'

import { Modal, Button } from "react-bootstrap"
class Create_user extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            savename: "",
            saveemail: "",
            saveprofile: []


        }

    }



    create_profile = () => {
        this.setState({ show: !this.state.show })
    }
    hideModal = () => {
        this.setState({ show: false })
    }
    savename = (e) => {
        this.setState({ savename: e.target.value })
    }
    saveemail = (e) => {
        //console.log("test")
        //console.log(e.target.value)
        this.setState({ saveemail: e.target.value })
    }
    saveprofile = (e) => {
        console.log(this.state.savename + " " + this.state.saveemail)
        let listData = this.state.saveprofile;
        let objData = {
            name: this.state.savename,
            email: this.state.saveemail
        }
        listData.push(objData)

        this.setState({ saveprofile: listData, show: false })
    }
    render() {
        console.log(this.state.saveprofile)
        return (
            <div>
                <button onClick={this.create_profile}>Create User</button>

                
                <Modal show={this.state.show} onHide={this.hideModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>User Profile </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                        Enter Name:
                        <input className="form-control mt-2 mb-2" placeholder="Enter Your Name" onChange={(e) => { this.savename(e) }}></input>
                        Enter Email:
                        <input className="form-control mt-2" placeholder="Enter Your Email" onChange={(e) => { this.saveemail(e) }}></input>




                    </Modal.Body>


                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.hideModal}>
                            Close
          </Button>
                        <Button variant="primary" onClick={this.saveprofile}>
                            Save Changes
          </Button>
                    </Modal.Footer>
                </Modal>

                {
                this.state.saveprofile&&this.state.saveprofile.length>0?(
                    this.state.saveprofile.map((data, index)=>{
                        return( 
                            <div className="row">
                                <div className="col-sm-3">{data.name}</div>
                                <div className="col-sm-3">{data.email}</div>
                            </div>
                        )
                    }) 
                ):""
                }
            </div>
        )
    }
}

export default Create_user;